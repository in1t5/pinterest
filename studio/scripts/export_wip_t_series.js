#!/usr/bin/env node
/**
 * Export all wip pins matching *-t[0-9]*.html as 1000x1500 PNGs.
 * Saves PNG alongside the HTML. Overwrites existing.
 *
 * Usage: node studio/scripts/export_wip_t_series.js
 */

const puppeteer = require('puppeteer-core');
const http      = require('http');
const fs        = require('fs');
const path      = require('path');

const CHROME   = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const REPO     = path.resolve(__dirname, '../../');
const SRV_ROOT = path.resolve(REPO, '../');
const PORT     = 8746;
const WAIT_MS  = 2500;

const SCAN_DIRS = [
  'pins/wip/flamingo',
  'pins/wip/retirement-withdrawal',
  'pins/wip/simple_budget',
  'pins/wip/fire',
  'pins/wip/financial_ledger',
];

function startServer() {
  return new Promise(resolve => {
    const server = http.createServer((req, res) => {
      const filePath = path.join(SRV_ROOT, decodeURIComponent(req.url));
      fs.readFile(filePath, (err, data) => {
        if (err) { res.writeHead(404); res.end('Not found'); return; }
        const ext  = path.extname(filePath).toLowerCase();
        const mime = { '.html':'text/html', '.png':'image/png', '.css':'text/css',
                       '.js':'application/javascript', '.svg':'image/svg+xml' };
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
    for (const f of fs.readdirSync(absDir).sort()) {
      if (!/\-t\d+\-/.test(f) || !f.endsWith('.html')) continue;
      const absHtml = path.join(absDir, f);
      const pngName = f.replace('.html', '-1000x1500.png');
      const absPng  = path.join(absDir, pngName);
      const relDir  = path.relative(SRV_ROOT, absDir).replace(/\\/g, '/');
      results.push({ absHtml, absPng, label: path.relative(REPO, absHtml), url: `http://localhost:${PORT}/${relDir}/${f}` });
    }
  }
  return results;
}

(async () => {
  const files = collectFiles();
  if (!files.length) { console.log('No t-series HTML files found.'); process.exit(0); }
  console.log(`Exporting ${files.length} pins...\n`);

  const server  = await startServer();
  const browser = await puppeteer.launch({
    executablePath: CHROME,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    headless: true,
  });

  let ok = 0, fail = 0;

  for (const { absHtml, absPng, label, url } of files) {
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
      console.log(`saved (${Math.round(fs.statSync(absPng).size / 1024)} KB)`);
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
