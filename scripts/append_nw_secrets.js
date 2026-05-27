// Append nw secret rares (cards 65–94) to data/cards/nw.json
// Run: node scripts/append_nw_secrets.js
//
// JP→EN mapping notes:
//   EN set: shroudedfable (setId: sf), printedTotal 64, total 99
//   EN secret rares: 65–99 (35 cards); nw gets 30, mc gets 3 (sf 72-74 = mc ARs)
//   sf 72/73/74 = mc-107 Munkidori / mc-108 Fezandipiti / mc-110 Okidogi ARs
//   sf 98/99 = Darkness Energy / Metal Energy (EN-exclusive)
//   nw-72..76 shift +3 in EN (sf 75..79) due to mc cards inserted at sf 72-74
//   SR Trainer reordering: nw-83(Colress's Tenacity)→sf-87, nw-84(Janine)→sf-88,
//     nw-85(Cassiopeia)→sf-86, nw-86(Xerosic's)→sf-89
//   nw-93 Earthen Vessel MUR: newTrainer (reprint, not in nw base set)
//   AR→EN: 65-71 unchanged; 72→75, 73→76, 74→77, 75→78, 76→79
//   SR Pokémon→EN: 80,81,82,83,84,85
//   SAR Pokémon→EN: 90,91,92,93
//   SAR Trainer→EN: 94
//   MUR→EN: 95,96,97
'use strict';
const fs   = require('fs');
const path = require('path');

const nwPath = path.join(__dirname, '..', 'data', 'cards', 'nw.json');
const nw     = JSON.parse(fs.readFileSync(nwPath, 'utf8').replace(/^﻿/, ''));

function base(id) { return nw.find(c => c.id === id); }

function pokeSR(jpNum, enNum, rarityJa, rarity, artist, baseId) {
  const b   = base(baseId);
  const pad = n => String(n).padStart(3, '0');
  return {
    ...b,
    id:       `nw-${jpNum}`,
    setIdEn:  'sf',
    numberJa: `${pad(jpNum)}/064`,
    numberEn: `${pad(enNum)}/064`,
    rarity,
    rarityJa,
    artist,
    imageJa: `images/sets/nw/jp/${jpNum}.jpg`,
    imageEn: `images/sets/nw/en/${jpNum}.jpg`,
  };
}

function trainerSR(jpNum, enNum, rarityJa, rarity, artist, baseId) {
  const b   = base(baseId);
  const pad = n => String(n).padStart(3, '0');
  return {
    ...b,
    id:       `nw-${jpNum}`,
    setIdEn:  'sf',
    numberJa: `${pad(jpNum)}/064`,
    numberEn: `${pad(enNum)}/064`,
    rarity,
    rarityJa,
    artist,
    imageJa: `images/sets/nw/jp/${jpNum}.jpg`,
    imageEn: `images/sets/nw/en/${jpNum}.jpg`,
  };
}

function trainerSAR(jpNum, enNum, rarityJa, rarity, artist, baseId) {
  const b   = base(baseId);
  const pad = n => String(n).padStart(3, '0');
  return {
    ...b,
    id:       `nw-${jpNum}`,
    setIdEn:  'sf',
    numberJa: `${pad(jpNum)}/064`,
    numberEn: `${pad(enNum)}/064`,
    rarity,
    rarityJa,
    artist,
    imageJa: `images/sets/nw/jp/${jpNum}.jpg`,
    imageEn: `images/sets/nw/en/${jpNum}.jpg`,
  };
}

function newTrainer(jpNum, enNum, rarityJa, rarity, artist, nameJa, nameEn, subtypes, textJa, textEn, regulationMark = 'H') {
  const pad = n => String(n).padStart(3, '0');
  return {
    id:       `nw-${jpNum}`,
    setIdJa:  'nw',
    setIdEn:  'sf',
    numberJa: `${pad(jpNum)}/064`,
    numberEn: `${pad(enNum)}/064`,
    nameJa,
    nameEn,
    supertype: 'Trainer',
    subtypes,
    types: [],
    hp: null,
    abilities: [],
    attacks: [],
    weaknesses: [],
    resistances: [],
    retreatCost: [],
    regulationMark,
    rarity,
    rarityJa,
    artist,
    nationalPokedexNumber: null,
    textJa,
    textEn,
    imageJa: `images/sets/nw/jp/${jpNum}.jpg`,
    imageEn: `images/sets/nw/en/${jpNum}.jpg`,
  };
}

const secrets = [
  // ── AR Pokémon (65–76) ───────────────────────────────────────────────────
  pokeSR(65, 65, 'AR', 'Illustration Rare', 'IKEDA Saki',      'nw-6'),   // Tapu Bulu
  pokeSR(66, 66, 'AR', 'Illustration Rare', 'Taiga Kasai',     'nw-8'),   // Houndoom
  pokeSR(67, 67, 'AR', 'Illustration Rare', 'Shinya Komatsu',  'nw-10'),  // Horsea
  pokeSR(68, 68, 'AR', 'Illustration Rare', 'James Turner',    'nw-18'),  // Duskull
  pokeSR(69, 69, 'AR', 'Illustration Rare', 'James Turner',    'nw-19'),  // Dusclops
  pokeSR(70, 70, 'AR', 'Illustration Rare', 'James Turner',    'nw-20'),  // Dusknoir
  pokeSR(71, 71, 'AR', 'Illustration Rare', 'satoma',          'nw-21'),  // Cresselia
  pokeSR(72, 75, 'AR', 'Illustration Rare', 'REND',            'nw-31'),  // Zorua
  pokeSR(73, 76, 'AR', 'Illustration Rare', 'Mina Nakai',      'nw-41'),  // Cufant
  pokeSR(74, 77, 'AR', 'Illustration Rare', 'MINAMINAMI Take', 'nw-45'),  // Fraxure
  pokeSR(75, 78, 'AR', 'Illustration Rare', 'Whisker',         'nw-49'),  // Persian
  pokeSR(76, 79, 'AR', 'Illustration Rare', 'Takeshi Nakamura','nw-53'),  // Bewear

  // ── SR ex Pokémon (77–82) ────────────────────────────────────────────────
  pokeSR(77, 80, 'SR', 'Special Illustration Rare', 'PLANETA Igarashi', 'nw-12'),  // Kingdra ex
  pokeSR(78, 81, 'SR', 'Special Illustration Rare', 'PLANETA Mochizuki','nw-15'),  // Revavroom ex
  pokeSR(79, 82, 'SR', 'Special Illustration Rare', '5ban Graphics',    'nw-36'),  // Okidogi ex
  pokeSR(80, 83, 'SR', 'Special Illustration Rare', '5ban Graphics',    'nw-37'),  // Munkidori ex
  pokeSR(81, 84, 'SR', 'Special Illustration Rare', '5ban Graphics',    'nw-38'),  // Fezandipiti ex
  pokeSR(82, 85, 'SR', 'Special Illustration Rare', 'aky CG Works',     'nw-39'),  // Pecharunt ex

  // ── SR Trainers (83–86) ──────────────────────────────────────────────────
  trainerSR(83, 87, 'SR', 'Special Illustration Rare', 'hncl',           'nw-59'),  // Colress's Tenacity
  trainerSR(84, 88, 'SR', 'Special Illustration Rare', 'Taira Akitsu',   'nw-60'),  // Janine's Secret Art
  trainerSR(85, 86, 'SR', 'Special Illustration Rare', 'Atsushi Furusawa','nw-61'), // Cassiopeia
  trainerSR(86, 89, 'SR', 'Special Illustration Rare', 'GOSSAN',         'nw-62'),  // Xerosic's Machinations

  // ── SAR ex Pokémon (87–90) ───────────────────────────────────────────────
  pokeSR(87, 90, 'SAR', 'Special Art Rare', 'Kantaro', 'nw-36'),  // Okidogi ex
  pokeSR(88, 91, 'SAR', 'Special Art Rare', 'Kantaro', 'nw-37'),  // Munkidori ex
  pokeSR(89, 92, 'SAR', 'Special Art Rare', 'Kantaro', 'nw-38'),  // Fezandipiti ex
  pokeSR(90, 93, 'SAR', 'Special Art Rare', 'Kantaro', 'nw-39'),  // Pecharunt ex

  // ── SAR Trainer (91) ─────────────────────────────────────────────────────
  trainerSAR(91, 94, 'SAR', 'Special Art Rare', 'burari', 'nw-61'),  // Cassiopeia

  // ── MUR (92–94) ──────────────────────────────────────────────────────────
  pokeSR(92, 95, 'MUR', 'Hyper Rare', 'aky CG Works', 'nw-39'),  // Pecharunt ex

  newTrainer(93, 96, 'MUR', 'Hyper Rare', 'AYUMI ODASHIMA',
    '大地の器', 'Earthen Vessel', ['Item'],
    'このカードは、自分の手札を1枚トラッシュしなければ使えない。自分の山札から基本エネルギーを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。',
    'You can use this card only if you discard another card from your hand. Search your deck for up to 2 Basic Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.'),

  pokeSR(94, 97, 'MUR', 'Hyper Rare', 'Studio Bora Inc.', 'nw-58'),  // Powerglass
];

const updated = [...nw, ...secrets];
fs.writeFileSync(nwPath, JSON.stringify(updated, null, 2), 'utf8');
console.log(`nw.json updated: ${nw.length} → ${updated.length} cards`);
console.log(`Added ${secrets.length} secret rare entries (nw-65 through nw-94)`);
console.log('NOTE: JP images (65–94) and EN images must still be downloaded.');
