// Append ms secret rares (cards 64–92) to data/cards/ms.json
// Run: node scripts/append_ms_secrets.js
//
// JP→EN mapping notes:
//   EN set: megaevolution (setId: meg), printedTotal 132
//   EN interleaves ms and mb cards; EN 133–186 = 54 secret rares total
//   JP 71 (Alakazam AR) has no EN equivalent (imageEn: null)
//   JP 92 (Mega Gardevoir ex MUR) has no EN equivalent (imageEn: null)
//   JP 81 (Buddy-Buddy Poffin) regulationMark: H (reprint)
'use strict';
const fs   = require('fs');
const path = require('path');

const msPath = path.join(__dirname, '..', 'data', 'cards', 'ms.json');
const ms     = JSON.parse(fs.readFileSync(msPath, 'utf8').replace(/^﻿/, ''));

function base(id) { return ms.find(c => c.id === id); }

function pokeSR(jpNum, enNum, rarityJa, rarity, artist, baseId) {
  const b   = base(baseId);
  const pad = n => String(n).padStart(3, '0');
  return {
    ...b,
    id:       `ms-${jpNum}`,
    setIdEn:  enNum ? 'meg' : null,
    numberJa: `${pad(jpNum)}/063`,
    numberEn: enNum ? `${pad(enNum)}/132` : null,
    rarity,
    rarityJa,
    artist,
    imageJa: `images/sets/ms/jp/${jpNum}.jpg`,
    imageEn: enNum ? `images/sets/ms/en/${jpNum}.jpg` : null,
  };
}

function trainerSR(jpNum, enNum, rarityJa, rarity, artist, baseId) {
  const b   = base(baseId);
  const pad = n => String(n).padStart(3, '0');
  return {
    ...b,
    id:       `ms-${jpNum}`,
    setIdEn:  enNum ? 'meg' : null,
    numberJa: `${pad(jpNum)}/063`,
    numberEn: enNum ? `${pad(enNum)}/132` : null,
    rarity,
    rarityJa,
    artist,
    imageJa: `images/sets/ms/jp/${jpNum}.jpg`,
    imageEn: enNum ? `images/sets/ms/en/${jpNum}.jpg` : null,
  };
}

function trainerSAR(jpNum, enNum, rarityJa, rarity, artist, baseId) {
  const b   = base(baseId);
  const pad = n => String(n).padStart(3, '0');
  return {
    ...b,
    id:       `ms-${jpNum}`,
    setIdEn:  'meg',
    numberJa: `${pad(jpNum)}/063`,
    numberEn: `${pad(enNum)}/132`,
    rarity,
    rarityJa,
    artist,
    imageJa: `images/sets/ms/jp/${jpNum}.jpg`,
    imageEn: `images/sets/ms/en/${jpNum}.jpg`,
  };
}

function newTrainer(jpNum, enNum, rarityJa, rarity, artist, nameJa, nameEn, subtypes, textJa, textEn, regulationMark = 'I') {
  const pad = n => String(n).padStart(3, '0');
  return {
    id:       `ms-${jpNum}`,
    setIdJa:  'ms',
    setIdEn:  enNum ? 'meg' : null,
    numberJa: `${pad(jpNum)}/063`,
    numberEn: enNum ? `${pad(enNum)}/132` : null,
    nameJa,
    nameEn,
    supertype: 'Trainer',
    subtypes,
    textJa,
    textEn,
    regulationMark,
    rarity,
    rarityJa,
    artist,
    imageJa: `images/sets/ms/jp/${jpNum}.jpg`,
    imageEn: enNum ? `images/sets/ms/en/${jpNum}.jpg` : null,
  };
}

const secrets = [
  // ── AR Pokémon (64–75) ──────────────────────────────────────────────────
  pokeSR(64, 136, 'AR', 'Illustration Rare', 'OKUBO',           'ms-6'),   // Shuckle
  pokeSR(65, 137, 'AR', 'Illustration Rare', 'Tetsu Kayama',    'ms-8'),   // Ninjask
  pokeSR(66, 139, 'AR', 'Illustration Rare', 'Teaziro',         'ms-10'),  // Litleo
  pokeSR(67, 140, 'AR', 'Illustration Rare', 'Nurikabe',        'ms-17'),  // Snover
  pokeSR(68, 141, 'AR', 'Illustration Rare', 'Maxi Vau',        'ms-20'),  // Clawitzer
  pokeSR(69, 142, 'AR', 'Illustration Rare', 'Ligton',          'ms-23'),  // Inteleon
  pokeSR(70, 143, 'AR', 'Illustration Rare', 'Akira Komayama',  'ms-34'),  // Helioptile
  pokeSR(71, null,'AR', 'Illustration Rare', 'Aya Kusube',      'ms-38'),  // Alakazam — no EN
  pokeSR(72, 144, 'AR', 'Illustration Rare', 'Tetsu Kayama',    'ms-43'),  // Shedinja
  pokeSR(73, 145, 'AR', 'Illustration Rare', 'Arai Kiriko',     'ms-48'),  // Houndstone
  pokeSR(74, 152, 'AR', 'Illustration Rare', 'Takeshi Nakamura','ms-52'),  // Delibird
  pokeSR(75, 154, 'AR', 'Illustration Rare', 'OKACHEKE',        'ms-55'),  // Stufful

  // ── SR ex Pokémon (76–80) ───────────────────────────────────────────────
  pokeSR(76, 157, 'SR', 'Special Illustration Rare', '5ban Graphics', 'ms-18'),  // Mega Abomasnow ex
  pokeSR(77, 158, 'SR', 'Special Illustration Rare', '5ban Graphics', 'ms-32'),  // Mega Manectric ex
  pokeSR(78, 159, 'SR', 'Special Illustration Rare', 'takuyoa',       'ms-42'),  // Mega Gardevoir ex
  pokeSR(79, 163, 'SR', 'Special Illustration Rare', '5ban Graphics', 'ms-49'),  // Mega Latias ex
  pokeSR(80, 164, 'SR', 'Special Illustration Rare', '5ban Graphics', 'ms-51'),  // Mega Kangaskhan ex

  // ── SR Trainers (81–86) ─────────────────────────────────────────────────
  newTrainer(81, 167, 'SR', 'Special Illustration Rare', 'AYUMI ODASHIMA',
    'なかよしポフィン', 'Buddy-Buddy Poffin', ['Item'],
    '自分の山札から、HPが「70」以下のたねポケモンを2枚まで選び、ベンチに出す。そして山札を切る。',
    'Search your deck for up to 2 Basic Pokémon with 70 HP or less and put them onto your Bench. Then, shuffle your deck.',
    'H'),
  newTrainer(82, 175, 'SR', 'Special Illustration Rare', 'Studio Bora Inc.',
    'ふしぎなアメ', 'Rare Candy', ['Item'],
    '自分の手札から2進化ポケモンを1枚選び、そのポケモンへと進化する自分の場のたねポケモンにのせ、1進化をとばして進化させる。（最初の自分の番や、出したばかりのポケモンには使えない。）',
    "Choose 1 of your Basic Pokémon in play. If you have a Stage 2 card in your hand that evolves from that Pokémon, put that card onto the Basic Pokémon to evolve it, skipping the Stage 1. You can't use this card during your first turn or on a Basic Pokémon that was put into play this turn."),
  trainerSR(83, 171, 'SR', 'Special Illustration Rare', 'inose yukie',    'ms-58'),  // Mega Signal
  trainerSR(84, 165, 'SR', 'Special Illustration Rare', 'Yuu Nishida',    'ms-59'),  // Acerola's Mischief
  trainerSR(85, 176, 'SR', 'Special Illustration Rare', 'Iori Suzuki',    'ms-60'),  // Wally's Compassion
  trainerSR(86, 172, 'SR', 'Special Illustration Rare', 'AYUMI ODASHIMA', 'ms-63'),  // Mystery Garden

  // ── SAR Pokémon (87–89) ─────────────────────────────────────────────────
  pokeSR(87, 178, 'SAR', 'Special Art Rare', 'Raita Kazama',  'ms-42'),  // Mega Gardevoir ex
  pokeSR(88, 181, 'SAR', 'Special Art Rare', 'AKIRA EGAWA',   'ms-49'),  // Mega Latias ex
  pokeSR(89, 182, 'SAR', 'Special Art Rare', 'GOTO mihori',   'ms-51'),  // Mega Kangaskhan ex

  // ── SAR Trainers (90–91) ────────────────────────────────────────────────
  trainerSAR(90, 183, 'SAR', 'Special Art Rare', 'sui',          'ms-59'),  // Acerola's Mischief
  trainerSAR(91, 186, 'SAR', 'Special Art Rare', 'Jiro Sasumo',  'ms-60'),  // Wally's Compassion

  // ── MUR (92) ────────────────────────────────────────────────────────────
  pokeSR(92, null, 'MUR', 'Hyper Rare', '5ban Graphics', 'ms-42'),  // Mega Gardevoir ex — no EN
];

const updated = [...ms, ...secrets];
fs.writeFileSync(msPath, JSON.stringify(updated, null, 2), 'utf8');
console.log(`ms.json updated: ${ms.length} → ${updated.length} cards`);
console.log(`Added ${secrets.length} secret rare entries (ms-64 through ms-92)`);
