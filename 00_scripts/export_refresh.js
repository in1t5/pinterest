#!/usr/bin/env node
/**
 * Export all *-refresh.html pins in 01_to_be_released/batch_1/ as 1000x1500 PNGs.
 * Div-based pins — screenshots the inner 1000x1500 div via element.screenshot().
 *
 * Usage: node scripts/export_refresh.js
 */

const puppeteer = require('puppeteer-core');
const http      = require('http');
const fs        = require('fs');
const path      = require('path');

const CHROME   = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const ROOT     = path.resolve(__dirname, '../../');
const PIN_DIR  = path.join(ROOT, 'pinterest/01_to_be_released/batch_1');
const PORT     = 8744;
const WAIT_MS  = 3000; // time for Google Fonts + SVG logo to load

function startServer() {
  return new Promise(resolve => {
    const server = http.createServer((req, res) => {
      const filePath = path.join(ROOT, decodeURIComponent(req.url));
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

(async () => {
  const htmlFiles = fs.readdirSync(PIN_DIR)
    .filter(f => f.endsWith('-refresh.html'))
    .sort();

  if (!htmlFiles.length) { console.log('No *-refresh.html files found.'); process.exit(0); }
  console.log(`Found ${htmlFiles.length} refresh pins.\n`);

  const server  = await startServer();
  const browser = await puppeteer.launch({
    executablePath: CHROME,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    headless: true,
  });

  let ok = 0, fail = 0;

  for (const htmlFile of htmlFiles) {
    const pngName = htmlFile.replace('.html', '-1000x1500.png');
    const pngPath = path.join(PIN_DIR, pngName);
    const url     = `http://localhost:${PORT}/pinterest/01_to_be_released/batch_1/${htmlFile}`;

    process.stdout.write(`  ${htmlFile} → `);
    try {
      const page = await browser.newPage();
      // 1040×1540 makes fit() compute scale=1 exactly (40px = 2×20px body padding)
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

      await pinEl.screenshot({ path: pngPath, type: 'png' });
      const kb = Math.round(fs.statSync(pngPath).size / 1024);
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
