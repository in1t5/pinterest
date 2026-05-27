#!/usr/bin/env python3
"""
Pinterest OAuth 2.0 token generator with write scopes.

1. Add http://localhost:8080/callback to your app's Redirect URIs in the dev console
2. Run: python oauth_get_token.py
3. Browser opens Pinterest auth page — approve it
4. Token is saved to pinterest/.env automatically

Required scopes: boards:read boards:write pins:read pins:write user_accounts:read
"""

import os, sys, json, webbrowser, urllib.parse
from pathlib import Path
from http.server import HTTPServer, BaseHTTPRequestHandler
from urllib.parse import urlparse, parse_qs

try:
    import requests
except ImportError:
    sys.exit("Missing: pip install requests")

# ── Credentials ───────────────────────────────────────────────────────────────

def load_env():
    env_file = Path(__file__).parent / ".env"
    if env_file.exists():
        for line in env_file.read_text().splitlines():
            line = line.strip()
            if line and not line.startswith("#") and "=" in line:
                k, v = line.split("=", 1)
                os.environ.setdefault(k.strip(), v.strip())

load_env()

APP_ID     = os.environ.get("PINTEREST_APP_ID")
APP_SECRET = os.environ.get("PINTEREST_APP_SECRET")

if not APP_ID or not APP_SECRET:
    sys.exit("Set PINTEREST_APP_ID and PINTEREST_APP_SECRET in pinterest/.env")

REDIRECT_URI = "http://localhost:8080/callback"
SCOPES = "boards:read,boards:write,pins:read,pins:write,user_accounts:read"

# ── Build auth URL ────────────────────────────────────────────────────────────

auth_url = (
    "https://www.pinterest.com/oauth/"
    f"?client_id={APP_ID}"
    f"&redirect_uri={urllib.parse.quote(REDIRECT_URI, safe='')}"
    "&response_type=code"
    f"&scope={urllib.parse.quote(SCOPES, safe='')}"
)

print(f"\nOpening Pinterest auth URL in browser...")
print(f"\n{auth_url}\n")
print("If browser doesn't open, copy-paste the URL above.")
webbrowser.open(auth_url)

# ── Local callback server ─────────────────────────────────────────────────────

captured_code = [None]

class Handler(BaseHTTPRequestHandler):
    def do_GET(self):
        qs = parse_qs(urlparse(self.path).query)
        if "code" in qs:
            captured_code[0] = qs["code"][0]
            self.send_response(200)
            self.send_header("Content-Type", "text/html")
            self.end_headers()
            self.wfile.write(b"<h2>Authorized! You can close this tab.</h2>")
        else:
            self.send_response(400)
            self.end_headers()
            error = qs.get("error", ["unknown"])[0]
            self.wfile.write(f"<h2>Error: {error}</h2>".encode())

    def log_message(self, *_):
        pass  # suppress request logs

print("Waiting for Pinterest to redirect to localhost:8080 ...")
server = HTTPServer(("localhost", 8080), Handler)
server.handle_request()  # one request only

code = captured_code[0]
if not code:
    sys.exit("No auth code received.")

print(f"Auth code received. Exchanging for access token...")

# ── Exchange code for token ───────────────────────────────────────────────────

resp = requests.post(
    "https://api.pinterest.com/v5/oauth/token",
    auth=(APP_ID, APP_SECRET),
    data={
        "grant_type":   "authorization_code",
        "code":         code,
        "redirect_uri": REDIRECT_URI,
    },
    headers={"Content-Type": "application/x-www-form-urlencoded"},
)

if resp.status_code not in (200, 201):
    print(f"\nToken exchange failed {resp.status_code}:")
    print(resp.text)
    sys.exit(1)

token_data   = resp.json()
access_token = token_data.get("access_token")
token_type   = token_data.get("token_type", "bearer")
expires_in   = token_data.get("expires_in", "unknown")
scopes_got   = token_data.get("scope", "")

print(f"\nToken received!")
print(f"  Type:    {token_type}")
print(f"  Expires: {expires_in}s")
print(f"  Scopes:  {scopes_got}")

# ── Save to .env ──────────────────────────────────────────────────────────────

env_path = Path(__file__).parent / ".env"
lines = env_path.read_text().splitlines() if env_path.exists() else []

updated = False
new_lines = []
for line in lines:
    if line.startswith("PINTEREST_ACCESS_TOKEN="):
        new_lines.append(f"PINTEREST_ACCESS_TOKEN={access_token}")
        updated = True
    else:
        new_lines.append(line)

if not updated:
    new_lines.append(f"PINTEREST_ACCESS_TOKEN={access_token}")

env_path.write_text("\n".join(new_lines) + "\n")
print(f"\nSaved to {env_path}")
print("\nNow run: python create_boards.py")
