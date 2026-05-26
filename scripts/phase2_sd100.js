// Phase 2: Fill EN data for sd100 using sd100_en_mapping.json + Pokémon TCG API
// Run from project root: node scripts/phase2_sd100.js
//
// For each card in sd100.json, looks up the EN card via the mapping file,
// fetches data from pokemontcg.io, and fills in nameEn, numberEn, attacks/
// abilities EN text, and textEn.
// Falls back to sd100_cardlist.json for nameEn when API set is unavailable.

const https = require('https');
const fs = require('fs');
const path = require('path');

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

// Known Serebii slug → pokemontcg.io set ID
const SLUG_TO_API_ID = {
  'surgingsparks':     'sv8',
  'prismaticevolutions': 'sv8pt5',
  'stellarcrown':      'sv7',
  'shroudedfable':     'sv6pt5',
  'twilightmasquerade':'sv6',
  'temporalforces':    'sv5',
  'paldeanfates':      'sv4pt5',
  'paradoxrift':       'sv4',
  'obsidianflames':    'sv3',
  '151':               'sv3pt5',
  'paldeaevolved':     'sv2',
  'scarletviolet':     'sv1',
};

// Serebii slug → expected EN set name (for auto-discovery)
const SLUG_TO_NAME_HINT = {
  'journeytogether':   'Journey Together',
  'destinedrivals':    'Destined Rivals',
  'ascendedheroes':    'Ascended Heroes',
  'perfectorder':      'Perfect Order',
  'chaosrising':       'Chaos Rising',
  'pitchblack':        'Pitch-Black Rulers',
  'megaevolution':     'Mega Evolution',
  'whiteflare':        'White Flare',
  'blackbolt':         'Black Bolt',
  'phantasmalflames':  'Phantasmal Flames',
};

// Get all EN sets needed from mapping
function getSlugsNeeded(mapping) {
  const slugs = new Set();
  for (const v of Object.values(mapping)) {
    if (v && v.set) slugs.add(v.set);
  }
  return [...slugs];
}

async function fetchAllSets() {
  console.log('Fetching pokemontcg.io set list...');
  const res = await get('https://api.pokemontcg.io/v2/sets?pageSize=500');
  return res.data || [];
}

async function fetchSetCards(apiId) {
  const cards = [];
  let page = 1;
  while (true) {
    const res = await get(
      `https://api.pokemontcg.io/v2/cards?q=set.id:${apiId}&pageSize=250&page=${page}&select=id,name,number,set,nationalPokedexNumbers,attacks,abilities,rules,supertype,subtypes`
    );
    if (!res.data || res.data.length === 0) break;
    cards.push(...res.data);
    if (cards.length >= (res.totalCount || 0)) break;
    page++;
    await delay(300);
  }
  return cards;
}

function extractTrainerText(card) {
  if (card.rules && card.rules.length > 0) {
    // Filter out rule box entries (ex rule, Pokémon V rule, etc.)
    const trainerRules = card.rules.filter(r =>
      !r.includes('Rule Box') &&
      !r.includes('ex rule') &&
      !r.includes('Pokémon V rule') &&
      !r.startsWith('When your')
    );
    return trainerRules.join('\n') || null;
  }
  return null;
}

async function main() {
  const mapping = readJson('scripts/sd100_en_mapping.json');
  const cardlist = readJson('scripts/sd100_cardlist.json');
  const sd100Cards = readJson('data/cards/sd100.json');

  // Build cardlist lookup by num
  const nameByNum = {};
  for (const c of cardlist) nameByNum[c.num] = c.name;

  // Determine which slugs we need
  const slugsNeeded = getSlugsNeeded(mapping);
  console.log(`Slugs needed: ${slugsNeeded.join(', ')}`);

  // Fetch pokemontcg.io set list to discover IDs for unknown slugs
  const allApiSets = await fetchAllSets();
  const nameToApiId = {};
  for (const s of allApiSets) {
    nameToApiId[s.name.toLowerCase()] = s.id;
    nameToApiId[s.name.toLowerCase().replace(/[^a-z0-9]/g, '')] = s.id;
  }

  // Build final slug → API ID map
  const slugToId = { ...SLUG_TO_API_ID };
  for (const slug of slugsNeeded) {
    if (slugToId[slug]) continue;
    const hint = SLUG_TO_NAME_HINT[slug];
    if (!hint) { console.log(`  No hint for ${slug}, skipping`); continue; }
    const key1 = hint.toLowerCase();
    const key2 = hint.toLowerCase().replace(/[^a-z0-9]/g, '');
    const id = nameToApiId[key1] || nameToApiId[key2];
    if (id) {
      slugToId[slug] = id;
      console.log(`  Discovered: ${slug} → ${id}`);
    } else {
      console.log(`  Not found in API: ${slug} (${hint})`);
    }
  }

  // Fetch card data for each needed slug
  // {slug} → {num} → card
  const enBySlugNum = {};
  const setTotals = {};  // slug → printedTotal string (e.g. "232")

  for (const slug of slugsNeeded) {
    const apiId = slugToId[slug];
    if (!apiId) {
      console.log(`Skipping ${slug} (no API ID)`);
      enBySlugNum[slug] = {};
      continue;
    }
    process.stdout.write(`Fetching ${slug} (${apiId})... `);
    try {
      const cards = await fetchSetCards(apiId);
      console.log(`${cards.length} cards`);
      enBySlugNum[slug] = {};
      for (const c of cards) {
        const num = parseInt(c.number);
        if (!isNaN(num)) {
          if (!enBySlugNum[slug][num]) enBySlugNum[slug][num] = c;
        }
      }
      if (cards.length > 0 && cards[0].set) {
        setTotals[slug] = String(cards[0].set.printedTotal || cards[0].set.total || '');
      }
    } catch (err) {
      console.log(`ERROR: ${err.message}`);
      enBySlugNum[slug] = {};
    }
    await delay(400);
  }

  // Process sd100 cards
  let filled = 0, nameFallback = 0, noEn = 0;

  const updated = sd100Cards.map(card => {
    const sd100Num = parseInt(card.numberJa.split('/')[0], 10);
    const mapEntry = mapping[String(sd100Num)];

    // Determine nameEn (from cardlist or API)
    let nameEn = nameByNum[sd100Num] || null;

    if (!mapEntry) {
      // JP-only card
      noEn++;
      return {
        ...card,
        nameEn: null,
        numberEn: null,
        enAvailable: false,
        imageEn: null,
        setIdEn: null,
      };
    }

    const { set: slug, num: enNum } = mapEntry;
    const enCard = (enBySlugNum[slug] || {})[enNum];

    // numberEn
    let numberEn = null;
    if (enNum) {
      const total = setTotals[slug] || '';
      numberEn = total
        ? String(enNum).padStart(3, '0') + '/' + total
        : String(enNum).padStart(3, '0');
    }

    // imageEn and setIdEn
    const imageEn = card.imageEn || `images/sets/sd100/en/${sd100Num}.jpg`;
    const setIdEn = slug;

    if (!enCard) {
      // Set has no API data; use cardlist name only
      nameFallback++;
      return {
        ...card,
        setIdEn,
        numberEn,
        nameEn,
        imageEn,
        enAvailable: nameEn !== null,
      };
    }

    // Have EN card data from API
    if (enCard.name) nameEn = enCard.name;
    filled++;

    if (card.supertype === 'Pokémon') {
      const updatedAbilities = (card.abilities || []).map((ab, i) => {
        const enAb = enCard.abilities && enCard.abilities[i];
        return {
          nameJa: ab.nameJa,
          nameEn: enAb ? enAb.name : null,
          type: ab.type,
          textJa: ab.textJa,
          textEn: enAb ? enAb.text : null,
        };
      });

      const updatedAttacks = (card.attacks || []).map((atk, i) => {
        const enAtk = enCard.attacks && enCard.attacks[i];
        return {
          nameJa: atk.nameJa,
          nameEn: enAtk ? enAtk.name : null,
          cost: atk.cost,
          convertedEnergyCost: atk.convertedEnergyCost,
          damage: atk.damage,
          textJa: atk.textJa,
          textEn: enAtk ? (enAtk.text || '') : null,
        };
      });

      return {
        id: card.id,
        setIdJa: card.setIdJa,
        setIdEn,
        numberJa: card.numberJa,
        numberEn,
        nameJa: card.nameJa,
        nameEn,
        supertype: card.supertype,
        subtypes: card.subtypes,
        types: card.types,
        hp: card.hp,
        evolvesFrom: card.evolvesFrom,
        abilities: updatedAbilities,
        attacks: updatedAttacks,
        weaknesses: card.weaknesses,
        resistances: card.resistances,
        retreatCost: card.retreatCost,
        regulationMark: card.regulationMark,
        rarity: card.rarity,
        rarityJa: card.rarityJa,
        artist: card.artist,
        nationalPokedexNumber: card.nationalPokedexNumber,
        imageJa: card.imageJa,
        imageEn,
        textJa: card.textJa || null,
        textEn: card.textEn || null,
        enAvailable: true,
      };
    } else {
      // Trainer or Energy
      const textEn = extractTrainerText(enCard);
      return {
        id: card.id,
        setIdJa: card.setIdJa,
        setIdEn,
        numberJa: card.numberJa,
        numberEn,
        nameJa: card.nameJa,
        nameEn,
        supertype: card.supertype,
        subtypes: card.subtypes,
        textJa: card.textJa,
        textEn,
        regulationMark: card.regulationMark,
        rarity: card.rarity,
        rarityJa: card.rarityJa,
        artist: card.artist,
        imageJa: card.imageJa,
        imageEn,
        enAvailable: true,
      };
    }
  });

  fs.writeFileSync('data/cards/sd100.json', JSON.stringify(updated, null, 2), 'utf8');
  console.log(`\nDone. ${updated.length} cards written.`);
  console.log(`  API match:    ${filled}`);
  console.log(`  Name-only:    ${nameFallback}`);
  console.log(`  JP-only/null: ${noEn}`);
}

main().catch(console.error);
