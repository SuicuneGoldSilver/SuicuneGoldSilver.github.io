// Append wf secret rares (cards 72–100) to data/cards/wf.json
// Run: node scripts/append_wf_secrets.js
//
// JP→EN mapping notes:
//   EN set: temporalforces (setId: tf), printedTotal 162, total 218
//   EN secret rares: 163–218 (56 cards); wf gets 28 EN cards, cj gets 28
//   wf-76 Flutter Mane AR: JP-only (imageEn: null)
//   AR→EN: 164,168,170,171,173,175,176,177,181,182,183 (11 wf ARs)
//   SR Pokémon→EN: 185,188,189,190,193,196 (6)
//   SR Trainers→EN: 199,200,201 (3: Eri, Explorer's Guidance, Morty's Conviction)
//   SAR Pokémon→EN: 206,207,208 (3: Gouging Fire ex, Walking Wake ex, Raging Bolt ex)
//   SAR Trainers→EN: 210,211 (2: Eri, Morty's Conviction)
//   MUR→EN: 216,217,218 (3: Gouging Fire ex, Walking Wake ex, Raging Bolt ex)
'use strict';
const fs   = require('fs');
const path = require('path');

const wfPath = path.join(__dirname, '..', 'data', 'cards', 'wf.json');
const wf     = JSON.parse(fs.readFileSync(wfPath, 'utf8').replace(/^﻿/, ''));

function base(id) { return wf.find(c => c.id === id); }

function pokeSR(jpNum, enNum, rarityJa, rarity, artist, baseId) {
  const b   = base(baseId);
  const pad = n => String(n).padStart(3, '0');
  return {
    ...b,
    id:       `wf-${jpNum}`,
    setIdEn:  enNum ? 'tf' : null,
    numberJa: `${pad(jpNum)}/071`,
    numberEn: enNum ? `${pad(enNum)}/162` : null,
    rarity,
    rarityJa,
    artist,
    imageJa: `images/sets/wf/jp/${jpNum}.jpg`,
    imageEn: enNum ? `images/sets/wf/en/${jpNum}.jpg` : null,
  };
}

function trainerSR(jpNum, enNum, rarityJa, rarity, artist, baseId) {
  const b   = base(baseId);
  const pad = n => String(n).padStart(3, '0');
  return {
    ...b,
    id:       `wf-${jpNum}`,
    setIdEn:  'tf',
    numberJa: `${pad(jpNum)}/071`,
    numberEn: `${pad(enNum)}/162`,
    rarity,
    rarityJa,
    artist,
    imageJa: `images/sets/wf/jp/${jpNum}.jpg`,
    imageEn: `images/sets/wf/en/${jpNum}.jpg`,
  };
}

function trainerSAR(jpNum, enNum, rarityJa, rarity, artist, baseId) {
  const b   = base(baseId);
  const pad = n => String(n).padStart(3, '0');
  return {
    ...b,
    id:       `wf-${jpNum}`,
    setIdEn:  'tf',
    numberJa: `${pad(jpNum)}/071`,
    numberEn: `${pad(enNum)}/162`,
    rarity,
    rarityJa,
    artist,
    imageJa: `images/sets/wf/jp/${jpNum}.jpg`,
    imageEn: `images/sets/wf/en/${jpNum}.jpg`,
  };
}

const secrets = [
  // ── AR Pokémon (72–83) ───────────────────────────────────────────────────
  pokeSR(72,  164, 'AR', 'Illustration Rare', 'Oswaldo KATO',     'wf-4'),   // Grotle
  pokeSR(73,  168, 'AR', 'Illustration Rare', 'N-DESIGN Inc.',    'wf-19'),  // Snom
  pokeSR(74,  170, 'AR', 'Illustration Rare', 'sowsow',           'wf-28'),  // Bronzor
  pokeSR(75,  171, 'AR', 'Illustration Rare', 'Atsushi Furusawa', 'wf-32'),  // Reuniclus
  pokeSR(76,  null,'AR', 'Illustration Rare', 'Takumi Wada',      'wf-33'),  // Flutter Mane — no EN
  pokeSR(77,  173, 'AR', 'Illustration Rare', 'Mitsuhiro Arita',  'wf-34'),  // Relicanth
  pokeSR(78,  175, 'AR', 'Illustration Rare', 'MINAMINAMI Take',  'wf-38'),  // Mudsdale
  pokeSR(79,  176, 'AR', 'Illustration Rare', 'OKUBO',            'wf-44'),  // Arbok
  pokeSR(80,  177, 'AR', 'Illustration Rare', 'Mousho',           'wf-45'),  // Gastly
  pokeSR(81,  181, 'AR', 'Illustration Rare', 'Scav',             'wf-58'),  // Chatot
  pokeSR(82,  182, 'AR', 'Illustration Rare', 'Shubuzoh',         'wf-59'),  // Minccino
  pokeSR(83,  183, 'AR', 'Illustration Rare', 'Shibuzoh.',        'wf-60'),  // Cinccino

  // ── SR ex Pokémon (84–89) ────────────────────────────────────────────────
  pokeSR(84,  185, 'SR', 'Special Illustration Rare', 'PLANETA Tsuji', 'wf-5'),   // Torterra ex
  pokeSR(85,  188, 'SR', 'Special Illustration Rare', '5ban Graphics', 'wf-12'),  // Gouging Fire ex
  pokeSR(86,  189, 'SR', 'Special Illustration Rare', 'takuyoa',       'wf-24'),  // Walking Wake ex
  pokeSR(87,  190, 'SR', 'Special Illustration Rare', '5ban Graphics', 'wf-25'),  // Wugtrio ex
  pokeSR(88,  193, 'SR', 'Special Illustration Rare', 'Satoshi Shirai','wf-47'),  // Gengar ex
  pokeSR(89,  196, 'SR', 'Special Illustration Rare', 'aky CG Works',  'wf-53'),  // Raging Bolt ex

  // ── SR Trainers (90–92) ──────────────────────────────────────────────────
  trainerSR(90, 200, 'SR', 'Special Illustration Rare', 'Hideki Ishikawa', 'wf-67'),  // Explorer's Guidance
  trainerSR(91, 199, 'SR', 'Special Illustration Rare', 'GOSSAN',          'wf-68'),  // Eri
  trainerSR(92, 201, 'SR', 'Special Illustration Rare', 'GIDORA',          'wf-69'),  // Morty's Conviction

  // ── SAR ex Pokémon (93–95) ───────────────────────────────────────────────
  pokeSR(93,  206, 'SAR', 'Special Art Rare', 'Teeziro', 'wf-12'),  // Gouging Fire ex
  pokeSR(94,  207, 'SAR', 'Special Art Rare', 'Teeziro', 'wf-24'),  // Walking Wake ex
  pokeSR(95,  208, 'SAR', 'Special Art Rare', 'Teeziro', 'wf-53'),  // Raging Bolt ex

  // ── SAR Trainers (96–97) ─────────────────────────────────────────────────
  trainerSAR(96, 210, 'SAR', 'Special Art Rare', 'DOM',            'wf-68'),  // Eri
  trainerSAR(97, 211, 'SAR', 'Special Art Rare', 'Megumi Mizutani','wf-69'),  // Morty's Conviction

  // ── MUR (98–100) ─────────────────────────────────────────────────────────
  pokeSR(98,  216, 'MUR', 'Hyper Rare', '5ban Graphics', 'wf-12'),  // Gouging Fire ex
  pokeSR(99,  217, 'MUR', 'Hyper Rare', 'takuyoa',       'wf-24'),  // Walking Wake ex
  pokeSR(100, 218, 'MUR', 'Hyper Rare', 'aky CG Works',  'wf-53'),  // Raging Bolt ex
];

const updated = [...wf, ...secrets];
fs.writeFileSync(wfPath, JSON.stringify(updated, null, 2), 'utf8');
console.log(`wf.json updated: ${wf.length} → ${updated.length} cards`);
console.log(`Added ${secrets.length} secret rare entries (wf-72 through wf-100)`);
console.log('NOTE: JP images (72–100) and EN images must still be downloaded.');
