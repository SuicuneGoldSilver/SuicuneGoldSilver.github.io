// Append Phase 1 data for sd100 cards 471-490
// Run from project root: node scripts/append_sd100_471_490.js
const fs = require('fs');

function readJson(p) {
  let s = fs.readFileSync(p, 'utf8');
  if (s.charCodeAt(0) === 0xFEFF) s = s.slice(1);
  return JSON.parse(s);
}

const newCards = [
  {
    id: "sd100-471", setIdJa: "sd100", setIdEn: "ascendedheroes",
    numberJa: "471/742", numberEn: null, nameJa: "コマタナ", nameEn: null,
    supertype: "Pokémon", subtypes: ["Basic"], types: ["Darkness"],
    hp: 70, evolvesFrom: null, abilities: [],
    attacks: [{ nameJa: "つきさす", nameEn: null, cost: ["Darkness"], convertedEnergyCost: 1, damage: "10", textJa: "", textEn: null }],
    weaknesses: [{ type: "Grass", value: "×2" }], resistances: [], retreatCost: ["Colorless"],
    regulationMark: "H", rarity: "Common", rarityJa: "MC", artist: "matazo",
    nationalPokedexNumber: 624, imageJa: "images/sets/sd100/jp/471.jpg", imageEn: "images/sets/sd100/en/471.jpg", textJa: null, textEn: null, enAvailable: true
  },
  {
    id: "sd100-472", setIdJa: "sd100", setIdEn: "ascendedheroes",
    numberJa: "472/742", numberEn: null, nameJa: "キリキザン", nameEn: null,
    supertype: "Pokémon", subtypes: ["Stage 1"], types: ["Darkness"],
    hp: 100, evolvesFrom: "コマタナ", abilities: [],
    attacks: [{ nameJa: "いあいぎり", nameEn: null, cost: ["Darkness"], convertedEnergyCost: 1, damage: "30", textJa: "", textEn: null }],
    weaknesses: [{ type: "Grass", value: "×2" }], resistances: [], retreatCost: ["Colorless"],
    regulationMark: "H", rarity: "Uncommon", rarityJa: "MC", artist: "AKIRA EGAWA",
    nationalPokedexNumber: 625, imageJa: "images/sets/sd100/jp/472.jpg", imageEn: "images/sets/sd100/en/472.jpg", textJa: null, textEn: null, enAvailable: true
  },
  {
    id: "sd100-473", setIdJa: "sd100", setIdEn: "ascendedheroes",
    numberJa: "473/742", numberEn: null, nameJa: "ドドゲザン", nameEn: null,
    supertype: "Pokémon", subtypes: ["Stage 2"], types: ["Darkness"],
    hp: 170, evolvesFrom: "キリキザン", abilities: [],
    attacks: [
      { nameJa: "ひじうち", nameEn: null, cost: ["Darkness"], convertedEnergyCost: 1, damage: "40", textJa: "", textEn: null },
      { nameJa: "スライスブレード", nameEn: null, cost: ["Darkness","Colorless"], convertedEnergyCost: 2, damage: "100", textJa: "", textEn: null }
    ],
    weaknesses: [{ type: "Grass", value: "×2" }], resistances: [], retreatCost: ["Colorless","Colorless"],
    regulationMark: "H", rarity: "Rare", rarityJa: "MC", artist: "nagimiso",
    nationalPokedexNumber: 983, imageJa: "images/sets/sd100/jp/473.jpg", imageEn: "images/sets/sd100/en/473.jpg", textJa: null, textEn: null, enAvailable: true
  },
  {
    id: "sd100-474", setIdJa: "sd100", setIdEn: "surgingsparks",
    numberJa: "474/742", numberEn: null, nameJa: "バルチャイ", nameEn: null,
    supertype: "Pokémon", subtypes: ["Basic"], types: ["Darkness"],
    hp: 70, evolvesFrom: null, abilities: [],
    attacks: [{ nameJa: "はばたく", nameEn: null, cost: ["Colorless","Colorless"], convertedEnergyCost: 2, damage: "20", textJa: "", textEn: null }],
    weaknesses: [{ type: "Lightning", value: "×2" }], resistances: [{ type: "Fighting", value: "-30" }], retreatCost: ["Colorless"],
    regulationMark: "J", rarity: "Common", rarityJa: "MC", artist: "Nisota Niso",
    nationalPokedexNumber: 629, imageJa: "images/sets/sd100/jp/474.jpg", imageEn: "images/sets/sd100/en/474.jpg", textJa: null, textEn: null, enAvailable: true
  },
  {
    id: "sd100-475", setIdJa: "sd100", setIdEn: null,
    numberJa: "475/742", numberEn: null, nameJa: "バルジーナex", nameEn: null,
    supertype: "Pokémon", subtypes: ["Stage 1","ex"], types: ["Darkness"],
    hp: 260, evolvesFrom: "バルチャイ", abilities: [],
    attacks: [
      { nameJa: "ほねシュート", nameEn: null, cost: ["Colorless","Colorless"], convertedEnergyCost: 2, damage: "", textJa: "相手のポケモン1匹に、50ダメージ。[ベンチは弱点・抵抗力を計算しない。]", textEn: null },
      { nameJa: "バルチャークロー", nameEn: null, cost: ["Darkness","Colorless","Colorless"], convertedEnergyCost: 3, damage: "160", textJa: "相手の手札からオモテを見ないで1枚選び、トラッシュする。", textEn: null }
    ],
    weaknesses: [{ type: "Lightning", value: "×2" }], resistances: [{ type: "Fighting", value: "-30" }], retreatCost: ["Colorless"],
    regulationMark: "J", rarity: "Double Rare", rarityJa: "MC", artist: "Ultimateinudog",
    nationalPokedexNumber: 630, imageJa: "images/sets/sd100/jp/475.jpg", imageEn: null,
    textJa: "ポケモンexがきぜつしたとき、相手はサイドを2枚とる。", textEn: null, enAvailable: false
  },
  {
    id: "sd100-476", setIdJa: "sd100", setIdEn: "surgingsparks",
    numberJa: "476/742", numberEn: null, nameJa: "モノズ", nameEn: null,
    supertype: "Pokémon", subtypes: ["Basic"], types: ["Darkness"],
    hp: 80, evolvesFrom: null, abilities: [],
    attacks: [
      { nameJa: "のしかかり", nameEn: null, cost: ["Colorless","Colorless"], convertedEnergyCost: 2, damage: "20", textJa: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。", textEn: null },
      { nameJa: "やみのキバ", nameEn: null, cost: ["Darkness","Colorless","Colorless"], convertedEnergyCost: 3, damage: "50", textJa: "", textEn: null }
    ],
    weaknesses: [{ type: "Grass", value: "×2" }], resistances: [], retreatCost: ["Colorless","Colorless"],
    regulationMark: "I", rarity: "Common", rarityJa: "MC", artist: "kodama",
    nationalPokedexNumber: 633, imageJa: "images/sets/sd100/jp/476.jpg", imageEn: "images/sets/sd100/en/476.jpg", textJa: null, textEn: null, enAvailable: true
  },
  {
    id: "sd100-477", setIdJa: "sd100", setIdEn: "surgingsparks",
    numberJa: "477/742", numberEn: null, nameJa: "ジヘッド", nameEn: null,
    supertype: "Pokémon", subtypes: ["Stage 1"], types: ["Darkness"],
    hp: 110, evolvesFrom: "モノズ", abilities: [],
    attacks: [
      { nameJa: "ダブルアタック", nameEn: null, cost: ["Colorless","Colorless"], convertedEnergyCost: 2, damage: "40×", textJa: "コインを2回投げ、オモテの数×40ダメージ。", textEn: null },
      { nameJa: "しっこくのキバ", nameEn: null, cost: ["Darkness","Darkness","Colorless","Colorless"], convertedEnergyCost: 4, damage: "100", textJa: "", textEn: null }
    ],
    weaknesses: [{ type: "Grass", value: "×2" }], resistances: [], retreatCost: ["Colorless","Colorless","Colorless"],
    regulationMark: "I", rarity: "Uncommon", rarityJa: "MC", artist: "kodama",
    nationalPokedexNumber: 634, imageJa: "images/sets/sd100/jp/477.jpg", imageEn: "images/sets/sd100/en/477.jpg", textJa: null, textEn: null, enAvailable: true
  },
  {
    id: "sd100-478", setIdJa: "sd100", setIdEn: "surgingsparks",
    numberJa: "478/742", numberEn: null, nameJa: "サザンドラex", nameEn: null,
    supertype: "Pokémon", subtypes: ["Stage 2","ex"], types: ["Darkness"],
    hp: 330, evolvesFrom: "ジヘッド",
    abilities: [{ nameJa: "グリードイーター", nameEn: null, type: "Ability", textJa: "このポケモンが使うワザのダメージで、相手のたねポケモンがきぜつしたなら、サイドを1枚多くとる。", textEn: null }],
    attacks: [{ nameJa: "ダークバイト", nameEn: null, cost: ["Darkness","Darkness","Darkness","Colorless","Colorless"], convertedEnergyCost: 5, damage: "200", textJa: "次の相手の番、このワザを受けたポケモンは、にげられない。", textEn: null }],
    weaknesses: [{ type: "Grass", value: "×2" }], resistances: [], retreatCost: ["Colorless","Colorless","Colorless"],
    regulationMark: "I", rarity: "Double Rare", rarityJa: "MC", artist: "5ban Graphics",
    nationalPokedexNumber: 635, imageJa: "images/sets/sd100/jp/478.jpg", imageEn: "images/sets/sd100/en/478.jpg",
    textJa: "ポケモンexがきぜつしたとき、相手はサイドを2枚とる。", textEn: null, enAvailable: true
  },
  {
    id: "sd100-479", setIdJa: "sd100", setIdEn: "ascendedheroes",
    numberJa: "479/742", numberEn: null, nameJa: "ゴロンダ", nameEn: null,
    supertype: "Pokémon", subtypes: ["Stage 1"], types: ["Darkness"],
    hp: 140, evolvesFrom: "ヤンチャム", abilities: [],
    attacks: [
      { nameJa: "いちゃもん", nameEn: null, cost: ["Darkness"], convertedEnergyCost: 1, damage: "30", textJa: "相手のバトルポケモンが持つワザを1つ選ぶ。次の相手の番、このワザを受けたポケモンは、選ばれたワザが使えない。", textEn: null },
      { nameJa: "パワータックル", nameEn: null, cost: ["Darkness","Darkness","Colorless"], convertedEnergyCost: 3, damage: "160", textJa: "次の自分の番、このポケモンはワザが使えない。", textEn: null }
    ],
    weaknesses: [{ type: "Grass", value: "×2" }], resistances: [], retreatCost: ["Colorless","Colorless","Colorless","Colorless"],
    regulationMark: "I", rarity: "Uncommon", rarityJa: "MC", artist: "nagimiso",
    nationalPokedexNumber: 675, imageJa: "images/sets/sd100/jp/479.jpg", imageEn: "images/sets/sd100/en/479.jpg", textJa: null, textEn: null, enAvailable: true
  },
  {
    id: "sd100-480", setIdJa: "sd100", setIdEn: "shroudedfable",
    numberJa: "480/742", numberEn: null, nameJa: "イベルタル", nameEn: null,
    supertype: "Pokémon", subtypes: ["Basic"], types: ["Darkness"],
    hp: 120, evolvesFrom: null, abilities: [],
    attacks: [
      { nameJa: "むしばむかぜ", nameEn: null, cost: ["Darkness"], convertedEnergyCost: 1, damage: "", textJa: "ダメカンがのっている相手のポケモン全員に、それぞれダメカンを2個のせる。", textEn: null },
      { nameJa: "はかいビーム", nameEn: null, cost: ["Darkness","Darkness","Colorless"], convertedEnergyCost: 3, damage: "100", textJa: "コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。", textEn: null }
    ],
    weaknesses: [{ type: "Lightning", value: "×2" }], resistances: [{ type: "Fighting", value: "-30" }], retreatCost: ["Colorless"],
    regulationMark: "H", rarity: "Common", rarityJa: "MC", artist: "SIE NANAHARA",
    nationalPokedexNumber: 717, imageJa: "images/sets/sd100/jp/480.jpg", imageEn: "images/sets/sd100/en/480.jpg", textJa: null, textEn: null, enAvailable: true
  },
  {
    id: "sd100-481", setIdJa: "sd100", setIdEn: "shroudedfable",
    numberJa: "481/742", numberEn: null, nameJa: "イベルタル", nameEn: null,
    supertype: "Pokémon", subtypes: ["Basic"], types: ["Darkness"],
    hp: 110, evolvesFrom: null, abilities: [],
    attacks: [
      { nameJa: "わしづかみ", nameEn: null, cost: ["Darkness"], convertedEnergyCost: 1, damage: "20", textJa: "次の相手の番、このワザを受けたポケモンは、にげられない。", textEn: null },
      { nameJa: "ダークフェザー", nameEn: null, cost: ["Darkness","Darkness","Colorless"], convertedEnergyCost: 3, damage: "110", textJa: "", textEn: null }
    ],
    weaknesses: [{ type: "Lightning", value: "×2" }], resistances: [{ type: "Fighting", value: "-30" }], retreatCost: [],
    regulationMark: "I", rarity: "Common", rarityJa: "MC", artist: "akagi",
    nationalPokedexNumber: 717, imageJa: "images/sets/sd100/jp/481.jpg", imageEn: "images/sets/sd100/en/481.jpg", textJa: null, textEn: null, enAvailable: true
  },
  {
    id: "sd100-482", setIdJa: "sd100", setIdEn: "ascendedheroes",
    numberJa: "482/742", numberEn: null, nameJa: "フーパ", nameEn: null,
    supertype: "Pokémon", subtypes: ["Basic"], types: ["Darkness"],
    hp: 120, evolvesFrom: null, abilities: [],
    attacks: [
      { nameJa: "くすねる", nameEn: null, cost: ["Colorless"], convertedEnergyCost: 1, damage: "", textJa: "自分の山札を2枚引く。", textEn: null },
      { nameJa: "ナックルインパクト", nameEn: null, cost: ["Darkness","Darkness","Colorless"], convertedEnergyCost: 3, damage: "130", textJa: "次の自分の番、このポケモンはワザが使えない。", textEn: null }
    ],
    weaknesses: [{ type: "Grass", value: "×2" }], resistances: [], retreatCost: ["Colorless","Colorless"],
    regulationMark: "J", rarity: "Common", rarityJa: "MC", artist: "Anesaki Dynamic",
    nationalPokedexNumber: 720, imageJa: "images/sets/sd100/jp/482.jpg", imageEn: "images/sets/sd100/en/482.jpg", textJa: null, textEn: null, enAvailable: true
  },
  {
    id: "sd100-483", setIdJa: "sd100", setIdEn: "destinedrivals",
    numberJa: "483/742", numberEn: null, nameJa: "ペパーのオラチフ", nameEn: null,
    supertype: "Pokémon", subtypes: ["Basic"], types: ["Darkness"],
    hp: 70, evolvesFrom: null, abilities: [],
    attacks: [
      { nameJa: "ふむ", nameEn: null, cost: ["Colorless"], convertedEnergyCost: 1, damage: "10", textJa: "", textEn: null },
      { nameJa: "がちんこ", nameEn: null, cost: ["Colorless","Colorless","Colorless"], convertedEnergyCost: 3, damage: "50", textJa: "", textEn: null }
    ],
    weaknesses: [{ type: "Grass", value: "×2" }], resistances: [], retreatCost: ["Colorless","Colorless"],
    regulationMark: "I", rarity: "Common", rarityJa: "MC", artist: "Mina Nakai",
    nationalPokedexNumber: 942, imageJa: "images/sets/sd100/jp/483.jpg", imageEn: "images/sets/sd100/en/483.jpg", textJa: null, textEn: null, enAvailable: true
  },
  {
    id: "sd100-484", setIdJa: "sd100", setIdEn: "destinedrivals",
    numberJa: "484/742", numberEn: null, nameJa: "ペパーのマフィティフex", nameEn: null,
    supertype: "Pokémon", subtypes: ["Stage 1","ex"], types: ["Darkness"],
    hp: 270, evolvesFrom: "ペパーのオラチフ", abilities: [],
    attacks: [
      { nameJa: "ハッスルタックル", nameEn: null, cost: ["Colorless"], convertedEnergyCost: 1, damage: "30+", textJa: "このポケモンにダメカンがのっていないなら、120ダメージ追加。", textEn: null },
      { nameJa: "おやぶんヘッド", nameEn: null, cost: ["Colorless","Colorless","Colorless"], convertedEnergyCost: 3, damage: "210", textJa: "次の自分の番、このポケモンは「おやぶんヘッド」が使えない。", textEn: null }
    ],
    weaknesses: [{ type: "Grass", value: "×2" }], resistances: [], retreatCost: ["Colorless","Colorless","Colorless","Colorless"],
    regulationMark: "I", rarity: "Double Rare", rarityJa: "MC", artist: "akagi",
    nationalPokedexNumber: 943, imageJa: "images/sets/sd100/jp/484.jpg", imageEn: "images/sets/sd100/en/484.jpg",
    textJa: "ポケモンexがきぜつしたとき、相手はサイドを2枚とる。", textEn: null, enAvailable: true
  },
  {
    id: "sd100-485", setIdJa: "sd100", setIdEn: "journeytogether",
    numberJa: "485/742", numberEn: null, nameJa: "オトシドリ", nameEn: null,
    supertype: "Pokémon", subtypes: ["Basic"], types: ["Darkness"],
    hp: 100, evolvesFrom: null, abilities: [],
    attacks: [{ nameJa: "とつげき", nameEn: null, cost: ["Darkness","Colorless"], convertedEnergyCost: 2, damage: "70", textJa: "このポケモンにも20ダメージ。", textEn: null }],
    weaknesses: [{ type: "Grass", value: "×2" }], resistances: [], retreatCost: ["Colorless"],
    regulationMark: "H", rarity: "Common", rarityJa: "MC", artist: "Aya Kusube",
    nationalPokedexNumber: 962, imageJa: "images/sets/sd100/jp/485.jpg", imageEn: "images/sets/sd100/en/485.jpg", textJa: null, textEn: null, enAvailable: true
  },
  {
    id: "sd100-486", setIdJa: "sd100", setIdEn: "temporalforces",
    numberJa: "486/742", numberEn: null, nameJa: "リキキリンex", nameEn: null,
    supertype: "Pokémon", subtypes: ["Stage 1","ex","Tera"], types: ["Darkness"],
    hp: 260, evolvesFrom: "キリンリキ",
    abilities: [{ nameJa: "テイルアーマー", nameEn: null, type: "Ability", textJa: "このポケモンは、相手のたねポケモンの「ポケモンex」からワザのダメージを受けない。", textEn: null }],
    attacks: [{ nameJa: "ダーティビーム", nameEn: null, cost: ["Psychic","Colorless","Colorless"], convertedEnergyCost: 3, damage: "160", textJa: "相手のベンチポケモン1匹にも、30ダメージ。[ベンチは弱点・抵抗力を計算しない。]", textEn: null }],
    weaknesses: [{ type: "Grass", value: "×2" }], resistances: [], retreatCost: ["Colorless","Colorless"],
    regulationMark: "H", rarity: "Double Rare", rarityJa: "MC", artist: "5ban Graphics",
    nationalPokedexNumber: 981, imageJa: "images/sets/sd100/jp/486.jpg", imageEn: "images/sets/sd100/en/486.jpg",
    textJa: "このポケモンは、ベンチにいるかぎり、ワザのダメージを受けない。\nポケモンexがきぜつしたとき、相手はサイドを2枚とる。", textEn: null, enAvailable: true
  },
  {
    id: "sd100-487", setIdJa: "sd100", setIdEn: "twilightmasquerade",
    numberJa: "487/742", numberEn: null, nameJa: "アラブルタケ", nameEn: null,
    supertype: "Pokémon", subtypes: ["Basic","Ancient"], types: ["Darkness"],
    hp: 120, evolvesFrom: null, abilities: [],
    attacks: [
      { nameJa: "どくをとばす", nameEn: null, cost: ["Darkness"], convertedEnergyCost: 1, damage: "", textJa: "相手のバトルポケモンをどくにする。", textEn: null },
      { nameJa: "まくしなぐる", nameEn: null, cost: ["Darkness","Colorless","Colorless"], convertedEnergyCost: 3, damage: "50+", textJa: "相手のバトルポケモンにのっているダメカンの数×50ダメージ追加。", textEn: null }
    ],
    weaknesses: [{ type: "Grass", value: "×2" }], resistances: [], retreatCost: ["Colorless","Colorless","Colorless","Colorless"],
    regulationMark: "H", rarity: "Common", rarityJa: "MC", artist: "danciao",
    nationalPokedexNumber: 986, imageJa: "images/sets/sd100/jp/487.jpg", imageEn: "images/sets/sd100/en/487.jpg", textJa: null, textEn: null, enAvailable: true
  },
  {
    id: "sd100-488", setIdJa: "sd100", setIdEn: "shroudedfable",
    numberJa: "488/742", numberEn: null, nameJa: "イイネイヌex", nameEn: null,
    supertype: "Pokémon", subtypes: ["Basic","ex"], types: ["Darkness"],
    hp: 250, evolvesFrom: null, abilities: [],
    attacks: [
      { nameJa: "ポイズンマッスル", nameEn: null, cost: ["Colorless"], convertedEnergyCost: 1, damage: "", textJa: "自分の山札から「基本●エネルギー」を2枚まで選び、このポケモンにつける。そして山札を切る。つけた場合、このポケモンをどくにする。", textEn: null },
      { nameJa: "クレイジーチェーン", nameEn: null, cost: ["Darkness","Darkness","Colorless"], convertedEnergyCost: 3, damage: "130+", textJa: "このポケモンがどくなら、130ダメージ追加。", textEn: null }
    ],
    weaknesses: [{ type: "Fighting", value: "×2" }], resistances: [], retreatCost: ["Colorless","Colorless","Colorless"],
    regulationMark: "H", rarity: "Double Rare", rarityJa: "MC", artist: "takuyoa",
    nationalPokedexNumber: 1013, imageJa: "images/sets/sd100/jp/488.jpg", imageEn: "images/sets/sd100/en/488.jpg",
    textJa: "ポケモンexがきぜつしたとき、相手はサイドを2枚とる。", textEn: null, enAvailable: true
  },
  {
    id: "sd100-489", setIdJa: "sd100", setIdEn: "ascendedheroes",
    numberJa: "489/742", numberEn: null, nameJa: "キチキギスex", nameEn: null,
    supertype: "Pokémon", subtypes: ["Basic","ex"], types: ["Darkness"],
    hp: 210, evolvesFrom: null,
    abilities: [{ nameJa: "さかてにとる", nameEn: null, type: "Ability", textJa: "前の相手の番に、自分のポケモンがきぜつしていたなら、自分の番に1回使える。自分の山札を3枚引く。この番、すでに別の「さかてにとる」を使っていたなら、この特性は使えない。", textEn: null }],
    attacks: [{ nameJa: "クルーエルアロー", nameEn: null, cost: ["Colorless","Colorless","Colorless"], convertedEnergyCost: 3, damage: "", textJa: "相手のポケモン1匹に、100ダメージ。[ベンチは弱点・抵抗力を計算しない。]", textEn: null }],
    weaknesses: [{ type: "Fighting", value: "×2" }], resistances: [], retreatCost: ["Colorless"],
    regulationMark: "H", rarity: "Double Rare", rarityJa: "MC", artist: "takuyoa",
    nationalPokedexNumber: 1015, imageJa: "images/sets/sd100/jp/489.jpg", imageEn: "images/sets/sd100/en/489.jpg",
    textJa: "ポケモンexがきぜつしたとき、相手はサイドを2枚とる。", textEn: null, enAvailable: true
  },
  {
    id: "sd100-490", setIdJa: "sd100", setIdEn: "ascendedheroes",
    numberJa: "490/742", numberEn: null, nameJa: "モモワロウ", nameEn: null,
    supertype: "Pokémon", subtypes: ["Basic"], types: ["Darkness"],
    hp: 80, evolvesFrom: null,
    abilities: [{ nameJa: "もうどくしはい", nameEn: null, type: "Ability", textJa: "このポケモンがバトル場にいるかぎり、相手のどくのポケモンは、どくでのせるダメカンの数が5個多くなる。", textEn: null }],
    attacks: [{ nameJa: "ポイズンチェーン", nameEn: null, cost: ["Darkness","Colorless"], convertedEnergyCost: 2, damage: "10", textJa: "相手のバトルポケモンをどくにする。次の相手の番、このワザを受けたポケモンは、にげられない。", textEn: null }],
    weaknesses: [{ type: "Fighting", value: "×2" }], resistances: [], retreatCost: ["Colorless"],
    regulationMark: "H", rarity: "Common", rarityJa: "MC", artist: "Souichirou Gunjima",
    nationalPokedexNumber: 1025, imageJa: "images/sets/sd100/jp/490.jpg", imageEn: "images/sets/sd100/en/490.jpg", textJa: null, textEn: null, enAvailable: true
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
