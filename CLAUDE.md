# Claude Code Notes — pinterest

Pinterest pin creation and publishing for **Time And Money Tree** blog.

---

## Repo Structure

| Path | Purpose |
|------|---------|
| `01_to_be_released/` | Pins ready to publish — `.html` source + `.png` (1000×1500) + `.json`. **Do not modify.** |
| `02_released/<calculator>/YYYYMMDD/` | Archive of published pins, organised by calculator then release date. Move `.html` + `.png` + `.json` here after release. |
| `briefs/` | Brief files per calculator (`briefs/<calculator>.md`). |
| `barista/`, `coast/`, `fire/`, etc. | WIP HTMLs for each calculator — not yet staged for release. |
| `scripts/` | All automation scripts (export, post, OAuth). |
| `PIN_TRACKER.md` | Source of truth — tracks status of all 210 planned pins + release log. |
| `keywords.csv` | Pinterest keyword research. |
| `master_prompt_claude.md` | Prompt template for building pins with Claude. |
| `master_prompt_gpt.md` | Prompt template for building pins with GPT. |
| `.env` | API credentials — **never commit**. |

---

## Credentials (`.env`)

```
PINTEREST_ACCESS_TOKEN=...
PINTEREST_APP_ID=...
PINTEREST_APP_SECRET=...
```

`.env` lives at repo root. Scripts load it automatically via `load_env()`.

---

## Pin Workflow

1. **Brief** → add entry to `briefs/<calculator>.md`, mark `📝` in PIN_TRACKER
2. **Build** → create `.html` pin using pin template pattern (canvas 1000×1500, footer at y=1395, `only_tree.png` logo at sz=72), mark `🔨`
3. **Export** → run `node scripts/export_pins.js` to render all HTMLs to PNGs headlessly, mark `📸`
4. **Stage** → place `.html` + `.png` + `.json` in `01_to_be_released/`; mark `📅 YYYY-MM-DD` in PIN_TRACKER
5. **Publish** → `python3 scripts/post_pin.py <path-to.json>` — posts via Pinterest API v5, auto-moves files to `02_released/`
6. **Record** → mark `🚀 YYYY-MM-DD` in PIN_TRACKER, add row to Release Log

---

## Automated PNG Export

All dependencies live in `scripts/`:

```bash
cd scripts && npm install   # first time only
node export_pins.js          # exports all HTMLs in 01_to_be_released/ to PNGs
```

Requires: Node.js + Google Chrome at `/Applications/Google Chrome.app/`.
Dep: `puppeteer-core ^25.0.2`.

---

## Publishing a Pin

```bash
python3 scripts/post_pin.py 01_to_be_released/coast-fire-01-direct-utility-hero.json
# or scheduled:
python3 scripts/post_pin.py 01_to_be_released/coast-fire-01-direct-utility-hero.json 2026-05-20
```

On success: auto-moves `.html` + `.png` + `.json` to `02_released/<calculator>/YYYYMMDD/`.

Publishing rate: **7 pins/day**. Schedule in PIN_TRACKER Publishing Schedule section.

---

## Pin JSON Metadata

Each pin in `01_to_be_released/` needs a `.json` alongside the `.png`:

```json
{
  "tracker_id": "BARISTA-01",
  "calculator": "barista-fire",
  "board_id": "697213654753005318",
  "board_section_id": "",
  "title": "...",
  "description": "... · keyword · keyword",
  "link": "https://timeandmoneytree.com/<calculator>/",
  "alt_text": "...",
  "image": "filename-1000x1500.png"
}
```

---

## Board IDs

| Calculator | Board Name | Board ID |
|---|---|---|
| barista-fire | Barista FIRE | `697213654753005318` |
| coast-fire | Coast FIRE Calculator | `697213654753005314` |
| financial-ledger | Financial Ledger | `697213654753005315` |
| fire / flamingo-fire | FIRE Calculator | `697213654753005312` |
| flamingo-fire | Retirement Income Planning | `697213654753005316` |
| simple-budget | Budget Calculator | `697213654753005313` |
| simple-budget | Budgeting for Beginners | `697213654753005317` |
| retirement-withdrawal | Retirement Withdrawal Calculator | `697213654753005319` |

---

## Pin Template Pattern

- Canvas: 1000×1500 px HTML
- Footer starts at y=1395
- Logo: `only_tree.png` at sz=72, white circle background on dark footer
- Logo source: `/Users/o2knh9m/Synology Daten/blog/3_photos/danielas_arbeiten_icons/logo/only_tree.png`
- 30 slot types per calculator (Direct Utility, Question Hook, Before/After, Step Ladder, Myth-Buster, Mockup, Educational) — see PIN_TRACKER.md Template Slots table

---

## Global Pin Numbers

| Calculator | Range |
|---|---|
| COAST | 001–030 |
| FIRE | 031–060 |
| BARISTA | 061–090 |
| FLAMINGO | 091–120 |
| LEDGER | 121–150 |
| BUDGET | 151–180 |
| WITHDRAW | 181–210 |

---

## PIN_TRACKER Status Icons

`—` not started · `📝` brief done · `🔨` HTML built · `📸` PNG exported · `📅 YYYY-MM-DD` scheduled · `🚀 YYYY-MM-DD` live on Pinterest

---

## Other Scripts

| Script | Purpose |
|---|---|
| `scripts/list_boards.py` | List all Pinterest boards for the account |
| `scripts/create_boards.py` | Create new boards via API |
| `scripts/oauth_get_token.py` | OAuth flow to refresh access token |
