// Download correct EN card images for re-matched sd100 cards.
// Targets cards where enAvailable=true but imageEn=null (56 re-matched cards).
// Source: https://images.pokemontcg.io/{setId}/{cardNum}.png
// Destination: images/sets/sd100/en/{jpCardNum}.jpg
// Run: node scripts/download_sd100_en_images.js

const https = require('https');
const fs = require('fs');

function readJson(p) {
  let s = fs.readFileSync(p, 'utf8');
  if (s.charCodeAt(0) === 0xFEFF) s = s.slice(1);
  return JSON.parse(s);
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const req = https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
      if (res.statusCode === 200) {
        res.pipe(file);
        file.on('finish', () => { file.close(); resolve(); });
        file.on('error', err => { file.close(); fs.unlink(dest, () => {}); reject(err); });
      } else if (res.statusCode === 301 || res.statusCode === 302) {
        file.close();
        fs.unlink(dest, () => {});
        downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      } else {
        file.close();
        fs.unlink(dest, () => {});
        reject(new Error(`HTTP ${res.statusCode} for ${url}`));
      }
    });
    req.on('error', err => { file.close(); fs.unlink(dest, () => {}); reject(err); });
    req.setTimeout(30000, () => { req.destroy(); reject(new Error('timeout')); });
  });
}

function delay(ms) { return new Promise(r => setTimeout(r, ms)); }

async function main() {
  const cards = readJson('data/cards/sd100.json');

  const toDownload = cards.filter(c =>
    c.enAvailable &&
    !c.imageEn &&
    c.setIdEn &&
    c.numberEn
  );
  console.log(`Cards needing EN image: ${toDownload.length}`);

  const byId = {};
  for (const c of cards) byId[c.id] = c;

  let ok = 0, fail = 0;

  for (const card of toDownload) {
    const jpNum = parseInt(card.id.split('-')[1]);
    const enNum = parseInt(card.numberEn.split('/')[0]);
    const dest = `images/sets/sd100/en/${jpNum}.jpg`;
    const url = `https://images.pokemontcg.io/${card.setIdEn}/${enNum}.png`;

    process.stdout.write(`  ${card.id} ${card.nameEn} (${card.setIdEn} #${enNum})... `);
    try {
      await downloadFile(url, dest);
      byId[card.id].imageEn = dest;
      console.log('OK');
      ok++;
    } catch (e) {
      console.log(`FAIL: ${e.message}`);
      fail++;
    }
    await delay(150);
  }

  // Write updated sd100.json with imageEn paths filled in
  const result = Object.values(byId).sort((a, b) =>
    parseInt(a.id.split('-')[1]) - parseInt(b.id.split('-')[1])
  );
  fs.writeFileSync('data/cards/sd100.json', JSON.stringify(result, null, 2), 'utf8');
  console.log(`\nDone. Downloaded: ${ok}, Failed: ${fail}`);
  if (ok > 0) console.log('imageEn paths updated in data/cards/sd100.json');
}

main().catch(console.error);
