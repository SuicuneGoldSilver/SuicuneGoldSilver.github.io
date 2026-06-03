'use strict';
// Build ae.json (アビスアイ / Abyss Eye) — Phase 1 JP data
// Run: node scripts/build_ae.js
const fs = require('fs');
const path = require('path');

const FILE = path.join(__dirname, '../data/cards/ae.json');

function poke(n, nameJa, subtypes, types, hp, evolvesFrom, abilities, attacks, weaknesses, resistances, retreatCost, regulationMark, rarity, rarityJa, artist, dex) {
  const total = n <= 81 ? '081' : '081';
  const num = String(n).padStart(3, '0');
  return {
    id: `ae-${n}`,
    setIdJa: 'ae',
    setIdEn: null,
    numberJa: `${num}/081`,
    numberEn: null,
    nameJa,
    nameEn: null,
    supertype: 'Pokémon',
    subtypes,
    types,
    hp,
    evolvesFrom: evolvesFrom || null,
    abilities,
    attacks,
    weaknesses,
    resistances,
    retreatCost,
    regulationMark,
    rarity,
    rarityJa,
    artist,
    nationalPokedexNumber: dex || null,
    imageJa: `images/sets/ae/jp/${n}.jpg`,
    imageEn: null,
    enAvailable: false,
  };
}

function trainer(n, nameJa, subtypes, textJa, regulationMark, rarity, rarityJa, artist) {
  const num = String(n).padStart(3, '0');
  return {
    id: `ae-${n}`,
    setIdJa: 'ae',
    setIdEn: null,
    numberJa: `${num}/081`,
    numberEn: null,
    nameJa,
    nameEn: null,
    supertype: 'Trainer',
    subtypes,
    textJa: textJa || '',
    textEn: null,
    regulationMark,
    rarity,
    rarityJa,
    artist,
    imageJa: `images/sets/ae/jp/${n}.jpg`,
    imageEn: null,
    enAvailable: false,
  };
}

function energy(n, nameJa, textJa, regulationMark, rarity, rarityJa, artist) {
  const num = String(n).padStart(3, '0');
  return {
    id: `ae-${n}`,
    setIdJa: 'ae',
    setIdEn: null,
    numberJa: `${num}/081`,
    numberEn: null,
    nameJa,
    nameEn: null,
    supertype: 'Energy',
    subtypes: ['Special Energy'],
    textJa: textJa || '',
    textEn: null,
    regulationMark,
    rarity,
    rarityJa,
    artist,
    imageJa: `images/sets/ae/jp/${n}.jpg`,
    imageEn: null,
    enAvailable: false,
  };
}

const C = 'Common', U = 'Uncommon', R = 'Rare', RR = 'Double Rare';
const AR = 'Art Rare', SR = 'Special Illustration Rare', SAR = 'Special Art Rare', MUR = 'Hyper Rare';
const J = 'J', I = 'I';

const cards = [
  // --- 1-6 Grass ---
  poke(1,'トロピウス',['Basic'],['Grass'],110,null,[],[
    {nameJa:'かじつのかおり',cost:['Colorless'],damage:'',textJa:'自分の山札を上から6枚見て、その中からポケモンを好きなだけ選び、相手に見せて、手札に加える。残りのカードは山札にもどして切る。'},
    {nameJa:'ソーラービーム',cost:['Grass','Colorless'],damage:'60',textJa:''},
  ],[{type:'Fire',value:'×2'}],[],['Colorless'],J,C,'C','Akino Fukuji',357),

  poke(2,'アゴジムシ',['Basic'],['Grass'],70,null,[],[
    {nameJa:'いとをはく',cost:['Colorless'],damage:'10',textJa:'コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。'},
  ],[{type:'Fire',value:'×2'}],[],['Colorless','Colorless'],J,C,'C','Mina Nakai',736),

  poke(3,'カリキリ',['Basic'],['Grass'],70,null,[],[
    {nameJa:'とつげき',cost:['Grass'],damage:'30',textJa:'このポケモンにも10ダメージ。'},
  ],[{type:'Fire',value:'×2'}],[],['Colorless'],J,C,'C','nisimono',753),

  poke(4,'ラランテスex',['Stage 1','ex'],['Grass'],260,'カリキリ',[],[
    {nameJa:'はつらつカッター',cost:['Grass'],damage:'60+',textJa:'この番に、このポケモンのHPを回復していたなら、200ダメージ追加。'},
    {nameJa:'リーフガード',cost:['Grass','Colorless'],damage:'140',textJa:'次の相手の番、このポケモンが受けるワザのダメージは「-50」される。'},
  ],[{type:'Fire',value:'×2'}],[],['Colorless'],J,RR,'RR','5ban Graphics',754),

  poke(5,'チャデス',['Basic'],['Grass'],30,null,[
    {nameJa:'ばけがくれ',textJa:'このポケモンは、相手のワザや特性の効果を受けない。'},
  ],[
    {nameJa:'ひっそりのせる',cost:['Colorless'],damage:'',textJa:'相手のバトルポケモンに、ダメカンを1個のせる。'},
  ],[{type:'Fire',value:'×2'}],[],[],J,C,'C','Mousho',1012),

  poke(6,'ヤバソチャ',['Stage 1'],['Grass'],60,'チャデス',[
    {nameJa:'ばけがくれ',textJa:'このポケモンは、相手のワザや特性の効果を受けない。'},
  ],[
    {nameJa:'まっちゃスピン',cost:['Colorless'],damage:'',textJa:'自分のトラッシュに、特性「ばけがくれ」を持つポケモンが6枚以上あるなら、相手のポケモン全員に、それぞれダメカンを4個のせる。'},
  ],[{type:'Fire',value:'×2'}],[],['Colorless'],J,U,'U','mingo',1013),

  // --- 7-11 Fire ---
  poke(7,'ヒードラン',['Basic'],['Fire'],140,null,[],[
    {nameJa:'こがす',cost:['Fire'],damage:'',textJa:'相手のバトルポケモンをやけどにする。'},
    {nameJa:'ようがんウォール',cost:['Fire','Fire','Colorless'],damage:'120',textJa:'次の相手の番、このポケモンはやけどのポケモンからワザのダメージを受けない。'},
  ],[{type:'Water',value:'×2'}],[],['Colorless','Colorless','Colorless','Colorless'],J,U,'U','Tokeshi Nakamura',485),

  poke(8,'ヤクデ',['Basic'],['Fire'],80,null,[],[
    {nameJa:'のやき',cost:['Fire'],damage:'',textJa:'相手の山札を上から1枚トラッシュする。'},
    {nameJa:'バグパニック',cost:['Colorless','Colorless','Colorless'],damage:'50×',textJa:'自分の山札を下から7枚オモテにして、その中にある、ワザ「バグパニック」を持つポケモンの枚数×50ダメージ。オモテにしたポケモンは山札にもどして切る。残りのカードはトラッシュする。'},
  ],[{type:'Water',value:'×2'}],[],['Colorless','Colorless'],J,C,'C','Yuya Oka',850),

  poke(9,'マルヤクデ',['Stage 1'],['Fire'],140,'ヤクデ',[],[
    {nameJa:'のやき',cost:['Fire'],damage:'',textJa:'相手の山札を上から2枚トラッシュする。'},
    {nameJa:'ヒートタックル',cost:['Fire','Colorless','Colorless','Colorless'],damage:'160',textJa:'このポケモンにも30ダメージ。'},
  ],[{type:'Water',value:'×2'}],[],['Colorless','Colorless','Colorless'],J,C,'C','Kouki Saitou',851),

  poke(10,'カルボウ',['Basic'],['Fire'],80,null,[],[
    {nameJa:'ぜんりょくパンチ',cost:['Fire'],damage:'40',textJa:'コインを1回投げウラなら、このワザは失敗。'},
  ],[{type:'Water',value:'×2'}],[],['Colorless','Colorless'],J,C,'C','Ryuta Fuse',935),

  poke(11,'グレンアルマ',['Stage 1'],['Fire'],140,'カルボウ',[],[
    {nameJa:'フレイムレギオン',cost:['Fire'],damage:'40+',textJa:'エネルギーがついている自分のベンチポケモンの数×40ダメージ追加。'},
  ],[{type:'Water',value:'×2'}],[],['Colorless','Colorless'],J,R,'R','Jiro Sasumo',936),

  // --- 12-21 Water ---
  poke(12,'トサキント',['Basic'],['Water'],70,null,[],[
    {nameJa:'つきさす',cost:['Colorless','Colorless'],damage:'30',textJa:''},
  ],[{type:'Lightning',value:'×2'}],[],['Colorless'],J,C,'C','Shibuzoh.',118),

  poke(13,'アズマオウ',['Stage 1'],['Water'],110,'トサキント',[],[
    {nameJa:'ハイドロショット',cost:['Colorless','Colorless','Colorless'],damage:'',textJa:'相手のポケモン1匹に、このポケモンについている水エネルギーの数×30ダメージ。〔ベンチは弱点・抵抗力を計算しない。〕'},
  ],[{type:'Lightning',value:'×2'}],[],['Colorless'],J,U,'U','OKUBO',119),

  poke(14,'ホエルコ',['Basic'],['Water'],130,null,[],[
    {nameJa:'みずでっぽう',cost:['Water','Water'],damage:'40',textJa:''},
    {nameJa:'スプラッシュ',cost:['Water','Water','Water'],damage:'80',textJa:''},
  ],[{type:'Lightning',value:'×2'}],[],['Colorless','Colorless','Colorless','Colorless'],J,C,'C','Asako Ito',320),

  poke(15,'ホエルオーex',['Stage 1','ex'],['Water'],380,'ホエルコ',[],[
    {nameJa:'なみのり',cost:['Water','Water','Water'],damage:'120',textJa:''},
    {nameJa:'フォーリングダウン',cost:['Water','Water','Water','Water'],damage:'270',textJa:'このポケモンをねむりにする。'},
  ],[{type:'Lightning',value:'×2'}],[],['Colorless','Colorless','Colorless','Colorless'],J,RR,'RR','5ban Graphics',321),

  poke(16,'ジーランス',['Basic'],['Water'],100,null,[],[
    {nameJa:'フォッシルビート',cost:['Colorless'],damage:'10+',textJa:'名前に「古びた」とつく自分のベンチポケモンの数×30ダメージ追加。'},
  ],[{type:'Lightning',value:'×2'}],[],['Colorless'],J,U,'U','Naoya Kimura',369),

  poke(17,'アシマリ',['Basic'],['Water'],70,null,[],[
    {nameJa:'はたく',cost:['Water'],damage:'20',textJa:''},
  ],[{type:'Lightning',value:'×2'}],[],['Colorless'],J,C,'C','Oswaldo KATO',728),

  poke(18,'オシャマリ',['Stage 1'],['Water'],90,'アシマリ',[],[
    {nameJa:'ハイパーボイス',cost:['Water'],damage:'40',textJa:''},
  ],[{type:'Lightning',value:'×2'}],[],['Colorless','Colorless'],J,C,'C','MINAMINAMI Take',729),

  poke(19,'アシレーヌ',['Stage 2'],['Water'],150,'オシャマリ',[
    {nameJa:'まんたんメロディ',textJa:'自分の番に、このカードを手札から出して進化させたとき、1回使える。自分のポケモン1匹のHPを、すべて回復する。'},
  ],[
    {nameJa:'アクアリターン',cost:['Water','Colorless'],damage:'120',textJa:'このポケモンと、ついているすべてのカードを、山札にもどして切る。'},
  ],[{type:'Lightning',value:'×2'}],[],['Colorless','Colorless'],J,R,'R','Tairo Akitsu',730),

  poke(20,'ナミイルカ',['Basic'],['Water'],80,null,[],[
    {nameJa:'ドレインフィン',cost:['Water','Water'],damage:'20',textJa:'このポケモンのHPを「20」回復する。'},
  ],[{type:'Lightning',value:'×2'}],[],['Colorless','Colorless'],J,C,'C','Yukiko Baba',963),

  poke(21,'イルカマン',['Stage 1'],['Water'],150,'ナミイルカ',[],[
    {nameJa:'ジャスティスナックル',cost:['Water','Water'],damage:'80+',textJa:'相手のサイドの残り枚数が1枚なら、200ダメージ追加。'},
  ],[{type:'Lightning',value:'×2'}],[],['Colorless','Colorless'],J,U,'U','satoma',964),

  // --- 22-27 Lightning ---
  poke(22,'ラクライ',['Basic'],['Lightning'],70,null,[],[
    {nameJa:'もってくる',cost:['Lightning'],damage:'',textJa:'自分の山札を1枚引く。'},
    {nameJa:'たいあたり',cost:['Lightning','Lightning'],damage:'30',textJa:''},
  ],[{type:'Fighting',value:'×2'}],[],['Colorless'],J,C,'C','Dsuke',309),

  poke(23,'ライボルト',['Stage 1'],['Lightning'],120,'ラクライ',[],[
    {nameJa:'フラッシュバリア',cost:['Lightning','Lightning'],damage:'50',textJa:'次の相手の番、このポケモンは進化ポケモンからワザのダメージを受けない。'},
    {nameJa:'ソニックエッジ',cost:['Lightning','Lightning','Lightning'],damage:'110',textJa:'このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。'},
  ],[{type:'Fighting',value:'×2'}],[],['Colorless'],J,U,'U','Uninori',310),

  poke(24,'デンチムシ',['Stage 1'],['Lightning'],100,'アゴジムシ',[],[
    {nameJa:'はさむ',cost:['Lightning'],damage:'30',textJa:''},
    {nameJa:'ぶつかる',cost:['Lightning','Lightning'],damage:'50',textJa:''},
  ],[{type:'Fighting',value:'×2'}],[],['Colorless','Colorless'],J,C,'C','Kazuhisa Uragami',737),

  poke(25,'クワガノン',['Stage 2'],['Lightning'],160,'デンチムシ',[],[
    {nameJa:'クイックダイブ',cost:['Lightning'],damage:'',textJa:'相手のポケモン1匹に、50ダメージ。〔ベンチは弱点・抵抗力を計算しない。〕'},
    {nameJa:'ギガレールガン',cost:['Lightning','Lightning'],damage:'260',textJa:'このポケモンに「ボルト⚡エネルギー」がついていないなら、このワザは失敗。'},
  ],[{type:'Fighting',value:'×2'}],[],['Colorless','Colorless'],J,U,'U','KEIICHIRO ITO',738),

  poke(26,'メガゼラオラex',['Mega Evolution ex'],['Lightning'],270,null,[],[
    {nameJa:'サンダーフィスト',cost:['Lightning'],damage:'60×',textJa:'このポケモンについている⚡エネルギーの数×60ダメージ。'},
    {nameJa:'ゼプトターン',cost:['Lightning','Lightning','Lightning'],damage:'150',textJa:'このポケモンをベンチポケモンと入れ替える。'},
  ],[{type:'Fighting',value:'×2'}],[],['Colorless'],J,RR,'RR','5ban Graphics',807),

  poke(27,'ミライドン',['Basic'],['Lightning'],120,null,[
    {nameJa:'フォトンコード',textJa:'このポケモンが、バトル場で相手のポケモンからワザのダメージを受けてきぜつしたとき、このポケモンについている「基本⚡エネルギー」を2枚まで選び、ベンチポケモン1匹につけ替える。'},
  ],[
    {nameJa:'かみなり',cost:['Lightning','Lightning'],damage:'90',textJa:'このポケモンにも30ダメージ。'},
  ],[{type:'Fighting',value:'×2'}],[],['Colorless'],J,U,'U','mashu',1008),

  // --- 28-39 Psychic ---
  poke(28,'ヤドン',['Basic'],['Psychic'],70,null,[],[
    {nameJa:'すてほうだい',cost:['Psychic'],damage:'',textJa:'自分の手札を好きなだけ選び、トラッシュする。'},
    {nameJa:'ずつき',cost:['Colorless','Colorless'],damage:'20',textJa:''},
  ],[{type:'Darkness',value:'×2'}],[{type:'Fighting',value:'-30'}],['Colorless','Colorless'],J,C,'C','Nelnal',79),

  poke(29,'ヤドラン',['Stage 1'],['Psychic'],130,'ヤドン',[],[
    {nameJa:'スッカラカン',cost:['Psychic'],damage:'50+',textJa:'自分の手札が1枚もないなら、160ダメージ追加。'},
    {nameJa:'しねんのずつき',cost:['Colorless','Colorless','Colorless'],damage:'110',textJa:''},
  ],[{type:'Darkness',value:'×2'}],[{type:'Fighting',value:'-30'}],['Colorless','Colorless','Colorless'],J,U,'U','CHORISO',80),

  poke(30,'ルージュラ',['Basic'],['Psychic'],100,null,[],[
    {nameJa:'きょうれつキッス',cost:['Psychic'],damage:'',textJa:'次の相手の番の終わりに、このワザを受けたポケモンと、ついているすべてのカードを、トラッシュする。'},
    {nameJa:'ねんりき',cost:['Psychic','Colorless'],damage:'50',textJa:'コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。'},
  ],[{type:'Darkness',value:'×2'}],[{type:'Fighting',value:'-30'}],['Colorless'],J,C,'C','Yoshimoto Yoshimon',124),

  poke(31,'カゲボウズ',['Basic'],['Psychic'],50,null,[
    {nameJa:'ばけがくれ',textJa:'このポケモンは、相手のワザや特性の効果を受けない。'},
  ],[
    {nameJa:'ぶらさがる',cost:['Psychic'],damage:'10',textJa:''},
  ],[{type:'Darkness',value:'×2'}],[{type:'Fighting',value:'-30'}],['Colorless'],J,C,'C','Bun Toujo',353),

  poke(32,'ジュペッタ',['Stage 1'],['Psychic'],80,'カゲボウズ',[
    {nameJa:'ばけがくれ',textJa:'このポケモンは、相手のワザや特性の効果を受けない。'},
  ],[
    {nameJa:'にんぎょうキャッチ',cost:['Psychic'],damage:'80',textJa:'のぞむなら、自分の山札から好きなカードを1枚選び、手札に加える。そして山札を切る。'},
  ],[{type:'Darkness',value:'×2'}],[{type:'Fighting',value:'-30'}],['Colorless'],J,U,'U','Mugi Hamada',354),

  poke(33,'ミカルゲ',['Basic'],['Psychic'],60,null,[],[
    {nameJa:'たましいエンド',cost:['Psychic'],damage:'',textJa:'自分のトラッシュに、特性「ばけがくれ」を持つポケモンが13枚以上あるなら、相手のポケモンを2匹選び、それぞれのっているダメカンの数が4倍になるように、ダメカンをのせる。'},
  ],[{type:'Darkness',value:'×2'}],[{type:'Fighting',value:'-30'}],['Colorless'],J,R,'R','danciao',442),

  poke(34,'ヒトモシ',['Basic'],['Psychic'],70,null,[],[
    {nameJa:'おにび',cost:['Psychic'],damage:'20',textJa:''},
  ],[{type:'Darkness',value:'×2'}],[{type:'Fighting',value:'-30'}],['Colorless'],J,C,'C','HYOGONOSUKE',607),

  poke(35,'ランプラー',['Stage 1'],['Psychic'],90,'ヒトモシ',[],[
    {nameJa:'ふえるあかり',cost:['Psychic'],damage:'',textJa:'自分の山札から「ランプラー」を3枚まで選び、ベンチに出す。そして山札を切る。'},
  ],[{type:'Darkness',value:'×2'}],[{type:'Fighting',value:'-30'}],['Colorless'],J,C,'C','sowsow',608),

  poke(36,'メガシャンデラex',['Stage 2','Mega Evolution ex'],['Psychic'],350,'ランプラー',[
    {nameJa:'じゅばくのほのお',textJa:'このポケモンがいるかぎり、相手のバトルポケモンは、にげるためのエネルギーが1個ぶん多くなる。'},
  ],[
    {nameJa:'ファントムメイズ',cost:['Psychic','Psychic'],damage:'130+',textJa:'相手のバトルポケモンのにげるためのエネルギーの数×50ダメージ追加。'},
  ],[{type:'Darkness',value:'×2'}],[{type:'Fighting',value:'-30'}],['Colorless','Colorless'],J,RR,'RR','5ban Graphics',609),

  poke(37,'ダダリン',['Basic'],['Psychic'],140,null,[],[
    {nameJa:'むねんのイカリ',cost:['Psychic'],damage:'30+',textJa:'自分のトラッシュに、特性「ばけがくれ」を持つポケモンが4枚以上あるなら、140ダメージ追加。'},
  ],[{type:'Darkness',value:'×2'}],[{type:'Fighting',value:'-30'}],['Colorless','Colorless','Colorless'],J,U,'U','Oku',781),

  poke(38,'マーシャドー',['Basic'],['Psychic'],90,null,[],[
    {nameJa:'かげむすび',cost:['Psychic'],damage:'30×',textJa:'相手のバトルポケモンのにげるためのエネルギーの数×30ダメージ。'},
  ],[{type:'Darkness',value:'×2'}],[{type:'Fighting',value:'-30'}],['Colorless'],J,U,'U','Nakamura Ippon',802),

  poke(39,'コノヨザル',['Stage 2'],['Psychic'],150,'オコリザル',[
    {nameJa:'くちないからだ',textJa:'このポケモンが、ワザのダメージを受てきぜつするとき、自分はコインを1回投げる。オモテなら、このポケモンはきぜつせず、残りHPが「10」の状態で場に残る。'},
  ],[
    {nameJa:'ゴーストブロー',cost:['Psychic','Psychic'],damage:'100',textJa:'相手のベンチポケモン1匹に、ダメカンを5個のせる。'},
  ],[{type:'Darkness',value:'×2'}],[{type:'Fighting',value:'-30'}],['Colorless','Colorless'],J,U,'U','Haru Akasaka',979),

  // --- 40-45 Fighting ---
  poke(40,'マンキー',['Basic'],['Fighting'],50,null,[],[
    {nameJa:'けたぐり',cost:['Colorless'],damage:'20',textJa:''},
  ],[{type:'Psychic',value:'×2'}],[],['Colorless'],J,C,'C','Yuka Morii',56),

  poke(41,'オコリザル',['Stage 1'],['Fighting'],110,'マンキー',[],[
    {nameJa:'どつく',cost:['Colorless','Colorless'],damage:'50',textJa:''},
  ],[{type:'Psychic',value:'×2'}],[],['Colorless','Colorless'],J,C,'C','GOSSAN',57),

  poke(42,'ズガイドス',['Stage 1'],['Fighting'],100,'古びたずがいの化石',[],[
    {nameJa:'つきとばす',cost:['Fighting','Fighting'],damage:'70',textJa:'相手のバトルポケモンをベンチポケモンと入れ替える。〔バトル場に出すポケモンは相手が選ぶ。〕'},
  ],[{type:'Psychic',value:'×2'}],[],['Colorless','Colorless'],J,C,'C','Hideki Ishikawa',408),

  poke(43,'ラムパルドex',['Stage 2','ex'],['Fighting'],330,'ズガイドス',[
    {nameJa:'はかいのずつき',textJa:'このポケモンがバトル場にいるなら、自分の番に1回使える。コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。'},
  ],[
    {nameJa:'ランページハンマー',cost:['Fighting','Fighting'],damage:'150',textJa:'次の自分の番、このポケモンが使うワザの、相手のバトルポケモンへのダメージは「+150」される。'},
  ],[{type:'Psychic',value:'×2'}],[],['Colorless','Colorless'],J,RR,'RR','hncl',409),

  poke(44,'モグリュー',['Basic'],['Fighting'],70,null,[],[
    {nameJa:'なかまをよぶ',cost:['Colorless'],damage:'',textJa:'自分の山札からたねポケモンを2枚まで選び、ベンチに出す。そして山札を切る。'},
    {nameJa:'ツメをたてる',cost:['Colorless','Colorless','Colorless'],damage:'50',textJa:''},
  ],[{type:'Psychic',value:'×2'}],[],['Colorless','Colorless'],J,C,'C','Atsushi Furusawa',529),

  poke(45,'コライドン',['Basic'],['Fighting'],130,null,[],[
    {nameJa:'バトルクロー',cost:['Fighting'],damage:'30+',textJa:'相手のバトルポケモンが進化ポケモンなら、30ダメージ追加。'},
    {nameJa:'ガイアインパクト',cost:['Fighting','Fighting','Colorless'],damage:'190',textJa:'このポケモンについているエネルギーを、すべてトラッシュする。'},
  ],[{type:'Psychic',value:'×2'}],[],['Colorless','Colorless'],J,U,'U','kodama',1007),

  // --- 46-57 Darkness ---
  poke(46,'メガダークライex',['Mega Evolution ex'],['Darkness'],280,null,[],[
    {nameJa:'ナイトレイド',cost:['Darkness','Darkness'],damage:'110+',textJa:'自分のベンチポケモンにダメカンがのっているなら、110ダメージ追加。'},
    {nameJa:'アビスアイ',cost:['Darkness','Darkness','Darkness'],damage:'',textJa:'相手のバトルポケモンが特殊状態なら、そのポケモンをきぜつさせる。'},
  ],[{type:'Grass',value:'×2'}],[],['Colorless','Colorless'],J,RR,'RR','5ban Graphics',491),

  poke(47,'バルチャイ',['Basic'],['Darkness'],70,null,[],[
    {nameJa:'はばたく',cost:['Darkness'],damage:'10',textJa:''},
    {nameJa:'かぜおこし',cost:['Darkness','Colorless'],damage:'20',textJa:''},
  ],[{type:'Lightning',value:'×2'}],[{type:'Fighting',value:'-30'}],['Colorless'],J,C,'C','Shiburingaru',629),

  poke(48,'バルジーナ',['Stage 1'],['Darkness'],120,'バルチャイ',[],[
    {nameJa:'ボーンスナイプ',cost:['Darkness'],damage:'',textJa:'特殊エネルギーがついている相手のポケモン1匹に、70ダメージ。〔ベンチは弱点・抵抗力を計算しない。〕'},
    {nameJa:'ブラストウインド',cost:['Darkness','Darkness','Colorless'],damage:'120',textJa:''},
  ],[{type:'Lightning',value:'×2'}],[{type:'Fighting',value:'-30'}],['Colorless','Colorless'],J,C,'C','Nisota Niso',630),

  poke(49,'マーイーカ',['Basic'],['Darkness'],60,null,[],[
    {nameJa:'ちょうたつ',cost:['Darkness'],damage:'',textJa:'自分の山札からグッズを1枚選び、相手に見せて、手札に加える。そして山札を切る。'},
    {nameJa:'かいてんアタック',cost:['Darkness','Darkness'],damage:'30',textJa:''},
  ],[{type:'Grass',value:'×2'}],[],['Colorless'],J,C,'C','Yuriko Akase',686),

  poke(50,'カラマネロ',['Stage 1'],['Darkness'],120,'マーイーカ',[],[
    {nameJa:'まどわす',cost:['Darkness'],damage:'',textJa:'相手のバトルポケモンをこんらんにする。'},
    {nameJa:'ブレインクラッシュ',cost:['Darkness'],damage:'130',textJa:'相手のバトルポケモンがこんらんでないなら、このワザは失敗。'},
  ],[{type:'Grass',value:'×2'}],[],['Colorless','Colorless'],J,U,'U','Naoki Saito',687),

  poke(51,'クスネ',['Basic'],['Darkness'],70,null,[],[
    {nameJa:'かじる',cost:['Darkness'],damage:'10',textJa:''},
    {nameJa:'うしろげり',cost:['Darkness','Colorless'],damage:'30',textJa:''},
  ],[{type:'Grass',value:'×2'}],[],['Colorless'],J,C,'C','Krgc',827),

  poke(52,'フォクスライ',['Stage 1'],['Darkness'],100,'クスネ',[],[
    {nameJa:'スキルシーフ',cost:['Colorless','Colorless'],damage:'',textJa:'自分の手札が1枚もないなら、相手の場のポケモンが持つワザを1つ選び、このワザとして使う。'},
    {nameJa:'するどいキバ',cost:['Darkness','Colorless','Colorless'],damage:'80',textJa:''},
  ],[{type:'Grass',value:'×2'}],[],['Colorless'],J,U,'U','GOTO minori',828),

  poke(53,'モルペコex',['Basic','ex'],['Darkness'],180,null,[],[
    {nameJa:'ホイールドロー',cost:['Darkness'],damage:'',textJa:'自分の手札をすべて山札にもどして切る。その後、山札を6枚引く。'},
    {nameJa:'はらぺこボンバー',cost:['Darkness','Darkness'],damage:'40+',textJa:'このポケモンにのっているダメカンの数×40ダメージ追加。'},
  ],[{type:'Grass',value:'×2'}],[],['Colorless'],J,RR,'RR','sky CG Works',877),

  poke(54,'ザルード',['Basic'],['Darkness'],130,null,[],[
    {nameJa:'うしろなげ',cost:['Darkness'],damage:'30',textJa:'自分のベンチポケモン1匹にも、30ダメージ。〔ベンチは弱点・抵抗力を計算しない。〕'},
    {nameJa:'シャドーウィップ',cost:['Darkness','Darkness','Darkness'],damage:'100+',textJa:'自分のベンチポケモンに「シャドー悪エネルギー」がついているなら、70ダメージ追加。'},
  ],[{type:'Grass',value:'×2'}],[],['Colorless','Colorless'],J,U,'U','matazo',893),

  poke(55,'オラチフ',['Basic'],['Darkness'],70,null,[],[
    {nameJa:'かみつく',cost:['Darkness','Darkness'],damage:'40',textJa:''},
  ],[{type:'Grass',value:'×2'}],[],['Colorless','Colorless'],J,C,'C','ryoma uratsuka',942),

  poke(56,'マフィティフ',['Stage 1'],['Darkness'],140,'オラチフ',[],[
    {nameJa:'かみつく',cost:['Darkness','Darkness'],damage:'60',textJa:''},
    {nameJa:'とびこみヘッド',cost:['Darkness','Darkness','Darkness'],damage:'210',textJa:'次の相手の番、このポケモンが受けるワザのダメージは「+100」される。'},
  ],[{type:'Grass',value:'×2'}],[],['Colorless','Colorless','Colorless'],J,C,'C','kawayoo',943),

  poke(57,'イーユイ',['Basic'],['Darkness'],90,null,[],[
    {nameJa:'うずまくねたみ',cost:['Darkness'],damage:'20+',textJa:'このポケモンにダメカンが2個以上のっているなら、90ダメージ追加。このワザのダメージは弱点を計算しない。'},
  ],[{type:'Grass',value:'×2'}],[],['Colorless'],J,R,'R','IKEDA Saki',1004),

  // --- 58-63 Metal ---
  poke(58,'エアームド',['Basic'],['Metal'],120,null,[],[
    {nameJa:'スチールカッター',cost:['Metal'],damage:'40×',textJa:'自分の手札から「基本鋼エネルギー」を2枚までトラッシュし、その枚数×40ダメージ。'},
  ],[{type:'Lightning',value:'×2'}],[{type:'Fighting',value:'-30'}],['Colorless'],J,C,'C','Anesaki Dynamic',227),

  poke(59,'タテトプス',['Stage 1'],['Metal'],100,'古びたたての化石',[],[
    {nameJa:'くだく',cost:['Metal','Colorless'],damage:'50',textJa:'相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。'},
  ],[{type:'Fire',value:'×2'}],[{type:'Grass',value:'-30'}],['Colorless','Colorless','Colorless'],J,C,'C','Kurata So',410),

  poke(60,'トリデプス',['Stage 2'],['Metal'],160,'タテトプス',[
    {nameJa:'たいこのぼうへき',textJa:'このポケモンがベンチにいるかぎり、自分のポケモン全員は、ついているエネルギーが2個以下の相手のポケモンからワザのダメージを受けない。'},
  ],[
    {nameJa:'ぶちかます',cost:['Metal','Metal','Colorless'],damage:'160',textJa:''},
  ],[{type:'Fire',value:'×2'}],[{type:'Grass',value:'-30'}],['Colorless','Colorless','Colorless','Colorless'],J,R,'R','Kinu Nishimura',411),

  poke(61,'ドーミラー',['Basic'],['Metal'],80,null,[],[
    {nameJa:'ミラーアタック',cost:['Metal'],damage:'10+',textJa:'相手のバトルポケモンが鋼ポケモンなら、30ダメージ追加。'},
  ],[{type:'Fire',value:'×2'}],[{type:'Grass',value:'-30'}],['Colorless','Colorless'],J,C,'C','Saboteri',436),

  poke(62,'ドータクン',['Stage 1'],['Metal'],130,'ドーミラー',[],[
    {nameJa:'ひっぱたく',cost:['Metal'],damage:'40',textJa:''},
    {nameJa:'メタルブロック',cost:['Metal','Metal','Colorless'],damage:'120',textJa:'次の相手の番、このポケモンが進化ポケモンから受けるワザのダメージは「-100」される。'},
  ],[{type:'Fire',value:'×2'}],[{type:'Grass',value:'-30'}],['Colorless','Colorless'],J,U,'U','Uta',437),

  poke(63,'メガドリュウズex',['Stage 1','Mega Evolution ex'],['Metal'],340,'モグリュー',[],[
    {nameJa:'ほりくずす',cost:['Metal','Metal'],damage:'90',textJa:'相手の山札を上から2枚トラッシュする。'},
    {nameJa:'マキシマムドリル',cost:['Metal','Metal','Metal'],damage:'200+',textJa:'このワザを使うためのエネルギーより、2個多くエネルギーがついているなら、130ダメージ追加。'},
  ],[{type:'Fire',value:'×2'}],[{type:'Grass',value:'-30'}],['Colorless','Colorless','Colorless','Colorless'],J,RR,'RR','Keisuke Azuma',530),

  // --- 64-69 Colorless ---
  poke(64,'ツツケラ',['Basic'],['Colorless'],70,null,[],[
    {nameJa:'にどづき',cost:['Colorless'],damage:'10×',textJa:'コインを2回投げ、オモテの数×10ダメージ。'},
  ],[{type:'Lightning',value:'×2'}],[{type:'Fighting',value:'-30'}],['Colorless'],J,C,'C','Koji Nakata',731),

  poke(65,'ケラッパ',['Stage 1'],['Colorless'],90,'ツツケラ',[],[
    {nameJa:'そらをとぶ',cost:['Colorless'],damage:'30',textJa:'コインを1回投げウラなら、このワザは失敗。オモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。'},
  ],[{type:'Lightning',value:'×2'}],[{type:'Fighting',value:'-30'}],['Colorless'],J,C,'C','miki kudo',732),

  poke(66,'ドデカバシ',['Stage 2'],['Colorless'],150,'ケラッパ',[
    {nameJa:'スカイドロー',textJa:'自分の番に1回使える。自分の山札を1枚引く。'},
  ],[
    {nameJa:'フェザーロンド',cost:['Colorless'],damage:'60+',textJa:'おたがいのベンチポケモンの数×20ダメージ追加。'},
  ],[{type:'Lightning',value:'×2'}],[{type:'Fighting',value:'-30'}],['Colorless','Colorless'],J,U,'U','Masako Tomii',733),

  poke(67,'タイプ：ヌル',['Basic'],['Colorless'],110,null,[],[
    {nameJa:'パワーエッジ',cost:['Colorless','Colorless'],damage:'40',textJa:''},
  ],[{type:'Fighting',value:'×2'}],[],['Colorless','Colorless'],J,C,'C','Ligton',772),

  poke(68,'シルヴァディ',['Stage 1'],['Colorless'],140,'タイプ：ヌル',[
    {nameJa:'バディコール',textJa:'自分の手札が1枚もないなら、自分の番に1回使える。自分の山札からサポートを1枚選び、相手に見せて、手札に加える。そして山札を切る。'},
  ],[
    {nameJa:'エアスラッシュ',cost:['Colorless','Colorless','Colorless'],damage:'130',textJa:'このポケモンについているエネルギーを1個選び、トラッシュする。'},
  ],[{type:'Fighting',value:'×2'}],[],['Colorless','Colorless'],J,R,'R','Takumi Wada',773),

  poke(69,'オトシドリ',['Basic'],['Colorless'],100,null,[],[
    {nameJa:'おとどけチャレンジ',cost:['Colorless','Colorless'],damage:'',textJa:'コインを2回投げ、すべてオモテなら、自分の山札からポケモンを1枚選び、ベンチに出す。そして山札を切る。'},
    {nameJa:'スピードウイング',cost:['Colorless','Colorless','Colorless'],damage:'100',textJa:''},
  ],[{type:'Lightning',value:'×2'}],[{type:'Fighting',value:'-30'}],['Colorless'],J,C,'C','Wintr Wandr',962),

  // --- 70-79 Trainers ---
  trainer(70,'ダークベル',['Item'],'おたがいのバトルポケモン（ダイヤポケモンをのぞく）を、それぞれこんらんにする。',J,U,'U','Toyste Beach'),
  trainer(71,'古びたずがいの化石',['Item'],'',J,C,'C','AYUMI ODASHIMA'),
  trainer(72,'古びたたての化石',['Item'],'',J,C,'C','AYUMI ODASHIMA'),
  trainer(73,'ごうかいボム',['Pokémon Tool'],'このカードをつけているポケモン（「メガシンカex」をのぞく）が、バトル場で相手の「メガシンカex」から「240」以上のワザのダメージを受けたとき、ワザを使ったポケモン1匹につきダメカンを12個のせる。その後、このカードをトラッシュする。',J,U,'U','inose yukie'),
  trainer(74,'リトライバッジ',['Item'],'',J,U,'U','Toyste Beach'),
  trainer(75,'カスミの元気',['Supporter'],'このカードを使ったなら、自分の番は終わる。自分の山札から「基本水エネルギー」を4枚まで選び、自分のポケモン1匹につける。そして山札を切る。',J,U,'U','En Morikura'),
  trainer(76,'グラジオの決戦',['Supporter'],'このカードは、自分の手札がこのカード1枚だけのときにしか使えない。この番、自分のポケモン（「ルールを持つポケモン」をのぞく）が使うワザの、相手のバトルポケモンへのダメージは「+80」される。',J,U,'U','akagi'),
  trainer(77,'サビ組のしたっぱ',['Supporter'],'このカードは、前の相手の番に、自分のポケモンがきぜつしていなければ使えない。相手の場のポケモンについているエネルギーを1個選び、トラッシュする。',J,U,'U','Teeziro'),
  trainer(78,'ムク',['Supporter'],'自分の手札からポケモン（「ルールを持つポケモン」をのぞく）を2枚までトラッシュし、その枚数×3枚ぶん、山札を引く。',J,U,'U','nagimiso'),
  trainer(79,'化石採掘場',['Stadium'],'',J,U,'U','Oswaldo KATO'),

  // --- 80-81 Special Energy ---
  energy(80,'ボルト⚡エネルギー','',J,R,'R',null),
  energy(81,'シャドー悪エネルギー','',J,R,'R',null),

  // === Secret Rares 82-118 ===
  // --- 82-93 AR ---
  poke(82,'カリキリ',['Basic'],['Grass'],70,null,[],[
    {nameJa:'とつげき',cost:['Grass'],damage:'30',textJa:'このポケモンにも10ダメージ。'},
  ],[{type:'Fire',value:'×2'}],[],['Colorless'],J,AR,'AR','Jiro Sasumo',753),

  poke(83,'グレンアルマ',['Stage 1'],['Fire'],140,'カルボウ',[],[
    {nameJa:'フレイムレギオン',cost:['Fire'],damage:'40+',textJa:'エネルギーがついている自分のベンチポケモンの数×40ダメージ追加。'},
  ],[{type:'Water',value:'×2'}],[],['Colorless','Colorless'],J,AR,'AR','Iwamoto05',936),

  poke(84,'トサキント',['Basic'],['Water'],70,null,[],[
    {nameJa:'つきさす',cost:['Colorless','Colorless'],damage:'30',textJa:''},
  ],[{type:'Lightning',value:'×2'}],[],['Colorless'],J,AR,'AR','Gemi',118),

  poke(85,'アシレーヌ',['Stage 2'],['Water'],150,'オシャマリ',[
    {nameJa:'まんたんメロディ',textJa:'自分の番に、このカードを手札から出して進化させたとき、1回使える。自分のポケモン1匹のHPを、すべて回復する。'},
  ],[
    {nameJa:'アクアリターン',cost:['Water','Colorless'],damage:'120',textJa:'このポケモンと、ついているすべてのカードを、山札にもどして切る。'},
  ],[{type:'Lightning',value:'×2'}],[],['Colorless','Colorless'],J,AR,'AR','satoma',730),

  poke(86,'ライボルト',['Stage 1'],['Lightning'],120,'ラクライ',[],[
    {nameJa:'フラッシュバリア',cost:['Lightning','Lightning'],damage:'50',textJa:'次の相手の番、このポケモンは進化ポケモンからワザのダメージを受けない。'},
    {nameJa:'ソニックエッジ',cost:['Lightning','Lightning','Lightning'],damage:'110',textJa:'このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。'},
  ],[{type:'Fighting',value:'×2'}],[],['Colorless'],J,AR,'AR','HICO KIM',310),

  poke(87,'ヤドラン',['Stage 1'],['Psychic'],130,'ヤドン',[],[
    {nameJa:'スッカラカン',cost:['Psychic'],damage:'50+',textJa:'自分の手札が1枚もないなら、160ダメージ追加。'},
    {nameJa:'しねんのずつき',cost:['Colorless','Colorless','Colorless'],damage:'110',textJa:''},
  ],[{type:'Darkness',value:'×2'}],[{type:'Fighting',value:'-30'}],['Colorless','Colorless','Colorless'],J,AR,'AR','Mckayju',80),

  poke(88,'ダダリン',['Basic'],['Psychic'],140,null,[],[
    {nameJa:'むねんのイカリ',cost:['Psychic'],damage:'30+',textJa:'自分のトラッシュに、特性「ばけがくれ」を持つポケモンが4枚以上あるなら、140ダメージ追加。'},
  ],[{type:'Darkness',value:'×2'}],[{type:'Fighting',value:'-30'}],['Colorless','Colorless','Colorless'],J,AR,'AR','Nakamura Ippan',781),

  poke(89,'フォクスライ',['Stage 1'],['Darkness'],100,'クスネ',[],[
    {nameJa:'スキルシーフ',cost:['Colorless','Colorless'],damage:'',textJa:'自分の手札が1枚もないなら、相手の場のポケモンが持つワザを1つ選び、このワザとして使う。'},
    {nameJa:'するどいキバ',cost:['Darkness','Colorless','Colorless'],damage:'80',textJa:''},
  ],[{type:'Grass',value:'×2'}],[],['Colorless'],J,AR,'AR','Jerky',828),

  poke(90,'ザルード',['Basic'],['Darkness'],130,null,[],[
    {nameJa:'うしろなげ',cost:['Darkness'],damage:'30',textJa:'自分のベンチポケモン1匹にも、30ダメージ。〔ベンチは弱点・抵抗力を計算しない。〕'},
    {nameJa:'シャドーウィップ',cost:['Darkness','Darkness','Darkness'],damage:'100+',textJa:'自分のベンチポケモンに「シャドー悪エネルギー」がついているなら、70ダメージ追加。'},
  ],[{type:'Grass',value:'×2'}],[],['Colorless','Colorless'],J,AR,'AR','IKEDA Saki',893),

  poke(91,'トリデプス',['Stage 2'],['Metal'],160,'タテトプス',[
    {nameJa:'たいこのぼうへき',textJa:'このポケモンがベンチにいるかぎり、自分のポケモン全員は、ついているエネルギーが2個以下の相手のポケモンからワザのダメージを受けない。'},
  ],[
    {nameJa:'ぶちかます',cost:['Metal','Metal','Colorless'],damage:'160',textJa:''},
  ],[{type:'Fire',value:'×2'}],[{type:'Grass',value:'-30'}],['Colorless','Colorless','Colorless','Colorless'],J,AR,'AR','Yoriyuki Ikegami',411),

  poke(92,'ドデカバシ',['Stage 2'],['Colorless'],150,'ケラッパ',[
    {nameJa:'スカイドロー',textJa:'自分の番に1回使える。自分の山札を1枚引く。'},
  ],[
    {nameJa:'フェザーロンド',cost:['Colorless'],damage:'60+',textJa:'おたがいのベンチポケモンの数×20ダメージ追加。'},
  ],[{type:'Lightning',value:'×2'}],[{type:'Fighting',value:'-30'}],['Colorless','Colorless'],J,AR,'AR','miki kudo',733),

  poke(93,'シルヴァディ',['Stage 1'],['Colorless'],140,'タイプ：ヌル',[
    {nameJa:'バディコール',textJa:'自分の手札が1枚もないなら、自分の番に1回使える。自分の山札からサポートを1枚選び、相手に見せて、手札に加える。そして山札を切る。'},
  ],[
    {nameJa:'エアスラッシュ',cost:['Colorless','Colorless','Colorless'],damage:'130',textJa:'このポケモンについているエネルギーを1個選び、トラッシュする。'},
  ],[{type:'Fighting',value:'×2'}],[],['Colorless','Colorless'],J,AR,'AR','DOM',773),

  // --- 94-100 SR (full-art ex) ---
  poke(94,'ラランテスex',['Stage 1','ex'],['Grass'],260,'カリキリ',[],[
    {nameJa:'はつらつカッター',cost:['Grass'],damage:'60+',textJa:'この番に、このポケモンのHPを回復していたなら、200ダメージ追加。'},
    {nameJa:'リーフガード',cost:['Grass','Colorless'],damage:'140',textJa:'次の相手の番、このポケモンが受けるワザのダメージは「-50」される。'},
  ],[{type:'Fire',value:'×2'}],[],['Colorless'],J,SR,'SR','5ban Graphics',754),

  poke(95,'ホエルオーex',['Stage 1','ex'],['Water'],380,'ホエルコ',[],[
    {nameJa:'なみのり',cost:['Water','Water','Water'],damage:'120',textJa:''},
    {nameJa:'フォーリングダウン',cost:['Water','Water','Water','Water'],damage:'270',textJa:'このポケモンをねむりにする。'},
  ],[{type:'Lightning',value:'×2'}],[],['Colorless','Colorless','Colorless','Colorless'],J,SR,'SR','5ban Graphics',321),

  poke(96,'メガゼラオラex',['Mega Evolution ex'],['Lightning'],270,null,[],[
    {nameJa:'サンダーフィスト',cost:['Lightning'],damage:'60×',textJa:'このポケモンについている⚡エネルギーの数×60ダメージ。'},
    {nameJa:'ゼプトターン',cost:['Lightning','Lightning','Lightning'],damage:'150',textJa:'このポケモンをベンチポケモンと入れ替える。'},
  ],[{type:'Fighting',value:'×2'}],[],['Colorless'],J,SR,'SR','5ban Graphics',807),

  poke(97,'メガシャンデラex',['Stage 2','Mega Evolution ex'],['Psychic'],350,'ランプラー',[
    {nameJa:'じゅばくのほのお',textJa:'このポケモンがいるかぎり、相手のバトルポケモンは、にげるためのエネルギーが1個ぶん多くなる。'},
  ],[
    {nameJa:'ファントムメイズ',cost:['Psychic','Psychic'],damage:'130+',textJa:'相手のバトルポケモンのにげるためのエネルギーの数×50ダメージ追加。'},
  ],[{type:'Darkness',value:'×2'}],[{type:'Fighting',value:'-30'}],['Colorless','Colorless'],J,SR,'SR','5ban Graphics',609),

  poke(98,'ラムパルドex',['Stage 2','ex'],['Fighting'],330,'ズガイドス',[
    {nameJa:'はかいのずつき',textJa:'このポケモンがバトル場にいるなら、自分の番に1回使える。コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。'},
  ],[
    {nameJa:'ランページハンマー',cost:['Fighting','Fighting'],damage:'150',textJa:'次の自分の番、このポケモンが使うワザの、相手のバトルポケモンへのダメージは「+150」される。'},
  ],[{type:'Psychic',value:'×2'}],[],['Colorless','Colorless'],J,SR,'SR','5ban Graphics',409),

  poke(99,'メガダークライex',['Mega Evolution ex'],['Darkness'],280,null,[],[
    {nameJa:'ナイトレイド',cost:['Darkness','Darkness'],damage:'110+',textJa:'自分のベンチポケモンにダメカンがのっているなら、110ダメージ追加。'},
    {nameJa:'アビスアイ',cost:['Darkness','Darkness','Darkness'],damage:'',textJa:'相手のバトルポケモンが特殊状態なら、そのポケモンをきぜつさせる。'},
  ],[{type:'Grass',value:'×2'}],[],['Colorless','Colorless'],J,SR,'SR','5ban Graphics',491),

  poke(100,'モルペコex',['Basic','ex'],['Darkness'],180,null,[],[
    {nameJa:'ホイールドロー',cost:['Darkness'],damage:'',textJa:'自分の手札をすべて山札にもどして切る。その後、山札を6枚引く。'},
    {nameJa:'はらぺこボンバー',cost:['Darkness','Darkness'],damage:'40+',textJa:'このポケモンにのっているダメカンの数×40ダメージ追加。'},
  ],[{type:'Grass',value:'×2'}],[],['Colorless'],J,SR,'SR','5ban Graphics',877),

  // --- 101 SIR ---
  poke(101,'メガドリュウズex',['Stage 1','Mega Evolution ex'],['Metal'],340,'モグリュー',[],[
    {nameJa:'ほりくずす',cost:['Metal','Metal'],damage:'90',textJa:'相手の山札を上から2枚トラッシュする。'},
    {nameJa:'マキシマムドリル',cost:['Metal','Metal','Metal'],damage:'200+',textJa:'このワザを使うためのエネルギーより、2個多くエネルギーがついているなら、130ダメージ追加。'},
  ],[{type:'Fire',value:'×2'}],[{type:'Grass',value:'-30'}],['Colorless','Colorless','Colorless','Colorless'],J,SR,'SR','Keisuke Azuma',530),

  // --- 102-111 SR Trainers (reprints) ---
  trainer(102,'アイアンディフェンダー',['Item'],'次の相手の番、自分の鋼ポケモン全員が、相手のポケモンから受けるワザのダメージは「-30」される。（新しく場に出したポケモンもふくむ。）',I,SR,'SR','Studio Bora Inc.'),
  trainer(103,'エネルギーつけかえ',['Item'],'自分の場のポケモンについている基本エネルギーを1個選び、自分の別のポケモンにつけ替える。',I,SR,'SR','Studio Bora Inc.'),
  trainer(104,'クラッシュハンマー',['Item'],'コインを1回投げオモテなら、相手の場のポケモンについているエネルギーを1個選び、トラッシュする。',J,SR,'SR','Ayaka Yoshida'),
  trainer(105,'ダークベル',['Item'],'おたがいのバトルポケモン（ダイヤポケモンをのぞく）を、それぞれこんらんにする。',J,SR,'SR','Toyste Beach'),
  trainer(106,'ごうかいボム',['Pokémon Tool'],'このカードをつけているポケモン（「メガシンカex」をのぞく）が、バトル場で相手の「メガシンカex」から「240」以上のワザのダメージを受けたとき、ワザを使ったポケモン1匹につきダメカンを12個のせる。その後、このカードをトラッシュする。',J,SR,'SR','inose yukie'),
  trainer(107,'ブレイブバングル',['Pokémon Tool'],'このカードをつけているポケモン（「ルールを持つポケモン」をのぞく）が使うワザの、相手のバトル場の「ポケモンex」へのダメージは「+30」される。',I,SR,'SR','Toyste Beach'),
  trainer(108,'カスミの元気',['Supporter'],'このカードを使ったなら、自分の番は終わる。自分の山札から「基本水エネルギー」を4枚まで選び、自分のポケモン1匹につける。そして山札を切る。',J,SR,'SR','En Morikura'),
  trainer(109,'グラジオの決戦',['Supporter'],'このカードは、自分の手札がこのカード1枚だけのときにしか使えない。この番、自分のポケモン（「ルールを持つポケモン」をのぞく）が使うワザの、相手のバトルポケモンへのダメージは「+80」される。',J,SR,'SR','akagi'),
  trainer(110,'サビ組のしたっぱ',['Supporter'],'このカードは、前の相手の番に、自分のポケモンがきぜつしていなければ使えない。相手の場のポケモンについているエネルギーを1個選び、トラッシュする。',J,SR,'SR','Teeziro'),
  trainer(111,'ムク',['Supporter'],'自分の手札からポケモン（「ルールを持つポケモン」をのぞく）を2枚までトラッシュし、その枚数×3枚ぶん、山札を引く。',J,SR,'SR','nagimiso'),

  // --- 112-115 SAR Pokémon ---
  poke(112,'メガゼラオラex',['Mega Evolution ex'],['Lightning'],270,null,[],[
    {nameJa:'サンダーフィスト',cost:['Lightning'],damage:'60×',textJa:'このポケモンについている⚡エネルギーの数×60ダメージ。'},
    {nameJa:'ゼプトターン',cost:['Lightning','Lightning','Lightning'],damage:'150',textJa:'このポケモンをベンチポケモンと入れ替える。'},
  ],[{type:'Fighting',value:'×2'}],[],['Colorless'],J,SAR,'SAR','GIDORA',807),

  poke(113,'メガシャンデラex',['Stage 2','Mega Evolution ex'],['Psychic'],350,'ランプラー',[
    {nameJa:'じゅばくのほのお',textJa:'このポケモンがいるかぎり、相手のバトルポケモンは、にげるためのエネルギーが1個ぶん多くなる。'},
  ],[
    {nameJa:'ファントムメイズ',cost:['Psychic','Psychic'],damage:'130+',textJa:'相手のバトルポケモンのにげるためのエネルギーの数×50ダメージ追加。'},
  ],[{type:'Darkness',value:'×2'}],[{type:'Fighting',value:'-30'}],['Colorless','Colorless'],J,SAR,'SAR','REND',609),

  poke(114,'メガダークライex',['Mega Evolution ex'],['Darkness'],280,null,[],[
    {nameJa:'ナイトレイド',cost:['Darkness','Darkness'],damage:'110+',textJa:'自分のベンチポケモンにダメカンがのっているなら、110ダメージ追加。'},
    {nameJa:'アビスアイ',cost:['Darkness','Darkness','Darkness'],damage:'',textJa:'相手のバトルポケモンが特殊状態なら、そのポケモンをきぜつさせる。'},
  ],[{type:'Grass',value:'×2'}],[],['Colorless','Colorless'],J,SAR,'SAR','AKIRA EGAWA',491),

  poke(115,'モルペコex',['Basic','ex'],['Darkness'],180,null,[],[
    {nameJa:'ホイールドロー',cost:['Darkness'],damage:'',textJa:'自分の手札をすべて山札にもどして切る。その後、山札を6枚引く。'},
    {nameJa:'はらぺこボンバー',cost:['Darkness','Darkness'],damage:'40+',textJa:'このポケモンにのっているダメカンの数×40ダメージ追加。'},
  ],[{type:'Grass',value:'×2'}],[],['Colorless'],J,SAR,'SAR','NC Empire',877),

  // --- 116-117 SAR Supporters ---
  trainer(116,'グラジオの決戦',['Supporter'],'このカードは、自分の手札がこのカード1枚だけのときにしか使えない。この番、自分のポケモン（「ルールを持つポケモン」をのぞく）が使うワザの、相手のバトルポケモンへのダメージは「+80」される。',J,SAR,'SAR','DOM'),
  trainer(117,'ムク',['Supporter'],'自分の手札からポケモン（「ルールを持つポケモン」をのぞく）を2枚までトラッシュし、その枚数×3枚ぶん、山札を引く。',J,SAR,'SAR','Naoki Saito'),

  // --- 118 MUR ---
  poke(118,'メガダークライex',['Mega Evolution ex'],['Darkness'],280,null,[],[
    {nameJa:'ナイトレイド',cost:['Darkness','Darkness'],damage:'110+',textJa:'自分のベンチポケモンにダメカンがのっているなら、110ダメージ追加。'},
    {nameJa:'アビスアイ',cost:['Darkness','Darkness','Darkness'],damage:'',textJa:'相手のバトルポケモンが特殊状態なら、そのポケモンをきぜつさせる。'},
  ],[{type:'Grass',value:'×2'}],[],['Colorless','Colorless'],J,MUR,'MUR','5ban Graphics',491),
];

fs.writeFileSync(FILE, JSON.stringify(cards, null, 2), 'utf8');
console.log(`Done: ${cards.length} cards written to ae.json`);
