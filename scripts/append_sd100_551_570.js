// Append sd100 cards 551-570 to data/cards/sd100.json
// Run: node scripts/append_sd100_551_570.js

const fs = require('fs');

function readJson(p) {
  let s = fs.readFileSync(p, 'utf8');
  if (s.charCodeAt(0) === 0xFEFF) s = s.slice(1);
  return JSON.parse(s);
}

const newCards = [
  {
    id: "sd100-551",
    setIdJa: "sd100",
    numberJa: "551/742",
    nameJa: "コライドンex",
    supertype: "Pokémon",
    subtypes: ["Basic","ex","Ancient"],
    types: ["Dragon"],
    hp: "230",
    abilities: [],
    attacks: [
      { nameJa: "ほうふくてっつい", cost: ["Colorless","Colorless"], convertedEnergyCost: 2, damage: "20+", textJa: "このポケモンにのっているダメカンの数×10ダメージ追加。" },
      { nameJa: "カイザータックル", cost: ["Fire","Fighting","Fighting"], convertedEnergyCost: 3, damage: "280", textJa: "このポケモンにも60ダメージ。" }
    ],
    weaknesses: [],
    resistances: [],
    retreatCost: ["Colorless","Colorless"],
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "PLANETA Igarashi",
    nationalPokedexNumber: 1007,
    imageJa: "images/sets/sd100/jp/551.jpg",
    textJa: "ポケモンexがきぜつしたとき、相手はサイドを2枚とる。"
  },
  {
    id: "sd100-552",
    setIdJa: "sd100",
    numberJa: "552/742",
    nameJa: "ミライドン",
    supertype: "Pokémon",
    subtypes: ["Basic","Future"],
    types: ["Dragon"],
    hp: "110",
    abilities: [],
    attacks: [
      { nameJa: "アクセルピーク", cost: ["Colorless"], convertedEnergyCost: 1, damage: "40", textJa: "自分の山札から基本エネルギーを2枚まで選び、自分の「未来」のポケモンに好きなようにつける。そして山札を切る。" },
      { nameJa: "スパーキングアタック", cost: ["Lightning","Lightning","Psychic"], convertedEnergyCost: 3, damage: "160", textJa: "" }
    ],
    weaknesses: [],
    resistances: [],
    retreatCost: ["Colorless","Colorless","Colorless"],
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "GOSSAN",
    nationalPokedexNumber: 1008,
    imageJa: "images/sets/sd100/jp/552.jpg"
  },
  {
    id: "sd100-553",
    setIdJa: "sd100",
    numberJa: "553/742",
    nameJa: "ミライドンex",
    supertype: "Pokémon",
    subtypes: ["Basic","ex","Future"],
    types: ["Dragon"],
    hp: "220",
    abilities: [],
    attacks: [
      { nameJa: "リジェクトボルト", cost: ["Lightning","Psychic"], convertedEnergyCost: 2, damage: "60+", textJa: "相手のバトルポケモンにダメカンがのっているなら、100ダメージ追加。" },
      { nameJa: "サイバードライブ", cost: ["Lightning","Psychic","Colorless"], convertedEnergyCost: 3, damage: "220", textJa: "次の自分の番、このポケモンは「サイバードライブ」が使えない。" }
    ],
    weaknesses: [],
    resistances: [],
    retreatCost: ["Colorless"],
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "PLANETA Mochizuki",
    nationalPokedexNumber: 1008,
    imageJa: "images/sets/sd100/jp/553.jpg",
    textJa: "ポケモンexがきぜつしたとき、相手はサイドを2枚とる。"
  },
  {
    id: "sd100-554",
    setIdJa: "sd100",
    numberJa: "554/742",
    nameJa: "タケルライコex",
    supertype: "Pokémon",
    subtypes: ["Basic","ex","Ancient"],
    types: ["Dragon"],
    hp: "240",
    abilities: [],
    attacks: [
      { nameJa: "はじけるほうこう", cost: ["Colorless"], convertedEnergyCost: 1, damage: "", textJa: "自分の手札をすべてトラッシュし、山札を6枚引く。" },
      { nameJa: "きょくらいいごう", cost: ["Lightning","Fighting"], convertedEnergyCost: 2, damage: "70×", textJa: "自分の場のポケモンについている基本エネルギーを好きなだけトラッシュし、その枚数×70ダメージ。" }
    ],
    weaknesses: [],
    resistances: [],
    retreatCost: ["Colorless","Colorless","Colorless"],
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "aky CG Works",
    nationalPokedexNumber: 1021,
    imageJa: "images/sets/sd100/jp/554.jpg",
    textJa: "ポケモンexがきぜつしたとき、相手はサイドを2枚とる。"
  },
  {
    id: "sd100-555",
    setIdJa: "sd100",
    numberJa: "555/742",
    nameJa: "ロケット団のコラッタ",
    supertype: "Pokémon",
    subtypes: ["Basic"],
    types: ["Colorless"],
    hp: "50",
    abilities: [],
    attacks: [
      { nameJa: "あぶないまえば", cost: ["Colorless"], convertedEnergyCost: 1, damage: "10", textJa: "相手のバトルポケモンをどくにする。" }
    ],
    weaknesses: [{ type: "Fighting", value: "×2" }],
    resistances: [],
    retreatCost: ["Colorless"],
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Dsuke",
    nationalPokedexNumber: 19,
    imageJa: "images/sets/sd100/jp/555.jpg"
  },
  {
    id: "sd100-556",
    setIdJa: "sd100",
    numberJa: "556/742",
    nameJa: "ロケット団のラッタ",
    supertype: "Pokémon",
    subtypes: ["Stage 1"],
    evolvesFrom: "ロケット団のコラッタ",
    types: ["Colorless"],
    hp: "90",
    abilities: [],
    attacks: [
      { nameJa: "むこうみず", cost: ["Colorless"], convertedEnergyCost: 1, damage: "90", textJa: "コインを2回投げ、すべてウラなら、このポケモンにも90ダメージ。" }
    ],
    weaknesses: [{ type: "Fighting", value: "×2" }],
    resistances: [],
    retreatCost: ["Colorless"],
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Uninori",
    nationalPokedexNumber: 20,
    imageJa: "images/sets/sd100/jp/556.jpg"
  },
  {
    id: "sd100-557",
    setIdJa: "sd100",
    numberJa: "557/742",
    nameJa: "オニスズメ",
    supertype: "Pokémon",
    subtypes: ["Basic"],
    types: ["Colorless"],
    hp: "60",
    abilities: [],
    attacks: [
      { nameJa: "ついばむ", cost: ["Colorless"], convertedEnergyCost: 1, damage: "10", textJa: "ダメージを与える前に、相手のバトルポケモンについている「ポケモンのどうぐ」をトラッシュする。" }
    ],
    weaknesses: [{ type: "Lightning", value: "×2" }],
    resistances: [{ type: "Fighting", value: "-30" }],
    retreatCost: ["Colorless"],
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Scav",
    nationalPokedexNumber: 21,
    imageJa: "images/sets/sd100/jp/557.jpg"
  },
  {
    id: "sd100-558",
    setIdJa: "sd100",
    numberJa: "558/742",
    nameJa: "オニドリル",
    supertype: "Pokémon",
    subtypes: ["Stage 1"],
    evolvesFrom: "オニスズメ",
    types: ["Colorless"],
    hp: "100",
    abilities: [],
    attacks: [
      { nameJa: "マシンガンドリル", cost: ["Colorless"], convertedEnergyCost: 1, damage: "30×", textJa: "コインを5回投げ、オモテの数×30ダメージ。" }
    ],
    weaknesses: [{ type: "Lightning", value: "×2" }],
    resistances: [{ type: "Fighting", value: "-30" }],
    retreatCost: ["Colorless"],
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Saboteri",
    nationalPokedexNumber: 22,
    imageJa: "images/sets/sd100/jp/558.jpg"
  },
  {
    id: "sd100-559",
    setIdJa: "sd100",
    numberJa: "559/742",
    nameJa: "ロケット団のニャース",
    supertype: "Pokémon",
    subtypes: ["Basic"],
    types: ["Colorless"],
    hp: "70",
    abilities: [],
    attacks: [
      { nameJa: "ねこばば", cost: ["Colorless"], convertedEnergyCost: 1, damage: "", textJa: "相手の手札からオモテを見ないで1枚選び、そのカードのオモテを見て、相手の山札にもどして切る。" },
      { nameJa: "みだれひっかき", cost: ["Colorless","Colorless"], convertedEnergyCost: 2, damage: "20×", textJa: "コインを3回投げ、オモテの数×20ダメージ。" }
    ],
    weaknesses: [{ type: "Fighting", value: "×2" }],
    resistances: [],
    retreatCost: ["Colorless"],
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Megumi Mizutani",
    nationalPokedexNumber: 52,
    imageJa: "images/sets/sd100/jp/559.jpg"
  },
  {
    id: "sd100-560",
    setIdJa: "sd100",
    numberJa: "560/742",
    nameJa: "ロケット団のペルシアンex",
    supertype: "Pokémon",
    subtypes: ["Stage 1","ex"],
    evolvesFrom: "ロケット団のニャース",
    types: ["Colorless"],
    hp: "260",
    abilities: [],
    attacks: [
      { nameJa: "こうまんしれい", cost: ["Colorless","Colorless"], convertedEnergyCost: 2, damage: "", textJa: "相手の山札を上から10枚オモテにする。のぞむなら、その中にあるポケモンが持つワザを1つ選び、このワザとして使う。オモテにしたカードは山札にもどして切る。" },
      { nameJa: "クルーエルスラッシュ", cost: ["Colorless","Colorless","Colorless"], convertedEnergyCost: 3, damage: "140", textJa: "相手のバトルポケモンをこんらんにする。" }
    ],
    weaknesses: [{ type: "Fighting", value: "×2" }],
    resistances: [],
    retreatCost: ["Colorless","Colorless"],
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "5ban Graphics",
    nationalPokedexNumber: 53,
    imageJa: "images/sets/sd100/jp/560.jpg",
    textJa: "ポケモンexがきぜつしたとき、相手はサイドを2枚とる。"
  },
  {
    id: "sd100-561",
    setIdJa: "sd100",
    numberJa: "561/742",
    nameJa: "ラッキー",
    supertype: "Pokémon",
    subtypes: ["Basic"],
    types: ["Colorless"],
    hp: "120",
    abilities: [],
    attacks: [
      { nameJa: "ラッキーアタッチ", cost: ["Colorless"], convertedEnergyCost: 1, damage: "", textJa: "自分の手札から基本エネルギーを1枚選び、自分のポケモンにつける。" },
      { nameJa: "そこぢから", cost: ["Colorless","Colorless","Colorless"], convertedEnergyCost: 3, damage: "80", textJa: "次の自分の番、このポケモンはワザが使えない。" }
    ],
    weaknesses: [{ type: "Fighting", value: "×2" }],
    resistances: [],
    retreatCost: ["Colorless","Colorless"],
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "HYOGONOSUKE",
    nationalPokedexNumber: 113,
    imageJa: "images/sets/sd100/jp/561.jpg"
  },
  {
    id: "sd100-562",
    setIdJa: "sd100",
    numberJa: "562/742",
    nameJa: "ハピナスex",
    supertype: "Pokémon",
    subtypes: ["Stage 1","ex"],
    evolvesFrom: "ラッキー",
    types: ["Colorless"],
    hp: "300",
    abilities: [
      { nameJa: "ハッピースイッチ", type: "Ability", textJa: "自分の番に1回使える。自分の場のポケモンについている基本エネルギーを1個選び、自分の別のポケモンにつけ替える。" }
    ],
    attacks: [
      { nameJa: "おんがえし", cost: ["Colorless","Colorless","Colorless"], convertedEnergyCost: 3, damage: "180", textJa: "のぞむなら、自分の手札が6枚になるように、山札を引く。" }
    ],
    weaknesses: [{ type: "Fighting", value: "×2" }],
    resistances: [],
    retreatCost: ["Colorless","Colorless","Colorless","Colorless"],
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Iwamoto05",
    nationalPokedexNumber: 242,
    imageJa: "images/sets/sd100/jp/562.jpg",
    textJa: "ポケモンexがきぜつしたとき、相手はサイドを2枚とる。"
  },
  {
    id: "sd100-563",
    setIdJa: "sd100",
    numberJa: "563/742",
    nameJa: "ケンタロス",
    supertype: "Pokémon",
    subtypes: ["Basic"],
    types: ["Colorless"],
    hp: "130",
    abilities: [],
    attacks: [
      { nameJa: "つのでつく", cost: ["Colorless"], convertedEnergyCost: 1, damage: "30", textJa: "" },
      { nameJa: "クリーンヒット", cost: ["Colorless","Colorless"], convertedEnergyCost: 2, damage: "50+", textJa: "相手のバトルポケモンが進化ポケモンなら、50ダメージ追加。" }
    ],
    weaknesses: [{ type: "Fighting", value: "×2" }],
    resistances: [],
    retreatCost: ["Colorless","Colorless"],
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "yuu",
    nationalPokedexNumber: 128,
    imageJa: "images/sets/sd100/jp/563.jpg"
  },
  {
    id: "sd100-564",
    setIdJa: "sd100",
    numberJa: "564/742",
    nameJa: "イーブイ",
    supertype: "Pokémon",
    subtypes: ["Basic"],
    types: ["Colorless"],
    hp: "60",
    abilities: [],
    attacks: [
      { nameJa: "なかまをよぶ", cost: ["Colorless"], convertedEnergyCost: 1, damage: "", textJa: "自分の山札からたねポケモンを1枚選び、ベンチに出す。そして山札を切る。" },
      { nameJa: "かじる", cost: ["Colorless","Colorless"], convertedEnergyCost: 2, damage: "20", textJa: "" }
    ],
    weaknesses: [{ type: "Fighting", value: "×2" }],
    resistances: [],
    retreatCost: ["Colorless"],
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Mina Nakai",
    nationalPokedexNumber: 133,
    imageJa: "images/sets/sd100/jp/564.jpg"
  },
  {
    id: "sd100-565",
    setIdJa: "sd100",
    numberJa: "565/742",
    nameJa: "イーブイ",
    supertype: "Pokémon",
    subtypes: ["Basic"],
    types: ["Colorless"],
    hp: "50",
    abilities: [
      { nameJa: "ブーストしんか", type: "Ability", textJa: "このポケモンは、バトル場にいるかぎり、最初の自分の番や、出したばかりの番でも進化できる。" }
    ],
    attacks: [
      { nameJa: "とつげき", cost: ["Colorless","Colorless"], convertedEnergyCost: 2, damage: "30", textJa: "このポケモンにも10ダメージ。" }
    ],
    weaknesses: [{ type: "Fighting", value: "×2" }],
    resistances: [],
    retreatCost: ["Colorless"],
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Naoyo Kimura",
    nationalPokedexNumber: 133,
    imageJa: "images/sets/sd100/jp/565.jpg"
  },
  {
    id: "sd100-566",
    setIdJa: "sd100",
    numberJa: "566/742",
    nameJa: "イーブイex",
    supertype: "Pokémon",
    subtypes: ["Basic","ex","Tera"],
    types: ["Colorless"],
    hp: "200",
    abilities: [
      { nameJa: "にじいろDNA", type: "Ability", textJa: "このポケモンは、「イーブイ」から進化する「ポケモンex」を手札から出して、このポケモンにのせて進化できる。（最初の自分の番や、出したばかりの番には進化できない。）" }
    ],
    attacks: [
      { nameJa: "クォーツシャイン", cost: ["Fire","Water","Lightning"], convertedEnergyCost: 3, damage: "200", textJa: "" }
    ],
    weaknesses: [{ type: "Fighting", value: "×2" }],
    resistances: [],
    retreatCost: ["Colorless"],
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "aky CG Works",
    nationalPokedexNumber: 133,
    imageJa: "images/sets/sd100/jp/566.jpg",
    textJa: "このポケモンは、ベンチにいるかぎり、ワザのダメージを受けない。\nポケモンexがきぜつしたとき、相手はサイドを2枚とる。"
  },
  {
    id: "sd100-567",
    setIdJa: "sd100",
    numberJa: "567/742",
    nameJa: "カビゴン",
    supertype: "Pokémon",
    subtypes: ["Basic"],
    types: ["Colorless"],
    hp: "160",
    abilities: [],
    attacks: [
      { nameJa: "はらごしらえ", cost: ["Colorless"], convertedEnergyCost: 1, damage: "", textJa: "自分の手札からエネルギーを1枚選び、このポケモンにつける。その後、このポケモンのHPを「60」回復する。" },
      { nameJa: "ヘビーインパクト", cost: ["Colorless","Colorless","Colorless","Colorless","Colorless"], convertedEnergyCost: 5, damage: "160", textJa: "" }
    ],
    weaknesses: [{ type: "Fighting", value: "×2" }],
    resistances: [],
    retreatCost: ["Colorless","Colorless","Colorless","Colorless"],
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Souichirou Gunjima",
    nationalPokedexNumber: 143,
    imageJa: "images/sets/sd100/jp/567.jpg"
  },
  {
    id: "sd100-568",
    setIdJa: "sd100",
    numberJa: "568/742",
    nameJa: "カビゴン",
    supertype: "Pokémon",
    subtypes: ["Basic"],
    types: ["Colorless"],
    hp: "160",
    abilities: [],
    attacks: [
      { nameJa: "ぐうたらプレス", cost: ["Colorless","Colorless","Colorless","Colorless"], convertedEnergyCost: 4, damage: "120", textJa: "" }
    ],
    weaknesses: [{ type: "Fighting", value: "×2" }],
    resistances: [],
    retreatCost: ["Colorless","Colorless","Colorless"],
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Po-Suzuki",
    nationalPokedexNumber: 143,
    imageJa: "images/sets/sd100/jp/568.jpg"
  },
  {
    id: "sd100-569",
    setIdJa: "sd100",
    numberJa: "569/742",
    nameJa: "ホップのカビゴン",
    supertype: "Pokémon",
    subtypes: ["Basic"],
    types: ["Colorless"],
    hp: "150",
    abilities: [
      { nameJa: "ふとっぱら", type: "Ability", textJa: "このポケモンがいるかぎり、自分の「ホップのポケモン」が使うワザの、相手のバトルポケモンへのダメージは「+30」される。この効果は、この特性を持つポケモンが何匹いても、重ならない。" }
    ],
    attacks: [
      { nameJa: "ダイナミックプレス", cost: ["Colorless","Colorless","Colorless"], convertedEnergyCost: 3, damage: "140", textJa: "このポケモンにも80ダメージ。" }
    ],
    weaknesses: [{ type: "Fighting", value: "×2" }],
    resistances: [],
    retreatCost: ["Colorless","Colorless","Colorless","Colorless"],
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "GOSSAN",
    nationalPokedexNumber: 143,
    imageJa: "images/sets/sd100/jp/569.jpg"
  },
  {
    id: "sd100-570",
    setIdJa: "sd100",
    numberJa: "570/742",
    nameJa: "オタチ",
    supertype: "Pokémon",
    subtypes: ["Basic"],
    types: ["Colorless"],
    hp: "60",
    abilities: [],
    attacks: [
      { nameJa: "ひらてうち", cost: ["Colorless"], convertedEnergyCost: 1, damage: "20", textJa: "" }
    ],
    weaknesses: [{ type: "Fighting", value: "×2" }],
    resistances: [],
    retreatCost: ["Colorless"],
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Taiga Kayama",
    nationalPokedexNumber: 161,
    imageJa: "images/sets/sd100/jp/570.jpg"
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
