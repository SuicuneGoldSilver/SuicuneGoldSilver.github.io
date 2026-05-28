'use strict';
// Download missing JP secret rare images for 8 sets.
// Run: node scripts/download_secret_rares_jp.js

const https = require('https');
const fs    = require('fs');
const path  = require('path');

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

function download(url, dest) {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) return resolve('skip');
    const file = fs.createWriteStream(dest);
    const req = https.get(url, {
      headers: { 'User-Agent': 'Mozilla/5.0', 'Referer': 'https://www.serebii.net/' }
    }, res => {
      if (res.statusCode !== 200) {
        file.close(); try { fs.unlinkSync(dest); } catch {}
        return reject(new Error(`HTTP ${res.statusCode}`));
      }
      res.pipe(file);
      file.on('finish', () => file.close(() => resolve('ok')));
    });
    req.on('error', err => { file.close(); try { fs.unlinkSync(dest); } catch {}; reject(err); });
    req.setTimeout(15000, () => { req.destroy(); reject(new Error('Timeout')); });
  });
}

const SETS = [
  { id: 'cj',  slug: 'cyberjudge',          from: 72,  to: 100 },
  { id: 'wf',  slug: 'wildforce',            from: 72,  to: 100 },
  { id: 'mc',  slug: 'maskofchange',         from: 102, to: 133 },
  { id: 'ch',  slug: 'crimsonhaze',          from: 67,  to: 96  },
  { id: 'nw',  slug: 'nightwanderer',        from: 65,  to: 94  },
  { id: 'sm',  slug: 'stellarmiracle',       from: 103, to: 135 },
  { id: 'seb', slug: 'superelectricbreaker', from: 107, to: 138 },
  { id: 'pd',  slug: 'paradisedragona',      from: 65,  to: 94  },
];

async function main() {
  let totalOk = 0, totalFailed = 0;

  for (const { id, slug, from, to } of SETS) {
    const dir = path.join(__dirname, '..', 'images', 'sets', id, 'jp');
    let ok = 0, skipped = 0, failed = [];

    console.log(`\n=== ${id} (${slug}) ${from}–${to} ===`);

    for (let n = from; n <= to; n++) {
      const url  = `https://www.serebii.net/card/${slug}/${n}.jpg`;
      const dest = path.join(dir, `${n}.jpg`);
      try {
        await sleep(300);
        const result = await download(url, dest);
        if (result === 'skip') { skipped++; process.stdout.write('s'); }
        else                   { ok++;      process.stdout.write('.'); }
      } catch (e) {
        failed.push(n);
        process.stdout.write('x');
      }
    }

    console.log(`\n  ok=${ok} skipped=${skipped} failed=${failed.length}`);
    if (failed.length) console.log(`  failed cards: ${failed.join(', ')}`);
    totalOk += ok; totalFailed += failed.length;
  }

  console.log(`\nAll sets done. ${totalOk} downloaded, ${totalFailed} failed.`);
}

main().catch(console.error);
