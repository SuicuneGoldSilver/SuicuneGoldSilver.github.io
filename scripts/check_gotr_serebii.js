'use strict';
// Check which gotr JP secret rare images Serebii has (size > 5KB = real image).
// Run: node scripts/check_gotr_serebii.js

const https = require('https');

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

function getSize(url) {
  return new Promise((resolve) => {
    const req = https.get(url, {
      headers: { 'User-Agent': 'Mozilla/5.0', 'Referer': 'https://www.serebii.net/' }
    }, res => {
      let bytes = 0;
      res.on('data', chunk => { bytes += chunk.length; });
      res.on('end', () => resolve({ status: res.statusCode, size: bytes }));
    });
    req.on('error', () => resolve({ status: 0, size: 0 }));
    req.setTimeout(10000, () => { req.destroy(); resolve({ status: 0, size: 0 }); });
  });
}

const BROKEN = [99,100,101,105,108,111,113,114,115,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132];

async function main() {
  const available = [], missing = [];
  for (const n of BROKEN) {
    await sleep(300);
    const url = `https://www.serebii.net/card/gloryofteamrocket/${n}.jpg`;
    const { status, size } = await getSize(url);
    const real = size > 5000;
    process.stdout.write(real ? '.' : 'x');
    if (real) available.push(n); else missing.push(n);
  }
  console.log(`\nAvailable on Serebii (${available.length}): ${available.join(', ')}`);
  console.log(`Still missing (${missing.length}): ${missing.join(', ')}`);
}

main().catch(console.error);
