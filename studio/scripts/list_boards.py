#!/usr/bin/env python3
"""List all Pinterest boards with their IDs. Run this once to find board IDs for pin.json files."""

import os, sys, json
from pathlib import Path

try:
    import requests
except ImportError:
    sys.exit("Missing: pip install requests")

def load_env():
    env_file = Path(__file__).parent.parent / ".env"
    if env_file.exists():
        for line in env_file.read_text().splitlines():
            line = line.strip()
            if line and not line.startswith("#") and "=" in line:
                k, v = line.split("=", 1)
                os.environ.setdefault(k.strip(), v.strip())

load_env()
token = os.environ.get("PINTEREST_ACCESS_TOKEN")
if not token:
    sys.exit("Set PINTEREST_ACCESS_TOKEN in pinterest/.env")

resp = requests.get(
    "https://api.pinterest.com/v5/boards",
    headers={"Authorization": f"Bearer {token}"},
    params={"page_size": 100},
)

if resp.status_code != 200:
    sys.exit(f"API error {resp.status_code}: {resp.text}")

boards = resp.json().get("items", [])
print(f"\n{'Board Name':<45} {'Board ID'}")
print("-" * 70)
for b in boards:
    print(f"{b['name']:<45} {b['id']}")
print()
