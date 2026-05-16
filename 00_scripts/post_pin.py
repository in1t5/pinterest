#!/usr/bin/env python3
"""
Post or schedule a Pinterest pin from a 01_to_be_released folder.

Usage:
  python post_pin.py <path-to-pin.json>             # post immediately
  python post_pin.py <path-to-pin.json> 2026-05-20  # schedule (ISO date or datetime)

On success: moves the PNG + JSON to pinterest/02_released/<calculator>/YYYYMMDD/
"""

import os, sys, json, base64, shutil, datetime, re
from pathlib import Path

try:
    import requests
except ImportError:
    sys.exit("Missing: pip install requests")

# ── Credentials ───────────────────────────────────────────────────────────────

def load_env():
    env_file = Path(__file__).parent.parent / ".env"
    if env_file.exists():
        for line in env_file.read_text().splitlines():
            line = line.strip()
            if line and not line.startswith("#") and "=" in line:
                k, v = line.split("=", 1)
                os.environ.setdefault(k.strip(), v.strip())

load_env()
TOKEN = os.environ.get("PINTEREST_ACCESS_TOKEN")
if not TOKEN:
    sys.exit("Set PINTEREST_ACCESS_TOKEN in pinterest/.env")

HEADERS = {"Authorization": f"Bearer {TOKEN}", "Content-Type": "application/json"}
API = "https://api.pinterest.com/v5"

# ── Args ──────────────────────────────────────────────────────────────────────

if len(sys.argv) < 2:
    sys.exit(__doc__)

pin_json_path = Path(sys.argv[1]).resolve()
if not pin_json_path.exists():
    sys.exit(f"Not found: {pin_json_path}")

publish_date = None
if len(sys.argv) >= 3:
    raw = sys.argv[2]
    if re.match(r"^\d{4}-\d{2}-\d{2}$", raw):
        raw = raw + "T10:00:00"
    publish_date = raw  # Pinterest accepts ISO 8601

# ── Load metadata ─────────────────────────────────────────────────────────────

meta = json.loads(pin_json_path.read_text())

required = ["board_id", "title", "description", "link", "alt_text", "image"]
missing = [k for k in required if not meta.get(k)]
if missing:
    sys.exit(f"pin.json missing fields: {missing}")

image_path = (pin_json_path.parent / meta["image"]).resolve()
if not image_path.exists():
    sys.exit(f"Image not found: {image_path}")

# ── Encode image ──────────────────────────────────────────────────────────────

print(f"Reading image: {image_path.name} ({image_path.stat().st_size // 1024} KB)")
image_b64 = base64.b64encode(image_path.read_bytes()).decode()

# ── Build payload ─────────────────────────────────────────────────────────────

payload = {
    "board_id":    meta["board_id"],
    "title":       meta["title"][:100],       # Pinterest max 100 chars
    "description": meta["description"][:500], # Pinterest max 500 chars
    "link":        meta["link"],
    "alt_text":    meta["alt_text"][:500],
    "media_source": {
        "source_type":  "image_base64",
        "content_type": "image/png",
        "data":         image_b64,
    },
}

if meta.get("board_section_id"):
    payload["board_section_id"] = meta["board_section_id"]

if publish_date:
    payload["publish_date"] = publish_date
    print(f"Scheduling for: {publish_date}")
else:
    print("Posting immediately")

# ── Post to Pinterest ─────────────────────────────────────────────────────────

print("Posting to Pinterest API...")
resp = requests.post(f"{API}/pins", headers=HEADERS, json=payload)

if resp.status_code not in (200, 201):
    print(f"\nAPI error {resp.status_code}:")
    print(resp.text)
    sys.exit(1)

pin_data = resp.json()
pin_id  = pin_data.get("id", "unknown")
pin_url = f"https://pinterest.com/pin/{pin_id}/"
print(f"\nSuccess! Pin ID: {pin_id}")
print(f"URL: {pin_url}")

# ── Move files to 02_released ─────────────────────────────────────────────────

calculator = meta.get("calculator", "unknown")
today = datetime.date.today().strftime("%Y%m%d")
released_dir = Path(__file__).parent.parent / "02_released" / calculator / today
released_dir.mkdir(parents=True, exist_ok=True)

for src in [image_path, pin_json_path]:
    dst = released_dir / src.name
    shutil.move(str(src), str(dst))
    print(f"Moved: {src.name} → 02_released/{calculator}/{today}/")

print(f"\nDone. Update PIN_TRACKER.md: mark {meta.get('tracker_id', '?')} as 🚀 {datetime.date.today()}")
