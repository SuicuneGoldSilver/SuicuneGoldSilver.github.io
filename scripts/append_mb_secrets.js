// Append mb secret rares (cards 64–92) to data/cards/mb.json
// Run: node scripts/append_mb_secrets.js
//
// JP→EN mapping notes:
//   EN set: megaevolution (setId: meg), printedTotal 132
//   EN 133–186 = 54 secret rares total; mb gets 27, ms gets the other 27
//   JP 68 (Riolu AR) has no EN equivalent (imageEn: null)
//   JP 92 (Mega Lucario ex MUR) has no EN equivalent (imageEn: null)
//   JP 83 (Night Stretcher) regulationMark: H (reprint)
//   JP 84 (Air Balloon) regulationMark: I (newTrainer — not in mb base)
'use strict';
const fs   = require('fs');
const path = require('path');

const mbPath = path.join(__dirname, '..', 'data', 'cards', 'mb.json');
const mb     = JSON.parse(fs.readFileSync(mbPath, 'utf8').replace(/^﻿/, ''));

function base(id) { return mb.find(c => c.id === id); }

function pokeSR(jpNum, enNum, rarityJa, rarity, artist, baseId) {
  const b   = base(baseId);
  const pad = n => String(n).padStart(3, '0');
  return {
    ...b,
    id:       `mb-${jpNum}`,
    setIdEn:  enNum ? 'meg' : null,
    numberJa: `${pad(jpNum)}/063`,
    numberEn: enNum ? `${pad(enNum)}/132` : null,
    rarity,
    rarityJa,
    artist,
    imageJa: `images/sets/mb/jp/${jpNum}.jpg`,
    imageEn: enNum ? `images/sets/mb/en/${jpNum}.jpg` : null,
  };
}

function trainerSR(jpNum, enNum, rarityJa, rarity, artist, baseId) {
  const b   = base(baseId);
  const pad = n => String(n).padStart(3, '0');
  return {
    ...b,
    id:       `mb-${jpNum}`,
    setIdEn:  enNum ? 'meg' : null,
    numberJa: `${pad(jpNum)}/063`,
    numberEn: enNum ? `${pad(enNum)}/132` : null,
    rarity,
    rarityJa,
    artist,
    imageJa: `images/sets/mb/jp/${jpNum}.jpg`,
    imageEn: enNum ? `images/sets/mb/en/${jpNum}.jpg` : null,
  };
}

function trainerSAR(jpNum, enNum, rarityJa, rarity, artist, baseId) {
  const b   = base(baseId);
  const pad = n => String(n).padStart(3, '0');
  return {
    ...b,
    id:       `mb-${jpNum}`,
    setIdEn:  'meg',
    numberJa: `${pad(jpNum)}/063`,
    numberEn: `${pad(enNum)}/132`,
    rarity,
    rarityJa,
    artist,
    imageJa: `images/sets/mb/jp/${jpNum}.jpg`,
    imageEn: `images/sets/mb/en/${jpNum}.jpg`,
  };
}

function newTrainer(jpNum, enNum, rarityJa, rarity, artist, nameJa, nameEn, subtypes, textJa, textEn, regulationMark = 'I') {
  const pad = n => String(n).padStart(3, '0');
  return {
    id:       `mb-${jpNum}`,
    setIdJa:  'mb',
    setIdEn:  enNum ? 'meg' : null,
    numberJa: `${pad(jpNum)}/063`,
    numberEn: enNum ? `${pad(enNum)}/132` : null,
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
    imageJa: `images/sets/mb/jp/${jpNum}.jpg`,
    imageEn: enNum ? `images/sets/mb/en/${jpNum}.jpg` : null,
  };
}

const secrets = [
  // ── AR Pokémon (64–75) ──────────────────────────────────────────────────
  pokeSR(64,  133, 'AR', 'Illustration Rare', 'mashu',             'mb-1'),   // Bulbasaur
  pokeSR(65,  134, 'AR', 'Illustration Rare', 'mashu',             'mb-2'),   // Ivysaur
  pokeSR(66,  135, 'AR', 'Illustration Rare', 'Yukihiro Toda',     'mb-5'),   // Exeggutor
  pokeSR(67,  138, 'AR', 'Illustration Rare', 'saino misaki',      'mb-10'),  // Vulpix
  pokeSR(68,  null,'AR', 'Illustration Rare', 'GOSSAN',            'mb-28'),  // Riolu — no EN
  pokeSR(69,  146, 'AR', 'Illustration Rare', '0313',              'mb-32'),  // Marshadow
  pokeSR(70,  147, 'AR', 'Illustration Rare', 'Yano Keiji',        'mb-36'),  // Garganacl
  pokeSR(71,  148, 'AR', 'Illustration Rare', 'IKEDA Saki',        'mb-39'),  // Spiritomb
  pokeSR(72,  149, 'AR', 'Illustration Rare', 'Shimaris Yukichi',  'mb-43'),  // Shroodle
  pokeSR(73,  150, 'AR', 'Illustration Rare', 'Tonji Matsuno',     'mb-45'),  // Steelix
  pokeSR(74,  151, 'AR', 'Illustration Rare', 'MINAMINAMI Take',   'mb-52'),  // Spearow
  pokeSR(75,  153, 'AR', 'Illustration Rare', 'Mina Nakai',        'mb-56'),  // Gumshoos

  // ── SR ex Pokémon (76–80) ───────────────────────────────────────────────
  pokeSR(76,  155, 'SR', 'Special Illustration Rare', '5ban Graphics', 'mb-3'),   // Mega Venusaur ex
  pokeSR(77,  156, 'SR', 'Special Illustration Rare', '5ban Graphics', 'mb-13'),  // Mega Camerupt ex
  pokeSR(78,  160, 'SR', 'Special Illustration Rare', 'takuyoa',       'mb-29'),  // Mega Lucario ex
  pokeSR(79,  161, 'SR', 'Special Illustration Rare', 'aky CG Works',  'mb-38'),  // Mega Absol ex
  pokeSR(80,  162, 'SR', 'Special Illustration Rare', 'aky CG Works',  'mb-46'),  // Mega Mawile ex

  // ── SR Trainers (81–86) ─────────────────────────────────────────────────
  trainerSR(81, 174, 'SR', 'Special Illustration Rare', 'Toyste Beach',      'mb-58'),  // Premium Power Pro
  trainerSR(82, 168, 'SR', 'Special Illustration Rare', 'Toyste Beach',      'mb-59'),  // Fighting Gong
  newTrainer(83, 173, 'SR', 'Special Illustration Rare', 'Toyste Beach',
    '夜のタンカ', 'Night Stretcher', ['Item'],
    '自分のトラッシュからポケモンまたは基本エネルギーを1枚選び、相手に見せて、手札に加える。',
    'Put a Pokémon or a Basic Energy card from your discard pile into your hand.',
    'H'),
  newTrainer(84, 166, 'SR', 'Special Illustration Rare', 'Studio Bora Inc.',
    'ふうせん', 'Air Balloon', ['Pokémon Tool'],
    'このカードをつけているポケモンは、にげるためのエネルギーが2個ぶん少なくなる。',
    'The Retreat Cost of the Pokémon this card is attached to is [C][C] less.'),
  trainerSR(85, 170, 'SR', 'Special Illustration Rare', 'Hideki Ishikowa',   'mb-61'),  // Lt. Surge's Bargain
  trainerSR(86, 169, 'SR', 'Special Illustration Rare', 'Atsushi Furusawa',  'mb-62'),  // Lillie's Determination

  // ── SAR Pokémon (87–89) ─────────────────────────────────────────────────
  pokeSR(87,  177, 'SAR', 'Special Art Rare', 'mashu',          'mb-3'),   // Mega Venusaur ex
  pokeSR(88,  179, 'SAR', 'Special Art Rare', 'Atsushi Furusawa','mb-29'),  // Mega Lucario ex
  pokeSR(89,  180, 'SAR', 'Special Art Rare', 'Mitsuhiro Arita', 'mb-38'),  // Mega Absol ex

  // ── SAR Trainers (90–91) ────────────────────────────────────────────────
  trainerSAR(90, 184, 'SAR', 'Special Art Rare', 'osare',  'mb-61'),  // Lt. Surge's Bargain
  trainerSAR(91, 185, 'SAR', 'Special Art Rare', 'satoma', 'mb-62'),  // Lillie's Determination

  // ── MUR (92) ────────────────────────────────────────────────────────────
  pokeSR(92, null, 'MUR', 'Hyper Rare', '5ban Graphics', 'mb-29'),  // Mega Lucario ex — no EN
];

const updated = [...mb, ...secrets];
fs.writeFileSync(mbPath, JSON.stringify(updated, null, 2), 'utf8');
console.log(`mb.json updated: ${mb.length} → ${updated.length} cards`);
console.log(`Added ${secrets.length} secret rare entries (mb-64 through mb-92)`);
