// Append nz secret rare index entries (nz-81 through nz-117) to data/index.json
// Run: node scripts/index_nz_secrets.js
'use strict';
const fs   = require('fs');
const path = require('path');

const nzPath    = path.join(__dirname, '..', 'data', 'cards', 'nz.json');
const indexPath = path.join(__dirname, '..', 'data', 'index.json');

const nz    = JSON.parse(fs.readFileSync(nzPath,    'utf8'));
const index = JSON.parse(fs.readFileSync(indexPath, 'utf8'));

const secrets = nz.filter(c => parseInt(c.id.replace('nz-', '')) >= 81);

const newEntries = secrets.map(c => ({
  id:        c.id,
  setIdJa:   c.setIdJa,
  nameJa:    c.nameJa,
  nameEn:    c.nameEn,
  types:     c.types ?? [],
  imageJa:   c.imageJa,
  imageEn:   c.imageEn,
  enAvailable: c.imageEn !== null,
}));

// Check for duplicates
const existingIds = new Set(index.map(e => e.id));
const toAdd = newEntries.filter(e => !existingIds.has(e.id));

const updated = [...index, ...toAdd];
fs.writeFileSync(indexPath, JSON.stringify(updated, null, 2), 'utf8');
console.log(`index.json updated: ${index.length} → ${updated.length} entries`);
console.log(`Added ${toAdd.length} nz secret rare entries`);
