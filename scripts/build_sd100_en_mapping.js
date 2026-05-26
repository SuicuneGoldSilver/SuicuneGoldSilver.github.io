// Build EN mapping for sd100 by fetching card lists from all candidate EN sets.
// Saves scripts/sd100_en_mapping.json
// Run: node scripts/build_sd100_en_mapping.js
const https = require('https');
const fs = require('fs');

const EN_SETS = [
  // Mega Evolution era (most recent)
  'pitchblack',
  'chaosrising',
  'perfectorder',
  'ascendedheroes',
  'destinedrivals',
  'journeytogether',
  'prismaticevolutions',
  // Stellar Crown era
  'surgingsparks',
  'stellarcrown',
  'shroudedfable',
  'twilightmasquerade',
  // Temporal Forces / Paradox era
  'temporalforces',
  'paldeanfates',
  'paradoxrift',
  // Obsidian Flames era
  'obsidianflames',
  // Older SV sets
  'phantasmalflames',
  '151',
  'paldeaevolved',
  'scarletviolet',
  // BW / Special
  'megaevolution',
  'whiteflare',
  'blackbolt',
];

function get(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)', 'Referer': 'https://www.serebii.net/' }
    }, res => {
      const chunks = [];
      res.on('data', d => chunks.push(d));
      res.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    });
    req.on('error', reject);
    req.setTimeout(30000, () => { req.destroy(); reject(new Error('timeout')); });
  });
}

function delay(ms) { return new Promise(r => setTimeout(r, ms)); }

function stripTags(s) {
  return s.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

function decodeHtml(s) {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&eacute;/g, 'é')
    .replace(/&aacute;/g, 'á')
    .replace(/&iacute;/g, 'í')
    .replace(/&oacute;/g, 'ó')
    .replace(/&uacute;/g, 'ú')
    .replace(/&ntilde;/g, 'ñ')
    .replace(/&#9792;/g, '♀')
    .replace(/&#9794;/g, '♂')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(parseInt(n, 10)));
}

function parseCards(html, setSlug) {
  const re = new RegExp(`href="/card/${setSlug}/(\\d+)\\.shtml">(?!<img)([^<]*(?:<[^>]+>[^<]*)*?)<\\/a>`, 'g');
  const cards = [];
  const seen = new Set();
  let m;
  while ((m = re.exec(html)) !== null) {
    const num = parseInt(m[1], 10);
    if (seen.has(num)) continue;
    const rawName = stripTags(m[2]);
    if (!rawName) continue;
    const name = decodeHtml(rawName);
    seen.add(num);
    cards.push({ num, name });
  }
  return cards;
}

function normalize(name) {
  return decodeHtml(name)
    .toLowerCase()
    .replace(/\s*\[[^\]]*\]/g, '')   // strip [Corbeau], [Giovanni], etc.
    .replace(/['']/g, "'")
    .replace(/é/g, 'e')              // accent-insensitive: pokegear, poke ball
    .replace(/\s+/g, ' ')
    .trim();
}

// For ambiguous matches within the same set, pick the lowest card number (regular, not alt art)
function pickBest(matches) {
  // Prefer lowest number within same set; if cross-set, pick first set's lowest
  const bySets = {};
  for (const m of matches) {
    if (!bySets[m.set]) bySets[m.set] = [];
    bySets[m.set].push(m);
  }
  // Prefer the first set in EN_SETS order (most recent / most likely source)
  for (const setSlug of EN_SETS) {
    if (bySets[setSlug]) {
      // Within set, pick lowest num (regular card, not alt art at high numbers)
      const sorted = bySets[setSlug].sort((a, b) => a.num - b.num);
      return sorted[0];
    }
  }
  return matches[0];
}

// Manual overrides: sd100 card number → {set, num} or null (JP-only)
const MANUAL = {
  742: { set: 'ascendedheroes', num: 217 }, // Team Rocket's Energy → EN "Team Rocket Energy"
  // The following appear to be JP-only or use different EN names not resolvable by name match:
  456: null, // Darkrai ex — not found in checked EN sets
  475: null, // Vullaby ex — not in any fetched EN set
  632: null, // Strange Timepiece — EN name likely differs
  671: null, // Reboot Pod — EN name likely differs
};

async function main() {
  const sd100 = JSON.parse(fs.readFileSync('scripts/sd100_cardlist.json', 'utf8'));

  // Decode HTML entities in sd100 names
  for (const c of sd100) c.name = decodeHtml(c.name);

  const enLookup = new Map(); // normalized name → [{set, num}]

  for (const setSlug of EN_SETS) {
    process.stdout.write(`Fetching ${setSlug}... `);
    try {
      const html = await get(`https://www.serebii.net/card/${setSlug}/`);
      const cards = parseCards(html, setSlug);
      if (cards.length === 0) {
        console.log('0 cards (set may not exist)');
      } else {
        console.log(`${cards.length} cards`);
        for (const c of cards) {
          const key = normalize(c.name);
          if (!enLookup.has(key)) enLookup.set(key, []);
          enLookup.get(key).push({ set: setSlug, num: c.num });
        }
      }
    } catch (err) {
      console.log(`ERROR: ${err.message}`);
    }
    await delay(600);
  }

  console.log(`\nEN lookup built: ${enLookup.size} unique names`);

  const mapping = {};
  const unmatched = [];
  const ambiguous = [];

  for (const card of sd100) {
    // Apply manual overrides first
    if (Object.prototype.hasOwnProperty.call(MANUAL, card.num)) {
      mapping[card.num] = MANUAL[card.num];
      continue;
    }
    const key = normalize(card.name);
    const matches = enLookup.get(key) || [];
    if (matches.length === 0) {
      mapping[card.num] = null;
      unmatched.push(card);
    } else if (matches.length === 1) {
      mapping[card.num] = matches[0];
    } else {
      const best = pickBest(matches);
      mapping[card.num] = best;
      ambiguous.push({ sd100: card, chosen: best, all: matches });
    }
  }

  const matched = sd100.filter(c => mapping[c.num] !== null).length;
  console.log(`\nResults:`);
  console.log(`  Matched:   ${matched} / ${sd100.length}`);
  console.log(`  Unmatched: ${unmatched.length}`);
  console.log(`  Ambiguous (resolved): ${ambiguous.length}`);

  if (unmatched.length > 0) {
    console.log('\nUnmatched cards (need manual research):');
    unmatched.forEach(c => console.log(`  [${c.num}] ${c.name}`));
  }

  // Show ambiguous resolution for review
  console.log('\nAmbiguous resolutions (check these):');
  ambiguous.slice(0, 30).forEach(a => {
    const all = a.all.map(m => `${m.set}#${m.num}`).join(', ');
    console.log(`  [${a.sd100.num}] ${a.sd100.name} → CHOSE ${a.chosen.set}#${a.chosen.num} | all: ${all}`);
  });
  if (ambiguous.length > 30) console.log(`  ... and ${ambiguous.length - 30} more`);

  fs.writeFileSync('scripts/sd100_en_mapping.json', JSON.stringify(mapping, null, 2), 'utf8');
  console.log('\nSaved to scripts/sd100_en_mapping.json');
}

main().catch(console.error);
