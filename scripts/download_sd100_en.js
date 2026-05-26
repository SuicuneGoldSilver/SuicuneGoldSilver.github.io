// Download EN card images for sd100 using the mapping from build_sd100_en_mapping.js
// Saves to images/sets/sd100/en/{sd100_card_num}.jpg
// Run: node scripts/download_sd100_en.js
const https = require('https');
const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, '..', 'images', 'sets', 'sd100', 'en');
const DELAY_MS = 300;

function delay(ms) { return new Promise(r => setTimeout(r, ms)); }

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
    req.setTimeout(15000, () => { req.destroy(); reject(new Error('timeout')); });
  });
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const mapping = JSON.parse(fs.readFileSync('scripts/sd100_en_mapping.json', 'utf8'));
  const entries = Object.entries(mapping).sort((a, b) => parseInt(a[0]) - parseInt(b[0]));

  let ok = 0, skipped = 0, nulled = 0, failed = [];

  for (const [sd100NumStr, enCard] of entries) {
    const sd100Num = parseInt(sd100NumStr);
    const dest = path.join(OUT_DIR, `${sd100Num}.jpg`);

    if (enCard === null) {
      nulled++;
      continue;
    }

    const url = `https://www.serebii.net/card/${enCard.set}/${enCard.num}.jpg`;
    try {
      const result = await download(url, dest);
      if (result === 'skip') { skipped++; } else { ok++; }
      if ((ok + skipped) % 50 === 0) {
        console.log(`[${sd100Num}/766] downloaded=${ok} skipped=${skipped} null=${nulled} failed=${failed.length}`);
      }
    } catch (err) {
      failed.push({ sd100Num, enCard, err: err.message });
      console.error(`  FAIL [${sd100Num}] ${enCard.set}#${enCard.num}: ${err.message}`);
    }

    await delay(DELAY_MS);
  }

  console.log(`\nDone. ok=${ok} skipped=${skipped} null=${nulled} failed=${failed.length}`);
  if (failed.length) {
    console.log('Failed:');
    failed.forEach(f => console.log(`  [${f.sd100Num}] ${f.enCard.set}#${f.enCard.num}: ${f.err}`));
  }
}

main().catch(console.error);
