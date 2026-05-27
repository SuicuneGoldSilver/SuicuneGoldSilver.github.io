// Append pd secret rare index entries (pd-65 through pd-94) to data/index.json
// Run: node scripts/index_pd_secrets.js
'use strict';
const fs   = require('fs');
const path = require('path');

const pdPath    = path.join(__dirname, '..', 'data', 'cards', 'pd.json');
const indexPath = path.join(__dirname, '..', 'data', 'index.json');

const pd    = JSON.parse(fs.readFileSync(pdPath,    'utf8').replace(/^﻿/, ''));
const index = JSON.parse(fs.readFileSync(indexPath, 'utf8').replace(/^﻿/, ''));

const secrets = pd.filter(c => parseInt(c.id.replace('pd-', '')) >= 65);

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
console.log(`Added ${toAdd.length} pd secret rare entries`);
