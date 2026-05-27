// Append cj secret rares (cards 72–100) to data/cards/cj.json
// Run: node scripts/append_cj_secrets.js
//
// JP→EN mapping notes:
//   EN set: temporalforces (setId: tf), printedTotal 162, total 218
//   EN secret rares: 163–218 (56 cards); cj gets 28 EN cards, wf gets 28
//   cj-77 Iron Thorns AR: JP-only (imageEn: null)
//   AR→EN: 163,165,166,167,169,172,174,178,179,180,184 (11 cj ARs)
//   SR Pokémon→EN: 186,187,191,192,194,195 (6)
//   SR Trainers→EN: 198,202,197 (Ciphermaniac's, Salvatore, Bianca's Devotion)
//   SAR Pokémon→EN: 203,206,207 (Iron Leaves, Iron Crown, Iron Boulder)
//   SAR Trainers→EN: 212,209 (Salvatore, Bianca's Devotion)
//   MUR→EN: 213,216,217 (Iron Leaves, Iron Crown, Iron Boulder)
'use strict';
const fs   = require('fs');
const path = require('path');

const cjPath = path.join(__dirname, '..', 'data', 'cards', 'cj.json');
const cj     = JSON.parse(fs.readFileSync(cjPath, 'utf8').replace(/^﻿/, ''));

function base(id) { return cj.find(c => c.id === id); }

function pokeSR(jpNum, enNum, rarityJa, rarity, artist, baseId) {
  const b   = base(baseId);
  const pad = n => String(n).padStart(3, '0');
  return {
    ...b,
    id:       `cj-${jpNum}`,
    setIdEn:  enNum ? 'tf' : null,
    numberJa: `${pad(jpNum)}/071`,
    numberEn: enNum ? `${pad(enNum)}/162` : null,
    rarity,
    rarityJa,
    artist,
    imageJa: `images/sets/cj/jp/${jpNum}.jpg`,
    imageEn: enNum ? `images/sets/cj/en/${jpNum}.jpg` : null,
  };
}

function trainerSR(jpNum, enNum, rarityJa, rarity, artist, baseId) {
  const b   = base(baseId);
  const pad = n => String(n).padStart(3, '0');
  return {
    ...b,
    id:       `cj-${jpNum}`,
    setIdEn:  'tf',
    numberJa: `${pad(jpNum)}/071`,
    numberEn: `${pad(enNum)}/162`,
    rarity,
    rarityJa,
    artist,
    imageJa: `images/sets/cj/jp/${jpNum}.jpg`,
    imageEn: `images/sets/cj/en/${jpNum}.jpg`,
  };
}

function trainerSAR(jpNum, enNum, rarityJa, rarity, artist, baseId) {
  const b   = base(baseId);
  const pad = n => String(n).padStart(3, '0');
  return {
    ...b,
    id:       `cj-${jpNum}`,
    setIdEn:  'tf',
    numberJa: `${pad(jpNum)}/071`,
    numberEn: `${pad(enNum)}/162`,
    rarity,
    rarityJa,
    artist,
    imageJa: `images/sets/cj/jp/${jpNum}.jpg`,
    imageEn: `images/sets/cj/en/${jpNum}.jpg`,
  };
}

const secrets = [
  // ── AR Pokémon (72–83) ───────────────────────────────────────────────────
  pokeSR(72,  163, 'AR', 'Illustration Rare', 'SIE NANAHARA',   'cj-5'),   // Shiftry
  pokeSR(73,  165, 'AR', 'Illustration Rare', 'Susumu Maeya',   'cj-8'),   // Deerling
  pokeSR(74,  166, 'AR', 'Illustration Rare', 'Susumu Maeya',   'cj-9'),   // Sawsbuck
  pokeSR(75,  167, 'AR', 'Illustration Rare', 'Makura Tami',    'cj-20'),  // Litten
  pokeSR(76,  169, 'AR', 'Illustration Rare', 'Mina Nakai',     'cj-27'),  // Charjabug
  pokeSR(77,  null,'AR', 'Illustration Rare', 'Tonji Matsuno',  'cj-30'),  // Iron Thorns — no EN
  pokeSR(78,  172, 'AR', 'Illustration Rare', 'REND',           'cj-33'),  // Cutiefly
  pokeSR(79,  174, 'AR', 'Illustration Rare', 'Saboteri',       'cj-40'),  // Excadrill
  pokeSR(80,  178, 'AR', 'Illustration Rare', 'Katsunori Sato', 'cj-48'),  // Metagross
  pokeSR(81,  179, 'AR', 'Illustration Rare', 'Masa',           'cj-49'),  // Meltan
  pokeSR(82,  180, 'AR', 'Illustration Rare', 'Orca',           'cj-53'),  // Lickitung
  pokeSR(83,  184, 'AR', 'Illustration Rare', 'Mekayu',         'cj-60'),  // Drampa

  // ── SR ex Pokémon (84–89) ────────────────────────────────────────────────
  pokeSR(84,  186, 'SR', 'Special Illustration Rare', '5ban Graphics',  'cj-16'),  // Iron Leaves ex
  pokeSR(85,  187, 'SR', 'Special Illustration Rare', 'N-DESIGN Inc.',  'cj-22'),  // Incineroar ex
  pokeSR(86,  191, 'SR', 'Special Illustration Rare', '5ban Graphics',  'cj-36'),  // Iron Crown ex
  pokeSR(87,  192, 'SR', 'Special Illustration Rare', '5ban Graphics',  'cj-41'),  // Iron Boulder ex
  pokeSR(88,  194, 'SR', 'Special Illustration Rare', '5ban Graphics',  'cj-42'),  // Farigiraf ex
  pokeSR(89,  195, 'SR', 'Special Illustration Rare', 'Eske Yoshinob',  'cj-44'),  // Scizor ex

  // ── SR Trainers (90–92) ──────────────────────────────────────────────────
  trainerSR(90, 198, 'SR', 'Special Illustration Rare', 'Taira Akitsu', 'cj-67'),  // Ciphermaniac's Codebreaking
  trainerSR(91, 202, 'SR', 'Special Illustration Rare', 'Ryuta Fuse',   'cj-68'),  // Salvatore
  trainerSR(92, 197, 'SR', 'Special Illustration Rare', 'En Morikura',  'cj-69'),  // Bianca's Devotion

  // ── SAR ex Pokémon (93–95) ───────────────────────────────────────────────
  pokeSR(93,  203, 'SAR', 'Special Art Rare', 'nagimiso', 'cj-16'),  // Iron Leaves ex
  pokeSR(94,  206, 'SAR', 'Special Art Rare', 'nagimiso', 'cj-36'),  // Iron Crown ex
  pokeSR(95,  207, 'SAR', 'Special Art Rare', 'nagimiso', 'cj-41'),  // Iron Boulder ex

  // ── SAR Trainers (96–97) ─────────────────────────────────────────────────
  trainerSAR(96, 212, 'SAR', 'Special Art Rare', 'Tetsu Kayama',  'cj-68'),  // Salvatore
  trainerSAR(97, 209, 'SAR', 'Special Art Rare', 'Cona Nitanda',  'cj-69'),  // Bianca's Devotion

  // ── MUR (98–100) ─────────────────────────────────────────────────────────
  pokeSR(98,  213, 'MUR', 'Hyper Rare', '5ban Graphics', 'cj-16'),  // Iron Leaves ex
  pokeSR(99,  216, 'MUR', 'Hyper Rare', '5ban Graphics', 'cj-36'),  // Iron Crown ex
  pokeSR(100, 217, 'MUR', 'Hyper Rare', '5ban Graphics', 'cj-41'),  // Iron Boulder ex
];

const updated = [...cj, ...secrets];
fs.writeFileSync(cjPath, JSON.stringify(updated, null, 2), 'utf8');
console.log(`cj.json updated: ${cj.length} → ${updated.length} cards`);
console.log(`Added ${secrets.length} secret rare entries (cj-72 through cj-100)`);
console.log('NOTE: JP images (72–100) and EN images must still be downloaded.');
