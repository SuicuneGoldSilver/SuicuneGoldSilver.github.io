// Fix sd100 special art cards 743-766: ability/attack confusion, empty textJa, wrong nameJa.
// Also adds missing card 737 (するどいエネルギー / Spiky Energy).
// Run: node scripts/fix_sd100_abilities_attacks.js

const fs = require('fs');

function readJson(p) {
  let s = fs.readFileSync(p, 'utf8');
  if (s.charCodeAt(0) === 0xFEFF) s = s.slice(1);
  return JSON.parse(s);
}

const cards = readJson('data/cards/sd100.json');
const byId = {};
for (const c of cards) byId[c.id] = c;

// --- Card 737: Add missing Spiky Energy ---
// Image was missing during Phase 1 so card was never written.
// EN: journeytogether #159/159, regulation I
if (!byId['sd100-737']) {
  byId['sd100-737'] = {
    id: 'sd100-737',
    setIdJa: 'sd100',
    setIdEn: 'journeytogether',
    numberJa: '737/742',
    numberEn: '159/159',
    nameJa: 'するどいエネルギー',
    nameEn: 'Spiky Energy',
    supertype: 'Energy',
    subtypes: ['Special'],
    hp: null,
    types: [],
    evolvesFrom: null,
    abilities: [],
    attacks: [],
    weaknesses: [],
    resistances: [],
    retreatCost: [],
    textJa: '',
    textEn: null,
    regulationMark: 'I',
    rarity: 'MC',
    rarityJa: 'MC',
    artist: null,
    nationalPokedexNumber: null,
    imageJa: null,
    imageEn: 'images/sets/sd100/en/737.jpg',
    enAvailable: true,
  };
  console.log('Added card 737: するどいエネルギー');
}

// --- Card 743: Erika's Tangela ---
// nameJa was "モンジャラ" (missing "エリカの" prefix).
// Ability textJa and attack textJa were empty — fill from EN.
Object.assign(byId['sd100-743'], {
  nameJa: 'エリカのモンジャラ',
});
byId['sd100-743'].abilities[0].textJa =
  '自分の番に1回使える。自分の山札から「エリカのポケモン」を1枚選び、相手に見せて、手札に加える。そして山札を切る。';
byId['sd100-743'].attacks[0].textJa =
  'コインを1回投げ、オモテなら、相手のバトルポケモンはマヒになる。';

// --- Card 744: Salazzle ---
// OCR labeled attack name "いきなりあぶる" as an ability (EN ability = null → fabricated).
// Actual attack is "いきなりあぶる" (Sudden Scorching); current attack name "かえんぼうしゃ" is wrong.
// Current textJa was also wrong (energy-discard bench text, not the hand-discard effect).
delete byId['sd100-744'].abilities;
byId['sd100-744'].abilities = [];
byId['sd100-744'].attacks[0].nameJa = 'いきなりあぶる';
byId['sd100-744'].attacks[0].textJa =
  '相手は手札を1枚トラッシュする。このポケモンがこの番ヤトウモリから進化しているなら、相手はさらに2枚多くトラッシュする。';

// --- Card 746: Weavile ---
// OCR labeled attack name "きりさく" as an ability (EN ability = null → fabricated).
// Actual attack is "きりさく" (Slash); current name "ヘイルクロー" is wrong.
// textJa (prize-card condition) cannot be verified (textEn empty); clear it.
byId['sd100-746'].abilities = [];
byId['sd100-746'].attacks[0].nameJa = 'きりさく';
byId['sd100-746'].attacks[0].textJa = '';

// --- Card 748: Marill ---
// OCR labeled attack name "かくれる" as an ability (EN ability = null → fabricated).
// Actual attack is "かくれる" (Hide); current name "はねまわる" is wrong.
byId['sd100-748'].abilities = [];
byId['sd100-748'].attacks[0].nameJa = 'かくれる';
byId['sd100-748'].attacks[0].textJa =
  'コインを1回投げ、オモテなら、次の相手の番、このポケモンはワザのダメージも効果も受けない。';

// --- Card 749: Banette ---
// OCR labeled attack name as an ability (EN ability = null → fabricated).
// Actual attack is "のろいのことば" (Cursed Words); current name "ホロウショット" is wrong.
byId['sd100-749'].abilities = [];
byId['sd100-749'].attacks[0].nameJa = 'のろいのことば';
byId['sd100-749'].attacks[0].textJa =
  '相手は自分の手札から3枚選び、山札にもどして切る。';

// --- Card 750: Slurpuff ---
// OCR labeled attack name as an ability (EN ability = null → fabricated).
// Actual attack is "たいあたり" (Tackle); current name "マジカルショット" is wrong.
byId['sd100-750'].abilities = [];
byId['sd100-750'].attacks[0].nameJa = 'たいあたり';

// --- Card 752: Carbink ---
// Ability "ダブルタイプ" is real (EN confirms). textJa was empty — fill from EN.
byId['sd100-752'].abilities[0].textJa =
  'このポケモンは場にいるかぎり、闘タイプと超タイプの両方になる。';

// --- Card 754: Mawile ---
// OCR labeled attack name as an ability (EN ability = null → fabricated).
// Actual attack is "ダブルイーター" (Double Eater); current name "かみつく" is wrong.
byId['sd100-754'].abilities = [];
byId['sd100-754'].attacks[0].nameJa = 'ダブルイーター';
byId['sd100-754'].attacks[0].textJa =
  '自分の手札からエネルギーカードを2枚まで選んでトラッシュする。トラッシュしたカード1枚につき、このワザのダメージは60追加。';

// --- Card 755: Eevee ---
// Ability "ブーストしんか" is real (EN confirms). textJa was empty — fill from EN.
byId['sd100-755'].abilities[0].textJa =
  'このポケモンがバトル場にいるかぎり、このポケモンは最初の番や、出したばかりの番でも進化できる。';

// --- Card 761: Mega Meganium ex ---
// Attack nameJa was empty (OCR failure); EN confirms "Giant Bouquet". Fill both fields.
byId['sd100-761'].attacks[0].nameJa = 'ジャイアントブーケ';
byId['sd100-761'].attacks[0].textJa =
  'このポケモンについている草エネルギー1個につき、50ダメージ追加。';

// --- Card 765: Lillie's Clefairy ex ---
// Ability "フェアリーゾーン" is real (EN confirms). textJa was empty — fill from EN.
byId['sd100-765'].abilities[0].textJa =
  '相手の場のすべてのドラゴンのポケモンの弱点を超タイプにする。（弱点のダメージは×2。）';

// Sort and write
const merged = Object.values(byId);
merged.sort((a, b) => {
  const na = parseInt(a.id.split('-')[1]);
  const nb = parseInt(b.id.split('-')[1]);
  return na - nb;
});

fs.writeFileSync('data/cards/sd100.json', JSON.stringify(merged, null, 2), 'utf8');
console.log(`Done. ${merged.length} cards written.`);
console.log('Fixed: 743 (nameJa+textJa), 744 (ability removed, attack renamed+textJa), 746 (ability removed, attack renamed), 748 (ability removed, attack renamed+textJa), 749 (ability removed, attack renamed+textJa), 750 (ability removed, attack renamed), 752 (textJa), 754 (ability removed, attack renamed+textJa), 755 (textJa), 761 (attack nameJa+textJa), 765 (textJa)');
