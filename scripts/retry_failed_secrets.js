'use strict';
// Retries the 21 secret rare EN images that failed in redownload_en_secrets.js
// Uses a longer 1.5s delay to avoid Serebii rate limiting.
// Run: node scripts/retry_failed_secrets.js

const https = require('https');
const fs    = require('fs');
const path  = require('path');

const ROOT = path.join(__dirname, '..');

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

function download(url, dest) {
  return new Promise((resolve, reject) => {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    const tmp = dest + '.tmp';
    const file = fs.createWriteStream(tmp);
    const req = https.get(url, {
      headers: { 'User-Agent': 'Mozilla/5.0', 'Referer': 'https://www.serebii.net/' }
    }, res => {
      if (res.statusCode !== 200) {
        file.close(); try { fs.unlinkSync(tmp); } catch {}
        return reject(new Error(`HTTP ${res.statusCode}`));
      }
      res.pipe(file);
      file.on('finish', () => file.close(() => { fs.renameSync(tmp, dest); resolve('ok'); }));
    });
    req.on('error', err => { file.close(); try { fs.unlinkSync(tmp); } catch {}; reject(err); });
    req.setTimeout(20000, () => { req.destroy(); reject(new Error('Timeout')); });
  });
}

const BASE = 'https://www.serebii.net/card';
const IMG  = path.join(ROOT, 'images', 'sets');

const items = [
  { id: 'bp-131',  url: `${BASE}/journeytogether/189.jpg`,  dest: path.join(IMG,'bp','en','131.jpg') },
  { id: 'bp-132',  url: `${BASE}/journeytogether/190.jpg`,  dest: path.join(IMG,'bp','en','132.jpg') },
  { id: 'gotr-99', url: `${BASE}/destinedrivals/187.jpg`,   dest: path.join(IMG,'gotr','en','99.jpg') },
  { id: 'gotr-100',url: `${BASE}/destinedrivals/191.jpg`,   dest: path.join(IMG,'gotr','en','100.jpg') },
  { id: 'haa-86',  url: `${BASE}/destinedrivals/230.jpg`,   dest: path.join(IMG,'haa','en','86.jpg') },
  { id: 'ch-91',   url: `${BASE}/twilightmasquerade/216.jpg`,dest: path.join(IMG,'ch','en','91.jpg') },
  { id: 'sm-107',  url: `${BASE}/stellarcrown/149.jpg`,     dest: path.join(IMG,'sm','en','107.jpg') },
  { id: 'sm-108',  url: `${BASE}/stellarcrown/150.jpg`,     dest: path.join(IMG,'sm','en','108.jpg') },
  { id: 'sm-112',  url: `${BASE}/stellarcrown/154.jpg`,     dest: path.join(IMG,'sm','en','112.jpg') },
  { id: 'sm-116',  url: `${BASE}/stellarcrown/157.jpg`,     dest: path.join(IMG,'sm','en','116.jpg') },
  { id: 'sm-120',  url: `${BASE}/stellarcrown/161.jpg`,     dest: path.join(IMG,'sm','en','120.jpg') },
  { id: 'sm-123',  url: `${BASE}/stellarcrown/164.jpg`,     dest: path.join(IMG,'sm','en','123.jpg') },
  { id: 'sm-128',  url: `${BASE}/stellarcrown/168.jpg`,     dest: path.join(IMG,'sm','en','128.jpg') },
  { id: 'sm-129',  url: `${BASE}/stellarcrown/169.jpg`,     dest: path.join(IMG,'sm','en','129.jpg') },
  { id: 'sm-134',  url: `${BASE}/stellarcrown/175.jpg`,     dest: path.join(IMG,'sm','en','134.jpg') },
  { id: 'seb-109', url: `${BASE}/surgingsparks/197.jpg`,    dest: path.join(IMG,'seb','en','109.jpg') },
  { id: 'seb-129', url: `${BASE}/surgingsparks/233.jpg`,    dest: path.join(IMG,'seb','en','129.jpg') },
  { id: 'seb-136', url: `${BASE}/surgingsparks/247.jpg`,    dest: path.join(IMG,'seb','en','136.jpg') },
  { id: 'seb-138', url: `${BASE}/surgingsparks/250.jpg`,    dest: path.join(IMG,'seb','en','138.jpg') },
  { id: 'pd-67',   url: `${BASE}/surgingsparks/195.jpg`,    dest: path.join(IMG,'pd','en','67.jpg') },
  { id: 'pd-71',   url: `${BASE}/surgingsparks/206.jpg`,    dest: path.join(IMG,'pd','en','71.jpg') },
];

async function main() {
  let ok = 0; const failed = [];
  console.log(`Retrying ${items.length} failed downloads (1.5s delay)...`);
  for (const { id, url, dest } of items) {
    await sleep(1500);
    try {
      await download(url, dest);
      console.log(`  OK  ${id}`);
      ok++;
    } catch (e) {
      console.log(`  FAIL ${id}: ${e.message}`);
      failed.push(id);
    }
  }
  console.log(`\nDone. ${ok} ok, ${failed.length} failed.`);
  if (failed.length) console.log('Still failed:', failed.join(', '));
}

main().catch(console.error);
