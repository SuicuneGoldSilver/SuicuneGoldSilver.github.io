// Append sd100 cards 571-590 to data/cards/sd100.json
// Run: node scripts/append_sd100_571_590.js

const fs = require('fs');

function readJson(p) {
  let s = fs.readFileSync(p, 'utf8');
  if (s.charCodeAt(0) === 0xFEFF) s = s.slice(1);
  return JSON.parse(s);
}

const newCards = [
  {
    id: "sd100-571",
    setIdJa: "sd100",
    numberJa: "571/742",
    nameJa: "オオタチ",
    supertype: "Pokémon",
    subtypes: ["Stage 1"],
    evolvesFrom: "オタチ",
    types: ["Colorless"],
    hp: "120",
    abilities: [],
    attacks: [
      { nameJa: "ひっかく", cost: ["Colorless"], convertedEnergyCost: 1, damage: "40", textJa: "" },
      { nameJa: "ジェットヘッド", cost: ["Colorless","Colorless"], convertedEnergyCost: 2, damage: "70", textJa: "" }
    ],
    weaknesses: [{ type: "Fighting", value: "×2" }],
    resistances: [],
    retreatCost: ["Colorless"],
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Tomomi Ozaki",
    nationalPokedexNumber: 162,
    imageJa: "images/sets/sd100/jp/571.jpg"
  },
  {
    id: "sd100-572",
    setIdJa: "sd100",
    numberJa: "572/742",
    nameJa: "ホーホー",
    supertype: "Pokémon",
    subtypes: ["Basic"],
    types: ["Colorless"],
    hp: "70",
    abilities: [],
    attacks: [
      { nameJa: "さんどづき", cost: ["Colorless"], convertedEnergyCost: 1, damage: "10×", textJa: "コインを3回投げ、オモテの数×10ダメージ。" }
    ],
    weaknesses: [{ type: "Lightning", value: "×2" }],
    resistances: [{ type: "Fighting", value: "-30" }],
    retreatCost: ["Colorless"],
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Yukihiro Tada",
    nationalPokedexNumber: 163,
    imageJa: "images/sets/sd100/jp/572.jpg"
  },
  {
    id: "sd100-573",
    setIdJa: "sd100",
    numberJa: "573/742",
    nameJa: "ヨルノズク",
    supertype: "Pokémon",
    subtypes: ["Stage 1"],
    evolvesFrom: "ホーホー",
    types: ["Colorless"],
    hp: "100",
    abilities: [
      { nameJa: "ほうせきさがし", type: "Ability", textJa: "自分の番に、このカードを手札から出して進化させたとき、自分の場に「テラスタル」のポケモンがいるなら、1回使える。自分の山札からトレーナーズを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。" }
    ],
    attacks: [
      { nameJa: "スピードウィング", cost: ["Colorless","Colorless"], convertedEnergyCost: 2, damage: "60", textJa: "" }
    ],
    weaknesses: [{ type: "Lightning", value: "×2" }],
    resistances: [{ type: "Fighting", value: "-30" }],
    retreatCost: ["Colorless"],
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "matazo",
    nationalPokedexNumber: 164,
    imageJa: "images/sets/sd100/jp/573.jpg"
  },
  {
    id: "sd100-574",
    setIdJa: "sd100",
    numberJa: "574/742",
    nameJa: "ノコッチ",
    supertype: "Pokémon",
    subtypes: ["Basic"],
    types: ["Colorless"],
    hp: "70",
    abilities: [
      { nameJa: "いれかわる", type: "Ability", textJa: "このポケモンをベンチポケモンと入れ替える。" }
    ],
    attacks: [
      { nameJa: "ぶつかる", cost: ["Colorless","Colorless"], convertedEnergyCost: 2, damage: "20", textJa: "" }
    ],
    weaknesses: [{ type: "Fighting", value: "×2" }],
    resistances: [],
    retreatCost: ["Colorless"],
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Asako Ito",
    nationalPokedexNumber: 206,
    imageJa: "images/sets/sd100/jp/574.jpg"
  },
  {
    id: "sd100-575",
    setIdJa: "sd100",
    numberJa: "575/742",
    nameJa: "ノココッチex",
    supertype: "Pokémon",
    subtypes: ["Stage 1","ex"],
    evolvesFrom: "ノコッチ",
    types: ["Colorless"],
    hp: "270",
    abilities: [],
    attacks: [
      { nameJa: "ぎゃっきょうテール", cost: ["Colorless"], convertedEnergyCost: 1, damage: "60×", textJa: "相手の場の「ポケモンex」の数×60ダメージ。" },
      { nameJa: "ドリルブレイク", cost: ["Colorless","Colorless","Colorless"], convertedEnergyCost: 3, damage: "150", textJa: "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。" }
    ],
    weaknesses: [{ type: "Fighting", value: "×2" }],
    resistances: [],
    retreatCost: ["Colorless","Colorless","Colorless"],
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "5ban Graphics",
    nationalPokedexNumber: 206,
    imageJa: "images/sets/sd100/jp/575.jpg",
    textJa: "ポケモンexがきぜつしたとき、相手はサイドを2枚とる。"
  },
  {
    id: "sd100-576",
    setIdJa: "sd100",
    numberJa: "576/742",
    nameJa: "アオキのノコッチ",
    supertype: "Pokémon",
    subtypes: ["Basic"],
    types: ["Colorless"],
    hp: "70",
    abilities: [],
    attacks: [
      { nameJa: "つきあげる", cost: ["Colorless"], convertedEnergyCost: 1, damage: "10+", textJa: "コインを1回投げオモテなら、20ダメージ追加。" }
    ],
    weaknesses: [{ type: "Fighting", value: "×2" }],
    resistances: [],
    retreatCost: [],
    regulationMark: "J",
    rarity: "MC",
    rarityJa: "MC",
    artist: "0313",
    nationalPokedexNumber: 206,
    imageJa: "images/sets/sd100/jp/576.jpg"
  },
  {
    id: "sd100-577",
    setIdJa: "sd100",
    numberJa: "577/742",
    nameJa: "アオキのノココッチex",
    supertype: "Pokémon",
    subtypes: ["Stage 1","ex"],
    evolvesFrom: "アオキのノコッチ",
    types: ["Colorless"],
    hp: "270",
    abilities: [],
    attacks: [
      { nameJa: "おしごとラッシュ", cost: ["Colorless","Colorless","Colorless"], convertedEnergyCost: 3, damage: "80×", textJa: "このポケモンについているエネルギーの数ぶんコインを投げ、オモテの数×80ダメージ。" }
    ],
    weaknesses: [{ type: "Fighting", value: "×2" }],
    resistances: [],
    retreatCost: ["Colorless","Colorless","Colorless"],
    regulationMark: "J",
    rarity: "MC",
    rarityJa: "MC",
    artist: "5ban Graphics",
    nationalPokedexNumber: 206,
    imageJa: "images/sets/sd100/jp/577.jpg",
    textJa: "ポケモンexがきぜつしたとき、相手はサイドを2枚とる。"
  },
  {
    id: "sd100-578",
    setIdJa: "sd100",
    numberJa: "578/742",
    nameJa: "ミルタンク",
    supertype: "Pokémon",
    subtypes: ["Basic"],
    types: ["Colorless"],
    hp: "120",
    abilities: [
      { nameJa: "まんぷくミルク", type: "Ability", textJa: "コインを2回投げ、すべてオモテなら、自分のポケモン1匹のHPを、すべて回復する。" }
    ],
    attacks: [
      { nameJa: "たいあたり", cost: ["Colorless","Colorless","Colorless"], convertedEnergyCost: 3, damage: "60", textJa: "" }
    ],
    weaknesses: [{ type: "Fighting", value: "×2" }],
    resistances: [],
    retreatCost: ["Colorless","Colorless"],
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Kouki Saitou",
    nationalPokedexNumber: 241,
    imageJa: "images/sets/sd100/jp/578.jpg"
  },
  {
    id: "sd100-579",
    setIdJa: "sd100",
    numberJa: "579/742",
    nameJa: "スバメ",
    supertype: "Pokémon",
    subtypes: ["Basic"],
    types: ["Colorless"],
    hp: "60",
    abilities: [],
    attacks: [
      { nameJa: "つばさでうつ", cost: ["Colorless"], convertedEnergyCost: 1, damage: "20", textJa: "" }
    ],
    weaknesses: [{ type: "Lightning", value: "×2" }],
    resistances: [{ type: "Fighting", value: "-30" }],
    retreatCost: ["Colorless"],
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Ayako Ozaki",
    nationalPokedexNumber: 276,
    imageJa: "images/sets/sd100/jp/579.jpg"
  },
  {
    id: "sd100-580",
    setIdJa: "sd100",
    numberJa: "580/742",
    nameJa: "オオスバメ",
    supertype: "Pokémon",
    subtypes: ["Stage 1"],
    evolvesFrom: "スバメ",
    types: ["Colorless"],
    hp: "100",
    abilities: [
      { nameJa: "くわえる", type: "Ability", textJa: "自分の山札を3枚引く。" }
    ],
    attacks: [
      { nameJa: "スピードウィング", cost: ["Colorless","Colorless"], convertedEnergyCost: 2, damage: "70", textJa: "" }
    ],
    weaknesses: [{ type: "Lightning", value: "×2" }],
    resistances: [{ type: "Fighting", value: "-30" }],
    retreatCost: ["Colorless"],
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Souichirou Gunjima",
    nationalPokedexNumber: 277,
    imageJa: "images/sets/sd100/jp/580.jpg"
  },
  {
    id: "sd100-581",
    setIdJa: "sd100",
    numberJa: "581/742",
    nameJa: "ナマケロ",
    supertype: "Pokémon",
    subtypes: ["Basic"],
    types: ["Colorless"],
    hp: "60",
    abilities: [
      { nameJa: "のんびりする", type: "Ability", textJa: "このポケモンのHPを「60」回復する。次の自分の番、このポケモンはにげられない。" }
    ],
    attacks: [],
    weaknesses: [{ type: "Fighting", value: "×2" }],
    resistances: [],
    retreatCost: ["Colorless","Colorless"],
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Aya Kusube",
    nationalPokedexNumber: 287,
    imageJa: "images/sets/sd100/jp/581.jpg"
  },
  {
    id: "sd100-582",
    setIdJa: "sd100",
    numberJa: "582/742",
    nameJa: "ヤルキモノ",
    supertype: "Pokémon",
    subtypes: ["Stage 1"],
    evolvesFrom: "ナマケロ",
    types: ["Colorless"],
    hp: "90",
    abilities: [],
    attacks: [
      { nameJa: "スラッシュクロー", cost: ["Colorless","Colorless"], convertedEnergyCost: 2, damage: "50", textJa: "" }
    ],
    weaknesses: [{ type: "Fighting", value: "×2" }],
    resistances: [],
    retreatCost: ["Colorless","Colorless"],
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Kurata So",
    nationalPokedexNumber: 288,
    imageJa: "images/sets/sd100/jp/582.jpg"
  },
  {
    id: "sd100-583",
    setIdJa: "sd100",
    numberJa: "583/742",
    nameJa: "ケッキングex",
    supertype: "Pokémon",
    subtypes: ["Stage 2","ex"],
    evolvesFrom: "ヤルキモノ",
    types: ["Colorless"],
    hp: "340",
    abilities: [
      { nameJa: "さぼりたいしつ", type: "Ability", textJa: "相手の場に「ポケモンex・V」がいないなら、このポケモンはワザが使えない。" }
    ],
    attacks: [
      { nameJa: "グレートスウィング", cost: ["Colorless","Colorless"], convertedEnergyCost: 2, damage: "280", textJa: "このポケモンについているエネルギーを1個選び、トラッシュする。" }
    ],
    weaknesses: [{ type: "Fighting", value: "×2" }],
    resistances: [],
    retreatCost: ["Colorless","Colorless","Colorless","Colorless"],
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "PLANETA Igarashi",
    nationalPokedexNumber: 289,
    imageJa: "images/sets/sd100/jp/583.jpg",
    textJa: "ポケモンexがきぜつしたとき、相手はサイドを2枚とる。"
  },
  {
    id: "sd100-584",
    setIdJa: "sd100",
    numberJa: "584/742",
    nameJa: "エネコ",
    supertype: "Pokémon",
    subtypes: ["Basic"],
    types: ["Colorless"],
    hp: "60",
    abilities: [
      { nameJa: "なかまをよぶ", type: "Ability", textJa: "自分の山札からたねポケモンを1枚選び、ベンチに出す。そして山札を切る。" }
    ],
    attacks: [
      { nameJa: "たいあたり", cost: ["Colorless","Colorless"], convertedEnergyCost: 2, damage: "20", textJa: "" }
    ],
    weaknesses: [{ type: "Fighting", value: "×2" }],
    resistances: [],
    retreatCost: ["Colorless"],
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Atsuko Nishida",
    nationalPokedexNumber: 300,
    imageJa: "images/sets/sd100/jp/584.jpg"
  },
  {
    id: "sd100-585",
    setIdJa: "sd100",
    numberJa: "585/742",
    nameJa: "エネコ",
    supertype: "Pokémon",
    subtypes: ["Basic"],
    types: ["Colorless"],
    hp: "60",
    abilities: [],
    attacks: [
      { nameJa: "ねこキック", cost: ["Colorless","Colorless"], convertedEnergyCost: 2, damage: "20", textJa: "" }
    ],
    weaknesses: [{ type: "Fighting", value: "×2" }],
    resistances: [],
    retreatCost: ["Colorless"],
    regulationMark: "J",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Yoko Hishida",
    nationalPokedexNumber: 300,
    imageJa: "images/sets/sd100/jp/585.jpg"
  },
  {
    id: "sd100-586",
    setIdJa: "sd100",
    numberJa: "586/742",
    nameJa: "エネコロロ",
    supertype: "Pokémon",
    subtypes: ["Stage 1"],
    evolvesFrom: "エネコ",
    types: ["Colorless"],
    hp: "100",
    abilities: [],
    attacks: [
      { nameJa: "ねこキック", cost: ["Colorless"], convertedEnergyCost: 1, damage: "40", textJa: "" },
      { nameJa: "エナジークラッシュ", cost: ["Colorless","Colorless"], convertedEnergyCost: 2, damage: "40×", textJa: "相手のポケモン全員についているエネルギーの数×40ダメージ。" }
    ],
    weaknesses: [{ type: "Fighting", value: "×2" }],
    resistances: [],
    retreatCost: ["Colorless"],
    regulationMark: "J",
    rarity: "MC",
    rarityJa: "MC",
    artist: "buchi",
    nationalPokedexNumber: 301,
    imageJa: "images/sets/sd100/jp/586.jpg"
  },
  {
    id: "sd100-587",
    setIdJa: "sd100",
    numberJa: "587/742",
    nameJa: "ザングース",
    supertype: "Pokémon",
    subtypes: ["Basic"],
    types: ["Colorless"],
    hp: "90",
    abilities: [],
    attacks: [
      { nameJa: "れんぞくぎり", cost: ["Colorless"], convertedEnergyCost: 1, damage: "10+", textJa: "コインを3回投げる。オモテが1回なら、20ダメージ追加。オモテが2回なら、50ダメージ追加。すべてオモテなら、80ダメージ追加。" }
    ],
    weaknesses: [{ type: "Fighting", value: "×2" }],
    resistances: [],
    retreatCost: ["Colorless"],
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Ligton",
    nationalPokedexNumber: 335,
    imageJa: "images/sets/sd100/jp/587.jpg"
  },
  {
    id: "sd100-588",
    setIdJa: "sd100",
    numberJa: "588/742",
    nameJa: "ザングースex",
    supertype: "Pokémon",
    subtypes: ["Basic","ex"],
    types: ["Colorless"],
    hp: "200",
    abilities: [],
    attacks: [
      { nameJa: "スパイクドロー", cost: ["Colorless"], convertedEnergyCost: 1, damage: "20", textJa: "自分の山札を2枚引く。" },
      { nameJa: "ワイルドシザー", cost: ["Colorless","Colorless","Colorless"], convertedEnergyCost: 3, damage: "180", textJa: "このポケモンにも30ダメージ。" }
    ],
    weaknesses: [{ type: "Fighting", value: "×2" }],
    resistances: [],
    retreatCost: ["Colorless"],
    regulationMark: "J",
    rarity: "MC",
    rarityJa: "MC",
    artist: "5ban Graphics",
    nationalPokedexNumber: 335,
    imageJa: "images/sets/sd100/jp/588.jpg",
    textJa: "ポケモンexがきぜつしたとき、相手はサイドを2枚とる。"
  },
  {
    id: "sd100-589",
    setIdJa: "sd100",
    numberJa: "589/742",
    nameJa: "トロピウス",
    supertype: "Pokémon",
    subtypes: ["Basic"],
    types: ["Colorless"],
    hp: "110",
    abilities: [
      { nameJa: "かじつのみのり", type: "Ability", textJa: "自分の手札を1枚トラッシュする。その後、自分の山札を3枚引く。" }
    ],
    attacks: [
      { nameJa: "かせおこし", cost: ["Colorless","Colorless"], convertedEnergyCost: 2, damage: "50", textJa: "" }
    ],
    weaknesses: [{ type: "Lightning", value: "×2" }],
    resistances: [{ type: "Fighting", value: "-30" }],
    retreatCost: ["Colorless"],
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Atsunya Uki",
    nationalPokedexNumber: 357,
    imageJa: "images/sets/sd100/jp/589.jpg"
  },
  {
    id: "sd100-590",
    setIdJa: "sd100",
    numberJa: "590/742",
    nameJa: "アオキのムックル",
    supertype: "Pokémon",
    subtypes: ["Basic"],
    types: ["Colorless"],
    hp: "60",
    abilities: [
      { nameJa: "ちいさなおつかい", type: "Ability", textJa: "自分の山札から基本エネルギーを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。" }
    ],
    attacks: [
      { nameJa: "かっくう", cost: ["Colorless"], convertedEnergyCost: 1, damage: "10", textJa: "" }
    ],
    weaknesses: [{ type: "Lightning", value: "×2" }],
    resistances: [{ type: "Fighting", value: "-30" }],
    retreatCost: ["Colorless"],
    regulationMark: "J",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Natsumi Miyanose",
    nationalPokedexNumber: 396,
    imageJa: "images/sets/sd100/jp/590.jpg"
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
