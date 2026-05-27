// Append ns secret rares (cards 84–120) to data/cards/ns.json
// Run: node scripts/append_ns_secrets.js
'use strict';
const fs   = require('fs');
const path = require('path');

const nsPath = path.join(__dirname, '..', 'data', 'cards', 'ns.json');
const ns     = JSON.parse(fs.readFileSync(nsPath, 'utf8'));

function base(id) { return ns.find(c => c.id === id); }

function pokeSR(jpNum, enNum, rarityJa, rarity, artist, baseId, opts = {}) {
  const b   = base(baseId);
  const pad = n => String(n).padStart(3, '0');
  return {
    id:          `ns-${jpNum}`,
    setIdJa:     'ns',
    setIdEn:     enNum ? 'cri' : null,
    numberJa:    `${pad(jpNum)}/083`,
    numberEn:    enNum ? `${pad(enNum)}/086` : null,
    nameJa:      opts.nameJa  ?? b.nameJa,
    nameEn:      opts.nameEn  ?? b.nameEn,
    supertype:   b.supertype,
    subtypes:    b.subtypes,
    types:       b.types,
    hp:          b.hp,
    evolvesFrom: b.evolvesFrom,
    abilities:   b.abilities,
    attacks:     b.attacks,
    weaknesses:  b.weaknesses,
    resistances: b.resistances,
    retreatCost: b.retreatCost,
    regulationMark: b.regulationMark,
    rarity,
    rarityJa,
    artist,
    nationalPokedexNumber: b.nationalPokedexNumber,
    imageJa: `images/sets/ns/jp/${jpNum}.jpg`,
    imageEn: enNum ? `images/sets/ns/en/${jpNum}.jpg` : null,
  };
}

function trainerSR(jpNum, enNum, rarityJa, rarity, artist, baseId) {
  const b   = base(baseId);
  const pad = n => String(n).padStart(3, '0');
  return {
    id:       `ns-${jpNum}`,
    setIdJa:  'ns',
    setIdEn:  enNum ? 'cri' : null,
    numberJa: `${pad(jpNum)}/083`,
    numberEn: enNum ? `${pad(enNum)}/086` : null,
    nameJa:   b.nameJa,
    nameEn:   b.nameEn,
    supertype: b.supertype,
    subtypes:  b.subtypes,
    textJa:   b.textJa,
    textEn:   b.textEn,
    regulationMark: b.regulationMark,
    rarity,
    rarityJa,
    artist,
    imageJa: `images/sets/ns/jp/${jpNum}.jpg`,
    imageEn: enNum ? `images/sets/ns/en/${jpNum}.jpg` : null,
  };
}

function trainerSAR(jpNum, enNum, rarityJa, rarity, artist, baseId) {
  const b   = base(baseId);
  const pad = n => String(n).padStart(3, '0');
  return {
    id:       `ns-${jpNum}`,
    setIdJa:  'ns',
    setIdEn:  'cri',
    numberJa: `${pad(jpNum)}/083`,
    numberEn: `${pad(enNum)}/086`,
    nameJa:   b.nameJa,
    nameEn:   b.nameEn,
    supertype: b.supertype,
    subtypes:  b.subtypes,
    textJa:   b.textJa,
    textEn:   b.textEn,
    regulationMark: b.regulationMark,
    rarity,
    rarityJa,
    artist,
    imageJa: `images/sets/ns/jp/${jpNum}.jpg`,
    imageEn: `images/sets/ns/en/${jpNum}.jpg`,
  };
}

function newTrainer(jpNum, enNum, rarityJa, rarity, artist, nameJa, nameEn, supertype, subtypes, textJa, textEn) {
  const pad = n => String(n).padStart(3, '0');
  return {
    id:       `ns-${jpNum}`,
    setIdJa:  'ns',
    setIdEn:  enNum ? 'cri' : null,
    numberJa: `${pad(jpNum)}/083`,
    numberEn: enNum ? `${pad(enNum)}/086` : null,
    nameJa,
    nameEn,
    supertype,
    subtypes,
    textJa,
    textEn,
    regulationMark: 'J',
    rarity,
    rarityJa,
    artist,
    imageJa: `images/sets/ns/jp/${jpNum}.jpg`,
    imageEn: enNum ? `images/sets/ns/en/${jpNum}.jpg` : null,
  };
}

const secrets = [
  // ── AR Pokémon (84–95) ──────────────────────────────────────────────────
  pokeSR(84,  87,   'AR', 'Illustration Rare', 'Atsushi Furusawa', 'ns-5'),   // Chespin
  pokeSR(85,  null, 'AR', 'Illustration Rare', 'satoma',           'ns-11'),  // Fennekin — no EN
  pokeSR(86,  88,   'AR', 'Illustration Rare', 'Susumu Maeya',     'ns-20'),  // Froakie
  pokeSR(87,  89,   'AR', 'Illustration Rare', 'Susumu Maeya',     'ns-21'),  // Frogadier
  pokeSR(88,  90,   'AR', 'Illustration Rare', 'saino misaki',     'ns-29'),  // Ampharos
  pokeSR(89,  91,   'AR', 'Illustration Rare', 'YASHIRO Nanaco',   'ns-42'),  // Xerneas
  pokeSR(90,  92,   'AR', 'Illustration Rare', 'matazo',           'ns-47'),  // Claydol
  pokeSR(91,  93,   'AR', 'Illustration Rare', 'Kazuhisa Uragami', 'ns-50'),  // Crobat
  pokeSR(92,  94,   'AR', 'Illustration Rare', 'Kurata So',        'ns-58'),  // Metang
  pokeSR(93,  95,   'AR', 'Illustration Rare', 'aspara',           'ns-65'),  // Sliggoo
  pokeSR(94,  96,   'AR', 'Illustration Rare', 'Tsuyoshi Nagano',  'ns-67'),  // Tauros
  pokeSR(95,  97,   'AR', 'Illustration Rare', 'MARINA Chikazawa', 'ns-69'),  // Watchog

  // ── SR ex Pokémon (96–103) ──────────────────────────────────────────────
  pokeSR(96,  98,  'SR', 'Special Illustration Rare', '5ban Graphics', 'ns-3'),   // Beedrill ex
  pokeSR(97,  99,  'SR', 'Special Illustration Rare', 'Keisuke Azuma', 'ns-15'),  // Mega Pyroar ex
  pokeSR(98,  100, 'SR', 'Special Illustration Rare', 'takuyoa',       'ns-22'),  // Mega Greninja ex
  pokeSR(99,  101, 'SR', 'Special Illustration Rare', 'aky CG Works',  'ns-35'),  // Mega Floette ex
  pokeSR(100, 102, 'SR', 'Special Illustration Rare', '5ban Graphics', 'ns-41'),  // Gourgeist ex
  pokeSR(101, 103, 'SR', 'Special Illustration Rare', '5ban Graphics', 'ns-62'),  // Cobalion ex
  pokeSR(102, 104, 'SR', 'Special Illustration Rare', '5ban Graphics', 'ns-63'),  // Mega Dragalge ex
  pokeSR(103, 105, 'SR', 'Special Illustration Rare', '5ban Graphics', 'ns-71'),  // Cinccino ex

  // ── SR Trainers & Stadiums (104–113) ────────────────────────────────────
  newTrainer(104, 108, 'SR', 'Special Illustration Rare', 'Studio Bora Inc.',
    'エネルギー回収', 'Energy Retrieval', 'Trainer', ['Item'],
    '自分のトラッシュから基本エネルギーを2枚まで選び、相手に見せて、手札に加える。',
    'Put up to 2 Basic Energy cards from your discard pile into your hand.'),
  newTrainer(105, 109, 'SR', 'Special Illustration Rare', 'AYUMI ODASHIMA',
    'ジャンボアイス', 'Jumbo Ice Cream', 'Trainer', ['Item'],
    'エネルギーが3個以上ついている自分のバトルポケモンのHPを「80」回復する。',
    'Heal 80 damage from your Active Pokémon that has 3 or more Energy attached.'),
  trainerSR(106, 113, 'SR', 'Special Illustration Rare', 'Studio Bora Inc.',  'ns-72'),  // Special Red Card
  newTrainer(107, 115, 'SR', 'Special Illustration Rare', 'Studio Bora Inc.',
    'ツールスクラッパー', 'Tool Scrapper', 'Trainer', ['Item'],
    'おたがいの場のポケモンについている「ポケモンのどうぐ」を2枚まで選び、トラッシュする。',
    "Choose up to 2 Pokémon Tools attached to Pokémon (yours or your opponent's) and discard them."),
  trainerSR(108, 106, 'SR', 'Special Illustration Rare', 'GIDORA',             'ns-75'),  // AZ's Tranquility
  trainerSR(109, 110, 'SR', 'Special Illustration Rare', 'Souichirou Gunjima', 'ns-76'),  // Philippe
  trainerSR(110, 112, 'SR', 'Special Illustration Rare', 'Nobusawa/Mochipuyo', 'ns-77'),  // Roxie's Performance
  trainerSR(111, 107, 'SR', 'Special Illustration Rare', 'Akira Komayama',     'ns-78'),  // Emma
  newTrainer(112, 114, 'SR', 'Special Illustration Rare', 'AYUMI ODASHIMA',
    'なみのりビーチ', 'Surfing Beach', 'Trainer', ['Stadium'],
    'おたがいのプレイヤーは、自分の番ごとに1回、自分のバトル場の水ポケモンを、ベンチの水ポケモンと入れ替えてよい。',
    "Once during each player's turn, that player may switch their Active Water Pokémon with 1 of their Benched Water Pokémon."),
  trainerSR(113, 111, 'SR', 'Special Illustration Rare', 'MARINA Chikazawa',   'ns-80'),  // Prism Tower

  // ── SAR Pokémon (114–117) ────────────────────────────────────────────────
  pokeSR(114, 116, 'SAR', 'Special Art Rare', 'Susumu Maeya',      'ns-22'),  // Mega Greninja ex
  pokeSR(115, 117, 'SAR', 'Special Art Rare', 'Teeziro',           'ns-35'),  // Mega Floette ex
  pokeSR(116, 118, 'SAR', 'Special Art Rare', 'Kazumasa Yasukuni', 'ns-63'),  // Mega Dragalge ex
  pokeSR(117, 119, 'SAR', 'Special Art Rare', 'Keisin',            'ns-71'),  // Cinccino ex

  // ── SAR Trainers (118–119) ───────────────────────────────────────────────
  trainerSAR(118, 120, 'SAR', 'Special Art Rare', 'OKACHEKE',          'ns-75'),  // AZ's Tranquility
  trainerSAR(119, 121, 'SAR', 'Special Art Rare', 'Tomowaka',          'ns-77'),  // Roxie's Performance

  // ── MUR (120) ───────────────────────────────────────────────────────────
  pokeSR(120, 122, 'MUR', 'Hyper Rare', 'takuyoa', 'ns-22'),  // Mega Greninja ex
];

const updated = [...ns, ...secrets];
fs.writeFileSync(nsPath, JSON.stringify(updated, null, 2), 'utf8');
console.log(`ns.json updated: ${ns.length} → ${updated.length} cards`);
console.log(`Added ${secrets.length} secret rare entries (ns-84 through ns-120)`);
