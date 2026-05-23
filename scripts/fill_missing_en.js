// Fill missing EN data for ns (Special Energies 81-83) and nz (6 cards).
// Run from project root: node scripts/fill_missing_en.js
const fs = require('fs');
function readJson(p) { let s = fs.readFileSync(p, 'utf8'); if (s.charCodeAt(0) === 0xFEFF) s = s.slice(1); return JSON.parse(s); }

// ── NS ──────────────────────────────────────────────────────────────────────
// Phase 2 assumed JP81→EN84, JP82→EN85, JP83→EN86 (sequential).
// Actual EN order: EN84=Metal, EN85=Fire, EN86=Water.
// Fix numberEn, imageEn, nameEn, textEn for all three.
const nsUpdates = {
  'ns-81': {
    numberEn: '085/086',
    imageEn:  'images/sets/ns/en/85.jpg',
    nameEn:   'Nitro Fire Energy',
    textEn:   "As long as this card is attached to a Pokémon, it provides Fire Energy. If this card is discarded by an effect of an attack used by the Fire Pokémon this card is attached to, put this card into your hand after applying damage and effects. This card can't be used as a Basic Energy.",
  },
  'ns-82': {
    numberEn: '086/086',
    imageEn:  'images/sets/ns/en/86.jpg',
    nameEn:   'Bubbly Water Energy',
    textEn:   "As long as this card is attached to a Pokémon, it provides Water Energy. If this card is attached to a Water Pokémon, that Pokémon recovers from all Special Conditions and can't be affected by Special Conditions. This card can't be used as a Basic Energy.",
  },
  'ns-83': {
    numberEn: '084/086',
    imageEn:  'images/sets/ns/en/84.jpg',
    nameEn:   'Magnetic Metal Energy',
    textEn:   "As long as this card is attached to a Pokémon, it provides Metal Energy. The Metal Pokémon this card is attached to has no Retreat Cost. This card can't be used as a Basic Energy.",
  },
};

const nsPath = 'data/cards/ns.json';
const nsCards = readJson(nsPath);
nsCards.forEach(c => {
  const u = nsUpdates[c.id];
  if (u) Object.assign(c, u);
});
fs.writeFileSync(nsPath, JSON.stringify(nsCards, null, 2), 'utf8');
console.log('ns.json updated');

// ── NZ ──────────────────────────────────────────────────────────────────────
// nz-79 (テレパス超エネルギー, Psychic) has no EN equivalent — stays null.
const nzUpdates = {
  'nz-70': {
    numberEn: '081/088',
    imageEn:  'images/sets/nz/en/81.jpg',
    nameEn:   'Poké Pad',
    textEn:   "Search your deck for a Pokémon that doesn't have a Rule Box, reveal it, and put it into your hand. Then, shuffle your deck.",
  },
  'nz-73': {
    numberEn: '085/088',
    imageEn:  'images/sets/nz/en/85.jpg',
    nameEn:   'Tarragon',
    textEn:   'Put up to 4 in any combination of Fighting Pokémon and Basic Fighting Energy cards from your discard pile into your hand.',
  },
  'nz-75': {
    numberEn: '084/088',
    imageEn:  'images/sets/nz/en/84.jpg',
    nameEn:   "Rosa's Encouragement",
    textEn:   "You can play this card only if you have more Prize cards remaining than your opponent. Attach up to 2 Basic Energy cards from your discard pile to 1 of your Stage 2 Pokémon.",
  },
  'nz-78': {
    numberEn: '086/088',
    imageEn:  'images/sets/nz/en/86.jpg',
    nameEn:   'Growing Grass Energy',
    textEn:   "As long as this card is attached to a Pokémon, it provides Grass Energy. If this card is attached to a Grass Pokémon, that Pokémon gets +20 HP. This card can't be used as a Basic Energy.",
  },
  'nz-80': {
    numberEn: '087/088',
    imageEn:  'images/sets/nz/en/87.jpg',
    nameEn:   'Rocky Fighting Energy',
    textEn:   "As long as this card is attached to a Pokémon, it provides Fighting Energy. Prevent all effects of attacks used by your opponent's Pokémon done to the Fighting Pokémon this card is attached to. This card can't be used as a Basic Energy.",
  },
};

const nzPath = 'data/cards/nz.json';
const nzCards = readJson(nzPath);
nzCards.forEach(c => {
  const u = nzUpdates[c.id];
  if (u) Object.assign(c, u);
});
fs.writeFileSync(nzPath, JSON.stringify(nzCards, null, 2), 'utf8');
console.log('nz.json updated');

// ── INDEX.JSON ───────────────────────────────────────────────────────────────
const allUpdates = { ...nsUpdates, ...nzUpdates };
const indexPath = 'data/index.json';
const index = readJson(indexPath);
let indexChanged = 0;
index.forEach(entry => {
  const u = allUpdates[entry.id];
  if (u) {
    entry.imageEn = u.imageEn;
    entry.nameEn  = u.nameEn;
    entry.enAvailable = true;
    indexChanged++;
  }
});
fs.writeFileSync(indexPath, JSON.stringify(index, null, 2), 'utf8');
console.log('index.json updated:', indexChanged, 'entries');
