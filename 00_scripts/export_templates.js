#!/usr/bin/env node
/**
 * Export all CSS-div pin templates in design/templates/ as 1000x1500 PNGs.
 * Screenshots the .pin element directly (not canvas).
 *
 * Usage: node export_templates.js
 */

const puppeteer = require('puppeteer-core');
const http      = require('http');
const fs        = require('fs');
const path      = require('path');

const CHROME       = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const ROOT         = path.resolve(__dirname, '../../');
const TEMPLATE_DIR = path.join(ROOT, 'pinterest/design/templates');
const PORT         = 8744;
const WAIT_MS      = 2500;

function startServer() {
  return new Promise(resolve => {
    const server = http.createServer((req, res) => {
      const filePath = path.join(ROOT, decodeURIComponent(req.url));
      fs.readFile(filePath, (err, data) => {
        if (err) { res.writeHead(404); res.end('Not found'); return; }
        const ext  = path.extname(filePath).toLowerCase();
        const mime = { '.html':'text/html', '.png':'image/png', '.jpg':'image/jpeg',
                       '.svg':'image/svg+xml', '.css':'text/css', '.js':'application/javascript' };
        res.writeHead(200, { 'Content-Type': mime[ext] || 'application/octet-stream' });
        res.end(data);
      });
    });
    server.listen(PORT, () => { console.log(`Server on http://localhost:${PORT}`); resolve(server); });
  });
}

(async () => {
  const htmlFiles = fs.readdirSync(TEMPLATE_DIR)
    .filter(f => f.endsWith('.html') && !f.startsWith('pins-'))
    .sort();

  if (!htmlFiles.length) { console.log('No HTML files found.'); process.exit(0); }
  console.log(`Found ${htmlFiles.length} templates.\n`);

  const server  = await startServer();
  const browser = await puppeteer.launch({
    executablePath: CHROME,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    headless: true,
  });

  let ok = 0, fail = 0;

  for (const htmlFile of htmlFiles) {
    const pngName = htmlFile.replace('.html', '.png');
    const pngPath = path.join(TEMPLATE_DIR, pngName);
    const url     = `http://localhost:${PORT}/pinterest/design/templates/${htmlFile}`;

    process.stdout.write(`  ${htmlFile} → `);
    try {
      const page = await browser.newPage();
      // Viewport large enough so fit() scale stays at 1.0 (no shrink)
      await page.setViewport({ width: 1080, height: 1580, deviceScaleFactor: 1 });
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 20000 });
      await new Promise(r => setTimeout(r, WAIT_MS));

      const pinEl = await page.$('.pin');
      if (!pinEl) { console.log('SKIP (no .pin element)'); fail++; await page.close(); continue; }

      const box = await pinEl.boundingBox();
      await page.screenshot({
        path: pngPath,
        clip: { x: Math.round(box.x), y: Math.round(box.y), width: 1000, height: 1500 },
      });

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
