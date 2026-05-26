// Append sd100 cards 711-730 to data/cards/sd100.json
// Run: node scripts/append_sd100_711_730.js

const fs = require('fs');

function readJson(p) {
  let s = fs.readFileSync(p, 'utf8');
  if (s.charCodeAt(0) === 0xFEFF) s = s.slice(1);
  return JSON.parse(s);
}

const newCards = [
  {
    id: "sd100-711",
    setIdJa: "sd100",
    numberJa: "711/742",
    nameJa: "ジャッジマン",
    supertype: "Trainer",
    subtypes: ["Supporter"],
    textJa: "おたがいのプレイヤーは、それぞれ手札をすべて山札にもどして切る。その後、それぞれ山札を4枚引く。",
    regulationMark: "J",
    rarity: "MC",
    rarityJa: "MC",
    artist: "kantaro",
    imageJa: "images/sets/sd100/jp/711.jpg"
  },
  {
    id: "sd100-712",
    setIdJa: "sd100",
    numberJa: "712/742",
    nameJa: "スイレンのお世話",
    supertype: "Trainer",
    subtypes: ["Supporter"],
    textJa: "自分のトラッシュからポケモン（ルールを持つポケモンをのぞく）と基本エネルギーを合計3枚まで選び、相手に見せて、手札に加える。",
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Atsushi Furusawa",
    imageJa: "images/sets/sd100/jp/712.jpg"
  },
  {
    id: "sd100-713",
    setIdJa: "sd100",
    numberJa: "713/742",
    nameJa: "スグリ",
    supertype: "Trainer",
    subtypes: ["Supporter"],
    textJa: "このカードは、2つの効果から1つを選んで使う。\n・自分のバトルポケモンをベンチポケモンと入れ替える。\n・この番、自分のポケモンが使うワザの、相手のバトル場の「ポケモンex」へのダメージは「+30」される。",
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "GIDORA",
    imageJa: "images/sets/sd100/jp/713.jpg"
  },
  {
    id: "sd100-714",
    setIdJa: "sd100",
    numberJa: "714/742",
    nameJa: "セイジ",
    supertype: "Trainer",
    subtypes: ["Supporter"],
    textJa: "自分の場のポケモン1匹（ルールを持つポケモンをのぞく）から進化するカードを、自分の山札から1枚選び、そのポケモンにのせて進化させる。そして山札を切る。（対戦準備で出したポケモンや、この番出したばかりのポケモンにも使える。）",
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Ryuta Fuse",
    imageJa: "images/sets/sd100/jp/714.jpg"
  },
  {
    id: "sd100-715",
    setIdJa: "sd100",
    numberJa: "715/742",
    nameJa: "ゼイユ",
    supertype: "Trainer",
    subtypes: ["Supporter"],
    textJa: "このカードは、先攻プレイヤーの最初の番でも使える。\n自分の手札をすべてトラッシュし、山札を5枚引く。",
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "kantaro",
    imageJa: "images/sets/sd100/jp/715.jpg"
  },
  {
    id: "sd100-716",
    setIdJa: "sd100",
    numberJa: "716/742",
    nameJa: "タロ",
    supertype: "Trainer",
    subtypes: ["Supporter"],
    textJa: "自分の手札をすべて山札にもどして切る。その後、山札を4枚引く。\n相手のサイドの残り枚数が3枚以下なら、引く枚数は8枚になる。",
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Sanosuke Sakuma",
    imageJa: "images/sets/sd100/jp/716.jpg"
  },
  {
    id: "sd100-717",
    setIdJa: "sd100",
    numberJa: "717/742",
    nameJa: "探検家の先導",
    supertype: "Trainer",
    subtypes: ["Supporter"],
    textJa: "自分の山札を上から6枚見て、その中からカードを2枚選び、手札に加える。残りのカードはトラッシュする。",
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Hideki Ishikawa",
    imageJa: "images/sets/sd100/jp/717.jpg"
  },
  {
    id: "sd100-718",
    setIdJa: "sd100",
    numberJa: "718/742",
    nameJa: "トウコ",
    supertype: "Trainer",
    subtypes: ["Supporter"],
    textJa: "自分の山札から進化ポケモンとエネルギーを1枚ずつ選び、相手に見せて、手札に加える。そして山札を切る。",
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "yuu",
    imageJa: "images/sets/sd100/jp/718.jpg"
  },
  {
    id: "sd100-719",
    setIdJa: "sd100",
    numberJa: "719/742",
    nameJa: "ドラセナ",
    supertype: "Trainer",
    subtypes: ["Supporter"],
    textJa: "自分の手札をすべて山札にもどして切る。その後、コインを1回投げ、オモテなら8枚、ウラなら3枚、山札を引く。",
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Hideki Ishikawa",
    imageJa: "images/sets/sd100/jp/719.jpg"
  },
  {
    id: "sd100-720",
    setIdJa: "sd100",
    numberJa: "720/742",
    nameJa: "ハイダイ",
    supertype: "Trainer",
    subtypes: ["Supporter"],
    textJa: "自分の手札を2枚まで、好きな順番に入れ替えて、山札の下にもどす。その後、山札を4枚引く。（自分の手札を2枚もどせないなら、このカードは使えない。）",
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Hideki Ishikawa",
    imageJa: "images/sets/sd100/jp/720.jpg"
  },
  {
    id: "sd100-721",
    setIdJa: "sd100",
    numberJa: "721/742",
    nameJa: "ハッサク",
    supertype: "Trainer",
    subtypes: ["Supporter"],
    textJa: "このカードは、前の相手の番に、自分のポケモンがきぜつしていなければ使えない。\n自分の山札を上から8枚見て、その中からカードを3枚まで選び、手札に加える。残りのカードは山札にもどして切る。",
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "GOSSAN",
    imageJa: "images/sets/sd100/jp/721.jpg"
  },
  {
    id: "sd100-722",
    setIdJa: "sd100",
    numberJa: "722/742",
    nameJa: "ブライア",
    supertype: "Trainer",
    subtypes: ["Supporter"],
    textJa: "このカードは、相手のサイドの残り枚数が2枚のときにしか使えない。\nこの番、自分の「テラスタル」のポケモンが使うワザで相手のバトルポケモンをきぜつさせたなら、サイドを1枚多くとる。",
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Naoki Saito",
    imageJa: "images/sets/sd100/jp/722.jpg"
  },
  {
    id: "sd100-723",
    setIdJa: "sd100",
    numberJa: "723/742",
    nameJa: "ベルのまごころ",
    supertype: "Trainer",
    subtypes: ["Supporter"],
    textJa: "残りHPが「30」以下の自分のポケモン1匹のHPを、すべて回復する。",
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "En Morikura",
    imageJa: "images/sets/sd100/jp/723.jpg"
  },
  {
    id: "sd100-724",
    setIdJa: "sd100",
    numberJa: "724/742",
    nameJa: "ボスの指令",
    supertype: "Trainer",
    subtypes: ["Supporter"],
    textJa: "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。",
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "akagi",
    imageJa: "images/sets/sd100/jp/724.jpg"
  },
  {
    id: "sd100-725",
    setIdJa: "sd100",
    numberJa: "725/742",
    nameJa: "マコモ",
    supertype: "Trainer",
    subtypes: ["Supporter"],
    textJa: "自分のポケモン全員のHPを、それぞれ「40」回復する。",
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Yuu Nishida",
    imageJa: "images/sets/sd100/jp/725.jpg"
  },
  {
    id: "sd100-726",
    setIdJa: "sd100",
    numberJa: "726/742",
    nameJa: "マチスの取引",
    supertype: "Trainer",
    subtypes: ["Supporter"],
    textJa: "「おたがいのプレイヤーは、それぞれサイドを1枚とる。」のぞむか、相手にたずねる。相手がのぞむなら、おたがいのプレイヤーは、それぞれサイドを1枚とる。のぞまないなら、自分は山札を4枚引く。",
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Hideki Ishikawa",
    imageJa: "images/sets/sd100/jp/726.jpg"
  },
  {
    id: "sd100-727",
    setIdJa: "sd100",
    numberJa: "727/742",
    nameJa: "マツバの確信",
    supertype: "Trainer",
    subtypes: ["Supporter"],
    textJa: "このカードは、自分の手札を1枚トラッシュしなければ使えない。\n相手のベンチポケモンの数ぶん、自分の山札を引く。",
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "GIDORA",
    imageJa: "images/sets/sd100/jp/727.jpg"
  },
  {
    id: "sd100-728",
    setIdJa: "sd100",
    numberJa: "728/742",
    nameJa: "ミカンのまなざし",
    supertype: "Trainer",
    subtypes: ["Supporter"],
    textJa: "次の相手の番、自分のポケモン全員が、相手のポケモンから受けるワザのダメージは「-30」される。（新しく場に出したポケモンもふくむ。）",
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Taira Akitsu",
    imageJa: "images/sets/sd100/jp/728.jpg"
  },
  {
    id: "sd100-729",
    setIdJa: "sd100",
    numberJa: "729/742",
    nameJa: "リーリエの決心",
    supertype: "Trainer",
    subtypes: ["Supporter"],
    textJa: "自分の手札をすべて山札にもどして切る。その後、山札を6枚引く。\n自分のサイドの残り枚数が6枚なら、引く枚数は8枚になる。",
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Atsushi Furusawa",
    imageJa: "images/sets/sd100/jp/729.jpg"
  },
  {
    id: "sd100-730",
    setIdJa: "sd100",
    numberJa: "730/742",
    nameJa: "ルチアのアピール",
    supertype: "Trainer",
    subtypes: ["Supporter"],
    textJa: "相手のベンチのたねポケモンを1匹選び、バトルポケモンと入れ替える。その後、新しく出てきたポケモンをこんらんにする。",
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "En Morikura",
    imageJa: "images/sets/sd100/jp/730.jpg"
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
