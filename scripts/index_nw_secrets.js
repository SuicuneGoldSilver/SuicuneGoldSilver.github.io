// Append nw secret rare index entries (nw-65 through nw-94) to data/index.json
// Run: node scripts/index_nw_secrets.js
'use strict';
const fs   = require('fs');
const path = require('path');

const nwPath    = path.join(__dirname, '..', 'data', 'cards', 'nw.json');
const indexPath = path.join(__dirname, '..', 'data', 'index.json');

const nw    = JSON.parse(fs.readFileSync(nwPath,    'utf8').replace(/^﻿/, ''));
const index = JSON.parse(fs.readFileSync(indexPath, 'utf8').replace(/^﻿/, ''));

const secrets = nw.filter(c => parseInt(c.id.replace('nw-', '')) >= 65);

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
console.log(`Added ${toAdd.length} nw secret rare entries`);
