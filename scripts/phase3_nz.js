// Phase 3: Add nz set to index.json and sets.json
// Run from project root: node scripts/phase3_nz.js

const fs = require('fs');

function readJson(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  if (content.charCodeAt(0) === 0xFEFF) content = content.slice(1);
  return JSON.parse(content);
}

const nzCards = readJson('data/cards/nz.json');

// ── Build index entries ───────────────────────────────────────────────────────
const newIndexEntries = nzCards.map(card => ({
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
}));

// ── Load and update index.json ────────────────────────────────────────────────
const indexPath = 'data/index.json';
const existingIndex = readJson(indexPath);

const filteredIndex = existingIndex.filter(e => e.setIdJa !== 'nz');
const newIndex = [...filteredIndex, ...newIndexEntries];
fs.writeFileSync(indexPath, JSON.stringify(newIndex, null, 2), 'utf8');
console.log(`index.json: ${filteredIndex.length} existing + ${newIndexEntries.length} nz = ${newIndex.length} total`);

// ── Load and update sets.json ─────────────────────────────────────────────────
const setsPath = 'data/sets.json';
const existingSets = readJson(setsPath);

const filteredSets = existingSets.filter(s => s.id !== 'nz');

const nzSetEntry = {
  id: 'nz',
  language: 'ja',
  name: 'ニヒルゼロ',           // ESTIMATE — verify Japanese set name
  series: 'Scarlet & Violet',
  releaseDate: '2026-01-24',   // ESTIMATE — verify release date
  printedTotal: 80,
  regulationMark: 'J',
  logo: 'images/sets/nz/logo.png',
};

const newSets = [...filteredSets, nzSetEntry];
fs.writeFileSync(setsPath, JSON.stringify(newSets, null, 2), 'utf8');
console.log(`sets.json: ${filteredSets.length} existing + 1 nz = ${newSets.length} total`);
console.log('Done.');
