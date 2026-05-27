// Append haa secret rares (cards 64–92) to data/cards/haa.json
// Run: node scripts/append_haa_secrets.js
//
// JP→EN mapping notes:
//   EN set: destinedrivals (setId: dri), printedTotal 182, total 244
//   EN secret rares: 183–244 (62 cards); haa gets all 29 (no JP-only cards)
//   haa AR→EN: 183,184,185,186,188,189,190,193,194,196,197,205
//   haa SR→EN: 206,209,211,212,215,218 (Pokémon) + 220,221,222 (Trainers)
//   haa SAR→EN: 228,230,232,235 (Pokémon) + 236 (Trainer)
//   haa MUR→EN: 239,241,244
//   numberEn uses "/182" denominator (printedTotal), e.g. "183/182"
//   JP 92 Levincia Stadium MUR: newTrainer (not in haa base set), regulationMark I
'use strict';
const fs   = require('fs');
const path = require('path');

const haaPath = path.join(__dirname, '..', 'data', 'cards', 'haa.json');
const haa     = JSON.parse(fs.readFileSync(haaPath, 'utf8').replace(/^﻿/, ''));

function base(id) { return haa.find(c => c.id === id); }

function pokeSR(jpNum, enNum, rarityJa, rarity, artist, baseId) {
  const b   = base(baseId);
  const pad = n => String(n).padStart(3, '0');
  return {
    ...b,
    id:       `haa-${jpNum}`,
    setIdEn:  'dri',
    numberJa: `${pad(jpNum)}/063`,
    numberEn: `${pad(enNum)}/182`,
    rarity,
    rarityJa,
    artist,
    imageJa: `images/sets/haa/jp/${jpNum}.jpg`,
    imageEn: `images/sets/haa/en/${jpNum}.jpg`,
  };
}

function trainerSR(jpNum, enNum, rarityJa, rarity, artist, baseId) {
  const b   = base(baseId);
  const pad = n => String(n).padStart(3, '0');
  return {
    ...b,
    id:       `haa-${jpNum}`,
    setIdEn:  'dri',
    numberJa: `${pad(jpNum)}/063`,
    numberEn: `${pad(enNum)}/182`,
    rarity,
    rarityJa,
    artist,
    imageJa: `images/sets/haa/jp/${jpNum}.jpg`,
    imageEn: `images/sets/haa/en/${jpNum}.jpg`,
  };
}

function trainerSAR(jpNum, enNum, rarityJa, rarity, artist, baseId) {
  const b   = base(baseId);
  const pad = n => String(n).padStart(3, '0');
  return {
    ...b,
    id:       `haa-${jpNum}`,
    setIdEn:  'dri',
    numberJa: `${pad(jpNum)}/063`,
    numberEn: `${pad(enNum)}/182`,
    rarity,
    rarityJa,
    artist,
    imageJa: `images/sets/haa/jp/${jpNum}.jpg`,
    imageEn: `images/sets/haa/en/${jpNum}.jpg`,
  };
}

function newTrainer(jpNum, enNum, rarityJa, rarity, artist, nameJa, nameEn, subtypes, textJa, textEn, regulationMark = 'I') {
  const pad = n => String(n).padStart(3, '0');
  return {
    id:       `haa-${jpNum}`,
    setIdJa:  'haa',
    setIdEn:  enNum ? 'dri' : null,
    numberJa: `${pad(jpNum)}/063`,
    numberEn: enNum ? `${pad(enNum)}/182` : null,
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
    imageJa: `images/sets/haa/jp/${jpNum}.jpg`,
    imageEn: enNum ? `images/sets/haa/en/${jpNum}.jpg` : null,
  };
}

const secrets = [
  // ── AR Pokémon (64–75) ──────────────────────────────────────────────────
  pokeSR(64,  183, 'AR', 'Illustration Rare', 'Ayaka Ozaki',      'haa-2'),   // Yanma
  pokeSR(65,  184, 'AR', 'Illustration Rare', 'rika',             'haa-5'),   // Cynthia's Roserade
  pokeSR(66,  185, 'AR', 'Illustration Rare', 'Heisuke Kitazawa', 'haa-6'),   // Shaymin
  pokeSR(67,  186, 'AR', 'Illustration Rare', 'Takumi Wada',      'haa-8'),   // Crustle
  pokeSR(68,  188, 'AR', 'Illustration Rare', 'Jerky',            'haa-11'),  // Hydrapple
  pokeSR(69,  189, 'AR', 'Illustration Rare', 'Rond',             'haa-14'),  // Rapidash
  pokeSR(70,  190, 'AR', 'Illustration Rare', 'GIDORA',           'haa-17'),  // Ethan's Typhlosion
  pokeSR(71,  193, 'AR', 'Illustration Rare', 'OKACHEKE',         'haa-22'),  // Misty's Psyduck
  pokeSR(72,  194, 'AR', 'Illustration Rare', 'Orca',             'haa-27'),  // Misty's Lapras
  pokeSR(73,  196, 'AR', 'Illustration Rare', 'Nakamura Ippan',   'haa-37'),  // Electrike
  pokeSR(74,  197, 'AR', 'Illustration Rare', 'Taiga Kayama',     'haa-39'),  // Rotom
  pokeSR(75,  205, 'AR', 'Illustration Rare', 'Natsumi Yoshisda', 'haa-55'),  // Arven's Greedent

  // ── SR ex Pokémon (76–81) ───────────────────────────────────────────────
  pokeSR(76,  206, 'SR', 'Special Illustration Rare', 'takuyoa',              'haa-3'),   // Yanmega ex
  pokeSR(77,  209, 'SR', 'Special Illustration Rare', 'aky CG Works & DOM',  'haa-20'),  // Ethan's Ho-Oh ex
  pokeSR(78,  211, 'SR', 'Special Illustration Rare', 'N-DESIGN Inc.',        'haa-32'),  // Dondozo ex
  pokeSR(79,  212, 'SR', 'Special Illustration Rare', 'PLANETA Mochizuki',   'haa-35'),  // Electivire ex
  pokeSR(80,  215, 'SR', 'Special Illustration Rare', '5ban Graphics & DOM', 'haa-44'),  // Cynthia's Garchomp ex
  pokeSR(81,  218, 'SR', 'Special Illustration Rare', 'PLANETA Igarashi & DOM', 'haa-52'),  // Arven's Mabosstiff ex

  // ── SR Trainers (82–84) ─────────────────────────────────────────────────
  trainerSR(82, 220, 'SR', 'Special Illustration Rare', 'Cona Nitanda', 'haa-61'),  // Emcee's Hype
  trainerSR(83, 221, 'SR', 'Special Illustration Rare', 'kantaro',      'haa-62'),  // Judge
  trainerSR(84, 222, 'SR', 'Special Illustration Rare', 'Iori Suzuki',  'haa-63'),  // Ethan's Adventure

  // ── SAR ex Pokémon (85–88) ──────────────────────────────────────────────
  pokeSR(85,  228, 'SAR', 'Special Art Rare', 'Tonji Matsuno',   'haa-3'),   // Yanmega ex
  pokeSR(86,  230, 'SAR', 'Special Art Rare', 'Atsushi Furusawa','haa-20'),  // Ethan's Ho-Oh ex
  pokeSR(87,  232, 'SAR', 'Special Art Rare', 'HICO KIM',        'haa-44'),  // Cynthia's Garchomp ex
  pokeSR(88,  235, 'SAR', 'Special Art Rare', 'Yuriko Akase',    'haa-52'),  // Arven's Mabosstiff ex

  // ── SAR Trainer (89) ────────────────────────────────────────────────────
  trainerSAR(89, 236, 'SAR', 'Special Art Rare', 'Kariya', 'haa-63'),  // Ethan's Adventure

  // ── MUR ex Pokémon (90–91) ──────────────────────────────────────────────
  pokeSR(90,  239, 'MUR', 'Hyper Rare', 'aky CG Works & DOM',  'haa-20'),  // Ethan's Ho-Oh ex
  pokeSR(91,  241, 'MUR', 'Hyper Rare', '5ban Graphics & DOM', 'haa-44'),  // Cynthia's Garchomp ex

  // ── MUR Trainer (92) ────────────────────────────────────────────────────
  newTrainer(92, 244, 'MUR', 'Hyper Rare', 'MARINA Chikazawa',
    'ハッコウシティ', 'Levincia', ['Stadium'],
    'おたがいのプレイヤーは、自分の番ごとに1回、自分のトラッシュから「基本⚡エネルギー」を2枚まで選び、相手に見せて、手札に加えてよい。',
    'Once during each player\'s turn, that player may put up to 2 Basic Lightning Energy cards from their discard pile into their hand.'),
];

const updated = [...haa, ...secrets];
fs.writeFileSync(haaPath, JSON.stringify(updated, null, 2), 'utf8');
console.log(`haa.json updated: ${haa.length} → ${updated.length} cards`);
console.log(`Added ${secrets.length} secret rare entries (haa-64 through haa-92)`);
console.log('NOTE: JP images (64–92) and EN images (64–92) must still be downloaded.');
