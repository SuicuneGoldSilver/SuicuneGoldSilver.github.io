// Phase 3: Add md set to index.json and sets.json
// Run from project root: node scripts/phase3_md.js

const fs = require('fs');

function readJson(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  if (content.charCodeAt(0) === 0xFEFF) content = content.slice(1);
  return JSON.parse(content);
}

// Load md.json
const mdCards = readJson('data/cards/md.json');

// ── Build index entries ───────────────────────────────────────────────────────
const newIndexEntries = mdCards.map(card => {
  const entry = {
    id: card.id,
    setIdJa: card.setIdJa,
    nameJa: card.nameJa,
    nameEn: card.nameEn,
    types: card.types || [],
    imageJa: card.imageJa,
    imageEn: card.imageEn,
    enAvailable: card.imageEn !== null,
    supertype: card.supertype,
    subtypes: card.subtypes,
  };
  return entry;
});

// ── Load and update index.json ────────────────────────────────────────────────
const indexPath = 'data/index.json';
const existingIndex = readJson(indexPath);

// Remove any existing md entries (in case of re-run)
const filteredIndex = existingIndex.filter(e => e.setIdJa !== 'md');

const newIndex = [...filteredIndex, ...newIndexEntries];
fs.writeFileSync(indexPath, JSON.stringify(newIndex, null, 2), 'utf8');
console.log(`index.json: ${filteredIndex.length} existing + ${newIndexEntries.length} md = ${newIndex.length} total`);

// ── Load and update sets.json ─────────────────────────────────────────────────
const setsPath = 'data/sets.json';
const existingSets = readJson(setsPath);

// Remove any existing md entry (in case of re-run)
const filteredSets = existingSets.filter(s => s.id !== 'md');

const mdSetEntry = {
  id: 'md',
  language: 'ja',
  name: 'メガドリームex',
  series: 'Scarlet & Violet',
  releaseDate: '2025-10-17',
  printedTotal: 193,
  regulationMark: 'I',
  logo: 'images/sets/md/logo.png',
};

const newSets = [...filteredSets, mdSetEntry];
fs.writeFileSync(setsPath, JSON.stringify(newSets, null, 2), 'utf8');
console.log(`sets.json: ${filteredSets.length} existing + 1 md = ${newSets.length} total`);
console.log('Done.');
