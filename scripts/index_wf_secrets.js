// Append wf secret rare index entries (wf-72 through wf-100) to data/index.json
// Run: node scripts/index_wf_secrets.js
'use strict';
const fs   = require('fs');
const path = require('path');

const wfPath    = path.join(__dirname, '..', 'data', 'cards', 'wf.json');
const indexPath = path.join(__dirname, '..', 'data', 'index.json');

const wf    = JSON.parse(fs.readFileSync(wfPath,    'utf8').replace(/^﻿/, ''));
const index = JSON.parse(fs.readFileSync(indexPath, 'utf8').replace(/^﻿/, ''));

const secrets = wf.filter(c => parseInt(c.id.replace('wf-', '')) >= 72);

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
console.log(`Added ${toAdd.length} wf secret rare entries`);
