// Append sm secret rares (cards 103–135) to data/cards/sm.json
// Run: node scripts/append_sm_secrets.js
//
// JP→EN mapping notes:
//   EN set: stellarcrown (setId: sv7), printedTotal 142, total 175
//   EN secret rares: 143–175 (33 cards); sm gets 31, 2 EN-exclusive (Bulbasaur 143, Squirtle 148)
//   sm-114 Noctowl AR: JP-only (imageEn: null)
//   sm-122 Terapagos ex SR: JP-only (imageEn: null)
//   sm-107 Crabominable shifts to sv7 149 (Squirtle at 148), sm-112+ shifts +2 from JP pos
//   Wait — AR runs 143-155: 143=Bulbasaur, 148=Squirtle are EN-exclusive inserts
//   AR→EN: 103→144, 104→145, 105→146, 106→147, 107→149, 108→150, 109→151,
//           110→152, 111→153, 112→154, 113→155, 114→null
//   SR Pokémon→EN: 115→156, 116→157, 117→158, 118→159, 119→160, 120→161, 121→162, 122→null
//   SR Trainers→EN: 123(Crispin)→164, 124(Lacey)→166, 125(Kofu)→165, 126(Briar)→163
//   SAR Pokémon→EN: 127→167, 128→168, 129→169, 130→170
//   SAR Trainers→EN: 131(Lacey)→172, 132(Briar)→171
//   MUR→EN: 133(Terapagos)→173, 134(Bravery Charm)→175, 135(Area Zero)→174
//   sm-134 Bravery Charm MUR: newTrainer (reprint, not in sm base set)
'use strict';
const fs   = require('fs');
const path = require('path');

const smPath = path.join(__dirname, '..', 'data', 'cards', 'sm.json');
const sm     = JSON.parse(fs.readFileSync(smPath, 'utf8').replace(/^﻿/, ''));

function base(id) { return sm.find(c => c.id === id); }

function pokeSR(jpNum, enNum, rarityJa, rarity, artist, baseId) {
  const b   = base(baseId);
  const pad3 = n => String(n).padStart(3, '0');
  return {
    ...b,
    id:       `sm-${jpNum}`,
    setIdEn:  enNum ? 'sv7' : null,
    numberJa: `${pad3(jpNum)}/102`,
    numberEn: enNum ? `${pad3(enNum)}/142` : null,
    rarity,
    rarityJa,
    artist,
    imageJa: `images/sets/sm/jp/${jpNum}.jpg`,
    imageEn: enNum ? `images/sets/sm/en/${jpNum}.jpg` : null,
  };
}

function trainerSR(jpNum, enNum, rarityJa, rarity, artist, baseId) {
  const b   = base(baseId);
  const pad3 = n => String(n).padStart(3, '0');
  return {
    ...b,
    id:       `sm-${jpNum}`,
    setIdEn:  'sv7',
    numberJa: `${pad3(jpNum)}/102`,
    numberEn: `${pad3(enNum)}/142`,
    rarity,
    rarityJa,
    artist,
    imageJa: `images/sets/sm/jp/${jpNum}.jpg`,
    imageEn: `images/sets/sm/en/${jpNum}.jpg`,
  };
}

function newTrainer(jpNum, enNum, rarityJa, rarity, artist, nameJa, nameEn, subtypes, textJa, textEn, regulationMark = 'H') {
  const pad3 = n => String(n).padStart(3, '0');
  return {
    id:       `sm-${jpNum}`,
    setIdJa:  'sm',
    setIdEn:  'sv7',
    numberJa: `${pad3(jpNum)}/102`,
    numberEn: `${pad3(enNum)}/142`,
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
    imageJa: `images/sets/sm/jp/${jpNum}.jpg`,
    imageEn: `images/sets/sm/en/${jpNum}.jpg`,
  };
}

const secrets = [
  // ── AR Pokémon (103–114) ─────────────────────────────────────────────────
  pokeSR(103, 144, 'AR', 'Illustration Rare', 'HYOGONOSUKE',      'sm-2'),   // Ledian
  pokeSR(104, 145, 'AR', 'Illustration Rare', 'Mori Yuu',         'sm-3'),   // Lileep
  pokeSR(105, 146, 'AR', 'Illustration Rare', 'Yukihiro Tada',    'sm-15'),  // Turtonator
  pokeSR(106, 147, 'AR', 'Illustration Rare', 'rika',             'sm-17'),  // Raboot
  pokeSR(107, 149, 'AR', 'Illustration Rare', 'Mitsuhiro Arita',  'sm-24'),  // Crabominable
  pokeSR(108, 150, 'AR', 'Illustration Rare', 'MARINA Chikazawa', 'sm-32'),  // Joltik
  pokeSR(109, 151, 'AR', 'Illustration Rare', 'Kazumasa Yasukuni','sm-37'),  // Zeraora
  pokeSR(110, 152, 'AR', 'Illustration Rare', 'Dsuke',            'sm-43'),  // Milcery
  pokeSR(111, 153, 'AR', 'Illustration Rare', 'Yuriko Akase',     'sm-53'),  // Meditite
  pokeSR(112, 154, 'AR', 'Illustration Rare', 'Jerky',            'sm-61'),  // Gulpin
  pokeSR(113, 155, 'AR', 'Illustration Rare', 'Toshinao Aoki',    'sm-73'),  // Archaludon
  pokeSR(114, null,'AR', 'Illustration Rare', 'Tetsu Kayama',     'sm-77'),  // Noctowl — no EN

  // ── SR ex Pokémon (115–122) ──────────────────────────────────────────────
  pokeSR(115, 156, 'SR', 'Special Illustration Rare', '5ban Graphics',     'sm-12'),  // Hydrapple ex
  pokeSR(116, 157, 'SR', 'Special Illustration Rare', '5ban Graphics',     'sm-18'),  // Cinderace ex
  pokeSR(117, 158, 'SR', 'Special Illustration Rare', '5ban Graphics',     'sm-19'),  // Lapras ex
  pokeSR(118, 159, 'SR', 'Special Illustration Rare', '5ban Graphics',     'sm-33'),  // Galvantula ex
  pokeSR(119, 160, 'SR', 'Special Illustration Rare', 'PLANETA Mochizuki','sm-46'),  // Dachsbun ex
  pokeSR(120, 161, 'SR', 'Special Illustration Rare', 'PLANETA Yamashita','sm-54'),  // Medicham ex
  pokeSR(121, 162, 'SR', 'Special Illustration Rare', 'PLANETA Mochizuki','sm-74'),  // Orthworm ex
  pokeSR(122, null,'SR', 'Special Illustration Rare', '5ban Graphics',     'sm-88'),  // Terapagos ex — no EN

  // ── SR Trainers (123–126) ────────────────────────────────────────────────
  trainerSR(123, 164, 'SR', 'Special Illustration Rare', 'GIDORA',          'sm-97'),  // Crispin
  trainerSR(124, 166, 'SR', 'Special Illustration Rare', 'Sanosuke Sakuma', 'sm-98'),  // Lacey
  trainerSR(125, 165, 'SR', 'Special Illustration Rare', 'Hideki Ishikawa', 'sm-99'),  // Kofu
  trainerSR(126, 163, 'SR', 'Special Illustration Rare', 'Naoki Saito',     'sm-100'), // Briar

  // ── SAR ex Pokémon (127–130) ─────────────────────────────────────────────
  pokeSR(127, 167, 'SAR', 'Special Art Rare', 'Teeziro',          'sm-12'),  // Hydrapple ex
  pokeSR(128, 168, 'SAR', 'Special Art Rare', 'MARINA Chikazawa', 'sm-33'),  // Galvantula ex
  pokeSR(129, 169, 'SAR', 'Special Art Rare', 'Yuu Nishida',      'sm-46'),  // Dachsbun ex
  pokeSR(130, 170, 'SAR', 'Special Art Rare', 'Saboteri',         'sm-88'),  // Terapagos ex

  // ── SAR Trainers (131–132) ───────────────────────────────────────────────
  trainerSR(131, 172, 'SAR', 'Special Art Rare', 'Souichirou Gunjima', 'sm-98'),  // Lacey
  trainerSR(132, 171, 'SAR', 'Special Art Rare', 'DOM',                'sm-100'), // Briar

  // ── MUR (133–135) ────────────────────────────────────────────────────────
  pokeSR(133, 173, 'MUR', 'Hyper Rare', '5ban Graphics',   'sm-88'),   // Terapagos ex

  newTrainer(134, 175, 'MUR', 'Hyper Rare', 'Toyste Beach',
    'ゆうかんのおまもり', 'Bravery Charm', ['Pokémon Tool'],
    'このカードをつけているたねポケモンの最大HPは「50」多くなる。',
    'The Basic Pokémon this card is attached to gets +50 HP.'),

  trainerSR(135, 174, 'MUR', 'Hyper Rare', 'MARINA Chikazawa', 'sm-102'),  // Area Zero Underdepths
];

const updated = [...sm, ...secrets];
fs.writeFileSync(smPath, JSON.stringify(updated, null, 2), 'utf8');
console.log(`sm.json updated: ${sm.length} → ${updated.length} cards`);
console.log(`Added ${secrets.length} secret rare entries (sm-103 through sm-135)`);
console.log('NOTE: JP images (103–135) and EN images must still be downloaded.');
