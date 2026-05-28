// Updates ssb/ssmr/sstce/sstsy card JSONs with EN set data (setIdEn, numberEn, imageEn)
// Run: node scripts/update_starter_decks_en.js

const fs = require('fs');
const path = require('path');

const cardsDir = path.join(__dirname, '..', 'data', 'cards');

function cdn(setApiId, num) {
  return `https://images.pokemontcg.io/${setApiId}/${num}_hires.png`;
}

// setIdEn uses short EN set codes; imageEn uses pokemontcg.io CDN
const EN = {
  // --- ssb (Steven's) ---
  'ssb-1':  { setIdEn: 'dri', numberEn: '083/182', imageEn: cdn('sv10', 83) },
  'ssb-2':  { setIdEn: 'dri', numberEn: '084/182', imageEn: cdn('sv10', 84) },
  'ssb-3':  { setIdEn: 'dri', numberEn: '086/182', imageEn: cdn('sv10', 86) },
  'ssb-4':  { setIdEn: 'dri', numberEn: '142/182', imageEn: cdn('sv10', 142) },
  'ssb-5':  { setIdEn: 'dri', numberEn: '143/182', imageEn: cdn('sv10', 143) },
  'ssb-6':  { setIdEn: 'dri', numberEn: '144/182', imageEn: cdn('sv10', 144) },
  'ssb-7':  { setIdEn: 'dri', numberEn: '145/182', imageEn: cdn('sv10', 145) },
  'ssb-8':  { setIdEn: 'dri', numberEn: '164/182', imageEn: cdn('sv10', 164) }, // Energy Recycler
  'ssb-9':  { setIdEn: 'pal', numberEn: '188/198', imageEn: cdn('sv2', 188) },  // Super Rod
  'ssb-10': { setIdEn: 'pre', numberEn: '101/131', imageEn: cdn('sv9', 101) },  // Buddy-Buddy Poffin
  'ssb-11': { setIdEn: 'svi', numberEn: '196/198', imageEn: cdn('sv1', 196) },  // Ultra Ball
  'ssb-12': { setIdEn: 'svi', numberEn: '191/198', imageEn: cdn('sv1', 191) },  // Rare Candy
  'ssb-13': { setIdEn: null,  numberEn: null,       imageEn: null, nameEn: 'Switch Cart' }, // no SV-era EN print
  'ssb-14': { setIdEn: 'pal', numberEn: '185/198', imageEn: cdn('sv2', 185) },  // Iono
  'ssb-15': { setIdEn: 'svi', numberEn: '180/198', imageEn: cdn('sv1', 180) },  // Nemona
  'ssb-16': { setIdEn: 'svi', numberEn: '189/198', imageEn: cdn('sv1', 189) },  // Professor's Research
  'ssb-17': { setIdEn: 'pal', numberEn: '172/198', imageEn: cdn('sv2', 172) },  // Boss's Orders
  'ssb-18': { setIdEn: 'dri', numberEn: '166/182', imageEn: cdn('sv10', 166) }, // Granite Cave
  'ssb-19': { setIdEn: 'svp', numberEn: '207',     imageEn: cdn('svp', 207) },  // Beldum alt art

  // --- ssmr (Marnie's) ---
  'ssmr-1':  { setIdEn: 'dri', numberEn: '130/182', imageEn: cdn('sv10', 130) },
  'ssmr-2':  { setIdEn: 'dri', numberEn: '131/182', imageEn: cdn('sv10', 131) },
  'ssmr-3':  { setIdEn: 'dri', numberEn: '132/182', imageEn: cdn('sv10', 132) },
  'ssmr-4':  { setIdEn: 'dri', numberEn: '133/182', imageEn: cdn('sv10', 133) },
  'ssmr-5':  { setIdEn: 'dri', numberEn: '134/182', imageEn: cdn('sv10', 134) },
  'ssmr-6':  { setIdEn: 'dri', numberEn: '135/182', imageEn: cdn('sv10', 135) },
  'ssmr-7':  { setIdEn: 'dri', numberEn: '136/182', imageEn: cdn('sv10', 136) },
  'ssmr-8':  { setIdEn: 'dri', numberEn: '137/182', imageEn: cdn('sv10', 137) },
  'ssmr-9':  { setIdEn: 'dri', numberEn: '164/182', imageEn: cdn('sv10', 164) }, // Energy Recycler
  'ssmr-10': { setIdEn: 'pal', numberEn: '188/198', imageEn: cdn('sv2', 188) },  // Super Rod
  'ssmr-11': { setIdEn: 'pre', numberEn: '101/131', imageEn: cdn('sv9', 101) },  // Buddy-Buddy Poffin
  'ssmr-12': { setIdEn: 'svi', numberEn: '196/198', imageEn: cdn('sv1', 196) },  // Ultra Ball
  'ssmr-13': { setIdEn: 'svi', numberEn: '191/198', imageEn: cdn('sv1', 191) },  // Rare Candy
  'ssmr-14': { setIdEn: null,  numberEn: null,       imageEn: null, nameEn: 'Switch Cart' }, // no SV-era EN print
  'ssmr-15': { setIdEn: 'pal', numberEn: '185/198', imageEn: cdn('sv2', 185) },  // Iono
  'ssmr-16': { setIdEn: 'svi', numberEn: '180/198', imageEn: cdn('sv1', 180) },  // Nemona
  'ssmr-17': { setIdEn: 'svi', numberEn: '189/198', imageEn: cdn('sv1', 189) },  // Professor's Research
  'ssmr-18': { setIdEn: 'pal', numberEn: '172/198', imageEn: cdn('sv2', 172) },  // Boss's Orders
  'ssmr-19': { setIdEn: 'dri', numberEn: '169/182', imageEn: cdn('sv10', 169) }, // Spikemuth Gym
  'ssmr-20': { setIdEn: 'svp', numberEn: '206',     imageEn: cdn('svp', 206) },  // Morpeko alt art

  // --- sstce (Ceruledge ex) ---
  'sstce-1':  { setIdEn: 'ssp', numberEn: '016/191', imageEn: cdn('sv8', 16) },  // Vulpix
  'sstce-2':  { setIdEn: 'ssp', numberEn: '017/191', imageEn: cdn('sv8', 17) },  // Ninetales
  'sstce-3':  { setIdEn: 'ssp', numberEn: '019/191', imageEn: cdn('sv8', 19) },  // Ho-Oh
  'sstce-4':  { setIdEn: 'ssp', numberEn: '026/191', imageEn: cdn('sv8', 26) },  // Oricorio (Fire)
  'sstce-5':  { setIdEn: 'ssp', numberEn: '032/191', imageEn: cdn('sv8', 32) },  // Charcadet
  'sstce-6':  { setIdEn: 'ssp', numberEn: '036/191', imageEn: cdn('sv8', 36) },  // Ceruledge ex
  'sstce-7':  { setIdEn: 'ssp', numberEn: '081/191', imageEn: cdn('sv8', 81) },  // Sigilyph
  'sstce-8':  { setIdEn: 'ssp', numberEn: '125/191', imageEn: cdn('sv8', 125) }, // Registeel
  'sstce-9':  { setIdEn: 'scr', numberEn: '114/142', imageEn: cdn('sv7', 114) }, // Hoothoot
  'sstce-10': { setIdEn: 'scr', numberEn: '115/142', imageEn: cdn('sv7', 115) }, // Noctowl
  'sstce-11': { setIdEn: 'pal', numberEn: '188/198', imageEn: cdn('sv2', 188) }, // Super Rod
  'sstce-12': { setIdEn: 'ssp', numberEn: '189/191', imageEn: cdn('sv8', 189) }, // Tera Orb
  'sstce-13': { setIdEn: 'svi', numberEn: '181/198', imageEn: cdn('sv1', 181) }, // Nest Ball
  'sstce-14': { setIdEn: null,  numberEn: null,       imageEn: null },            // Perfect Mixer (JP only)
  'sstce-15': { setIdEn: 'svi', numberEn: '196/198', imageEn: cdn('sv1', 196) }, // Ultra Ball
  'sstce-16': { setIdEn: 'svi', numberEn: '186/198', imageEn: cdn('sv1', 186) }, // PokéGear 3.0
  'sstce-17': { setIdEn: 'svi', numberEn: '194/198', imageEn: cdn('sv1', 194) }, // Switch (classic)
  'sstce-18': { setIdEn: 'scr', numberEn: '133/142', imageEn: cdn('sv7', 133) }, // Crispin
  'sstce-19': { setIdEn: 'pal', numberEn: '185/198', imageEn: cdn('sv2', 185) }, // Iono
  'sstce-20': { setIdEn: 'svi', numberEn: '180/198', imageEn: cdn('sv1', 180) }, // Nemona
  'sstce-21': { setIdEn: 'svi', numberEn: '189/198', imageEn: cdn('sv1', 189) }, // Professor's Research
  'sstce-22': { setIdEn: 'pal', numberEn: '172/198', imageEn: cdn('sv2', 172) }, // Boss's Orders

  // --- sstsy (Sylveon ex) ---
  'sstsy-1':  { setIdEn: 'ssp', numberEn: '040/191', imageEn: cdn('sv8', 40) },  // Mantine
  'sstsy-2':  { setIdEn: 'twm', numberEn: '065/167', imageEn: cdn('sv6', 65) },  // Zapdos
  'sstsy-3':  { setIdEn: 'ssp', numberEn: '073/191', imageEn: cdn('sv8', 73) },  // Marill
  'sstsy-4':  { setIdEn: 'ssp', numberEn: '074/191', imageEn: cdn('sv8', 74) },  // Azumarill
  'sstsy-5':  { setIdEn: 'ssp', numberEn: '086/191', imageEn: cdn('sv8', 86) },  // Sylveon ex
  'sstsy-6':  { setIdEn: 'ssp', numberEn: '088/191', imageEn: cdn('sv8', 88) },  // Xerneas
  'sstsy-7':  { setIdEn: 'ssp', numberEn: '089/191', imageEn: cdn('sv8', 89) },  // Oricorio (Psychic)
  'sstsy-8':  { setIdEn: 'pal', numberEn: '097/198', imageEn: cdn('sv2', 97) },  // Mimikyu
  'sstsy-9':  { setIdEn: 'ssp', numberEn: '143/191', imageEn: cdn('sv8', 143) }, // Eevee
  'sstsy-10': { setIdEn: 'ssp', numberEn: '144/191', imageEn: cdn('sv8', 144) }, // Snorlax
  'sstsy-11': { setIdEn: 'pal', numberEn: '188/198', imageEn: cdn('sv2', 188) }, // Super Rod
  'sstsy-12': { setIdEn: 'ssp', numberEn: '189/191', imageEn: cdn('sv8', 189) }, // Tera Orb
  'sstsy-13': { setIdEn: 'svi', numberEn: '181/198', imageEn: cdn('sv1', 181) }, // Nest Ball
  'sstsy-14': { setIdEn: 'svi', numberEn: '196/198', imageEn: cdn('sv1', 196) }, // Ultra Ball
  'sstsy-15': { setIdEn: null,  numberEn: null,       imageEn: null },            // Precious Carrier (JP only)
  'sstsy-16': { setIdEn: 'svi', numberEn: '186/198', imageEn: cdn('sv1', 186) }, // PokéGear 3.0
  'sstsy-17': { setIdEn: 'svi', numberEn: '194/198', imageEn: cdn('sv1', 194) }, // Switch (classic)
  'sstsy-18': { setIdEn: 'scr', numberEn: '133/142', imageEn: cdn('sv7', 133) }, // Crispin
  'sstsy-19': { setIdEn: 'pal', numberEn: '185/198', imageEn: cdn('sv2', 185) }, // Iono
  'sstsy-20': { setIdEn: 'svi', numberEn: '180/198', imageEn: cdn('sv1', 180) }, // Nemona
  'sstsy-21': { setIdEn: 'svi', numberEn: '189/198', imageEn: cdn('sv1', 189) }, // Professor's Research
  'sstsy-22': { setIdEn: 'pal', numberEn: '172/198', imageEn: cdn('sv2', 172) }, // Boss's Orders
};

const sets = ['ssb', 'ssmr', 'sstce', 'sstsy'];
let totalUpdated = 0;

for (const setId of sets) {
  const filePath = path.join(cardsDir, `${setId}.json`);
  const cards = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  let updated = 0;

  for (const card of cards) {
    const en = EN[card.id];
    if (!en) continue;

    card.setIdEn = en.setIdEn;
    card.numberEn = en.numberEn;
    card.imageEn = en.imageEn;
    if (en.nameEn) card.nameEn = en.nameEn;
    updated++;
  }

  fs.writeFileSync(filePath, JSON.stringify(cards, null, 2), 'utf8');
  console.log(`${setId}.json: updated ${updated} cards`);
  totalUpdated += updated;
}

console.log(`Done. Total cards updated: ${totalUpdated}`);
