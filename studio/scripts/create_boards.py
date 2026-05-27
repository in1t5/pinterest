#!/usr/bin/env python3
"""
Create all recommended Pinterest boards for timeandmoneytree.com.

Usage:
  python create_boards.py           # create all boards
  python create_boards.py --dry-run # print board names only, no API calls

Prints a table of board name + board ID after creation.
"""

import os, sys, json
from pathlib import Path

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
TOKEN = os.environ.get("PINTEREST_ACCESS_TOKEN")
if not TOKEN:
    sys.exit("Set PINTEREST_ACCESS_TOKEN in pinterest/.env")

HEADERS = {"Authorization": f"Bearer {TOKEN}", "Content-Type": "application/json"}
API = "https://api.pinterest.com/v5"

# ── Board definitions ─────────────────────────────────────────────────────────

BOARDS = [
    {
        "name": "FIRE Calculator",
        "description": "FIRE number calculators for financial independence retire early planning. Includes classic FIRE, Barista FIRE, Coast FIRE, and Flamingo FIRE calculators.",
        "privacy": "PUBLIC",
    },
    {
        "name": "Budget Calculator",
        "description": "Free budget calculators for personal finance tracking. Monthly budget templates, expense tracking, and financial planning tools.",
        "privacy": "PUBLIC",
    },
    {
        "name": "Coast FIRE Calculator",
        "description": "Coast FIRE calculator tools to find your Coast FIRE number and the age at which you can stop investing and coast to retirement.",
        "privacy": "PUBLIC",
    },
    {
        "name": "Financial Ledger",
        "description": "Digital financial ledger and net worth tracker. Track income, expenses, assets, and liabilities in one place.",
        "privacy": "PUBLIC",
    },
    {
        "name": "Retirement Income Planning",
        "description": "Retirement income planning tools and calculators. Withdrawal strategies, safe withdrawal rates, and retirement portfolio planning.",
        "privacy": "PUBLIC",
    },
    {
        "name": "Budgeting for Beginners",
        "description": "Simple budgeting tools and tips for beginners. Learn to track spending, set savings goals, and take control of your finances.",
        "privacy": "PUBLIC",
    },
    {
        "name": "Barista FIRE",
        "description": "Barista FIRE calculator and resources for planning your part-time path to full retirement. Find your Barista FIRE number.",
        "privacy": "PUBLIC",
    },
    {
        "name": "Retirement Withdrawal Calculator",
        "description": "Retirement withdrawal strategy calculators. Compare FIFO, 4% rule, bucket strategy, and dynamic withdrawal approaches.",
        "privacy": "PUBLIC",
    },
]

# ── Dry run ───────────────────────────────────────────────────────────────────

dry_run = "--dry-run" in sys.argv
if dry_run:
    print("\nDRY RUN — no API calls\n")
    print(f"{'Board Name':<45} {'Description[:50]'}")
    print("-" * 100)
    for b in BOARDS:
        print(f"{b['name']:<45} {b['description'][:50]}")
    print()
    sys.exit(0)

# ── Create boards ─────────────────────────────────────────────────────────────

results = []
print(f"\nCreating {len(BOARDS)} boards...\n")

for b in BOARDS:
    payload = {
        "name":        b["name"],
        "description": b["description"],
        "privacy":     b["privacy"],
    }
    resp = requests.post(f"{API}/boards", headers=HEADERS, json=payload)

    if resp.status_code in (200, 201):
        data = resp.json()
        board_id = data.get("id", "unknown")
        results.append((b["name"], board_id))
        print(f"  OK  {b['name']:<43} {board_id}")
    elif resp.status_code == 409:
        print(f"  -- SKIP (already exists): {b['name']}")
        results.append((b["name"], "ALREADY_EXISTS"))
    else:
        print(f"  ERR {b['name']}: {resp.status_code} {resp.text}")
        results.append((b["name"], f"ERROR_{resp.status_code}"))

# ── Summary table ─────────────────────────────────────────────────────────────

print(f"\n{'Board Name':<45} {'Board ID'}")
print("-" * 80)
for name, bid in results:
    print(f"{name:<45} {bid}")
print("\nCopy board IDs into your pin.json files (board_id field).")
print("Run list_boards.py any time to see all boards + IDs.\n")
