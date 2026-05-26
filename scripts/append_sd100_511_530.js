// Append sd100 cards 511-530 to data/cards/sd100.json
// Run: node scripts/append_sd100_511_530.js

const fs = require('fs');

function readJson(p) {
  let s = fs.readFileSync(p, 'utf8');
  if (s.charCodeAt(0) === 0xFEFF) s = s.slice(1);
  return JSON.parse(s);
}

const newCards = [
  {
    id: "sd100-511",
    setIdJa: "sd100",
    numberJa: "511/742",
    nameJa: "キリキザン",
    supertype: "Pokémon",
    subtypes: ["Stage 1"],
    evolvesFrom: "コマタナ",
    types: ["Metal"],
    hp: "120",
    abilities: [],
    attacks: [
      { nameJa: "きる", cost: ["Metal"], convertedEnergyCost: 1, damage: "40", textJa: "" },
      { nameJa: "とどめをさす", cost: ["Metal","Colorless"], convertedEnergyCost: 2, damage: "60+", textJa: "相手のバトルポケモンにダメカンがのっているなら、60ダメージ追加。" }
    ],
    weaknesses: [{ type: "Fire", value: "×2" }],
    resistances: [{ type: "Grass", value: "-30" }],
    retreatCost: ["Colorless","Colorless"],
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Oku",
    nationalPokedexNumber: 625,
    imageJa: "images/sets/sd100/jp/511.jpg"
  },
  {
    id: "sd100-512",
    setIdJa: "sd100",
    numberJa: "512/742",
    nameJa: "ゲノセクトex",
    supertype: "Pokémon",
    subtypes: ["Basic","ex"],
    types: ["Metal"],
    hp: "220",
    abilities: [
      { nameJa: "メタルシグナル", type: "Ability", textJa: "自分の番に1回使える。自分の山札から♦タイプの進化ポケモンを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。" }
    ],
    attacks: [
      { nameJa: "プロテクトチャージ", cost: ["Metal","Metal","Colorless"], convertedEnergyCost: 3, damage: "150", textJa: "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。" }
    ],
    weaknesses: [{ type: "Fire", value: "×2" }],
    resistances: [{ type: "Grass", value: "-30" }],
    retreatCost: ["Colorless","Colorless"],
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "5ban Graphics",
    nationalPokedexNumber: 649,
    imageJa: "images/sets/sd100/jp/512.jpg",
    textJa: "ポケモンexがきぜつしたとき、相手はサイドを2枚とる。"
  },
  {
    id: "sd100-513",
    setIdJa: "sd100",
    numberJa: "513/742",
    nameJa: "クレッフィ",
    supertype: "Pokémon",
    subtypes: ["Basic"],
    types: ["Metal"],
    hp: "70",
    abilities: [],
    attacks: [
      { nameJa: "さしこみドロー", cost: ["Colorless"], convertedEnergyCost: 1, damage: "", textJa: "自分の手札を1枚トラッシュする。その後、自分の山札を2枚引く。" },
      { nameJa: "ひっかける", cost: ["Colorless"], convertedEnergyCost: 1, damage: "20", textJa: "" }
    ],
    weaknesses: [{ type: "Fire", value: "×2" }],
    resistances: [{ type: "Grass", value: "-30" }],
    retreatCost: ["Colorless"],
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "mingo",
    nationalPokedexNumber: 707,
    imageJa: "images/sets/sd100/jp/513.jpg"
  },
  {
    id: "sd100-514",
    setIdJa: "sd100",
    numberJa: "514/742",
    nameJa: "トゲデマルex",
    supertype: "Pokémon",
    subtypes: ["Basic","ex"],
    types: ["Metal"],
    hp: "190",
    abilities: [],
    attacks: [
      { nameJa: "しびればり", cost: ["Metal"], convertedEnergyCost: 1, damage: "20", textJa: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。" },
      { nameJa: "トゲトゲローリング", cost: ["Metal","Colorless"], convertedEnergyCost: 2, damage: "80+", textJa: "前の自分の番に、このポケモンが「トゲトゲローリング」を使っていたなら、80ダメージ追加。" }
    ],
    weaknesses: [{ type: "Fire", value: "×2" }],
    resistances: [{ type: "Grass", value: "-30" }],
    retreatCost: ["Colorless"],
    regulationMark: "J",
    rarity: "MC",
    rarityJa: "MC",
    artist: "5ban Graphics",
    nationalPokedexNumber: 777,
    imageJa: "images/sets/sd100/jp/514.jpg",
    textJa: "ポケモンexがきぜつしたとき、相手はサイドを2枚とる。"
  },
  {
    id: "sd100-515",
    setIdJa: "sd100",
    numberJa: "515/742",
    nameJa: "マギアナ",
    supertype: "Pokémon",
    subtypes: ["Basic"],
    types: ["Metal"],
    hp: "90",
    abilities: [
      { nameJa: "オートヒール", type: "Ability", textJa: "このポケモンがバトル場にいるかぎり、自分の手札からエネルギーをポケモンにつけるたび、そのポケモンのHPを「90」回復する。" }
    ],
    attacks: [
      { nameJa: "スパイクドロー", cost: ["Colorless"], convertedEnergyCost: 1, damage: "20", textJa: "自分の山札を2枚引く。" }
    ],
    weaknesses: [{ type: "Fire", value: "×2" }],
    resistances: [{ type: "Grass", value: "-30" }],
    retreatCost: ["Colorless"],
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "rika",
    nationalPokedexNumber: 801,
    imageJa: "images/sets/sd100/jp/515.jpg"
  },
  {
    id: "sd100-516",
    setIdJa: "sd100",
    numberJa: "516/742",
    nameJa: "メルタン",
    supertype: "Pokémon",
    subtypes: ["Basic"],
    types: ["Metal"],
    hp: "80",
    abilities: [],
    attacks: [
      { nameJa: "ずつき", cost: ["Metal","Metal"], convertedEnergyCost: 2, damage: "50", textJa: "" }
    ],
    weaknesses: [{ type: "Fire", value: "×2" }],
    resistances: [{ type: "Grass", value: "-30" }],
    retreatCost: ["Colorless","Colorless","Colorless"],
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Taiga Kayama",
    nationalPokedexNumber: 808,
    imageJa: "images/sets/sd100/jp/516.jpg"
  },
  {
    id: "sd100-517",
    setIdJa: "sd100",
    numberJa: "517/742",
    nameJa: "メルタン",
    supertype: "Pokémon",
    subtypes: ["Basic"],
    types: ["Metal"],
    hp: "60",
    abilities: [],
    attacks: [
      { nameJa: "ふむ", cost: ["Metal"], convertedEnergyCost: 1, damage: "10", textJa: "" },
      { nameJa: "ビーム", cost: ["Metal","Colorless","Colorless"], convertedEnergyCost: 3, damage: "40", textJa: "" }
    ],
    weaknesses: [{ type: "Fire", value: "×2" }],
    resistances: [{ type: "Grass", value: "-30" }],
    retreatCost: ["Colorless"],
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Yuka Morii",
    nationalPokedexNumber: 808,
    imageJa: "images/sets/sd100/jp/517.jpg"
  },
  {
    id: "sd100-518",
    setIdJa: "sd100",
    numberJa: "518/742",
    nameJa: "メルメタル",
    supertype: "Pokémon",
    subtypes: ["Stage 1"],
    evolvesFrom: "メルタン",
    types: ["Metal"],
    hp: "160",
    abilities: [],
    attacks: [
      { nameJa: "ぶちかます", cost: ["Metal","Metal","Colorless"], convertedEnergyCost: 3, damage: "120", textJa: "" },
      { nameJa: "アイアンバッシュ", cost: ["Metal","Metal","Metal","Metal","Colorless"], convertedEnergyCost: 5, damage: "230", textJa: "" }
    ],
    weaknesses: [{ type: "Fire", value: "×2" }],
    resistances: [{ type: "Grass", value: "-30" }],
    retreatCost: ["Colorless","Colorless","Colorless","Colorless"],
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Oswaldo KATO",
    nationalPokedexNumber: 809,
    imageJa: "images/sets/sd100/jp/518.jpg"
  },
  {
    id: "sd100-519",
    setIdJa: "sd100",
    numberJa: "519/742",
    nameJa: "メルメタルex",
    supertype: "Pokémon",
    subtypes: ["Stage 1","ex"],
    evolvesFrom: "メルタン",
    types: ["Metal"],
    hp: "280",
    abilities: [],
    attacks: [
      { nameJa: "アイアンスイング", cost: ["Metal","Metal","Colorless","Colorless"], convertedEnergyCost: 4, damage: "100×", textJa: "コインを2回投げ、オモテの数×100ダメージ。" }
    ],
    weaknesses: [{ type: "Fire", value: "×2" }],
    resistances: [{ type: "Grass", value: "-30" }],
    retreatCost: ["Colorless","Colorless","Colorless"],
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "takuyoa",
    nationalPokedexNumber: 809,
    imageJa: "images/sets/sd100/jp/519.jpg",
    textJa: "ポケモンexがきぜつしたとき、相手はサイドを2枚とる。"
  },
  {
    id: "sd100-520",
    setIdJa: "sd100",
    numberJa: "520/742",
    nameJa: "ホップのアーマーガア",
    supertype: "Pokémon",
    subtypes: ["Stage 2"],
    evolvesFrom: "ホップのアオガラス",
    types: ["Metal"],
    hp: "170",
    abilities: [],
    attacks: [
      { nameJa: "つきぬける", cost: ["Colorless"], convertedEnergyCost: 1, damage: "50", textJa: "相手のベンチポケモン1匹にも、50ダメージ。[ベンチは弱点・抵抗力を計算しない。]" },
      { nameJa: "はがねのつばさ", cost: ["Metal","Metal","Colorless"], convertedEnergyCost: 3, damage: "150", textJa: "次の相手の番、このポケモンが受けるワザのダメージは「-60」される。" }
    ],
    weaknesses: [{ type: "Lightning", value: "×2" }],
    resistances: [{ type: "Fighting", value: "-30" }],
    retreatCost: ["Colorless","Colorless"],
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "GIDORA",
    nationalPokedexNumber: 823,
    imageJa: "images/sets/sd100/jp/520.jpg"
  },
  {
    id: "sd100-521",
    setIdJa: "sd100",
    numberJa: "521/742",
    nameJa: "ゾウドウ",
    supertype: "Pokémon",
    subtypes: ["Basic"],
    types: ["Metal"],
    hp: "100",
    abilities: [],
    attacks: [
      { nameJa: "ころがる", cost: ["Metal","Metal","Colorless"], convertedEnergyCost: 3, damage: "80", textJa: "" }
    ],
    weaknesses: [{ type: "Fire", value: "×2" }],
    resistances: [{ type: "Grass", value: "-30" }],
    retreatCost: ["Colorless","Colorless","Colorless"],
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "kodama",
    nationalPokedexNumber: 878,
    imageJa: "images/sets/sd100/jp/521.jpg"
  },
  {
    id: "sd100-522",
    setIdJa: "sd100",
    numberJa: "522/742",
    nameJa: "ダイオウドウ",
    supertype: "Pokémon",
    subtypes: ["Stage 1"],
    evolvesFrom: "ゾウドウ",
    types: ["Metal"],
    hp: "190",
    abilities: [],
    attacks: [
      { nameJa: "ぶつかる", cost: ["Metal","Metal","Colorless"], convertedEnergyCost: 3, damage: "100", textJa: "" },
      { nameJa: "メガインパクト", cost: ["Metal","Metal","Colorless","Colorless"], convertedEnergyCost: 4, damage: "160", textJa: "" }
    ],
    weaknesses: [{ type: "Fire", value: "×2" }],
    resistances: [{ type: "Grass", value: "-30" }],
    retreatCost: ["Colorless","Colorless","Colorless","Colorless"],
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Ryuta Fuse",
    nationalPokedexNumber: 879,
    imageJa: "images/sets/sd100/jp/522.jpg"
  },
  {
    id: "sd100-523",
    setIdJa: "sd100",
    numberJa: "523/742",
    nameJa: "ジュラルドン",
    supertype: "Pokémon",
    subtypes: ["Basic"],
    types: ["Metal"],
    hp: "130",
    abilities: [],
    attacks: [
      { nameJa: "がちんこ", cost: ["Metal","Metal"], convertedEnergyCost: 2, damage: "50", textJa: "" },
      { nameJa: "ジュラルビーム", cost: ["Metal","Metal","Metal"], convertedEnergyCost: 3, damage: "130", textJa: "このポケモンについているエネルギーを2個選び、トラッシュする。" }
    ],
    weaknesses: [{ type: "Fire", value: "×2" }],
    resistances: [{ type: "Grass", value: "-30" }],
    retreatCost: ["Colorless","Colorless"],
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Tonji Matsuno",
    nationalPokedexNumber: 884,
    imageJa: "images/sets/sd100/jp/523.jpg"
  },
  {
    id: "sd100-524",
    setIdJa: "sd100",
    numberJa: "524/742",
    nameJa: "ジュラルドン",
    supertype: "Pokémon",
    subtypes: ["Basic"],
    types: ["Metal"],
    hp: "130",
    abilities: [],
    attacks: [
      { nameJa: "ぶちかます", cost: ["Metal"], convertedEnergyCost: 1, damage: "30", textJa: "" },
      { nameJa: "レイジングハンマー", cost: ["Metal","Metal","Colorless"], convertedEnergyCost: 3, damage: "80+", textJa: "このポケモンにのっているダメカンの数×10ダメージ追加。" }
    ],
    weaknesses: [{ type: "Fire", value: "×2" }],
    resistances: [{ type: "Grass", value: "-30" }],
    retreatCost: ["Colorless","Colorless"],
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Takeshi Nakamura",
    nationalPokedexNumber: 884,
    imageJa: "images/sets/sd100/jp/524.jpg"
  },
  {
    id: "sd100-525",
    setIdJa: "sd100",
    numberJa: "525/742",
    nameJa: "ブリジュラス",
    supertype: "Pokémon",
    subtypes: ["Stage 1"],
    evolvesFrom: "ジュラルドン",
    types: ["Metal"],
    hp: "180",
    abilities: [
      { nameJa: "はがねのかけはし", type: "Ability", textJa: "このポケモンがいるかぎり、♦エネルギーがついている自分のポケモン全員のにげるためのエネルギーは、すべてなくなる。" }
    ],
    attacks: [
      { nameJa: "アイアンブラスター", cost: ["Metal","Metal","Colorless"], convertedEnergyCost: 3, damage: "160", textJa: "次の自分の番、このポケモンはワザが使えない。" }
    ],
    weaknesses: [{ type: "Fire", value: "×2" }],
    resistances: [{ type: "Grass", value: "-30" }],
    retreatCost: ["Colorless","Colorless"],
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Oswaldo KATO",
    nationalPokedexNumber: 1018,
    imageJa: "images/sets/sd100/jp/525.jpg"
  },
  {
    id: "sd100-526",
    setIdJa: "sd100",
    numberJa: "526/742",
    nameJa: "ブリジュラスex",
    supertype: "Pokémon",
    subtypes: ["Stage 1","ex"],
    evolvesFrom: "ジュラルドン",
    types: ["Metal"],
    hp: "300",
    abilities: [
      { nameJa: "ごうきんビルド", type: "Ability", textJa: "自分の番に、このカードを手札から出して進化させたとき、1回使える。自分のトラッシュから「基本♦エネルギー」を2枚まで選び、自分の♦ポケモンに好きなようにつける。" }
    ],
    attacks: [
      { nameJa: "メタルディフェンダー", cost: ["Metal","Metal","Metal"], convertedEnergyCost: 3, damage: "220", textJa: "次の相手の番、このポケモンの弱点は、すべてなくなる。" }
    ],
    weaknesses: [{ type: "Fire", value: "×2" }],
    resistances: [{ type: "Grass", value: "-30" }],
    retreatCost: ["Colorless","Colorless"],
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "5ban Graphics",
    nationalPokedexNumber: 1018,
    imageJa: "images/sets/sd100/jp/526.jpg",
    textJa: "ポケモンexがきぜつしたとき、相手はサイドを2枚とる。"
  },
  {
    id: "sd100-527",
    setIdJa: "sd100",
    numberJa: "527/742",
    nameJa: "ホップのザシアンex",
    supertype: "Pokémon",
    subtypes: ["Basic","ex"],
    types: ["Metal"],
    hp: "230",
    abilities: [],
    attacks: [
      { nameJa: "せつなぎり", cost: ["Colorless"], convertedEnergyCost: 1, damage: "30", textJa: "相手のベンチポケモン1匹にも、30ダメージ。[ベンチは弱点・抵抗力を計算しない。]" },
      { nameJa: "ブレイブスラッシュ", cost: ["Metal","Metal","Metal","Colorless"], convertedEnergyCost: 4, damage: "240", textJa: "次の自分の番、このポケモンは「ブレイブスラッシュ」が使えない。" }
    ],
    weaknesses: [{ type: "Fire", value: "×2" }],
    resistances: [{ type: "Grass", value: "-30" }],
    retreatCost: ["Colorless","Colorless"],
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "aky CG Works",
    nationalPokedexNumber: 888,
    imageJa: "images/sets/sd100/jp/527.jpg",
    textJa: "ポケモンexがきぜつしたとき、相手はサイドを2枚とる。"
  },
  {
    id: "sd100-528",
    setIdJa: "sd100",
    numberJa: "528/742",
    nameJa: "カヌチャン",
    supertype: "Pokémon",
    subtypes: ["Basic"],
    types: ["Metal"],
    hp: "70",
    abilities: [],
    attacks: [
      { nameJa: "たたく", cost: ["Metal"], convertedEnergyCost: 1, damage: "20", textJa: "" }
    ],
    weaknesses: [{ type: "Fire", value: "×2" }],
    resistances: [{ type: "Grass", value: "-30" }],
    retreatCost: ["Colorless"],
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "You Iribi",
    nationalPokedexNumber: 957,
    imageJa: "images/sets/sd100/jp/528.jpg"
  },
  {
    id: "sd100-529",
    setIdJa: "sd100",
    numberJa: "529/742",
    nameJa: "ナカヌチャン",
    supertype: "Pokémon",
    subtypes: ["Stage 1"],
    evolvesFrom: "カヌチャン",
    types: ["Metal"],
    hp: "90",
    abilities: [
      { nameJa: "でたとこハンマー", type: "Ability", textJa: "自分の番に、このカードを手札から出して進化させたとき、1回使える。コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。" }
    ],
    attacks: [
      { nameJa: "なぐる", cost: ["Metal"], convertedEnergyCost: 1, damage: "30", textJa: "" }
    ],
    weaknesses: [{ type: "Fire", value: "×2" }],
    resistances: [{ type: "Grass", value: "-30" }],
    retreatCost: ["Colorless","Colorless"],
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "KEIICHIRO ITO",
    nationalPokedexNumber: 958,
    imageJa: "images/sets/sd100/jp/529.jpg"
  },
  {
    id: "sd100-530",
    setIdJa: "sd100",
    numberJa: "530/742",
    nameJa: "デカヌチャン",
    supertype: "Pokémon",
    subtypes: ["Stage 2"],
    evolvesFrom: "ナカヌチャン",
    types: ["Metal"],
    hp: "160",
    abilities: [],
    attacks: [
      { nameJa: "おおぶりスイング", cost: ["Metal"], convertedEnergyCost: 1, damage: "240-", textJa: "相手のバトルポケモンについているエネルギーの数×60ダメージぶん、このワザのダメージは小さくなる。" }
    ],
    weaknesses: [{ type: "Fire", value: "×2" }],
    resistances: [{ type: "Grass", value: "-30" }],
    retreatCost: ["Colorless","Colorless"],
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "toriyufu",
    nationalPokedexNumber: 959,
    imageJa: "images/sets/sd100/jp/530.jpg"
  }
];

const cards = readJson('data/cards/sd100.json');
const existingIds = new Set(cards.map(c => c.id));
let added = 0;
for (const c of newCards) {
  if (!existingIds.has(c.id)) { cards.push(c); added++; }
}
cards.sort((a, b) => parseInt(a.id.split('-')[1]) - parseInt(b.id.split('-')[1]));
fs.writeFileSync('data/cards/sd100.json', JSON.stringify(cards, null, 2), 'utf8');
console.log(`Added ${added} cards. Total: ${cards.length}`);
