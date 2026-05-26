// Detect and fix sd100 cards where the EN card mapping points to a different
// printing of the same Pokémon (different attacks/abilities). These produce
// misleading EN attack names and text in the card modal.
//
// Detection criterion: any attack where JP textJa is non-empty but EN textEn
// is empty/null AND nameEn clearly differs from nameJa. Proxy used here:
// if textJa is non-empty and textEn is empty, the EN card has no effect text
// for that attack — meaning it's a simpler, different card.
//
// Fix: mark whole card as JP-only (imageEn=null, enAvailable=false, clear
// all attack/ability EN fields). The Pokémon's nameEn at card level is kept
// so search still works in EN.
//
// Run: node scripts/fix_sd100_en_mismatches.js

const fs = require('fs');

function readJson(p) {
  let s = fs.readFileSync(p, 'utf8');
  if (s.charCodeAt(0) === 0xFEFF) s = s.slice(1);
  return JSON.parse(s);
}

const cards = readJson('data/cards/sd100.json');

function isMismatched(card) {
  if (card.supertype !== 'Pokémon') return false;
  const attacks = card.attacks || [];
  for (const atk of attacks) {
    const hasJpEffect = atk.textJa && atk.textJa.trim() !== '';
    const hasEnEffect = atk.textEn && atk.textEn.trim() !== '';
    const hasEnName = atk.nameEn && atk.nameEn.trim() !== '';
    // Mismatch: JP attack has an effect, EN attack has no text but has a name
    // (EN card is a different, simpler card that only does damage)
    if (hasJpEffect && !hasEnEffect && hasEnName) return true;
  }
  return false;
}

let fixedCount = 0;
const fixed = [];

const updated = cards.map(card => {
  if (!isMismatched(card)) return card;

  fixedCount++;
  fixed.push(`${card.id} ${card.nameJa} → was ${card.setIdEn} ${card.numberEn}`);

  // Clear EN attack/ability names+text; keep nameEn at card level for search
  const cleanedAttacks = (card.attacks || []).map(atk => ({
    ...atk,
    nameEn: null,
    textEn: null,
  }));
  const cleanedAbilities = (card.abilities || []).map(ab => ({
    ...ab,
    nameEn: null,
    textEn: null,
  }));

  return {
    ...card,
    imageEn: null,
    enAvailable: false,
    setIdEn: null,
    numberEn: null,
    attacks: cleanedAttacks,
    abilities: cleanedAbilities,
  };
});

fs.writeFileSync('data/cards/sd100.json', JSON.stringify(updated, null, 2), 'utf8');

console.log(`Fixed ${fixedCount} mismatched cards (marked JP-only):`);
fixed.forEach(f => console.log('  ' + f));
