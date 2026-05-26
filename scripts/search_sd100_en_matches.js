// Search pokemontcg.io for correct EN card matches for the 56 sd100 cards
// that were previously mismatched (marked enAvailable=false by fix_sd100_en_mismatches.js).
//
// Matching criteria (all must pass):
//   1. Same Pokémon nameEn (exact, case-insensitive)
//   2. Same HP value
//   3. Same number of attacks
//   4. Same damage for each attack (in order)
// Bonus score: subtype (ex/stage) match.
//
// For confident matches (score >= 13):
//   - Fills attacks[].nameEn, attacks[].textEn, abilities[].nameEn, abilities[].textEn
//   - Sets enAvailable=true, records setIdEn/numberEn
//   - imageEn stays null (EN image file not re-downloaded here; run separately if needed)
//
// Run: node scripts/search_sd100_en_matches.js

const https = require('https');
const fs = require('fs');

function readJson(p) {
  let s = fs.readFileSync(p, 'utf8');
  if (s.charCodeAt(0) === 0xFEFF) s = s.slice(1);
  return JSON.parse(s);
}

function get(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, {
      headers: { 'User-Agent': 'Mozilla/5.0', 'Accept': 'application/json' }
    }, res => {
      const chunks = [];
      res.on('data', d => chunks.push(d));
      res.on('end', () => {
        try { resolve(JSON.parse(Buffer.concat(chunks).toString('utf8'))); }
        catch (e) { reject(e); }
      });
    });
    req.on('error', reject);
    req.setTimeout(30000, () => { req.destroy(); reject(new Error('timeout')); });
  });
}

function delay(ms) { return new Promise(r => setTimeout(r, ms)); }

const SEARCH_SETS = [
  'sv1','sv2','sv3','sv3pt5','sv4','sv4pt5',
  'sv5','sv6','sv6pt5','sv7','sv8','sv8pt5',
  'sv9','sv10',
  'me1','me2','me2pt5','me3','me4',
  'zsv10pt5','rsv10pt5',
];

async function fetchSetCards(setId) {
  const cards = [];
  let page = 1;
  while (true) {
    const res = await get(
      `https://api.pokemontcg.io/v2/cards?q=set.id:${setId}&pageSize=250&page=${page}` +
      `&select=id,name,number,set,hp,attacks,abilities,subtypes,supertype,rules`
    );
    if (!res.data || res.data.length === 0) break;
    cards.push(...res.data);
    if (cards.length >= (res.totalCount || 0)) break;
    page++;
    await delay(150);
  }
  return cards;
}

function normDamage(dmg) {
  if (!dmg && dmg !== 0) return null;
  const n = parseInt(String(dmg).replace(/[^0-9]/g, ''));
  return isNaN(n) ? null : n;
}

function scoreMatch(jpCard, enCard) {
  if (enCard.supertype !== 'Pokémon') return -1;
  if (!jpCard.nameEn) return -1;
  if ((enCard.name || '').toLowerCase() !== jpCard.nameEn.toLowerCase()) return -1;

  // HP must match exactly
  const jpHp = parseInt(jpCard.hp) || 0;
  const enHp = parseInt(enCard.hp) || 0;
  if (jpHp > 0 && enHp > 0 && jpHp !== enHp) return -1;

  // Attack count must match
  const jpAtks = jpCard.attacks || [];
  const enAtks = enCard.attacks || [];
  if (jpAtks.length !== enAtks.length) return -1;

  let score = 10; // base: name + HP + count matched

  // All attack damages must match
  for (let i = 0; i < jpAtks.length; i++) {
    const jpDmg = normDamage(jpAtks[i].damage);
    const enDmg = normDamage(enAtks[i].damage);
    if (jpDmg === null && enDmg === null) {
      score += 2;
    } else if (jpDmg !== null && enDmg !== null && jpDmg === enDmg) {
      score += 2;
    } else {
      return -1; // damage mismatch disqualifies
    }
  }

  // Bonus: subtype match (ex, Tera, stage)
  const jpSubs = (jpCard.subtypes || []).map(s => s.toLowerCase());
  const enSubs = (enCard.subtypes || []).map(s => s.toLowerCase());
  const stage = arr => arr.includes('stage 2') ? 2 : arr.includes('stage 1') ? 1 : 0;
  if (stage(jpSubs) === stage(enSubs)) score += 2;
  const jpEx = jpSubs.includes('ex');
  const enEx = enSubs.includes('ex');
  if (jpEx === enEx) score += 1;

  return score;
}

async function main() {
  const sd100 = readJson('data/cards/sd100.json');

  // Cards to re-match: enAvailable=false, have nameEn, are Pokémon with attacks
  // Exclude true JP-only (no nameEn) and Energy/Trainer cards
  const toMatch = sd100.filter(c =>
    c.supertype === 'Pokémon' &&
    !c.enAvailable &&
    c.nameEn &&
    (c.attacks || []).length > 0
  );
  console.log(`Cards to re-match: ${toMatch.length}\n`);

  // Fetch all EN set cards
  console.log('Fetching EN sets...');
  const allEnCards = [];
  for (const setId of SEARCH_SETS) {
    process.stdout.write(`  ${setId}... `);
    try {
      const cards = await fetchSetCards(setId);
      allEnCards.push(...cards);
      console.log(cards.length);
    } catch (e) {
      console.log(`ERROR: ${e.message}`);
    }
    await delay(300);
  }
  console.log(`Total EN cards: ${allEnCards.length}\n`);

  // Build name → candidates lookup
  const byName = {};
  for (const c of allEnCards) {
    if (!c.name) continue;
    const key = c.name.toLowerCase();
    if (!byName[key]) byName[key] = [];
    byName[key].push(c);
  }

  // Match each card
  const results = { matched: [], lowConf: [], noMatch: [] };

  for (const jpCard of toMatch) {
    const candidates = byName[(jpCard.nameEn || '').toLowerCase()] || [];
    let best = null;
    let bestScore = -1;
    for (const enCard of candidates) {
      const s = scoreMatch(jpCard, enCard);
      if (s > bestScore) { bestScore = s; best = enCard; }
    }
    if (best && bestScore >= 12) {
      results.matched.push({ jpCard, enCard: best, score: bestScore });
    } else if (best && bestScore >= 0) {
      results.lowConf.push({ jpCard, enCard: best, score: bestScore });
    } else {
      results.noMatch.push(jpCard);
    }
  }

  console.log(`Matched (confident): ${results.matched.length}`);
  console.log(`Matched (low confidence): ${results.lowConf.length}`);
  console.log(`No match: ${results.noMatch.length}\n`);

  // Show matched
  console.log('--- MATCHED ---');
  for (const { jpCard, enCard, score } of results.matched) {
    const enAtks = (enCard.attacks || []).map(a => `${a.name} [${a.text || ''}]`).join(' | ');
    console.log(`${jpCard.id} ${jpCard.nameJa} → ${enCard.id} (${enCard.set.id}) HP:${enCard.hp} score:${score}`);
    console.log(`  EN attacks: ${enAtks}`);
  }

  if (results.lowConf.length) {
    console.log('\n--- LOW CONFIDENCE (not applied) ---');
    for (const { jpCard, enCard, score } of results.lowConf) {
      console.log(`${jpCard.id} ${jpCard.nameJa} (${jpCard.nameEn}) → ${enCard.id} score:${score}`);
    }
  }

  if (results.noMatch.length) {
    console.log('\n--- NO MATCH FOUND ---');
    for (const c of results.noMatch) {
      console.log(`${c.id} ${c.nameJa} (${c.nameEn}) HP:${c.hp} atks:${(c.attacks||[]).length}`);
    }
  }

  // Apply confident matches to sd100.json
  const byId = {};
  for (const c of sd100) byId[c.id] = c;

  let updated = 0;
  for (const { jpCard, enCard } of results.matched) {
    const enTotal = enCard.set ? (enCard.set.printedTotal || enCard.set.total || '') : '';
    const enNum = parseInt(enCard.number);
    const numberEn = String(enNum).padStart(3, '0') + (enTotal ? '/' + enTotal : '');

    const updatedAttacks = (jpCard.attacks || []).map((atk, i) => {
      const enAtk = enCard.attacks && enCard.attacks[i];
      return { ...atk, nameEn: enAtk ? enAtk.name : null, textEn: enAtk ? (enAtk.text || '') : null };
    });
    const updatedAbilities = (jpCard.abilities || []).map((ab, i) => {
      const enAb = enCard.abilities && enCard.abilities[i];
      return { ...ab, nameEn: enAb ? enAb.name : null, textEn: enAb ? (enAb.text || '') : null };
    });

    byId[jpCard.id] = {
      ...jpCard,
      setIdEn: enCard.set ? enCard.set.id : null,
      numberEn,
      imageEn: null, // EN image not re-downloaded; update separately if needed
      enAvailable: true,
      attacks: updatedAttacks,
      abilities: updatedAbilities,
    };
    updated++;
  }

  const result = Object.values(byId).sort((a, b) =>
    parseInt(a.id.split('-')[1]) - parseInt(b.id.split('-')[1])
  );
  fs.writeFileSync('data/cards/sd100.json', JSON.stringify(result, null, 2), 'utf8');
  console.log(`\nApplied ${updated} matches to data/cards/sd100.json`);
  console.log(`Cards remaining JP-only: ${results.lowConf.length + results.noMatch.length}`);
}

main().catch(console.error);
