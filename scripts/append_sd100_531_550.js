// Append sd100 cards 531-550 to data/cards/sd100.json
// Run: node scripts/append_sd100_531_550.js

const fs = require('fs');

function readJson(p) {
  let s = fs.readFileSync(p, 'utf8');
  if (s.charCodeAt(0) === 0xFEFF) s = s.slice(1);
  return JSON.parse(s);
}

const newCards = [
  {
    id: "sd100-531",
    setIdJa: "sd100",
    numberJa: "531/742",
    nameJa: "ブロロン",
    supertype: "Pokémon",
    subtypes: ["Basic"],
    types: ["Metal"],
    hp: "80",
    abilities: [],
    attacks: [
      { nameJa: "ぶつかる", cost: ["Colorless","Colorless"], convertedEnergyCost: 2, damage: "30", textJa: "" }
    ],
    weaknesses: [{ type: "Fire", value: "×2" }],
    resistances: [{ type: "Grass", value: "-30" }],
    retreatCost: ["Colorless","Colorless"],
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Shiburingaru",
    nationalPokedexNumber: 965,
    imageJa: "images/sets/sd100/jp/531.jpg"
  },
  {
    id: "sd100-532",
    setIdJa: "sd100",
    numberJa: "532/742",
    nameJa: "ブロロローム",
    supertype: "Pokémon",
    subtypes: ["Stage 1"],
    evolvesFrom: "ブロロン",
    types: ["Metal"],
    hp: "150",
    abilities: [],
    attacks: [
      { nameJa: "あらくれダッシュ", cost: ["Metal","Colorless","Colorless"], convertedEnergyCost: 3, damage: "100", textJa: "" }
    ],
    weaknesses: [{ type: "Fire", value: "×2" }],
    resistances: [{ type: "Grass", value: "-30" }],
    retreatCost: ["Colorless","Colorless"],
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "GOSSAN",
    nationalPokedexNumber: 966,
    imageJa: "images/sets/sd100/jp/532.jpg"
  },
  {
    id: "sd100-533",
    setIdJa: "sd100",
    numberJa: "533/742",
    nameJa: "ミミズズex",
    supertype: "Pokémon",
    subtypes: ["Basic","ex"],
    types: ["Metal"],
    hp: "220",
    abilities: [
      { nameJa: "ボコスカがえし", type: "Ability", textJa: "このポケモンが、相手のポケモンからワザのダメージを受けたとき、このポケモンについている♦エネルギーの数×2個ぶんのダメカンを、ワザを使ったポケモンにのせる。" }
    ],
    attacks: [
      { nameJa: "がんせきふうじ", cost: ["Colorless","Colorless","Colorless","Colorless"], convertedEnergyCost: 4, damage: "150", textJa: "次の相手の番、このワザを受けたポケモンは、にげられない。" }
    ],
    weaknesses: [{ type: "Fire", value: "×2" }],
    resistances: [{ type: "Grass", value: "-30" }],
    retreatCost: ["Colorless","Colorless","Colorless","Colorless"],
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "PLANETA Yamashita",
    nationalPokedexNumber: 968,
    imageJa: "images/sets/sd100/jp/533.jpg",
    textJa: "ポケモンexがきぜつしたとき、相手はサイドを2枚とる。"
  },
  {
    id: "sd100-534",
    setIdJa: "sd100",
    numberJa: "534/742",
    nameJa: "サーフゴー",
    supertype: "Pokémon",
    subtypes: ["Stage 1"],
    evolvesFrom: "コレクレー",
    types: ["Metal"],
    hp: "130",
    abilities: [],
    attacks: [
      { nameJa: "リッチストライク", cost: ["Metal"], convertedEnergyCost: 1, damage: "30+", textJa: "この番、このポケモンが「コレクレー」から進化していたなら、90ダメージ追加。" },
      { nameJa: "サーフリターン", cost: ["Colorless","Colorless","Colorless"], convertedEnergyCost: 3, damage: "100", textJa: "のぞむなら、このポケモンと、ついているすべてのカードを、自分の山札にもどして切る。" }
    ],
    weaknesses: [{ type: "Fire", value: "×2" }],
    resistances: [{ type: "Grass", value: "-30" }],
    retreatCost: ["Colorless","Colorless"],
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Dsuke",
    nationalPokedexNumber: 1000,
    imageJa: "images/sets/sd100/jp/534.jpg"
  },
  {
    id: "sd100-535",
    setIdJa: "sd100",
    numberJa: "535/742",
    nameJa: "サーフゴー",
    supertype: "Pokémon",
    subtypes: ["Stage 1"],
    evolvesFrom: "コレクレー",
    types: ["Metal"],
    hp: "130",
    abilities: [],
    attacks: [
      { nameJa: "つかみほうだい", cost: ["Colorless"], convertedEnergyCost: 1, damage: "", textJa: "ウラが出るまでコインを投げ、オモテの数ぶんまで、自分の山札から好きなカードを選び、手札に加える。そして山札を切る。" },
      { nameJa: "スピードアタック", cost: ["Metal","Colorless","Colorless"], convertedEnergyCost: 3, damage: "100", textJa: "" }
    ],
    weaknesses: [{ type: "Fire", value: "×2" }],
    resistances: [{ type: "Grass", value: "-30" }],
    retreatCost: ["Colorless","Colorless"],
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Yukihiro Tada",
    nationalPokedexNumber: 1000,
    imageJa: "images/sets/sd100/jp/535.jpg"
  },
  {
    id: "sd100-536",
    setIdJa: "sd100",
    numberJa: "536/742",
    nameJa: "テツノカシラ",
    supertype: "Pokémon",
    subtypes: ["Basic"],
    types: ["Metal"],
    hp: "130",
    abilities: [],
    attacks: [
      { nameJa: "デリートスラッシュ", cost: ["Metal","Colorless"], convertedEnergyCost: 2, damage: "40+", textJa: "相手のベンチポケモンの数が3匹以上なら、80ダメージ追加。" },
      { nameJa: "スライスブレード", cost: ["Metal","Colorless","Colorless"], convertedEnergyCost: 3, damage: "100", textJa: "" }
    ],
    weaknesses: [{ type: "Fire", value: "×2" }],
    resistances: [{ type: "Grass", value: "-30" }],
    retreatCost: ["Colorless","Colorless"],
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "akagi",
    nationalPokedexNumber: 1023,
    imageJa: "images/sets/sd100/jp/536.jpg"
  },
  {
    id: "sd100-537",
    setIdJa: "sd100",
    numberJa: "537/742",
    nameJa: "アローラナッシーex",
    supertype: "Pokémon",
    subtypes: ["Stage 1","ex","Tera"],
    evolvesFrom: "タマタマ",
    types: ["Dragon"],
    hp: "300",
    abilities: [],
    attacks: [
      { nameJa: "トロピカルフィーバー", cost: ["Grass","Water"], convertedEnergyCost: 2, damage: "150", textJa: "自分の手札から基本エネルギーを好きなだけ選び、自分のポケモンに好きなようにつける。" },
      { nameJa: "ブンブンスフェーン", cost: ["Grass","Water","Colorless"], convertedEnergyCost: 3, damage: "", textJa: "コインを1回投げオモテなら、相手のバトル場のたねポケモンをきぜつさせる。ウラなら、相手のベンチのたねポケモンを1匹選び、きぜつさせる。" }
    ],
    weaknesses: [],
    resistances: [],
    retreatCost: ["Colorless","Colorless","Colorless"],
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "aky CG Works",
    nationalPokedexNumber: 103,
    imageJa: "images/sets/sd100/jp/537.jpg",
    textJa: "このポケモンは、ベンチにいるかぎり、ワザのダメージを受けない。\nポケモンexがきぜつしたとき、相手はサイドを2枚とる。"
  },
  {
    id: "sd100-538",
    setIdJa: "sd100",
    numberJa: "538/742",
    nameJa: "タツベイ",
    supertype: "Pokémon",
    subtypes: ["Basic"],
    types: ["Dragon"],
    hp: "70",
    abilities: [],
    attacks: [
      { nameJa: "かみつく", cost: ["Colorless"], convertedEnergyCost: 1, damage: "10", textJa: "" },
      { nameJa: "とつげき", cost: ["Fire","Water"], convertedEnergyCost: 2, damage: "50", textJa: "このポケモンにも10ダメージ。" }
    ],
    weaknesses: [],
    resistances: [],
    retreatCost: ["Colorless","Colorless"],
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Miki Tanaka",
    nationalPokedexNumber: 371,
    imageJa: "images/sets/sd100/jp/538.jpg"
  },
  {
    id: "sd100-539",
    setIdJa: "sd100",
    numberJa: "539/742",
    nameJa: "コモルー",
    supertype: "Pokémon",
    subtypes: ["Stage 1"],
    evolvesFrom: "タツベイ",
    types: ["Dragon"],
    hp: "100",
    abilities: [],
    attacks: [
      { nameJa: "ガードプレス", cost: ["Colorless","Colorless"], convertedEnergyCost: 2, damage: "30", textJa: "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。" },
      { nameJa: "ヘビーインパクト", cost: ["Fire","Water","Colorless"], convertedEnergyCost: 3, damage: "80", textJa: "" }
    ],
    weaknesses: [],
    resistances: [],
    retreatCost: ["Colorless","Colorless"],
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Julie Hang",
    nationalPokedexNumber: 372,
    imageJa: "images/sets/sd100/jp/539.jpg"
  },
  {
    id: "sd100-540",
    setIdJa: "sd100",
    numberJa: "540/742",
    nameJa: "ボーマンダex",
    supertype: "Pokémon",
    subtypes: ["Stage 2","ex"],
    evolvesFrom: "コモルー",
    types: ["Dragon"],
    hp: "320",
    abilities: [],
    attacks: [
      { nameJa: "ワイドブラスト", cost: ["Fire","Colorless","Colorless"], convertedEnergyCost: 3, damage: "", textJa: "相手のベンチポケモン全員に、それぞれ50ダメージ。[ベンチは弱点・抵抗力を計算しない。]" },
      { nameJa: "ドラゴンインパクト", cost: ["Fire","Water","Colorless","Colorless"], convertedEnergyCost: 4, damage: "300", textJa: "このポケモンについているエネルギーを2個選び、トラッシュする。" }
    ],
    weaknesses: [],
    resistances: [],
    retreatCost: ["Colorless","Colorless"],
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "toriyufu",
    nationalPokedexNumber: 373,
    imageJa: "images/sets/sd100/jp/540.jpg",
    textJa: "ポケモンexがきぜつしたとき、相手はサイドを2枚とる。"
  },
  {
    id: "sd100-541",
    setIdJa: "sd100",
    numberJa: "541/742",
    nameJa: "キバゴ",
    supertype: "Pokémon",
    subtypes: ["Basic"],
    types: ["Dragon"],
    hp: "70",
    abilities: [],
    attacks: [
      { nameJa: "ひっかく", cost: ["Fighting"], convertedEnergyCost: 1, damage: "10", textJa: "" },
      { nameJa: "するどいキバ", cost: ["Fighting","Metal"], convertedEnergyCost: 2, damage: "30", textJa: "" }
    ],
    weaknesses: [],
    resistances: [],
    retreatCost: ["Colorless","Colorless"],
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Orca",
    nationalPokedexNumber: 610,
    imageJa: "images/sets/sd100/jp/541.jpg"
  },
  {
    id: "sd100-542",
    setIdJa: "sd100",
    numberJa: "542/742",
    nameJa: "オノンド",
    supertype: "Pokémon",
    subtypes: ["Stage 1"],
    evolvesFrom: "キバゴ",
    types: ["Dragon"],
    hp: "100",
    abilities: [
      { nameJa: "きんちょうかん", type: "Ability", textJa: "このポケモンは、相手が手札からグッズまたはサポートを出して使ったとき、その効果を受けない。" }
    ],
    attacks: [
      { nameJa: "りゅうのはどう", cost: ["Fighting","Metal"], convertedEnergyCost: 2, damage: "80", textJa: "自分の山札を上から1枚トラッシュする。" }
    ],
    weaknesses: [],
    resistances: [],
    retreatCost: ["Colorless","Colorless"],
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Uninori",
    nationalPokedexNumber: 611,
    imageJa: "images/sets/sd100/jp/542.jpg"
  },
  {
    id: "sd100-543",
    setIdJa: "sd100",
    numberJa: "543/742",
    nameJa: "オノノクス",
    supertype: "Pokémon",
    subtypes: ["Stage 2"],
    evolvesFrom: "オノンド",
    types: ["Dragon"],
    hp: "170",
    abilities: [],
    attacks: [
      { nameJa: "アックスダウン", cost: ["Fighting"], convertedEnergyCost: 1, damage: "", textJa: "相手のバトルポケモンに特殊エネルギーがついているなら、そのポケモンをきぜつさせる。" },
      { nameJa: "りゅうのはどう", cost: ["Fighting","Metal"], convertedEnergyCost: 2, damage: "230", textJa: "自分の山札を上から3枚トラッシュする。" }
    ],
    weaknesses: [],
    resistances: [],
    retreatCost: ["Colorless","Colorless"],
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Tsuyoshi Nagano",
    nationalPokedexNumber: 612,
    imageJa: "images/sets/sd100/jp/543.jpg"
  },
  {
    id: "sd100-544",
    setIdJa: "sd100",
    numberJa: "544/742",
    nameJa: "クリムガン",
    supertype: "Pokémon",
    subtypes: ["Basic"],
    types: ["Dragon"],
    hp: "120",
    abilities: [],
    attacks: [
      { nameJa: "ひきさく", cost: ["Colorless"], convertedEnergyCost: 1, damage: "40", textJa: "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。" },
      { nameJa: "おそいかかる", cost: ["Fire","Water","Colorless"], convertedEnergyCost: 3, damage: "90+", textJa: "コインを1回投げオモテなら、60ダメージ追加。" }
    ],
    weaknesses: [],
    resistances: [],
    retreatCost: ["Colorless","Colorless"],
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Nurikabe",
    nationalPokedexNumber: 621,
    imageJa: "images/sets/sd100/jp/544.jpg"
  },
  {
    id: "sd100-545",
    setIdJa: "sd100",
    numberJa: "545/742",
    nameJa: "Nのレシラム",
    supertype: "Pokémon",
    subtypes: ["Basic"],
    types: ["Dragon"],
    hp: "130",
    abilities: [],
    attacks: [
      { nameJa: "パワーレイジ", cost: ["Fire","Lightning"], convertedEnergyCost: 2, damage: "20×", textJa: "このポケモンにのっているダメカンの数×20ダメージ。" },
      { nameJa: "イノセントフレイム", cost: ["Fire","Fire","Lightning","Colorless"], convertedEnergyCost: 4, damage: "170", textJa: "" }
    ],
    weaknesses: [],
    resistances: [],
    retreatCost: ["Colorless","Colorless"],
    regulationMark: "I",
    rarity: "MC",
    rarityJa: "MC",
    artist: "rika",
    nationalPokedexNumber: 643,
    imageJa: "images/sets/sd100/jp/545.jpg"
  },
  {
    id: "sd100-546",
    setIdJa: "sd100",
    numberJa: "546/742",
    nameJa: "ドラメシヤ",
    supertype: "Pokémon",
    subtypes: ["Basic"],
    types: ["Dragon"],
    hp: "70",
    abilities: [],
    attacks: [
      { nameJa: "ちょっとうらむ", cost: ["Psychic"], convertedEnergyCost: 1, damage: "10", textJa: "" },
      { nameJa: "かみつく", cost: ["Fire","Psychic"], convertedEnergyCost: 2, damage: "40", textJa: "" }
    ],
    weaknesses: [],
    resistances: [],
    retreatCost: ["Colorless"],
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Scav",
    nationalPokedexNumber: 885,
    imageJa: "images/sets/sd100/jp/546.jpg"
  },
  {
    id: "sd100-547",
    setIdJa: "sd100",
    numberJa: "547/742",
    nameJa: "ドロンチ",
    supertype: "Pokémon",
    subtypes: ["Stage 1"],
    evolvesFrom: "ドラメシヤ",
    types: ["Dragon"],
    hp: "90",
    abilities: [
      { nameJa: "ていさつしれい", type: "Ability", textJa: "自分の番に1回使える。自分の山札を上から2枚見て、どちらか1枚を選び、手札に加える。残りのカードは、山札の下にもどす。" }
    ],
    attacks: [
      { nameJa: "リューズヘッド", cost: ["Fire","Psychic"], convertedEnergyCost: 2, damage: "70", textJa: "" }
    ],
    weaknesses: [],
    resistances: [],
    retreatCost: ["Colorless"],
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "cochi8i",
    nationalPokedexNumber: 886,
    imageJa: "images/sets/sd100/jp/547.jpg"
  },
  {
    id: "sd100-548",
    setIdJa: "sd100",
    numberJa: "548/742",
    nameJa: "ドラパルトex",
    supertype: "Pokémon",
    subtypes: ["Stage 2","ex","Tera"],
    evolvesFrom: "ドロンチ",
    types: ["Dragon"],
    hp: "320",
    abilities: [],
    attacks: [
      { nameJa: "ジェットヘッド", cost: ["Colorless"], convertedEnergyCost: 1, damage: "70", textJa: "" },
      { nameJa: "ファントムダイブ", cost: ["Fire","Psychic"], convertedEnergyCost: 2, damage: "200", textJa: "ダメカン6個を、相手のベンチポケモンに好きなようにのせる。" }
    ],
    weaknesses: [],
    resistances: [],
    retreatCost: ["Colorless"],
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "5ban Graphics",
    nationalPokedexNumber: 887,
    imageJa: "images/sets/sd100/jp/548.jpg",
    textJa: "このポケモンは、ベンチにいるかぎり、ワザのダメージを受けない。\nポケモンexがきぜつしたとき、相手はサイドを2枚とる。"
  },
  {
    id: "sd100-549",
    setIdJa: "sd100",
    numberJa: "549/742",
    nameJa: "シャリタツ",
    supertype: "Pokémon",
    subtypes: ["Basic"],
    types: ["Dragon"],
    hp: "70",
    abilities: [
      { nameJa: "きゃくよせ", type: "Ability", textJa: "このポケモンがバトル場にいるなら、自分の番に1回使える。自分の山札を上から6枚見て、その中からサポートを1枚選び、相手に見せて、手札に加える。残りのカードは山札にもどして切る。" }
    ],
    attacks: [
      { nameJa: "なみのり", cost: ["Fire","Water"], convertedEnergyCost: 2, damage: "50", textJa: "" }
    ],
    weaknesses: [],
    resistances: [],
    retreatCost: ["Colorless"],
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Jerky",
    nationalPokedexNumber: 978,
    imageJa: "images/sets/sd100/jp/549.jpg"
  },
  {
    id: "sd100-550",
    setIdJa: "sd100",
    numberJa: "550/742",
    nameJa: "コライドン",
    supertype: "Pokémon",
    subtypes: ["Basic","Ancient"],
    types: ["Dragon"],
    hp: "140",
    abilities: [],
    attacks: [
      { nameJa: "げんせいらんだ", cost: ["Fighting","Colorless"], convertedEnergyCost: 2, damage: "30×", textJa: "自分の場の「古代」のポケモンの数×30ダメージ。" },
      { nameJa: "ひきさく", cost: ["Fire","Fighting","Colorless"], convertedEnergyCost: 3, damage: "130", textJa: "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。" }
    ],
    weaknesses: [],
    resistances: [],
    retreatCost: ["Colorless","Colorless"],
    regulationMark: "H",
    rarity: "MC",
    rarityJa: "MC",
    artist: "Teoziro",
    nationalPokedexNumber: 1007,
    imageJa: "images/sets/sd100/jp/550.jpg"
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
