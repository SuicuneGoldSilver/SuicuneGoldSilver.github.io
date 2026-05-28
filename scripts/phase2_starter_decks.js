'use strict';
// Fetches EN attack/ability nameEn + textEn for all starter deck Pokémon cards
// using the pokemontcg.io API. Trainer cards already have textEn set.
// Run: node scripts/phase2_starter_decks.js

const fs = require('fs');
const path = require('path');
const https = require('https');

const cardsDir = path.join(__dirname, '..', 'data', 'cards');

// Short setIdEn codes → pokemontcg.io API set IDs
const SET_API_ID = {
  dri: 'sv10',
  ssp: 'sv8',
  scr: 'sv7',
  twm: 'sv6',
  pal: 'sv2',
  svi: 'sv1',
  svp: 'svp',
  pre: 'sv9',
};

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (res.statusCode !== 200) {
          reject(new Error(`HTTP ${res.statusCode}`));
          return;
        }
        try { resolve(JSON.parse(data)); }
        catch (e) { reject(e); }
      });
    }).on('error', reject);
  });
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

function parseNumber(numberEn) {
  if (!numberEn) return null;
  // "083/182" → "83", "207" → "207"
  return String(parseInt(numberEn.split('/')[0], 10));
}

async function main() {
  const sets = ['ssb', 'ssmr', 'sstce', 'sstsy'];

  for (const setId of sets) {
    const filePath = path.join(cardsDir, `${setId}.json`);
    const cards = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    let updated = 0;
    let failed = 0;

    console.log(`\n=== ${setId} ===`);

    for (const card of cards) {
      if (card.supertype !== 'Pokémon') continue;
      if (!card.setIdEn || !card.numberEn) continue;

      const apiSetId = SET_API_ID[card.setIdEn];
      if (!apiSetId) {
        console.log(`  SKIP ${card.id}: unknown setIdEn "${card.setIdEn}"`);
        continue;
      }

      const num = parseNumber(card.numberEn);
      const apiCardId = `${apiSetId}-${num}`;
      const url = `https://api.pokemontcg.io/v2/cards/${apiCardId}`;

      try {
        await sleep(300);
        const resp = await fetchJson(url);
        const en = resp.data;

        // Fill attack nameEn + textEn by position
        if (en.attacks && card.attacks && card.attacks.length > 0) {
          for (let i = 0; i < card.attacks.length; i++) {
            if (en.attacks[i]) {
              card.attacks[i].nameEn = en.attacks[i].name || null;
              card.attacks[i].textEn = en.attacks[i].text || null;
            }
          }
        }

        // Fill ability nameEn + textEn by position
        if (en.abilities && card.abilities && card.abilities.length > 0) {
          for (let i = 0; i < card.abilities.length; i++) {
            if (en.abilities[i]) {
              card.abilities[i].nameEn = en.abilities[i].name || null;
              card.abilities[i].textEn = en.abilities[i].text || null;
            }
          }
        }

        console.log(`  ✓ ${card.id} (${card.nameJa}) → ${apiCardId}`);
        updated++;
      } catch (e) {
        console.log(`  ✗ ${card.id} (${card.nameJa}) → ${apiCardId}: ${e.message}`);
        failed++;
      }
    }

    fs.writeFileSync(filePath, JSON.stringify(cards, null, 2), 'utf8');
    console.log(`  → ${updated} updated, ${failed} failed`);
  }

  console.log('\nDone. Run: node scripts/rebuild_index.js');
}

main().catch(console.error);
