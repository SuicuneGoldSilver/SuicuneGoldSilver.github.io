// Append sd100 cards 591-610 to data/cards/sd100.json
// Run: node scripts/append_sd100_591_610.js

const fs = require('fs');

function readJson(p) {
  let s = fs.readFileSync(p, 'utf8');
  if (s.charCodeAt(0) === 0xFEFF) s = s.slice(1);
  return JSON.parse(s);
}

const newCards = [
  {
    id: "sd100-591",
    setIdJa: "sd100",
    numberJa: "591/742",
    nameJa: "アオキのムクバード",
    supertype: "Pokémon",
    subtypes: ["Stage 1"],
    evolvesFrom: "アオキのムックル",
    types: ["Colorless"],
    hp: "90",
    abilities: [],
    attacks: [
      { nameJa: "はばたく", cost: ["Colorless"], convertedEnergyCost: 1, damage: "20", textJa: "" },
      { nameJa: "するどいはね", cost: ["Colorless","Colorless"], convertedEnergyCost: 2, damage: "50", textJa: "" }
    ],
    weaknesses: [{ type: "Lightning", value: "×2" }],
    resistances: [{ type: "Fighting", value: "-30" }],
    retreatCost: ["Colorless"],
    regulationMark: "J",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Fujimoto Gold",
    nationalPokedexNumber: 397,
    imageJa: "images/sets/sd100/jp/591.jpg"
  },
  {
    id: "sd100-592",
    setIdJa: "sd100",
    numberJa: "592/742",
    nameJa: "アオキのムクホーク",
    supertype: "Pokémon",
    subtypes: ["Stage 2"],
    evolvesFrom: "アオキのムクバード",
    types: ["Colorless"],
    hp: "150",
    abilities: [],
    attacks: [
      { nameJa: "からげんき", cost: ["Colorless"], convertedEnergyCost: 1, damage: "60+", textJa: "このポケモンがどくまたはやけどなら、100ダメージ追加。" },
      { nameJa: "フェザーストライク", cost: ["Colorless","Colorless","Colorless"], convertedEnergyCost: 3, damage: "150", textJa: "このポケモンについているエネルギーを2個トラッシュし、相手のベンチポケモン1匹にも、50ダメージ。[ベンチは弱点・抵抗力を計算しない。]" }
    ],
    weaknesses: [{ type: "Lightning", value: "×2" }],
    resistances: [{ type: "Fighting", value: "-30" }],
    retreatCost: ["Colorless"],
    regulationMark: "J",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Po-Suzuki",
    nationalPokedexNumber: 398,
    imageJa: "images/sets/sd100/jp/592.jpg"
  },
  {
    id: "sd100-593",
    setIdJa: "sd100",
    numberJa: "593/742",
    nameJa: "ミミロル",
    supertype: "Pokémon",
    subtypes: ["Basic"],
    types: ["Colorless"],
    hp: "70",
    abilities: [
      { nameJa: "あまえる", type: "Ability", textJa: "次の相手の番、このポケモンが受けるワザのダメージは「-20」される。" }
    ],
    attacks: [
      { nameJa: "スキップ", cost: ["Colorless"], convertedEnergyCost: 1, damage: "10", textJa: "" }
    ],
    weaknesses: [{ type: "Fighting", value: "×2" }],
    resistances: [],
    retreatCost: ["Colorless"],
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "ryoma uratsuka",
    nationalPokedexNumber: 427,
    imageJa: "images/sets/sd100/jp/593.jpg"
  },
  {
    id: "sd100-594",
    setIdJa: "sd100",
    numberJa: "594/742",
    nameJa: "ミミロップ",
    supertype: "Pokémon",
    subtypes: ["Stage 1"],
    evolvesFrom: "ミミロル",
    types: ["Colorless"],
    hp: "110",
    abilities: [],
    attacks: [
      { nameJa: "とびだしキック", cost: ["Colorless"], convertedEnergyCost: 1, damage: "50", textJa: "相手のベンチポケモン1匹に、50ダメージ。[ベンチは弱点・抵抗力を計算しない。]" },
      { nameJa: "かいてんげり", cost: ["Colorless","Colorless"], convertedEnergyCost: 2, damage: "60", textJa: "" }
    ],
    weaknesses: [{ type: "Fighting", value: "×2" }],
    resistances: [],
    retreatCost: ["Colorless"],
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Oswaldo KATO",
    nationalPokedexNumber: 428,
    imageJa: "images/sets/sd100/jp/594.jpg"
  },
  {
    id: "sd100-595",
    setIdJa: "sd100",
    numberJa: "595/742",
    nameJa: "ニャルマー",
    supertype: "Pokémon",
    subtypes: ["Basic"],
    types: ["Colorless"],
    hp: "60",
    abilities: [],
    attacks: [
      { nameJa: "ひっかける", cost: ["Colorless"], convertedEnergyCost: 1, damage: "20", textJa: "" }
    ],
    weaknesses: [{ type: "Fighting", value: "×2" }],
    resistances: [],
    retreatCost: ["Colorless"],
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Yuriko Akase",
    nationalPokedexNumber: 431,
    imageJa: "images/sets/sd100/jp/595.jpg"
  },
  {
    id: "sd100-596",
    setIdJa: "sd100",
    numberJa: "596/742",
    nameJa: "ブニャット",
    supertype: "Pokémon",
    subtypes: ["Stage 1"],
    evolvesFrom: "ニャルマー",
    types: ["Colorless"],
    hp: "120",
    abilities: [],
    attacks: [
      { nameJa: "ごろにゃん", cost: ["Colorless","Colorless"], convertedEnergyCost: 2, damage: "80", textJa: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。" }
    ],
    weaknesses: [{ type: "Fighting", value: "×2" }],
    resistances: [],
    retreatCost: ["Colorless"],
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Saboteri",
    nationalPokedexNumber: 432,
    imageJa: "images/sets/sd100/jp/596.jpg"
  },
  {
    id: "sd100-597",
    setIdJa: "sd100",
    numberJa: "597/742",
    nameJa: "ペラップ",
    supertype: "Pokémon",
    subtypes: ["Basic"],
    types: ["Colorless"],
    hp: "70",
    abilities: [
      { nameJa: "アカペラ", type: "Ability", textJa: "自分の山札から、たねポケモンを3枚まで選び、ベンチに出す。そして山札を切る。" }
    ],
    attacks: [
      { nameJa: "かぜおこし", cost: ["Colorless"], convertedEnergyCost: 1, damage: "20", textJa: "" }
    ],
    weaknesses: [{ type: "Lightning", value: "×2" }],
    resistances: [{ type: "Fighting", value: "-30" }],
    retreatCost: ["Colorless"],
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "GOTO minori",
    nationalPokedexNumber: 441,
    imageJa: "images/sets/sd100/jp/597.jpg"
  },
  {
    id: "sd100-598",
    setIdJa: "sd100",
    numberJa: "598/742",
    nameJa: "マメパト",
    supertype: "Pokémon",
    subtypes: ["Basic"],
    types: ["Colorless"],
    hp: "60",
    abilities: [],
    attacks: [
      { nameJa: "さぐる", cost: ["Colorless"], convertedEnergyCost: 1, damage: "", textJa: "相手の手札を見る。" },
      { nameJa: "ふむ", cost: ["Colorless"], convertedEnergyCost: 1, damage: "10", textJa: "" }
    ],
    weaknesses: [{ type: "Lightning", value: "×2" }],
    resistances: [{ type: "Fighting", value: "-30" }],
    retreatCost: ["Colorless"],
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Tomomi Ozaki",
    nationalPokedexNumber: 519,
    imageJa: "images/sets/sd100/jp/598.jpg"
  },
  {
    id: "sd100-599",
    setIdJa: "sd100",
    numberJa: "599/742",
    nameJa: "ハトーボー",
    supertype: "Pokémon",
    subtypes: ["Stage 1"],
    evolvesFrom: "マメパト",
    types: ["Colorless"],
    hp: "80",
    abilities: [],
    attacks: [
      { nameJa: "そらをとぶ", cost: ["Colorless"], convertedEnergyCost: 1, damage: "40", textJa: "コインを1回投げる。ウラなら、このワザは失敗。オモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。" }
    ],
    weaknesses: [{ type: "Lightning", value: "×2" }],
    resistances: [{ type: "Fighting", value: "-30" }],
    retreatCost: ["Colorless"],
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Tomomi Ozaki",
    nationalPokedexNumber: 520,
    imageJa: "images/sets/sd100/jp/599.jpg"
  },
  {
    id: "sd100-600",
    setIdJa: "sd100",
    numberJa: "600/742",
    nameJa: "ケンホロウ",
    supertype: "Pokémon",
    subtypes: ["Stage 2"],
    evolvesFrom: "ハトーボー",
    types: ["Colorless"],
    hp: "150",
    abilities: [],
    attacks: [
      { nameJa: "くわえる", cost: ["Colorless"], convertedEnergyCost: 1, damage: "", textJa: "自分の山札を4枚引く。" },
      { nameJa: "こうそくフライト", cost: ["Colorless","Colorless"], convertedEnergyCost: 2, damage: "120", textJa: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。" }
    ],
    weaknesses: [{ type: "Lightning", value: "×2" }],
    resistances: [{ type: "Fighting", value: "-30" }],
    retreatCost: ["Colorless"],
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Tomomi Ozaki",
    nationalPokedexNumber: 521,
    imageJa: "images/sets/sd100/jp/600.jpg"
  },
  {
    id: "sd100-601",
    setIdJa: "sd100",
    numberJa: "601/742",
    nameJa: "タブンネ",
    supertype: "Pokémon",
    subtypes: ["Basic"],
    types: ["Colorless"],
    hp: "100",
    abilities: [],
    attacks: [
      { nameJa: "おんがえし", cost: ["Colorless"], convertedEnergyCost: 1, damage: "30", textJa: "のぞむなら、自分の手札が6枚になるように、山札を引く。" }
    ],
    weaknesses: [{ type: "Fighting", value: "×2" }],
    resistances: [],
    retreatCost: ["Colorless"],
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Saya Tsuruta",
    nationalPokedexNumber: 531,
    imageJa: "images/sets/sd100/jp/601.jpg"
  },
  {
    id: "sd100-602",
    setIdJa: "sd100",
    numberJa: "602/742",
    nameJa: "メガタブンネex",
    supertype: "Pokémon",
    subtypes: ["Basic","ex"],
    types: ["Colorless"],
    hp: "270",
    abilities: [
      { nameJa: "カレイドワルツ", type: "Ability", textJa: "コインを3回投げ、オモテの数×2枚ぶんまで、自分の山札から基本エネルギーを選び、自分のポケモンに好きなようにつける。そして山札を切る。" }
    ],
    attacks: [
      { nameJa: "イヤーフォース", cost: ["Colorless","Colorless","Colorless"], convertedEnergyCost: 3, damage: "20+", textJa: "相手のバトルポケモンについているエネルギーの数×80ダメージ追加。" }
    ],
    weaknesses: [{ type: "Fighting", value: "×2" }],
    resistances: [],
    retreatCost: ["Colorless","Colorless"],
    regulationMark: "J",
    rarity: "MC",
    rarityJa: "MC",
    artist: "5ban Graphics",
    nationalPokedexNumber: 531,
    imageJa: "images/sets/sd100/jp/602.jpg",
    textJa: "メガシンカexがきぜつしたとき、相手はサイドを3枚とる。"
  },
  {
    id: "sd100-603",
    setIdJa: "sd100",
    numberJa: "603/742",
    nameJa: "チラーミィ",
    supertype: "Pokémon",
    subtypes: ["Basic"],
    types: ["Colorless"],
    hp: "60",
    abilities: [],
    attacks: [
      { nameJa: "スイープビンタ", cost: ["Colorless","Colorless"], convertedEnergyCost: 2, damage: "20×", textJa: "コインを2回投げ、オモテの数×20ダメージ。" }
    ],
    weaknesses: [{ type: "Fighting", value: "×2" }],
    resistances: [],
    retreatCost: ["Colorless"],
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Ayako Ozaki",
    nationalPokedexNumber: 572,
    imageJa: "images/sets/sd100/jp/603.jpg"
  },
  {
    id: "sd100-604",
    setIdJa: "sd100",
    numberJa: "604/742",
    nameJa: "チラチーノ",
    supertype: "Pokémon",
    subtypes: ["Stage 1"],
    evolvesFrom: "チラーミィ",
    types: ["Colorless"],
    hp: "100",
    abilities: [],
    attacks: [
      { nameJa: "ともだちのわ", cost: ["Colorless"], convertedEnergyCost: 1, damage: "20+", textJa: "自分のベンチポケモンの数×20ダメージ追加。" }
    ],
    weaknesses: [{ type: "Fighting", value: "×2" }],
    resistances: [],
    retreatCost: ["Colorless"],
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Ayako Ozaki",
    nationalPokedexNumber: 573,
    imageJa: "images/sets/sd100/jp/604.jpg"
  },
  {
    id: "sd100-605",
    setIdJa: "sd100",
    numberJa: "605/742",
    nameJa: "バッフロンex",
    supertype: "Pokémon",
    subtypes: ["Basic","ex"],
    types: ["Colorless"],
    hp: "220",
    abilities: [
      { nameJa: "アフロガード", type: "Ability", textJa: "このポケモンが受けるワザのダメージは「-30」される。" }
    ],
    attacks: [
      { nameJa: "ゴールドブレイク", cost: ["Colorless","Colorless","Colorless"], convertedEnergyCost: 3, damage: "100+", textJa: "相手のバトルポケモンが「ポケモンex」なら、100ダメージ追加。" }
    ],
    weaknesses: [{ type: "Fighting", value: "×2" }],
    resistances: [],
    retreatCost: ["Colorless","Colorless"],
    regulationMark: "J",
    rarity: "MC",
    rarityJa: "MC",
    artist: "PLANETA Tsuji",
    nationalPokedexNumber: 626,
    imageJa: "images/sets/sd100/jp/605.jpg",
    textJa: "ポケモンexがきぜつしたとき、相手はサイドを2枚とる。"
  },
  {
    id: "sd100-606",
    setIdJa: "sd100",
    numberJa: "606/742",
    nameJa: "ワシボン",
    supertype: "Pokémon",
    subtypes: ["Basic"],
    types: ["Colorless"],
    hp: "70",
    abilities: [],
    attacks: [
      { nameJa: "つつく", cost: ["Colorless"], convertedEnergyCost: 1, damage: "10", textJa: "" },
      { nameJa: "かっくう", cost: ["Colorless","Colorless"], convertedEnergyCost: 2, damage: "20", textJa: "" }
    ],
    weaknesses: [{ type: "Lightning", value: "×2" }],
    resistances: [{ type: "Fighting", value: "-30" }],
    retreatCost: ["Colorless"],
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Kedamahadaitai Yawarakai",
    nationalPokedexNumber: 627,
    imageJa: "images/sets/sd100/jp/606.jpg"
  },
  {
    id: "sd100-607",
    setIdJa: "sd100",
    numberJa: "607/742",
    nameJa: "ウォーグル",
    supertype: "Pokémon",
    subtypes: ["Stage 1"],
    evolvesFrom: "ワシボン",
    types: ["Colorless"],
    hp: "140",
    abilities: [],
    attacks: [
      { nameJa: "つばめがえし", cost: ["Colorless"], convertedEnergyCost: 1, damage: "40+", textJa: "コインを1回投げオモテなら、40ダメージ追加。" },
      { nameJa: "スピードウィング", cost: ["Colorless","Colorless","Colorless","Colorless"], convertedEnergyCost: 4, damage: "130", textJa: "" }
    ],
    weaknesses: [{ type: "Lightning", value: "×2" }],
    resistances: [{ type: "Fighting", value: "-30" }],
    retreatCost: ["Colorless"],
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Kedamahadaitai Yawarakai",
    nationalPokedexNumber: 628,
    imageJa: "images/sets/sd100/jp/607.jpg"
  },
  {
    id: "sd100-608",
    setIdJa: "sd100",
    numberJa: "608/742",
    nameJa: "アオキのワシボン",
    supertype: "Pokémon",
    subtypes: ["Basic"],
    types: ["Colorless"],
    hp: "70",
    abilities: [],
    attacks: [
      { nameJa: "きずをつつく", cost: ["Colorless","Colorless"], convertedEnergyCost: 2, damage: "20+", textJa: "相手のバトルポケモンにダメージが乗っているなら、80ダメージ追加。" }
    ],
    weaknesses: [{ type: "Lightning", value: "×2" }],
    resistances: [{ type: "Fighting", value: "-30" }],
    retreatCost: ["Colorless"],
    regulationMark: "J",
    rarity: "MC",
    rarityJa: "MC",
    artist: "cochi8i",
    nationalPokedexNumber: 627,
    imageJa: "images/sets/sd100/jp/608.jpg"
  },
  {
    id: "sd100-609",
    setIdJa: "sd100",
    numberJa: "609/742",
    nameJa: "アオキのウォーグル",
    supertype: "Pokémon",
    subtypes: ["Stage 1"],
    evolvesFrom: "アオキのワシボン",
    types: ["Colorless"],
    hp: "130",
    abilities: [],
    attacks: [
      { nameJa: "わしづかみ", cost: ["Colorless","Colorless"], convertedEnergyCost: 2, damage: "50", textJa: "次の相手の番、このワザを受けたポケモンは、にげられない。" },
      { nameJa: "ブレイバード", cost: ["Colorless","Colorless","Colorless"], convertedEnergyCost: 3, damage: "120", textJa: "このポケモンにも30ダメージ。" }
    ],
    weaknesses: [{ type: "Lightning", value: "×2" }],
    resistances: [{ type: "Fighting", value: "-30" }],
    retreatCost: ["Colorless"],
    regulationMark: "J",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Ryuta Fuse",
    nationalPokedexNumber: 628,
    imageJa: "images/sets/sd100/jp/609.jpg"
  },
  {
    id: "sd100-610",
    setIdJa: "sd100",
    numberJa: "610/742",
    nameJa: "トルネロス",
    supertype: "Pokémon",
    subtypes: ["Basic"],
    types: ["Colorless"],
    hp: "120",
    abilities: [],
    attacks: [
      { nameJa: "かぜをまとう", cost: ["Colorless"], convertedEnergyCost: 1, damage: "", textJa: "自分の手札から基本エネルギーを1枚選び、このポケモンにつける。" },
      { nameJa: "ぼうふう", cost: ["Colorless","Colorless","Colorless"], convertedEnergyCost: 3, damage: "100", textJa: "このポケモンについている基本エネルギーを1個選び、ベンチポケモンにつけ替える。" }
    ],
    weaknesses: [{ type: "Lightning", value: "×2" }],
    resistances: [{ type: "Fighting", value: "-30" }],
    retreatCost: ["Colorless"],
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Nisota Niso",
    nationalPokedexNumber: 641,
    imageJa: "images/sets/sd100/jp/610.jpg"
  }
];

const existing = readJson('data/cards/sd100.json');
const byId = {};
for (const c of existing) byId[c.id] = c;
for (const c of newCards) byId[c.id] = c;

const merged = Object.values(byId);
merged.sort((a, b) => {
  const na = parseInt(a.id.split('-')[1]);
  const nb = parseInt(b.id.split('-')[1]);
  return na - nb;
});

fs.writeFileSync('data/cards/sd100.json', JSON.stringify(merged, null, 2), 'utf8');
console.log(`Done. Total cards: ${merged.length}`);
