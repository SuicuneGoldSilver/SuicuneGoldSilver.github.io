// Append Phase 1 data for sd100 cards 451-470
// Run from project root: node scripts/append_sd100_451_470.js
const fs = require('fs');

function readJson(p) {
  let s = fs.readFileSync(p, 'utf8');
  if (s.charCodeAt(0) === 0xFEFF) s = s.slice(1);
  return JSON.parse(s);
}

const newCards = [
  {
    id: "sd100-451", setIdJa: "sd100", setIdEn: "ascendedheroes",
    numberJa: "451/742", numberEn: null, nameJa: "ポチエナ", nameEn: null,
    supertype: "Pokémon", subtypes: ["Basic"], types: ["Darkness"],
    hp: 70, evolvesFrom: null, abilities: [],
    attacks: [{ nameJa: "かじりつくす", nameEn: null, cost: ["Darkness","Colorless"], convertedEnergyCost: 2, damage: "30+", textJa: "コインを1回投げオモテなら、20ダメージ追加。", textEn: null }],
    weaknesses: [{ type: "Grass", value: "×2" }], resistances: [], retreatCost: ["Colorless"],
    regulationMark: "H", rarity: "Common", rarityJa: "MC", artist: "Miki Tanaka",
    nationalPokedexNumber: 261, imageJa: "images/sets/sd100/jp/451.jpg", imageEn: "images/sets/sd100/en/451.jpg", textJa: null, textEn: null, enAvailable: true
  },
  {
    id: "sd100-452", setIdJa: "sd100", setIdEn: "ascendedheroes",
    numberJa: "452/742", numberEn: null, nameJa: "グラエナ", nameEn: null,
    supertype: "Pokémon", subtypes: ["Stage 1"], types: ["Darkness"],
    hp: 120, evolvesFrom: "ポチエナ", abilities: [],
    attacks: [
      { nameJa: "けりとばす", nameEn: null, cost: ["Darkness","Colorless"], convertedEnergyCost: 2, damage: "50", textJa: "相手のバトルポケモンをベンチポケモンと入れ替える。[バトル場に出すポケモンは相手が選ぶ。]", textEn: null },
      { nameJa: "するどいキバ", nameEn: null, cost: ["Darkness","Darkness","Colorless"], convertedEnergyCost: 3, damage: "130", textJa: "", textEn: null }
    ],
    weaknesses: [{ type: "Grass", value: "×2" }], resistances: [], retreatCost: ["Colorless","Colorless"],
    regulationMark: "H", rarity: "Uncommon", rarityJa: "MC", artist: "akagi",
    nationalPokedexNumber: 262, imageJa: "images/sets/sd100/jp/452.jpg", imageEn: "images/sets/sd100/en/452.jpg", textJa: null, textEn: null, enAvailable: true
  },
  {
    id: "sd100-453", setIdJa: "sd100", setIdEn: "temporalforces",
    numberJa: "453/742", numberEn: null, nameJa: "ヤミラミ", nameEn: null,
    supertype: "Pokémon", subtypes: ["Basic"], types: ["Darkness"],
    hp: 70, evolvesFrom: null, abilities: [],
    attacks: [
      { nameJa: "ツメできりさく", nameEn: null, cost: ["Darkness"], convertedEnergyCost: 1, damage: "20", textJa: "", textEn: null },
      { nameJa: "ダメージコレクト", nameEn: null, cost: ["Colorless","Colorless"], convertedEnergyCost: 2, damage: "", textJa: "相手のベンチポケモンにのっているダメカンを好きなだけ選び、相手のバトルポケモンにのせ替える。", textEn: null }
    ],
    weaknesses: [{ type: "Grass", value: "×2" }], resistances: [], retreatCost: ["Colorless"],
    regulationMark: "H", rarity: "Common", rarityJa: "MC", artist: "0313",
    nationalPokedexNumber: 302, imageJa: "images/sets/sd100/jp/453.jpg", imageEn: "images/sets/sd100/en/453.jpg", textJa: null, textEn: null, enAvailable: true
  },
  {
    id: "sd100-454", setIdJa: "sd100", setIdEn: "shroudedfable",
    numberJa: "454/742", numberEn: null, nameJa: "アブソル", nameEn: null,
    supertype: "Pokémon", subtypes: ["Basic"], types: ["Darkness"],
    hp: 110, evolvesFrom: null, abilities: [],
    attacks: [
      { nameJa: "バッドフォール", nameEn: null, cost: ["Colorless"], convertedEnergyCost: 1, damage: "20+", textJa: "自分の場に●エネルギーが3個以上あるなら、50ダメージ追加。", textEn: null }
    ],
    weaknesses: [{ type: "Grass", value: "×2" }], resistances: [], retreatCost: ["Colorless"],
    regulationMark: "H", rarity: "Common", rarityJa: "MC", artist: "rika",
    nationalPokedexNumber: 359, imageJa: "images/sets/sd100/jp/454.jpg", imageEn: "images/sets/sd100/en/454.jpg", textJa: null, textEn: null, enAvailable: true
  },
  {
    id: "sd100-455", setIdJa: "sd100", setIdEn: "paldeanfates",
    numberJa: "455/742", numberEn: null, nameJa: "ミカルゲ", nameEn: null,
    supertype: "Pokémon", subtypes: ["Basic"], types: ["Darkness"],
    hp: 80, evolvesFrom: null,
    abilities: [{ nameJa: "うらみのうす", nameEn: null, type: "Ability", textJa: "このポケモンがいるかぎり、自分のバトル場の●ポケモンが、相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンにダメカンを1個のせる。", textEn: null }],
    attacks: [{ nameJa: "やまくずし", nameEn: null, cost: ["Darkness"], convertedEnergyCost: 1, damage: "10", textJa: "相手の山札を上から1枚トラッシュする。", textEn: null }],
    weaknesses: [{ type: "Grass", value: "×2" }], resistances: [], retreatCost: ["Colorless"],
    regulationMark: "I", rarity: "Common", rarityJa: "MC", artist: "mingo",
    nationalPokedexNumber: 442, imageJa: "images/sets/sd100/jp/455.jpg", imageEn: "images/sets/sd100/en/455.jpg", textJa: null, textEn: null, enAvailable: true
  },
  {
    id: "sd100-456", setIdJa: "sd100", setIdEn: null,
    numberJa: "456/742", numberEn: null, nameJa: "ダークライex", nameEn: null,
    supertype: "Pokémon", subtypes: ["Basic","ex"], types: ["Darkness"],
    hp: 210, evolvesFrom: null, abilities: [],
    attacks: [
      { nameJa: "やみのかぜ", nameEn: null, cost: ["Darkness","Colorless"], convertedEnergyCost: 2, damage: "40", textJa: "", textEn: null },
      { nameJa: "ナイトインパクト", nameEn: null, cost: ["Darkness","Darkness","Colorless"], convertedEnergyCost: 3, damage: "110", textJa: "", textEn: null }
    ],
    weaknesses: [{ type: "Grass", value: "×2" }], resistances: [], retreatCost: ["Colorless","Colorless"],
    regulationMark: "H", rarity: "Double Rare", rarityJa: "MC", artist: "5ban Graphics",
    nationalPokedexNumber: 491, imageJa: "images/sets/sd100/jp/456.jpg", imageEn: null,
    textJa: "ポケモンexがきぜつしたとき、相手はサイドを2枚とる。", textEn: null, enAvailable: false
  },
  {
    id: "sd100-457", setIdJa: "sd100", setIdEn: "journeytogether",
    numberJa: "457/742", numberEn: null, nameJa: "Nのチョロネコ", nameEn: null,
    supertype: "Pokémon", subtypes: ["Basic"], types: ["Darkness"],
    hp: 70, evolvesFrom: null, abilities: [],
    attacks: [{ nameJa: "ちょろまかす", nameEn: null, cost: ["Darkness","Colorless"], convertedEnergyCost: 2, damage: "30", textJa: "相手の手札を見て、その中からカードを1枚選び、相手の山札の下にもどす。", textEn: null }],
    weaknesses: [{ type: "Grass", value: "×2" }], resistances: [], retreatCost: ["Colorless"],
    regulationMark: "I", rarity: "Common", rarityJa: "MC", artist: "Keisin",
    nationalPokedexNumber: 509, imageJa: "images/sets/sd100/jp/457.jpg", imageEn: "images/sets/sd100/en/457.jpg", textJa: null, textEn: null, enAvailable: true
  },
  {
    id: "sd100-458", setIdJa: "sd100", setIdEn: "destinedrivals",
    numberJa: "458/742", numberEn: null, nameJa: "マリィのチョロネコ", nameEn: null,
    supertype: "Pokémon", subtypes: ["Basic"], types: ["Darkness"],
    hp: 60, evolvesFrom: null, abilities: [],
    attacks: [{ nameJa: "シャープネイル", nameEn: null, cost: ["Darkness"], convertedEnergyCost: 1, damage: "20+", textJa: "相手のバトルポケモンが「ポケモンex」なら、40ダメージ追加。", textEn: null }],
    weaknesses: [{ type: "Grass", value: "×2" }], resistances: [], retreatCost: ["Colorless"],
    regulationMark: "I", rarity: "Common", rarityJa: "MC", artist: "REND",
    nationalPokedexNumber: 509, imageJa: "images/sets/sd100/jp/458.jpg", imageEn: "images/sets/sd100/en/458.jpg", textJa: null, textEn: null, enAvailable: true
  },
  {
    id: "sd100-459", setIdJa: "sd100", setIdEn: "destinedrivals",
    numberJa: "459/742", numberEn: null, nameJa: "マリィのレパルダス", nameEn: null,
    supertype: "Pokémon", subtypes: ["Stage 1"], types: ["Darkness"],
    hp: 100, evolvesFrom: "マリィのチョロネコ", abilities: [],
    attacks: [{ nameJa: "シャープクロー", nameEn: null, cost: ["Darkness","Darkness"], convertedEnergyCost: 2, damage: "70+", textJa: "相手のバトルポケモンが「ポケモンex」なら、70ダメージ追加。", textEn: null }],
    weaknesses: [{ type: "Grass", value: "×2" }], resistances: [], retreatCost: ["Colorless"],
    regulationMark: "I", rarity: "Uncommon", rarityJa: "MC", artist: "Hasuno",
    nationalPokedexNumber: 510, imageJa: "images/sets/sd100/jp/459.jpg", imageEn: "images/sets/sd100/en/459.jpg", textJa: null, textEn: null, enAvailable: true
  },
  {
    id: "sd100-460", setIdJa: "sd100", setIdEn: "twilightmasquerade",
    numberJa: "460/742", numberEn: null, nameJa: "フシデ", nameEn: null,
    supertype: "Pokémon", subtypes: ["Basic"], types: ["Darkness"],
    hp: 80, evolvesFrom: null, abilities: [],
    attacks: [
      { nameJa: "どくえき", nameEn: null, cost: ["Darkness"], convertedEnergyCost: 1, damage: "", textJa: "相手のバトルポケモンをどくにする。", textEn: null },
      { nameJa: "かいてんアタック", nameEn: null, cost: ["Darkness","Colorless","Colorless"], convertedEnergyCost: 3, damage: "40", textJa: "", textEn: null }
    ],
    weaknesses: [{ type: "Fighting", value: "×2" }], resistances: [], retreatCost: ["Colorless","Colorless","Colorless","Colorless"],
    regulationMark: "H", rarity: "Common", rarityJa: "MC", artist: "Tomokazu Komiya",
    nationalPokedexNumber: 543, imageJa: "images/sets/sd100/jp/460.jpg", imageEn: "images/sets/sd100/en/460.jpg", textJa: null, textEn: null, enAvailable: true
  },
  {
    id: "sd100-461", setIdJa: "sd100", setIdEn: "twilightmasquerade",
    numberJa: "461/742", numberEn: null, nameJa: "ホイーガ", nameEn: null,
    supertype: "Pokémon", subtypes: ["Stage 1"], types: ["Darkness"],
    hp: 100, evolvesFrom: "フシデ", abilities: [],
    attacks: [
      { nameJa: "ポイズンサークル", nameEn: null, cost: ["Darkness"], convertedEnergyCost: 1, damage: "", textJa: "相手のバトルポケモンをどくにする。次の相手の番、このワザを受けたポケモンは、にげられない。", textEn: null },
      { nameJa: "かいてんアタック", nameEn: null, cost: ["Darkness","Colorless","Colorless"], convertedEnergyCost: 3, damage: "60", textJa: "", textEn: null }
    ],
    weaknesses: [{ type: "Fighting", value: "×2" }], resistances: [], retreatCost: ["Colorless","Colorless","Colorless"],
    regulationMark: "H", rarity: "Uncommon", rarityJa: "MC", artist: "Krgc",
    nationalPokedexNumber: 544, imageJa: "images/sets/sd100/jp/461.jpg", imageEn: "images/sets/sd100/en/461.jpg", textJa: null, textEn: null, enAvailable: true
  },
  {
    id: "sd100-462", setIdJa: "sd100", setIdEn: "twilightmasquerade",
    numberJa: "462/742", numberEn: null, nameJa: "ペンドラー", nameEn: null,
    supertype: "Pokémon", subtypes: ["Stage 2"], types: ["Darkness"],
    hp: 170, evolvesFrom: "ホイーガ", abilities: [],
    attacks: [
      { nameJa: "ひどうなひとさし", nameEn: null, cost: ["Darkness","Colorless"], convertedEnergyCost: 2, damage: "", textJa: "相手のバトルポケモンの残りHPが「10」になるように、ダメカンをのせる。", textEn: null },
      { nameJa: "ヘドロばくだん", nameEn: null, cost: ["Darkness","Colorless","Colorless"], convertedEnergyCost: 3, damage: "160", textJa: "", textEn: null }
    ],
    weaknesses: [{ type: "Fighting", value: "×2" }], resistances: [], retreatCost: ["Colorless","Colorless","Colorless"],
    regulationMark: "H", rarity: "Rare", rarityJa: "MC", artist: "Shiburingaru",
    nationalPokedexNumber: 545, imageJa: "images/sets/sd100/jp/462.jpg", imageEn: "images/sets/sd100/en/462.jpg", textJa: null, textEn: null, enAvailable: true
  },
  {
    id: "sd100-463", setIdJa: "sd100", setIdEn: "destinedrivals",
    numberJa: "463/742", numberEn: null, nameJa: "マリィのズルッグ", nameEn: null,
    supertype: "Pokémon", subtypes: ["Basic"], types: ["Darkness"],
    hp: 70, evolvesFrom: null, abilities: [],
    attacks: [{ nameJa: "かみくだく", nameEn: null, cost: ["Darkness","Darkness","Colorless"], convertedEnergyCost: 3, damage: "50", textJa: "相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。", textEn: null }],
    weaknesses: [{ type: "Grass", value: "×2" }], resistances: [], retreatCost: ["Colorless"],
    regulationMark: "I", rarity: "Common", rarityJa: "MC", artist: "Teeziro",
    nationalPokedexNumber: 559, imageJa: "images/sets/sd100/jp/463.jpg", imageEn: "images/sets/sd100/en/463.jpg", textJa: null, textEn: null, enAvailable: true
  },
  {
    id: "sd100-464", setIdJa: "sd100", setIdEn: "destinedrivals",
    numberJa: "464/742", numberEn: null, nameJa: "マリィのズルズキン", nameEn: null,
    supertype: "Pokémon", subtypes: ["Stage 1"], types: ["Darkness"],
    hp: 120, evolvesFrom: "マリィのズルッグ", abilities: [],
    attacks: [
      { nameJa: "うしろげり", nameEn: null, cost: ["Darkness"], convertedEnergyCost: 1, damage: "40", textJa: "", textEn: null },
      { nameJa: "ワイルドタックル", nameEn: null, cost: ["Darkness","Darkness","Colorless"], convertedEnergyCost: 3, damage: "160", textJa: "このポケモンにも30ダメージ。", textEn: null }
    ],
    weaknesses: [{ type: "Grass", value: "×2" }], resistances: [], retreatCost: ["Colorless","Colorless"],
    regulationMark: "I", rarity: "Uncommon", rarityJa: "MC", artist: "Kazumasa Yasukuni",
    nationalPokedexNumber: 560, imageJa: "images/sets/sd100/jp/464.jpg", imageEn: "images/sets/sd100/en/464.jpg", textJa: null, textEn: null, enAvailable: true
  },
  {
    id: "sd100-465", setIdJa: "sd100", setIdEn: "chaosrising",
    numberJa: "465/742", numberEn: null, nameJa: "ヤブクロン", nameEn: null,
    supertype: "Pokémon", subtypes: ["Basic"], types: ["Darkness"],
    hp: 70, evolvesFrom: null, abilities: [],
    attacks: [
      { nameJa: "よだれ", nameEn: null, cost: ["Darkness"], convertedEnergyCost: 1, damage: "10", textJa: "", textEn: null },
      { nameJa: "ヘドロばくだん", nameEn: null, cost: ["Darkness","Colorless"], convertedEnergyCost: 2, damage: "20", textJa: "", textEn: null }
    ],
    weaknesses: [{ type: "Fighting", value: "×2" }], resistances: [], retreatCost: ["Colorless","Colorless"],
    regulationMark: "I", rarity: "Common", rarityJa: "MC", artist: "OKUBO",
    nationalPokedexNumber: 568, imageJa: "images/sets/sd100/jp/465.jpg", imageEn: "images/sets/sd100/en/465.jpg", textJa: null, textEn: null, enAvailable: true
  },
  {
    id: "sd100-466", setIdJa: "sd100", setIdEn: "chaosrising",
    numberJa: "466/742", numberEn: null, nameJa: "ダストダス", nameEn: null,
    supertype: "Pokémon", subtypes: ["Stage 1"], types: ["Darkness"],
    hp: 140, evolvesFrom: "ヤブクロン", abilities: [],
    attacks: [
      { nameJa: "ガスでつつむ", nameEn: null, cost: ["Darkness"], convertedEnergyCost: 1, damage: "40", textJa: "", textEn: null },
      { nameJa: "ダストシュート", nameEn: null, cost: ["Darkness","Darkness","Colorless"], convertedEnergyCost: 3, damage: "120", textJa: "相手のバトルポケモンをどくにする。", textEn: null }
    ],
    weaknesses: [{ type: "Fighting", value: "×2" }], resistances: [], retreatCost: ["Colorless","Colorless","Colorless","Colorless"],
    regulationMark: "I", rarity: "Uncommon", rarityJa: "MC", artist: "OKUBO",
    nationalPokedexNumber: 569, imageJa: "images/sets/sd100/jp/466.jpg", imageEn: "images/sets/sd100/en/466.jpg", textJa: null, textEn: null, enAvailable: true
  },
  {
    id: "sd100-467", setIdJa: "sd100", setIdEn: "shroudedfable",
    numberJa: "467/742", numberEn: null, nameJa: "ゾロア", nameEn: null,
    supertype: "Pokémon", subtypes: ["Basic"], types: ["Darkness"],
    hp: 70, evolvesFrom: null, abilities: [],
    attacks: [{ nameJa: "とっしん", nameEn: null, cost: ["Darkness"], convertedEnergyCost: 1, damage: "30", textJa: "このポケモンにも10ダメージ。", textEn: null }],
    weaknesses: [{ type: "Grass", value: "×2" }], resistances: [], retreatCost: ["Colorless"],
    regulationMark: "I", rarity: "Common", rarityJa: "MC", artist: "akagi",
    nationalPokedexNumber: 570, imageJa: "images/sets/sd100/jp/467.jpg", imageEn: "images/sets/sd100/en/467.jpg", textJa: null, textEn: null, enAvailable: true
  },
  {
    id: "sd100-468", setIdJa: "sd100", setIdEn: "shroudedfable",
    numberJa: "468/742", numberEn: null, nameJa: "ゾロアーク", nameEn: null,
    supertype: "Pokémon", subtypes: ["Stage 1"], types: ["Darkness"],
    hp: 120, evolvesFrom: "ゾロア", abilities: [],
    attacks: [
      { nameJa: "マインドジャック", nameEn: null, cost: ["Darkness"], convertedEnergyCost: 1, damage: "30×", textJa: "相手のベンチポケモンの数×30ダメージ。", textEn: null },
      { nameJa: "イカサマ", nameEn: null, cost: ["Colorless","Colorless","Colorless"], convertedEnergyCost: 3, damage: "", textJa: "相手のバトルポケモンが持つワザを1つ選び、このワザとして使う。", textEn: null }
    ],
    weaknesses: [{ type: "Grass", value: "×2" }], resistances: [], retreatCost: ["Colorless"],
    regulationMark: "I", rarity: "Uncommon", rarityJa: "MC", artist: "akagi",
    nationalPokedexNumber: 571, imageJa: "images/sets/sd100/jp/468.jpg", imageEn: "images/sets/sd100/en/468.jpg", textJa: null, textEn: null, enAvailable: true
  },
  {
    id: "sd100-469", setIdJa: "sd100", setIdEn: "ascendedheroes",
    numberJa: "469/742", numberEn: null, nameJa: "Nのゾロア", nameEn: null,
    supertype: "Pokémon", subtypes: ["Basic"], types: ["Darkness"],
    hp: 70, evolvesFrom: null, abilities: [],
    attacks: [{ nameJa: "ひっかく", nameEn: null, cost: ["Darkness"], convertedEnergyCost: 1, damage: "20", textJa: "", textEn: null }],
    weaknesses: [{ type: "Grass", value: "×2" }], resistances: [], retreatCost: ["Colorless"],
    regulationMark: "I", rarity: "Common", rarityJa: "MC", artist: "Jiro Sasumo",
    nationalPokedexNumber: 570, imageJa: "images/sets/sd100/jp/469.jpg", imageEn: "images/sets/sd100/en/469.jpg", textJa: null, textEn: null, enAvailable: true
  },
  {
    id: "sd100-470", setIdJa: "sd100", setIdEn: "ascendedheroes",
    numberJa: "470/742", numberEn: null, nameJa: "Nのゾロアークex", nameEn: null,
    supertype: "Pokémon", subtypes: ["Stage 1","ex"], types: ["Darkness"],
    hp: 280, evolvesFrom: "Nのゾロア",
    abilities: [{ nameJa: "とりひき", nameEn: null, type: "Ability", textJa: "自分の番に、自分の手札を1枚トラッシュするなら、1回使える。自分の山札を2枚引く。", textEn: null }],
    attacks: [{ nameJa: "ナイトジョーカー", nameEn: null, cost: ["Darkness","Darkness"], convertedEnergyCost: 2, damage: "", textJa: "自分のベンチの「Nのポケモン」が持つワザを1つ選び、このワザとして使う。", textEn: null }],
    weaknesses: [{ type: "Grass", value: "×2" }], resistances: [], retreatCost: ["Colorless","Colorless"],
    regulationMark: "I", rarity: "Double Rare", rarityJa: "MC", artist: "takuyoa",
    nationalPokedexNumber: 571, imageJa: "images/sets/sd100/jp/470.jpg", imageEn: "images/sets/sd100/en/470.jpg",
    textJa: "ポケモンexがきぜつしたとき、相手はサイドを2枚とる。", textEn: null, enAvailable: true
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
