'use strict';
// Force re-downloads all secret rare EN images across every set.
// "Secret rare" = JP card number > set's printed total.
// Uses numberEn from JSON as the Serebii URL number (not the JP number).
// Overrides existing files — no skip-if-exists check.
// Run: node scripts/redownload_en_secrets.js

const https = require('https');
const fs    = require('fs');
const path  = require('path');

const ROOT      = path.join(__dirname, '..');
const CARDS_DIR = path.join(ROOT, 'data', 'cards');
const IMG_DIR   = path.join(ROOT, 'images', 'sets');

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
      file.on('finish', () => file.close(() => {
        fs.renameSync(tmp, dest);
        resolve('ok');
      }));
    });
    req.on('error', err => { file.close(); try { fs.unlinkSync(tmp); } catch {}; reject(err); });
    req.setTimeout(15000, () => { req.destroy(); reject(new Error('Timeout')); });
  });
}

// setIdEn → Serebii slug
const EN_SLUG = {
  jt:  'journeytogether',
  dri: 'destinedrivals',
  tf:  'temporalforces',
  tm:  'twilightmasquerade',
  sf:  'shroudedfable',
  sv7: 'stellarcrown',
  sv8: 'surgingsparks',
};

// sets and their JP printed totals (cards above this are secret rares)
const SETS = [
  { id: 'bp',  printedTotal: 100 },
  { id: 'gotr', printedTotal: 98  },
  { id: 'haa',  printedTotal: 63  },
  { id: 'cj',   printedTotal: 71  },
  { id: 'wf',   printedTotal: 71  },
  { id: 'mc',   printedTotal: 101 },
  { id: 'ch',   printedTotal: 66  },
  { id: 'nw',   printedTotal: 64  },
  { id: 'sm',   printedTotal: 102 },
  { id: 'seb',  printedTotal: 106 },
  { id: 'pd',   printedTotal: 64  },
];

async function processSet({ id, printedTotal }) {
  const cards = JSON.parse(fs.readFileSync(path.join(CARDS_DIR, `${id}.json`), 'utf8'));
  const items = [];

  for (const card of cards) {
    const jpNum = parseInt(card.numberJa);
    if (jpNum <= printedTotal) continue;                       // base card, skip
    if (!card.imageEn || !card.imageEn.startsWith('images/')) continue; // CDN or null
    if (!card.numberEn || !card.setIdEn) continue;
    const slug = EN_SLUG[card.setIdEn];
    if (!slug) continue;                                       // unknown slug

    const enNum = parseInt(card.numberEn);
    const dest  = path.join(ROOT, ...card.imageEn.split('/'));
    items.push({ id: card.id, url: `https://www.serebii.net/card/${slug}/${enNum}.jpg`, dest, enNum });
  }

  if (items.length === 0) { console.log(`\n=== ${id} — no secret rares to download ===`); return { ok: 0, failed: 0 }; }

  console.log(`\n=== ${id} — ${items.length} secret rare EN images ===`);
  let ok = 0; const failed = [];

  for (const { id: cid, url, dest, enNum } of items) {
    try {
      await sleep(300);
      await download(url, dest);
      ok++;
      process.stdout.write('.');
    } catch (e) {
      failed.push(`${cid}(EN${enNum}): ${e.message}`);
      process.stdout.write('x');
    }
  }

  console.log(`\n  ok=${ok} failed=${failed.length}`);
  if (failed.length) failed.forEach(f => console.log(`  FAIL: ${f}`));
  return { ok, failed: failed.length };
}

async function main() {
  let totalOk = 0, totalFailed = 0;
  for (const set of SETS) {
    const r = await processSet(set);
    totalOk += r.ok; totalFailed += r.failed;
  }
  console.log(`\nDone. ${totalOk} re-downloaded, ${totalFailed} failed.`);
}

main().catch(console.error);
