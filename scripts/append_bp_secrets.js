// Append bp secret rares (cards 101–132) to data/cards/bp.json
// Run: node scripts/append_bp_secrets.js
//
// JP→EN mapping notes:
//   EN set: journeytogether (setId: jt), printedTotal 159, total 190
//   EN secret rares: 160–190 (31 cards); bp-108 N's Zorua AR is JP-only
//   AR→EN: 101→160, 102→161, 103→162, 104→163, 105→164, 106→165,
//           107→166, 108→null(JP-only), 109→167, 110→168, 111→169, 112→170
//   SR Pokémon→EN: 113→171, 114→172, 115→173, 116→174, 117→175, 118→176, 119→177, 120→178
//   SR Trainers→EN: 121(Iris's)→180, 122(Ruffian)→181, 123(Brock's)→179
//   SAR Pokémon→EN: 124→182, 125→183, 126→184, 127→185, 128→186, 129→187
//   MUR→EN: 130(Iono's Bellibolt)→188, 131(N's Zoroark)→189, 132(Spiky Energy)→190
'use strict';
const fs   = require('fs');
const path = require('path');

const bpPath = path.join(__dirname, '..', 'data', 'cards', 'bp.json');
const bp     = JSON.parse(fs.readFileSync(bpPath, 'utf8').replace(/^﻿/, ''));

function base(id) { return bp.find(c => c.id === id); }

function pokeSR(jpNum, enNum, rarityJa, rarity, artist, baseId) {
  const b   = base(baseId);
  const pad = n => String(n).padStart(3, '0');
  return {
    ...b,
    id:       `bp-${jpNum}`,
    setIdEn:  enNum ? 'jt' : null,
    numberJa: `${pad(jpNum)}/100`,
    numberEn: enNum ? `${pad(enNum)}/159` : null,
    rarity,
    rarityJa,
    artist,
    imageJa: `images/sets/bp/jp/${jpNum}.jpg`,
    imageEn: enNum ? `images/sets/bp/en/${jpNum}.jpg` : null,
  };
}

function trainerSR(jpNum, enNum, rarityJa, rarity, artist, baseId) {
  const b   = base(baseId);
  const pad = n => String(n).padStart(3, '0');
  return {
    ...b,
    id:       `bp-${jpNum}`,
    setIdEn:  'jt',
    numberJa: `${pad(jpNum)}/100`,
    numberEn: `${pad(enNum)}/159`,
    rarity,
    rarityJa,
    artist,
    imageJa: `images/sets/bp/jp/${jpNum}.jpg`,
    imageEn: `images/sets/bp/en/${jpNum}.jpg`,
  };
}

const secrets = [
  // ── AR Pokémon (101–112) ─────────────────────────────────────────────────
  pokeSR(101, 160, 'AR', 'Illustration Rare', 'Ounishi',        'bp-6'),   // Maractus
  pokeSR(102, 161, 'AR', 'Illustration Rare', 'Kuroimori',      'bp-18'),  // Articuno
  pokeSR(103, 162, 'AR', 'Illustration Rare', 'Katsunori Sato', 'bp-25'),  // Wailord
  pokeSR(104, 163, 'AR', 'Illustration Rare', 'Terada Tera',    'bp-32'),  // Iono's Kilowattrel
  pokeSR(105, 164, 'AR', 'Illustration Rare', 'saino misaki',   'bp-42'),  // Lillie's Ribombee
  pokeSR(106, 165, 'AR', 'Illustration Rare', 'Nakamura Ippan', 'bp-44'),  // Swinub
  pokeSR(107, 166, 'AR', 'Illustration Rare', 'GIDORA',         'bp-52'),  // Lycanroc
  pokeSR(108, null,'AR', 'Illustration Rare', 'Megumi Mizutani','bp-60'),  // N's Zorua — no EN
  pokeSR(109, 167, 'AR', 'Illustration Rare', 'Bun Toujo',      'bp-74'),  // N's Reshiram
  pokeSR(110, 168, 'AR', 'Illustration Rare', 'REND',           'bp-77'),  // Furret
  pokeSR(111, 169, 'AR', 'Illustration Rare', 'sowsow',         'bp-80'),  // Noibat
  pokeSR(112, 170, 'AR', 'Illustration Rare', 'MINAMINAMI Take','bp-85'),  // Hop's Wooloo

  // ── SR ex Pokémon (113–120) ──────────────────────────────────────────────
  pokeSR(113, 171, 'SR', 'Special Illustration Rare', '5ban Graphics',     'bp-17'),  // Volcanion ex
  pokeSR(114, 172, 'SR', 'Special Illustration Rare', '5ban Graphics & DOM','bp-30'), // Iono's Bellibolt ex
  pokeSR(115, 173, 'SR', 'Special Illustration Rare', '5ban Graphics & DOM','bp-33'), // Lillie's Clefairy ex
  pokeSR(116, 174, 'SR', 'Special Illustration Rare', 'N-DESIGN Inc.',     'bp-46'),  // Mamoswine ex
  pokeSR(117, 175, 'SR', 'Special Illustration Rare', 'takuyoa & DOM',     'bp-61'),  // N's Zoroark ex
  pokeSR(118, 176, 'SR', 'Special Illustration Rare', 'aky CG Works & DOM','bp-69'),  // Hop's Zacian ex
  pokeSR(119, 177, 'SR', 'Special Illustration Rare', '5ban Graphics',     'bp-72'),  // Salamence ex
  pokeSR(120, 178, 'SR', 'Special Illustration Rare', '5ban Graphics',     'bp-79'),  // Dudunsparce ex

  // ── SR Trainers (121–123) ────────────────────────────────────────────────
  trainerSR(121, 180, 'SR', 'Special Illustration Rare', 'yuu',          'bp-94'),  // Iris's Fighting Spirit
  trainerSR(122, 181, 'SR', 'Special Illustration Rare', 'Hideki Ishikawa','bp-95'), // Ruffian
  trainerSR(123, 179, 'SR', 'Special Illustration Rare', 'Teeziro',      'bp-96'),  // Brock's Scouting

  // ── SAR ex Pokémon (124–129) ─────────────────────────────────────────────
  pokeSR(124, 182, 'SAR', 'Special Art Rare', 'akagi',         'bp-17'),  // Volcanion ex
  pokeSR(125, 183, 'SAR', 'Special Art Rare', 'Yuu Nishida',   'bp-30'),  // Iono's Bellibolt ex
  pokeSR(126, 184, 'SAR', 'Special Art Rare', 'Susumu Maeya',  'bp-33'),  // Lillie's Clefairy ex
  pokeSR(127, 185, 'SAR', 'Special Art Rare', 'Megumi Mizutani','bp-61'), // N's Zoroark ex
  pokeSR(128, 186, 'SAR', 'Special Art Rare', 'DOM',           'bp-69'),  // Hop's Zacian ex
  pokeSR(129, 187, 'SAR', 'Special Art Rare', 'Tsuyoshi Nagano','bp-72'), // Salamence ex

  // ── MUR (130–132) ────────────────────────────────────────────────────────
  pokeSR(130, 188, 'MUR', 'Hyper Rare', '5ban Graphics & DOM', 'bp-30'),  // Iono's Bellibolt ex
  pokeSR(131, 189, 'MUR', 'Hyper Rare', 'takuyoa & DOM',       'bp-61'),  // N's Zoroark ex
  pokeSR(132, 190, 'MUR', 'Hyper Rare', null,                  'bp-100'), // Spiky Energy
];

const updated = [...bp, ...secrets];
fs.writeFileSync(bpPath, JSON.stringify(updated, null, 2), 'utf8');
console.log(`bp.json updated: ${bp.length} → ${updated.length} cards`);
console.log(`Added ${secrets.length} secret rare entries (bp-101 through bp-132)`);
console.log('NOTE: bp-108 N\'s Zorua AR is JP-only (no EN equivalent)');
console.log('NOTE: JP images (101–132) and EN images must still be downloaded.');
