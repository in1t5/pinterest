#!/usr/bin/env node
/**
 * Export all pin HTMLs in 01_to_be_released/ as 1000x1500 PNGs.
 * Uses system Chrome via puppeteer-core + a local HTTP server to avoid
 * file:// CORS restrictions on local image loads.
 *
 * Usage: node pinterest/scripts/export_pins.js
 */

const puppeteer = require('puppeteer-core');
const http      = require('http');
const fs        = require('fs');
const path      = require('path');

const CHROME   = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const ROOT     = path.resolve(__dirname, '../../');
const PIN_DIR  = path.join(ROOT, 'pinterest/01_to_be_released');
const PORT     = 8743;
const WAIT_MS  = 2500; // time for fonts + logo image to load and render

// ── Local HTTP server ─────────────────────────────────────────────────────────

function startServer() {
  return new Promise(resolve => {
    const server = http.createServer((req, res) => {
      const filePath = path.join(ROOT, decodeURIComponent(req.url));
      fs.readFile(filePath, (err, data) => {
        if (err) { res.writeHead(404); res.end('Not found'); return; }
        const ext = path.extname(filePath).toLowerCase();
        const mime = { '.html':'text/html', '.png':'image/png', '.jpg':'image/jpeg',
                       '.svg':'image/svg+xml', '.css':'text/css', '.js':'application/javascript' };
        res.writeHead(200, { 'Content-Type': mime[ext] || 'application/octet-stream' });
        res.end(data);
      });
    });
    server.listen(PORT, () => { console.log(`Server on http://localhost:${PORT}`); resolve(server); });
  });
}

// ── Main ──────────────────────────────────────────────────────────────────────

(async () => {
  const htmlFiles = fs.readdirSync(PIN_DIR)
    .filter(f => f.endsWith('.html'))
    .sort();

  if (!htmlFiles.length) { console.log('No HTML files found.'); process.exit(0); }

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
    const url     = `http://localhost:${PORT}/pinterest/01_to_be_released/${htmlFile}`;

    process.stdout.write(`  ${htmlFile} → `);
    try {
      const page = await browser.newPage();
      await page.setViewport({ width: 1200, height: 800, deviceScaleFactor: 1 });
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 15000 });
      await new Promise(r => setTimeout(r, WAIT_MS));

      const pngData = await page.evaluate(() => {
        const canvas = document.getElementById('c');
        if (!canvas) return null;
        return canvas.toDataURL('image/png').split(',')[1];
      });

      if (!pngData) { console.log('SKIP (no canvas#c)'); fail++; await page.close(); continue; }

      fs.writeFileSync(pngPath, Buffer.from(pngData, 'base64'));
      console.log(`saved (${Math.round(fs.statSync(pngPath).size / 1024)} KB)`);
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
