// Append sd100 cards 691-710 to data/cards/sd100.json
// Run: node scripts/append_sd100_691_710.js

const fs = require('fs');

function readJson(p) {
  let s = fs.readFileSync(p, 'utf8');
  if (s.charCodeAt(0) === 0xFEFF) s = s.slice(1);
  return JSON.parse(s);
}

const newCards = [
  {
    id: "sd100-691",
    setIdJa: "sd100",
    numberJa: "691/742",
    nameJa: "マキシマムベルト",
    supertype: "Trainer",
    subtypes: ["Tool"],
    textJa: "このカードをつけているポケモンが使うワザの、相手のバトル場の「ポケモンex」へのダメージは「+50」される。",
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Inose yukito",
    imageJa: "images/sets/sd100/jp/691.jpg"
  },
  {
    id: "sd100-692",
    setIdJa: "sd100",
    numberJa: "692/742",
    nameJa: "リーリエのしんじゅ",
    supertype: "Trainer",
    subtypes: ["Tool"],
    textJa: "このカードをつけている「リーリエのポケモン」が、相手のポケモンからワザのダメージを受けてきぜつしたとき、とられるサイドは1枚少なくなる。",
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "AYUMI ODASHIMA",
    imageJa: "images/sets/sd100/jp/692.jpg"
  },
  {
    id: "sd100-693",
    setIdJa: "sd100",
    numberJa: "693/742",
    nameJa: "リリバのみ",
    supertype: "Trainer",
    subtypes: ["Tool"],
    textJa: "このカードをつけているポケモンが、相手の「草」ポケモンからワザのダメージを受けるとき、そのダメージは「-60」され、このカードをトラッシュする。",
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Studio Bora Inc.",
    imageJa: "images/sets/sd100/jp/693.jpg"
  },
  {
    id: "sd100-694",
    setIdJa: "sd100",
    numberJa: "694/742",
    nameJa: "アイリスの闘志",
    supertype: "Trainer",
    subtypes: ["Supporter"],
    textJa: "このカードは、自分の手札を1枚トラッシュしなければ使えない。\n自分の手札が6枚になるように、山札を引く。",
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "yuu",
    imageJa: "images/sets/sd100/jp/694.jpg"
  },
  {
    id: "sd100-695",
    setIdJa: "sd100",
    numberJa: "695/742",
    nameJa: "アオキの手腕",
    supertype: "Trainer",
    subtypes: ["Supporter"],
    textJa: "自分の手札をすべてトラッシュし、自分の山札から「サポート」と「基本エネルギー」を1枚ずつ選び、相手に見せて、手札に加える。残りのカードは山札にもどして切る。",
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "hncl",
    imageJa: "images/sets/sd100/jp/695.jpg"
  },
  {
    id: "sd100-696",
    setIdJa: "sd100",
    numberJa: "696/742",
    nameJa: "アカマツ",
    supertype: "Trainer",
    subtypes: ["Supporter"],
    textJa: "自分の山札から、それぞれちがうタイプの基本エネルギーを2枚まで選び、相手に見せて、どちらか1枚を手札に加え、残りのエネルギーを自分のポケモンにつける。そして山札を切る。",
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "GIDORA",
    imageJa: "images/sets/sd100/jp/696.jpg"
  },
  {
    id: "sd100-697",
    setIdJa: "sd100",
    numberJa: "697/742",
    nameJa: "アセロラのいたずら",
    supertype: "Trainer",
    subtypes: ["Supporter"],
    textJa: "このカードは、相手のサイドの残り枚数が2枚以下のときにしか使えない。\n自分の場のポケモンを1匹選ぶ。次の相手の番、そのポケモンは「ポケモンex」からのワザのダメージや効果を受けない。",
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Yuu Nishida",
    imageJa: "images/sets/sd100/jp/697.jpg"
  },
  {
    id: "sd100-698",
    setIdJa: "sd100",
    numberJa: "698/742",
    nameJa: "暗号マニアの解読",
    supertype: "Trainer",
    subtypes: ["Supporter"],
    textJa: "自分の山札から好きなカードを2枚選ぶ。選んだカードを好きな順番に入れ替えて、山札の上にもどす。",
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Taira Akitsu",
    imageJa: "images/sets/sd100/jp/698.jpg"
  },
  {
    id: "sd100-699",
    setIdJa: "sd100",
    numberJa: "699/742",
    nameJa: "アンズの秘技",
    supertype: "Trainer",
    subtypes: ["Supporter"],
    textJa: "自分の悪のポケモンを2匹まで選び、自分の山札から「基本悪エネルギー」を1枚ずつつける。そして山札を切る。バトルポケモンについた場合、そのポケモンをどくにする。",
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Taira Akitsu",
    imageJa: "images/sets/sd100/jp/699.jpg"
  },
  {
    id: "sd100-700",
    setIdJa: "sd100",
    numberJa: "700/742",
    nameJa: "ウエートレス",
    supertype: "Trainer",
    subtypes: ["Supporter"],
    textJa: "自分の山札を6枚見て、その中から基本エネルギーを1枚選び、自分のポケモンにつける。残りのカードは山札にもどして切る。",
    regulationMark: "J",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Cona Nitanda",
    imageJa: "images/sets/sd100/jp/700.jpg"
  },
  {
    id: "sd100-701",
    setIdJa: "sd100",
    numberJa: "701/742",
    nameJa: "Nの筋書き",
    supertype: "Trainer",
    subtypes: ["Supporter"],
    textJa: "自分のベンチポケモンについているエネルギーを2個まで選び、バトルポケモンにつけ替える。",
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "hncl",
    imageJa: "images/sets/sd100/jp/701.jpg"
  },
  {
    id: "sd100-702",
    setIdJa: "sd100",
    numberJa: "702/742",
    nameJa: "ガイ",
    supertype: "Trainer",
    subtypes: ["Supporter"],
    textJa: "自分の山札を3枚引く。",
    regulationMark: "J",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Teeziro",
    imageJa: "images/sets/sd100/jp/702.jpg"
  },
  {
    id: "sd100-703",
    setIdJa: "sd100",
    numberJa: "703/742",
    nameJa: "カキツバタ",
    supertype: "Trainer",
    subtypes: ["Supporter"],
    textJa: "自分の山札を上から7枚見て、その中からポケモンとトレーナーズを1枚ずつ選び、相手に見せて、手札に加える。残りのカードは山札にもどして切る。",
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "GIDORA",
    imageJa: "images/sets/sd100/jp/703.jpg"
  },
  {
    id: "sd100-704",
    setIdJa: "sd100",
    numberJa: "704/742",
    nameJa: "からておうの指令",
    supertype: "Trainer",
    subtypes: ["Supporter"],
    textJa: "この番、自分のポケモンが使うワザの、相手のバトル場の「ポケモンex」へのダメージは「+40」される。",
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "GOSSAN",
    imageJa: "images/sets/sd100/jp/704.jpg"
  },
  {
    id: "sd100-705",
    setIdJa: "sd100",
    numberJa: "705/742",
    nameJa: "クセロシキのたくらみ",
    supertype: "Trainer",
    subtypes: ["Supporter"],
    textJa: "相手は相手自身の手札を、3枚になるようにトラッシュする。",
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "GOSSAN",
    imageJa: "images/sets/sd100/jp/705.jpg"
  },
  {
    id: "sd100-706",
    setIdJa: "sd100",
    numberJa: "706/742",
    nameJa: "ゴック",
    supertype: "Trainer",
    subtypes: ["Supporter"],
    textJa: "自分のバトルポケモンのHPを「70」回復する。",
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Hideki Ishikawa",
    imageJa: "images/sets/sd100/jp/706.jpg"
  },
  {
    id: "sd100-707",
    setIdJa: "sd100",
    numberJa: "707/742",
    nameJa: "ゴヨウ",
    supertype: "Trainer",
    subtypes: ["Supporter"],
    textJa: "おたがいのプレイヤーは、それぞれ自分の手札をすべてウラにして切り、山札の下にもどす。その後、おたがいのプレイヤーは、それぞれコインを1回投げ、オモテなら6枚、ウラなら3枚、山札を引く。",
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "hncl",
    imageJa: "images/sets/sd100/jp/707.jpg"
  },
  {
    id: "sd100-708",
    setIdJa: "sd100",
    numberJa: "708/742",
    nameJa: "サーファー",
    supertype: "Trainer",
    subtypes: ["Supporter"],
    textJa: "自分のバトルポケモンをベンチポケモンと入れ替える。その後、自分の手札が5枚になるように、山札を引く。",
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Hideki Ishikawa",
    imageJa: "images/sets/sd100/jp/708.jpg"
  },
  {
    id: "sd100-709",
    setIdJa: "sd100",
    numberJa: "709/742",
    nameJa: "サザレ",
    supertype: "Trainer",
    subtypes: ["Supporter"],
    textJa: "自分の手札からポケモンを2枚まで選び、山札に入れ替える。その後、もどした枚数ぶんまで、自分の山札からポケモンを選び、相手に見せて、手札に加える。そして山札を切る。",
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Naoki Saito",
    imageJa: "images/sets/sd100/jp/709.jpg"
  },
  {
    id: "sd100-710",
    setIdJa: "sd100",
    numberJa: "710/742",
    nameJa: "シトロンの機転",
    supertype: "Trainer",
    subtypes: ["Supporter"],
    textJa: "自分のポケモン全員のHPを、それぞれ「60」回復する。",
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Naoki Saito",
    imageJa: "images/sets/sd100/jp/710.jpg"
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
