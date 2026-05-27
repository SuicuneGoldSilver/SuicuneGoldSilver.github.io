// Append gotr secret rares (cards 99–132) to data/cards/gotr.json
// Run: node scripts/append_gotr_secrets.js
//
// JP→EN mapping notes:
//   EN set: destinedrivals (setId: dri), total 244 (printedTotal 182)
//   EN secret rares: 183–244 (62 cards); gotr gets 33, haa gets the rest
//   JP 103 (Team Rocket's Wobbuffet AR) has no EN equivalent (imageEn: null)
//   JP 132 (Jamming Tower MUR) is a newTrainer (not in gotr base set)
//
// NOTE: JP and EN images for 99–132 must be downloaded separately:
//   JP: serebii.net/card/gloryofteamrocket/{n}.jpg → images/sets/gotr/jp/{n}.jpg
//   EN: serebii.net/card/destinedrivals/{enNum}.jpg → images/sets/gotr/en/{jpNum}.jpg
'use strict';
const fs   = require('fs');
const path = require('path');

const gotrPath = path.join(__dirname, '..', 'data', 'cards', 'gotr.json');
const gotr     = JSON.parse(fs.readFileSync(gotrPath, 'utf8').replace(/^﻿/, ''));

function base(id) { return gotr.find(c => c.id === id); }

function pokeSR(jpNum, enNum, rarityJa, rarity, artist, baseId) {
  const b   = base(baseId);
  const pad = n => String(n).padStart(3, '0');
  return {
    ...b,
    id:       `gotr-${jpNum}`,
    setIdEn:  enNum ? 'dri' : null,
    numberJa: `${pad(jpNum)}/098`,
    numberEn: enNum ? `${pad(enNum)}/244` : null,
    rarity,
    rarityJa,
    artist,
    imageJa: `images/sets/gotr/jp/${jpNum}.jpg`,
    imageEn: enNum ? `images/sets/gotr/en/${jpNum}.jpg` : null,
  };
}

function trainerSR(jpNum, enNum, rarityJa, rarity, artist, baseId) {
  const b   = base(baseId);
  const pad = n => String(n).padStart(3, '0');
  return {
    ...b,
    id:       `gotr-${jpNum}`,
    setIdEn:  enNum ? 'dri' : null,
    numberJa: `${pad(jpNum)}/098`,
    numberEn: enNum ? `${pad(enNum)}/244` : null,
    rarity,
    rarityJa,
    artist,
    imageJa: `images/sets/gotr/jp/${jpNum}.jpg`,
    imageEn: enNum ? `images/sets/gotr/en/${jpNum}.jpg` : null,
  };
}

function trainerSAR(jpNum, enNum, rarityJa, rarity, artist, baseId) {
  const b   = base(baseId);
  const pad = n => String(n).padStart(3, '0');
  return {
    ...b,
    id:       `gotr-${jpNum}`,
    setIdEn:  'dri',
    numberJa: `${pad(jpNum)}/098`,
    numberEn: `${pad(enNum)}/244`,
    rarity,
    rarityJa,
    artist,
    imageJa: `images/sets/gotr/jp/${jpNum}.jpg`,
    imageEn: `images/sets/gotr/en/${jpNum}.jpg`,
  };
}

function newTrainer(jpNum, enNum, rarityJa, rarity, artist, nameJa, nameEn, subtypes, textJa, textEn, regulationMark = 'I') {
  const pad = n => String(n).padStart(3, '0');
  return {
    id:       `gotr-${jpNum}`,
    setIdJa:  'gotr',
    setIdEn:  enNum ? 'dri' : null,
    numberJa: `${pad(jpNum)}/098`,
    numberEn: enNum ? `${pad(enNum)}/244` : null,
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
    imageJa: `images/sets/gotr/jp/${jpNum}.jpg`,
    imageEn: enNum ? `images/sets/gotr/en/${jpNum}.jpg` : null,
  };
}

const secrets = [
  // ── AR Pokémon (99–110) ─────────────────────────────────────────────────
  pokeSR(99,  187,  'AR', 'Illustration Rare', 'NC Empire',       'gotr-9'),   // Team Rocket's Spidops
  pokeSR(100, 191,  'AR', 'Illustration Rare', 'nagimiso',        'gotr-17'),  // Team Rocket's Houndoom
  pokeSR(101, 192,  'AR', 'Illustration Rare', 'kodama',          'gotr-20'),  // Blaziken
  pokeSR(102, 195,  'AR', 'Illustration Rare', 'Mori Yuu',        'gotr-23'),  // Clamperl
  pokeSR(103, null, 'AR', 'Illustration Rare', 'Saboteri',        'gotr-40'),  // Team Rocket's Wobbuffet — no EN
  pokeSR(104, 198,  'AR', 'Illustration Rare', 'HYOGONOSUKE',     'gotr-44'),  // Team Rocket's Orbeetle
  pokeSR(105, 199,  'AR', 'Illustration Rare', 'Yukihiro Tada',   'gotr-70'),  // Team Rocket's Weezing
  pokeSR(106, 200,  'AR', 'Illustration Rare', 'Akira Komayama',  'gotr-71'),  // Team Rocket's Murkrow
  pokeSR(107, 201,  'AR', 'Illustration Rare', 'Takumi Wada',     'gotr-75'),  // Zamazenta
  pokeSR(108, 202,  'AR', 'Illustration Rare', 'Mekayu',          'gotr-77'),  // Team Rocket's Raticate
  pokeSR(109, 203,  'AR', 'Illustration Rare', 'Shimaris Yukichi','gotr-78'),  // Team Rocket's Meowth
  pokeSR(110, 204,  'AR', 'Illustration Rare', 'Mekayu',          'gotr-80'),  // Kangaskhan

  // ── SR ex Pokémon (111–118) ─────────────────────────────────────────────
  pokeSR(111, 207,  'SR', 'Special Illustration Rare', 'PLANETA Tsuji',        'gotr-12'),  // Arboliva ex
  pokeSR(112, 208,  'SR', 'Special Illustration Rare', '5ban Graphics & DOM',  'gotr-15'),  // Team Rocket's Moltres ex
  pokeSR(113, 210,  'SR', 'Special Illustration Rare', 'PLANETA Tsuji',        'gotr-32'),  // Cetitan ex
  pokeSR(114, 213,  'SR', 'Special Illustration Rare', 'aky CG Works & DOM',   'gotr-39'),  // Team Rocket's Mewtwo ex
  pokeSR(115, 214,  'SR', 'Special Illustration Rare', 'PLANETA Mochizuki',    'gotr-55'),  // Regirock ex
  pokeSR(116, 216,  'SR', 'Special Illustration Rare', '5ban Graphics & DOM',  'gotr-63'),  // Team Rocket's Nidoking ex
  pokeSR(117, 217,  'SR', 'Special Illustration Rare', '5ban Graphics & DOM',  'gotr-66'),  // Team Rocket's Crobat ex
  pokeSR(118, 219,  'SR', 'Special Illustration Rare', '5ban Graphics & DOM',  'gotr-79'),  // Team Rocket's Persian ex

  // ── SR Trainers (119–123) ───────────────────────────────────────────────
  trainerSR(119, 224, 'SR', 'Special Illustration Rare', 'hncl',            'gotr-91'),  // Team Rocket's Ariana
  trainerSR(120, 223, 'SR', 'Special Illustration Rare', 'Hideki Ishikawa', 'gotr-92'),  // Team Rocket's Archer
  trainerSR(121, 225, 'SR', 'Special Illustration Rare', 'akagi',           'gotr-93'),  // Team Rocket's Giovanni
  trainerSR(122, 226, 'SR', 'Special Illustration Rare', 'GOSSAN',          'gotr-94'),  // Team Rocket's Petrel
  trainerSR(123, 227, 'SR', 'Special Illustration Rare', 'Naoki Saito',     'gotr-95'),  // Team Rocket's Proton

  // ── SAR ex Pokémon (124–127) ────────────────────────────────────────────
  pokeSR(124, 229, 'SAR', 'Special Art Rare', 'AKIRA EGAWA',    'gotr-15'),  // Team Rocket's Moltres ex
  pokeSR(125, 231, 'SAR', 'Special Art Rare', 'Iwamoto05',      'gotr-39'),  // Team Rocket's Mewtwo ex
  pokeSR(126, 233, 'SAR', 'Special Art Rare', 'Uninori',        'gotr-63'),  // Team Rocket's Nidoking ex
  pokeSR(127, 234, 'SAR', 'Special Art Rare', 'cochi8i',        'gotr-66'),  // Team Rocket's Crobat ex

  // ── SAR Trainers (128–129) ──────────────────────────────────────────────
  trainerSAR(128, 237, 'SAR', 'Special Art Rare', 'Yoshioka', 'gotr-91'),  // Team Rocket's Ariana
  trainerSAR(129, 238, 'SAR', 'Special Art Rare', 'Krgc',     'gotr-93'),  // Team Rocket's Giovanni

  // ── MUR Pokémon (130–131) ───────────────────────────────────────────────
  pokeSR(130, 240, 'MUR', 'Hyper Rare', 'aky CG Works & DOM',  'gotr-39'),  // Team Rocket's Mewtwo ex
  pokeSR(131, 242, 'MUR', 'Hyper Rare', '5ban Graphics & DOM', 'gotr-66'),  // Team Rocket's Crobat ex

  // ── MUR Trainer (132) ───────────────────────────────────────────────────
  newTrainer(132, 243, 'MUR', 'Hyper Rare', 'AYUMI ODASHIMA',
    'ジャミングタワー', 'Jamming Tower', ['Stadium'],
    'おたがいのポケモン全員についている「ポケモンのどうぐ」の効果は、すべてなくなる。',
    "Pokémon Tools attached to each Pokémon (both yours and your opponent's) have no effect.",
    'H'),
];

const updated = [...gotr, ...secrets];
fs.writeFileSync(gotrPath, JSON.stringify(updated, null, 2), 'utf8');
console.log(`gotr.json updated: ${gotr.length} → ${updated.length} cards`);
console.log(`Added ${secrets.length} secret rare entries (gotr-99 through gotr-132)`);
console.log('NOTE: JP images (99–132) and EN images (99–132) must still be downloaded.');
