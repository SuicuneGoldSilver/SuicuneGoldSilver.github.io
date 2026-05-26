// Append sd100 cards 631-650 to data/cards/sd100.json
// Run: node scripts/append_sd100_631_650.js

const fs = require('fs');

function readJson(p) {
  let s = fs.readFileSync(p, 'utf8');
  if (s.charCodeAt(0) === 0xFEFF) s = s.slice(1);
  return JSON.parse(s);
}

const newCards = [
  {
    id: "sd100-631",
    setIdJa: "sd100",
    numberJa: "631/742",
    nameJa: "アイアンディフェンダー",
    supertype: "Trainer",
    subtypes: ["Item"],
    textJa: "次の相手の番、自分のすべてのポケモンが受けるワザのダメージは「-30」される。（新しく場に出したポケモンもふくむ。）",
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Studio Bora Inc.",
    imageJa: "images/sets/sd100/jp/631.jpg"
  },
  {
    id: "sd100-632",
    setIdJa: "sd100",
    numberJa: "632/742",
    nameJa: "あやしい時計",
    supertype: "Trainer",
    subtypes: ["Item"],
    textJa: "自分の進化しているポケモンを1匹選び、「進化カード」を好きなだけはずして退化させる。はずしたカードは、手札にもどす。[退化したポケモンは、その番に進化できない。]",
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Toysle Beach",
    imageJa: "images/sets/sd100/jp/632.jpg"
  },
  {
    id: "sd100-633",
    setIdJa: "sd100",
    numberJa: "633/742",
    nameJa: "アンフェアスタンプ",
    supertype: "Trainer",
    subtypes: ["Supporter"],
    textJa: "このカードは、前の相手の番に、自分のポケモンがきぜつしていなければ使えない。\nおたがいのプレイヤーは、それぞれ手札をすべて山札にもどして切る。その後、自分は5枚、相手は2枚、山札を引く。",
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Toysle Beach",
    imageJa: "images/sets/sd100/jp/633.jpg"
  },
  {
    id: "sd100-634",
    setIdJa: "sd100",
    numberJa: "634/742",
    nameJa: "いいきずぐすり",
    supertype: "Trainer",
    subtypes: ["Item"],
    textJa: "自分のポケモン1匹のHPを「60」回復する。その後、回復したポケモンについているエネルギーを1個選び、トラッシュする。",
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Studio Bora Inc.",
    imageJa: "images/sets/sd100/jp/634.jpg"
  },
  {
    id: "sd100-635",
    setIdJa: "sd100",
    numberJa: "635/742",
    nameJa: "Nのポイントアップ",
    supertype: "Trainer",
    subtypes: ["Item"],
    textJa: "自分のトラッシュから基本エネルギーを1枚選び、ベンチの「Nのポケモン」につける。",
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Toysle Beach",
    imageJa: "images/sets/sd100/jp/635.jpg"
  },
  {
    id: "sd100-636",
    setIdJa: "sd100",
    numberJa: "636/742",
    nameJa: "エネルギー回収",
    supertype: "Trainer",
    subtypes: ["Item"],
    textJa: "自分のトラッシュから基本エネルギーを2枚まで選び、相手に見せて、手札に加える。",
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Studio Bora Inc.",
    imageJa: "images/sets/sd100/jp/636.jpg"
  },
  {
    id: "sd100-637",
    setIdJa: "sd100",
    numberJa: "637/742",
    nameJa: "エネルギーコイン",
    supertype: "Trainer",
    subtypes: ["Item"],
    textJa: "コインを1回投げ、オモテなら、自分の山札から基本エネルギーを1枚選び、自分のポケモンにつける。そして山札を切る。",
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Toysle Beach",
    imageJa: "images/sets/sd100/jp/637.jpg"
  },
  {
    id: "sd100-638",
    setIdJa: "sd100",
    numberJa: "638/742",
    nameJa: "エネルギーつけかえ",
    supertype: "Trainer",
    subtypes: ["Item"],
    textJa: "自分の場のポケモンについている基本エネルギーを1個選び、自分の別のポケモンにつけ替える。",
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Studio Bora Inc.",
    imageJa: "images/sets/sd100/jp/638.jpg"
  },
  {
    id: "sd100-639",
    setIdJa: "sd100",
    numberJa: "639/742",
    nameJa: "エネルギー転送",
    supertype: "Trainer",
    subtypes: ["Item"],
    textJa: "自分の山札から基本エネルギーを1枚選び、相手に見せて、手札に加える。そして山札を切る。",
    regulationMark: "J",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Toysle Beach",
    imageJa: "images/sets/sd100/jp/639.jpg"
  },
  {
    id: "sd100-640",
    setIdJa: "sd100",
    numberJa: "640/742",
    nameJa: "エネルギーリサイクル",
    supertype: "Trainer",
    subtypes: ["Item"],
    textJa: "自分のトラッシュから基本エネルギーを5枚まで選び、相手に見せて、山札にもどして切る。",
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Toysle Beach",
    imageJa: "images/sets/sd100/jp/640.jpg"
  },
  {
    id: "sd100-641",
    setIdJa: "sd100",
    numberJa: "641/742",
    nameJa: "鬼の仮面",
    supertype: "Trainer",
    subtypes: ["Item"],
    textJa: "自分のトラッシュから、名前に「オーガポン」とつく「ポケモンex」を1枚選び、自分の場の、名前に「オーガポン」とつく「ポケモンex」1匹と入れ替える（ついているカード・ダメカン・特殊状態・効果などは、すべて引きつぐ）。入れ替えたポケモンはトラッシュする。",
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "5ban Graphics",
    imageJa: "images/sets/sd100/jp/641.jpg"
  },
  {
    id: "sd100-642",
    setIdJa: "sd100",
    numberJa: "642/742",
    nameJa: "覚醒のドラム",
    supertype: "Trainer",
    subtypes: ["Item"],
    textJa: "自分の場の「古代」のポケモンの数ぶん、山札を引く。",
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Toysle Beach",
    imageJa: "images/sets/sd100/jp/642.jpg"
  },
  {
    id: "sd100-643",
    setIdJa: "sd100",
    numberJa: "643/742",
    nameJa: "きずぐすり",
    supertype: "Trainer",
    subtypes: ["Item"],
    textJa: "自分のポケモン1匹のHPを「30」回復する。",
    regulationMark: "J",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Ayaka Yoshida",
    imageJa: "images/sets/sd100/jp/643.jpg"
  },
  {
    id: "sd100-644",
    setIdJa: "sd100",
    numberJa: "644/742",
    nameJa: "クラッシュハンマー",
    supertype: "Trainer",
    subtypes: ["Item"],
    textJa: "コインを1回投げオモテなら、相手の場のポケモンについているエネルギーを1個選び、トラッシュする。",
    regulationMark: "J",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Ayaka Yoshida",
    imageJa: "images/sets/sd100/jp/644.jpg"
  },
  {
    id: "sd100-645",
    setIdJa: "sd100",
    numberJa: "645/742",
    nameJa: "推理セット",
    supertype: "Trainer",
    subtypes: ["Supporter"],
    textJa: "自分の山札を上から3枚見て、好きな順番に入れ替えて、山札の上にもどす。また、そのカードをすべてウラにして切り、山札の下にもどす。",
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "AYUMI ODASHIMA",
    imageJa: "images/sets/sd100/jp/645.jpg"
  },
  {
    id: "sd100-646",
    setIdJa: "sd100",
    numberJa: "646/742",
    nameJa: "スクランブルスイッチ",
    supertype: "Trainer",
    subtypes: ["Supporter"],
    textJa: "自分のバトルポケモンをベンチポケモンと入れ替える。その後、ベンチに入れ替えたポケモンについているエネルギーを好きなだけ選び、新しいバトルポケモンにつけ替える。",
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Ayaka Yoshida",
    imageJa: "images/sets/sd100/jp/646.jpg"
  },
  {
    id: "sd100-647",
    setIdJa: "sd100",
    numberJa: "647/742",
    nameJa: "デンジャラス光線",
    supertype: "Trainer",
    subtypes: ["Supporter"],
    textJa: "相手のバトルポケモンをやけどとこんらんにする。",
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Inose yukito",
    imageJa: "images/sets/sd100/jp/647.jpg"
  },
  {
    id: "sd100-648",
    setIdJa: "sd100",
    numberJa: "648/742",
    nameJa: "なかよしポフィン",
    supertype: "Trainer",
    subtypes: ["Item"],
    textJa: "自分の山札から、HPが「70」以下のたねポケモンを2枚まで選び、ベンチに出す。そして山札を切る。",
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "AYUMI ODASHIMA",
    imageJa: "images/sets/sd100/jp/648.jpg"
  },
  {
    id: "sd100-649",
    setIdJa: "sd100",
    numberJa: "649/742",
    nameJa: "のんびりじゃらし",
    supertype: "Trainer",
    subtypes: ["Item"],
    textJa: "このカードは、後攻プレイヤーの最初の番しか使えない。\n相手の場のポケモンについているエネルギーを1個選び、相手の手札にもどす。",
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "AYUMI ODASHIMA",
    imageJa: "images/sets/sd100/jp/649.jpg"
  },
  {
    id: "sd100-650",
    setIdJa: "sd100",
    numberJa: "650/742",
    nameJa: "ハイパーアロマ",
    supertype: "Trainer",
    subtypes: ["Supporter"],
    textJa: "自分の山札から進化ポケモンを3枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Toysle Beach",
    imageJa: "images/sets/sd100/jp/650.jpg"
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
