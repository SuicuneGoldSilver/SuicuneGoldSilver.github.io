// Append mc secret rares (cards 102–133) to data/cards/mc.json
// Run: node scripts/append_mc_secrets.js
//
// JP→EN mapping notes:
//   EN set: twilightmasquerade (setId: tm), printedTotal 167, total 226
//   EN secret rares: 168–225 (58 cards); mc gets 29 EN cards, ch gets the other 29
//   JP-only ARs: mc-107 Munkidori, mc-108 Fezandipiti, mc-110 Okidogi (imageEn: null)
//   mc-132 Enhanced Hammer MUR: newTrainer, reg H (reprint)
//   mc-133 Buddy-Buddy Poffin MUR: newTrainer, reg H (reprint)
//   AR→EN: 169,170,174,178,179,183,184,186,187 (9 mc AR cards; 3 JP-only)
//   SR Pokémon→EN: 190,192,193,194,195,199,200,201 (8)
//   SR Trainers→EN: 204,205,206 (3)
//   SAR Pokémon→EN: 211,212,213,215 (4)
//   SAR Trainers→EN: 217,218 (2)
//   MUR→EN: 221,223,224 (3; mc-131 Teal Mask Ogerpon ex, mc-133 Buddy-Buddy Poffin, mc-132 Enhanced Hammer)
'use strict';
const fs   = require('fs');
const path = require('path');

const mcPath = path.join(__dirname, '..', 'data', 'cards', 'mc.json');
const mc     = JSON.parse(fs.readFileSync(mcPath, 'utf8').replace(/^﻿/, ''));

function base(id) { return mc.find(c => c.id === id); }

function pokeSR(jpNum, enNum, rarityJa, rarity, artist, baseId) {
  const b   = base(baseId);
  const pad = n => String(n).padStart(3, '0');
  return {
    ...b,
    id:       `mc-${jpNum}`,
    setIdEn:  enNum ? 'tm' : null,
    numberJa: `${pad(jpNum)}/101`,
    numberEn: enNum ? `${pad(enNum)}/167` : null,
    rarity,
    rarityJa,
    artist,
    imageJa: `images/sets/mc/jp/${jpNum}.jpg`,
    imageEn: enNum ? `images/sets/mc/en/${jpNum}.jpg` : null,
  };
}

function trainerSR(jpNum, enNum, rarityJa, rarity, artist, baseId) {
  const b   = base(baseId);
  const pad = n => String(n).padStart(3, '0');
  return {
    ...b,
    id:       `mc-${jpNum}`,
    setIdEn:  'tm',
    numberJa: `${pad(jpNum)}/101`,
    numberEn: `${pad(enNum)}/167`,
    rarity,
    rarityJa,
    artist,
    imageJa: `images/sets/mc/jp/${jpNum}.jpg`,
    imageEn: `images/sets/mc/en/${jpNum}.jpg`,
  };
}

function trainerSAR(jpNum, enNum, rarityJa, rarity, artist, baseId) {
  const b   = base(baseId);
  const pad = n => String(n).padStart(3, '0');
  return {
    ...b,
    id:       `mc-${jpNum}`,
    setIdEn:  'tm',
    numberJa: `${pad(jpNum)}/101`,
    numberEn: `${pad(enNum)}/167`,
    rarity,
    rarityJa,
    artist,
    imageJa: `images/sets/mc/jp/${jpNum}.jpg`,
    imageEn: `images/sets/mc/en/${jpNum}.jpg`,
  };
}

function newTrainer(jpNum, enNum, rarityJa, rarity, artist, nameJa, nameEn, subtypes, textJa, textEn, regulationMark = 'I') {
  const pad = n => String(n).padStart(3, '0');
  return {
    id:       `mc-${jpNum}`,
    setIdJa:  'mc',
    setIdEn:  enNum ? 'tm' : null,
    numberJa: `${pad(jpNum)}/101`,
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
    imageJa: `images/sets/mc/jp/${jpNum}.jpg`,
    imageEn: enNum ? `images/sets/mc/en/${jpNum}.jpg` : null,
  };
}

const secrets = [
  // ── AR Pokémon (102–113) ─────────────────────────────────────────────────
  pokeSR(102, 169, 'AR', 'Illustration Rare', 'Shinya Komatsu',  'mc-2'),   // Sunflora
  pokeSR(103, 170, 'AR', 'Illustration Rare', 'Akira Komayama', 'mc-12'),  // Dipplin
  pokeSR(104, 174, 'AR', 'Illustration Rare', 'matazo',         'mc-33'),  // Froslass
  pokeSR(105, 178, 'AR', 'Illustration Rare', 'Mitsuhiro Arita','mc-43'),  // Wattrel
  pokeSR(106, 179, 'AR', 'Illustration Rare', 'REND',           'mc-50'),  // Chimecho
  pokeSR(107, null,'AR', 'Illustration Rare', 'Teeziro',        'mc-55'),  // Munkidori — no EN
  pokeSR(108, null,'AR', 'Illustration Rare', 'KEIICHIRO ITO',  'mc-56'),  // Fezandipiti — no EN
  pokeSR(109, 183, 'AR', 'Illustration Rare', 'Yuriko Akase',   'mc-59'),  // Timburr
  pokeSR(110, null,'AR', 'Illustration Rare', 'AKIRA EGAWA',    'mc-64'),  // Okidogi — no EN
  pokeSR(111, 184, 'AR', 'Illustration Rare', 'Dsuke',          'mc-74'),  // Lairon
  pokeSR(112, 186, 'AR', 'Illustration Rare', 'osare',          'mc-82'),  // Tatsugiri
  pokeSR(113, 187, 'AR', 'Illustration Rare', 'Toshinao Aoki',  'mc-84'),  // Chansey

  // ── SR ex Pokémon (114–121) ──────────────────────────────────────────────
  pokeSR(114, 190, 'SR', 'Special Illustration Rare', '5ban Graphics',        'mc-16'),  // Teal Mask Ogerpon ex
  pokeSR(115, 192, 'SR', 'Special Illustration Rare', '5ban Graphics',        'mc-22'),  // Hearthflame Mask Ogerpon ex
  pokeSR(116, 193, 'SR', 'Special Illustration Rare', 'PLANETA Mochizuki',   'mc-36'),  // Palafin ex
  pokeSR(117, 194, 'SR', 'Special Illustration Rare', '5ban Graphics',        'mc-38'),  // Wellspring Mask Ogerpon ex
  pokeSR(118, 195, 'SR', 'Special Illustration Rare', 'PLANETA Yamashita',   'mc-41'),  // Luxray ex
  pokeSR(119, 199, 'SR', 'Special Illustration Rare', '5ban Graphics',        'mc-65'),  // Cornerstone Mask Ogerpon ex
  pokeSR(120, 200, 'SR', 'Special Illustration Rare', '5ban Graphics',        'mc-81'),  // Dragapult ex
  pokeSR(121, 201, 'SR', 'Special Illustration Rare', 'PLANETA Tsuji',        'mc-85'),  // Blissey ex

  // ── SR Trainers (122–124) ────────────────────────────────────────────────
  trainerSR(122, 206, 'SR', 'Special Illustration Rare', 'GIDORA',   'mc-96'),  // Kieran
  trainerSR(123, 204, 'SR', 'Special Illustration Rare', 'Kantaro',  'mc-97'),  // Carmine
  trainerSR(124, 205, 'SR', 'Special Illustration Rare', 'GOSSAN',   'mc-98'),  // Hassel

  // ── SAR ex Pokémon (125–128) ─────────────────────────────────────────────
  pokeSR(125, 211, 'SAR', 'Special Art Rare', 'Yano Keiji', 'mc-16'),  // Teal Mask Ogerpon ex
  pokeSR(126, 212, 'SAR', 'Special Art Rare', 'Yano Keiji', 'mc-22'),  // Hearthflame Mask Ogerpon ex
  pokeSR(127, 213, 'SAR', 'Special Art Rare', 'Yano Keiji', 'mc-38'),  // Wellspring Mask Ogerpon ex
  pokeSR(128, 215, 'SAR', 'Special Art Rare', 'Yano Keiji', 'mc-65'),  // Cornerstone Mask Ogerpon ex

  // ── SAR Trainers (129–130) ───────────────────────────────────────────────
  trainerSAR(129, 218, 'SAR', 'Special Art Rare', 'Teeziro',    'mc-96'),  // Kieran
  trainerSAR(130, 217, 'SAR', 'Special Art Rare', 'En Morikura','mc-97'),  // Carmine

  // ── MUR ex Pokémon (131) ─────────────────────────────────────────────────
  pokeSR(131, 221, 'MUR', 'Hyper Rare', '5ban Graphics', 'mc-16'),  // Teal Mask Ogerpon ex

  // ── MUR Trainers (132–133) ───────────────────────────────────────────────
  newTrainer(132, 224, 'MUR', 'Hyper Rare', 'Eske Yoshinob',
    '改造ハンマー', 'Enhanced Hammer', ['Item'],
    '相手の場のポケモンについている特殊エネルギーを1個選び、トラッシュする。',
    'Discard a Special Energy from 1 of your opponent\'s Pokémon.',
    'H'),
  newTrainer(133, 223, 'MUR', 'Hyper Rare', 'AYUMI ODASHIMA',
    'なかよしポフィン', 'Buddy-Buddy Poffin', ['Item'],
    '自分の山札から、HPが「70」以下のたねポケモンを2枚まで選び、ベンチに出す。そして山札を切る。',
    'Search your deck for up to 2 Basic Pokémon with 70 HP or less and put them onto your Bench. Then, shuffle your deck.',
    'H'),
];

const updated = [...mc, ...secrets];
fs.writeFileSync(mcPath, JSON.stringify(updated, null, 2), 'utf8');
console.log(`mc.json updated: ${mc.length} → ${updated.length} cards`);
console.log(`Added ${secrets.length} secret rare entries (mc-102 through mc-133)`);
console.log('NOTE: JP images (102–133) and EN images must still be downloaded.');
