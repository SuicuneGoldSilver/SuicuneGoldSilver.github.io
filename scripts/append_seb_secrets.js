// Append seb secret rares (cards 107–138) to data/cards/seb.json
// Run: node scripts/append_seb_secrets.js
//
// JP→EN mapping notes:
//   EN set: surgingsparks (setId: sv8), printedTotal 191, total 252
//   EN secret rares: 192–252 (61 cards); seb gets 31, pd gets 30
//   seb-112 Magneton AR: JP-only (imageEn: null)
//   seb-137 Night Stretcher MUR: newTrainer (reprint, not in seb base set)
//   AR→EN: 107→193, 108→196, 109→197, 110→198, 111→199, 112→null,
//           113→202, 114→204, 115→205, 116→208, 117→212, 118→213
//   SR Pokémon→EN: 119→215, 120→216, 121→217, 122→219, 123→221,
//                  124→223, 125→226, 126→227
//   SR Trainers→EN: 127(Cyrano)→230, 128(Clemont's)→229, 129(Jasmine's)→233
//   SAR Pokémon→EN: 130→236, 131→237, 132→238, 133→240
//   SAR Trainers→EN: 134(Clemont's)→243, 135(Jasmine's)→245
//   MUR→EN: 136(Pikachu ex)→247, 137(Night Stretcher)→251, 138(Gravity Mountain)→250
'use strict';
const fs   = require('fs');
const path = require('path');

const sebPath = path.join(__dirname, '..', 'data', 'cards', 'seb.json');
const seb     = JSON.parse(fs.readFileSync(sebPath, 'utf8').replace(/^﻿/, ''));

function base(id) { return seb.find(c => c.id === id); }

function pokeSR(jpNum, enNum, rarityJa, rarity, artist, baseId) {
  const b   = base(baseId);
  const pad = n => String(n).padStart(3, '0');
  return {
    ...b,
    id:       `seb-${jpNum}`,
    setIdEn:  enNum ? 'sv8' : null,
    numberJa: `${pad(jpNum)}/106`,
    numberEn: enNum ? `${pad(enNum)}/191` : null,
    rarity,
    rarityJa,
    artist,
    imageJa: `images/sets/seb/jp/${jpNum}.jpg`,
    imageEn: enNum ? `images/sets/seb/en/${jpNum}.jpg` : null,
  };
}

function trainerSR(jpNum, enNum, rarityJa, rarity, artist, baseId) {
  const b   = base(baseId);
  const pad = n => String(n).padStart(3, '0');
  return {
    ...b,
    id:       `seb-${jpNum}`,
    setIdEn:  'sv8',
    numberJa: `${pad(jpNum)}/106`,
    numberEn: `${pad(enNum)}/191`,
    rarity,
    rarityJa,
    artist,
    imageJa: `images/sets/seb/jp/${jpNum}.jpg`,
    imageEn: `images/sets/seb/en/${jpNum}.jpg`,
  };
}

function newTrainer(jpNum, enNum, rarityJa, rarity, artist, nameJa, nameEn, subtypes, textJa, textEn, regulationMark = 'H') {
  const pad = n => String(n).padStart(3, '0');
  return {
    id:       `seb-${jpNum}`,
    setIdJa:  'seb',
    setIdEn:  'sv8',
    numberJa: `${pad(jpNum)}/106`,
    numberEn: `${pad(enNum)}/191`,
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
    imageJa: `images/sets/seb/jp/${jpNum}.jpg`,
    imageEn: `images/sets/seb/en/${jpNum}.jpg`,
  };
}

const secrets = [
  // ── AR Pokémon (107–118) ─────────────────────────────────────────────────
  pokeSR(107, 193, 'AR', 'Illustration Rare', 'REND',           'seb-6'),   // Vivillon
  pokeSR(108, 196, 'AR', 'Illustration Rare', 'Whisker',        'seb-13'),  // Larvesta
  pokeSR(109, 197, 'AR', 'Illustration Rare', 'Rond',           'seb-22'),  // Ceruledge
  pokeSR(110, 198, 'AR', 'Illustration Rare', 'Kuroimori',      'seb-25'),  // Feebas
  pokeSR(111, 199, 'AR', 'Illustration Rare', 'miki kudo',      'seb-27'),  // Spheal
  pokeSR(112, null,'AR', 'Illustration Rare', 'Shinji Kanda',   'seb-35'),  // Magneton — no EN
  pokeSR(113, 202, 'AR', 'Illustration Rare', 'N-DESIGN Inc.',  'seb-40'),  // Stunfisk
  pokeSR(114, 204, 'AR', 'Illustration Rare', 'HYOGONOSUKE',    'seb-49'),  // Mesprit
  pokeSR(115, 205, 'AR', 'Illustration Rare', 'Saboteri',       'seb-64'),  // Phanpy
  pokeSR(116, 208, 'AR', 'Illustration Rare', 'Yukihiro Tada',  'seb-77'),  // Alolan Dugtrio
  pokeSR(117, 212, 'AR', 'Illustration Rare', 'Mekayu',         'seb-82'),  // Slakoth
  pokeSR(118, 213, 'AR', 'Illustration Rare', 'Mori Yuu',       'seb-86'),  // Kecleon

  // ── SR ex Pokémon (119–126) ──────────────────────────────────────────────
  pokeSR(119, 215, 'SR', 'Special Illustration Rare', 'PLANETA Tsuji',   'seb-3'),   // Durant ex
  pokeSR(120, 216, 'SR', 'Special Illustration Rare', 'PLANETA Igarashi','seb-23'),  // Scovillain ex
  pokeSR(121, 217, 'SR', 'Special Illustration Rare', 'N-DESIGN Inc.',   'seb-26'),  // Milotic ex
  pokeSR(122, 219, 'SR', 'Special Illustration Rare', 'aky CG Works',    'seb-33'),  // Pikachu ex
  pokeSR(123, 221, 'SR', 'Special Illustration Rare', '5ban Graphics',   'seb-57'),  // Palossand ex
  pokeSR(124, 223, 'SR', 'Special Illustration Rare', '5ban Graphics',   'seb-72'),  // Hydreigon ex
  pokeSR(125, 226, 'SR', 'Special Illustration Rare', '5ban Graphics',   'seb-81'),  // Tatsugiri ex
  pokeSR(126, 227, 'SR', 'Special Illustration Rare', 'PLANETA Igarashi','seb-84'),  // Slaking ex

  // ── SR Trainers (127–129) ────────────────────────────────────────────────
  trainerSR(127, 230, 'SR', 'Special Illustration Rare', 'Akira Komayama','seb-102'), // Cyrano
  trainerSR(128, 229, 'SR', 'Special Illustration Rare', 'Naoki Saito',   'seb-103'), // Clemont's Quick Wit
  trainerSR(129, 233, 'SR', 'Special Illustration Rare', 'Taira Akitsu',  'seb-104'), // Jasmine's Gaze

  // ── SAR ex Pokémon (130–133) ─────────────────────────────────────────────
  pokeSR(130, 236, 'SAR', 'Special Art Rare', 'osare',       'seb-3'),   // Durant ex
  pokeSR(131, 237, 'SAR', 'Special Art Rare', 'Kuroimori',   'seb-26'),  // Milotic ex
  pokeSR(132, 238, 'SAR', 'Special Art Rare', 'GIDORA',      'seb-33'),  // Pikachu ex
  pokeSR(133, 240, 'SAR', 'Special Art Rare', 'AKIRA EGAWA', 'seb-72'),  // Hydreigon ex

  // ── SAR Trainers (134–135) ───────────────────────────────────────────────
  trainerSR(134, 243, 'SAR', 'Special Art Rare', 'Shinya Mizuno', 'seb-103'), // Clemont's Quick Wit
  trainerSR(135, 245, 'SAR', 'Special Art Rare', 'Fujimoto Gold', 'seb-104'), // Jasmine's Gaze

  // ── MUR (136–138) ────────────────────────────────────────────────────────
  pokeSR(136, 247, 'MUR', 'Hyper Rare', 'aky CG Works', 'seb-33'),   // Pikachu ex

  newTrainer(137, 251, 'MUR', 'Hyper Rare', 'Toyste Beach',
    '夜のタンカ', 'Night Stretcher', ['Item'],
    '自分のトラッシュからポケモンまたは基本エネルギーを1枚選び、相手に見せて、手札に加える。',
    'Put a Pokémon or a Basic Energy card from your discard pile into your hand.'),

  trainerSR(138, 250, 'MUR', 'Hyper Rare', 'Ayumi Odashima', 'seb-106'), // Gravity Mountain
];

const updated = [...seb, ...secrets];
fs.writeFileSync(sebPath, JSON.stringify(updated, null, 2), 'utf8');
console.log(`seb.json updated: ${seb.length} → ${updated.length} cards`);
console.log(`Added ${secrets.length} secret rare entries (seb-107 through seb-138)`);
console.log('NOTE: JP images (107–138) and EN images must still be downloaded.');
