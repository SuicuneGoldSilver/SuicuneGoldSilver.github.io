'use strict';
const fs = require('fs');
const path = require('path');

const FILE = path.join(__dirname, '../data/cards/entp.json');
const raw = fs.readFileSync(FILE, 'utf8');
const BOM = raw.startsWith('﻿') ? '﻿' : '';
const cards = JSON.parse(raw.replace(/^﻿/, ''));

const EX_TEXT = "When your Pokémon ex is Knocked Out, your opponent takes 2 Prize cards.";
const MEGA_TEXT = "When your Mega Evolution Pokémon ex is Knocked Out, your opponent takes 3 Prize cards.";

function atk(nameEn, cost, cEC, damage, textEn) {
  return { nameJa: null, nameEn, cost, convertedEnergyCost: cEC, damage, textJa: null, textEn };
}
function abl(nameEn, textEn) {
  return { nameJa: null, nameEn, textJa: null, textEn };
}
function weak(type) { return { type, value: "×2" }; }
function res(type)  { return { type, value: "-30" }; }

// Card-specific combat patches (from rendered se7 images, sessions notes).
// Covers entp-111 to entp-152 plus shared cards entp-7/47/48 (= entp-139/137/138).
const patches = {

  // ── shared: N's Zoroark ex (entp-7 se8_40 = entp-139 se7_45) ──
  "entp-7": {
    abilities: [abl("Scheming", "You must discard a card from your hand in order to use this Ability. Once during your turn, you may draw 2 cards.")],
    attacks: [atk("Night Joker", ["Darkness","Colorless"], 2, "", "Choose 1 of your Benched N's Pokémon's attacks and use it as this attack.")],
    weaknesses: [weak("Fighting")], resistances: [], retreatCost: ["Colorless","Colorless"],
  },
  // ── shared: N's Darmanitan (entp-47 se8_38 = entp-137 se7_43) ──
  "entp-47": {
    abilities: [],
    attacks: [
      atk("Back Draft", ["Fire","Colorless"], 2, "30+", "This attack does 30 damage for each Basic Energy card in your opponent's discard pile."),
      atk("Flamebody Cannon", ["Fire","Fire","Colorless"], 3, "90", "Discard all Energy from this Pokémon, and this attack also does 90 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"),
    ],
    weaknesses: [weak("Water")], resistances: [], retreatCost: ["Colorless","Colorless"],
  },
  // ── shared: N's Reshiram (entp-48 se8_39 = entp-138 se7_44) ──
  "entp-48": {
    abilities: [],
    attacks: [
      atk("Powerful Rage", ["Fire"], 1, "20+", "This attack does 20 damage for each damage counter on this Pokémon."),
      atk("Virtuous Flame", ["Fire","Fire","Colorless"], 3, "170", ""),
    ],
    weaknesses: [weak("Water")], resistances: [], retreatCost: ["Colorless","Colorless"],
  },

  // ── se7_15 ── Eevee ex
  "entp-111": {
    abilities: [abl("Rainbow DNA", "As long as this Pokémon is on your Bench, prevent all damage done to it by attacks. This Pokémon can evolve into any Pokémon ex that evolves from Eevee if you play it from your hand onto this Pokémon during your first turn or the turn you play it.")],
    attacks: [atk("Coruscating Quartz", ["Colorless","Colorless","Colorless"], 3, "200", "")],
    weaknesses: [weak("Fighting")], resistances: [], retreatCost: ["Colorless"],
  },
  // ── se7_16 ── Espeon ex
  "entp-112": {
    abilities: [abl("Eevee Evolution", "As long as this Pokémon is on your Bench, prevent all damage done to it by attacks.")],
    attacks: [
      atk("Psych Out", ["Psychic","Colorless","Colorless"], 3, "160", "Discard a random card from your opponent's hand."),
      atk("Amazez", ["Psychic","Psychic","Psychic"], 3, "", "Devolve each of your opponent's evolved Pokémon by shuffling the highest Stage Evolution card on it into your opponent's deck."),
    ],
    weaknesses: [weak("Darkness")], resistances: [res("Fighting")], retreatCost: ["Colorless"],
  },
  // ── se7_17 ── Fan Rotom
  "entp-113": {
    abilities: [abl("Fan Call", "Once during your first turn, you may search your deck for up to 3 Water Pokémon with 100 HP or less, reveal them, and put them into your hand. Then, shuffle your deck. You can't use more than 1 Fan Call Ability during your turn.")],
    attacks: [atk("Assault Landing", ["Colorless"], 1, "70", "If there is no Stadium in play, this attack does nothing.")],
    weaknesses: [weak("Fighting")], resistances: [res("Metal")], retreatCost: ["Colorless"],
  },
  // ── se7_19 ── Flareon ex
  "entp-114": {
    abilities: [abl("Eevee Evolution", "As long as this Pokémon is on your Bench, prevent all damage done to it by attacks.")],
    attacks: [
      atk("Burning Charge", ["Fire","Colorless"], 2, "130", "Search your deck for up to 2 Basic Fire Energy cards and attach them to 1 of your Pokémon. Then, shuffle your deck."),
      atk("Carnelian", ["Fire","Fire","Colorless"], 3, "280", "During your next turn, this Pokémon can't attack."),
    ],
    weaknesses: [weak("Water")], resistances: [], retreatCost: ["Colorless"],
  },
  // ── se7_20 ── Froslass
  "entp-115": {
    abilities: [abl("Freezing Shroud", "During Pokémon Checkup, put 1 damage counter on each Pokémon that has an Ability (both yours and your opponent's), except any Froslass.")],
    attacks: [atk("Frost Smash", ["Water","Colorless"], 2, "60", "")],
    weaknesses: [weak("Metal")], resistances: [], retreatCost: ["Colorless"],
  },
  // ── se7_21 ── Galvantula
  "entp-116": {
    abilities: [abl("Compound Eyes", "Attacks used by this Pokémon do 50 more damage to your opponent's Active Pokémon that has an Ability (before applying Weakness and Resistance).")],
    attacks: [atk("Shocking Web", ["Lightning","Colorless"], 2, "50+", "If this Pokémon has any Lightning Energy attached, this attack does 80 more damage.")],
    weaknesses: [weak("Fighting")], resistances: [res("Metal")], retreatCost: ["Colorless"],
  },
  // ── se7_22 ── Gastrodon
  "entp-117": {
    abilities: [abl("Sticky Bind", "As long as this Pokémon is on your Bench, Benched Stage 2 Pokémon (both yours and your opponent's) have no Abilities.")],
    attacks: [atk("Mud Shot", ["Water","Colorless"], 2, "40", "")],
    weaknesses: [weak("Lightning")], resistances: [], retreatCost: ["Colorless","Colorless"],
  },
  // ── se7_23 ── Glaceon ex
  "entp-118": {
    abilities: [abl("Eevee Evolution", "As long as this Pokémon is on your Bench, prevent all damage done to it by attacks.")],
    attacks: [
      atk("Frost Bullet", ["Water","Colorless"], 2, "110", "This attack also does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"),
      atk("Euclase", ["Water","Water","Colorless"], 3, "", "Knock Out 1 of your opponent's Pokémon that has exactly 6 damage counters on it."),
    ],
    weaknesses: [weak("Lightning")], resistances: [], retreatCost: ["Colorless"],
  },
  // ── se7_24 ── Greninja ex
  "entp-119": {
    abilities: [abl("Ninja Shroud", "As long as this Pokémon is on your Bench, prevent all damage done to it by attacks.")],
    attacks: [
      atk("Shinobi Blade", ["Water"], 1, "170", "You may search your deck for a card and put it into your hand. Then, shuffle your deck."),
      atk("Mirage Barrage", ["Water","Water","Colorless"], 3, "", "Discard 2 Energy from this Pokémon. This attack does 120 damage to 2 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"),
    ],
    weaknesses: [weak("Lightning")], resistances: [], retreatCost: ["Colorless"],
  },
  // ── se7_25 ── Ho-Oh
  "entp-120": {
    abilities: [],
    attacks: [
      atk("Flap", ["Fire","Colorless"], 2, "50", ""),
      atk("Shining Blaze", ["Fire","Fire","Colorless"], 3, "100+", "If you have any Tera Pokémon on your Bench, this attack does 100 more damage."),
    ],
    weaknesses: [weak("Water")], resistances: [], retreatCost: ["Colorless","Colorless"],
  },
  // ── se7_26 ── Hop's Dubwool
  "entp-121": {
    abilities: [abl("Defiant Horn", "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may switch in 1 of your opponent's Benched Pokémon to the Active Spot.")],
    attacks: [atk("Headbutt", ["Colorless","Colorless","Colorless"], 3, "80", "")],
    weaknesses: [weak("Fighting")], resistances: [], retreatCost: ["Colorless","Colorless"],
  },
  // ── se7_27 ── Hop's Snorlax
  "entp-122": {
    abilities: [abl("Extra Helpings", "Attacks used by your Hop's Pokémon do 30 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance). The effect of Extra Helpings doesn't stack.")],
    attacks: [atk("Dynamic Press", ["Colorless","Colorless","Colorless"], 3, "140", "This Pokémon also does 80 damage to itself.")],
    weaknesses: [weak("Fighting")], resistances: [], retreatCost: ["Colorless","Colorless","Colorless","Colorless"],
  },
  // ── se7_28 ── Hop's Zacian ex
  "entp-123": {
    abilities: [],
    attacks: [
      atk("Insta-Strike", ["Metal"], 1, "30", "This attack also does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"),
      atk("Brave Slash", ["Metal","Metal","Colorless"], 3, "240", "During your next turn, this Pokémon can't attack."),
    ],
    weaknesses: [weak("Fire")], resistances: [res("Grass")], retreatCost: ["Colorless"],
  },
  // ── se7_29 ── Iono's Bellibolt ex
  "entp-124": {
    abilities: [abl("Electric Streamer", "As often as you like during your turn, you may attach a Basic Lightning Energy card from your hand to 1 of your Iono's Pokémon.")],
    attacks: [atk("Thunderous Bolt", ["Lightning","Lightning","Colorless"], 3, "230", "During your next turn, this Pokémon can't attack.")],
    weaknesses: [weak("Fighting")], resistances: [], retreatCost: ["Colorless","Colorless"],
  },
  // ── se7_30 ── Iono's Kilowattrel
  "entp-125": {
    abilities: [abl("Flashing Draw", "You must discard a Basic Lightning Energy from this Pokémon in order to use this Ability. Once during your turn, you may draw cards until you have 6 cards in your hand.")],
    attacks: [atk("Mach Bolt", ["Lightning","Colorless"], 2, "70", "")],
    weaknesses: [weak("Fighting")], resistances: [res("Metal")], retreatCost: ["Colorless"],
  },
  // ── se7_31 ── Iono's Voltorb
  "entp-126": {
    abilities: [],
    attacks: [atk("Voltaic Chain", ["Lightning","Colorless"], 2, "20+", "This attack does 20 more damage for each Lightning Energy attached to all of your Iono's Pokémon.")],
    weaknesses: [weak("Fighting")], resistances: [], retreatCost: ["Colorless"],
  },
  // ── se7_32 ── Iron Thorns ex
  "entp-127": {
    abilities: [abl("Initialization", "As long as this Pokémon is in the Active Spot, Pokémon with a Rule Box in play (both yours and your opponent's) have no Abilities.")],
    attacks: [atk("Volt Cyclone", ["Lightning","Lightning","Colorless"], 3, "140", "Move 1 Basic Energy from your opponent's Active Pokémon to 1 of their Benched Pokémon.")],
    weaknesses: [weak("Fighting")], resistances: [], retreatCost: ["Colorless","Colorless","Colorless"],
  },
  // ── se7_33 ── Jolteon ex
  "entp-128": {
    abilities: [abl("Eevee Evolution", "As long as this Pokémon is on your Bench, prevent all damage done to it by attacks.")],
    attacks: [
      atk("Flashing Spear", ["Lightning","Colorless"], 2, "60+", "You may discard up to 2 Basic Lightning Energy from your Benched Pokémon. This attack does 90 more damage for each card you discarded in this way."),
      atk("Dravite", ["Lightning","Lightning","Colorless"], 3, "280", "During your next turn, this Pokémon can't attack."),
    ],
    weaknesses: [weak("Fighting")], resistances: [], retreatCost: ["Colorless"],
  },
  // ── se7_34 ── Joltik
  "entp-129": {
    abilities: [],
    attacks: [atk("Jolting Charge", ["Lightning"], 1, "", "Search your deck for up to 2 Basic Lightning Energy cards and up to 2 Basic Energy cards of any type and attach them to your Pokémon in any way you like. Then, shuffle your deck.")],
    weaknesses: [weak("Fighting")], resistances: [], retreatCost: [],
  },
  // ── se7_35 ── Latias ex
  "entp-130": {
    abilities: [abl("Skyliner", "Your Basic Pokémon in play have no Retreat Cost.")],
    attacks: [atk("Eon Blade", ["Psychic","Psychic","Colorless"], 3, "200", "During your next turn, this Pokémon can't attack.")],
    weaknesses: [weak("Metal")], resistances: [], retreatCost: ["Colorless"],
  },
  // ── se7_37 ── Lillie's Ribombee
  "entp-131": {
    abilities: [abl("Inviting Wink", "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may have your opponent reveal their hand and you put any number of Basic Pokémon you find there onto their Bench.")],
    attacks: [atk("Magical Shot", ["Psychic"], 1, "50", "")],
    weaknesses: [weak("Metal")], resistances: [], retreatCost: [],
  },
  // ── se7_38 ── Magneton
  "entp-132": {
    abilities: [abl("Overvolt Discharge", "Once during your turn, you may attach up to 3 Basic Energy cards from your discard pile to your Lightning Pokémon in any way you like. If you use this Ability, this Pokémon is Knocked Out.")],
    attacks: [atk("Electric Ball", ["Lightning","Colorless"], 2, "40", "")],
    weaknesses: [weak("Fighting")], resistances: [res("Metal")], retreatCost: ["Colorless","Colorless"],
  },
  // ── se7_39 ── Mamoswine ex
  "entp-133": {
    abilities: [abl("Mammoth Hauler", "Once during your turn, you may search your deck for a Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.")],
    attacks: [atk("Rumbling March", ["Water","Water","Colorless"], 3, "180+", "This attack does 40 more damage for each Stage 2 Pokémon on your Bench.")],
    weaknesses: [weak("Lightning")], resistances: [], retreatCost: ["Colorless","Colorless","Colorless","Colorless"],
  },
  // ── se7_40 ── Metang
  "entp-134": {
    abilities: [abl("Metal Maker", "Once during your turn, you may look at the top 4 cards of your deck and attach any number of Basic Metal Energy cards you find there to your Pokémon in any way you like. Shuffle the other cards and put them on the bottom of your deck.")],
    attacks: [atk("Beam", ["Metal","Colorless"], 2, "60", "")],
    weaknesses: [weak("Fire")], resistances: [res("Grass")], retreatCost: ["Colorless","Colorless"],
  },
  // ── se7_41 ── Munkidori
  "entp-135": {
    abilities: [abl("Adrena-Brain", "Once during your turn, if this Pokémon has any Psychic Energy attached, you may move up to 3 damage counters from 1 of your Pokémon to 1 of your opponent's Pokémon.")],
    attacks: [atk("Mind Bend", ["Psychic","Colorless"], 2, "60", "Your opponent's Active Pokémon is now Confused.")],
    weaknesses: [weak("Darkness")], resistances: [], retreatCost: ["Colorless"],
  },
  // ── se7_42 ── Noctowl
  "entp-136": {
    abilities: [abl("Jewel Seeker", "Once during your turn, when you play this Pokémon from your hand to evolve 1 of your Pokémon, if you have any Tera Pokémon in play, you may search your deck for up to 2 Trainer cards, reveal them, and put them into your hand. Then, shuffle your deck.")],
    attacks: [atk("Speed Wing", ["Colorless","Colorless"], 2, "60", "")],
    weaknesses: [weak("Fighting")], resistances: [], retreatCost: ["Colorless"],
  },
  // ── se7_43 ── N's Darmanitan (same data as entp-47)
  "entp-137": {
    abilities: [],
    attacks: [
      atk("Back Draft", ["Fire","Colorless"], 2, "30+", "This attack does 30 damage for each Basic Energy card in your opponent's discard pile."),
      atk("Flamebody Cannon", ["Fire","Fire","Colorless"], 3, "90", "Discard all Energy from this Pokémon, and this attack also does 90 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"),
    ],
    weaknesses: [weak("Water")], resistances: [], retreatCost: ["Colorless","Colorless"],
  },
  // ── se7_44 ── N's Reshiram (same data as entp-48)
  "entp-138": {
    abilities: [],
    attacks: [
      atk("Powerful Rage", ["Fire"], 1, "20+", "This attack does 20 damage for each damage counter on this Pokémon."),
      atk("Virtuous Flame", ["Fire","Fire","Colorless"], 3, "170", ""),
    ],
    weaknesses: [weak("Water")], resistances: [], retreatCost: ["Colorless","Colorless"],
  },
  // ── se7_45 ── N's Zoroark ex (same data as entp-7)
  "entp-139": {
    abilities: [abl("Scheming", "You must discard a card from your hand in order to use this Ability. Once during your turn, you may draw 2 cards.")],
    attacks: [atk("Night Joker", ["Darkness","Colorless"], 2, "", "Choose 1 of your Benched N's Pokémon's attacks and use it as this attack.")],
    weaknesses: [weak("Fighting")], resistances: [], retreatCost: ["Colorless","Colorless"],
  },
  // ── se7_46 ── Pikachu ex
  "entp-140": {
    abilities: [abl("Resolute Heart", "If this Pokémon has full HP and would be Knocked Out by damage from an attack, it is not Knocked Out, and its remaining HP becomes 10.")],
    attacks: [atk("Topaz Bolt", ["Lightning","Lightning","Colorless"], 3, "300", "Discard 3 Energy from this Pokémon.")],
    weaknesses: [weak("Fighting")], resistances: [], retreatCost: ["Colorless"],
  },
  // ── se7_47 ── Rabsca
  "entp-141": {
    abilities: [abl("Spherical Shield", "Prevent all damage from and effects of attacks from your opponent's Pokémon done to your Benched Pokémon.")],
    attacks: [atk("Psychic", ["Psychic"], 1, "10+", "This attack does 30 more damage for each Energy attached to your opponent's Active Pokémon.")],
    weaknesses: [weak("Darkness")], resistances: [], retreatCost: ["Colorless"],
  },
  // ── se7_48 ── Regigigas
  "entp-142": {
    abilities: [],
    attacks: [atk("Jewel Breaker", ["Colorless","Colorless","Colorless"], 3, "100+", "If your opponent's Active Pokémon is a Tera Pokémon, this attack does 230 more damage.")],
    weaknesses: [weak("Fighting")], resistances: [], retreatCost: ["Colorless","Colorless","Colorless","Colorless"],
  },
  // ── se7_49 ── Sylveon ex
  "entp-143": {
    abilities: [abl("Eevee Evolution", "As long as this Pokémon is on your Bench, prevent all damage done to it by attacks.")],
    attacks: [
      atk("Magical Charm", ["Psychic","Colorless"], 2, "160", "During your opponent's next turn, attacks used by the Defending Pokémon do 100 less damage (before applying Weakness and Resistance)."),
      atk("Angelite", ["Psychic","Psychic","Colorless"], 3, "", "Choose 2 of your opponent's Benched Pokémon. Shuffle those Pokémon and all attached cards into your opponent's deck. If 1 of your Pokémon used Angelite during your last turn, this attack can't be used."),
    ],
    weaknesses: [weak("Metal")], resistances: [], retreatCost: ["Colorless"],
  },
  // ── se7_50 ── Tapu Koko
  "entp-144": {
    abilities: [],
    attacks: [
      atk("Summon Lightning", ["Lightning"], 1, "", "Search your deck for up to 2 Lightning Pokémon, reveal them, and put them into your hand. Then, shuffle your deck."),
      atk("Prize Count", ["Lightning","Colorless"], 2, "90+", "If you have more Prize cards remaining than your opponent, this attack does 90 more damage."),
    ],
    weaknesses: [weak("Fighting")], resistances: [], retreatCost: ["Colorless"],
  },
  // ── se7_51 ── Tatsugiri
  "entp-145": {
    abilities: [abl("Attract Customers", "Once during your turn, if this Pokémon is in the Active Spot, you may look at the top 6 cards of your deck, reveal a Supporter card you find there, and put it into your hand. Shuffle the other cards back into your deck.")],
    attacks: [atk("Surf", ["Water","Colorless"], 2, "50", "")],
    weaknesses: [weak("Lightning")], resistances: [], retreatCost: ["Colorless"],
  },
  // ── se7_52 ── Teal Mask Ogerpon ex
  "entp-146": {
    abilities: [abl("Teal Dance", "Once during your turn, you may attach a Basic Grass Energy card from your hand to this Pokémon. If you attached Energy in this way, draw a card.")],
    attacks: [atk("Myriad Leaf Shower", ["Grass","Grass","Colorless"], 3, "30+", "This attack does 30 more damage for each Energy attached to both Active Pokémon.")],
    weaknesses: [weak("Fire")], resistances: [], retreatCost: ["Colorless"],
  },
  // ── se7_53 ── Terapagos
  "entp-147": {
    abilities: [],
    attacks: [
      atk("Prism Charge", ["Colorless"], 1, "", "Search your deck for up to 3 Basic Energy cards of different types and attach them to your Tera Pokémon in any way you like. Then, shuffle your deck."),
      atk("Hard Tackle", ["Colorless","Colorless","Colorless"], 3, "100", ""),
    ],
    weaknesses: [weak("Fighting")], resistances: [], retreatCost: ["Colorless","Colorless"],
  },
  // ── se7_54 ── Terapagos ex
  "entp-148": {
    abilities: [abl("Crystallization", "As long as this Pokémon is on your Bench, prevent all damage done to it by attacks.")],
    attacks: [
      atk("Unified Beatdown", ["Colorless","Colorless"], 2, "30+", "If you go second, you can't use this attack during your first turn. This attack does 30 more damage for each of your Benched Pokémon."),
      atk("Crown Opal", ["Colorless","Colorless","Colorless"], 3, "180", "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Basic non-ex Pokémon."),
    ],
    weaknesses: [weak("Fighting")], resistances: [], retreatCost: ["Colorless","Colorless"],
  },
  // ── se7_55 ── Tyranitar
  "entp-149": {
    abilities: [abl("Oppressive Rock", "As long as this Pokémon is in the Active Spot, your opponent can't play any Item cards from their hand.")],
    attacks: [atk("Cracking Stomp", ["Darkness","Darkness","Colorless"], 3, "150", "Discard the top 2 cards of your opponent's deck.")],
    weaknesses: [weak("Fighting")], resistances: [], retreatCost: ["Colorless","Colorless","Colorless","Colorless"],
  },
  // ── se7_56 ── Umbreon ex
  "entp-150": {
    abilities: [abl("Eevee Evolution", "As long as this Pokémon is on your Bench, prevent all damage done to it by attacks.")],
    attacks: [
      atk("Moon Mirage", ["Darkness","Colorless","Colorless"], 3, "160", "Your opponent's Active Pokémon is now Confused."),
      atk("Onyx", ["Darkness","Darkness","Darkness","Colorless"], 4, "", "Discard all Energy from this Pokémon, and take a Prize card."),
    ],
    weaknesses: [weak("Fighting")], resistances: [], retreatCost: ["Colorless"],
  },
  // ── se7_57 ── Vaporeon ex
  "entp-151": {
    abilities: [abl("Eevee Evolution", "As long as this Pokémon is on your Bench, prevent all damage done to it by attacks.")],
    attacks: [
      atk("Severe Squall", ["Water","Colorless"], 2, "", "This attack does 50 damage to each of your opponent's Pokémon. (This attack's damage isn't affected by Weakness or Resistance.)"),
      atk("Aquamarine", ["Water","Water","Colorless"], 3, "280", "During your next turn, this Pokémon can't attack."),
    ],
    weaknesses: [weak("Lightning")], resistances: [], retreatCost: ["Colorless"],
  },
  // ── se7_58 ── Leafeon ex
  "entp-152": {
    abilities: [abl("Eevee Evolution", "As long as this Pokémon is on your Bench, prevent all damage done to it by attacks.")],
    attacks: [
      atk("Verdant Storm", ["Grass","Colorless"], 2, "60+", "This attack does 60 more damage for each Energy attached to all of your opponent's Pokémon."),
      atk("Moss Agate", ["Grass","Grass","Colorless"], 3, "230", "Heal 100 damage from each of your Benched Pokémon."),
    ],
    weaknesses: [weak("Fire")], resistances: [], retreatCost: ["Colorless"],
  },
};

// Subtype fixes (wrong or missing tags in source data)
const subtypeFixes = {
  "entp-69":  ["Item", "ACE SPEC"],           // Max Rod – missing ACE SPEC
  "entp-77":  ["Pokémon Tool", "ACE SPEC"],   // Sparkling Crystal (se8) – missing ACE SPEC
  "entp-162": ["Pokémon Tool"],               // Counter Gain – "Tool" → "Pokémon Tool"
  "entp-168": ["Pokémon Tool"],               // Hop's Choice Band – "Tool" → "Pokémon Tool"
  "entp-172": ["Pokémon Tool"],               // Lillie's Pearl (se7) – "Tool" → "Pokémon Tool"
  "entp-178": ["Pokémon Tool"],               // Powerglass – "Tool" → "Pokémon Tool"
  "entp-181": ["Pokémon Tool", "ACE SPEC"],   // Sparkling Crystal (se7) – "Tool" → "Pokémon Tool" + ACE SPEC
};

let exFixed = 0, subtypeFixed = 0, combatPatched = 0;

for (const card of cards) {
  // 1. textEn rule box for ex / Mega ex Pokémon
  if (
    card.supertype === "Pokémon" &&
    Array.isArray(card.subtypes) &&
    card.subtypes.includes("ex") &&
    !card.textEn
  ) {
    card.textEn = card.nameEn && card.nameEn.startsWith("Mega ")
      ? MEGA_TEXT
      : EX_TEXT;
    exFixed++;
  }

  // 2. Subtype corrections
  if (subtypeFixes[card.id]) {
    card.subtypes = subtypeFixes[card.id];
    subtypeFixed++;
  }

  // 3. Combat data patches
  const patch = patches[card.id];
  if (patch) {
    if (patch.abilities  !== undefined) card.abilities  = patch.abilities;
    if (patch.attacks    !== undefined) card.attacks    = patch.attacks;
    if (patch.weaknesses !== undefined) card.weaknesses = patch.weaknesses;
    if (patch.resistances!== undefined) card.resistances= patch.resistances;
    if (patch.retreatCost!== undefined) card.retreatCost= patch.retreatCost;
    combatPatched++;
  }
}

const out = BOM + JSON.stringify(cards, null, 2);
fs.writeFileSync(FILE, out, 'utf8');
console.log(`Done: ${exFixed} ex textEn set, ${subtypeFixed} subtypes fixed, ${combatPatched} cards combat-patched.`);
