// Phase 2: Fill EN data for ns set (Chaos Rising / CRI, 086 cards)
// Run from project root: node scripts/phase2_ns.js
//
// JP→EN number mapping:
//   JP1-47  → EN1-47  (1:1)
//   EN48 = Mega Gallade ex (EN-only)
//   JP48-53 → EN49-54 (+1)
//   EN55 = Krookodile ex (EN-only)
//   JP54-71 → EN56-73 (+2)
//   EN74 = Adversary Policy (EN-only)
//   JP72-80 → EN75-83 (Trainers, reordered — hardcoded below)
//   JP81-83 → EN84-86 (Special Energies, no images downloaded)

const fs = require('fs');

function readJson(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  if (content.charCodeAt(0) === 0xFEFF) content = content.slice(1);
  return JSON.parse(content);
}

const SET_ID_EN = 'cri';
const TOTAL_EN = '086';
const MEGA_RULE = 'When your Mega Evolution Pokémon ex is Knocked Out, your opponent takes 3 Prize cards.';

// Returns the EN card number (integer) for a given JP number (1-83).
// Returns null for JP81-83 (Special Energies at EN84-86 — we still assign an enNum
// but imageEn is null because those images were not downloaded).
function jpToEnNum(jpNum) {
  if (jpNum >= 1 && jpNum <= 47) return jpNum;
  if (jpNum >= 48 && jpNum <= 53) return jpNum + 1;
  if (jpNum >= 54 && jpNum <= 71) return jpNum + 2;
  // Trainers JP72-80 and Energies JP81-83 handled via trainerEnNums below
  return null;
}

// JP Trainer/Energy → EN number (Trainers are reordered in EN)
const trainerEnNums = {
  72: 82, // Special Red Card
  73: 78, // Great Haul Net
  74: 83, // Transformation Tome
  75: 76, // AZ's Tranquility
  76: 79, // Philippe
  77: 81, // Roxie's Performance
  78: 77, // Emma
  79: 75, // Ange Floette
  80: 80, // Prism Tower
  81: 84, // ニトロ炎エネルギー (no image)
  82: 85, // バブル水エネルギー (no image)
  83: 86, // マグネット鋼エネルギー (no image)
};

// EN data for each JP card number.
// Pokémon cards: { name, abilities:[{name,text}], attacks:[{name,text}], megaRule? }
// Trainer/Energy cards: { name, text } — name:null for JP81-83 (unknown)
const enData = {
  1:  { name:'Weedle',        abilities:[], attacks:[{name:'Surprise Attack', text:'Flip a coin. If tails, this attack does nothing.'}] },
  2:  { name:'Kakuna',        abilities:[{name:'Exoskeleton', text:'This Pokémon takes 20 less damage from attacks (after applying Weakness and Resistance).'}], attacks:[{name:'Hang Down', text:''}] },
  3:  { name:'Beedrill ex',   abilities:[], attacks:[{name:'Rumbling Bees', text:'This attack does 110 damage for each of your Beedrill and Beedrill ex in play.'}] },
  4:  { name:'Carnivine',     abilities:[], attacks:[{name:'Chomp Whole', text:"If your opponent's Active Pokémon has no Retreat Cost, this attack does 80 more damage."}] },
  5:  { name:'Chespin',       abilities:[], attacks:[{name:'Beat', text:''}, {name:'Spike Sting', text:''}] },
  6:  { name:'Quilladin',     abilities:[], attacks:[{name:'Leafy Charge', text:'Search your deck for a Basic Grass Energy card and attach it to this Pokémon. Then, shuffle your deck.'}, {name:'Vine Whip', text:''}] },
  7:  { name:'Chesnaught',    abilities:[{name:'Needly Armor', text:"If this Pokémon is in the Active Spot and is damaged by an attack from your opponent's Pokémon (even if this Pokémon is Knocked Out), place 3 damage counters on the Attacking Pokémon for each Grass Energy attached to this Pokémon."}], attacks:[{name:'Impound', text:"During your opponent's next turn, the Defending Pokémon can't retreat."}] },
  8:  { name:'Vulpix',        abilities:[], attacks:[{name:'Singe', text:"Your opponent's Active Pokémon is now Burned."}] },
  9:  { name:'Ninetales',     abilities:[], attacks:[{name:'Nine-Tailed Transfer', text:"Move all damage counters from 1 of your Benched Pokémon to your opponent's Active Pokémon."}, {name:'Will-O-Wisp', text:''}] },
  10: { name:'Ho-Oh',         abilities:[], attacks:[{name:'Flames of Revival', text:'Put up to 3 Basic Pokémon from your discard pile onto your Bench.'}, {name:'Bright Wing', text:'Discard a Fire Energy from this Pokémon.'}] },
  11: { name:'Fennekin',      abilities:[], attacks:[{name:'Call for Family', text:'Search your deck for up to 2 Basic Pokémon and put them onto your Bench. Then, shuffle your deck.'}, {name:'Steady Firebreathing', text:''}] },
  12: { name:'Braixen',       abilities:[], attacks:[{name:'Flamethrower', text:'Discard an Energy from this Pokémon.'}] },
  13: { name:'Delphox',       abilities:[{name:'Flaring Magic', text:'Once during your turn, you may discard a Basic Fire Energy card from your hand in order to use this Ability. Draw cards until you have 7 cards in your hand.'}], attacks:[{name:'Energized Storm', text:'This attack does 30 damage for each Energy attached to all Pokémon.'}] },
  14: { name:'Litleo',        abilities:[], attacks:[{name:'Tackle', text:''}] },
  15: { name:'Mega Pyroar ex', abilities:[], attacks:[{name:'Ferocious Bellow', text:"During your opponent's next turn, attacks used by the Defending Pokémon do 50 less damage (before applying Weakness and Resistance)."}, {name:'Fiery Big Bang', text:'This attack does 10 less damage for each damage counter on this Pokémon.'}], megaRule:true },
  16: { name:'Remoraid',      abilities:[], attacks:[{name:'Sharp Fin', text:''}] },
  17: { name:'Octillery',     abilities:[], attacks:[{name:'Jet of Ink', text:"During your opponent's next turn, if the Defending Pokémon tries to use an attack, your opponent flips 2 coins. If either of them is tails, that attack doesn't happen."}, {name:'Tantrum', text:'This Pokémon is now Confused.'}] },
  18: { name:'Delibird',      abilities:[], attacks:[{name:'Pleasing Present', text:'Each player may attach up to 3 Basic Energy cards from their hand to their Pokémon in any way they like. Your opponent does this first.'}, {name:'Flap', text:''}] },
  19: { name:'Keldeo',        abilities:[], attacks:[{name:'Shoot Through', text:"This attack also does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"}, {name:'Reflect Energy', text:'Move an Energy from this Pokémon to 1 of your Benched Pokémon.'}] },
  20: { name:'Froakie',       abilities:[], attacks:[{name:'Collect', text:'Draw a card.'}, {name:'Water Gun', text:''}] },
  21: { name:'Frogadier',     abilities:[], attacks:[{name:'Summoning Jutsu', text:'Search your deck for up to 3 Pokémon, reveal them, and put them into your hand. Then, shuffle your deck.'}, {name:'Aqua Edge', text:''}] },
  22: { name:'Mega Greninja ex', abilities:[{name:'Mortal Shuriken', text:"Once during your turn, if this Pokémon is in the Active Spot, you may discard a Basic Water Energy card from your hand in order to use this Ability. Place 6 damage counters on 1 of your opponent's Pokémon."}], attacks:[{name:'Ninja Spinner', text:'You may put a Water Energy attached to this Pokémon into your hand and have this attack do 80 more damage.'}], megaRule:true },
  23: { name:'Bergmite',      abilities:[], attacks:[{name:'Chilly', text:''}, {name:'Frost Breath', text:''}] },
  24: { name:'Avalugg',       abilities:[], attacks:[{name:'Iceberg Breaker', text:'Discard the top 6 cards of your deck, and this attack does 60 damage for each Basic Water Energy card you discarded in this way.'}, {name:'Frost Stamp', text:''}] },
  25: { name:'Wimpod',        abilities:[], attacks:[{name:'Gnaw', text:''}, {name:'Corkscrew Punch', text:''}] },
  26: { name:'Golisopod',     abilities:[], attacks:[{name:'Critical Slash', text:"If your opponent's Pokémon is Knocked Out by damage from this attack, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon."}, {name:'Boundless Power', text:"During your next turn, this Pokémon can't use attacks."}] },
  27: { name:'Mareep',        abilities:[], attacks:[{name:'Thunder Wave', text:"Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed."}] },
  28: { name:'Flaaffy',       abilities:[], attacks:[{name:'Disconnect', text:"During your opponent's next turn, they can't play any Item cards from their hand."}] },
  29: { name:'Ampharos',      abilities:[{name:'Synchro Pulse', text:"If you have the same number of cards in your hand as your opponent, attacks used by this Pokémon do 80 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance)."}], attacks:[{name:'Flashing Bolt', text:"During your next turn, this Pokémon can't use Flashing Bolt."}] },
  30: { name:'Emolga',        abilities:[], attacks:[{name:'Minor Errand-Running', text:'Search your deck for up to 2 Basic Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.'}, {name:'Sky Return', text:'Put this Pokémon and all attached cards into your hand.'}] },
  31: { name:'Deoxys',        abilities:[], attacks:[{name:'Genome Charge', text:'Search your deck for up to 2 Basic Psychic Energy cards and attach them to this Pokémon. Then, shuffle your deck.'}, {name:'Psychic', text:"This attack does 20 more damage for each Energy attached to your opponent's Active Pokémon."}] },
  32: { name:'Deoxys',        abilities:[], attacks:[{name:'Psyspear', text:"If this Pokémon has at least 2 extra Energy attached (in addition to this attack's cost), this attack also does 120 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"}] },
  33: { name:'Deoxys',        abilities:[], attacks:[{name:'Psy Protection', text:"During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Pokémon that have an Ability."}] },
  34: { name:'Deoxys',        abilities:[], attacks:[{name:'Psyspeed', text:'You may draw cards until you have 5 cards in your hand.'}] },
  35: { name:'Mega Floette ex', abilities:[], attacks:[{name:'Gentle Light', text:'Heal 30 damage from each Pokémon (both yours and your opponent\'s).'}, {name:'Eternity Bloom', text:'Search your deck for up to 4 Basic Psychic Energy cards and attach them to your Benched Pokémon in any way you like. Then, shuffle your deck.'}], megaRule:true },
  36: { name:'Espurr',        abilities:[], attacks:[{name:'Buddy Attack', text:'If you played Emma from your hand during this turn, this attack does 60 more damage.'}] },
  37: { name:'Meowstic',      abilities:[], attacks:[{name:'Tricky Steps', text:"You may move an Energy from your opponent's Active Pokémon to 1 of their Benched Pokémon."}] },
  38: { name:'Phantump',      abilities:[{name:'Spiteful Evolution', text:"Once during your turn, you may use this Ability. Choose a card in your hand that evolves from this Pokémon and put it onto this Pokémon to evolve it. If you do, place 2 damage counters on the Pokémon you evolved in this way. You can't use this Ability during your first turn."}], attacks:[{name:'Mumble', text:''}] },
  39: { name:'Trevenant',     abilities:[], attacks:[{name:'Cursed Roots', text:"During your opponent's next turn, Energy can't be attached from your opponent's hand to the Defending Pokémon."}, {name:'Overwhelming Pain', text:"This attack does 10 more damage for each damage counter on all of your opponent's Pokémon."}] },
  40: { name:'Pumpkaboo',     abilities:[], attacks:[{name:'Stampede', text:''}] },
  41: { name:'Gourgeist ex',  abilities:[], attacks:[{name:'Horrifying Rondo', text:'This attack does 50 more damage for each of your Benched Pokémon that has any damage counters on it.'}, {name:'Ghostly Touch', text:"Discard a random card from your opponent's hand."}] },
  42: { name:'Xerneas',       abilities:[], attacks:[{name:'Geo Storm', text:'This attack does 30 damage for each Psychic Energy attached to all of your Pokémon.'}] },
  43: { name:'Sudowoodo',     abilities:[], attacks:[{name:'Trials and Trip-ulations', text:'Search your deck for up to 2 Transformation Tome cards, reveal them, and put them into your hand. Then, shuffle your deck.'}, {name:'Rock Hurl', text:"This attack's damage isn't affected by Resistance."}] },
  44: { name:'Phanpy',        abilities:[], attacks:[{name:'Mud-Slap', text:''}, {name:'Rollout', text:''}] },
  45: { name:'Donphan',       abilities:[], attacks:[{name:'No Reprieve', text:"During your next turn, attacks used by this Pokémon do 120 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance)."}, {name:'Smashing Headbutt', text:'Discard 2 Energy from this Pokémon.'}] },
  46: { name:'Baltoy',        abilities:[], attacks:[{name:'Continuous Spin', text:'Flip a coin until you get tails. This attack does 30 damage for each heads.'}] },
  47: { name:'Claydol',       abilities:[], attacks:[{name:'Devolution Ray', text:"If your opponent's Active Pokémon is an evolved Pokémon, devolve it by putting the highest Stage Evolution card on it into your opponent's hand."}] },
  48: { name:'Zubat',         abilities:[], attacks:[{name:'Supersonic', text:"Your opponent's Active Pokémon is now Confused."}] },
  49: { name:'Golbat',        abilities:[], attacks:[{name:'Covert Flight', text:"During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Basic Pokémon."}] },
  50: { name:'Crobat',        abilities:[{name:'Nighttime Maneuvers', text:'Once during your turn, if this Pokémon is in the Active Spot, you may use this Ability. Search your deck for a card. Shuffle your deck, then put that card on top of it.'}], attacks:[{name:'Poison Sound Wave', text:"Your opponent's Active Pokémon is now Confused and Poisoned."}] },
  51: { name:'Qwilfish',      abilities:[{name:'Poison Point', text:"If this Pokémon is in the Active Spot and is damaged by an attack from your opponent's Pokémon (even if this Pokémon is Knocked Out), the Attacking Pokémon is now Poisoned."}], attacks:[{name:'Venoshock', text:"If your opponent's Active Pokémon is Poisoned, this attack does 50 more damage."}] },
  52: { name:'Stunky',        abilities:[], attacks:[{name:'Scratch', text:''}] },
  53: { name:'Skuntank',      abilities:[], attacks:[{name:'Rear Kick', text:''}, {name:'Smash Turn', text:'Switch this Pokémon with 1 of your Benched Pokémon.'}] },
  54: { name:'Trubbish',      abilities:[], attacks:[{name:'Acid Spray', text:"Flip a coin. If heads, discard an Energy from your opponent's Active Pokémon."}] },
  55: { name:'Garbodor',      abilities:[{name:'Gloomy Garbage', text:"Attacks used by your opponent's Active Pokémon that has a Pokémon Tool attached do 20 less damage (before applying Weakness and Resistance)."}], attacks:[{name:'Sludge Bomb', text:''}] },
  56: { name:'Skrelp',        abilities:[], attacks:[{name:'Hook', text:''}] },
  57: { name:'Beldum',        abilities:[], attacks:[{name:'Headbutt', text:''}, {name:'Beam', text:''}] },
  58: { name:'Metang',        abilities:[], attacks:[{name:'Metal Claw', text:''}, {name:'Guard Press', text:"During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance)."}] },
  59: { name:'Metagross',     abilities:[], attacks:[{name:'Bounce Back', text:"Switch out your opponent's Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.)"}, {name:'Metallic Hammer', text:'You may discard 3 Metal Energy from this Pokémon and have this attack do 150 more damage.'}] },
  60: { name:'Ferroseed',     abilities:[], attacks:[{name:'Rolling Tackle', text:''}] },
  61: { name:'Ferrothorn',    abilities:[{name:'Startling Drop', text:"During your opponent's turn, if this Pokémon is discarded from your deck by an effect of an attack or Ability from your opponent's Pokémon, or by an effect of your opponent's Item or Supporter cards, discard the top 8 cards of your opponent's deck."}], attacks:[{name:'Special Whip', text:'If this Pokémon has any Special Energy attached, this attack does 70 more damage.'}] },
  62: { name:'Cobalion ex',   abilities:[{name:'Metal Road', text:'Once during your turn, when this Pokémon moves from your Bench to the Active Spot, you may use this Ability. Move any amount of Metal Energy from your other Pokémon to this Pokémon.'}], attacks:[{name:'Power Tackle', text:"During your next turn, this Pokémon can't use attacks."}] },
  63: { name:'Mega Dragalge ex', abilities:[], attacks:[{name:'Corrosive Liquid', text:"Discard all Pokémon Tools and Special Energy from all of your opponent's Pokémon."}, {name:'Pernicious Poison', text:"Your opponent's Active Pokémon is now Poisoned. During Pokémon Checkup, place 16 damage counters on that Pokémon instead of 1."}], megaRule:true },
  64: { name:'Goomy',         abilities:[], attacks:[{name:'Absorb', text:'Heal 30 damage from this Pokémon.'}] },
  65: { name:'Sliggoo',       abilities:[], attacks:[{name:'Gentle Slap', text:''}] },
  66: { name:'Goodra',        abilities:[{name:'Slimy Sliding', text:"When your opponent's Active Pokémon retreats, your opponent flips a coin. If tails, Energy for its Retreat Cost is not discarded, and they don't switch Pokémon. The effect of Slimy Sliding doesn't stack."}], attacks:[{name:'Dragon Pulse', text:'Discard the top card of your deck.'}] },
  67: { name:'Tauros',        abilities:[], attacks:[{name:'Target Together', text:'Choose 1 of your opponent\'s Pokémon and flip a coin for each of your Pokémon in play that has "Tauros" in its name. This attack does 50 damage to the chosen Pokémon for each heads. (Don\'t apply Weakness and Resistance for Benched Pokémon.)'}] },
  68: { name:'Patrat',        abilities:[{name:'Watchful Eye', text:"Damage counters on each Pokémon (both yours and your opponent's) can't be moved to other Pokémon."}], attacks:[{name:'Bite', text:''}] },
  69: { name:'Watchog',       abilities:[], attacks:[{name:'Snap Inspection', text:"Flip 3 coins. If any of them are heads, your opponent reveals their hand. For each heads, choose a card you find there and shuffle it into your opponent's deck."}, {name:'Low Kick', text:''}] },
  70: { name:'Minccino',      abilities:[], attacks:[{name:'Take Down', text:'This Pokémon also does 10 damage to itself.'}] },
  71: { name:'Cinccino ex',   abilities:[{name:'Smooth Coat', text:'If any damage is done to this Pokémon by attacks, flip a coin. If heads, prevent that damage.'}], attacks:[{name:'Energized Slap', text:'This attack does 40 damage for each Energy attached to this Pokémon.'}] },
  // Trainers (JP72-80) → EN numbers differ; see trainerEnNums above
  72: { name:'Special Red Card',    text:'You can use this card only if your opponent has 3 or fewer Prize cards remaining. Your opponent shuffles their hand and puts it on the bottom of their deck. If they put any cards on the bottom of their deck in this way, they draw 3 cards.' },
  73: { name:'Great Haul Net',      text:'Choose 1 or both: • Shuffle up to 3 Water Pokémon from your discard pile into your deck. • Shuffle up to 3 Basic Water Energy cards from your discard pile into your deck.' },
  74: { name:'Transformation Tome', text:'You must play 2 Transformation Tome cards at once. (This effect works one time for 2 cards.) Choose a Basic Pokémon in your discard pile and switch it with 1 of your Basic Pokémon in play. Any attached cards, damage counters, Special Conditions, turns in play, and any other effects remain on the new Pokémon.' },
  75: { name:"AZ's Tranquility",    text:'Switch your Active Pokémon with 1 of your Benched Pokémon. If you moved a Pokémon ex to your Bench in this way, heal 80 damage from that Pokémon.' },
  76: { name:'Philippe',            text:'Attach up to 2 Basic Metal Energy cards from your discard pile to 1 of your Metal Pokémon.' },
  77: { name:"Roxie's Performance", text:"During your opponent's next turn, their Poisoned Pokémon can't retreat. (This includes newly Poisoned Pokémon.)" },
  78: { name:'Emma',                text:"Your opponent reveals their hand, and you draw a card for each Pokémon you find there." },
  79: { name:'Ange Floette',        text:'You can put this card into play only if you discard a Prism Tower in play, and you can put this card into play during the same turn you play Prism Tower. Each Mega Floette ex in play (both yours and your opponent\'s) gets +150 HP.' },
  80: { name:'Prism Tower',         text:'Once during each player\'s turn, that player may discard 2 cards from their hand in order to draw a card.' },
  // Special Energies (JP81-83) → EN84-86 — images not downloaded, names unknown
  81: { name:null, text:null },
  82: { name:null, text:null },
  83: { name:null, text:null },
};

function padNum(n) {
  return String(n).padStart(3, '0');
}

function formatNum(n) {
  return `${padNum(n)}/${TOTAL_EN}`;
}

const nsCards = readJson('data/cards/ns.json');

const updated = nsCards.map(card => {
  const jpNum = parseInt(card.numberJa.split('/')[0], 10);
  const en = enData[jpNum];

  if (!en) {
    console.warn(`No EN data for JP${jpNum} (${card.nameJa})`);
    return card;
  }

  // Determine EN card number
  let enNum;
  if (jpNum >= 1 && jpNum <= 71) {
    enNum = jpToEnNum(jpNum);
  } else {
    enNum = trainerEnNums[jpNum];
  }

  const hasEnImage = enNum <= 83; // images 1-83 downloaded; 84-86 not downloaded
  const imageEn = hasEnImage ? `images/sets/ns/en/${enNum}.jpg` : null;
  const numberEn = formatNum(enNum);

  if (card.supertype === 'Pokémon') {
    const isMegaEx = card.subtypes && card.subtypes.includes('Mega');

    // Map abilities
    const updatedAbilities = card.abilities.map((ab, i) => {
      const enAb = en.abilities && en.abilities[i];
      return {
        nameJa: ab.nameJa,
        nameEn: enAb ? enAb.name : null,
        type: ab.type,
        textJa: ab.textJa,
        textEn: enAb ? enAb.text : null,
      };
    });

    // Map attacks
    const updatedAttacks = card.attacks.map((atk, i) => {
      const enAtk = en.attacks && en.attacks[i];
      return {
        nameJa: atk.nameJa,
        nameEn: enAtk ? enAtk.name : null,
        cost: atk.cost,
        convertedEnergyCost: atk.convertedEnergyCost,
        damage: atk.damage,
        textJa: atk.textJa,
        textEn: enAtk ? enAtk.text : null,
      };
    });

    const base = {
      id: card.id,
      setIdJa: card.setIdJa,
      setIdEn: SET_ID_EN,
      numberJa: card.numberJa,
      numberEn,
      nameJa: card.nameJa,
      nameEn: en.name,
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
    };

    if (isMegaEx) {
      base.textJa = card.textJa !== undefined ? card.textJa : null;
      base.textEn = MEGA_RULE;
    }

    base.regulationMark = card.regulationMark;
    base.rarity = card.rarity;
    base.rarityJa = card.rarityJa;
    base.artist = card.artist;
    base.nationalPokedexNumber = card.nationalPokedexNumber;
    base.imageJa = card.imageJa;
    base.imageEn = imageEn;

    return base;

  } else {
    // Trainer or Energy
    return {
      id: card.id,
      setIdJa: card.setIdJa,
      setIdEn: SET_ID_EN,
      numberJa: card.numberJa,
      numberEn,
      nameJa: card.nameJa,
      nameEn: en.name,
      supertype: card.supertype,
      subtypes: card.subtypes,
      textJa: card.textJa,
      textEn: en.text,
      regulationMark: card.regulationMark,
      rarity: card.rarity,
      rarityJa: card.rarityJa,
      artist: card.artist,
      imageJa: card.imageJa,
      imageEn,
    };
  }
});

const outPath = 'data/cards/ns.json';
fs.writeFileSync(outPath, JSON.stringify(updated, null, 2), 'utf8');
console.log(`Done. Wrote ${updated.length} cards to ${outPath}`);
