// Phase 2: Fill EN data for data/cards/md.json
// Run from project root: node scripts/phase2_md.js

const fs = require('fs');
const path = require('path');

// ── Load EN set data ─────────────────────────────────────────────────────────
const tmpDir = 'data/cards/md_en_tmp';
const enData = {};
const setMeta = {};

function readJson(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  if (content.charCodeAt(0) === 0xFEFF) content = content.slice(1);
  return JSON.parse(content);
}

for (const f of fs.readdirSync(tmpDir)) {
  if (!f.endsWith('.json')) continue;
  const slug = f.replace('.json', '');
  const cards = readJson(path.join(tmpDir, f));
  enData[slug] = cards;
  if (cards.length > 0 && cards[0].set) {
    setMeta[slug] = {
      id: cards[0].set.id,
      printedTotal: cards[0].set.printedTotal,
    };
  }
}

// ── Build lookup indexes ─────────────────────────────────────────────────────
const byDex = {};   // slug -> dex -> [cards]
const byId = {};    // cardId -> card
const byName = {};  // slug -> name -> [cards] (sorted by number)
const setIdToSlug = {};

for (const [slug, meta] of Object.entries(setMeta)) {
  setIdToSlug[meta.id] = slug;
}

for (const slug of Object.keys(enData)) {
  byDex[slug] = {};
  byName[slug] = {};
  for (const c of enData[slug]) {
    byId[c.id] = c;
    if (c.nationalPokedexNumbers) {
      for (const d of c.nationalPokedexNumbers) {
        if (!byDex[slug][d]) byDex[slug][d] = [];
        byDex[slug][d].push(c);
      }
    }
    if (c.name) {
      if (!byName[slug][c.name]) byName[slug][c.name] = [];
      byName[slug][c.name].push(c);
    }
  }
  // Sort each dex and name bucket by card number
  for (const arr of Object.values(byDex[slug])) arr.sort((a, b) => parseInt(a.number) - parseInt(b.number));
  for (const arr of Object.values(byName[slug])) arr.sort((a, b) => parseInt(a.number) - parseInt(b.number));
}

// ── md# → EN slug mapping ────────────────────────────────────────────────────
function getEnSlug(n) {
  if ([1,2,3,9,10,12,13,14,34,55,99,100,101,104,147,150,162,174].includes(n)) return 'destinedrivals';
  if ([17,135,148,157].includes(n)) return 'twilightmasquerade';
  if ([26,29,166,172,191].includes(n)) return 'whiteflare';
  if ([30,121].includes(n)) return 'phantasmalflames';
  if ([31,43,75,122,140,152,183].includes(n)) return 'surgingsparks';
  if ([45,46].includes(n)) return 'megaevolution';
  if ([51,119].includes(n)) return 'blackbolt';
  if ([72,73,74].includes(n)) return 'shroudedfable';
  if ([120,123,136,141,142,156,167,181,185,186].includes(n)) return 'journeytogether';
  if ([137,138,184].includes(n)) return 'stellarcrown';
  return 'ascendedheroes';
}

// ── Manual overrides: mdNum → EN card ID ─────────────────────────────────────
const overrides = {
  17:  'sv6-25',      // Teal Mask Ogerpon ex (dex missing in API)
  24:  'me2pt5-29',   // Tepig (JP hp=70 vs EN hp=80)
  36:  'me2pt5-47',   // Mega Froslass ex (dex was 362/Glalie, corrected to 478)
  45:  'me1-45',      // Magnemite (JP hp=60 vs EN hp=70)
  46:  'me1-46',      // Magneton (JP hp=100 vs EN hp=90)
  59:  'me2pt5-72',   // Iono's Kilowattrel (API has dex=940 instead of 941)
  98:  'me2pt5-122',  // Okidogi (dex missing in API)
  114: 'me2pt5-142',  // Fezandipiti ex (dex was 989, corrected to 1016)
  140: 'sv8-151',     // Bouffalant (JP hp=100 vs EN hp=130)
};

// ── Trainer map: mdNum → [slug, enName] ──────────────────────────────────────
const trainerMap = {
  146: ['ascendedheroes',    "N's PP Up"],
  147: ['destinedrivals',    'Energy Recycler'],
  148: ['twilightmasquerade','Enhanced Hammer'],
  149: ['ascendedheroes',    'Glass Trumpet'],
  150: ['destinedrivals',    'Sacred Ash'],
  151: ['ascendedheroes',    'Tool Scrapper'],
  152: ['surgingsparks',     'Tera Orb'],
  153: ['ascendedheroes',    'Buddy-Buddy Poffin'],
  154: ['ascendedheroes',    'Premium Power Pro'],
  155: ['ascendedheroes',    'Fighting Gong'],
  156: ['journeytogether',   "Hop's Bag"],
  157: ['twilightmasquerade','Bug Catching Set'],
  158: ['ascendedheroes',    'Mega Signal'],
  159: ['ascendedheroes',    'Night Stretcher'],
  160: ['ascendedheroes',    "Team Rocket's Transceiver"],
  161: ['ascendedheroes',    'Counter Gain'],
  162: ['destinedrivals',    "Cynthia's Power Weight"],
  163: ['ascendedheroes',    'Light Ball'],
  164: ['ascendedheroes',    'Thick Scale'],
  165: ['ascendedheroes',    'Air Balloon'],
  166: ['whiteflare',        'Brave Bangle'],
  167: ['journeytogether',   "Hop's Choice Band"],
  168: ['ascendedheroes',    "Iris's Fighting Spirit"],
  169: ['ascendedheroes',    "Acerola's Mischief"],
  170: ['ascendedheroes',    'Canari'],
  171: ['ascendedheroes',    'Surfer'],
  172: ['whiteflare',        'Hilda'],
  173: ['ascendedheroes',    'Anthea & Concordia'],
  174: ['destinedrivals',    "Ethan's Adventure"],
  175: ['ascendedheroes',    "Lillie's Determination"],
  176: ['ascendedheroes',    "Team Rocket's Ariana"],
  177: ['ascendedheroes',    "Team Rocket's Archer"],
  178: ['ascendedheroes',    "Team Rocket's Giovanni"],
  179: ['ascendedheroes',    "Team Rocket's Petrel"],
  180: ['ascendedheroes',    "Team Rocket's Proton"],
  181: ['journeytogether',   "N's Castle"],
  182: ['ascendedheroes',    'Forest of Vitality'],
  183: ['surgingsparks',     'Gravity Mountain'],
  184: ['stellarcrown',      'Area Zero Underdepths'],
  185: ['journeytogether',   'Levincia'],
  186: ['journeytogether',   'Postwick'],
  187: ['ascendedheroes',    'Mystery Garden'],
  188: ['ascendedheroes',    'Nighttime Mine'],
  189: ['ascendedheroes',    "Team Rocket's Watchtower"],
  190: ['ascendedheroes',    "Team Rocket's Factory"],
  191: ['whiteflare',        'Ignition Energy'],
  192: ['ascendedheroes',    'Prism Energy'],
  193: ['ascendedheroes',    "Team Rocket's Energy"],
};

function formatNumberEn(num, total) {
  return parseInt(num).toString().padStart(3, '0') + '/' + total;
}

// Find EN card within printedTotal range
function findByName(slug, name) {
  const candidates = (byName[slug][name] || [])
    .filter(c => parseInt(c.number) <= setMeta[slug].printedTotal);
  return candidates[0] || null;
}

// ── Load md.json ─────────────────────────────────────────────────────────────
const mdCards = readJson('data/cards/md.json');
const newCards = [];
const unmatched = [];

for (const card of mdCards) {
  const n = parseInt(card.id.replace('md-', ''));

  if (card.supertype === 'Pokémon') {
    let slug = getEnSlug(n);
    let enCard = null;

    if (overrides[n]) {
      enCard = byId[overrides[n]];
      if (enCard) slug = setIdToSlug[enCard.set.id];
    }

    if (!enCard) {
      const dex = card.nationalPokedexNumber;
      const hpStr = card.hp.toString();
      const candidates = byDex[slug] && byDex[slug][dex] ? byDex[slug][dex].filter(c => parseInt(c.number) <= setMeta[slug].printedTotal) : [];
      // Try HP match first, fall back to first candidate
      enCard = candidates.find(c => c.hp === hpStr) || candidates[0] || null;
    }

    if (!enCard) {
      unmatched.push(`md-${n}: ${card.nameJa}`);
    }

    const enSetId = enCard ? setMeta[slug].id : null;
    const enNum = enCard ? formatNumberEn(enCard.number, setMeta[slug].printedTotal) : null;
    const nameEn = enCard ? enCard.name : null;

    // Use EN subtypes (includes MEGA/Tera markers not read from JP images)
    const subtypes = enCard ? enCard.subtypes : card.subtypes;

    // Map attacks positionally
    const attacks = card.attacks.map((att, i) => {
      const enAtt = enCard && enCard.attacks && enCard.attacks[i] ? enCard.attacks[i] : null;
      return {
        nameJa: att.nameJa,
        nameEn: enAtt ? enAtt.name : null,
        cost: att.cost,
        convertedEnergyCost: att.convertedEnergyCost,
        damage: att.damage,
        textJa: att.textJa,
        textEn: enAtt ? (enAtt.text || '') : null,
      };
    });

    // Map abilities positionally
    const abilities = card.abilities.map((abl, i) => {
      const enAbl = enCard && enCard.abilities && enCard.abilities[i] ? enCard.abilities[i] : null;
      return {
        nameJa: abl.nameJa,
        nameEn: enAbl ? enAbl.name : null,
        type: abl.type,
        textJa: abl.textJa,
        textEn: enAbl ? enAbl.text : null,
      };
    });

    // textEn for Pokémon: join all EN rules (Tera bench protection + ex rule)
    // Only include if there are non-generic rules (i.e., Tera/Mega specific rules)
    const textJa = card.textJa || null;
    let textEn = null;
    if (enCard && enCard.rules && enCard.rules.length > 0) {
      const nonGenericRules = enCard.rules.filter(r =>
        !r.startsWith('Pokémon ex rule:') &&
        !r.startsWith('Pokémon VSTAR rule:') &&
        !r.startsWith('Pokémon V rule:') &&
        !r.startsWith('Pokémon VMAX rule:')
      );
      if (nonGenericRules.length > 0) {
        textEn = enCard.rules.join(' ');
      }
    }

    const newCard = {
      id: card.id,
      setIdJa: card.setIdJa,
      setIdEn: enSetId,
      numberJa: card.numberJa,
      numberEn: enNum,
      nameJa: card.nameJa,
      nameEn,
      supertype: card.supertype,
      subtypes,
      types: card.types,
      hp: card.hp,
      evolvesFrom: card.evolvesFrom,
      abilities,
      attacks,
      weaknesses: card.weaknesses,
      resistances: card.resistances,
      retreatCost: card.retreatCost,
      ...(textJa !== null || textEn !== null ? { textJa, textEn } : {}),
      regulationMark: card.regulationMark,
      rarity: card.rarity,
      rarityJa: card.rarityJa,
      artist: card.artist,
      nationalPokedexNumber: card.nationalPokedexNumber,
      imageJa: card.imageJa,
      imageEn: card.imageEn,
    };

    newCards.push(newCard);

  } else {
    // Trainer or Energy
    const trainerInfo = trainerMap[n];
    if (!trainerInfo) {
      unmatched.push(`md-${n}: ${card.nameJa} (no trainerMap entry)`);
      continue;
    }

    const [slug, enName] = trainerInfo;
    const enCard = findByName(slug, enName);

    if (!enCard) {
      unmatched.push(`md-${n}: ${card.nameJa} (EN name '${enName}' not found in ${slug})`);
    }

    const enSetId = enCard ? setMeta[slug].id : null;
    const enNum = enCard ? formatNumberEn(enCard.number, setMeta[slug].printedTotal) : null;
    const nameEn = enCard ? enCard.name : null;

    // textEn from rules[0] only (main effect; skip generic subtype reminder in rules[1])
    let textEn = null;
    if (enCard && enCard.rules && enCard.rules.length > 0) {
      textEn = enCard.rules[0];
    }

    const newCard = {
      id: card.id,
      setIdJa: card.setIdJa,
      setIdEn: enSetId,
      numberJa: card.numberJa,
      numberEn: enNum,
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
      imageEn: card.imageEn,
    };

    newCards.push(newCard);
  }
}

// ── Report ───────────────────────────────────────────────────────────────────
if (unmatched.length > 0) {
  console.error('UNMATCHED:');
  unmatched.forEach(u => console.error('  ' + u));
}
console.log(`Processed: ${newCards.length} / ${mdCards.length}`);
console.log(`Unmatched: ${unmatched.length}`);

// ── Write md.json ─────────────────────────────────────────────────────────────
fs.writeFileSync('data/cards/md.json', JSON.stringify(newCards, null, 2), 'utf8');
console.log('Written: data/cards/md.json');
