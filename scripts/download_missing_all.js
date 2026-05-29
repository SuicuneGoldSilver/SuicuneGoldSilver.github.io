'use strict';
// Downloads all currently missing JP and EN card images.
// Covers: bp/gotr/haa JP secret rares, bp/gotr/haa EN secret rares,
//         and the mc base EN images (stored under images/sets/tm/en/).
// Run: node scripts/download_missing_all.js

const https = require('https');
const fs    = require('fs');
const path  = require('path');

const ROOT      = path.join(__dirname, '..');
const CARDS_DIR = path.join(ROOT, 'data', 'cards');
const IMG_DIR   = path.join(ROOT, 'images', 'sets');

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

function download(url, dest) {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) return resolve('skip');
    fs.mkdirSync(path.dirname(dest), { recursive: true });
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

async function run(label, items) {
  let ok = 0, skipped = 0, failed = [];
  console.log(`\n=== ${label} (${items.length}) ===`);
  for (const { url, dest, id } of items) {
    try {
      await sleep(300);
      const r = await download(url, dest);
      if (r === 'skip') { skipped++; process.stdout.write('s'); }
      else              { ok++;      process.stdout.write('.'); }
    } catch (e) {
      failed.push(id || url);
      process.stdout.write('x');
    }
  }
  console.log(`\n  ok=${ok} skipped=${skipped} failed=${failed.length}`);
  if (failed.length) console.log(`  failed: ${failed.slice(0, 10).join(', ')}`);
  return { ok, skipped, failed: failed.length };
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

async function main() {
  let totalOk = 0, totalFailed = 0;

  // ── 1. BP / GOTR / HAA — JP secret rares ─────────────────────────────────
  const jpSets = [
    { id: 'bp',   slug: 'battlepartners',    from: 101, to: 132 },
    { id: 'gotr', slug: 'gloryofteamrocket', from: 99,  to: 132 },
    { id: 'haa',  slug: 'hotairarena',       from: 64,  to: 92  },
  ];

  for (const { id, slug, from, to } of jpSets) {
    const items = [];
    for (let n = from; n <= to; n++) {
      items.push({
        id:   `${id}-${n}`,
        url:  `https://www.serebii.net/card/${slug}/${n}.jpg`,
        dest: path.join(IMG_DIR, id, 'jp', `${n}.jpg`),
      });
    }
    const r = await run(`${id} JP (${slug} ${from}–${to})`, items);
    totalOk += r.ok; totalFailed += r.failed;
  }

  // ── 2. BP / GOTR / HAA — EN secret rares (from card JSON numberEn) ────────
  const enSets = ['bp', 'gotr', 'haa'];
  for (const setId of enSets) {
    const cards = JSON.parse(fs.readFileSync(path.join(CARDS_DIR, `${setId}.json`), 'utf8'));
    const items = [];
    for (const card of cards) {
      if (!card.imageEn || !card.imageEn.startsWith('images/')) continue;
      if (!card.numberEn || !card.setIdEn) continue;
      const slug = EN_SLUG[card.setIdEn];
      if (!slug) continue;
      const dest = path.join(ROOT, ...card.imageEn.split('/'));
      if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) continue;
      const enNum = parseInt(card.numberEn);
      items.push({
        id:   card.id,
        url:  `https://www.serebii.net/card/${slug}/${enNum}.jpg`,
        dest,
      });
    }
    if (items.length > 0) {
      const r = await run(`${setId} EN secret rares`, items);
      totalOk += r.ok; totalFailed += r.failed;
    }
  }

  // ── 3. MC base EN images → images/sets/tm/en/{n}.jpg ─────────────────────
  // The path number IS the Twilight Masquerade EN card number.
  const mcCards = JSON.parse(fs.readFileSync(path.join(CARDS_DIR, 'mc.json'), 'utf8'));
  const tmItems = [];
  for (const card of mcCards) {
    if (!card.imageEn || !card.imageEn.startsWith('images/sets/tm/en/')) continue;
    const dest = path.join(ROOT, ...card.imageEn.split('/'));
    if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) continue;
    const enNum = parseInt(path.basename(card.imageEn));
    tmItems.push({
      id:   card.id,
      url:  `https://www.serebii.net/card/twilightmasquerade/${enNum}.jpg`,
      dest,
    });
  }
  if (tmItems.length > 0) {
    const r = await run('mc base EN (twilightmasquerade → tm/en/)', tmItems);
    totalOk += r.ok; totalFailed += r.failed;
  }

  console.log(`\nAll done. ${totalOk} downloaded, ${totalFailed} failed.`);
}

main().catch(console.error);
