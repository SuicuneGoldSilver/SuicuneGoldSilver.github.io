// Append ix secret rares (cards 81–116) to data/cards/ix.json
// Run: node scripts/append_ix_secrets.js
//
// JP→EN mapping notes:
//   EN 106 = Meowth (EN-only, no JP card)
//   JP 111 (Oricorio ex SAR) has no EN equivalent (imageEn: null)
//   JP 116 (MUR) → EN 130
'use strict';
const fs   = require('fs');
const path = require('path');

const ixPath = path.join(__dirname, '..', 'data', 'cards', 'ix.json');
const ix     = JSON.parse(fs.readFileSync(ixPath, 'utf8').replace(/^﻿/, ''));

function base(id) { return ix.find(c => c.id === id); }

// Spread base card, override identifying + rarity + image fields
function pokeSR(jpNum, enNum, rarityJa, rarity, artist, baseId, opts = {}) {
  const b   = base(baseId);
  const pad = n => String(n).padStart(3, '0');
  return {
    ...b,
    id:       `ix-${jpNum}`,
    setIdEn:  enNum ? 'pfl' : null,
    numberJa: `${pad(jpNum)}/080`,
    numberEn: enNum ? `${pad(enNum)}/094` : null,
    ...opts,
    rarity,
    rarityJa,
    artist,
    imageJa: `images/sets/ix/jp/${jpNum}.jpg`,
    imageEn: enNum ? `images/sets/ix/en/${jpNum}.jpg` : null,
  };
}

// Spread base Trainer card
function trainerSR(jpNum, enNum, rarityJa, rarity, artist, baseId) {
  const b   = base(baseId);
  const pad = n => String(n).padStart(3, '0');
  return {
    ...b,
    id:       `ix-${jpNum}`,
    setIdEn:  enNum ? 'pfl' : null,
    numberJa: `${pad(jpNum)}/080`,
    numberEn: enNum ? `${pad(enNum)}/094` : null,
    rarity,
    rarityJa,
    artist,
    imageJa: `images/sets/ix/jp/${jpNum}.jpg`,
    imageEn: enNum ? `images/sets/ix/en/${jpNum}.jpg` : null,
  };
}

// SAR Trainer (always has EN)
function trainerSAR(jpNum, enNum, rarityJa, rarity, artist, baseId) {
  const b   = base(baseId);
  const pad = n => String(n).padStart(3, '0');
  return {
    ...b,
    id:       `ix-${jpNum}`,
    setIdEn:  'pfl',
    numberJa: `${pad(jpNum)}/080`,
    numberEn: `${pad(enNum)}/094`,
    rarity,
    rarityJa,
    artist,
    imageJa: `images/sets/ix/jp/${jpNum}.jpg`,
    imageEn: `images/sets/ix/en/${jpNum}.jpg`,
  };
}

// New Trainer card (not in base 1–80)
function newTrainer(jpNum, enNum, rarityJa, rarity, artist, nameJa, nameEn, subtypes, textJa, textEn) {
  const pad = n => String(n).padStart(3, '0');
  return {
    id:       `ix-${jpNum}`,
    setIdJa:  'ix',
    setIdEn:  enNum ? 'pfl' : null,
    numberJa: `${pad(jpNum)}/080`,
    numberEn: enNum ? `${pad(enNum)}/094` : null,
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
    regulationMark: 'I',
    rarity,
    rarityJa,
    artist,
    nationalPokedexNumber: null,
    textJa,
    textEn,
    imageJa: `images/sets/ix/jp/${jpNum}.jpg`,
    imageEn: enNum ? `images/sets/ix/en/${jpNum}.jpg` : null,
  };
}

// Special Energy card (not Trainer)
function newEnergy(jpNum, enNum, rarityJa, rarity, nameJa, nameEn, textJa, textEn) {
  const pad = n => String(n).padStart(3, '0');
  return {
    id:       `ix-${jpNum}`,
    setIdJa:  'ix',
    setIdEn:  enNum ? 'pfl' : null,
    numberJa: `${pad(jpNum)}/080`,
    numberEn: enNum ? `${pad(enNum)}/094` : null,
    nameJa,
    nameEn,
    supertype: 'Energy',
    subtypes:  ['Special'],
    types: [],
    hp: null,
    abilities: [],
    attacks: [],
    weaknesses: [],
    resistances: [],
    retreatCost: [],
    regulationMark: 'I',
    rarity,
    rarityJa,
    artist: null,
    nationalPokedexNumber: null,
    textJa,
    textEn,
    imageJa: `images/sets/ix/jp/${jpNum}.jpg`,
    imageEn: enNum ? `images/sets/ix/en/${jpNum}.jpg` : null,
  };
}

const secrets = [
  // ── AR Pokémon (81–92) ──────────────────────────────────────────────────
  pokeSR(81,  95,  'AR', 'Illustration Rare', 'Jerky',             'ix-7'),   // Ludicolo
  pokeSR(82,  96,  'AR', 'Illustration Rare', 'Nakamura Ippan',    'ix-9'),   // Nymble
  pokeSR(83,  97,  'AR', 'Illustration Rare', 'Teeziro',           'ix-19'),  // Charcadet
  pokeSR(84,  98,  'AR', 'Illustration Rare', 'satoma',            'ix-22'),  // Dewgong
  pokeSR(85,  99,  'AR', 'Illustration Rare', 'Jiro Sasumo',       'ix-27'),  // Piplup
  pokeSR(86,  100, 'AR', 'Illustration Rare', 'tono',              'ix-30'),  // Yamper
  pokeSR(87,  101, 'AR', 'Illustration Rare', 'Yoriyuki Ikegami',  'ix-39'),  // Zacian
  pokeSR(88,  102, 'AR', 'Illustration Rare', 'Ryota Murayama',    'ix-47'),  // Flygon
  pokeSR(89,  103, 'AR', 'Illustration Rare', 'Torada Tora',       'ix-57'),  // Toxtricity
  pokeSR(90,  104, 'AR', 'Illustration Rare', 'Orca',              'ix-61'),  // Togedemaru
  pokeSR(91,  105, 'AR', 'Illustration Rare', 'REND',              'ix-65'),  // Wigglytuff
  pokeSR(92,  107, 'AR', 'Illustration Rare', 'Shigenori Negishi', 'ix-67'),  // Ambipom (EN 107 — EN 106 is Meowth EN-only)

  // ── SR ex Pokémon (93–100) ──────────────────────────────────────────────
  pokeSR(93,  108, 'SR', 'Special Illustration Rare', '5ban Graphics', 'ix-4'),   // Mega Heracross ex
  pokeSR(94,  109, 'SR', 'Special Illustration Rare', 'takuyoo',       'ix-13'),  // Mega Charizard X ex
  pokeSR(95,  110, 'SR', 'Special Illustration Rare', '5ban Graphics', 'ix-18'),  // Oricorio ex
  pokeSR(96,  111, 'SR', 'Special Illustration Rare', '5ban Graphics', 'ix-29'),  // Rotom ex
  pokeSR(97,  112, 'SR', 'Special Illustration Rare', '5ban Graphics', 'ix-36'),  // Mismagius ex
  pokeSR(98,  113, 'SR', 'Special Illustration Rare', '5ban Graphics', 'ix-51'),  // Mega Sharpedo ex
  pokeSR(99,  114, 'SR', 'Special Illustration Rare', '5ban Graphics', 'ix-58'),  // Empoleon ex
  pokeSR(100, 115, 'SR', 'Special Illustration Rare', '5ban Graphics', 'ix-72'),  // Mega Lopunny ex

  // ── SR Trainers & Energy (101–109) ──────────────────────────────────────
  trainerSR(101, 117, 'SR', 'Special Illustration Rare', 'Toyste Beach',    'ix-74'),  // Blowtorch
  newTrainer(102, 123, 'SR', 'Special Illustration Rare', 'Studio Bora Inc.',
    'ポケモンいれかえ', 'Switch', ['Item'],
    '自分のバトルポケモンをベンチポケモンと入れ替える。',
    'Switch your Active Pokémon with 1 of your Benched Pokémon.'),
  trainerSR(103, 122, 'SR', 'Special Illustration Rare', 'Toyste Beach',    'ix-75'),  // Sacred Charm
  newTrainer(104, 121, 'SR', 'Special Illustration Rare', 'Studio Bora Inc.',
    'パンクメット', 'Punk Helmet', ['Pokémon Tool'],
    'このカードをつけている悪ポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき（きぜつしてもよい）、ワザを使ったポケモンにダメカンを4個のせる。',
    "If the Darkness Pokémon this card is attached to is in the Active Spot and is damaged by an attack from your opponent's Pokémon (even if this Pokémon is Knocked Out), place 4 damage counters on the Attacking Pokémon."),
  trainerSR(105, 120, 'SR', 'Special Illustration Rare', 'GIDORA',          'ix-76'),  // Grimsley's Move
  trainerSR(106, 118, 'SR', 'Special Illustration Rare', 'Yuu Nishida',     'ix-77'),  // Dawn
  trainerSR(107, 119, 'SR', 'Special Illustration Rare', 'Naoki Saito',     'ix-78'),  // Firebreather
  trainerSR(108, 116, 'SR', 'Special Illustration Rare', 'MARINA Chikazawa','ix-79'),  // Battle Cage
  newEnergy(109, 124, 'SR', 'Special Illustration Rare',
    'イグニッションエネルギー', 'Ignition Energy',
    'ポケモンについているこのカードは、自分の番の終わりにトラッシュする。このカードは、ポケモンについているかぎり、無エネルギー1個ぶんとしてはたらく。進化ポケモンについているなら、無エネルギー3個ぶんとしてはたらく。',
    'If this card is attached to 1 of your Pokémon, discard it at the end of your turn. As long as this card is attached to a Pokémon, it provides [C] Energy. If this card is attached to an Evolution Pokémon, it provides [C][C][C] Energy instead.'),

  // ── SAR Pokémon (110–114) ────────────────────────────────────────────────
  pokeSR(110, 125, 'SAR', 'Special Art Rare', 'danciao',        'ix-13'),  // Mega Charizard X ex
  pokeSR(111, null,'SAR', 'Special Art Rare', 'unknown',        'ix-18'),  // Oricorio ex — no EN (artist unreadable)
  pokeSR(112, 126, 'SAR', 'Special Art Rare', 'Yoshimi Miyoshi','ix-29'),  // Rotom ex
  pokeSR(113, 127, 'SAR', 'Special Art Rare', 'nagimiso',       'ix-51'),  // Mega Sharpedo ex
  pokeSR(114, 128, 'SAR', 'Special Art Rare', 'Kinu Nishimura', 'ix-72'),  // Mega Lopunny ex

  // ── SAR Trainer (115) ────────────────────────────────────────────────────
  trainerSAR(115, 129, 'SAR', 'Special Art Rare', 'Atsushi Furusawa', 'ix-77'),  // Dawn

  // ── MUR (116) ────────────────────────────────────────────────────────────
  pokeSR(116, 130, 'MUR', 'Hyper Rare', 'takuyoa', 'ix-13'),  // Mega Charizard X ex
];

const updated = [...ix, ...secrets];
fs.writeFileSync(ixPath, JSON.stringify(updated, null, 2), 'utf8');
console.log(`ix.json updated: ${ix.length} → ${updated.length} cards`);
console.log(`Added ${secrets.length} secret rare entries (ix-81 through ix-116)`);
