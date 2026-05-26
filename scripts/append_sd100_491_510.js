// Append Phase 1 data for sd100 cards 491-510
// Run from project root: node scripts/append_sd100_491_510.js
const fs = require('fs');

function readJson(p) {
  let s = fs.readFileSync(p, 'utf8');
  if (s.charCodeAt(0) === 0xFEFF) s = s.slice(1);
  return JSON.parse(s);
}

const newCards = [
  {
    id: "sd100-491", setIdJa: "sd100", setIdEn: "prismaticevolutions",
    numberJa: "491/742", numberEn: null, nameJa: "モモワロウex", nameEn: null,
    supertype: "Pokémon", subtypes: ["Basic","ex"], types: ["Darkness"],
    hp: 190, evolvesFrom: null,
    abilities: [{ nameJa: "しはいのくさり", nameEn: null, type: "Ability", textJa: "自分の番に1回使える。自分のベンチの●ポケモン（「モモワロウex」をのぞく）を1匹選び、バトルポケモンと入れ替える。その後、新しいバトルポケモンをどくにする。この番、すでに別の「しはいのくさり」を使っていたなら、この特性は使えない。", textEn: null }],
    attacks: [{ nameJa: "イライラバースト", nameEn: null, cost: ["Darkness","Colorless"], convertedEnergyCost: 2, damage: "60×", textJa: "相手がすでにとったサイドの枚数×60ダメージ。", textEn: null }],
    weaknesses: [{ type: "Fighting", value: "×2" }], resistances: [], retreatCost: ["Colorless"],
    regulationMark: "H", rarity: "Double Rare", rarityJa: "MC", artist: "aky CG Works",
    nationalPokedexNumber: 1025, imageJa: "images/sets/sd100/jp/491.jpg", imageEn: "images/sets/sd100/en/491.jpg",
    textJa: "ポケモンexがきぜつしたとき、相手はサイドを2枚とる。", textEn: null, enAvailable: true
  },
  {
    id: "sd100-492", setIdJa: "sd100", setIdEn: "temporalforces",
    numberJa: "492/742", numberEn: null, nameJa: "ハッサムex", nameEn: null,
    supertype: "Pokémon", subtypes: ["Stage 1","ex"], types: ["Metal"],
    hp: 270, evolvesFrom: "ストライク", abilities: [],
    attacks: [
      { nameJa: "はがねのつばさ", nameEn: null, cost: ["Colorless","Colorless"], convertedEnergyCost: 2, damage: "70", textJa: "次の相手の番、このポケモンが受けるワザのダメージは「-50」される。", textEn: null },
      { nameJa: "クロスブレイカー", nameEn: null, cost: ["Metal","Metal"], convertedEnergyCost: 2, damage: "120×", textJa: "このポケモンについている♦エネルギーを2枚までトラッシュし、その枚数×120ダメージ。", textEn: null }
    ],
    weaknesses: [{ type: "Fire", value: "×2" }], resistances: [{ type: "Grass", value: "-30" }], retreatCost: ["Colorless","Colorless"],
    regulationMark: "H", rarity: "Double Rare", rarityJa: "MC", artist: "toriyufu",
    nationalPokedexNumber: 212, imageJa: "images/sets/sd100/jp/492.jpg", imageEn: "images/sets/sd100/en/492.jpg",
    textJa: "ポケモンexがきぜつしたとき、相手はサイドを2枚とる。", textEn: null, enAvailable: true
  },
  {
    id: "sd100-493", setIdJa: "sd100", setIdEn: "destinedrivals",
    numberJa: "493/742", numberEn: null, nameJa: "エアームド", nameEn: null,
    supertype: "Pokémon", subtypes: ["Basic"], types: ["Metal"],
    hp: 110, evolvesFrom: null, abilities: [],
    attacks: [{ nameJa: "はがねのつばさ", nameEn: null, cost: ["Metal","Colorless"], convertedEnergyCost: 2, damage: "50", textJa: "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。", textEn: null }],
    weaknesses: [{ type: "Lightning", value: "×2" }], resistances: [{ type: "Fighting", value: "-30" }], retreatCost: ["Colorless"],
    regulationMark: "H", rarity: "Common", rarityJa: "MC", artist: "kawayoo",
    nationalPokedexNumber: 227, imageJa: "images/sets/sd100/jp/493.jpg", imageEn: "images/sets/sd100/en/493.jpg", textJa: null, textEn: null, enAvailable: true
  },
  {
    id: "sd100-494", setIdJa: "sd100", setIdEn: "destinedrivals",
    numberJa: "494/742", numberEn: null, nameJa: "ダイゴのエアームド", nameEn: null,
    supertype: "Pokémon", subtypes: ["Basic"], types: ["Metal"],
    hp: 120, evolvesFrom: null, abilities: [],
    attacks: [
      { nameJa: "するどいはね", nameEn: null, cost: ["Colorless","Colorless"], convertedEnergyCost: 2, damage: "30", textJa: "", textEn: null },
      { nameJa: "ツインソニック", nameEn: null, cost: ["Metal","Metal","Colorless"], convertedEnergyCost: 3, damage: "", textJa: "相手のポケモン2匹に、それぞれ50ダメージ。[ベンチは弱点・抵抗力を計算しない。]", textEn: null }
    ],
    weaknesses: [{ type: "Lightning", value: "×2" }], resistances: [{ type: "Fighting", value: "-30" }], retreatCost: ["Colorless"],
    regulationMark: "I", rarity: "Common", rarityJa: "MC", artist: "Nisota Niso",
    nationalPokedexNumber: 227, imageJa: "images/sets/sd100/jp/494.jpg", imageEn: "images/sets/sd100/en/494.jpg", textJa: null, textEn: null, enAvailable: true
  },
  {
    id: "sd100-495", setIdJa: "sd100", setIdEn: "perfectorder",
    numberJa: "495/742", numberEn: null, nameJa: "クチート", nameEn: null,
    supertype: "Pokémon", subtypes: ["Basic"], types: ["Metal"],
    hp: 90, evolvesFrom: null, abilities: [],
    attacks: [
      { nameJa: "なかまをよぶ", nameEn: null, cost: ["Colorless"], convertedEnergyCost: 1, damage: "", textJa: "自分の山札からたねポケモンを2枚まで選び、ベンチに出す。そして山札を切る。", textEn: null },
      { nameJa: "かみつく", nameEn: null, cost: ["Metal","Colorless","Colorless"], convertedEnergyCost: 3, damage: "90", textJa: "", textEn: null }
    ],
    weaknesses: [{ type: "Fire", value: "×2" }], resistances: [{ type: "Grass", value: "-30" }], retreatCost: ["Colorless"],
    regulationMark: "J", rarity: "Common", rarityJa: "MC", artist: "CHORISO",
    nationalPokedexNumber: 303, imageJa: "images/sets/sd100/jp/495.jpg", imageEn: "images/sets/sd100/en/495.jpg", textJa: null, textEn: null, enAvailable: true
  },
  {
    id: "sd100-496", setIdJa: "sd100", setIdEn: "chaosrising",
    numberJa: "496/742", numberEn: null, nameJa: "ダンバル", nameEn: null,
    supertype: "Pokémon", subtypes: ["Basic"], types: ["Metal"],
    hp: 70, evolvesFrom: null, abilities: [],
    attacks: [
      { nameJa: "ツメをたてる", nameEn: null, cost: ["Metal"], convertedEnergyCost: 1, damage: "10", textJa: "", textEn: null },
      { nameJa: "アイアンタックル", nameEn: null, cost: ["Metal","Colorless","Colorless"], convertedEnergyCost: 3, damage: "50", textJa: "このポケモンにも10ダメージ。", textEn: null }
    ],
    weaknesses: [{ type: "Fire", value: "×2" }], resistances: [{ type: "Grass", value: "-30" }], retreatCost: ["Colorless"],
    regulationMark: "H", rarity: "Common", rarityJa: "MC", artist: "hatachu",
    nationalPokedexNumber: 374, imageJa: "images/sets/sd100/jp/496.jpg", imageEn: "images/sets/sd100/en/496.jpg", textJa: null, textEn: null, enAvailable: true
  },
  {
    id: "sd100-497", setIdJa: "sd100", setIdEn: "chaosrising",
    numberJa: "497/742", numberEn: null, nameJa: "メタング", nameEn: null,
    supertype: "Pokémon", subtypes: ["Stage 1"], types: ["Metal"],
    hp: 100, evolvesFrom: "ダンバル",
    abilities: [{ nameJa: "メタルメーカー", nameEn: null, type: "Ability", textJa: "自分の番に1回使える。自分の山札を上から4枚見て、その中から「基本♦エネルギー」を好きなだけ選び、自分のポケモンに好きなようにつける。残りのカードはすべてウラにして切り、山札の下にもどす。", textEn: null }],
    attacks: [{ nameJa: "ビーム", nameEn: null, cost: ["Metal","Colorless","Colorless"], convertedEnergyCost: 3, damage: "60", textJa: "", textEn: null }],
    weaknesses: [{ type: "Fire", value: "×2" }], resistances: [{ type: "Grass", value: "-30" }], retreatCost: ["Colorless","Colorless"],
    regulationMark: "H", rarity: "Uncommon", rarityJa: "MC", artist: "Nobuhiro Imagawa",
    nationalPokedexNumber: 375, imageJa: "images/sets/sd100/jp/497.jpg", imageEn: "images/sets/sd100/en/497.jpg", textJa: null, textEn: null, enAvailable: true
  },
  {
    id: "sd100-498", setIdJa: "sd100", setIdEn: "surgingsparks",
    numberJa: "498/742", numberEn: null, nameJa: "レジスチル", nameEn: null,
    supertype: "Pokémon", subtypes: ["Basic"], types: ["Metal"],
    hp: 130, evolvesFrom: null, abilities: [],
    attacks: [{ nameJa: "レイジングハンマー", nameEn: null, cost: ["Metal","Colorless"], convertedEnergyCost: 2, damage: "60+", textJa: "このポケモンにのっているダメカンの数×10ダメージ追加。", textEn: null }],
    weaknesses: [{ type: "Fire", value: "×2" }], resistances: [{ type: "Grass", value: "-30" }], retreatCost: ["Colorless","Colorless","Colorless"],
    regulationMark: "H", rarity: "Common", rarityJa: "MC", artist: "Shiburingaru",
    nationalPokedexNumber: 379, imageJa: "images/sets/sd100/jp/498.jpg", imageEn: "images/sets/sd100/en/498.jpg", textJa: null, textEn: null, enAvailable: true
  },
  {
    id: "sd100-499", setIdJa: "sd100", setIdEn: "ascendedheroes",
    numberJa: "499/742", numberEn: null, nameJa: "レジスチルex", nameEn: null,
    supertype: "Pokémon", subtypes: ["Basic","ex"], types: ["Metal"],
    hp: 230, evolvesFrom: null, abilities: [],
    attacks: [
      { nameJa: "レジチャージ", nameEn: null, cost: ["Colorless"], convertedEnergyCost: 1, damage: "", textJa: "自分のトラッシュから「基本♦エネルギー」を2枚まで選び、このポケモンにつける。", textEn: null },
      { nameJa: "プロテクトスチール", nameEn: null, cost: ["Metal","Colorless","Colorless","Colorless"], convertedEnergyCost: 4, damage: "140", textJa: "次の相手の番、このポケモンが受けるワザのダメージは「-50」される。", textEn: null }
    ],
    weaknesses: [{ type: "Fire", value: "×2" }], resistances: [{ type: "Grass", value: "-30" }], retreatCost: ["Colorless","Colorless","Colorless"],
    regulationMark: "J", rarity: "Double Rare", rarityJa: "MC", artist: "toriyufu",
    nationalPokedexNumber: 379, imageJa: "images/sets/sd100/jp/499.jpg", imageEn: "images/sets/sd100/en/499.jpg",
    textJa: "ポケモンexがきぜつしたとき、相手はサイドを2枚とる。", textEn: null, enAvailable: true
  },
  {
    id: "sd100-500", setIdJa: "sd100", setIdEn: "prismaticevolutions",
    numberJa: "500/742", numberEn: null, nameJa: "ドーミラー", nameEn: null,
    supertype: "Pokémon", subtypes: ["Basic"], types: ["Metal"],
    hp: 60, evolvesFrom: null, abilities: [],
    attacks: [{ nameJa: "シールドアタック", nameEn: null, cost: ["Metal","Colorless"], convertedEnergyCost: 2, damage: "20+", textJa: "コインを1回投げオモテなら、20ダメージ追加。", textEn: null }],
    weaknesses: [{ type: "Fire", value: "×2" }], resistances: [{ type: "Grass", value: "-30" }], retreatCost: ["Colorless"],
    regulationMark: "H", rarity: "Common", rarityJa: "MC", artist: "Nabatame Kazutaka",
    nationalPokedexNumber: 436, imageJa: "images/sets/sd100/jp/500.jpg", imageEn: "images/sets/sd100/en/500.jpg", textJa: null, textEn: null, enAvailable: true
  },
  {
    id: "sd100-501", setIdJa: "sd100", setIdEn: "prismaticevolutions",
    numberJa: "501/742", numberEn: null, nameJa: "ドータクン", nameEn: null,
    supertype: "Pokémon", subtypes: ["Stage 1"], types: ["Metal"],
    hp: 130, evolvesFrom: "ドーミラー", abilities: [],
    attacks: [
      { nameJa: "かいてんアタック", nameEn: null, cost: ["Metal","Colorless"], convertedEnergyCost: 2, damage: "50", textJa: "", textEn: null },
      { nameJa: "ダブルインパクト", nameEn: null, cost: ["Metal","Colorless","Colorless"], convertedEnergyCost: 3, damage: "100×", textJa: "コインを2回投げ、オモテの数×100ダメージ。", textEn: null }
    ],
    weaknesses: [{ type: "Fire", value: "×2" }], resistances: [{ type: "Grass", value: "-30" }], retreatCost: ["Colorless","Colorless","Colorless"],
    regulationMark: "H", rarity: "Uncommon", rarityJa: "MC", artist: "kawayoo",
    nationalPokedexNumber: 437, imageJa: "images/sets/sd100/jp/501.jpg", imageEn: "images/sets/sd100/en/501.jpg", textJa: null, textEn: null, enAvailable: true
  },
  {
    id: "sd100-502", setIdJa: "sd100", setIdEn: "surgingsparks",
    numberJa: "502/742", numberEn: null, nameJa: "ディアルガ", nameEn: null,
    supertype: "Pokémon", subtypes: ["Basic"], types: ["Metal"],
    hp: 140, evolvesFrom: null, abilities: [],
    attacks: [
      { nameJa: "ビーム", nameEn: null, cost: ["Metal"], convertedEnergyCost: 1, damage: "30", textJa: "", textEn: null },
      { nameJa: "クロノバースト", nameEn: null, cost: ["Metal","Metal","Colorless"], convertedEnergyCost: 3, damage: "80+", textJa: "のぞむなら、このポケモンについているエネルギーをすべて山札にもどして切り、80ダメージ追加。", textEn: null }
    ],
    weaknesses: [{ type: "Fire", value: "×2" }], resistances: [{ type: "Grass", value: "-30" }], retreatCost: ["Colorless","Colorless"],
    regulationMark: "I", rarity: "Common", rarityJa: "MC", artist: "Teeziro",
    nationalPokedexNumber: 483, imageJa: "images/sets/sd100/jp/502.jpg", imageEn: "images/sets/sd100/en/502.jpg", textJa: null, textEn: null, enAvailable: true
  },
  {
    id: "sd100-503", setIdJa: "sd100", setIdEn: "prismaticevolutions",
    numberJa: "503/742", numberEn: null, nameJa: "ヒードラン", nameEn: null,
    supertype: "Pokémon", subtypes: ["Basic"], types: ["Metal"],
    hp: 130, evolvesFrom: null, abilities: [],
    attacks: [
      { nameJa: "たたきつぶす", nameEn: null, cost: ["Metal","Colorless"], convertedEnergyCost: 2, damage: "40", textJa: "", textEn: null },
      { nameJa: "アイアンバスター", nameEn: null, cost: ["Metal","Metal","Colorless"], convertedEnergyCost: 3, damage: "130", textJa: "次の自分の番、このポケモンはワザが使えない。", textEn: null }
    ],
    weaknesses: [{ type: "Fire", value: "×2" }], resistances: [{ type: "Grass", value: "-30" }], retreatCost: ["Colorless","Colorless","Colorless"],
    regulationMark: "H", rarity: "Common", rarityJa: "MC", artist: "Tonji Matsuno",
    nationalPokedexNumber: 485, imageJa: "images/sets/sd100/jp/503.jpg", imageEn: "images/sets/sd100/en/503.jpg", textJa: null, textEn: null, enAvailable: true
  },
  {
    id: "sd100-504", setIdJa: "sd100", setIdEn: "journeytogether",
    numberJa: "504/742", numberEn: null, nameJa: "シュバルゴ", nameEn: null,
    supertype: "Pokémon", subtypes: ["Stage 1"], types: ["Metal"],
    hp: 120, evolvesFrom: "カブルモ", abilities: [],
    attacks: [
      { nameJa: "つきさす", nameEn: null, cost: ["Colorless"], convertedEnergyCost: 1, damage: "20", textJa: "", textEn: null },
      { nameJa: "アイアンバスター", nameEn: null, cost: ["Metal","Colorless"], convertedEnergyCost: 2, damage: "120", textJa: "次の自分の番、このポケモンはワザが使えない。", textEn: null }
    ],
    weaknesses: [{ type: "Fire", value: "×2" }], resistances: [{ type: "Grass", value: "-30" }], retreatCost: ["Colorless","Colorless"],
    regulationMark: "I", rarity: "Uncommon", rarityJa: "MC", artist: "Takumi Wada",
    nationalPokedexNumber: 589, imageJa: "images/sets/sd100/jp/504.jpg", imageEn: "images/sets/sd100/en/504.jpg", textJa: null, textEn: null, enAvailable: true
  },
  {
    id: "sd100-505", setIdJa: "sd100", setIdEn: "journeytogether",
    numberJa: "505/742", numberEn: null, nameJa: "シュバルゴ", nameEn: null,
    supertype: "Pokémon", subtypes: ["Stage 1"], types: ["Metal"],
    hp: 130, evolvesFrom: "カブルモ", abilities: [],
    attacks: [{ nameJa: "ワイルドランス", nameEn: null, cost: ["Metal"], convertedEnergyCost: 1, damage: "90", textJa: "このポケモンにも30ダメージ。", textEn: null }],
    weaknesses: [{ type: "Fire", value: "×2" }], resistances: [{ type: "Grass", value: "-30" }], retreatCost: ["Colorless","Colorless","Colorless"],
    regulationMark: "I", rarity: "Uncommon", rarityJa: "MC", artist: "DOM",
    nationalPokedexNumber: 589, imageJa: "images/sets/sd100/jp/505.jpg", imageEn: "images/sets/sd100/en/505.jpg", textJa: null, textEn: null, enAvailable: true
  },
  {
    id: "sd100-506", setIdJa: "sd100", setIdEn: "stellarcrown",
    numberJa: "506/742", numberEn: null, nameJa: "ギアル", nameEn: null,
    supertype: "Pokémon", subtypes: ["Basic"], types: ["Metal"],
    hp: 60, evolvesFrom: null, abilities: [],
    attacks: [{ nameJa: "かたいギア", nameEn: null, cost: ["Metal"], convertedEnergyCost: 1, damage: "10", textJa: "次の相手の番、このポケモンが受けるワザのダメージは「-10」される。", textEn: null }],
    weaknesses: [{ type: "Fire", value: "×2" }], resistances: [{ type: "Grass", value: "-30" }], retreatCost: ["Colorless"],
    regulationMark: "I", rarity: "Common", rarityJa: "MC", artist: "Amelicart",
    nationalPokedexNumber: 599, imageJa: "images/sets/sd100/jp/506.jpg", imageEn: "images/sets/sd100/en/506.jpg", textJa: null, textEn: null, enAvailable: true
  },
  {
    id: "sd100-507", setIdJa: "sd100", setIdEn: "stellarcrown",
    numberJa: "507/742", numberEn: null, nameJa: "ギギアル", nameEn: null,
    supertype: "Pokémon", subtypes: ["Stage 1"], types: ["Metal"],
    hp: 90, evolvesFrom: "ギアル", abilities: [],
    attacks: [{ nameJa: "かたいギア", nameEn: null, cost: ["Metal","Colorless"], convertedEnergyCost: 2, damage: "50", textJa: "次の相手の番、このポケモンが受けるワザのダメージは「-20」される。", textEn: null }],
    weaknesses: [{ type: "Fire", value: "×2" }], resistances: [{ type: "Grass", value: "-30" }], retreatCost: ["Colorless","Colorless"],
    regulationMark: "I", rarity: "Uncommon", rarityJa: "MC", artist: "Amelicart",
    nationalPokedexNumber: 600, imageJa: "images/sets/sd100/jp/507.jpg", imageEn: "images/sets/sd100/en/507.jpg", textJa: null, textEn: null, enAvailable: true
  },
  {
    id: "sd100-508", setIdJa: "sd100", setIdEn: "stellarcrown",
    numberJa: "508/742", numberEn: null, nameJa: "ギギギアル", nameEn: null,
    supertype: "Pokémon", subtypes: ["Stage 2"], types: ["Metal"],
    hp: 150, evolvesFrom: "ギギアル",
    abilities: [{ nameJa: "ギアコーティング", nameEn: null, type: "Ability", textJa: "このポケモンがいるかぎり、♦エネルギーがついている自分のポケモン全員が、相手のポケモンから受けるワザのダメージは「-20」される。", textEn: null }],
    attacks: [{ nameJa: "ぶちかます", nameEn: null, cost: ["Metal","Colorless","Colorless"], convertedEnergyCost: 3, damage: "120", textJa: "", textEn: null }],
    weaknesses: [{ type: "Fire", value: "×2" }], resistances: [{ type: "Grass", value: "-30" }], retreatCost: ["Colorless","Colorless","Colorless"],
    regulationMark: "I", rarity: "Rare", rarityJa: "MC", artist: "Amelicart",
    nationalPokedexNumber: 601, imageJa: "images/sets/sd100/jp/508.jpg", imageEn: "images/sets/sd100/en/508.jpg", textJa: null, textEn: null, enAvailable: true
  },
  {
    id: "sd100-509", setIdJa: "sd100", setIdEn: "journeytogether",
    numberJa: "509/742", numberEn: null, nameJa: "ガルマッギョ", nameEn: null,
    supertype: "Pokémon", subtypes: ["Basic"], types: ["Metal"],
    hp: 100, evolvesFrom: null, abilities: [],
    attacks: [
      { nameJa: "どろかけ", nameEn: null, cost: ["Colorless","Colorless"], convertedEnergyCost: 2, damage: "40", textJa: "", textEn: null },
      { nameJa: "とびつきバイト", nameEn: null, cost: ["Colorless","Colorless","Colorless"], convertedEnergyCost: 3, damage: "100", textJa: "このポケモンにも30ダメージ。", textEn: null }
    ],
    weaknesses: [{ type: "Fire", value: "×2" }], resistances: [{ type: "Grass", value: "-30" }], retreatCost: ["Colorless","Colorless"],
    regulationMark: "H", rarity: "Common", rarityJa: "MC", artist: "Aya Kusube",
    nationalPokedexNumber: 618, imageJa: "images/sets/sd100/jp/509.jpg", imageEn: "images/sets/sd100/en/509.jpg", textJa: null, textEn: null, enAvailable: true
  },
  {
    id: "sd100-510", setIdJa: "sd100", setIdEn: "ascendedheroes",
    numberJa: "510/742", numberEn: null, nameJa: "コマタナ", nameEn: null,
    supertype: "Pokémon", subtypes: ["Basic"], types: ["Metal"],
    hp: 60, evolvesFrom: null, abilities: [],
    attacks: [{ nameJa: "おいつめる", nameEn: null, cost: ["Metal"], convertedEnergyCost: 1, damage: "10", textJa: "次の相手の番、このワザを受けたポケモンは、にげられない。", textEn: null }],
    weaknesses: [{ type: "Fire", value: "×2" }], resistances: [{ type: "Grass", value: "-30" }], retreatCost: ["Colorless"],
    regulationMark: "I", rarity: "Common", rarityJa: "MC", artist: "Oku",
    nationalPokedexNumber: 624, imageJa: "images/sets/sd100/jp/510.jpg", imageEn: "images/sets/sd100/en/510.jpg", textJa: null, textEn: null, enAvailable: true
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
