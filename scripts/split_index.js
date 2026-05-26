// Split data/index.json into per-set files in data/index-sets/{setId}.json
// These are loaded on demand by the card search app when a specific set is selected.
// Run: node scripts/split_index.js

const fs = require('fs');

function readJson(p) {
  let s = fs.readFileSync(p, 'utf8');
  if (s.charCodeAt(0) === 0xFEFF) s = s.slice(1);
  return JSON.parse(s);
}

const index = readJson('data/index.json');

const bySet = {};
for (const card of index) {
  if (!bySet[card.setIdJa]) bySet[card.setIdJa] = [];
  bySet[card.setIdJa].push(card);
}

fs.mkdirSync('data/index-sets', { recursive: true });

for (const [setId, cards] of Object.entries(bySet)) {
  const path = `data/index-sets/${setId}.json`;
  fs.writeFileSync(path, JSON.stringify(cards), 'utf8');
  const kb = Math.round(fs.statSync(path).size / 1024);
  console.log(`  ${setId}: ${cards.length} cards, ${kb}KB`);
}

console.log(`Done. ${Object.keys(bySet).length} set files written to data/index-sets/`);
