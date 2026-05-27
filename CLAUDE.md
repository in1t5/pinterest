# Claude Code Notes — pinterest

Pinterest pin creation and publishing for **Time And Money Tree** blog.

---

## Rules

**Never commit or push without explicit instruction from the user.**

---

## Repo Structure

```
studio/
  scripts/    ← automation scripts (export, post, OAuth)
  templates/  ← CSS/div pin templates (pin-01 to pin-40 etc.) + shared CSS
  assets/     ← logo PNGs (logo_brownish_framed_no_text_2501x2500.png, only_tree.png)
  briefs/     ← brief files per calculator (<calculator>.md)
pins/
  staged/     ← pins ready to publish: .html + .png (1000×1500) + .json. Do not modify.
  released/   ← archive of published pins: released/<calculator>/(YYYYMMDD_pin_name.png)
  wip/        ← WIP calculator folders (barista/, coast/, fire/, flamingo/, etc.)
```

| Path | Purpose |
|------|---------|
| `pins/staged/` | Pins ready to publish — `.html` source + `.png` (1000×1500) + `.json`. **Do not modify.** |
| `pins/released/<calculator>/YYYYMMDD/` | Archive of published pins, organised by calculator then release date. |
| `pins/wip/<calculator>/` | WIP HTMLs for each calculator — not yet staged for release. |
| `studio/scripts/` | All automation scripts (export, post, OAuth). |
| `studio/templates/` | CSS/div pin templates + shared CSS files. |
| `studio/assets/` | Logo PNG files. |
| `studio/briefs/` | Brief files per calculator. |
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

`.env` lives at `studio/scripts/.env`. Scripts load it automatically via `load_env()`.

---

## Pin Workflow

1. **Brief** → add entry to `studio/briefs/<calculator>.md`, mark `📝` in PIN_TRACKER
2. **Build** → create `.html` pin using pin template pattern (canvas 1000×1500, footer at y=1395, `only_tree.png` logo at sz=72), mark `🔨`
3. **Export** → run `node studio/scripts/export_pins.js` to render all HTMLs to PNGs headlessly, mark `📸`
4. **Stage** → place `.html` + `.png` + `.json` in `pins/staged/`; mark `📅 YYYY-MM-DD` in PIN_TRACKER
5. **Publish** → `python3 studio/scripts/post_pin.py <path-to.json>` — posts via Pinterest API v5, auto-moves files to `pins/released/`
6. **Record** → mark `🚀 YYYY-MM-DD` in PIN_TRACKER, add row to Release Log

---

## Automated PNG Export

All dependencies live in `studio/scripts/`. **All export scripts must be run from `studio/scripts/`** — `node_modules` (puppeteer-core) resolves from the script's own directory.

```bash
cd studio/scripts && npm install   # first time only
node export_pins.js                 # exports all HTMLs in pins/staged/ to PNGs
node export_refresh_all.js          # exports all *-refresh.html PNGs across wip + staged
```

Requires: Node.js + Google Chrome at `/Applications/Google Chrome.app/`.
Dep: `puppeteer-core ^25.0.2`.

### Two pin types — different export methods

| Pin type | Capture method | Selector |
|---|---|---|
| **Canvas-based** (most WIP pins) | `canvas.toDataURL('image/png')` | `#c` |
| **Div-based** (pin-04 CSS style) | `element.screenshot()` | `.pin-wrap > div` |

### Regen a single WIP pin

Write a temp script to `studio/scripts/`, run it, delete it. Must live there for `puppeteer-core` to resolve.

**Canvas-based pin:**
```js
// studio/scripts/_tmp.js
const puppeteer=require('puppeteer-core'),http=require('http'),fs=require('fs'),path=require('path');
const CHROME='/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const ROOT=path.resolve(__dirname,'../..'),PORT=8750;
const HTML_REL='pins/wip/<calc>/<filename>.html';
const PNG_OUT=path.join(ROOT,HTML_REL.replace('.html','-1000x1500.png'));
(async()=>{
  const server=await new Promise(r=>{const s=http.createServer((req,res)=>{const fp=path.join(ROOT,decodeURIComponent(req.url));fs.readFile(fp,(e,d)=>{if(e){res.writeHead(404);res.end();return;}const m={'.html':'text/html','.png':'image/png','.css':'text/css','.js':'application/javascript'};res.writeHead(200,{'Content-Type':m[path.extname(fp)]||'application/octet-stream'});res.end(d);});});s.listen(PORT,()=>r(s));});
  const browser=await puppeteer.launch({executablePath:CHROME,args:['--no-sandbox'],headless:true});
  const page=await browser.newPage();
  await page.setViewport({width:1200,height:900,deviceScaleFactor:1});
  await page.goto('http://localhost:'+PORT+'/'+HTML_REL,{waitUntil:'networkidle0',timeout:15000});
  await new Promise(r=>setTimeout(r,3000));
  const data=await page.evaluate(()=>{const c=document.getElementById('c');return c?c.toDataURL('image/png').split(',')[1]:null;});
  if(!data){console.log('ERROR: no canvas#c');process.exit(1);}
  fs.writeFileSync(PNG_OUT,Buffer.from(data,'base64'));
  console.log('Saved: '+PNG_OUT+' ('+Math.round(fs.statSync(PNG_OUT).size/1024)+' KB)');
  await browser.close();server.close();
})();
```

**Div-based pin** (uses `pins.css`, `.pin-wrap > div` structure):
```js
// studio/scripts/_tmp.js  — same boilerplate, replace capture block:
  const el=await page.$('.pin-wrap > div');
  if(!el){console.log('ERROR: no .pin-wrap > div');process.exit(1);}
  await el.screenshot({path:PNG_OUT,type:'png'});
```

Run and clean up:
```bash
cd studio/scripts
node _tmp.js
rm _tmp.js
```

---

## Publishing a Pin

```bash
python3 studio/scripts/post_pin.py pins/staged/coast-fire-01-direct-utility-hero.json
# or scheduled:
python3 studio/scripts/post_pin.py pins/staged/coast-fire-01-direct-utility-hero.json 2026-05-20
```

On success: auto-moves `.html` + `.png` + `.json` to `pins/released/<calculator>/YYYYMMDD/`.

Publishing rate: **7 pins/day**. Schedule in PIN_TRACKER Publishing Schedule section.

---

## Pin JSON Metadata

Each pin in `pins/staged/` needs a `.json` alongside the `.png`:

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
- Logo: `studio/assets/logo_brownish_framed_no_text_2501x2500.png`. Reference paths by location:
  - `studio/templates/*.html` → `../assets/logo_brownish_framed_no_text_2501x2500.png`
  - `pins/staged/*.html` → `../../studio/assets/logo_brownish_framed_no_text_2501x2500.png`
  - `pins/wip/<calc>/*.html` → `../../../studio/assets/logo_brownish_framed_no_text_2501x2500.png`
- 30 slot types per calculator (Direct Utility, Question Hook, Before/After, Step Ladder, Myth-Buster, Mockup, Educational) — see PIN_TRACKER.md Template Slots table

### Top border clearance standard

All text (and the top edge of any drawn element) must start at **y ≥ 20** — never less. This ensures a visible margin at the top of the exported 1000×1500 PNG. Typical fix when the top section is a coloured bar: extend the bar height and shift all texts inside it down by the same delta so internal gaps are preserved; also update `startY` of the element below the bar to match.

### Canvas display standard

Canvas attribute dimensions are always `width="1000" height="1500"` (used by export). CSS must NOT set fixed pixel dimensions — the viewport-fit JS handles display size. Required pattern in every pin HTML:

**CSS** — no `width`/`height` on canvas:
```css
canvas{display:block;border-radius:8px;box-shadow:0 28px 80px rgba(0,0,0,.7)}
```

**JS** — insert before the `bSave` event listener:
```js
function fitCanvas(){
  const scale=Math.min(1,(window.innerHeight-140)/1500,(window.innerWidth-40)/1000);
  canvas.style.width=Math.round(1000*scale)+'px';
  canvas.style.height=Math.round(1500*scale)+'px';
}
fitCanvas();
window.addEventListener('resize',fitCanvas);
```

This shows the full pin in any browser window without scrolling while keeping the exported PNG at exactly 1000×1500.

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
| `studio/scripts/list_boards.py` | List all Pinterest boards for the account |
| `studio/scripts/create_boards.py` | Create new boards via API |
| `studio/scripts/oauth_get_token.py` | OAuth flow to refresh access token |
| `studio/scripts/export_templates.js` | Export studio/templates/ PNGs |
| `studio/scripts/export_pins.js` | Export pins/staged/ PNGs |
| `studio/scripts/export_refresh_all.js` | Export all -refresh.html PNGs across wip + staged |
