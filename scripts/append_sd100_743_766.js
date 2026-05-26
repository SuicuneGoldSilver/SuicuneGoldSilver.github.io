// Append sd100 cards 743-766 to data/cards/sd100.json
// These are special illustration/full-art variants (numbered beyond base 742).
// Several ability/attack textJa fields are empty — image OCR was unreliable.
// Cards needing manual review of nameJa: 751, 759, 766.
// Run: node scripts/append_sd100_743_766.js

const fs = require('fs');

function readJson(p) {
  let s = fs.readFileSync(p, 'utf8');
  if (s.charCodeAt(0) === 0xFEFF) s = s.slice(1);
  return JSON.parse(s);
}

const newCards = [
  {
    id: "sd100-743",
    setIdJa: "sd100",
    numberJa: "743/742",
    nameJa: "モンジャラ",
    supertype: "Pokémon",
    subtypes: ["Basic"],
    types: ["Grass"],
    hp: "80",
    abilities: [
      { nameJa: "やっかいっこちゃん", type: "Ability", textJa: "" }
    ],
    attacks: [
      { nameJa: "しめつける", cost: ["Grass"], damage: "50", textJa: "" }
    ],
    weaknesses: [{ type: "Fire", value: "×2" }],
    resistances: [],
    retreatCost: ["Colorless"],
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    nationalPokedexNumber: 114,
    artist: null,
    imageJa: "images/sets/sd100/jp/743.jpg"
  },
  {
    id: "sd100-744",
    setIdJa: "sd100",
    numberJa: "744/742",
    nameJa: "エンニュート",
    supertype: "Pokémon",
    subtypes: ["Stage 1"],
    types: ["Fire"],
    hp: "120",
    abilities: [
      { nameJa: "いきなりあぶる", type: "Ability", textJa: "" }
    ],
    attacks: [
      { nameJa: "かえんぼうしゃ", cost: ["Fire", "Colorless", "Colorless"], damage: "130", textJa: "このポケモンについているエネルギーを1個トラッシュし、相手のベンチポケモンにも50ダメージ。" }
    ],
    weaknesses: [{ type: "Water", value: "×2" }],
    resistances: [],
    retreatCost: ["Colorless", "Colorless"],
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    nationalPokedexNumber: 758,
    artist: "Dorie",
    imageJa: "images/sets/sd100/jp/744.jpg"
  },
  {
    id: "sd100-745",
    setIdJa: "sd100",
    numberJa: "745/742",
    nameJa: "ヒバニー",
    supertype: "Pokémon",
    subtypes: ["Basic"],
    types: ["Fire"],
    hp: "70",
    abilities: [],
    attacks: [
      { nameJa: "でんこうせっか", cost: ["Colorless"], damage: "10+", textJa: "コインを1回投げ、オモテなら、10ダメージ追加。" }
    ],
    weaknesses: [{ type: "Water", value: "×2" }],
    resistances: [],
    retreatCost: ["Colorless"],
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    nationalPokedexNumber: 813,
    artist: "Yuu Nishida",
    imageJa: "images/sets/sd100/jp/745.jpg"
  },
  {
    id: "sd100-746",
    setIdJa: "sd100",
    numberJa: "746/742",
    nameJa: "マニューラ",
    supertype: "Pokémon",
    subtypes: ["Stage 1"],
    types: ["Darkness"],
    hp: "100",
    abilities: [
      { nameJa: "きりさく", type: "Ability", textJa: "" }
    ],
    attacks: [
      { nameJa: "ヘイルクロー", cost: ["Darkness", "Darkness"], damage: "70", textJa: "相手のサイドの残り枚数が2枚以下なら、100ダメージ追加。" }
    ],
    weaknesses: [{ type: "Fighting", value: "×2" }],
    resistances: [],
    retreatCost: ["Colorless"],
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    nationalPokedexNumber: 461,
    artist: "Unnerve",
    imageJa: "images/sets/sd100/jp/746.jpg"
  },
  {
    id: "sd100-747",
    setIdJa: "sd100",
    numberJa: "747/742",
    nameJa: "クワガノン",
    supertype: "Pokémon",
    subtypes: ["Stage 2"],
    types: ["Lightning"],
    hp: "160",
    abilities: [],
    attacks: [
      { nameJa: "ボルトチェンジ", cost: ["Lightning"], damage: "90", textJa: "このポケモンをベンチのポケモンと入れ替える。" },
      { nameJa: "スパーキングアタック", cost: ["Lightning", "Lightning", "Colorless", "Colorless"], damage: "240", textJa: "" }
    ],
    weaknesses: [{ type: "Fighting", value: "×2" }],
    resistances: [],
    retreatCost: ["Colorless", "Colorless"],
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    nationalPokedexNumber: 738,
    artist: null,
    imageJa: "images/sets/sd100/jp/747.jpg"
  },
  {
    id: "sd100-748",
    setIdJa: "sd100",
    numberJa: "748/742",
    nameJa: "マリル",
    supertype: "Pokémon",
    subtypes: ["Basic"],
    types: ["Water"],
    hp: "70",
    abilities: [
      { nameJa: "かくれる", type: "Ability", textJa: "" }
    ],
    attacks: [
      { nameJa: "はねまわる", cost: ["Water", "Colorless"], damage: "20", textJa: "" }
    ],
    weaknesses: [{ type: "Lightning", value: "×2" }],
    resistances: [],
    retreatCost: ["Colorless", "Colorless"],
    regulationMark: "J",
    rarity: "MC",
    rarityJa: "MC",
    nationalPokedexNumber: 183,
    artist: "Rend",
    imageJa: "images/sets/sd100/jp/748.jpg"
  },
  {
    id: "sd100-749",
    setIdJa: "sd100",
    numberJa: "749/742",
    nameJa: "ジュペッタ",
    supertype: "Pokémon",
    subtypes: ["Stage 1"],
    types: ["Psychic"],
    hp: "90",
    abilities: [
      { nameJa: "のろいのごほうし", type: "Ability", textJa: "" }
    ],
    attacks: [
      { nameJa: "ホロウショット", cost: ["Psychic", "Colorless"], damage: "70", textJa: "" }
    ],
    weaknesses: [{ type: "Darkness", value: "×2" }],
    resistances: [{ type: "Fighting", value: "-30" }],
    retreatCost: ["Colorless", "Colorless"],
    regulationMark: "J",
    rarity: "MC",
    rarityJa: "MC",
    nationalPokedexNumber: 354,
    artist: "GIDORA",
    imageJa: "images/sets/sd100/jp/749.jpg"
  },
  {
    id: "sd100-750",
    setIdJa: "sd100",
    numberJa: "750/742",
    nameJa: "ペロリーム",
    supertype: "Pokémon",
    subtypes: ["Stage 1"],
    types: ["Psychic"],
    hp: "120",
    abilities: [
      { nameJa: "だいあたり", type: "Ability", textJa: "" }
    ],
    attacks: [
      { nameJa: "マジカルショット", cost: ["Psychic", "Colorless"], damage: "70", textJa: "" }
    ],
    weaknesses: [{ type: "Metal", value: "×2" }],
    resistances: [],
    retreatCost: ["Colorless"],
    regulationMark: "J",
    rarity: "MC",
    rarityJa: "MC",
    nationalPokedexNumber: 685,
    artist: null,
    imageJa: "images/sets/sd100/jp/750.jpg"
  },
  {
    id: "sd100-751",
    setIdJa: "sd100",
    numberJa: "751/742",
    nameJa: "ダルマッカ",
    supertype: "Pokémon",
    subtypes: ["Basic"],
    types: ["Fire"],
    hp: "100",
    abilities: [],
    attacks: [
      { nameJa: "スピンドロー", cost: ["Colorless"], damage: "", textJa: "自分の手札をすべて山札にもどして切る。その後、山札を6枚引く。" },
      { nameJa: "けたぐり", cost: ["Fire", "Colorless"], damage: "50", textJa: "" }
    ],
    weaknesses: [{ type: "Water", value: "×2" }],
    resistances: [],
    retreatCost: ["Colorless", "Colorless"],
    regulationMark: "J",
    rarity: "MC",
    rarityJa: "MC",
    nationalPokedexNumber: 554,
    artist: "osoro",
    imageJa: "images/sets/sd100/jp/751.jpg"
  },
  {
    id: "sd100-752",
    setIdJa: "sd100",
    numberJa: "752/742",
    nameJa: "メレシー",
    supertype: "Pokémon",
    subtypes: ["Basic"],
    types: ["Psychic"],
    hp: "90",
    abilities: [
      { nameJa: "ダブルタイプ", type: "Ability", textJa: "" }
    ],
    attacks: [
      { nameJa: "カウンタージュエル", cost: ["Colorless", "Colorless", "Colorless"], damage: "70+", textJa: "相手のサイドの残り枚数が2枚以下なら、100ダメージ追加。" }
    ],
    weaknesses: [{ type: "Metal", value: "×2" }],
    resistances: [],
    retreatCost: ["Colorless", "Colorless"],
    regulationMark: "J",
    rarity: "MC",
    rarityJa: "MC",
    nationalPokedexNumber: 703,
    artist: "taji",
    imageJa: "images/sets/sd100/jp/752.jpg"
  },
  {
    id: "sd100-753",
    setIdJa: "sd100",
    numberJa: "753/742",
    nameJa: "グラエナ",
    supertype: "Pokémon",
    subtypes: ["Stage 1"],
    types: ["Darkness"],
    hp: "120",
    abilities: [],
    attacks: [
      { nameJa: "けりとばす", cost: ["Darkness", "Colorless"], damage: "50", textJa: "相手のバトルポケモンをベンチのポケモンと入れ替える。[バトル場に出すポケモンは相手が選ぶ。]" },
      { nameJa: "するどいキバ", cost: ["Darkness", "Darkness", "Colorless"], damage: "130", textJa: "" }
    ],
    weaknesses: [{ type: "Fighting", value: "×2" }],
    resistances: [],
    retreatCost: ["Colorless"],
    regulationMark: "J",
    rarity: "MC",
    rarityJa: "MC",
    nationalPokedexNumber: 262,
    artist: null,
    imageJa: "images/sets/sd100/jp/753.jpg"
  },
  {
    id: "sd100-754",
    setIdJa: "sd100",
    numberJa: "754/742",
    nameJa: "クチート",
    supertype: "Pokémon",
    subtypes: ["Basic"],
    types: ["Psychic"],
    hp: "90",
    abilities: [
      { nameJa: "なかまをよぶ", type: "Ability", textJa: "" }
    ],
    attacks: [
      { nameJa: "かみつく", cost: ["Psychic", "Colorless", "Colorless"], damage: "90", textJa: "" }
    ],
    weaknesses: [{ type: "Metal", value: "×2" }],
    resistances: [{ type: "Fighting", value: "-30" }],
    retreatCost: ["Colorless"],
    regulationMark: "J",
    rarity: "MC",
    rarityJa: "MC",
    nationalPokedexNumber: 303,
    artist: "poosow",
    imageJa: "images/sets/sd100/jp/754.jpg"
  },
  {
    id: "sd100-755",
    setIdJa: "sd100",
    numberJa: "755/742",
    nameJa: "イーブイ",
    supertype: "Pokémon",
    subtypes: ["Basic"],
    types: ["Colorless"],
    hp: "50",
    abilities: [
      { nameJa: "ブーストしんか", type: "Ability", textJa: "" }
    ],
    attacks: [
      { nameJa: "とつげき", cost: ["Colorless", "Colorless"], damage: "30", textJa: "このポケモンにも10ダメージ。" }
    ],
    weaknesses: [{ type: "Fighting", value: "×2" }],
    resistances: [],
    retreatCost: ["Colorless"],
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    nationalPokedexNumber: 133,
    artist: null,
    imageJa: "images/sets/sd100/jp/755.jpg"
  },
  {
    id: "sd100-756",
    setIdJa: "sd100",
    numberJa: "756/742",
    nameJa: "アオキのムクホーク",
    supertype: "Pokémon",
    subtypes: ["Stage 2"],
    types: ["Colorless"],
    hp: "150",
    abilities: [],
    attacks: [
      { nameJa: "かちげんき", cost: ["Colorless"], damage: "60+", textJa: "このポケモンがどくまたはやけどなら、100ダメージ追加。" },
      { nameJa: "フェザーストライダー", cost: ["Colorless", "Colorless", "Colorless"], damage: "150", textJa: "このポケモンについているエネルギーを2個トラッシュし、相手のベンチポケモンにも50ダメージ。" }
    ],
    weaknesses: [{ type: "Lightning", value: "×2" }],
    resistances: [{ type: "Fighting", value: "-30" }],
    retreatCost: ["Colorless"],
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    nationalPokedexNumber: 398,
    artist: null,
    imageJa: "images/sets/sd100/jp/756.jpg"
  },
  {
    id: "sd100-757",
    setIdJa: "sd100",
    numberJa: "757/742",
    nameJa: "ニャオハex",
    supertype: "Pokémon",
    subtypes: ["Basic", "ex"],
    types: ["Grass"],
    hp: "200",
    abilities: [],
    attacks: [
      { nameJa: "ひっかく", cost: ["Colorless"], damage: "20", textJa: "" },
      { nameJa: "マジカルリーフ", cost: ["Grass", "Colorless", "Colorless"], damage: "100", textJa: "このポケモンのHPを「30」回復する。" }
    ],
    weaknesses: [{ type: "Fire", value: "×2" }],
    resistances: [],
    retreatCost: ["Colorless"],
    textJa: "ポケモンexがきぜつしたとき、相手はサイドを2枚とる。",
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    nationalPokedexNumber: 906,
    artist: "5ban Graphics",
    imageJa: "images/sets/sd100/jp/757.jpg"
  },
  {
    id: "sd100-758",
    setIdJa: "sd100",
    numberJa: "758/742",
    nameJa: "マッギョex",
    supertype: "Pokémon",
    subtypes: ["Basic", "ex"],
    types: ["Lightning"],
    hp: "210",
    abilities: [],
    attacks: [
      { nameJa: "かじりつく", cost: ["Lightning"], damage: "30", textJa: "次の相手の番、このワザを受けたポケモンはにげられない。" },
      { nameJa: "ぴちぴちトラップ", cost: ["Lightning", "Colorless", "Colorless"], damage: "100+", textJa: "このポケモンにダメカンがのっているなら、100ダメージ追加。" }
    ],
    weaknesses: [{ type: "Water", value: "×2" }],
    resistances: [],
    retreatCost: ["Colorless", "Colorless"],
    textJa: "ポケモンexがきぜつしたとき、相手はサイドを2枚とる。",
    regulationMark: "J",
    rarity: "MC",
    rarityJa: "MC",
    nationalPokedexNumber: 618,
    artist: "5ban Graphics",
    imageJa: "images/sets/sd100/jp/758.jpg"
  },
  {
    id: "sd100-759",
    setIdJa: "sd100",
    numberJa: "759/742",
    nameJa: "メロエッタex",
    supertype: "Pokémon",
    subtypes: ["Basic", "ex"],
    types: ["Colorless"],
    hp: "270",
    abilities: [],
    attacks: [
      { nameJa: "カレイドワルツ", cost: ["Colorless"], damage: "", textJa: "" },
      { nameJa: "イヤーフォース", cost: ["Colorless", "Colorless", "Colorless"], damage: "20+", textJa: "" }
    ],
    weaknesses: [],
    resistances: [],
    retreatCost: ["Colorless", "Colorless"],
    textJa: "ポケモンexがきぜつしたとき、相手はサイドを2枚とる。",
    regulationMark: "J",
    rarity: "MC",
    rarityJa: "MC",
    nationalPokedexNumber: 648,
    artist: null,
    imageJa: "images/sets/sd100/jp/759.jpg"
  },
  {
    id: "sd100-760",
    setIdJa: "sd100",
    numberJa: "760/742",
    nameJa: "ボスの指令",
    supertype: "Trainer",
    subtypes: ["Supporter"],
    textJa: "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。",
    regulationMark: "J",
    rarity: "MC",
    rarityJa: "MC",
    artist: null,
    imageJa: "images/sets/sd100/jp/760.jpg"
  },
  {
    id: "sd100-761",
    setIdJa: "sd100",
    numberJa: "761/742",
    nameJa: "メガフシギバナex",
    supertype: "Pokémon",
    subtypes: ["Stage 1", "ex"],
    types: ["Grass"],
    hp: "360",
    abilities: [],
    attacks: [
      { nameJa: "", cost: ["Colorless", "Colorless", "Colorless"], damage: "70+", textJa: "" }
    ],
    weaknesses: [{ type: "Fire", value: "×2" }],
    resistances: [],
    retreatCost: [],
    textJa: "メガシンカexがきぜつしたとき、相手はサイドを3枚とる。",
    regulationMark: "J",
    rarity: "MC",
    rarityJa: "MC",
    nationalPokedexNumber: 3,
    artist: "K.Uemura",
    imageJa: "images/sets/sd100/jp/761.jpg"
  },
  {
    id: "sd100-762",
    setIdJa: "sd100",
    numberJa: "762/742",
    nameJa: "メガリザードンex",
    supertype: "Pokémon",
    subtypes: ["Stage 1", "ex"],
    types: ["Fire"],
    hp: "380",
    abilities: [],
    attacks: [
      { nameJa: "クリムゾンボム", cost: ["Fire", "Fire", "Colorless"], damage: "320", textJa: "" }
    ],
    weaknesses: [{ type: "Water", value: "×2" }],
    resistances: [],
    retreatCost: [],
    textJa: "メガシンカexがきぜつしたとき、相手はサイドを3枚とる。",
    regulationMark: "J",
    rarity: "MC",
    rarityJa: "MC",
    nationalPokedexNumber: 6,
    artist: "Ren Hiroo",
    imageJa: "images/sets/sd100/jp/762.jpg"
  },
  {
    id: "sd100-763",
    setIdJa: "sd100",
    numberJa: "763/742",
    nameJa: "メガカメックスex",
    supertype: "Pokémon",
    subtypes: ["Stage 1", "ex"],
    types: ["Water"],
    hp: "370",
    abilities: [],
    attacks: [
      { nameJa: "キラークランチ", cost: ["Water", "Water", "Colorless"], damage: "200+", textJa: "" }
    ],
    weaknesses: [{ type: "Lightning", value: "×2" }],
    resistances: [],
    retreatCost: [],
    textJa: "メガシンカexがきぜつしたとき、相手はサイドを3枚とる。",
    regulationMark: "J",
    rarity: "MC",
    rarityJa: "MC",
    nationalPokedexNumber: 9,
    artist: "Ren Hiroo",
    imageJa: "images/sets/sd100/jp/763.jpg"
  },
  {
    id: "sd100-764",
    setIdJa: "sd100",
    numberJa: "764/742",
    nameJa: "ピカチュウex",
    supertype: "Pokémon",
    subtypes: ["Basic", "ex"],
    types: ["Lightning"],
    hp: "200",
    abilities: [],
    attacks: [
      { nameJa: "10まんボルト", cost: ["Lightning", "Lightning", "Colorless"], damage: "120", textJa: "" }
    ],
    weaknesses: [],
    resistances: [{ type: "Water", value: "-20" }],
    retreatCost: ["Colorless"],
    textJa: "ポケモンexがきぜつしたとき、相手はサイドを2枚とる。",
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    nationalPokedexNumber: 25,
    artist: "Isoabe",
    imageJa: "images/sets/sd100/jp/764.jpg"
  },
  {
    id: "sd100-765",
    setIdJa: "sd100",
    numberJa: "765/742",
    nameJa: "リーリエのピッピex",
    supertype: "Pokémon",
    subtypes: ["Basic", "ex"],
    types: ["Psychic"],
    hp: "190",
    abilities: [
      { nameJa: "フェアリーゾーン", type: "Ability", textJa: "" }
    ],
    attacks: [
      { nameJa: "フルムーンロード", cost: ["Psychic", "Colorless"], damage: "20+", textJa: "おたがいのベンチポケモンの数×20ダメージ追加。" }
    ],
    weaknesses: [{ type: "Metal", value: "×2" }],
    resistances: [],
    retreatCost: ["Colorless"],
    textJa: "ポケモンexがきぜつしたとき、相手はサイドを2枚とる。",
    regulationMark: "J",
    rarity: "MC",
    rarityJa: "MC",
    nationalPokedexNumber: 35,
    artist: "Naoki Saito",
    imageJa: "images/sets/sd100/jp/765.jpg"
  },
  {
    id: "sd100-766",
    setIdJa: "sd100",
    numberJa: "766/742",
    nameJa: "ライジングシードex",
    supertype: "Pokémon",
    subtypes: ["Stage 1", "ex", "Tera"],
    types: ["Darkness"],
    hp: "360",
    abilities: [],
    attacks: [
      { nameJa: "フロージョンY", cost: ["Darkness", "Darkness", "Colorless"], damage: "280", textJa: "" }
    ],
    weaknesses: [],
    resistances: [],
    retreatCost: ["Colorless", "Colorless"],
    textJa: "ポケモンexがきぜつしたとき、相手はサイドを2枚とる。\nこのポケモンは、ベンチにいるかぎり、ワザのダメージを受けない。",
    regulationMark: "J",
    rarity: "MC",
    rarityJa: "MC",
    nationalPokedexNumber: 635,
    artist: null,
    imageJa: "images/sets/sd100/jp/766.jpg"
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
