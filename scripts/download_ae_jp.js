'use strict';
// Download JP card images for ae (アビスアイ / Abyss Eye)
// Cards 1-118 from Serebii
// Run: node scripts/download_ae_jp.js
const https = require('https');
const fs = require('fs');
const path = require('path');

const TOTAL = 118;
const OUT_DIR = path.join(__dirname, '..', 'images', 'sets', 'ae', 'jp');
const BASE_URL = 'https://www.serebii.net/card/abysseye/';
const DELAY_MS = 300;

function delay(ms) { return new Promise(r => setTimeout(r, ms)); }

function download(n) {
  return new Promise((resolve, reject) => {
    const url = `${BASE_URL}${n}.jpg`;
    const dest = path.join(OUT_DIR, `${n}.jpg`);
    if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
      return resolve('skip');
    }
    const file = fs.createWriteStream(dest);
    const req = https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0', 'Referer': 'https://www.serebii.net/' } }, res => {
      if (res.statusCode !== 200) {
        file.close();
        try { fs.unlinkSync(dest); } catch {}
        return reject(new Error(`HTTP ${res.statusCode} for card ${n}`));
      }
      res.pipe(file);
      file.on('finish', () => file.close(() => resolve('ok')));
    });
    req.on('error', err => { file.close(); try { fs.unlinkSync(dest); } catch {} reject(err); });
    req.setTimeout(15000, () => { req.destroy(); reject(new Error(`Timeout card ${n}`)); });
  });
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  let ok = 0, skipped = 0, failed = [];
  for (let n = 1; n <= TOTAL; n++) {
    try {
      const result = await download(n);
      if (result === 'skip') { skipped++; }
      else { ok++; }
    } catch (e) {
      failed.push({ n, err: e.message });
    }
    if (n % 10 === 0) console.log(`  ...downloaded ae_${n} (${ok} ok so far)`);
    await delay(DELAY_MS);
  }
  console.log(`Done: ${ok} downloaded, ${skipped} skipped, ${failed.length} failed`);
  if (failed.length) console.log('Failed:', failed);
}

main();
