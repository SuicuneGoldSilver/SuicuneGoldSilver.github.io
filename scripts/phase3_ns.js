// Phase 3: Add ns entries to index.json and sets.json
// Run from project root: node scripts/phase3_ns.js

const fs = require('fs');

function readJson(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  if (content.charCodeAt(0) === 0xFEFF) content = content.slice(1);
  return JSON.parse(content);
}

const nsCards = readJson('data/cards/ns.json');

// Build index entries
const newIndexEntries = nsCards.map(card => {
  const entry = {
    id: card.id,
    setIdJa: card.setIdJa,
    nameJa: card.nameJa,
    nameEn: card.nameEn,
    types: card.supertype === 'Pokémon' ? (card.types || []) : [],
    imageJa: card.imageJa,
    imageEn: card.imageEn,
    enAvailable: card.imageEn !== null,
    supertype: card.supertype,
    subtypes: card.subtypes,
  };
  return entry;
});

// Update index.json
const indexPath = 'data/index.json';
const index = readJson(indexPath);
const beforeCount = index.length;
index.push(...newIndexEntries);
fs.writeFileSync(indexPath, JSON.stringify(index, null, 2), 'utf8');
console.log(`index.json: ${beforeCount} → ${index.length} cards`);

// Update sets.json
const setsPath = 'data/sets.json';
const sets = readJson(setsPath);

const nsSetEntry = {
  id: 'ns',
  language: 'ja',
  name: 'ニンジャスピナー',
  series: 'Scarlet & Violet',
  releaseDate: '2025-11-21',  // ESTIMATE — verify and update if wrong
  printedTotal: 83,
  regulationMark: 'J',
  logo: 'images/sets/ns/logo.png',
};

sets.push(nsSetEntry);
fs.writeFileSync(setsPath, JSON.stringify(sets, null, 2), 'utf8');
console.log(`sets.json: added ns set (${sets.length} sets total)`);
