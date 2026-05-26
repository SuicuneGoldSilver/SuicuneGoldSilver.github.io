// Append sd100 cards 671-690 to data/cards/sd100.json
// Run: node scripts/append_sd100_671_690.js

const fs = require('fs');

function readJson(p) {
  let s = fs.readFileSync(p, 'utf8');
  if (s.charCodeAt(0) === 0xFEFF) s = s.slice(1);
  return JSON.parse(s);
}

const newCards = [
  {
    id: "sd100-671",
    setIdJa: "sd100",
    numberJa: "671/742",
    nameJa: "リブートポッド",
    supertype: "Trainer",
    subtypes: ["Item"],
    textJa: "自分の「未来」のポケモン全員に、トラッシュから基本エネルギーを1枚ずつつける。",
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    imageJa: "images/sets/sd100/jp/671.jpg"
  },
  {
    id: "sd100-672",
    setIdJa: "sd100",
    numberJa: "672/742",
    nameJa: "竜の秘薬",
    supertype: "Trainer",
    subtypes: ["Item"],
    textJa: "自分のバトル場のポケモンのHPを「60」回復する。",
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    imageJa: "images/sets/sd100/jp/672.jpg"
  },
  {
    id: "sd100-673",
    setIdJa: "sd100",
    numberJa: "673/742",
    nameJa: "ロケット団のスーパーボール",
    supertype: "Trainer",
    subtypes: ["Item"],
    textJa: "コインを1回投げる。オモテなら進化ポケモンの「ロケット団のポケモン」、ウラなら「たねポケモン」の「ロケット団のポケモン」を自分の山札から1枚選び、相手に見せて、手札に加える。そして山札を切る。",
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    imageJa: "images/sets/sd100/jp/673.jpg"
  },
  {
    id: "sd100-674",
    setIdJa: "sd100",
    numberJa: "674/742",
    nameJa: "ロケット団のびっくりボム",
    supertype: "Trainer",
    subtypes: ["Item"],
    textJa: "コインを1回投げオモテなら、相手のポケモン1匹に、ダメカンを2個のせる。ウラなら、自分のバトルポケモンに、ダメカンを2個のせる。",
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    imageJa: "images/sets/sd100/jp/674.jpg"
  },
  {
    id: "sd100-675",
    setIdJa: "sd100",
    numberJa: "675/742",
    nameJa: "ロケット団のレシーバー",
    supertype: "Trainer",
    subtypes: ["Item"],
    textJa: "自分の山札から、名前に「ロケット団」とつくサポートを1枚選び、相手に見せて、手札に加える。そして山札を切る。",
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    imageJa: "images/sets/sd100/jp/675.jpg"
  },
  {
    id: "sd100-676",
    setIdJa: "sd100",
    numberJa: "676/742",
    nameJa: "イトケのみ",
    supertype: "Trainer",
    subtypes: ["Tool"],
    textJa: "このカードをつけているポケモンが、相手の「水」ポケモンからワザのダメージを受けるとき、そのダメージは「-60」され、このカードをトラッシュする。",
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    imageJa: "images/sets/sd100/jp/676.jpg"
  },
  {
    id: "sd100-677",
    setIdJa: "sd100",
    numberJa: "677/742",
    nameJa: "ウタンのみ",
    supertype: "Trainer",
    subtypes: ["Tool"],
    textJa: "このカードをつけているポケモンが、相手の「超」ポケモンからワザのダメージを受けるとき、そのダメージは「-60」され、このカードをトラッシュする。",
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    imageJa: "images/sets/sd100/jp/677.jpg"
  },
  {
    id: "sd100-678",
    setIdJa: "sd100",
    numberJa: "678/742",
    nameJa: "オッカのみ",
    supertype: "Trainer",
    subtypes: ["Tool"],
    textJa: "このカードをつけているポケモンが、相手の「炎」ポケモンからワザのダメージを受けるとき、そのダメージは「-60」され、このカードをトラッシュする。",
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    imageJa: "images/sets/sd100/jp/678.jpg"
  },
  {
    id: "sd100-679",
    setIdJa: "sd100",
    numberJa: "679/742",
    nameJa: "カウンターゲイン",
    supertype: "Trainer",
    subtypes: ["Tool"],
    textJa: "自分のサイドの残り枚数が、相手のサイドの残り枚数より多いなら、このカードをつけているポケモンが使うワザのためのエネルギーは★エネルギー1個ぶん少なくなる。",
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    imageJa: "images/sets/sd100/jp/679.jpg"
  },
  {
    id: "sd100-680",
    setIdJa: "sd100",
    numberJa: "680/742",
    nameJa: "きらめく結晶",
    supertype: "Trainer",
    subtypes: ["Tool"],
    textJa: "このカードをつけている「テラスタル」のポケモンがワザを使うとき、そのワザを使うためのエネルギーは、1個ぶん少なくなる。（少なくなるのは、どのタイプのエネルギーでもよい。）",
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    imageJa: "images/sets/sd100/jp/680.jpg"
  },
  {
    id: "sd100-681",
    setIdJa: "sd100",
    numberJa: "681/742",
    nameJa: "くさりもち",
    supertype: "Trainer",
    subtypes: ["Tool"],
    textJa: "このカードをつけている悪のポケモンが使うワザの、相手のバトルポケモンへのダメージは「+40」される。",
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    imageJa: "images/sets/sd100/jp/681.jpg"
  },
  {
    id: "sd100-682",
    setIdJa: "sd100",
    numberJa: "682/742",
    nameJa: "シロナのパワーウエイト",
    supertype: "Trainer",
    subtypes: ["Tool"],
    textJa: "このカードをつけている「シロナのポケモン」の最大HPは「+70」される。",
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    imageJa: "images/sets/sd100/jp/682.jpg"
  },
  {
    id: "sd100-683",
    setIdJa: "sd100",
    numberJa: "683/742",
    nameJa: "力の砂時計",
    supertype: "Trainer",
    subtypes: ["Tool"],
    textJa: "自分の番の終わりに、このカードをつけているポケモンがバトル場にいるなら、自分のトラッシュから基本エネルギーを1枚選び、そのポケモンにつけてよい。",
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    imageJa: "images/sets/sd100/jp/683.jpg"
  },
  {
    id: "sd100-684",
    setIdJa: "sd100",
    numberJa: "684/742",
    nameJa: "デラックスボム",
    supertype: "Trainer",
    subtypes: ["Tool"],
    textJa: "このカードをつけているポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンにダメカンを12個のせる。その後、このカードをトラッシュする。",
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    imageJa: "images/sets/sd100/jp/684.jpg"
  },
  {
    id: "sd100-685",
    setIdJa: "sd100",
    numberJa: "685/742",
    nameJa: "ナモのみ",
    supertype: "Trainer",
    subtypes: ["Tool"],
    textJa: "このカードをつけているポケモンが、相手の「悪」ポケモンからワザのダメージを受けるとき、そのダメージは「-60」され、このカードをトラッシュする。",
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    imageJa: "images/sets/sd100/jp/685.jpg"
  },
  {
    id: "sd100-686",
    setIdJa: "sd100",
    numberJa: "686/742",
    nameJa: "ハバンのみ",
    supertype: "Trainer",
    subtypes: ["Tool"],
    textJa: "このカードをつけているポケモンが、相手の「ドラゴン」ポケモンからワザのダメージを受けるとき、そのダメージは「-60」され、このカードをトラッシュする。",
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    imageJa: "images/sets/sd100/jp/686.jpg"
  },
  {
    id: "sd100-687",
    setIdJa: "sd100",
    numberJa: "687/742",
    nameJa: "ヒーローマント",
    supertype: "Trainer",
    subtypes: ["Tool"],
    textJa: "このカードをつけているポケモンの最大HPは「+100」される。",
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    imageJa: "images/sets/sd100/jp/687.jpg"
  },
  {
    id: "sd100-688",
    setIdJa: "sd100",
    numberJa: "688/742",
    nameJa: "ふうせん",
    supertype: "Trainer",
    subtypes: ["Tool"],
    textJa: "このカードをつけているポケモンは、にげるためのエネルギーが★エネルギー1個ぶん少なくなり、そのポケモンが使うワザの、相手のバトルポケモンへのダメージは「+30」される。",
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    imageJa: "images/sets/sd100/jp/688.jpg"
  },
  {
    id: "sd100-689",
    setIdJa: "sd100",
    numberJa: "689/742",
    nameJa: "ブレイブバンダル",
    supertype: "Trainer",
    subtypes: ["Tool"],
    textJa: "このカードをつけているポケモン（「ルールを持つポケモン」のぞく）が使うワザの、相手のバトル場の「ポケモンex」へのダメージは「+30」される。",
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    imageJa: "images/sets/sd100/jp/689.jpg"
  },
  {
    id: "sd100-690",
    setIdJa: "sd100",
    numberJa: "690/742",
    nameJa: "ホップのこだわりハチマキ",
    supertype: "Trainer",
    subtypes: ["Tool"],
    textJa: "このカードをつけている「ホップのポケモン」は、ワザを使うためのエネルギーが★エネルギー1個ぶん少なくなり、そのポケモンが使うワザの、相手のバトルポケモンへのダメージは「+30」される。",
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    imageJa: "images/sets/sd100/jp/690.jpg"
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
