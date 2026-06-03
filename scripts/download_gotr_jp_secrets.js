'use strict';
// Download missing gotr JP secret rare images from Serebii.
// Run: node scripts/download_gotr_jp_secrets.js

const https = require('https');
const fs    = require('fs');
const path  = require('path');

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

function download(url, dest) {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(dest) && fs.statSync(dest).size > 5000) return resolve('skip');
    const file = fs.createWriteStream(dest);
    const req = https.get(url, {
      headers: { 'User-Agent': 'Mozilla/5.0', 'Referer': 'https://www.serebii.net/' }
    }, res => {
      if (res.statusCode !== 200) {
        file.close(); try { fs.unlinkSync(dest); } catch {}
        return reject(new Error(`HTTP ${res.statusCode}`));
      }
      res.pipe(file);
      file.on('finish', () => file.close(() => {
        // Delete Serebii placeholder files (695 bytes) — real images are always >5KB
        const size = fs.existsSync(dest) ? fs.statSync(dest).size : 0;
        if (size < 5000) { try { fs.unlinkSync(dest); } catch {} return reject(new Error('Placeholder')); }
        resolve('ok');
      }));
    });
    req.on('error', err => { file.close(); try { fs.unlinkSync(dest); } catch {}; reject(err); });
    req.setTimeout(15000, () => { req.destroy(); reject(new Error('Timeout')); });
  });
}

const BROKEN = [99, 100, 101, 105, 108, 111, 113, 114, 115, 117, 118,
                119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129,
                130, 131, 132];

const dir = path.join(__dirname, '..', 'images', 'sets', 'gotr', 'jp');

async function main() {
  let ok = 0, failed = [];
  for (const n of BROKEN) {
    const url  = `https://www.serebii.net/card/gloryofteamrocket/${n}.jpg`;
    const dest = path.join(dir, `${n}.jpg`);
    await sleep(400);
    try {
      const result = await download(url, dest);
      if (result === 'skip') { process.stdout.write('s'); }
      else { ok++; process.stdout.write('.'); }
    } catch (e) {
      failed.push(n);
      process.stdout.write('x');
    }
  }
  console.log(`\nDone. ok=${ok} failed=${failed.length}`);
  if (failed.length) console.log(`Failed: ${failed.join(', ')}`);
}

main().catch(console.error);
