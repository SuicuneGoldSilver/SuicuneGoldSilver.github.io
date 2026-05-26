// Download JP card images for sd100 (Starter Deck 100 Battle Collection)
// Cards 1-742 from Serebii
// Run: node scripts/download_sd100_jp.js
const https = require('https');
const fs = require('fs');
const path = require('path');

const TOTAL = 742;
const OUT_DIR = path.join(__dirname, '..', 'images', 'sets', 'sd100', 'jp');
const BASE_URL = 'https://www.serebii.net/card/starterdeck100battlecollection/';
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
        fs.unlinkSync(dest);
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
  let ok = 0, skipped = 0, failed = [];
  for (let n = 1; n <= TOTAL; n++) {
    try {
      const result = await download(n);
      if (result === 'skip') { skipped++; } else { ok++; }
      if (n % 50 === 0 || n === TOTAL) {
        console.log(`[${n}/${TOTAL}] downloaded=${ok} skipped=${skipped} failed=${failed.length}`);
      }
    } catch (err) {
      failed.push(n);
      console.error(`  FAILED card ${n}: ${err.message}`);
    }
    if (n < TOTAL) await delay(DELAY_MS);
  }
  console.log(`\nDone. ok=${ok} skipped=${skipped} failed=${failed.length}`);
  if (failed.length) console.log('Failed cards:', failed.join(', '));
}

main();
