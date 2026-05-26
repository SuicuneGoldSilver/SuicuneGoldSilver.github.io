// Phase 3: Add sd100 entries to index.json and sets.json
// Run from project root: node scripts/phase3_sd100.js

const fs = require('fs');

function readJson(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  if (content.charCodeAt(0) === 0xFEFF) content = content.slice(1);
  return JSON.parse(content);
}

const sd100Cards = readJson('data/cards/sd100.json');

// Build index entries
const newIndexEntries = sd100Cards.map(card => {
  const entry = {
    id: card.id,
    setIdJa: card.setIdJa,
    nameJa: card.nameJa,
    nameEn: card.nameEn,
    types: card.supertype === 'Pokémon' ? (card.types || []) : [],
    imageJa: card.imageJa,
    imageEn: card.imageEn || null,
    enAvailable: !!(card.imageEn),
    supertype: card.supertype,
    subtypes: card.subtypes,
  };
  return entry;
});

// Update index.json
const indexPath = 'data/index.json';
const index = readJson(indexPath);

// Remove any existing sd100 entries to avoid duplicates
const cleaned = index.filter(e => e.setIdJa !== 'sd100');
cleaned.push(...newIndexEntries);

fs.writeFileSync(indexPath, JSON.stringify(cleaned, null, 2), 'utf8');
console.log(`index.json: ${index.length} → ${cleaned.length} cards`);

// Update sets.json
const setsPath = 'data/sets.json';
const sets = readJson(setsPath);

// Remove existing sd100 entry if present
const setsClean = sets.filter(s => s.id !== 'sd100');

const sd100SetEntry = {
  id: 'sd100',
  language: 'ja',
  name: 'スターターデッキ100バトルコレクション',
  series: 'Scarlet & Violet',
  releaseDate: '2025-07-25',  // verify and update if wrong
  printedTotal: 742,
  regulationMark: null,
  logo: 'images/sets/sd100/logo.png',
};

setsClean.push(sd100SetEntry);
fs.writeFileSync(setsPath, JSON.stringify(setsClean, null, 2), 'utf8');
console.log(`sets.json: added sd100 (${setsClean.length} sets total)`);
