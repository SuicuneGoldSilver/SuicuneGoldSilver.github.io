'use strict';
// Downloads images for jtp (JP tournament promos) and entp (EN tournament promos).
// JP images: serebii.net/card/svpromo/{n}.jpg → images/sets/jtp/jp/{n}.jpg
// EN images: serebii.net/card/svpromos/{n}.jpg → images/sets/entp/en/{n}.jpg
// Run: node scripts/download_promo_images.js

const https = require('https');
const fs    = require('fs');
const path  = require('path');

const ROOT = path.join(__dirname, '..');

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

function download(url, dest) {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) return resolve('skip');
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

// JP promo numbers (svpromo)
const JP_NUMS = [
  121, 122, 124, 125, 126, 127, 128,
  147, 150, 151, 152, 153, 154, 155, 157, 158, 160,
  163, 164, 165, 170, 171, 173, 174,
  183, 184, 186, 187, 189, 191,
  196, 197, 198, 201, 210, 211,
  219,
  233, 234, 235, 236, 237, 238, 239, 240,
  244, 245, 246, 247, 248, 249, 250, 251,
  252, 253, 254, 255, 256, 258,
  262, 263, 264, 265, 266, 267, 268, 269,
  288,
  291,
];

// EN promo numbers (svpromos)
const EN_NUMS = [150, 190, 224, 225];

async function run(label, items) {
  let ok = 0, skipped = 0; const failed = [];
  console.log(`\n=== ${label} (${items.length}) ===`);
  for (const { url, dest, id } of items) {
    await sleep(500);
    try {
      const r = await download(url, dest);
      if (r === 'skip') { skipped++; process.stdout.write('s'); }
      else              { ok++;      process.stdout.write('.'); }
    } catch (e) {
      failed.push(`${id}: ${e.message}`);
      process.stdout.write('x');
    }
  }
  console.log(`\n  ok=${ok} skipped=${skipped} failed=${failed.length}`);
  if (failed.length) failed.forEach(f => console.log(`  FAIL: ${f}`));
  return { ok, skipped, failed: failed.length };
}

async function main() {
  const jpItems = JP_NUMS.map(n => ({
    id:   `jtp-${n}`,
    url:  `https://www.serebii.net/card/svpromo/${n}.jpg`,
    dest: path.join(ROOT, 'images', 'sets', 'jtp', 'jp', `${n}.jpg`),
  }));

  const enItems = EN_NUMS.map(n => ({
    id:   `entp-${n}`,
    url:  `https://www.serebii.net/card/svpromos/${n}.jpg`,
    dest: path.join(ROOT, 'images', 'sets', 'entp', 'en', `${n}.jpg`),
  }));

  let totalOk = 0, totalFailed = 0;

  const r1 = await run('JP tournament promos (svpromo)', jpItems);
  totalOk += r1.ok; totalFailed += r1.failed;

  const r2 = await run('EN tournament promos (svpromos)', enItems);
  totalOk += r2.ok; totalFailed += r2.failed;

  console.log(`\nAll done. ${totalOk} downloaded, ${totalFailed} failed.`);
}

main().catch(console.error);
