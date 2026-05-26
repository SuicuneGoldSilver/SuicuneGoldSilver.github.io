// Fix sd100-594 Lopunny: match to me1-108.
// "Dashing Kick" does 50 bench damage (API returns "" for damage, not "50"),
// which caused the automated search to skip it. Applying manually.
// Run: node scripts/fix_sd100_lopunny.js

const fs = require('fs');
function readJson(p) {
  let s = fs.readFileSync(p, 'utf8');
  if (s.charCodeAt(0) === 0xFEFF) s = s.slice(1);
  return JSON.parse(s);
}

const cards = readJson('data/cards/sd100.json');
const byId = {};
for (const c of cards) byId[c.id] = c;

const card = byId['sd100-594'];
card.setIdEn  = 'me1';
card.numberEn = '108/132';
card.imageEn  = null; // EN image not downloaded yet
card.enAvailable = true;
card.attacks[0].nameEn = 'Dashing Kick';
card.attacks[0].textEn = "This attack does 50 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)";
card.attacks[1].nameEn = 'Spiral Kick';
card.attacks[1].textEn = '';

cards.sort((a, b) => parseInt(a.id.split('-')[1]) - parseInt(b.id.split('-')[1]));
fs.writeFileSync('data/cards/sd100.json', JSON.stringify(cards, null, 2), 'utf8');
console.log('Fixed sd100-594 Lopunny → me1-108');
