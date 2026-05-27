// Append sm secret rare index entries (sm-103 through sm-135) to data/index.json
// Run: node scripts/index_sm_secrets.js
'use strict';
const fs   = require('fs');
const path = require('path');

const smPath    = path.join(__dirname, '..', 'data', 'cards', 'sm.json');
const indexPath = path.join(__dirname, '..', 'data', 'index.json');

const sm    = JSON.parse(fs.readFileSync(smPath,    'utf8').replace(/^﻿/, ''));
const index = JSON.parse(fs.readFileSync(indexPath, 'utf8').replace(/^﻿/, ''));

const secrets = sm.filter(c => parseInt(c.id.replace('sm-', '')) >= 103);

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
console.log(`Added ${toAdd.length} sm secret rare entries`);
