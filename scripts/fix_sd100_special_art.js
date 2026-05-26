// Fix incorrect JP data for special art cards 743-766 in sd100.json
// Corrections identified by comparing nameJa against EN API names from phase2.
// Run: node scripts/fix_sd100_special_art.js

const fs = require('fs');

function readJson(p) {
  let s = fs.readFileSync(p, 'utf8');
  if (s.charCodeAt(0) === 0xFEFF) s = s.slice(1);
  return JSON.parse(s);
}

const cards = readJson('data/cards/sd100.json');
const byId = {};
for (const c of cards) byId[c.id] = c;

// 751: OCR read "カボエラー" → I wrongly corrected to ダルマッカ (#554).
//      EN: Hitmontop (#237). Japanese: カポエラー. Fighting type.
Object.assign(byId['sd100-751'], {
  nameJa: 'カポエラー',
  nationalPokedexNumber: 237,
  types: ['Fighting'],
  weaknesses: [{ type: 'Psychic', value: '×2' }],
  retreatCost: ['Colorless'],
  attacks: [
    { nameJa: 'スピンドロー', cost: ['Colorless'], damage: '', textJa: '自分の手札をすべて山札にもどして切る。その後、山札を6枚引く。' },
    { nameJa: 'けたぐり', cost: ['Fighting', 'Colorless'], damage: '50', textJa: '' }
  ]
});

// 759: I guessed メロエッタex (#648). EN: Mega Audino ex (#531). Japanese: メガタブンネex.
Object.assign(byId['sd100-759'], {
  nameJa: 'メガタブンネex',
  nationalPokedexNumber: 531,
  textJa: 'メガシンカexがきぜつしたとき、相手はサイドを3枚とる。'
});

// 761: I guessed Mega Venusaur ex (#3). EN: Mega Meganium ex (#154).
Object.assign(byId['sd100-761'], {
  nameJa: 'メガメガニウムex',
  nationalPokedexNumber: 154,
  textJa: 'メガシンカexがきぜつしたとき、相手はサイドを3枚とる。'
});

// 762: I guessed Mega Charizard ex (#6). EN: Mega Emboar ex (#500).
Object.assign(byId['sd100-762'], {
  nameJa: 'メガエンブオーex',
  nationalPokedexNumber: 500,
  textJa: 'メガシンカexがきぜつしたとき、相手はサイドを3枚とる。'
});

// 763: I guessed Mega Blastoise ex (#9). EN: Mega Feraligatr ex (#160).
Object.assign(byId['sd100-763'], {
  nameJa: 'メガオーダイルex',
  nationalPokedexNumber: 160,
  textJa: 'メガシンカexがきぜつしたとき、相手はサイドを3枚とる。'
});

// 766: OCR gave totally wrong data. EN: Mega Charizard Y ex (#6, Fire type).
//      Remove Tera classification; apply Mega ex rules.
Object.assign(byId['sd100-766'], {
  nameJa: 'メガリザードンYex',
  nationalPokedexNumber: 6,
  types: ['Fire'],
  subtypes: ['Stage 1', 'ex'],
  textJa: 'メガシンカexがきぜつしたとき、相手はサイドを3枚とる。',
  weaknesses: [{ type: 'Water', value: '×2' }],
  retreatCost: []
});

const merged = Object.values(byId);
merged.sort((a, b) => {
  const na = parseInt(a.id.split('-')[1]);
  const nb = parseInt(b.id.split('-')[1]);
  return na - nb;
});

fs.writeFileSync('data/cards/sd100.json', JSON.stringify(merged, null, 2), 'utf8');
console.log('Fixed cards: 751, 759, 761, 762, 763, 766');
