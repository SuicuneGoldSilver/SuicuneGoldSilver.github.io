// Append sd100 cards 731-742 to data/cards/sd100.json
// Note: card 737 is excluded (image missing, needs manual addition)
// Run: node scripts/append_sd100_731_742.js

const fs = require('fs');

function readJson(p) {
  let s = fs.readFileSync(p, 'utf8');
  if (s.charCodeAt(0) === 0xFEFF) s = s.slice(1);
  return JSON.parse(s);
}

const newCards = [
  {
    id: "sd100-731",
    setIdJa: "sd100",
    numberJa: "731/742",
    nameJa: "ロケット団のアテナ",
    supertype: "Trainer",
    subtypes: ["Supporter"],
    textJa: "自分の手札が5枚になるように、山札を引く。自分の場のポケモン全員が「ロケット団のポケモン」なら、8枚になるように引く。",
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "hncl",
    imageJa: "images/sets/sd100/jp/731.jpg"
  },
  {
    id: "sd100-732",
    setIdJa: "sd100",
    numberJa: "732/742",
    nameJa: "ロケット団のアポロ",
    supertype: "Trainer",
    subtypes: ["Supporter"],
    textJa: "このカードは、前の相手の番に、自分の「ロケット団のポケモン」がきぜつしていなければ使えない。おたがいのプレイヤーは、それぞれ手札をすべて山札にもどして切る。その後、自分は5枚、相手は3枚、山札を引く。",
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Hideki Ishikawa",
    imageJa: "images/sets/sd100/jp/732.jpg"
  },
  {
    id: "sd100-733",
    setIdJa: "sd100",
    numberJa: "733/742",
    nameJa: "ロケット団のサカキ",
    supertype: "Trainer",
    subtypes: ["Supporter"],
    textJa: "自分のバトル場の「ロケット団のポケモン」を、ベンチの「ロケット団のポケモン」と入れ替える。その後、相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。",
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "akagi",
    imageJa: "images/sets/sd100/jp/733.jpg"
  },
  {
    id: "sd100-734",
    setIdJa: "sd100",
    numberJa: "734/742",
    nameJa: "ロケット団のラムダ",
    supertype: "Trainer",
    subtypes: ["Supporter"],
    textJa: "自分の山札からトレーナーズを1枚選び、相手に見せて、手札に加える。そして山札を切る。",
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "GOSSAN",
    imageJa: "images/sets/sd100/jp/734.jpg"
  },
  {
    id: "sd100-735",
    setIdJa: "sd100",
    numberJa: "735/742",
    nameJa: "ロケット団のランス",
    supertype: "Trainer",
    subtypes: ["Supporter"],
    textJa: "このカードは、先攻プレイヤーの最初の番でも使える。自分の山札からたねポケモンの「ロケット団のポケモン」を3枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Naoki Saito",
    imageJa: "images/sets/sd100/jp/735.jpg"
  },
  {
    id: "sd100-736",
    setIdJa: "sd100",
    numberJa: "736/742",
    nameJa: "イグニッションエネルギー",
    supertype: "Energy",
    subtypes: ["Special"],
    textJa: "ポケモンについているこのカードは、自分の番の終わりにトラッシュする。このカードは、ポケモンについているかぎり、★エネルギー1個ぶんとしてはたらく。進化ポケモンについているなら、★エネルギー3個ぶんとしてはたらく。",
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: null,
    imageJa: "images/sets/sd100/jp/736.jpg"
  },
  {
    id: "sd100-738",
    setIdJa: "sd100",
    numberJa: "738/742",
    nameJa: "ブーメランエネルギー",
    supertype: "Energy",
    subtypes: ["Special"],
    textJa: "このカードは、ポケモンについているかぎり、★エネルギー1個ぶんとしてはたらく。このカードをつけているポケモンが使うワザの効果で、このカードがトラッシュされたなら、ワザのダメージや効果のあとに、もとのポケモンについておす。",
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: null,
    imageJa: "images/sets/sd100/jp/738.jpg"
  },
  {
    id: "sd100-739",
    setIdJa: "sd100",
    numberJa: "739/742",
    nameJa: "プリズムエネルギー",
    supertype: "Energy",
    subtypes: ["Special"],
    textJa: "このカードは、ポケモンについているかぎり、★エネルギー1個ぶんとしてはたらく。たねポケモンについているなら、すべてのタイプのエネルギー1個ぶんとしてはたらく。",
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: null,
    imageJa: "images/sets/sd100/jp/739.jpg"
  },
  {
    id: "sd100-740",
    setIdJa: "sd100",
    numberJa: "740/742",
    nameJa: "リッチエネルギー",
    supertype: "Energy",
    subtypes: ["Special"],
    textJa: "このカードは、ポケモンについているかぎり、★エネルギー1個ぶんとしてはたらく。このカードを手札からポケモンについたとき、自分の山札を4枚引く。",
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: null,
    imageJa: "images/sets/sd100/jp/740.jpg"
  },
  {
    id: "sd100-741",
    setIdJa: "sd100",
    numberJa: "741/742",
    nameJa: "レガシーエネルギー",
    supertype: "Energy",
    subtypes: ["Special"],
    textJa: "このカードは、ポケモンについているかぎり、すべてのタイプのエネルギー1個ぶんとしてはたらく。このカードをつけているポケモンが、相手のポケモンからワザのダメージを受けてきぜつしたとき、とられるサイドは1枚少なくなる。対戦中、自分の「レガシーエネルギー」のこの効果は、1回しかはたらかない。",
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: null,
    imageJa: "images/sets/sd100/jp/741.jpg"
  },
  {
    id: "sd100-742",
    setIdJa: "sd100",
    numberJa: "742/742",
    nameJa: "ロケット団エネルギー",
    supertype: "Energy",
    subtypes: ["Special"],
    textJa: "このカードは「ロケット団のポケモン」にしかつけられず、「ロケット団のポケモン」以外についているなら、トラッシュする。このカードは、ポケモンについているかぎり、悪・超の2つのタイプのエネルギー2個ぶんとしてはたらく。",
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: null,
    imageJa: "images/sets/sd100/jp/742.jpg"
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
