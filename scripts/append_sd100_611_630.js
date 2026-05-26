// Append sd100 cards 611-630 to data/cards/sd100.json
// Run: node scripts/append_sd100_611_630.js

const fs = require('fs');

function readJson(p) {
  let s = fs.readFileSync(p, 'utf8');
  if (s.charCodeAt(0) === 0xFEFF) s = s.slice(1);
  return JSON.parse(s);
}

const newCards = [
  {
    id: "sd100-611",
    setIdJa: "sd100",
    numberJa: "611/742",
    nameJa: "トリミアン",
    supertype: "Pokémon",
    subtypes: ["Basic"],
    types: ["Colorless"],
    hp: "100",
    abilities: [],
    attacks: [
      { nameJa: "エネアシスト", cost: ["Colorless"], convertedEnergyCost: 1, damage: "", textJa: "自分のトラッシュから基本エネルギーを1枚選び、ベンチポケモンにつける。" }
    ],
    weaknesses: [{ type: "Fighting", value: "×2" }],
    resistances: [],
    retreatCost: ["Colorless"],
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Shinya Komatsu",
    nationalPokedexNumber: 676,
    imageJa: "images/sets/sd100/jp/611.jpg"
  },
  {
    id: "sd100-612",
    setIdJa: "sd100",
    numberJa: "612/742",
    nameJa: "トリミアン",
    supertype: "Pokémon",
    subtypes: ["Basic"],
    types: ["Colorless"],
    hp: "100",
    abilities: [
      { nameJa: "ファーコート", type: "Ability", textJa: "このポケモンが受けるワザのダメージは「-20」される。" }
    ],
    attacks: [
      { nameJa: "かみつく", cost: ["Colorless","Colorless","Colorless"], convertedEnergyCost: 3, damage: "80", textJa: "" }
    ],
    weaknesses: [{ type: "Fighting", value: "×2" }],
    resistances: [],
    retreatCost: ["Colorless"],
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Keisin",
    nationalPokedexNumber: 676,
    imageJa: "images/sets/sd100/jp/612.jpg"
  },
  {
    id: "sd100-613",
    setIdJa: "sd100",
    numberJa: "613/742",
    nameJa: "ルチャブル",
    supertype: "Pokémon",
    subtypes: ["Basic"],
    types: ["Colorless"],
    hp: "80",
    abilities: [
      { nameJa: "ライジングタックル", type: "Ability", textJa: "相手のバトルポケモンが「ポケモンex」なら、50ダメージ追加。" }
    ],
    attacks: [],
    weaknesses: [{ type: "Lightning", value: "×2" }],
    resistances: [{ type: "Fighting", value: "-30" }],
    retreatCost: ["Colorless"],
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "KEIICHIRO ITO",
    nationalPokedexNumber: 701,
    imageJa: "images/sets/sd100/jp/613.jpg"
  },
  {
    id: "sd100-614",
    setIdJa: "sd100",
    numberJa: "614/742",
    nameJa: "オンバット",
    supertype: "Pokémon",
    subtypes: ["Basic"],
    types: ["Colorless"],
    hp: "60",
    abilities: [],
    attacks: [
      { nameJa: "クイックドロー", cost: ["Colorless"], convertedEnergyCost: 1, damage: "10", textJa: "自分の山札を1枚引く。" }
    ],
    weaknesses: [{ type: "Lightning", value: "×2" }],
    resistances: [{ type: "Fighting", value: "-30" }],
    retreatCost: ["Colorless"],
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Tomokazu Komiya",
    nationalPokedexNumber: 714,
    imageJa: "images/sets/sd100/jp/614.jpg"
  },
  {
    id: "sd100-615",
    setIdJa: "sd100",
    numberJa: "615/742",
    nameJa: "オンバーン",
    supertype: "Pokémon",
    subtypes: ["Stage 1"],
    evolvesFrom: "オンバット",
    types: ["Colorless"],
    hp: "110",
    abilities: [
      { nameJa: "チューニングエコー", type: "Ability", textJa: "自分の手札と相手の手札が同じ枚数なら、このポケモンが「パニックハウル」を使うためのエネルギーは、すべてなくなる。" }
    ],
    attacks: [
      { nameJa: "パニックハウル", cost: ["Colorless","Colorless","Colorless"], convertedEnergyCost: 3, damage: "110", textJa: "相手のバトルポケモンを「こんらん」にする。" }
    ],
    weaknesses: [{ type: "Lightning", value: "×2" }],
    resistances: [{ type: "Fighting", value: "-30" }],
    retreatCost: [],
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Anesaki Dynamic",
    nationalPokedexNumber: 715,
    imageJa: "images/sets/sd100/jp/615.jpg"
  },
  {
    id: "sd100-616",
    setIdJa: "sd100",
    numberJa: "616/742",
    nameJa: "ヌイコグマ",
    supertype: "Pokémon",
    subtypes: ["Basic"],
    types: ["Colorless"],
    hp: "80",
    abilities: [],
    attacks: [
      { nameJa: "とっしん", cost: ["Colorless"], convertedEnergyCost: 1, damage: "30", textJa: "このポケモンにも10ダメージ。" }
    ],
    weaknesses: [{ type: "Fighting", value: "×2" }],
    resistances: [],
    retreatCost: ["Colorless","Colorless"],
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "ryoma uratsuka",
    nationalPokedexNumber: 759,
    imageJa: "images/sets/sd100/jp/616.jpg"
  },
  {
    id: "sd100-617",
    setIdJa: "sd100",
    numberJa: "617/742",
    nameJa: "キテルグマ",
    supertype: "Pokémon",
    subtypes: ["Stage 1"],
    evolvesFrom: "ヌイコグマ",
    types: ["Colorless"],
    hp: "130",
    abilities: [],
    attacks: [
      { nameJa: "パワーチャージ", cost: ["Colorless"], convertedEnergyCost: 1, damage: "30", textJa: "自分の山札から基本エネルギーを1枚選び、このポケモンにつける。そして山札を切る。" },
      { nameJa: "ぶちかます", cost: ["Colorless","Colorless","Colorless"], convertedEnergyCost: 3, damage: "130", textJa: "" }
    ],
    weaknesses: [{ type: "Fighting", value: "×2" }],
    resistances: [],
    retreatCost: ["Colorless","Colorless","Colorless"],
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Takeshi Nakamura",
    nationalPokedexNumber: 760,
    imageJa: "images/sets/sd100/jp/617.jpg"
  },
  {
    id: "sd100-618",
    setIdJa: "sd100",
    numberJa: "618/742",
    nameJa: "ヤレユータン",
    supertype: "Pokémon",
    subtypes: ["Basic"],
    types: ["Colorless"],
    hp: "120",
    abilities: [
      { nameJa: "よわみをにぎる", type: "Ability", textJa: "次の自分の番の終わりまで、このワザを受けたポケモンの弱点は★タイプになる。[弱点は「×2」でダメージ計算する。]" }
    ],
    attacks: [
      { nameJa: "ひらてうち", cost: ["Colorless","Colorless","Colorless"], convertedEnergyCost: 3, damage: "80", textJa: "" }
    ],
    weaknesses: [{ type: "Fighting", value: "×2" }],
    resistances: [],
    retreatCost: ["Colorless","Colorless"],
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Saboteri",
    nationalPokedexNumber: 765,
    imageJa: "images/sets/sd100/jp/618.jpg"
  },
  {
    id: "sd100-619",
    setIdJa: "sd100",
    numberJa: "619/742",
    nameJa: "アオキのネッコアラ",
    supertype: "Pokémon",
    subtypes: ["Basic"],
    types: ["Colorless"],
    hp: "90",
    abilities: [
      { nameJa: "むきりょくチャージ", type: "Ability", textJa: "このポケモンがベンチにいるなら、自分の番に1回使える。自分の手札からエネルギーを1枚選び、バトル場の「アオキのポケモン」につける。" }
    ],
    attacks: [
      { nameJa: "いねむりドロー", cost: ["Colorless","Colorless"], convertedEnergyCost: 2, damage: "", textJa: "このポケモンをねむりにする。自分の山札を2枚引く。" }
    ],
    weaknesses: [{ type: "Fighting", value: "×2" }],
    resistances: [],
    retreatCost: ["Colorless","Colorless"],
    regulationMark: "J",
    rarity: "MC",
    rarityJa: "MC",
    artist: "ryoma uratsuka",
    nationalPokedexNumber: 775,
    imageJa: "images/sets/sd100/jp/619.jpg"
  },
  {
    id: "sd100-620",
    setIdJa: "sd100",
    numberJa: "620/742",
    nameJa: "ジジーロン",
    supertype: "Pokémon",
    subtypes: ["Basic"],
    types: ["Colorless"],
    hp: "120",
    abilities: [],
    attacks: [
      { nameJa: "ぶつかる", cost: ["Colorless"], convertedEnergyCost: 1, damage: "30", textJa: "" },
      { nameJa: "ドラゴンクロー", cost: ["Colorless","Colorless"], convertedEnergyCost: 2, damage: "50", textJa: "" }
    ],
    weaknesses: [{ type: "Fighting", value: "×2" }],
    resistances: [],
    retreatCost: ["Colorless","Colorless"],
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Tetsu Kayama",
    nationalPokedexNumber: 780,
    imageJa: "images/sets/sd100/jp/620.jpg"
  },
  {
    id: "sd100-621",
    setIdJa: "sd100",
    numberJa: "621/742",
    nameJa: "ジジーロン",
    supertype: "Pokémon",
    subtypes: ["Basic"],
    types: ["Colorless"],
    hp: "130",
    abilities: [],
    attacks: [
      { nameJa: "ひっぱたく", cost: ["Colorless","Colorless"], convertedEnergyCost: 2, damage: "50", textJa: "" },
      { nameJa: "ドラゴンストライク", cost: ["Colorless","Colorless","Colorless"], convertedEnergyCost: 3, damage: "120", textJa: "次の自分の番、このポケモンは「ドラゴンストライク」が使えない。" }
    ],
    weaknesses: [{ type: "Fighting", value: "×2" }],
    resistances: [],
    retreatCost: ["Colorless","Colorless"],
    regulationMark: "J",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Scav",
    nationalPokedexNumber: 780,
    imageJa: "images/sets/sd100/jp/621.jpg"
  },
  {
    id: "sd100-622",
    setIdJa: "sd100",
    numberJa: "622/742",
    nameJa: "ホップのコガラス",
    supertype: "Pokémon",
    subtypes: ["Basic"],
    types: ["Colorless"],
    hp: "60",
    abilities: [],
    attacks: [
      { nameJa: "ごわいしせん", cost: ["Colorless"], convertedEnergyCost: 1, damage: "", textJa: "次の相手の番、このワザを受けたポケモンが使うワザのダメージは「-20」される。" },
      { nameJa: "つつく", cost: ["Colorless","Colorless"], convertedEnergyCost: 2, damage: "20", textJa: "" }
    ],
    weaknesses: [{ type: "Lightning", value: "×2" }],
    resistances: [{ type: "Fighting", value: "-30" }],
    retreatCost: ["Colorless"],
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Shinya Mizuno",
    nationalPokedexNumber: 821,
    imageJa: "images/sets/sd100/jp/622.jpg"
  },
  {
    id: "sd100-623",
    setIdJa: "sd100",
    numberJa: "623/742",
    nameJa: "ホップのアオガラス",
    supertype: "Pokémon",
    subtypes: ["Stage 1"],
    evolvesFrom: "ホップのコガラス",
    types: ["Colorless"],
    hp: "90",
    abilities: [],
    attacks: [
      { nameJa: "スピードひこう", cost: ["Colorless"], convertedEnergyCost: 1, damage: "30", textJa: "" },
      { nameJa: "するどいはね", cost: ["Colorless","Colorless","Colorless"], convertedEnergyCost: 3, damage: "80", textJa: "" }
    ],
    weaknesses: [{ type: "Lightning", value: "×2" }],
    resistances: [{ type: "Fighting", value: "-30" }],
    retreatCost: [],
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Souichirou Gunjima",
    nationalPokedexNumber: 822,
    imageJa: "images/sets/sd100/jp/623.jpg"
  },
  {
    id: "sd100-624",
    setIdJa: "sd100",
    numberJa: "624/742",
    nameJa: "ホップのウッウ",
    supertype: "Pokémon",
    subtypes: ["Basic"],
    types: ["Colorless"],
    hp: "110",
    abilities: [],
    attacks: [
      { nameJa: "きまぐれスピット", cost: ["Colorless"], convertedEnergyCost: 1, damage: "120", textJa: "相手のサイドの残り枚数が4枚・3枚でないなら、このワザは失敗。" }
    ],
    weaknesses: [{ type: "Lightning", value: "×2" }],
    resistances: [{ type: "Fighting", value: "-30" }],
    retreatCost: ["Colorless"],
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Saboteri",
    nationalPokedexNumber: 845,
    imageJa: "images/sets/sd100/jp/624.jpg"
  },
  {
    id: "sd100-625",
    setIdJa: "sd100",
    numberJa: "625/742",
    nameJa: "ガチグマ（アカツキのすがた）ex",
    supertype: "Pokémon",
    subtypes: ["Basic","ex"],
    types: ["Colorless"],
    hp: "260",
    abilities: [
      { nameJa: "アカツキのちから", type: "Ability", textJa: "相手がとったサイドの枚数ぶん、このポケモンが「ブラッドムーン」を使うためのエネルギーはなくなる。" }
    ],
    attacks: [
      { nameJa: "ブラッドムーン", cost: ["Colorless","Colorless","Colorless","Colorless","Colorless"], convertedEnergyCost: 5, damage: "240", textJa: "次の自分の番、このポケモンはワザが使えない。" }
    ],
    weaknesses: [{ type: "Fighting", value: "×2" }],
    resistances: [],
    retreatCost: ["Colorless","Colorless","Colorless"],
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "aky CG Works",
    nationalPokedexNumber: 901,
    imageJa: "images/sets/sd100/jp/625.jpg",
    textJa: "ポケモンexがきぜつしたとき、相手はサイドを2枚とる。"
  },
  {
    id: "sd100-626",
    setIdJa: "sd100",
    numberJa: "626/742",
    nameJa: "イキリンコ",
    supertype: "Pokémon",
    subtypes: ["Basic"],
    types: ["Colorless"],
    hp: "70",
    abilities: [],
    attacks: [
      { nameJa: "くわえる", cost: ["Colorless"], convertedEnergyCost: 1, damage: "", textJa: "自分の山札を2枚引く。" },
      { nameJa: "ハイパーボイス", cost: ["Colorless","Colorless"], convertedEnergyCost: 2, damage: "40", textJa: "" }
    ],
    weaknesses: [{ type: "Lightning", value: "×2" }],
    resistances: [{ type: "Fighting", value: "-30" }],
    retreatCost: ["Colorless"],
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "sowsow",
    nationalPokedexNumber: 931,
    imageJa: "images/sets/sd100/jp/626.jpg"
  },
  {
    id: "sd100-627",
    setIdJa: "sd100",
    numberJa: "627/742",
    nameJa: "モトトカゲ",
    supertype: "Pokémon",
    subtypes: ["Basic"],
    types: ["Colorless"],
    hp: "110",
    abilities: [],
    attacks: [
      { nameJa: "しっぽのムチ", cost: ["Colorless"], convertedEnergyCost: 1, damage: "10", textJa: "" },
      { nameJa: "スピードアタック", cost: ["Colorless","Colorless"], convertedEnergyCost: 2, damage: "50", textJa: "" }
    ],
    weaknesses: [{ type: "Fighting", value: "×2" }],
    resistances: [],
    retreatCost: ["Colorless","Colorless"],
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Nurikabe",
    nationalPokedexNumber: 967,
    imageJa: "images/sets/sd100/jp/627.jpg"
  },
  {
    id: "sd100-628",
    setIdJa: "sd100",
    numberJa: "628/742",
    nameJa: "テッコウベ",
    supertype: "Pokémon",
    subtypes: ["Basic"],
    types: ["Colorless"],
    hp: "130",
    abilities: [
      { nameJa: "オートマージャル", type: "Ability", textJa: "このポケモンが、バトル場で相手のポケモンから50ダメージ以上受けたとき、このポケモンは「ブラストウインド」を使うことができる。" }
    ],
    attacks: [
      { nameJa: "ブラストウインド", cost: ["Colorless","Colorless","Colorless"], convertedEnergyCost: 3, damage: "110", textJa: "" }
    ],
    weaknesses: [{ type: "Lightning", value: "×2" }],
    resistances: [],
    retreatCost: ["Colorless","Colorless","Colorless"],
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "KEIICHIRO ITO",
    nationalPokedexNumber: 1023,
    imageJa: "images/sets/sd100/jp/628.jpg"
  },
  {
    id: "sd100-629",
    setIdJa: "sd100",
    numberJa: "629/742",
    nameJa: "テラパゴス",
    supertype: "Pokémon",
    subtypes: ["Basic"],
    types: ["Colorless"],
    hp: "120",
    abilities: [],
    attacks: [
      { nameJa: "プリズムチャージ", cost: ["Colorless"], convertedEnergyCost: 1, damage: "", textJa: "自分の山札から、それぞれちがうタイプの基本エネルギーを3枚まで選び、自分の「テラスタル」のポケモンに好きなようにつける。そして山札を切る。" },
      { nameJa: "ハードタックル", cost: ["Colorless","Colorless","Colorless"], convertedEnergyCost: 3, damage: "100", textJa: "" }
    ],
    weaknesses: [{ type: "Fighting", value: "×2" }],
    resistances: [],
    retreatCost: ["Colorless","Colorless"],
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "GIDORA",
    nationalPokedexNumber: 1024,
    imageJa: "images/sets/sd100/jp/629.jpg"
  },
  {
    id: "sd100-630",
    setIdJa: "sd100",
    numberJa: "630/742",
    nameJa: "テラパゴスex",
    supertype: "Pokémon",
    subtypes: ["Basic","ex","Tera"],
    types: ["Colorless"],
    hp: "230",
    abilities: [],
    attacks: [
      { nameJa: "ユニオンビート", cost: ["Colorless","Colorless"], convertedEnergyCost: 2, damage: "30×", textJa: "このワザは、先攻プレイヤーの最初の番には使えない。自分のベンチポケモンの数×30ダメージ。" },
      { nameJa: "クラウンオーバル", cost: ["Grass","Water","Lightning"], convertedEnergyCost: 3, damage: "180", textJa: "次の相手の番、このポケモンはワザのダメージや効果を受けない。" }
    ],
    weaknesses: [{ type: "Fighting", value: "×2" }],
    resistances: [],
    retreatCost: ["Colorless","Colorless"],
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Shen Gegunxi",
    nationalPokedexNumber: 1024,
    imageJa: "images/sets/sd100/jp/630.jpg",
    textJa: "このポケモンは、ベンチにいるかぎり、ワザのダメージを受けない。\nポケモンexがきぜつしたとき、相手はサイドを2枚とる。"
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
