// Rebuild data/index.json in sets.json order (newest JP set first)
// Also regenerates data/index-sets/ split files.
// Run: node scripts/rebuild_index.js
'use strict';
const fs   = require('fs');
const path = require('path');

function readJson(p) {
  let s = fs.readFileSync(p, 'utf8');
  if (s.charCodeAt(0) === 0xFEFF) s = s.slice(1);
  return JSON.parse(s);
}

const setsPath  = path.join(__dirname, '..', 'data', 'sets.json');
const cardsDir  = path.join(__dirname, '..', 'data', 'cards');
const indexPath = path.join(__dirname, '..', 'data', 'index.json');
const splitDir  = path.join(__dirname, '..', 'data', 'index-sets');

const sets = readJson(setsPath).filter(s => s.language === 'ja');

// Sub-deck IDs that are grouped under the virtual "other" set pill
const OTHER_SUBSETS = ['ssb', 'ssmr', 'sstce', 'sstsy'];

const entries = [];
for (const set of sets) {
  if (set.id === 'other') {
    for (const subId of OTHER_SUBSETS) {
      const cardFile = path.join(cardsDir, `${subId}.json`);
      if (!fs.existsSync(cardFile)) { console.warn(`  SKIP other/${subId}: no cards file`); continue; }
      const cards = readJson(cardFile);
      for (const c of cards) {
        entries.push({
          id:          c.id,
          setIdJa:     c.setIdJa,
          nameJa:      c.nameJa,
          nameEn:      c.nameEn,
          types:       c.types ?? [],
          imageJa:     c.imageJa,
          imageEn:     c.imageEn,
          enAvailable: c.imageEn !== null,
        });
      }
      console.log(`  other/${subId}: ${cards.length} cards`);
    }
    continue;
  }
  const cardFile = path.join(cardsDir, `${set.id}.json`);
  if (!fs.existsSync(cardFile)) { console.warn(`  SKIP ${set.id}: no cards file`); continue; }
  const cards = readJson(cardFile);
  for (const c of cards) {
    entries.push({
      id:          c.id,
      setIdJa:     c.setIdJa,
      nameJa:      c.nameJa,
      nameEn:      c.nameEn,
      types:       c.types ?? [],
      imageJa:     c.imageJa,
      imageEn:     c.imageEn,
      enAvailable: c.imageEn !== null,
    });
  }
  console.log(`  ${set.id}: ${cards.length} cards`);
}

fs.writeFileSync(indexPath, JSON.stringify(entries, null, 2), 'utf8');
console.log(`\nindex.json written: ${entries.length} total entries`);

// Regenerate split files
fs.mkdirSync(splitDir, { recursive: true });
const bySet = {};
for (const e of entries) {
  if (!bySet[e.setIdJa]) bySet[e.setIdJa] = [];
  bySet[e.setIdJa].push(e);
}
for (const [setId, cards] of Object.entries(bySet)) {
  fs.writeFileSync(path.join(splitDir, `${setId}.json`), JSON.stringify(cards), 'utf8');
}
// Generate combined "other" split file for the その他 tab
const otherEntries = OTHER_SUBSETS.flatMap(s => bySet[s] ?? []);
if (otherEntries.length > 0) {
  fs.writeFileSync(path.join(splitDir, 'other.json'), JSON.stringify(otherEntries), 'utf8');
  console.log(`index-sets/other.json: ${otherEntries.length} combined entries`);
}
console.log(`index-sets/ regenerated: ${Object.keys(bySet).length + (otherEntries.length > 0 ? 1 : 0)} files`);
