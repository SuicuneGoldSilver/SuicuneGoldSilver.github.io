'use strict';
// Download missing EN secret rare images for cj, wf, mc, ch, nw, sm, seb, pd.
// Reads imageEn paths + numberEn from each set's JSON to build the mapping.
// Run: node scripts/download_secret_rares_en.js

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

// setIdEn short code → Serebii URL slug
const EN_SLUG = {
  tf:  'temporalforces',
  tm:  'twilightmasquerade',
  sf:  'shroudedfable',
  sv7: 'stellarcrown',
  sv8: 'surgingsparks',
};

// Sets to process and their base set printed totals (to identify secret rares)
const SETS = [
  { id: 'cj',  printedTotal: 71  },
  { id: 'wf',  printedTotal: 71  },
  { id: 'mc',  printedTotal: 101 },
  { id: 'ch',  printedTotal: 66  },
  { id: 'nw',  printedTotal: 64  },
  { id: 'sm',  printedTotal: 102 },
  { id: 'seb', printedTotal: 106 },
  { id: 'pd',  printedTotal: 64  },
];

const cardsDir = path.join(__dirname, '..', 'data', 'cards');
const imagesDir = path.join(__dirname, '..', 'images', 'sets');

async function main() {
  let totalOk = 0, totalSkipped = 0, totalFailed = 0;

  for (const { id, printedTotal } of SETS) {
    const cards = JSON.parse(fs.readFileSync(path.join(cardsDir, `${id}.json`), 'utf8'));
    const enDir = path.join(imagesDir, id, 'en');
    let ok = 0, skipped = 0, failed = [];

    // Secret rares with a local EN image path (not null, not CDN)
    const secrets = cards.filter(c => {
      const jpNum = parseInt(c.numberJa);
      return jpNum > printedTotal &&
             c.imageEn &&
             c.imageEn.startsWith('images/') &&
             c.numberEn &&
             c.setIdEn &&
             EN_SLUG[c.setIdEn];
    });

    console.log(`\n=== ${id} — ${secrets.length} EN secret rares to fetch ===`);

    for (const card of secrets) {
      const jpNum  = parseInt(card.id.split('-')[1]);
      const enNum  = parseInt(card.numberEn);
      const slug   = EN_SLUG[card.setIdEn];
      const url    = `https://www.serebii.net/card/${slug}/${enNum}.jpg`;
      const dest   = path.join(enDir, `${jpNum}.jpg`);

      try {
        await sleep(300);
        const result = await download(url, dest);
        if (result === 'skip') { skipped++; process.stdout.write('s'); }
        else                   { ok++;      process.stdout.write('.'); }
      } catch (e) {
        failed.push(`${id}-${jpNum}(EN${enNum})`);
        process.stdout.write('x');
      }
    }

    console.log(`\n  ok=${ok} skipped=${skipped} failed=${failed.length}`);
    if (failed.length) console.log(`  failed: ${failed.join(', ')}`);
    totalOk += ok; totalSkipped += skipped; totalFailed += failed.length;
  }

  console.log(`\nAll done. ${totalOk} downloaded, ${totalSkipped} skipped, ${totalFailed} failed.`);
}

main().catch(console.error);
