'use strict';
const fs = require('fs');
const path = require('path');
const cardsDir = path.join(__dirname, '..', 'data', 'cards');

// Shared trainer texts (read from card images)
const TXT = {
  energyRecycler_ja: '自分のトラッシュから基本エネルギーを5枚まで選び、相手に見せて、山札にもどして切る。',
  energyRecycler_en: 'Put up to 5 Basic Energy cards from your discard pile back into your deck. Shuffle your deck afterward.',
  superRod_ja: '自分のトラッシュからポケモンと基本エネルギーを合計3枚まで選び、相手に見せて、山札にもどして切る。',
  superRod_en: 'Put up to 3 Pokémon and Basic Energy cards from your discard pile back into your deck in any combination. Shuffle your deck afterward.',
  buddyPoffin_ja: '自分の山札から、HPが70以下のたねポケモンを2枚まで選び、ベンチに出す。そして山札を切る。',
  buddyPoffin_en: 'Search your deck for up to 2 Basic Pokémon with 70 HP or less, reveal them, and put them onto your Bench. Then, shuffle your deck.',
  ultraBall_ja: '手札を2枚トラッシュする。このカードは、手札を2枚トラッシュできない場合、使えない。自分の山札からポケモンを1枚選び、相手に見せて、手札に加える。そして山札を切る。',
  ultraBall_en: 'Discard 2 cards from your hand. If you can\'t discard 2 cards, you can\'t play this card. Search your deck for a Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.',
  rareCandy_ja: '自分のバトル場か自分のベンチの「たね」ポケモンに、自分の手札から、そのポケモンの進化先の「2進化」ポケモンを出して、進化させる。このカードは、自分の最初の番と、そのポケモンがバトル場か自分のベンチに出たばかりの番には使えない。',
  rareCandy_en: 'Choose 1 of your Basic Pokémon in play. If you have a Stage 2 card in your hand that evolves from that Pokémon, put that card onto the Basic Pokémon to evolve it, skipping the Stage 1. You can\'t use this card during your first turn or on a Basic Pokémon that was put into play this turn.',
  switch_ja: '自分のバトルポケモンをベンチポケモンと入れ替える。',
  switch_en: 'Switch your Active Pokémon with 1 of your Benched Pokémon.',
  iono_ja: '自分と相手の手札を、それぞれ山札の下にもどす。それぞれのプレイヤーは、自分の残りのサイドの枚数分、山札を引く。',
  iono_en: 'Each player shuffles their hand and puts it on the bottom of their deck. Each player then draws a card for each of their remaining Prize cards.',
  nemona_ja: '手札が6枚になるように山札を引く。',
  nemona_en: 'Draw cards until you have 6 cards in your hand.',
  profResearch_ja: '自分の手札をすべてトラッシュし、山札を7枚引く。',
  profResearch_en: 'Discard your hand and draw 7 cards.',
  boss_ja: '相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。',
  boss_en: 'Switch 1 of your opponent\'s Benched Pokémon with their Active Pokémon.',
  nestBall_ja: '自分の山札からたねポケモンを1枚選び、ベンチに出す。そして山札を切る。',
  nestBall_en: 'Search your deck for a Basic Pokémon and put it onto your Bench. Then, shuffle your deck.',
  pokeGear_ja: '自分の山札の上から7枚を見て、その中からサポートを1枚選び、相手に見せて、手札に加える。残りのカードを山札にもどして切る。',
  pokeGear_en: 'Look at the top 7 cards of your deck. You may reveal a Supporter card you find there and put it into your hand. Shuffle the other cards back into your deck.',
  teraOrb_ja: '自分の山札から「テラスタル」のポケモンを1枚選び、相手に見せて、手札に加える。そして山札を切る。',
  teraOrb_en: 'Search your deck for a Pokémon with "Tera" in its name, reveal it, and put it into your hand. Then, shuffle your deck.',
  crispin_ja: '自分の山札から、それぞれちがうタイプの基本エネルギーを2枚まで選び、相手に見せて、どちらか1枚を手札に加え、残りのエネルギーを自分のポケモンにつける。そして山札を切る。',
  crispin_en: 'Search your deck for up to 2 Basic Energy cards of different types, reveal them, put 1 of them into your hand, and attach the other to 1 of your Pokémon. Then, shuffle your deck.',
  graniteCave_ja: 'おたがいの「ダイゴのポケモン」全員が、相手のポケモンから受けるワザのダメージは「-30」される。',
  spikemuthGym_ja: 'おたがいのプレイヤーは、自分の番ごとに1回、自分の山札から「マリィのポケモン」を1枚選び、相手に見せて、手札に加えてよい。そして山札を切る。',
  perfectMixer_ja: '自分の山札から好きなカードを5枚まで選び、トラッシュする。そして山札を切る。',
  preciousCarrier_ja: '自分の山札からたねポケモンを好きなだけ選び、ベンチに出す。そして山札を切る。',
};

// Complete card data indexed by ID
const D = {

  // ═══════════════════════════════════════════════════════════════════
  // SSB — Starter Set ex スティーブン (ダイゴ/Steven)  svOD  19 cards
  // ═══════════════════════════════════════════════════════════════════

  'ssb-1': {
    nameJa: 'ダイゴのヤジロン', numberJa: '001/018',
    hp: 60, types: ['Psychic'],
    abilities: [],
    attacks: [
      { nameJa: 'しょうしゅうサイン', nameEn: null, cost: ['Colorless'], damage: '', textJa: '自分の山札からたねポケモンの「ダイゴのポケモン」を2枚まで選び、ベンチに出す。そして山札を切る。', textEn: null },
      { nameJa: 'ねんどうだん', nameEn: null, cost: ['Psychic'], damage: '20', textJa: '', textEn: null },
    ],
    weaknesses: [{ type: 'Darkness', value: '×2' }],
    resistances: [{ type: 'Fighting', value: '-30' }],
    retreatCost: ['Colorless'],
    regulationMark: 'I', artist: 'Tonji Matsuno', nationalPokedexNumber: 343,
  },
  'ssb-2': {
    nameJa: 'ダイゴのネンドール', numberJa: '002/018',
    hp: 120, types: ['Psychic'], evolvesFrom: 'ダイゴのヤジロン',
    abilities: [],
    attacks: [
      { nameJa: 'ぶきみなひかり', nameEn: null, cost: ['Psychic'], damage: '20', textJa: '相手のバトルポケモンをこんらんにする。', textEn: null },
      { nameJa: 'クレイブラスト', nameEn: null, cost: ['Psychic', 'Psychic', 'Colorless'], damage: '220', textJa: 'このポケモンについているエネルギーを、すべてトラッシュする。', textEn: null },
    ],
    weaknesses: [{ type: 'Darkness', value: '×2' }],
    resistances: [{ type: 'Fighting', value: '-30' }],
    retreatCost: ['Colorless', 'Colorless'],
    regulationMark: 'I', artist: 'nagimiso', nationalPokedexNumber: 344,
  },
  'ssb-3': {
    nameJa: 'ダイゴのメレシー', numberJa: '003/018',
    hp: 80, types: ['Psychic'],
    abilities: [
      { nameJa: 'ストーンパレス', nameEn: null, textJa: 'このポケモンがベンチにいるかぎり、自分の「ダイゴのポケモン」全員が、相手のポケモンから受けるワザのダメージは「-30」される。この効果は、この特性を持つポケモンが何匹いても、重ならない。', textEn: null },
    ],
    attacks: [
      { nameJa: 'マジカルショット', nameEn: null, cost: ['Psychic', 'Colorless', 'Colorless'], damage: '80', textJa: '', textEn: null },
    ],
    weaknesses: [{ type: 'Metal', value: '×2' }],
    resistances: [],
    retreatCost: ['Colorless', 'Colorless'],
    regulationMark: 'I', artist: 'Ligton', nationalPokedexNumber: 703,
  },
  'ssb-4': {
    nameJa: 'ダイゴのエアームド', numberJa: '004/018',
    hp: 120, types: ['Metal'],
    abilities: [],
    attacks: [
      { nameJa: 'するどいはね', nameEn: null, cost: ['Colorless', 'Colorless'], damage: '30', textJa: '', textEn: null },
      { nameJa: 'ツインソニック', nameEn: null, cost: ['Metal', 'Metal', 'Colorless'], damage: '', textJa: '相手のポケモン2匹に、それぞれ50ダメージ。[ベンチは弱点・抵抗力を計算しない。]', textEn: null },
    ],
    weaknesses: [{ type: 'Lightning', value: '×2' }],
    resistances: [{ type: 'Fighting', value: '-30' }],
    retreatCost: ['Colorless'],
    regulationMark: 'I', artist: 'Nisota Niso', nationalPokedexNumber: 227,
  },
  'ssb-5': {
    nameJa: 'ダイゴのダンバル', numberJa: '005/018',
    hp: 70, types: ['Metal'],
    abilities: [],
    attacks: [
      { nameJa: 'ぶつかる', nameEn: null, cost: ['Metal', 'Colorless'], damage: '30', textJa: '', textEn: null },
    ],
    weaknesses: [{ type: 'Fire', value: '×2' }],
    resistances: [{ type: 'Grass', value: '-30' }],
    retreatCost: ['Colorless'],
    regulationMark: 'I', artist: 'Takeshi Nakamura', nationalPokedexNumber: 374,
  },
  'ssb-6': {
    nameJa: 'ダイゴのメタング', numberJa: '006/018',
    hp: 100, types: ['Metal'], evolvesFrom: 'ダイゴのダンバル',
    abilities: [],
    attacks: [
      { nameJa: 'メタルスラッシュ', nameEn: null, cost: ['Metal', 'Colorless'], damage: '70', textJa: '次の自分の番、このポケモンはワザが使えない。', textEn: null },
    ],
    weaknesses: [{ type: 'Fire', value: '×2' }],
    resistances: [{ type: 'Grass', value: '-30' }],
    retreatCost: ['Colorless', 'Colorless'],
    regulationMark: 'I', artist: 'Anesaki Dynamic', nationalPokedexNumber: 375,
  },
  'ssb-7': {
    nameJa: 'ダイゴのメタグロスex', numberJa: '007/018',
    hp: 340, types: ['Metal'], evolvesFrom: 'ダイゴのメタング',
    subtypes: ['Stage 2', 'ex'],
    abilities: [
      { nameJa: 'エクスブート', nameEn: null, textJa: '自分の番に1回使える。自分の山札から「基本超エネルギー」と「基本鋼エネルギー」をそれぞれ1枚まで選び、自分の超または鋼のポケモンに好きなようにつける。そして山札を切る。', textEn: null },
    ],
    attacks: [
      { nameJa: 'メタルスタンプ', nameEn: null, cost: ['Metal', 'Colorless', 'Colorless'], damage: '200', textJa: '', textEn: null },
    ],
    weaknesses: [{ type: 'Fire', value: '×2' }],
    resistances: [{ type: 'Grass', value: '-30' }],
    retreatCost: ['Colorless', 'Colorless', 'Colorless'],
    regulationMark: 'I', artist: 'PLANETA Mochizuki', nationalPokedexNumber: 376,
  },
  // ssb trainer cards
  'ssb-8': {
    numberJa: '008/018', nameJa: 'エネルギーリサイクル',
    textJa: TXT.energyRecycler_ja, textEn: TXT.energyRecycler_en,
    regulationMark: 'I', artist: 'Toyste Beach',
  },
  'ssb-9': {
    nameJa: 'すごいつりざお', numberJa: '009/018',
    textJa: TXT.superRod_ja, textEn: TXT.superRod_en,
    regulationMark: 'G', artist: 'Toyste Beach',
  },
  'ssb-10': {
    numberJa: '010/018', nameJa: 'なかよしポフィン',
    textJa: TXT.buddyPoffin_ja, textEn: TXT.buddyPoffin_en,
    regulationMark: 'I', artist: null,
  },
  'ssb-11': {
    numberJa: '011/018', nameJa: 'ハイパーボール',
    textJa: TXT.ultraBall_ja, textEn: TXT.ultraBall_en,
    regulationMark: 'G', artist: 'Toyste Beach',
  },
  'ssb-12': {
    numberJa: '012/018', nameJa: 'ふしぎなアメ',
    textJa: TXT.rareCandy_ja, textEn: TXT.rareCandy_en,
    regulationMark: 'G', artist: 'Toyste Beach',
  },
  'ssb-13': {
    nameJa: 'ポケモンいれかえ', nameEn: 'Switch', numberJa: '013/018',
    setIdEn: 'svi', numberEn: '194/198', imageEn: 'https://images.pokemontcg.io/sv1/194_hires.png',
    textJa: TXT.switch_ja, textEn: TXT.switch_en,
    regulationMark: 'G', artist: 'Studio Bora Inc.',
  },
  'ssb-14': {
    numberJa: '014/018', nameJa: 'ナンジャモ',
    textJa: TXT.iono_ja, textEn: TXT.iono_en,
    regulationMark: 'G', artist: null,
  },
  'ssb-15': {
    numberJa: '015/018', nameJa: 'ネモ',
    textJa: TXT.nemona_ja, textEn: TXT.nemona_en,
    regulationMark: 'G', artist: null,
  },
  'ssb-16': {
    numberJa: '016/018',
    textJa: TXT.profResearch_ja, textEn: TXT.profResearch_en,
    regulationMark: 'G', artist: 'Hideki Ishikawa',
  },
  'ssb-17': {
    numberJa: '017/018', nameJa: 'ボスの指令',
    textJa: TXT.boss_ja, textEn: TXT.boss_en,
    regulationMark: 'G', artist: null,
  },
  'ssb-18': {
    nameJa: 'いしのどうくつ', nameEn: 'Granite Cave', numberJa: '018/018',
    textJa: TXT.graniteCave_ja, textEn: null,
    regulationMark: 'I', artist: 'AYUMI ODASHIMA',
  },
  'ssb-19': {
    nameJa: 'ダイゴのダンバル', numberJa: '019/018',
    hp: 70, types: ['Metal'],
    abilities: [],
    attacks: [
      { nameJa: 'ぶつかる', nameEn: null, cost: ['Metal', 'Colorless'], damage: '30', textJa: '', textEn: null },
    ],
    weaknesses: [{ type: 'Fire', value: '×2' }],
    resistances: [{ type: 'Grass', value: '-30' }],
    retreatCost: ['Colorless'],
    regulationMark: 'I', artist: 'hncl', nationalPokedexNumber: 374,
  },

  // ═══════════════════════════════════════════════════════════════════
  // SSMR — Starter Set ex マリィ  svOM  20 cards
  // ═══════════════════════════════════════════════════════════════════

  'ssmr-1': {
    nameJa: 'マリィのチョロネコ', numberJa: '001/019',
    hp: 60, types: ['Darkness'],
    abilities: [],
    attacks: [
      { nameJa: 'シャープネイル', nameEn: null, cost: ['Darkness'], damage: '20+', textJa: '相手のバトルポケモンが「ポケモンex」なら、40ダメージ追加。', textEn: null },
    ],
    weaknesses: [{ type: 'Grass', value: '×2' }],
    resistances: [],
    retreatCost: ['Colorless'],
    regulationMark: 'I', artist: 'REND', nationalPokedexNumber: 509,
  },
  'ssmr-2': {
    nameJa: 'マリィのレパルダス', numberJa: '002/019',
    hp: 100, types: ['Darkness'], evolvesFrom: 'マリィのチョロネコ',
    abilities: [],
    attacks: [
      { nameJa: 'シャープクロー', nameEn: null, cost: ['Darkness', 'Darkness'], damage: '70+', textJa: '相手のバトルポケモンが「ポケモンex」なら、70ダメージ追加。', textEn: null },
    ],
    weaknesses: [{ type: 'Grass', value: '×2' }],
    resistances: [],
    retreatCost: ['Colorless'],
    regulationMark: 'I', artist: 'Hasuno', nationalPokedexNumber: 510,
  },
  'ssmr-3': {
    nameJa: 'マリィのズルッグ', numberJa: '003/019',
    hp: 70, types: ['Darkness'],
    abilities: [],
    attacks: [
      { nameJa: 'かみくだく', nameEn: null, cost: ['Darkness', 'Darkness', 'Colorless'], damage: '50', textJa: '相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。', textEn: null },
    ],
    weaknesses: [{ type: 'Grass', value: '×2' }],
    resistances: [],
    retreatCost: ['Colorless'],
    regulationMark: 'I', artist: 'Teeziro', nationalPokedexNumber: 559,
  },
  'ssmr-4': {
    nameJa: 'マリィのズルズキン', numberJa: '004/019',
    hp: 120, types: ['Darkness'], evolvesFrom: 'マリィのズルッグ',
    abilities: [],
    attacks: [
      { nameJa: 'うしろげり', nameEn: null, cost: ['Darkness'], damage: '40', textJa: '', textEn: null },
      { nameJa: 'ワイルドタックル', nameEn: null, cost: ['Darkness', 'Darkness', 'Colorless'], damage: '160', textJa: 'このポケモンにも30ダメージ。', textEn: null },
    ],
    weaknesses: [{ type: 'Grass', value: '×2' }],
    resistances: [],
    retreatCost: ['Colorless', 'Colorless'],
    regulationMark: 'I', artist: 'Kazumasa Yasukuni', nationalPokedexNumber: 560,
  },
  'ssmr-5': {
    nameJa: 'マリィのベロバー', numberJa: '005/019',
    hp: 70, types: ['Darkness'],
    abilities: [],
    attacks: [
      { nameJa: 'くすねる', nameEn: null, cost: ['Colorless'], damage: '', textJa: '自分の山札を1枚引く。', textEn: null },
      { nameJa: 'どつく', nameEn: null, cost: ['Darkness'], damage: '10', textJa: '', textEn: null },
    ],
    weaknesses: [{ type: 'Grass', value: '×2' }],
    resistances: [],
    retreatCost: ['Colorless'],
    regulationMark: 'I', artist: 'KEIICHIRO ITO', nationalPokedexNumber: 859,
  },
  'ssmr-6': {
    nameJa: 'マリィのギモー', numberJa: '006/019',
    hp: 100, types: ['Darkness'], evolvesFrom: 'マリィのベロバー',
    abilities: [],
    attacks: [
      { nameJa: 'どつく', nameEn: null, cost: ['Darkness', 'Darkness'], damage: '60', textJa: '', textEn: null },
    ],
    weaknesses: [{ type: 'Grass', value: '×2' }],
    resistances: [],
    retreatCost: ['Colorless'],
    regulationMark: 'I', artist: 'NC Empire', nationalPokedexNumber: 860,
  },
  'ssmr-7': {
    nameJa: 'マリィのオーロンゲex', numberJa: '007/019',
    hp: 320, types: ['Darkness'], evolvesFrom: 'マリィのギモー',
    subtypes: ['Stage 2', 'ex'],
    abilities: [
      { nameJa: 'パンクアップ', nameEn: null, textJa: '自分の番に、このカードを手札から出して進化させたとき、1回使える。自分の山札から「基本悪エネルギー」を5枚まで選び、自分の「マリィのポケモン」に好きなようにつける。そして山札を切る。', textEn: null },
    ],
    attacks: [
      { nameJa: 'シャドーバレット', nameEn: null, cost: ['Darkness', 'Darkness'], damage: '180', textJa: '相手のベンチポケモン1匹にも、30ダメージ。[ベンチは弱点・抵抗力を計算しない。]', textEn: null },
    ],
    weaknesses: [{ type: 'Grass', value: '×2' }],
    resistances: [],
    retreatCost: ['Colorless', 'Colorless', 'Colorless'],
    regulationMark: 'I', artist: 'PLANETA Mochizuki', nationalPokedexNumber: 861,
  },
  'ssmr-8': {
    nameJa: 'マリィのモルペコ', numberJa: '008/019',
    hp: 70, types: ['Darkness'],
    abilities: [],
    attacks: [
      { nameJa: 'スパイクホイール', nameEn: null, cost: ['Colorless', 'Colorless', 'Colorless'], damage: '20+', textJa: 'このポケモンについている悪エネルギーの数×40ダメージ追加。', textEn: null },
    ],
    weaknesses: [{ type: 'Grass', value: '×2' }],
    resistances: [],
    retreatCost: [],
    regulationMark: 'I', artist: 'Mina Nakai', nationalPokedexNumber: 877,
  },
  // ssmr trainer cards
  'ssmr-9': {
    numberJa: '009/019', nameJa: 'エネルギーリサイクル',
    textJa: TXT.energyRecycler_ja, textEn: TXT.energyRecycler_en,
    regulationMark: 'I', artist: 'Toyste Beach',
  },
  'ssmr-10': {
    nameJa: 'すごいつりざお', numberJa: '010/019',
    textJa: TXT.superRod_ja, textEn: TXT.superRod_en,
    regulationMark: 'G', artist: 'Toyste Beach',
  },
  'ssmr-11': {
    numberJa: '011/019', nameJa: 'なかよしポフィン',
    textJa: TXT.buddyPoffin_ja, textEn: TXT.buddyPoffin_en,
    regulationMark: 'I', artist: null,
  },
  'ssmr-12': {
    numberJa: '012/019', nameJa: 'ハイパーボール',
    textJa: TXT.ultraBall_ja, textEn: TXT.ultraBall_en,
    regulationMark: 'G', artist: 'Toyste Beach',
  },
  'ssmr-13': {
    numberJa: '013/019', nameJa: 'ふしぎなアメ',
    textJa: TXT.rareCandy_ja, textEn: TXT.rareCandy_en,
    regulationMark: 'G', artist: 'Toyste Beach',
  },
  'ssmr-14': {
    nameJa: 'ポケモンいれかえ', nameEn: 'Switch', numberJa: '014/019',
    setIdEn: 'svi', numberEn: '194/198', imageEn: 'https://images.pokemontcg.io/sv1/194_hires.png',
    textJa: TXT.switch_ja, textEn: TXT.switch_en,
    regulationMark: 'G', artist: 'Studio Bora Inc.',
  },
  'ssmr-15': {
    numberJa: '015/019', nameJa: 'ナンジャモ',
    textJa: TXT.iono_ja, textEn: TXT.iono_en,
    regulationMark: 'G', artist: null,
  },
  'ssmr-16': {
    numberJa: '016/019', nameJa: 'ネモ',
    textJa: TXT.nemona_ja, textEn: TXT.nemona_en,
    regulationMark: 'G', artist: null,
  },
  'ssmr-17': {
    numberJa: '017/019',
    textJa: TXT.profResearch_ja, textEn: TXT.profResearch_en,
    regulationMark: 'G', artist: 'Taira Akitsu',
  },
  'ssmr-18': {
    numberJa: '018/019', nameJa: 'ボスの指令',
    textJa: TXT.boss_ja, textEn: TXT.boss_en,
    regulationMark: 'G', artist: null,
  },
  'ssmr-19': {
    nameJa: 'スパイクタウンジム', nameEn: 'Spikemuth Gym', numberJa: '019/019',
    textJa: TXT.spikemuthGym_ja, textEn: null,
    regulationMark: 'I', artist: 'AYUMI ODASHIMA',
  },
  'ssmr-20': {
    nameJa: 'マリィのモルペコ', numberJa: '020/019',
    hp: 70, types: ['Darkness'],
    abilities: [],
    attacks: [
      { nameJa: 'スパイクホイール', nameEn: null, cost: ['Colorless', 'Colorless', 'Colorless'], damage: '20+', textJa: 'このポケモンについている悪エネルギーの数×40ダメージ追加。', textEn: null },
    ],
    weaknesses: [{ type: 'Grass', value: '×2' }],
    resistances: [],
    retreatCost: [],
    regulationMark: 'I', artist: 'Susumu Maeva', nationalPokedexNumber: 877,
  },

  // ═══════════════════════════════════════════════════════════════════
  // SSTCE — Starter Set Terastal Stellar ブレイズrex  svLS  22 cards
  // ═══════════════════════════════════════════════════════════════════

  'sstce-1': {
    nameJa: 'ロコン', numberJa: '001/022',
    hp: 70, types: ['Fire'],
    abilities: [],
    attacks: [
      { nameJa: 'とっしん', nameEn: null, cost: ['Fire'], damage: '30', textJa: 'このポケモンにも10ダメージ。', textEn: null },
    ],
    weaknesses: [{ type: 'Water', value: '×2' }],
    resistances: [],
    retreatCost: ['Colorless'],
    regulationMark: 'H', artist: 'Narumi Sato', nationalPokedexNumber: 37,
  },
  'sstce-2': {
    nameJa: 'キュウコン', numberJa: '002/022',
    hp: 120, types: ['Fire'], evolvesFrom: 'ロコン',
    abilities: [],
    attacks: [
      { nameJa: 'ほのおのみたま', nameEn: null, cost: ['Fire'], damage: '50', textJa: '相手のベンチポケモン1匹にも、30ダメージ。[ベンチは弱点・抵抗力を計算しない。]', textEn: null },
    ],
    weaknesses: [{ type: 'Water', value: '×2' }],
    resistances: [],
    retreatCost: ['Colorless'],
    regulationMark: 'H', artist: 'Kamome Shirahama', nationalPokedexNumber: 38,
  },
  'sstce-3': {
    nameJa: 'ホウオウ', numberJa: '003/022',
    hp: 130, types: ['Fire'],
    abilities: [],
    attacks: [
      { nameJa: 'はばたく', nameEn: null, cost: ['Fire', 'Colorless'], damage: '50', textJa: '', textEn: null },
      { nameJa: 'シャインブレイズ', nameEn: null, cost: ['Fire', 'Fire', 'Colorless'], damage: '100+', textJa: '自分のベンチに「テラスタル」のポケモンがいるなら、100ダメージ追加。', textEn: null },
    ],
    weaknesses: [{ type: 'Lightning', value: '×2' }],
    resistances: [{ type: 'Fighting', value: '-30' }],
    retreatCost: ['Colorless', 'Colorless'],
    regulationMark: 'H', artist: 'kodama', nationalPokedexNumber: 250,
  },
  'sstce-4': {
    nameJa: 'オドリドリ', numberJa: '004/022',
    hp: 90, types: ['Fire'],
    abilities: [],
    attacks: [
      { nameJa: 'エネアシスト', nameEn: null, cost: ['Fire'], damage: '', textJa: '自分のトラッシュから基本エネルギーを2枚まで選び、ベンチポケモン1匹につける。', textEn: null },
      { nameJa: 'ひばな', nameEn: null, cost: ['Fire'], damage: '30', textJa: 'このポケモンについているエネルギーを1個選び、トラッシュする。', textEn: null },
    ],
    weaknesses: [{ type: 'Water', value: '×2' }],
    resistances: [],
    retreatCost: ['Colorless'],
    regulationMark: 'H', artist: 'Heisuke Kitazawa', nationalPokedexNumber: 741,
  },
  'sstce-5': {
    nameJa: 'カルボウ', numberJa: '005/022',
    hp: 70, types: ['Fire'],
    abilities: [],
    attacks: [
      { nameJa: 'おにび', nameEn: null, cost: ['Fire'], damage: '20', textJa: '', textEn: null },
    ],
    weaknesses: [{ type: 'Water', value: '×2' }],
    resistances: [],
    retreatCost: ['Colorless'],
    regulationMark: 'H', artist: 'Kariya', nationalPokedexNumber: 935,
  },
  'sstce-6': {
    nameJa: 'ソウブレイズex', numberJa: '006/022',
    hp: 270, types: ['Fire'], evolvesFrom: 'カルボウ',
    subtypes: ['Stage 1', 'ex', 'Tera'],
    abilities: [],
    attacks: [
      { nameJa: 'しんえんほむら', nameEn: null, cost: ['Fire'], damage: '30+', textJa: '自分のトラッシュにあるエネルギーの枚数×20ダメージ追加。', textEn: null },
      { nameJa: 'アメジストレイジ', nameEn: null, cost: ['Fire', 'Psychic', 'Metal'], damage: '280', textJa: 'このポケモンについているエネルギーを、すべてトラッシュする。', textEn: null },
    ],
    weaknesses: [{ type: 'Water', value: '×2' }],
    resistances: [],
    retreatCost: ['Colorless', 'Colorless'],
    regulationMark: 'H', artist: '5ban Graphics', nationalPokedexNumber: 936,
  },
  'sstce-7': {
    nameJa: 'シンボラー', numberJa: '007/022',
    hp: 110, types: ['Psychic'],
    abilities: [],
    attacks: [
      { nameJa: 'ダブルドロー', nameEn: null, cost: ['Colorless'], damage: '', textJa: '自分の山札を2枚引く。', textEn: null },
      { nameJa: 'ねんりき', nameEn: null, cost: ['Psychic', 'Colorless', 'Colorless'], damage: '60', textJa: 'コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。', textEn: null },
    ],
    weaknesses: [{ type: 'Lightning', value: '×2' }],
    resistances: [{ type: 'Fighting', value: '-30' }],
    retreatCost: ['Colorless'],
    regulationMark: 'H', artist: 'svlt', nationalPokedexNumber: 561,
  },
  'sstce-8': {
    nameJa: 'レジスチル', numberJa: '008/022',
    hp: 130, types: ['Metal'],
    abilities: [],
    attacks: [
      { nameJa: 'レイジングハンマー', nameEn: null, cost: ['Metal', 'Colorless'], damage: '60+', textJa: 'このポケモンにのっているダメカンの数×10ダメージ追加。', textEn: null },
    ],
    weaknesses: [{ type: 'Fire', value: '×2' }],
    resistances: [{ type: 'Grass', value: '-30' }],
    retreatCost: ['Colorless', 'Colorless', 'Colorless'],
    regulationMark: 'H', artist: 'Shiburingaru', nationalPokedexNumber: 379,
  },
  'sstce-9': {
    nameJa: 'ホーホー', numberJa: '009/022',
    hp: 70, types: ['Colorless'],
    abilities: [],
    attacks: [
      { nameJa: 'さんどづき', nameEn: null, cost: ['Colorless'], damage: '10×', textJa: 'コインを3回投げ、オモテの数×10ダメージ。', textEn: null },
    ],
    weaknesses: [{ type: 'Lightning', value: '×2' }],
    resistances: [{ type: 'Fighting', value: '-30' }],
    retreatCost: ['Colorless'],
    regulationMark: 'H', artist: 'Yukihiro Tada', nationalPokedexNumber: 163,
  },
  'sstce-10': {
    nameJa: 'ヨルノズク', numberJa: '010/022',
    hp: 100, types: ['Colorless'], evolvesFrom: 'ホーホー',
    abilities: [
      { nameJa: 'ほうせきさがし', nameEn: null, textJa: '自分の番に、このカードを手札から出して進化させたとき、自分の場に「テラスタル」のポケモンがいるなら、1回使える。自分の山札からトレーナーズを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。', textEn: null },
    ],
    attacks: [
      { nameJa: 'スピードウイング', nameEn: null, cost: ['Colorless', 'Colorless'], damage: '60', textJa: '', textEn: null },
    ],
    weaknesses: [{ type: 'Lightning', value: '×2' }],
    resistances: [{ type: 'Fighting', value: '-30' }],
    retreatCost: ['Colorless'],
    regulationMark: 'H', artist: 'matazo', nationalPokedexNumber: 164,
  },
  // sstce trainer cards
  'sstce-11': {
    nameJa: 'すごいつりざお', numberJa: '011/022',
    textJa: TXT.superRod_ja, textEn: TXT.superRod_en,
    regulationMark: 'G', artist: 'Toyste Beach',
  },
  'sstce-12': {
    nameJa: 'テラスタルオーブ', numberJa: '012/022',
    textJa: TXT.teraOrb_ja, textEn: TXT.teraOrb_en,
    regulationMark: 'H', artist: 'Ayaka Yoshida',
  },
  'sstce-13': {
    nameJa: 'ネストボール', numberJa: '013/022',
    textJa: TXT.nestBall_ja, textEn: TXT.nestBall_en,
    regulationMark: 'G', artist: 'Toyste Beach',
  },
  'sstce-14': {
    nameJa: 'パーフェクトミキサー', numberJa: '014/022',
    subtypes: ['Item', 'ACE SPEC'],
    textJa: TXT.perfectMixer_ja, textEn: null,
    regulationMark: 'H', artist: 'Toyste Beach',
  },
  'sstce-15': {
    nameJa: 'ハイパーボール', numberJa: '015/022',
    textJa: TXT.ultraBall_ja, textEn: TXT.ultraBall_en,
    regulationMark: 'G', artist: 'Toyste Beach',
  },
  'sstce-16': {
    nameJa: 'ポケギア3.0', numberJa: '016/022',
    textJa: TXT.pokeGear_ja, textEn: TXT.pokeGear_en,
    regulationMark: 'G', artist: null,
  },
  'sstce-17': {
    nameJa: 'ポケモンいれかえ', numberJa: '017/022',
    textJa: TXT.switch_ja, textEn: TXT.switch_en,
    regulationMark: 'G', artist: 'Studio Bora Inc.',
  },
  'sstce-18': {
    nameJa: 'アカマツ', nameEn: 'Crispin', numberJa: '018/022',
    textJa: TXT.crispin_ja, textEn: TXT.crispin_en,
    regulationMark: 'H', artist: 'GIDORA',
  },
  'sstce-19': {
    nameJa: 'ナンジャモ', numberJa: '019/022',
    textJa: TXT.iono_ja, textEn: TXT.iono_en,
    regulationMark: 'G', artist: null,
  },
  'sstce-20': {
    nameJa: 'ネモ', numberJa: '020/022',
    textJa: TXT.nemona_ja, textEn: TXT.nemona_en,
    regulationMark: 'G', artist: null,
  },
  'sstce-21': {
    numberJa: '021/022',
    textJa: TXT.profResearch_ja, textEn: TXT.profResearch_en,
    regulationMark: 'G', artist: 'kirisAki',
  },
  'sstce-22': {
    nameJa: 'ボスの指令', numberJa: '022/022',
    textJa: TXT.boss_ja, textEn: TXT.boss_en,
    regulationMark: 'G', artist: null,
  },

  // ═══════════════════════════════════════════════════════════════════
  // SSTSY — Starter Set Terastal Stellar ニンフィア  svLN  22 cards
  // ═══════════════════════════════════════════════════════════════════

  'sstsy-1': {
    nameJa: 'マンタイン', numberJa: '001/022',
    hp: 110, types: ['Water'],
    abilities: [],
    attacks: [
      { nameJa: 'スプラッシュ', nameEn: null, cost: ['Water'], damage: '30', textJa: '', textEn: null },
      { nameJa: 'ウォーターダイブ', nameEn: null, cost: ['Water', 'Colorless'], damage: '', textJa: '相手のポケモン1匹に、50ダメージ。[ベンチは弱点・抵抗力を計算しない。]', textEn: null },
    ],
    weaknesses: [{ type: 'Lightning', value: '×2' }],
    resistances: [],
    retreatCost: ['Colorless'],
    regulationMark: 'H', artist: 'satoma', nationalPokedexNumber: 226,
  },
  'sstsy-2': {
    nameJa: 'サンダー', numberJa: '002/022',
    hp: 110, types: ['Lightning'],
    abilities: [],
    attacks: [
      { nameJa: 'ついげきボルト', nameEn: null, cost: ['Lightning', 'Colorless'], damage: '20+', textJa: '相手のバトルポケモンにのっているダメカンの数×10ダメージ追加。', textEn: null },
      { nameJa: 'ドリルくちばし', nameEn: null, cost: ['Lightning', 'Colorless', 'Colorless'], damage: '80', textJa: '', textEn: null },
    ],
    weaknesses: [{ type: 'Fighting', value: '×2' }],
    resistances: [{ type: 'Metal', value: '-30' }],
    retreatCost: ['Colorless'],
    regulationMark: 'H', artist: 'Nisota Niso', nationalPokedexNumber: 145,
  },
  'sstsy-3': {
    nameJa: 'マリル', numberJa: '003/022',
    hp: 60, types: ['Psychic'],
    abilities: [],
    attacks: [
      { nameJa: 'ころがりタックル', nameEn: null, cost: ['Psychic'], damage: '20', textJa: '', textEn: null },
    ],
    weaknesses: [{ type: 'Metal', value: '×2' }],
    resistances: [],
    retreatCost: ['Colorless'],
    regulationMark: 'H', artist: 'Shimaris Yukichi', nationalPokedexNumber: 183,
  },
  'sstsy-4': {
    nameJa: 'マリルリ', numberJa: '004/022',
    hp: 120, types: ['Psychic'], evolvesFrom: 'マリル',
    abilities: [
      { nameJa: 'きらきらシャボン', nameEn: null, textJa: '自分の場に「テラスタル」のポケモンがいるなら、このポケモンが「すてみタックル」を使うためのエネルギーは、超エネルギー1個になる。', textEn: null },
    ],
    attacks: [
      { nameJa: 'すてみタックル', nameEn: null, cost: ['Psychic', 'Psychic', 'Psychic', 'Psychic'], damage: '230', textJa: 'このポケモンにも50ダメージ。', textEn: null },
    ],
    weaknesses: [{ type: 'Metal', value: '×2' }],
    resistances: [],
    retreatCost: ['Colorless', 'Colorless'],
    regulationMark: 'H', artist: 'Orca', nationalPokedexNumber: 184,
  },
  'sstsy-5': {
    nameJa: 'ニンフィアex', numberJa: '005/022',
    hp: 270, types: ['Psychic'], evolvesFrom: 'イーブイ',
    subtypes: ['Stage 1', 'ex', 'Tera'],
    abilities: [],
    attacks: [
      { nameJa: 'マジカルチャーム', nameEn: null, cost: ['Psychic', 'Colorless', 'Colorless'], damage: '160', textJa: '次の相手の番、このワザを受けたポケモンが使うワザのダメージは「-100」される。', textEn: null },
      { nameJa: 'エンジェライト', nameEn: null, cost: ['Water', 'Lightning', 'Psychic'], damage: '', textJa: '相手のベンチポケモンを2匹選び、そのポケモンと、ついているすべてのカードを、山札にもどして切る。前の自分の番に、自分のポケモンが「エンジェライト」を使っていたなら、このワザは使えない。', textEn: null },
    ],
    weaknesses: [{ type: 'Metal', value: '×2' }],
    resistances: [],
    retreatCost: ['Colorless', 'Colorless'],
    regulationMark: 'H', artist: '5ban Graphics', nationalPokedexNumber: 700,
  },
  'sstsy-6': {
    nameJa: 'ゼルネアス', numberJa: '006/022',
    hp: 130, types: ['Psychic'],
    abilities: [],
    attacks: [
      { nameJa: 'オーロラゲイン', nameEn: null, cost: ['Psychic', 'Colorless'], damage: '30', textJa: 'このポケモンのHPを「30」回復する。', textEn: null },
      { nameJa: 'ギガインパクト', nameEn: null, cost: ['Psychic', 'Psychic', 'Colorless'], damage: '130', textJa: '次の自分の番、このポケモンはワザが使えない。', textEn: null },
    ],
    weaknesses: [{ type: 'Metal', value: '×2' }],
    resistances: [],
    retreatCost: ['Colorless', 'Colorless'],
    regulationMark: 'H', artist: 'Ryuta Fuse', nationalPokedexNumber: 716,
  },
  'sstsy-7': {
    nameJa: 'オドリドリ', numberJa: '007/022',
    hp: 90, types: ['Psychic'],
    abilities: [],
    attacks: [
      { nameJa: 'エネアシスト', nameEn: null, cost: ['Psychic'], damage: '', textJa: '自分のトラッシュから基本エネルギーを2枚まで選び、ベンチポケモン1匹につける。', textEn: null },
      { nameJa: 'げんわくダンス', nameEn: null, cost: ['Psychic', 'Colorless'], damage: '20', textJa: '相手のバトルポケモンをこんらんにする。', textEn: null },
    ],
    weaknesses: [{ type: 'Metal', value: '×2' }],
    resistances: [{ type: 'Fighting', value: '-30' }],
    retreatCost: ['Colorless'],
    regulationMark: 'H', artist: 'saino misaki', nationalPokedexNumber: 741,
  },
  'sstsy-8': {
    nameJa: 'ミミッキュ', numberJa: '008/022',
    hp: 70, types: ['Psychic'],
    abilities: [
      { nameJa: 'しんびのまもり', nameEn: null, textJa: 'このポケモンは、相手の「ポケモンex・V」からワザのダメージを受けない。', textEn: null },
    ],
    attacks: [
      { nameJa: 'ゴーストアイ', nameEn: null, cost: ['Psychic', 'Colorless'], damage: '', textJa: '相手のバトルポケモンに、ダメカンを7個のせる。', textEn: null },
    ],
    weaknesses: [{ type: 'Metal', value: '×2' }],
    resistances: [],
    retreatCost: ['Colorless'],
    regulationMark: 'G', artist: 'Kagemaru Himeno', nationalPokedexNumber: 778,
  },
  'sstsy-9': {
    nameJa: 'イーブイ', numberJa: '009/022',
    hp: 50, types: ['Colorless'],
    abilities: [
      { nameJa: 'ブーストしんか', nameEn: null, textJa: 'このポケモンは、バトル場にいるかぎり、最初の自分の番や、出したばかりの番でも進化できる。', textEn: null },
    ],
    attacks: [
      { nameJa: 'とつげき', nameEn: null, cost: ['Colorless', 'Colorless'], damage: '30', textJa: 'このポケモンにも10ダメージ。', textEn: null },
    ],
    weaknesses: [{ type: 'Fighting', value: '×2' }],
    resistances: [],
    retreatCost: ['Colorless'],
    regulationMark: 'H', artist: 'Naoyo Kimura', nationalPokedexNumber: 133,
  },
  'sstsy-10': {
    nameJa: 'カビゴン', numberJa: '010/022',
    hp: 150, types: ['Colorless'],
    abilities: [],
    attacks: [
      { nameJa: 'スパイクドロー', nameEn: null, cost: ['Colorless'], damage: '20', textJa: '自分の山札を1枚引く。', textEn: null },
      { nameJa: 'メガトンパンチ', nameEn: null, cost: ['Colorless', 'Colorless', 'Colorless'], damage: '100', textJa: '', textEn: null },
    ],
    weaknesses: [{ type: 'Fighting', value: '×2' }],
    resistances: [],
    retreatCost: ['Colorless', 'Colorless', 'Colorless', 'Colorless'],
    regulationMark: 'H', artist: 'Ounishi', nationalPokedexNumber: 143,
  },
  // sstsy trainer cards
  'sstsy-11': {
    nameJa: 'すごいつりざお', numberJa: '011/022',
    textJa: TXT.superRod_ja, textEn: TXT.superRod_en,
    regulationMark: 'G', artist: 'Toyste Beach',
  },
  'sstsy-12': {
    nameJa: 'テラスタルオーブ', numberJa: '012/022',
    textJa: TXT.teraOrb_ja, textEn: TXT.teraOrb_en,
    regulationMark: 'H', artist: 'Ayaka Yoshida',
  },
  'sstsy-13': {
    nameJa: 'ネストボール', numberJa: '013/022',
    textJa: TXT.nestBall_ja, textEn: TXT.nestBall_en,
    regulationMark: 'G', artist: 'Toyste Beach',
  },
  'sstsy-14': {
    nameJa: 'ハイパーボール', numberJa: '014/022',
    textJa: TXT.ultraBall_ja, textEn: TXT.ultraBall_en,
    regulationMark: 'G', artist: 'Toyste Beach',
  },
  'sstsy-15': {
    nameJa: 'プレシャスキャリー', numberJa: '015/022',
    subtypes: ['Item', 'ACE SPEC'],
    textJa: TXT.preciousCarrier_ja, textEn: null,
    regulationMark: 'H', artist: 'inose yukie',
  },
  'sstsy-16': {
    nameJa: 'ポケギア3.0', numberJa: '016/022',
    textJa: TXT.pokeGear_ja, textEn: TXT.pokeGear_en,
    regulationMark: 'G', artist: null,
  },
  'sstsy-17': {
    nameJa: 'ポケモンいれかえ', numberJa: '017/022',
    textJa: TXT.switch_ja, textEn: TXT.switch_en,
    regulationMark: 'G', artist: 'Studio Bora Inc.',
  },
  'sstsy-18': {
    nameJa: 'アカマツ', nameEn: 'Crispin', numberJa: '018/022',
    textJa: TXT.crispin_ja, textEn: TXT.crispin_en,
    regulationMark: 'H', artist: 'GIDORA',
  },
  'sstsy-19': {
    nameJa: 'ナンジャモ', numberJa: '019/022',
    textJa: TXT.iono_ja, textEn: TXT.iono_en,
    regulationMark: 'G', artist: null,
  },
  'sstsy-20': {
    nameJa: 'ネモ', numberJa: '020/022',
    textJa: TXT.nemona_ja, textEn: TXT.nemona_en,
    regulationMark: 'G', artist: null,
  },
  'sstsy-21': {
    numberJa: '021/022',
    textJa: TXT.profResearch_ja, textEn: TXT.profResearch_en,
    regulationMark: 'G', artist: 'kirisAki',
  },
  'sstsy-22': {
    nameJa: 'ボスの指令', numberJa: '022/022',
    textJa: TXT.boss_ja, textEn: TXT.boss_en,
    regulationMark: 'G', artist: null,
  },
};

// Apply updates
const sets = ['ssb', 'ssmr', 'sstce', 'sstsy'];
let totalUpdated = 0;

for (const setId of sets) {
  const filePath = path.join(cardsDir, `${setId}.json`);
  const cards = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  let updated = 0;

  for (const card of cards) {
    const upd = D[card.id];
    if (!upd) continue;
    Object.assign(card, upd);
    updated++;
  }

  fs.writeFileSync(filePath, JSON.stringify(cards, null, 2), 'utf8');
  console.log(`${setId}.json: updated ${updated} / ${cards.length} cards`);
  totalUpdated += updated;
}

console.log(`Done. Total updated: ${totalUpdated} / 83`);
