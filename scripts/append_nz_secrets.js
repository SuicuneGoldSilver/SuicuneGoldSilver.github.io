// Append nz secret rares (cards 81–117) to data/cards/nz.json
// Run: node scripts/append_nz_secrets.js
'use strict';
const fs   = require('fs');
const path = require('path');

const nzPath = path.join(__dirname, '..', 'data', 'cards', 'nz.json');
const nz     = JSON.parse(fs.readFileSync(nzPath, 'utf8'));

// Helper — find a base card (numberJa ≤ 080)
function base(id) { return nz.find(c => c.id === id); }

// Build a Pokémon secret rare by copying all data from a base card
function pokeSR(jpNum, enNum, rarityJa, rarity, artist, baseId, opts = {}) {
  const b   = base(baseId);
  const pad = n => String(n).padStart(3, '0');
  return {
    id:          `nz-${jpNum}`,
    setIdJa:     'nz',
    setIdEn:     enNum ? 'por' : null,
    numberJa:    `${pad(jpNum)}/080`,
    numberEn:    enNum ? `${pad(enNum)}/088` : null,
    nameJa:      opts.nameJa  ?? b.nameJa,
    nameEn:      opts.nameEn  ?? b.nameEn,
    supertype:   b.supertype,
    subtypes:    b.subtypes,
    types:       b.types,
    hp:          b.hp,
    evolvesFrom: b.evolvesFrom,
    abilities:   b.abilities,
    attacks:     b.attacks,
    weaknesses:  b.weaknesses,
    resistances: b.resistances,
    retreatCost: b.retreatCost,
    regulationMark: b.regulationMark,
    rarity,
    rarityJa,
    artist,
    nationalPokedexNumber: b.nationalPokedexNumber,
    imageJa: `images/sets/nz/jp/${jpNum}.jpg`,
    imageEn: enNum ? `images/sets/nz/en/${jpNum}.jpg` : null,
  };
}

// Build a Trainer secret rare by copying from a base card
function trainerSR(jpNum, enNum, rarityJa, rarity, artist, baseId) {
  const b   = base(baseId);
  const pad = n => String(n).padStart(3, '0');
  return {
    id:       `nz-${jpNum}`,
    setIdJa:  'nz',
    setIdEn:  enNum ? 'por' : null,
    numberJa: `${pad(jpNum)}/080`,
    numberEn: enNum ? `${pad(enNum)}/088` : null,
    nameJa:   b.nameJa,
    nameEn:   b.nameEn,
    supertype: b.supertype,
    subtypes:  b.subtypes,
    textJa:   b.textJa,
    textEn:   b.textEn,
    regulationMark: b.regulationMark,
    rarity,
    rarityJa,
    artist,
    imageJa: `images/sets/nz/jp/${jpNum}.jpg`,
    imageEn: enNum ? `images/sets/nz/en/${jpNum}.jpg` : null,
  };
}

// Build a "new" Trainer (not in base set — full data supplied manually)
function newTrainer(jpNum, enNum, rarityJa, rarity, artist, nameJa, nameEn, supertype, subtypes, textJa, textEn) {
  const pad = n => String(n).padStart(3, '0');
  return {
    id:       `nz-${jpNum}`,
    setIdJa:  'nz',
    setIdEn:  enNum ? 'por' : null,
    numberJa: `${pad(jpNum)}/080`,
    numberEn: enNum ? `${pad(enNum)}/088` : null,
    nameJa,
    nameEn,
    supertype,
    subtypes,
    textJa,
    textEn,
    regulationMark: 'J',
    rarity,
    rarityJa,
    artist,
    imageJa: `images/sets/nz/jp/${jpNum}.jpg`,
    imageEn: enNum ? `images/sets/nz/en/${jpNum}.jpg` : null,
  };
}

const secrets = [
  // ── AR Pokémon (81–92) ──────────────────────────────────────────────────
  pokeSR(81,  89,  'AR', 'Illustration Rare', 'kamonabe',        'nz-8'),
  pokeSR(82,  90,  'AR', 'Illustration Rare', 'ryoma uratsuka',  'nz-10'),
  pokeSR(83,  91,  'AR', 'Illustration Rare', 'OKACHEKE',        'nz-14'),
  pokeSR(84,  92,  'AR', 'Illustration Rare', 'Masa',            'nz-23'),
  pokeSR(85,  93,  'AR', 'Illustration Rare', 'HYOCONOSUKE',     'nz-28'),
  pokeSR(86,  94,  'AR', 'Illustration Rare', 'Cona Nitanda',    'nz-29'),
  pokeSR(87,  95,  'AR', 'Illustration Rare', 'MINAMINAMI Take', 'nz-32'),
  pokeSR(88,  96,  'AR', 'Illustration Rare', 'Kinu Nishimura',  'nz-37'),
  pokeSR(89,  null,'AR', 'Illustration Rare', 'Shimaris Yokichi','nz-43'),  // Tyrunt — no EN
  pokeSR(90,  97,  'AR', 'Illustration Rare', 'kawayoo',         'nz-51'),
  pokeSR(91,  98,  'AR', 'Illustration Rare', 'Anesaki Dynamic', 'nz-56'),
  pokeSR(92,  99,  'AR', 'Illustration Rare', 'Mina Nakai',      'nz-60'),

  // ── SR ex Pokémon (93–100) ───────────────────────────────────────────────
  pokeSR(93,  100, 'SR', 'Special Illustration Rare', '5ban Graphics', 'nz-12'),
  pokeSR(94,  101, 'SR', 'Special Illustration Rare', '5ban Graphics', 'nz-16'),
  pokeSR(95,  102, 'SR', 'Special Illustration Rare', '5ban Graphics', 'nz-21'),
  pokeSR(96,  103, 'SR', 'Special Illustration Rare', 'aky CG Works',  'nz-30'),
  pokeSR(97,  104, 'SR', 'Special Illustration Rare', 'takuyoa',       'nz-46'),
  pokeSR(98,  105, 'SR', 'Special Illustration Rare', '5ban Graphics', 'nz-52'),
  pokeSR(99,  106, 'SR', 'Special Illustration Rare', '5ban Graphics', 'nz-54'),
  pokeSR(100, 107, 'SR', 'Special Illustration Rare', '5ban Graphics', 'nz-61'),

  // ── SR Trainers & Stadiums (101–110) ─────────────────────────────────────
  // 101 Energy Recycler — not in base set, supply manually
  newTrainer(101, 108, 'SR', 'Special Illustration Rare', 'Toyste Beach',
    'エネルギーリサイクル', 'Energy Recycler', 'Trainer', ['Item'],
    '自分のトラッシュから基本エネルギーを5枚まで選び、山札にもどして切る。',
    'Shuffle up to 5 Basic Energy cards from your discard pile into your deck.'),
  // 102 Sacred Ash — not in base set
  newTrainer(102, 115, 'SR', 'Special Illustration Rare', 'Toyste Beach',
    'せいなるはい', 'Sacred Ash', 'Trainer', ['Item'],
    '自分のトラッシュからポケモンを5枚まで選び、相手に見せて、山札にもどして切る。',
    'Shuffle up to 5 Pokémon from your discard pile into your deck.'),
  trainerSR(103, 113, 'SR', 'Special Illustration Rare', 'Studio Bora Inc.', 'nz-70'),  // Poké Pad
  // 104 Wondrous Patch — not in base set
  newTrainer(104, 117, 'SR', 'Special Illustration Rare', 'Studio Bora Inc.',
    'ワンダーパッチ', 'Wondrous Patch', 'Trainer', ['Item'],
    '自分のトラッシュから「基本超エネルギー」を1枚選び、ベンチの超ポケモンにつける。',
    'Attach a Basic Psychic Energy card from your discard pile to 1 of your Benched Psychic Pokémon.'),
  trainerSR(105, 116, 'SR', 'Special Illustration Rare', 'Akira Komayama', 'nz-73'),   // Tarragon
  trainerSR(106, 112, 'SR', 'Special Illustration Rare', 'DOM',            'nz-74'),   // Naveen
  trainerSR(107, 114, 'SR', 'Special Illustration Rare', 'Atsushi Furusawa','nz-75'),  // Rosa's Encouragement
  trainerSR(108, 110, 'SR', 'Special Illustration Rare', 'Susumu Maeya',   'nz-76'),  // Jacinthe
  // 109 Forest of Vitality — not in base set
  newTrainer(109, 109, 'SR', 'Special Illustration Rare', 'AYUMI ODASHIMA',
    '活力の森', 'Forest of Vitality', 'Trainer', ['Stadium'],
    'おたがいの草ポケモン全員は、出したばかりの番（最初の自分の番をのぞく）でも草ポケモンに進化できる。',
    "Each player's Grass Pokémon can evolve into Grass Pokémon during the turn they play those Pokémon, except during their first turn."),
  trainerSR(110, 111, 'SR', 'Special Illustration Rare', 'MARINA Chikazawa','nz-77'), // Lumiose City

  // ── SAR gold ex Pokémon (111–116) ────────────────────────────────────────
  pokeSR(111, 118, 'SAR', 'Special Art Rare', 'takuyoa',          'nz-21'),  // Mega Starmie ex
  pokeSR(112, 119, 'SAR', 'Special Art Rare', 'Cona Nitanda',     'nz-30'),  // Mega Clefable ex
  pokeSR(113, 120, 'SAR', 'Special Art Rare', 'kantaro',          'nz-46'),  // Mega Zygarde ex
  pokeSR(114, 121, 'SAR', 'Special Art Rare', 'Natsumi Yoshida',  'nz-61'),  // Meowth ex
  pokeSR(115, 123, 'SAR', 'Special Art Rare', 'Iori Suzuki',      'nz-75', {nameJa:'メイのはげまし', nameEn:"Rosa's Encouragement"}),  // Rosa's — Trainer, override names
  pokeSR(116, 122, 'SAR', 'Special Art Rare', 'Souichirou Gunjima','nz-76', {nameJa:'ユカリ', nameEn:'Jacinthe'}),  // Jacinthe

  // ── MUR gold Pokémon (117) ───────────────────────────────────────────────
  pokeSR(117, 124, 'MUR', 'Hyper Rare', 'takuyoa', 'nz-46'),  // Mega Zygarde ex
];

// Fix: cards 115–116 are SAR Trainer cards — their pokeSR call will have Pokémon fields.
// Re-build them correctly as Trainer-type SAR cards.
function trainerSAR(jpNum, enNum, rarityJa, rarity, artist, baseId) {
  const b   = base(baseId);
  const pad = n => String(n).padStart(3, '0');
  return {
    id:       `nz-${jpNum}`,
    setIdJa:  'nz',
    setIdEn:  'por',
    numberJa: `${pad(jpNum)}/080`,
    numberEn: `${pad(enNum)}/088`,
    nameJa:   b.nameJa,
    nameEn:   b.nameEn,
    supertype: b.supertype,
    subtypes:  b.subtypes,
    textJa:   b.textJa,
    textEn:   b.textEn,
    regulationMark: 'J',
    rarity,
    rarityJa,
    artist,
    imageJa: `images/sets/nz/jp/${jpNum}.jpg`,
    imageEn: `images/sets/nz/en/${jpNum}.jpg`,
  };
}

// Replace the pokeSR-built entries for 115 and 116 with correct Trainer-type entries
const idx115 = secrets.findIndex(c => c.id === 'nz-115');
const idx116 = secrets.findIndex(c => c.id === 'nz-116');
secrets[idx115] = trainerSAR(115, 123, 'SAR', 'Special Art Rare', 'Iori Suzuki',       'nz-75');
secrets[idx116] = trainerSAR(116, 122, 'SAR', 'Special Art Rare', 'Souichirou Gunjima','nz-76');

// Append to nz.json
const updated = [...nz, ...secrets];
fs.writeFileSync(nzPath, JSON.stringify(updated, null, 2), 'utf8');
console.log(`nz.json updated: ${nz.length} → ${updated.length} cards`);
console.log(`Added ${secrets.length} secret rare entries (nz-81 through nz-117)`);
