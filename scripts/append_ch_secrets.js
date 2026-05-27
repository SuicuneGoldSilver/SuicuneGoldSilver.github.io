// Append ch secret rares (cards 67–96) to data/cards/ch.json
// Run: node scripts/append_ch_secrets.js
//
// JP→EN mapping notes:
//   EN set: twilightmasquerade (setId: tm), printedTotal 167, total 225
//   EN secret rares: 168–225 (58 cards); ch gets 29 EN cards, mc gets the other 29
//   ch-75 Hisuian Growlithe AR: not in ch base set — built inline
//   ch-95 Rescue Board MUR: newTrainer, reg H (reprint)
//   ch-96 Luminous Energy MUR: JP-only (imageEn: null)
//   AR→EN: 168,171,172,173,175,176,177,180,181,182,185,188 (12 ch AR, all have EN)
//   SR Pokémon→EN: 189,191,196,197,198,202 (6)
//   SR Trainers→EN: 203,208,209,207 (4: Caretaker, Lucian, Perrin, Lana's Aid)
//   SAR Pokémon→EN: 210,214,216 (3)
//   SAR Trainers→EN: 219,220 (2: Lana's Aid, Perrin)
//   MUR Pokémon→EN: 222 (1: Bloodmoon Ursaluna ex)
//   MUR Trainers→EN: 225 (1: Rescue Board)
//   MUR JP-only: 96 Luminous Energy
'use strict';
const fs   = require('fs');
const path = require('path');

const chPath = path.join(__dirname, '..', 'data', 'cards', 'ch.json');
const ch     = JSON.parse(fs.readFileSync(chPath, 'utf8').replace(/^﻿/, ''));

function base(id) { return ch.find(c => c.id === id); }

function pokeSR(jpNum, enNum, rarityJa, rarity, artist, baseId) {
  const b   = base(baseId);
  const pad = n => String(n).padStart(3, '0');
  return {
    ...b,
    id:       `ch-${jpNum}`,
    setIdEn:  enNum ? 'tm' : null,
    numberJa: `${pad(jpNum)}/066`,
    numberEn: enNum ? `${pad(enNum)}/167` : null,
    rarity,
    rarityJa,
    artist,
    imageJa: `images/sets/ch/jp/${jpNum}.jpg`,
    imageEn: enNum ? `images/sets/ch/en/${jpNum}.jpg` : null,
  };
}

function trainerSR(jpNum, enNum, rarityJa, rarity, artist, baseId) {
  const b   = base(baseId);
  const pad = n => String(n).padStart(3, '0');
  return {
    ...b,
    id:       `ch-${jpNum}`,
    setIdEn:  'tm',
    numberJa: `${pad(jpNum)}/066`,
    numberEn: `${pad(enNum)}/167`,
    rarity,
    rarityJa,
    artist,
    imageJa: `images/sets/ch/jp/${jpNum}.jpg`,
    imageEn: `images/sets/ch/en/${jpNum}.jpg`,
  };
}

function trainerSAR(jpNum, enNum, rarityJa, rarity, artist, baseId) {
  const b   = base(baseId);
  const pad = n => String(n).padStart(3, '0');
  return {
    ...b,
    id:       `ch-${jpNum}`,
    setIdEn:  'tm',
    numberJa: `${pad(jpNum)}/066`,
    numberEn: `${pad(enNum)}/167`,
    rarity,
    rarityJa,
    artist,
    imageJa: `images/sets/ch/jp/${jpNum}.jpg`,
    imageEn: `images/sets/ch/en/${jpNum}.jpg`,
  };
}

function newTrainer(jpNum, enNum, rarityJa, rarity, artist, nameJa, nameEn, subtypes, textJa, textEn, regulationMark = 'I') {
  const pad = n => String(n).padStart(3, '0');
  return {
    id:       `ch-${jpNum}`,
    setIdJa:  'ch',
    setIdEn:  enNum ? 'tm' : null,
    numberJa: `${pad(jpNum)}/066`,
    numberEn: enNum ? `${pad(enNum)}/167` : null,
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
    imageJa: `images/sets/ch/jp/${jpNum}.jpg`,
    imageEn: enNum ? `images/sets/ch/en/${jpNum}.jpg` : null,
  };
}

// ch-75 Hisuian Growlithe: Fighting-type, not in ch base set — built inline
function hisGrowlithe() {
  const pad = n => String(n).padStart(3, '0');
  return {
    id:       'ch-75',
    setIdJa:  'ch',
    setIdEn:  'tm',
    numberJa: '075/066',
    numberEn: '181/167',
    nameJa:   'ヒスイのガーディ',
    nameEn:   'Hisuian Growlithe',
    supertype: 'Pokémon',
    subtypes:  ['Basic'],
    types:    ['Fighting'],
    hp:       80,
    abilities: [],
    attacks: [
      { name: 'Blazing Destruction', cost: [], damage: '', text: 'Discard a Stadium in play.' },
      { name: 'Take Down', cost: ['Fighting', 'Colorless'], damage: '40', text: 'This Pokémon also does 10 damage to itself.' },
    ],
    weaknesses:  [{ type: 'Grass', value: '×2' }],
    resistances: [],
    retreatCost: ['Colorless', 'Colorless'],
    regulationMark: 'H',
    rarity:   'Illustration Rare',
    rarityJa: 'AR',
    artist:   'GIDORA',
    nationalPokedexNumber: 58,
    textJa: null,
    textEn: null,
    imageJa: 'images/sets/ch/jp/75.jpg',
    imageEn: 'images/sets/ch/en/75.jpg',
  };
}

const secrets = [
  // ── AR Pokémon (67–78) ───────────────────────────────────────────────────
  pokeSR(67,  168, 'AR', 'Illustration Rare', 'Yukihiro Tada',    'ch-3'),   // Pinsir
  pokeSR(68,  171, 'AR', 'Illustration Rare', 'Saboteri',         'ch-8'),   // Poltchageist
  pokeSR(69,  172, 'AR', 'Illustration Rare', 'Masa',             'ch-14'),  // Torkoal
  pokeSR(70,  173, 'AR', 'Illustration Rare', 'Krgc',             'ch-17'),  // Infernape
  pokeSR(71,  175, 'AR', 'Illustration Rare', 'Takashi Shiraishi','ch-22'),  // Phione
  pokeSR(72,  176, 'AR', 'Illustration Rare', 'Fujimoto Gold',    'ch-25'),  // Cramorant
  pokeSR(73,  177, 'AR', 'Illustration Rare', 'Tonji Matsuno',    'ch-29'),  // Heliolisk
  pokeSR(74,  180, 'AR', 'Illustration Rare', 'GOTO minori',      'ch-39'),  // Enamorus
  hisGrowlithe(),                                                             // ch-75 Hisuian Growlithe (custom)
  pokeSR(76,  182, 'AR', 'Illustration Rare', 'Kariya',           'ch-44'),  // Probopass
  pokeSR(77,  185, 'AR', 'Illustration Rare', 'Katsunori Sato',   'ch-48'),  // Applin
  pokeSR(78,  188, 'AR', 'Illustration Rare', 'Narumi Sato',      'ch-50'),  // Eevee

  // ── SR ex Pokémon (79–84) ────────────────────────────────────────────────
  pokeSR(79,  189, 'SR', 'Special Illustration Rare', 'aky CG Works',      'ch-9'),   // Sinistcha ex
  pokeSR(80,  191, 'SR', 'Special Illustration Rare', 'PLANETA Mochizuki', 'ch-13'),  // Magcargo ex
  pokeSR(81,  196, 'SR', 'Special Illustration Rare', 'PLANETA Mochizuki', 'ch-33'),  // Iron Thorns ex
  pokeSR(82,  197, 'SR', 'Special Illustration Rare', 'akagi',             'ch-40'),  // Scream Tail ex
  pokeSR(83,  198, 'SR', 'Special Illustration Rare', '5ban Graphics',     'ch-45'),  // Greninja ex
  pokeSR(84,  202, 'SR', 'Special Illustration Rare', 'aky CG Works',      'ch-52'),  // Bloodmoon Ursaluna ex

  // ── SR Trainers (85–88) ──────────────────────────────────────────────────
  trainerSR(85, 203, 'SR', 'Special Illustration Rare', 'Akira Komayama', 'ch-61'),  // Caretaker
  trainerSR(86, 208, 'SR', 'Special Illustration Rare', 'hncl',           'ch-62'),  // Lucian
  trainerSR(87, 209, 'SR', 'Special Illustration Rare', 'Naoki Saito',    'ch-63'),  // Perrin
  trainerSR(88, 207, 'SR', 'Special Illustration Rare', 'Atsushi Furusawa','ch-64'), // Lana's Aid

  // ── SAR ex Pokémon (89–91) ───────────────────────────────────────────────
  pokeSR(89,  210, 'SAR', 'Special Art Rare', 'Saboteri',        'ch-9'),   // Sinistcha ex
  pokeSR(90,  214, 'SAR', 'Special Art Rare', 'akagi',           'ch-45'),  // Greninja ex
  pokeSR(91,  216, 'SAR', 'Special Art Rare', 'MINAMINAMI Take', 'ch-52'),  // Bloodmoon Ursaluna ex

  // ── SAR Trainers (92–93) ─────────────────────────────────────────────────
  trainerSAR(92, 220, 'SAR', 'Special Art Rare', 'GIDORA',       'ch-63'),  // Perrin
  trainerSAR(93, 219, 'SAR', 'Special Art Rare', 'Toshinao Aoki','ch-64'),  // Lana's Aid

  // ── MUR ex Pokémon (94) ──────────────────────────────────────────────────
  pokeSR(94,  222, 'MUR', 'Hyper Rare', 'aky CG Works', 'ch-52'),  // Bloodmoon Ursaluna ex

  // ── MUR Trainer (95) ─────────────────────────────────────────────────────
  newTrainer(95, 225, 'MUR', 'Hyper Rare', 'Toyste Beach',
    '緊急ボード', 'Rescue Board', ['Pokémon Tool'],
    'このカードをつけているポケモンは、にげるためのエネルギーが1個ぶん少なくなる。そのポケモンの残りHPが「30」以下なら、にげるためのエネルギーは、すべてなくなる。',
    'The Retreat Cost of the Pokémon this card is attached to is 1 less. If that Pokémon\'s remaining HP is 30 or less, it has no Retreat Cost.',
    'H'),

  // ── MUR Special Energy (96) — JP-only ────────────────────────────────────
  {
    id:       'ch-96',
    setIdJa:  'ch',
    setIdEn:  null,
    numberJa: '096/066',
    numberEn: null,
    nameJa:   'ルミナスエネルギー',
    nameEn:   'Luminous Energy',
    supertype: 'Energy',
    subtypes:  ['Special'],
    types:    [],
    hp:       null,
    abilities: [],
    attacks:  [],
    weaknesses:  [],
    resistances: [],
    retreatCost: [],
    regulationMark: 'H',
    rarity:   'Hyper Rare',
    rarityJa: 'MUR',
    artist:   null,
    nationalPokedexNumber: null,
    textJa: 'このカードをつけているポケモンは、すべてのエネルギーとして1個ぶん使える。ただし、このカード以外の特殊エネルギーがついているなら、かわりに「無色エネルギー1個ぶん」として使える。基本エネルギーカードとしては扱わない。',
    textEn: 'As long as this card is attached to a Pokémon, it provides every type of Energy but provides only 1 Energy at a time. If the Pokémon this card is attached to has any other Special Energy cards attached, this card provides 1 Colorless Energy instead.',
    imageJa: 'images/sets/ch/jp/96.jpg',
    imageEn: null,
  },
];

const updated = [...ch, ...secrets];
fs.writeFileSync(chPath, JSON.stringify(updated, null, 2), 'utf8');
console.log(`ch.json updated: ${ch.length} → ${updated.length} cards`);
console.log(`Added ${secrets.length} secret rare entries (ch-67 through ch-96)`);
console.log('NOTE: JP images (67–96) and EN images must still be downloaded.');
