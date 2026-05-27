// Append mb secret rare index entries (mb-64 through mb-92) to data/index.json
// Run: node scripts/index_mb_secrets.js
'use strict';
const fs   = require('fs');
const path = require('path');

const mbPath    = path.join(__dirname, '..', 'data', 'cards', 'mb.json');
const indexPath = path.join(__dirname, '..', 'data', 'index.json');

const mb    = JSON.parse(fs.readFileSync(mbPath,    'utf8').replace(/^﻿/, ''));
const index = JSON.parse(fs.readFileSync(indexPath, 'utf8').replace(/^﻿/, ''));

const secrets = mb.filter(c => parseInt(c.id.replace('mb-', '')) >= 64);

const newEntries = secrets.map(c => ({
  id:          c.id,
  setIdJa:     c.setIdJa,
  nameJa:      c.nameJa,
  nameEn:      c.nameEn,
  types:       c.types ?? [],
  imageJa:     c.imageJa,
  imageEn:     c.imageEn,
  enAvailable: c.imageEn !== null,
}));

const existingIds = new Set(index.map(e => e.id));
const toAdd = newEntries.filter(e => !existingIds.has(e.id));

const updated = [...index, ...toAdd];
fs.writeFileSync(indexPath, JSON.stringify(updated, null, 2), 'utf8');
console.log(`index.json updated: ${index.length} → ${updated.length} entries`);
console.log(`Added ${toAdd.length} mb secret rare entries`);
