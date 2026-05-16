#!/usr/bin/env node
/**
 * Export ALL *-refresh.html pins (any calculator folder + 01_to_be_released/)
 * as 1000x1500 PNGs alongside their HTMLs.
 * Skips files that already have a matching *-1000x1500.png.
 *
 * Usage: node 00_scripts/export_refresh_all.js   (from repo root)
 *        node export_refresh_all.js               (from 00_scripts/)
 */

const puppeteer = require('puppeteer-core');
const http      = require('http');
const fs        = require('fs');
const path      = require('path');

const CHROME  = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
// __dirname is studio/scripts/, two levels below repo root (pinterest/)
const REPO    = path.resolve(__dirname, '../../');
// HTTP server root is one level above repo so URLs can be /pinterest/...
const SRV_ROOT = path.resolve(REPO, '../');
const PORT    = 8745;
const WAIT_MS = 3000;

const SCAN_DIRS = [
  'pins/staged',
  'pins/wip/barista',
  'pins/wip/coast',
  'pins/wip/fire',
  'pins/wip/flamingo',
  'pins/wip/financial_ledger',
  'pins/wip/simple_budget',
  'pins/wip/retirement-withdrawal',
];

function startServer() {
  return new Promise(resolve => {
    const server = http.createServer((req, res) => {
      const filePath = path.join(SRV_ROOT, decodeURIComponent(req.url));
      fs.readFile(filePath, (err, data) => {
        if (err) { res.writeHead(404); res.end('Not found'); return; }
        const ext  = path.extname(filePath).toLowerCase();
        const mime = { '.html': 'text/html', '.png': 'image/png', '.jpg': 'image/jpeg',
                       '.svg': 'image/svg+xml', '.css': 'text/css', '.js': 'application/javascript' };
        res.writeHead(200, { 'Content-Type': mime[ext] || 'application/octet-stream' });
        res.end(data);
      });
    });
    server.listen(PORT, () => { console.log(`Server → http://localhost:${PORT}`); resolve(server); });
  });
}

function collectFiles() {
  const results = [];
  for (const dir of SCAN_DIRS) {
    const absDir = path.join(REPO, dir);
    if (!fs.existsSync(absDir)) continue;
    for (const f of fs.readdirSync(absDir)) {
      if (!f.endsWith('-refresh.html')) continue;
      const absHtml = path.join(absDir, f);
      const pngName = f.replace('.html', '-1000x1500.png');
      const absPng  = path.join(absDir, pngName);
      if (fs.existsSync(absPng)) continue; // already exported
      // URL path relative to SRV_ROOT
      const relDir  = path.relative(SRV_ROOT, absDir).replace(/\\/g, '/');
      results.push({ absHtml, absPng, url: `http://localhost:${PORT}/${relDir}/${f}` });
    }
  }
  return results;
}

(async () => {
  const files = collectFiles();
  if (!files.length) { console.log('All PNGs already up to date.'); process.exit(0); }
  console.log(`Found ${files.length} refresh pins to export.\n`);

  const server  = await startServer();
  const browser = await puppeteer.launch({
    executablePath: CHROME,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    headless: true,
  });

  let ok = 0, fail = 0;

  for (const { absHtml, absPng, url } of files) {
    const label = path.relative(REPO, absHtml);
    process.stdout.write(`  ${label} → `);
    try {
      const page = await browser.newPage();
      await page.setViewport({ width: 1040, height: 1540, deviceScaleFactor: 1 });
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 20000 });
      await new Promise(r => setTimeout(r, WAIT_MS));

      const pinEl = await page.$('.pin-wrap > div');
      if (!pinEl) {
        console.log('SKIP (no .pin-wrap > div)');
        fail++;
        await page.close();
        continue;
      }

      await pinEl.screenshot({ path: absPng, type: 'png' });
      const kb = Math.round(fs.statSync(absPng).size / 1024);
      console.log(`saved (${kb} KB)`);
      ok++;
      await page.close();
    } catch (err) {
      console.log(`ERROR: ${err.message}`);
      fail++;
    }
  }

  await browser.close();
  server.close();
  console.log(`\nDone: ${ok} saved, ${fail} failed.`);
})();
