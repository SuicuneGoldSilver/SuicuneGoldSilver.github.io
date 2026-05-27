// Append pd secret rares (cards 65–94) to data/cards/pd.json
// Run: node scripts/append_pd_secrets.js
//
// JP→EN mapping notes:
//   EN set: surgingsparks (setId: sv8), printedTotal 191, total 252
//   EN secret rares: 192–252 (61 cards); pd gets 30, seb gets 31
//   pd-94 Jet Energy MUR: inline Energy object (Special Energy, not in pd base)
//   AR→EN: 65→192, 66→194, 67→195, 68→200, 69→201, 70→203,
//           71→206, 72→207, 73→209, 74→210, 75→211, 76→214
//   SR Pokémon→EN: 77→218, 78→220, 79→222, 80→224, 81→225, 82→228
//   SR Trainers→EN: 83(Drayton)→232, 84(Surfer)→235, 85(Drasna)→231, 86(Lisia's)→234
//   SAR Pokémon→EN: 87(Latias)→239, 88(Archaludon)→241, 89(Alolan Exeggutor)→242
//   SAR Trainers→EN: 90(Drayton)→244, 91(Lisia's)→246
//   MUR→EN: 92(Alolan Exeggutor)→248, 93(Counter Gain)→249, 94(Jet Energy)→252
'use strict';
const fs   = require('fs');
const path = require('path');

const pdPath = path.join(__dirname, '..', 'data', 'cards', 'pd.json');
const pd     = JSON.parse(fs.readFileSync(pdPath, 'utf8').replace(/^﻿/, ''));

function base(id) { return pd.find(c => c.id === id); }

function pokeSR(jpNum, enNum, rarityJa, rarity, artist, baseId) {
  const b   = base(baseId);
  const pad = n => String(n).padStart(3, '0');
  return {
    ...b,
    id:       `pd-${jpNum}`,
    setIdEn:  'sv8',
    numberJa: `${pad(jpNum)}/064`,
    numberEn: `${pad(enNum)}/191`,
    rarity,
    rarityJa,
    artist,
    imageJa: `images/sets/pd/jp/${jpNum}.jpg`,
    imageEn: `images/sets/pd/en/${jpNum}.jpg`,
  };
}

function trainerSR(jpNum, enNum, rarityJa, rarity, artist, baseId) {
  const b   = base(baseId);
  const pad = n => String(n).padStart(3, '0');
  return {
    ...b,
    id:       `pd-${jpNum}`,
    setIdEn:  'sv8',
    numberJa: `${pad(jpNum)}/064`,
    numberEn: `${pad(enNum)}/191`,
    rarity,
    rarityJa,
    artist,
    imageJa: `images/sets/pd/jp/${jpNum}.jpg`,
    imageEn: `images/sets/pd/en/${jpNum}.jpg`,
  };
}

const secrets = [
  // ── AR Pokémon (65–76) ───────────────────────────────────────────────────
  pokeSR(65, 192, 'AR', 'Illustration Rare', 'Yuriko Akase',   'pd-1'),   // Exeggcute
  pokeSR(66, 194, 'AR', 'Illustration Rare', 'matazo',         'pd-3'),   // Shiinotic
  pokeSR(67, 195, 'AR', 'Illustration Rare', 'Narano',         'pd-6'),   // Castform Sunny Form
  pokeSR(68, 200, 'AR', 'Illustration Rare', 'Mitsuhiro Arita','pd-12'),  // Bruxish
  pokeSR(69, 201, 'AR', 'Illustration Rare', 'Jerky',          'pd-17'),  // Cetitan
  pokeSR(70, 203, 'AR', 'Illustration Rare', 'OKACHEKE',       'pd-20'),  // Latios
  pokeSR(71, 206, 'AR', 'Illustration Rare', 'toriyufu',       'pd-26'),  // Vibrava
  pokeSR(72, 207, 'AR', 'Illustration Rare', 'USGMEN',         'pd-32'),  // Clobbopus
  pokeSR(73, 209, 'AR', 'Illustration Rare', 'Takumi Wada',    'pd-34'),  // Skarmory
  pokeSR(74, 210, 'AR', 'Illustration Rare', 'Uninori',        'pd-46'),  // Flapple
  pokeSR(75, 211, 'AR', 'Illustration Rare', 'MINAMINAMI Take','pd-47'),  // Appletun
  pokeSR(76, 214, 'AR', 'Illustration Rare', 'Gapao',          'pd-50'),  // Braviary

  // ── SR ex Pokémon (77–82) ────────────────────────────────────────────────
  pokeSR(77, 218, 'SR', 'Special Illustration Rare', 'N-DESIGN Inc.', 'pd-11'),  // Black Kyurem ex
  pokeSR(78, 220, 'SR', 'Special Illustration Rare', 'takuyoa',       'pd-19'),  // Latias ex
  pokeSR(79, 222, 'SR', 'Special Illustration Rare', '5ban Graphics', 'pd-27'),  // Flygon ex
  pokeSR(80, 224, 'SR', 'Special Illustration Rare', '5ban Graphics', 'pd-37'),  // Archaludon ex
  pokeSR(81, 225, 'SR', 'Special Illustration Rare', 'aky CG Works',  'pd-40'),  // Alolan Exeggutor ex
  pokeSR(82, 228, 'SR', 'Special Illustration Rare', '5ban Graphics', 'pd-51'),  // Cyclizar ex

  // ── SR Trainers (83–86) ──────────────────────────────────────────────────
  trainerSR(83, 232, 'SR', 'Special Illustration Rare', 'GIDORA',         'pd-60'),  // Drayton
  trainerSR(84, 235, 'SR', 'Special Illustration Rare', 'Sanosuke Sakuma','pd-61'),  // Surfer
  trainerSR(85, 231, 'SR', 'Special Illustration Rare', 'Hideki Ishikawa','pd-62'),  // Drasna
  trainerSR(86, 234, 'SR', 'Special Illustration Rare', 'En Morikura',    'pd-63'),  // Lisia's Appeal

  // ── SAR ex Pokémon (87–89) ───────────────────────────────────────────────
  pokeSR(87, 239, 'SAR', 'Special Art Rare', 'OKACHEKE',    'pd-19'),  // Latias ex
  pokeSR(88, 241, 'SAR', 'Special Art Rare', 'Shinya Mizuno','pd-37'), // Archaludon ex
  pokeSR(89, 242, 'SAR', 'Special Art Rare', 'Yuriko Akase', 'pd-40'), // Alolan Exeggutor ex

  // ── SAR Trainers (90–91) ─────────────────────────────────────────────────
  trainerSR(90, 244, 'SAR', 'Special Art Rare', 'DOM',              'pd-60'),  // Drayton
  trainerSR(91, 246, 'SAR', 'Special Art Rare', 'Nousawa Mochipuyo','pd-63'),  // Lisia's Appeal

  // ── MUR (92–94) ──────────────────────────────────────────────────────────
  pokeSR(92, 248, 'MUR', 'Hyper Rare', 'aky CG Works', 'pd-40'),  // Alolan Exeggutor ex

  trainerSR(93, 249, 'MUR', 'Hyper Rare', 'Toyste Beach', 'pd-59'),  // Counter Gain

  // Jet Energy — Special Energy, not in pd base set
  {
    id:       'pd-94',
    setIdJa:  'pd',
    setIdEn:  'sv8',
    numberJa: '094/064',
    numberEn: '252/191',
    nameJa:   'ジェットエネルギー',
    nameEn:   'Jet Energy',
    supertype: 'Energy',
    subtypes:  ['Special Energy'],
    types:    [],
    hp:       null,
    abilities: [],
    attacks:  [],
    weaknesses:  [],
    resistances: [],
    retreatCost: [],
    regulationMark: 'H',
    rarity:   'Hyper Rare',
    rarityJa: 'MUR',
    artist:   null,
    nationalPokedexNumber: null,
    textJa:   'このカードは、ポケモンについているかぎり、無色エネルギー1個ぶんとしてはたらく。このカードを手札からベンチポケモンにつけたとき、このカードをつけたポケモンを、バトルポケモンと入れ替える。',
    textEn:   'As long as this card is attached to a Pokémon, it provides [C] Energy. When you attach this card from your hand to 1 of your Benched Pokémon, switch that Pokémon with your Active Pokémon.',
    imageJa: 'images/sets/pd/jp/94.jpg',
    imageEn: 'images/sets/pd/en/94.jpg',
  },
];

const updated = [...pd, ...secrets];
fs.writeFileSync(pdPath, JSON.stringify(updated, null, 2), 'utf8');
console.log(`pd.json updated: ${pd.length} → ${updated.length} cards`);
console.log(`Added ${secrets.length} secret rare entries (pd-65 through pd-94)`);
console.log('NOTE: JP images (65–94) and EN images must still be downloaded.');
