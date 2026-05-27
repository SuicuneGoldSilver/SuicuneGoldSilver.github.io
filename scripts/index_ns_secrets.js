// Append ns secret rare index entries (ns-84 through ns-120) to data/index.json
// Run: node scripts/index_ns_secrets.js
'use strict';
const fs   = require('fs');
const path = require('path');

const nsPath    = path.join(__dirname, '..', 'data', 'cards', 'ns.json');
const indexPath = path.join(__dirname, '..', 'data', 'index.json');

const ns    = JSON.parse(fs.readFileSync(nsPath,    'utf8'));
const index = JSON.parse(fs.readFileSync(indexPath, 'utf8'));

const secrets = ns.filter(c => parseInt(c.id.replace('ns-', '')) >= 84);

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

const existingIds = new Set(index.map(e => e.id));
const toAdd = newEntries.filter(e => !existingIds.has(e.id));

const updated = [...index, ...toAdd];
fs.writeFileSync(indexPath, JSON.stringify(updated, null, 2), 'utf8');
console.log(`index.json updated: ${index.length} → ${updated.length} entries`);
console.log(`Added ${toAdd.length} ns secret rare entries`);
