// Append sd100 cards 651-670 to data/cards/sd100.json
// Run: node scripts/append_sd100_651_670.js

const fs = require('fs');

function readJson(p) {
  let s = fs.readFileSync(p, 'utf8');
  if (s.charCodeAt(0) === 0xFEFF) s = s.slice(1);
  return JSON.parse(s);
}

const newCards = [
  {
    id: "sd100-651",
    setIdJa: "sd100",
    numberJa: "651/742",
    nameJa: "ハイパーボール",
    supertype: "Trainer",
    subtypes: ["Item"],
    textJa: "このカードは、自分の手札を2枚トラッシュしなければ使えない。\n自分の山札からポケモンを1枚選び、相手に見せて、手札に加える。そして山札を切る。",
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Ayaka Yoshida",
    imageJa: "images/sets/sd100/jp/651.jpg"
  },
  {
    id: "sd100-652",
    setIdJa: "sd100",
    numberJa: "652/742",
    nameJa: "パワープロテイン",
    supertype: "Trainer",
    subtypes: ["Item"],
    textJa: "この番、自分の場のポケモンが使うワザの、相手のバトルポケモンへのダメージは「+30」される。",
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Toysle Beach",
    imageJa: "images/sets/sd100/jp/652.jpg"
  },
  {
    id: "sd100-653",
    setIdJa: "sd100",
    numberJa: "653/742",
    nameJa: "ハンドトリマー",
    supertype: "Trainer",
    subtypes: ["Item"],
    textJa: "おたがいのプレイヤーは、それぞれ自分の手札が5枚になるようにトラッシュする。（トラッシュは相手から行う。手札が5枚以下のプレイヤーはトラッシュしない。）",
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Ayaka Yoshida",
    imageJa: "images/sets/sd100/jp/653.jpg"
  },
  {
    id: "sd100-654",
    setIdJa: "sd100",
    numberJa: "654/742",
    nameJa: "ファイトゴング",
    supertype: "Trainer",
    subtypes: ["Item"],
    textJa: "自分の山札から闘タイプのたねポケモンまたは「基本闘エネルギー」を1枚選び、相手に見せて、手札に加える。そして山札を切る。",
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Toysle Beach",
    imageJa: "images/sets/sd100/jp/654.jpg"
  },
  {
    id: "sd100-655",
    setIdJa: "sd100",
    numberJa: "655/742",
    nameJa: "ふしぎなアメ",
    supertype: "Trainer",
    subtypes: ["Item"],
    textJa: "自分の手札から2進化ポケモンを1枚選び、その2進化ポケモンが進化する自分の場のたねポケモンにのせ、1進化をとばして進化させる。（最初の自分の番や、出したばかりのポケモンには使えない。）",
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Studio Bora Inc.",
    imageJa: "images/sets/sd100/jp/655.jpg"
  },
  {
    id: "sd100-656",
    setIdJa: "sd100",
    numberJa: "656/742",
    nameJa: "プライムキャッチャー",
    supertype: "Trainer",
    subtypes: ["Item"],
    textJa: "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。その後、自分のバトルポケモンをベンチポケモンと入れ替える。",
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Toysle Beach",
    imageJa: "images/sets/sd100/jp/656.jpg"
  },
  {
    id: "sd100-657",
    setIdJa: "sd100",
    numberJa: "657/742",
    nameJa: "古びたはねの化石",
    supertype: "Pokémon",
    subtypes: ["Basic"],
    types: ["Colorless"],
    hp: "60",
    abilities: [
      { nameJa: "はねのまもり", type: "Ability", textJa: "このポケモンは、ベンチにいるかぎり、相手のポケモンからワザのダメージを受けない。" }
    ],
    attacks: [],
    weaknesses: [],
    resistances: [],
    retreatCost: ["Colorless"],
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "AYUMI ODASHIMA",
    nationalPokedexNumber: 566,
    imageJa: "images/sets/sd100/jp/657.jpg",
    textJa: "このカードは、HP60の★タイプのたねポケモンとして、場に出せる。\nこのカードは、特殊状態にならず、にげられない。\n自分の番の中でなら、場に出ているこのカードをトラッシュできる。"
  },
  {
    id: "sd100-658",
    setIdJa: "sd100",
    numberJa: "658/742",
    nameJa: "プレシャスキャリー",
    supertype: "Trainer",
    subtypes: ["Supporter"],
    textJa: "自分の山札からたねポケモンを好きなだけ選び、ベンチに出す。そして山札を切る。",
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Inose yukito",
    imageJa: "images/sets/sd100/jp/658.jpg"
  },
  {
    id: "sd100-659",
    setIdJa: "sd100",
    numberJa: "659/742",
    nameJa: "ペパーのサンドウィッチ",
    supertype: "Trainer",
    subtypes: ["Item"],
    textJa: "自分のバトルポケモンのHPを「30」回復する。そのポケモンが「ペパーのポケモン」なら、回復するHPは「100」になる。",
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "AYUMI ODASHIMA",
    imageJa: "images/sets/sd100/jp/659.jpg"
  },
  {
    id: "sd100-660",
    setIdJa: "sd100",
    numberJa: "660/742",
    nameJa: "ポケギア3.0",
    supertype: "Trainer",
    subtypes: ["Item"],
    textJa: "自分の山札を上から7枚めくって、その中からサポートを1枚選び、相手に見せて、手札に加える。残りのカードは山札にもどして切る。",
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Toysle Beach",
    imageJa: "images/sets/sd100/jp/660.jpg"
  },
  {
    id: "sd100-661",
    setIdJa: "sd100",
    numberJa: "661/742",
    nameJa: "ポケバイタルA",
    supertype: "Trainer",
    subtypes: ["Item"],
    textJa: "自分のポケモン1匹のHPを「150」回復する。\nこのカードは、トラッシュにあるかぎり、手札に加えられず、山札にもどせない。",
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Toysle Beach",
    imageJa: "images/sets/sd100/jp/661.jpg"
  },
  {
    id: "sd100-662",
    setIdJa: "sd100",
    numberJa: "662/742",
    nameJa: "ポケバッジ",
    supertype: "Trainer",
    subtypes: ["Tool"],
    textJa: "自分の山札からポケモン（「ルールを持つポケモン」のぞく）を1枚選び、相手に見せて、手札に加える。そして山札を切る。",
    regulationMark: "J",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Studio Bora Inc.",
    imageJa: "images/sets/sd100/jp/662.jpg"
  },
  {
    id: "sd100-663",
    setIdJa: "sd100",
    numberJa: "663/742",
    nameJa: "ポケモンいれかえ",
    supertype: "Trainer",
    subtypes: ["Item"],
    textJa: "自分のバトルポケモンをベンチポケモンと入れ替える。",
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Studio Bora Inc.",
    imageJa: "images/sets/sd100/jp/663.jpg"
  },
  {
    id: "sd100-664",
    setIdJa: "sd100",
    numberJa: "664/742",
    nameJa: "ポケモン回収サイクロン",
    supertype: "Trainer",
    subtypes: ["Supporter"],
    textJa: "自分の場のポケモンを1匹選び、そのポケモンについているすべてのカードを、手札にもどす。",
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Toysle Beach",
    imageJa: "images/sets/sd100/jp/664.jpg"
  },
  {
    id: "sd100-665",
    setIdJa: "sd100",
    numberJa: "665/742",
    nameJa: "ポケモンキャッチャー",
    supertype: "Trainer",
    subtypes: ["Item"],
    textJa: "コインを1回投げオモテなら、相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。",
    regulationMark: "J",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Studio Bora Inc.",
    imageJa: "images/sets/sd100/jp/665.jpg"
  },
  {
    id: "sd100-666",
    setIdJa: "sd100",
    numberJa: "666/742",
    nameJa: "ホップのバッグ",
    supertype: "Trainer",
    subtypes: ["Item"],
    textJa: "自分の山札からたねポケモンの「ホップのポケモン」を2枚まで選び、ベンチに出す。そして山札を切る。",
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "AYUMI ODASHIMA",
    imageJa: "images/sets/sd100/jp/666.jpg"
  },
  {
    id: "sd100-667",
    setIdJa: "sd100",
    numberJa: "667/742",
    nameJa: "むしとりセット",
    supertype: "Trainer",
    subtypes: ["Item"],
    textJa: "自分の山札を上から7枚見て、その中から基本エネルギーを合計2枚まで選び、相手に見せて、手札に加える。残りのカードは山札にもどして切る。",
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "AYUMI ODASHIMA",
    imageJa: "images/sets/sd100/jp/667.jpg"
  },
  {
    id: "sd100-668",
    setIdJa: "sd100",
    numberJa: "668/742",
    nameJa: "むしよけスプレー",
    supertype: "Trainer",
    subtypes: ["Item"],
    textJa: "相手のバトルポケモンをベンチポケモンと入れ替える。[バトル場に出すポケモンは相手が選ぶ。]",
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Studio Bora Inc.",
    imageJa: "images/sets/sd100/jp/668.jpg"
  },
  {
    id: "sd100-669",
    setIdJa: "sd100",
    numberJa: "669/742",
    nameJa: "モンスターボール",
    supertype: "Trainer",
    subtypes: ["Item"],
    textJa: "コインを1回投げオモテなら、自分の山札からポケモンを1枚選び、相手に見せて、手札に加える。そして山札を切る。",
    regulationMark: "J",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Studio Bora Inc.",
    imageJa: "images/sets/sd100/jp/669.jpg"
  },
  {
    id: "sd100-670",
    setIdJa: "sd100",
    numberJa: "670/742",
    nameJa: "夜のタンカ",
    supertype: "Trainer",
    subtypes: ["Item"],
    textJa: "自分のトラッシュからポケモンまたは基本エネルギーを1枚選び、相手に見せて、手札に加える。",
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Toysle Beach",
    imageJa: "images/sets/sd100/jp/670.jpg"
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
