// Phase 2: Fill EN data for data/cards/nz.json
// Run from project root: node scripts/phase2_nz.js
// EN set: Perfect Order (por), printedTotal 88
// JP-EN offset: JP1-25 → EN1-25, JP26-66 → EN27-67 (EN26=Shinx EN-only)
// Trainer/Energy: explicit map (non-sequential)

const fs = require('fs');

function readJson(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  if (content.charCodeAt(0) === 0xFEFF) content = content.slice(1);
  return JSON.parse(content);
}

function formatNumberEn(n) {
  return String(n).padStart(3, '0') + '/088';
}

function jpToEn(jpN) {
  if (jpN >= 1 && jpN <= 21) return jpN;
  if (jpN >= 22 && jpN <= 66) return jpN + 1;  // EN22=Lapras ex is EN-only
  const map = {
    67: 73, 68: 68, 69: 69, 70: null, 71: 78,
    72: 70, 73: null, 74: 79, 75: null, 76: 75,
    77: 77, 78: null, 79: null, 80: null,
  };
  return map[jpN] !== undefined ? map[jpN] : null;
}

const MEGA_EX_RULE = "Mega Evolution ex rule: When your Mega Evolution Pokémon ex is Knocked Out, your opponent takes 3 Prize cards.";
const megaExJpNums = new Set([21, 30, 46, 54]);

// EN data per JP card number: { nameEn, abilities: [{nameEn,textEn}], attacks: [{nameEn,textEn}] }
const pokemonEnData = {
  1:  { nameEn: "Spinarak",         abilities: [], attacks: [{ nameEn: "Gooey Thread",        textEn: "During your opponent's next turn, the Defending Pokémon can't retreat." }] },
  2:  { nameEn: "Ariados",          abilities: [], attacks: [{ nameEn: "Poison Ring",          textEn: "Your opponent's Active Pokémon is now Poisoned. During your opponent's next turn, that Pokémon can't retreat." }] },
  3:  { nameEn: "Shaymin",          abilities: [], attacks: [{ nameEn: "Send Flowers",         textEn: "Search your deck for an Energy card and attach it to 1 of your Benched Grass Pokémon. Then, shuffle your deck." }, { nameEn: "Leaf Step", textEn: "" }] },
  4:  { nameEn: "Snivy",            abilities: [], attacks: [{ nameEn: "Reckless Charge",      textEn: "This Pokémon also does 10 damage to itself." }] },
  5:  { nameEn: "Servine",          abilities: [], attacks: [{ nameEn: "Solar Cutter",         textEn: "" }] },
  6:  { nameEn: "Serperior",        abilities: [], attacks: [{ nameEn: "Regal Command",        textEn: "This attack does 20 damage for each of your Pokémon in play." }, { nameEn: "Solar Coiling", textEn: "If Rosa's Encouragement is in your discard pile, this attack does 150 more damage." }] },
  7:  { nameEn: "Scatterbug",       abilities: [], attacks: [{ nameEn: "Gnaw",                 textEn: "" }] },
  8:  { nameEn: "Spewpa",           abilities: [], attacks: [{ nameEn: "Hide",                 textEn: "Flip a coin. If heads, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon." }] },
  9:  { nameEn: "Vivillon",         abilities: [{ nameEn: "Grand Wing",         textEn: "Once during your turn, you may use this Ability. Your opponent shuffles their hand and puts it on the bottom of their deck. If they put any cards on the bottom of their deck in this way, they draw 4 cards." }], attacks: [{ nameEn: "Blow Through", textEn: "If a Stadium is in play, this attack does 60 more damage." }] },
  10: { nameEn: "Rowlet",           abilities: [], attacks: [{ nameEn: "Find a Friend",        textEn: "Search your deck for a Pokémon, reveal it, and put it into your hand. Then, shuffle your deck." }, { nameEn: "Tackle", textEn: "" }] },
  11: { nameEn: "Dartrix",          abilities: [], attacks: [{ nameEn: "Leafage",              textEn: "" }, { nameEn: "Feather Shot", textEn: "Discard all Energy from this Pokémon, and this attack does 90 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)" }] },
  12: { nameEn: "Decidueye ex",     abilities: [{ nameEn: "Sniper's Eye",       textEn: "If your opponent has exactly 4 cards in their hand, ignore all ★ Energy in the costs of attacks used by this Pokémon." }], attacks: [{ nameEn: "Crushing Arrow", textEn: "Discard an Energy from your opponent's Active Pokémon." }] },
  13: { nameEn: "Fletchinder",      abilities: [], attacks: [{ nameEn: "Flare",                textEn: "" }] },
  14: { nameEn: "Talonflame",       abilities: [{ nameEn: "Sky Hunt",           textEn: "Once during your turn, you may use this Ability. Flip a coin. If heads, discard a random card from your opponent's hand." }], attacks: [{ nameEn: "Fire Wing", textEn: "" }] },
  15: { nameEn: "Salandit",         abilities: [], attacks: [{ nameEn: "Fire Claws",           textEn: "" }] },
  16: { nameEn: "Salazzle ex",      abilities: [], attacks: [{ nameEn: "Nasty Plot",           textEn: "Search your deck for up to 2 cards and put them into your hand. Then, shuffle your deck." }, { nameEn: "Dire Nails", textEn: "Your opponent's Active Pokémon is now Burned and Poisoned. Switch this Pokémon with 1 of your Benched Pokémon." }] },
  17: { nameEn: "Turtonator",       abilities: [{ nameEn: "Shell Spikes",       textEn: "If this Pokémon is in the Active Spot and is damaged by an attack from your opponent's Pokémon (even if this Pokémon is Knocked Out), discard an Energy from the Attacking Pokémon." }], attacks: [{ nameEn: "Heat Breath", textEn: "Flip a coin. If heads, this attack does 80 more damage." }] },
  18: { nameEn: "Seel",             abilities: [], attacks: [{ nameEn: "Rain Splash",          textEn: "" }, { nameEn: "Wave Splash", textEn: "" }] },
  19: { nameEn: "Dewgong",          abilities: [{ nameEn: "Wash Out",           textEn: "As often as you like during your turn, you may use this Ability. Move a Water Energy from 1 of your Benched Pokémon to your Active Pokémon." }], attacks: [{ nameEn: "Wave Splash", textEn: "" }] },
  20: { nameEn: "Staryu",           abilities: [], attacks: [{ nameEn: "Water Gun",            textEn: "" }] },
  21: { nameEn: "Mega Starmie ex",  abilities: [], attacks: [{ nameEn: "Jetting Blow",         textEn: "This attack also does 50 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)" }, { nameEn: "Nebula Beam", textEn: "This attack's damage isn't affected by Weakness or Resistance, or by any effects on your opponent's Active Pokémon." }] },
  22: { nameEn: "Amaura",           abilities: [], attacks: [{ nameEn: "Icy Wind",             textEn: "Your opponent's Active Pokémon is now Asleep." }] },
  23: { nameEn: "Aurorus",          abilities: [{ nameEn: "Tundra Wall",        textEn: "All of your Pokémon that have any Water Energy attached take 50 less damage from attacks from your opponent's Pokémon (after applying Weakness and Resistance). The effect of Tundra Wall doesn't stack." }], attacks: [{ nameEn: "Freezing Chill", textEn: "During your opponent's next turn, the Defending Pokémon can't use attacks." }] },
  24: { nameEn: "Volcanion",        abilities: [], attacks: [{ nameEn: "Strength",             textEn: "" }, { nameEn: "Powerful Steam", textEn: "Flip a coin for each Water Energy attached to this Pokémon. This attack does 90 damage for each heads." }] },
  25: { nameEn: "Shinx",            abilities: [], attacks: [{ nameEn: "Double Scratch",        textEn: "Flip 2 coins. This attack does 10 damage for each heads." }] },
  26: { nameEn: "Luxio",            abilities: [{ nameEn: "Fighting Roar",      textEn: "If your opponent's Active Pokémon is a Pokémon ex, this Pokémon can evolve during your first turn or the turn you play it." }], attacks: [{ nameEn: "Static Shock", textEn: "" }] },
  27: { nameEn: "Luxray",           abilities: [], attacks: [{ nameEn: "Incessant Onslaught",  textEn: "This attack does 70 damage for each Prize card you have taken." }, { nameEn: "Strong Volt", textEn: "Discard 2 Energy from this Pokémon." }] },
  28: { nameEn: "Dedenne",          abilities: [], attacks: [{ nameEn: "Tail Generator",       textEn: "Choose Basic Lightning Energy cards from your discard pile up to the amount of Energy attached to all of your opponent's Pokémon and attach them to your Lightning Pokémon in any way you like." }, { nameEn: "Thunder Shock", textEn: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed." }] },
  29: { nameEn: "Clefairy",         abilities: [], attacks: [{ nameEn: "Follow Me",            textEn: "Switch in 1 of your opponent's Benched Pokémon to the Active Spot." }, { nameEn: "Flop", textEn: "" }] },
  30: { nameEn: "Mega Clefable ex", abilities: [{ nameEn: "Luminous Wing",      textEn: "Prevent all effects of your opponent's Pokémon's Abilities done to this Pokémon." }], attacks: [{ nameEn: "Shooting Moons", textEn: "You may discard up to 4 Energy cards from your hand, and this attack does 40 more damage for each card you discarded in this way." }] },
  31: { nameEn: "Mawile",           abilities: [], attacks: [{ nameEn: "Double Eater",         textEn: "Discard up to 2 Energy cards from your hand, and this attack does 60 damage for each card you discarded in this way." }] },
  32: { nameEn: "Espurr",           abilities: [], attacks: [{ nameEn: "Nap",                  textEn: "Heal 20 damage from this Pokémon." }, { nameEn: "Stampede", textEn: "" }] },
  33: { nameEn: "Meowstic",         abilities: [], attacks: [{ nameEn: "Perplex",              textEn: "Your opponent's Active Pokémon is now Confused." }, { nameEn: "Psychic", textEn: "This attack does 30 more damage for each Energy attached to your opponent's Active Pokémon." }] },
  34: { nameEn: "Spritzee",         abilities: [], attacks: [{ nameEn: "Sweet Scent",          textEn: "Heal 30 damage from 1 of your Pokémon." }, { nameEn: "Ram", textEn: "" }] },
  35: { nameEn: "Aromatisse",       abilities: [{ nameEn: "Scent Collection",   textEn: "Once during your turn, you may use this Ability. Search your deck for up to 2 Basic Psychic Energy cards, reveal them, and put them into your hand. Then, shuffle your deck." }], attacks: [{ nameEn: "Draining Kiss", textEn: "Heal 30 damage from this Pokémon." }] },
  36: { nameEn: "Nosepass",         abilities: [], attacks: [{ nameEn: "Rolling Rocks",        textEn: "" }] },
  37: { nameEn: "Probopass",        abilities: [], attacks: [{ nameEn: "Rolling Rocks",        textEn: "" }, { nameEn: "Obliterating Nose", textEn: "Discard 3 Energy from this Pokémon." }] },
  38: { nameEn: "Hippopotas",       abilities: [], attacks: [{ nameEn: "Sand Attack",          textEn: "During your opponent's next turn, if the Defending Pokémon tries to use an attack, your opponent flips a coin. If tails, that attack doesn't happen." }, { nameEn: "Bite", textEn: "" }] },
  39: { nameEn: "Hippowdon",        abilities: [], attacks: [{ nameEn: "Twister Spewing",      textEn: "If you played Tarragon from your hand during this turn, discard the top 3 cards of your opponent's deck." }, { nameEn: "Heavy Impact", textEn: "" }] },
  40: { nameEn: "Landorus",         abilities: [], attacks: [{ nameEn: "Rock Tumble",          textEn: "This attack's damage isn't affected by Resistance." }, { nameEn: "Screw Knuckle", textEn: "Put an Energy attached to this Pokémon into your hand." }] },
  41: { nameEn: "Binacle",          abilities: [], attacks: [{ nameEn: "Double Draw",          textEn: "Draw 2 cards." }, { nameEn: "Scratch", textEn: "" }] },
  42: { nameEn: "Barbaracle",       abilities: [{ nameEn: "Stone Arms",         textEn: "Once during your turn, you may use this Ability. Attach a Basic Fighting Energy card from your hand to 1 of your Fighting Pokémon." }], attacks: [{ nameEn: "Hammer In", textEn: "" }] },
  43: { nameEn: "Tyrunt",           abilities: [], attacks: [{ nameEn: "Get Angry",            textEn: "This attack does 20 damage for each damage counter on this Pokémon." }] },
  44: { nameEn: "Tyrantrum",        abilities: [{ nameEn: "Tyrannically Gutsy", textEn: "If this Pokémon has any Special Energy attached, it gets +150 HP." }], attacks: [{ nameEn: "Wreak Havoc", textEn: "Flip a coin until you get tails. For each heads, discard the top card of your opponent's deck." }] },
  45: { nameEn: "Hawlucha",         abilities: [], attacks: [{ nameEn: "Vengeful Kick",        textEn: "If your Benched Pokémon have any damage counters on them, this attack does 60 more damage." }] },
  46: { nameEn: "Mega Zygarde ex",  abilities: [], attacks: [{ nameEn: "Gaia Wave",            textEn: "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance)." }, { nameEn: "Nullifying Zero", textEn: "For each of your opponent's Pokémon, flip a coin. If heads, this attack does 150 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)" }] },
  47: { nameEn: "Gastly",           abilities: [], attacks: [{ nameEn: "Surprise Attack",      textEn: "Flip a coin. If tails, this attack does nothing." }] },
  48: { nameEn: "Haunter",          abilities: [], attacks: [{ nameEn: "Haunt",                textEn: "Place 3 damage counters on your opponent's Active Pokémon." }] },
  49: { nameEn: "Gengar",           abilities: [{ nameEn: "Infinice Shadow",     textEn: "If this Pokémon is Knocked Out by damage from an attack from your opponent's Pokémon, put it into your hand instead of the discard pile. (Discard all attached cards.)" }], attacks: [{ nameEn: "Mind Jack", textEn: "This attack does 30 more damage for each of your opponent's Benched Pokémon." }] },
  50: { nameEn: "Skorupi",          abilities: [], attacks: [{ nameEn: "Poison Jab",           textEn: "Your opponent's Active Pokémon is now Poisoned." }] },
  51: { nameEn: "Drapion",          abilities: [], attacks: [{ nameEn: "Wrack Down",           textEn: "" }, { nameEn: "Hazardous Tail", textEn: "This Pokémon also does 70 damage to itself. Your opponent's Active Pokémon is now Paralyzed and Poisoned." }] },
  52: { nameEn: "Yveltal ex",       abilities: [], attacks: [{ nameEn: "Soul Destroyer",       textEn: "Knock Out each of your opponent's Pokémon that has 50 HP or less remaining." }, { nameEn: "Dark Strike", textEn: "During your next turn, this Pokémon can't use Dark Strike." }] },
  53: { nameEn: "Chien-Pao",        abilities: [], attacks: [{ nameEn: "Strafe",               textEn: "You may switch this Pokémon with 1 of your Benched Pokémon." }, { nameEn: "Rising Blade", textEn: "If your opponent's Active Pokémon is a Pokémon ex, this attack does 80 more damage." }] },
  54: { nameEn: "Mega Skarmory ex", abilities: [], attacks: [{ nameEn: "Sonic Ripper",         textEn: "Shuffle all Energy attached to this Pokémon into your deck, and this attack does 220 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)" }] },
  55: { nameEn: "Honedge",          abilities: [], attacks: [{ nameEn: "Cut",                  textEn: "" }] },
  56: { nameEn: "Doublade",         abilities: [], attacks: [{ nameEn: "Weaponized Swords",    textEn: "Reveal any number of Honedge, Doublade, and Aegislash from your hand, and this attack does 60 damage for each card you revealed in this way." }] },
  57: { nameEn: "Aegislash",        abilities: [], attacks: [{ nameEn: "Slash",                textEn: "" }, { nameEn: "Metal Slash", textEn: "During your next turn, this Pokémon can't use attacks." }] },
  58: { nameEn: "Klefki",           abilities: [], attacks: [{ nameEn: "Memory Lock",          textEn: "Choose 1 of your opponent's Active Pokémon's attacks. During your opponent's next turn, that Pokémon can't use that attack." }] },
  59: { nameEn: "Rattata",          abilities: [], attacks: [{ nameEn: "Take Down",            textEn: "This Pokémon also does 10 damage to itself." }] },
  60: { nameEn: "Raticate",         abilities: [], attacks: [{ nameEn: "Scrape Off",           textEn: "Before doing damage, discard all Pokémon Tools from your opponent's Active Pokémon." }, { nameEn: "Retaliatory Incisors", textEn: "This attack does 40 damage for each damage counter on all of your Benched Rattata." }] },
  61: { nameEn: "Meowth ex",        abilities: [{ nameEn: "Last-Ditch Catch",   textEn: "Once during your turn, when you play this Pokémon from your hand onto your Bench, you may use this Ability. Search your deck for a Supporter card, reveal it, and put it into your hand. Then, shuffle your deck. You can't use more than 1 Ability that has 'Last-Ditch' in its name each turn." }], attacks: [{ nameEn: "Tuck Tail", textEn: "Put this Pokémon and all attached cards into your hand." }] },
  62: { nameEn: "Snorlax",          abilities: [], attacks: [{ nameEn: "Gormandizer",          textEn: "Flip a coin until you get tails. Search your deck for an amount of Basic Energy up to the number of heads and attach it to this Pokémon. Then, shuffle your deck." }, { nameEn: "Collapse", textEn: "This Pokémon is now Asleep." }] },
  63: { nameEn: "Bunnelby",         abilities: [], attacks: [{ nameEn: "Smash Kick",           textEn: "" }] },
  64: { nameEn: "Diggersby",        abilities: [], attacks: [{ nameEn: "Earthquake",           textEn: "This attack also does 30 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)" }, { nameEn: "Whap Down", textEn: "" }] },
  65: { nameEn: "Fletchling",       abilities: [], attacks: [{ nameEn: "Chirp",               textEn: "Search your deck for up to 2 Pokémon with Fighting Resistance, reveal them, and put them into your hand. Then, shuffle your deck." }, { nameEn: "Peck", textEn: "" }] },
  66: { nameEn: "Furfrou",          abilities: [], attacks: [{ nameEn: "Hand Trim",            textEn: "Discard random cards from your opponent's hand until they have 5 cards in their hand." }, { nameEn: "Headbutt", textEn: "" }] },
};

// Trainer/Energy: jpN → { enN, nameEn, textEn }
const trainerEnData = {
  67: { enN: 73, nameEn: "Energy Swatter",     textEn: "Your opponent reveals their hand, and you choose an Energy card you find there and put it on the bottom of their deck." },
  68: { enN: 68, nameEn: "Antique Jaw Fossil", textEn: "Play this card as if it were a 60-HP Basic ★ Pokémon. This card can't be affected by any Special Conditions and can't retreat. At any time during your turn, you may discard this card from play. Ability: Intimidating Jaw — As long as this Pokémon is in the Active Spot, attacks used by your opponent's Active Pokémon do 30 less damage (before applying Weakness and Resistance)." },
  69: { enN: 69, nameEn: "Antique Sail Fossil",textEn: "Play this card as if it were a 60-HP Basic ★ Pokémon. This card can't be affected by any Special Conditions and can't retreat. At any time during your turn, you may discard this card from play. Ability: Protective Sail — Whenever your opponent plays a Supporter card from their hand, prevent all effects of that card done to this Pokémon." },
  70: { enN: null, nameEn: null, textEn: null },
  71: { enN: 78, nameEn: "Lumiose Galette",    textEn: "Heal 20 damage and remove a Special Condition from your Active Pokémon." },
  72: { enN: 70, nameEn: "Core Memory",        textEn: "The Mega Zygarde ex this card is attached to can use the attack on this card. (You still need the necessary Energy to use this attack.) [F][F][F][F] Geobuster 350 Discard all Energy from this Pokémon." },
  73: { enN: null, nameEn: null, textEn: null },
  74: { enN: 79, nameEn: "Naveen",             textEn: "Draw cards until you have 5 cards in your hand. Before drawing cards, you may discard any number of cards from your hand. (If you can't draw any cards in this way, you can't use this card.)" },
  75: { enN: null, nameEn: null, textEn: null },
  76: { enN: 75, nameEn: "Jacinthe",           textEn: "Heal 150 damage from 1 of your Psychic Pokémon." },
  77: { enN: 77, nameEn: "Lumiose City",       textEn: "Once during each player's turn, that player may search their deck for a Basic Pokémon and put it onto their Bench. Then, that player shuffles their deck. If a player searches their deck in this way, their turn ends." },
  78: { enN: null, nameEn: null, textEn: null },
  79: { enN: null, nameEn: null, textEn: null },
  80: { enN: null, nameEn: null, textEn: null },
};

// ── Main ──────────────────────────────────────────────────────────────────────

const nzCards = readJson('data/cards/nz.json');
const newCards = [];

for (const card of nzCards) {
  const jpN = parseInt(card.id.replace('nz-', ''));
  const enN = jpToEn(jpN);

  const setIdEn   = enN !== null ? 'por' : null;
  const numberEn  = enN !== null ? formatNumberEn(enN) : null;
  const imageEn   = enN !== null ? `images/sets/nz/en/${enN}.jpg` : null;

  if (card.supertype === 'Pokémon') {
    const enData = pokemonEnData[jpN] || null;
    const nameEn = enData ? enData.nameEn : null;

    const abilities = card.abilities.map((abl, i) => {
      const enAbl = enData && enData.abilities[i] ? enData.abilities[i] : null;
      return {
        nameJa: abl.nameJa,
        nameEn: enAbl ? enAbl.nameEn : null,
        type: abl.type,
        textJa: abl.textJa,
        textEn: enAbl ? enAbl.textEn : null,
      };
    });

    const attacks = card.attacks.map((att, i) => {
      const enAtt = enData && enData.attacks[i] ? enData.attacks[i] : null;
      return {
        nameJa: att.nameJa,
        nameEn: enAtt ? enAtt.nameEn : null,
        cost: att.cost,
        convertedEnergyCost: att.convertedEnergyCost,
        damage: att.damage,
        textJa: att.textJa,
        textEn: enAtt ? enAtt.textEn : null,
      };
    });

    const isMegaEx = megaExJpNums.has(jpN);

    const newCard = {
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
      abilities,
      attacks,
      weaknesses: card.weaknesses,
      resistances: card.resistances,
      retreatCost: card.retreatCost,
      ...(isMegaEx ? { textJa: null, textEn: MEGA_EX_RULE } : {}),
      regulationMark: card.regulationMark,
      rarity: card.rarity,
      rarityJa: card.rarityJa,
      artist: card.artist,
      nationalPokedexNumber: card.nationalPokedexNumber,
      imageJa: card.imageJa,
      imageEn,
    };

    newCards.push(newCard);

  } else {
    // Trainer or Energy
    const enData = trainerEnData[jpN] || { enN: null, nameEn: null, textEn: null };

    const newCard = {
      id: card.id,
      setIdJa: card.setIdJa,
      setIdEn,
      numberJa: card.numberJa,
      numberEn,
      nameJa: card.nameJa,
      nameEn: enData.nameEn,
      supertype: card.supertype,
      subtypes: card.subtypes,
      textJa: card.textJa,
      textEn: enData.textEn,
      regulationMark: card.regulationMark,
      rarity: card.rarity,
      rarityJa: card.rarityJa,
      artist: card.artist,
      imageJa: card.imageJa,
      imageEn,
    };

    newCards.push(newCard);
  }
}

fs.writeFileSync('data/cards/nz.json', JSON.stringify(newCards, null, 2), 'utf8');
console.log(`Written: ${newCards.length} cards to data/cards/nz.json`);
