// Fetch the full sd100 card list from Serebii and save card names to a JSON file.
// Run: node scripts/fetch_sd100_cardlist.js
const https = require('https');
const fs = require('fs');

function get(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)', 'Referer': 'https://www.serebii.net/' }
    }, res => {
      const chunks = [];
      res.on('data', d => chunks.push(d));
      res.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    });
    req.on('error', reject);
    req.setTimeout(30000, () => { req.destroy(); reject(new Error('timeout')); });
  });
}

function stripTags(s) {
  return s.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

async function main() {
  console.log('Fetching main card list page...');
  const html = await get('https://www.serebii.net/card/starterdeck100battlecollection/');

  // Match anchor tags that link to individual card pages, capture full inner HTML
  // Pattern: <a href="/card/starterdeck100battlecollection/NNN.shtml">INNER</a>
  // The inner HTML may contain <font> tags, text nodes, etc.
  const re = /href="\/card\/starterdeck100battlecollection\/(\d+)\.shtml">(?!<img)([^<]*(?:<[^>]+>[^<]*)*?)<\/a>/g;
  const cards = [];
  const seen = new Set();
  let m;
  while ((m = re.exec(html)) !== null) {
    const num = parseInt(m[1], 10);
    if (seen.has(num)) continue; // skip duplicate links (thumbnail + name link)
    const rawInner = m[2];
    // Skip if inner content starts with an image tag
    if (rawInner.trim().startsWith('<img')) continue;
    const name = stripTags(rawInner);
    if (!name) continue;
    seen.add(num);
    cards.push({ num, name });
  }

  cards.sort((a, b) => a.num - b.num);
  console.log(`Found ${cards.length} cards`);
  console.log('First 10:', cards.slice(0, 10));
  console.log('Last 5:', cards.slice(-5));

  const missing = [];
  for (let i = 1; i <= 742; i++) {
    if (!cards.find(c => c.num === i)) missing.push(i);
  }
  if (missing.length) console.log('Missing numbers:', missing.slice(0, 20));

  fs.writeFileSync('scripts/sd100_cardlist.json', JSON.stringify(cards, null, 2), 'utf8');
  console.log('Saved to scripts/sd100_cardlist.json');
}

main().catch(console.error);
