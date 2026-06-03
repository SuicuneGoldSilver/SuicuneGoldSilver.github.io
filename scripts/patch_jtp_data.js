'use strict';
const fs = require('fs');
const path = require('path');

const FILE = path.join(__dirname, '../data/cards/jtp.json');
const raw = fs.readFileSync(FILE, 'utf8');
const BOM = raw.startsWith('﻿') ? '﻿' : '';
const cards = JSON.parse(raw.replace(/^﻿/, ''));

function atk(nameEn, cost, cEC, damage, textEn) {
  return { nameJa: null, nameEn, cost, convertedEnergyCost: cEC, damage, textJa: null, textEn };
}
function abl(nameEn, textEn) { return { nameJa: null, nameEn, textJa: null, textEn }; }
function weak(type) { return { type, value: "×2" }; }
function res(type)  { return { type, value: "-30" }; }

// ── Pokémon combat patches ─────────────────────────────────────────────────

const pokemonPatches = {
  "jtp-1": {
    attacks: [
      atk("Water Gathering", ["Water"], 1, "", "Search your discard pile for up to 3 Basic [W] Energy cards, reveal them, and shuffle them into your deck."),
      atk("Headbutt", ["Water"], 1, "10", null),
    ],
    weaknesses: [weak("Lightning")], resistances: [], retreatCost: ["Colorless"],
  },
  "jtp-2": {
    attacks: [
      atk("Roll", ["Water"], 1, "30", null),
      atk("Soaking Head", ["Water","Colorless","Colorless"], 3, "80×", "Discard the top 3 cards of your deck. This attack does 80 damage for each Energy card you discarded."),
    ],
    weaknesses: [weak("Lightning")], resistances: [], retreatCost: ["Colorless","Colorless","Colorless"],
  },
  "jtp-3": {
    attacks: [
      atk("Just Beak", ["Colorless","Colorless"], 2, "30+", "If this Pokémon and your opponent's Active Pokémon have the same amount of Energy attached to them, this attack does 100 more damage."),
      atk("Brave Bird", ["Colorless","Colorless","Colorless","Colorless"], 4, "200", "This Pokémon also does 30 damage to itself."),
    ],
    weaknesses: [weak("Lightning")], resistances: [res("Fighting")], retreatCost: ["Colorless"],
  },
  "jtp-10": {
    attacks: [
      atk("Accel Peak", ["Colorless"], 1, "40", "Search your deck for up to 2 Basic Energy cards and attach them to your Future Pokémon in any way you like. Then, shuffle your deck."),
      atk("Sparking Attack", ["Lightning","Lightning","Psychic"], 3, "160", null),
    ],
    weaknesses: [], resistances: [], retreatCost: ["Colorless","Colorless","Colorless"],
  },
  "jtp-11": {
    attacks: [
      atk("Primal Rumble", ["Fighting","Colorless"], 2, "30×", "This attack does 30 damage for each Ancient Pokémon you have in play."),
      atk("Rend", ["Fire","Fighting","Colorless"], 3, "130", "This attack's damage isn't affected by any effects on your opponent's Active Pokémon."),
    ],
    weaknesses: [], resistances: [], retreatCost: ["Colorless","Colorless","Colorless"],
  },
  "jtp-14": {
    attacks: [
      atk("Return Charge", ["Lightning"], 1, "", "Switch this Pokémon with 1 of your Benched Pokémon. Then, choose up to 2 Basic [L] Energy cards from your hand and attach them to this Pokémon."),
      atk("Thunderlance", ["Colorless","Colorless"], 2, "40+", "This attack does 40 more damage for each [L] Energy attached to this Pokémon."),
    ],
    weaknesses: [weak("Fighting")], resistances: [], retreatCost: ["Colorless"],
  },
  "jtp-15": {
    attacks: [
      atk("Wild Kick", ["Darkness"], 1, "30", "Flip a coin. If tails, this attack does nothing."),
    ],
    weaknesses: [weak("Psychic")], resistances: [], retreatCost: ["Colorless"],
  },
  "jtp-16": {
    attacks: [
      atk("Pilfer", ["Colorless"], 1, "", "Search your deck for up to a number of cards equal to the number of your Benched Pokémon, choose them, and put them into your hand. Then, shuffle your deck."),
      atk("High Jump Kick", ["Darkness","Colorless","Colorless"], 3, "100", null),
    ],
    weaknesses: [weak("Psychic")], resistances: [], retreatCost: ["Colorless"],
  },
  "jtp-18": {
    attacks: [
      atk("Silent Wing", ["Grass","Colorless"], 2, "20", "Look at your opponent's hand."),
    ],
    weaknesses: [weak("Lightning")], resistances: [res("Fighting")], retreatCost: ["Colorless"],
  },
  "jtp-19": {
    attacks: [
      atk("Gyro Sonic", ["Grass","Grass","Colorless"], 3, "110", "Switch this Pokémon with 1 of your Benched Pokémon."),
    ],
    weaknesses: [weak("Lightning")], resistances: [res("Fighting")], retreatCost: ["Colorless"],
  },
  "jtp-20": {
    attacks: [
      atk("Fin Cutter", ["Water"], 1, "30", null),
      atk("Purge Strike", ["Water","Water","Colorless"], 3, "120+", "You may discard your entire hand. If you do, this attack does 120 more damage."),
    ],
    weaknesses: [weak("Lightning")], resistances: [], retreatCost: ["Colorless"],
  },
  "jtp-23": {
    abilities: [abl("Gem Search", "During your turn, when you play this card from your hand to evolve 1 of your Pokémon, if you have any Tera Pokémon in play, you may use this Ability. Search your deck for up to 2 Trainer cards, reveal them, and put them into your hand. Then, shuffle your deck.")],
    attacks: [
      atk("Speed Wing", ["Colorless","Colorless"], 2, "60", null),
    ],
    weaknesses: [weak("Lightning")], resistances: [res("Fighting")], retreatCost: ["Colorless"],
  },
  "jtp-25": {
    abilities: [abl("Tera Shield", "As long as this Pokémon is on your Bench, it takes no damage from attacks.")],
    attacks: [
      atk("Tropical Fever", ["Grass","Water"], 2, "150", "Choose any number of Basic Energy cards from your hand and attach them to your Pokémon in any way you like."),
      atk("Buzz Buzz Sphere", ["Grass","Water","Fighting"], 3, "", "Flip a coin. If heads, Knock Out your opponent's Active Basic Pokémon. If tails, choose 1 of your opponent's Benched Basic Pokémon and Knock it Out."),
    ],
    weaknesses: [], resistances: [], retreatCost: ["Colorless","Colorless","Colorless"],
  },
  "jtp-26": {
    attacks: [
      atk("Upside-Down Draw", ["Colorless"], 1, "", "Draw 3 cards from the bottom of your deck."),
      atk("Psychokinesis", ["Grass","Colorless","Colorless"], 3, "20+", "This attack does 90 more damage for each Energy attached to your opponent's Active Pokémon."),
    ],
    weaknesses: [weak("Fire")], resistances: [], retreatCost: ["Colorless"],
  },
  "jtp-27": {
    attacks: [
      atk("Bulldoze", ["Fighting"], 1, "10", "Your opponent switches their Active Pokémon with 1 of their Benched Pokémon. (Your opponent chooses the Pokémon to switch in.)"),
    ],
    weaknesses: [weak("Grass")], resistances: [], retreatCost: ["Colorless","Colorless","Colorless"],
  },
  "jtp-28": {
    attacks: [
      atk("Stomp", ["Fighting","Fighting"], 2, "60", null),
      atk("Sand Storm", ["Fighting","Fighting","Colorless"], 3, "150", "This attack also does 40 damage to each of both players' Benched Pokémon that have damage counters on them. (Don't apply Weakness and Resistance for Benched Pokémon.)"),
    ],
    weaknesses: [weak("Grass")], resistances: [], retreatCost: ["Colorless","Colorless","Colorless","Colorless"],
  },
  "jtp-31": {
    attacks: [
      atk("Colorful Catch", ["Colorless"], 1, "", "Search your deck for up to 3 Basic Energy cards of different types, reveal them, and put them into your hand. Then, shuffle your deck."),
      atk("Headbutt", ["Colorless","Colorless"], 2, "20", null),
    ],
    weaknesses: [weak("Fighting")], resistances: [], retreatCost: ["Colorless"],
  },
  "jtp-32": {
    attacks: [
      atk("Scrappy Spark", ["Lightning","Lightning","Colorless"], 3, "30+", "Flip a coin until you get tails. This attack does 30 more damage for each heads."),
    ],
    weaknesses: [weak("Fighting")], resistances: [], retreatCost: ["Colorless"],
  },
  "jtp-33": {
    attacks: [
      atk("Call for Family", ["Colorless"], 1, "", "Search your deck for a Basic Pokémon and put it onto your Bench. Then, shuffle your deck."),
      atk("Gnaw", ["Colorless","Colorless"], 2, "20", null),
    ],
    weaknesses: [weak("Fighting")], resistances: [], retreatCost: ["Colorless"],
  },
  "jtp-34": {
    abilities: [abl("Lure In", "Once during your turn, if this Pokémon is in the Active Spot, you may look at the top 6 cards of your deck. You may reveal a Supporter card you find there and put it into your hand. Shuffle the other cards back into your deck.")],
    attacks: [
      atk("Surf", ["Fire","Water"], 2, "50", null),
    ],
    weaknesses: [], resistances: [], retreatCost: ["Colorless"],
  },
  "jtp-35": {
    attacks: [
      atk("Steel Wing", ["Colorless","Colorless"], 2, "70", "During your opponent's next turn, this Pokémon takes 50 less damage from attacks (after applying Weakness and Resistance)."),
      atk("Cross Breaker", ["Metal","Metal"], 2, "120×", "Discard up to 2 [M] Energy from this Pokémon. This attack does 120 damage for each Energy card you discarded."),
    ],
    weaknesses: [weak("Fire")], resistances: [res("Grass")], retreatCost: ["Colorless","Colorless"],
  },
  "jtp-38": {
    abilities: [abl("Counter Spine", "When this Pokémon in the Active Spot takes damage from an attack from your opponent's Pokémon, put 3 damage counters on the Pokémon that used that attack.")],
    attacks: [
      atk("Spike Thunder", ["Lightning","Lightning","Colorless"], 3, "120", "Draw 2 cards."),
    ],
    weaknesses: [weak("Fighting")], resistances: [], retreatCost: ["Colorless","Colorless"],
  },
  "jtp-39": {
    attacks: [
      atk("Pull", ["Psychic"], 1, "", "Flip a coin. If heads, switch 1 of your opponent's Benched Pokémon with their Active Pokémon."),
    ],
    weaknesses: [weak("Darkness")], resistances: [res("Fighting")], retreatCost: ["Colorless"],
  },
  "jtp-40": {
    attacks: [
      atk("Eerie Wind", ["Psychic"], 1, "", "Your opponent's Active Pokémon is now Confused."),
      atk("Balloon Return", ["Psychic","Psychic"], 2, "110", "Return this Pokémon and all cards attached to it to your hand."),
    ],
    weaknesses: [weak("Darkness")], resistances: [res("Fighting")], retreatCost: ["Colorless"],
  },
  "jtp-41": {
    abilities: [abl("Lure In", "Once during your turn, if this Pokémon is in the Active Spot, you may look at the top 6 cards of your deck. You may reveal a Supporter card you find there and put it into your hand. Shuffle the other cards back into your deck.")],
    attacks: [
      atk("Surf", ["Fire","Water"], 2, "50", null),
    ],
    weaknesses: [], resistances: [], retreatCost: ["Colorless"],
  },
  "jtp-56": {
    abilities: [abl("Golden Flames", "Once during your turn, you may choose up to 2 Basic [R] Energy cards from your hand and attach them to 1 of your Benched Ethan's Pokémon.")],
    attacks: [
      atk("Shining Feather", ["Fire","Fire","Fire","Fire"], 4, "160", "Heal 50 damage from each of your Pokémon."),
    ],
    weaknesses: [weak("Water")], resistances: [], retreatCost: ["Colorless","Colorless"],
  },
  "jtp-57": {
    attacks: [
      atk("Screw Dive", ["Fighting"], 1, "100", "If you want, draw cards until you have 6 cards in your hand."),
      atk("Draco Buster", ["Fighting","Fighting"], 2, "260", "Discard all Energy from this Pokémon."),
    ],
    weaknesses: [weak("Grass")], resistances: [], retreatCost: ["Colorless"],
  },
  "jtp-58": {
    attacks: [
      atk("Hustle Tackle", ["Colorless"], 1, "30+", "If this Pokémon has no damage counters on it, this attack does 120 more damage."),
      atk("Boss Head", ["Colorless","Colorless","Colorless"], 3, "210", "During your next turn, this Pokémon can't use Boss Head."),
    ],
    weaknesses: [weak("Grass")], resistances: [], retreatCost: ["Colorless","Colorless","Colorless","Colorless"],
  },
  "jtp-59": {
    abilities: [abl("Veteran Technique", "This Pokémon's Blood Moon attack costs [C] less for each Prize card your opponent has taken.")],
    attacks: [
      atk("Blood Moon", ["Colorless","Colorless","Colorless","Colorless","Colorless"], 5, "240", "During your next turn, this Pokémon can't attack."),
    ],
    weaknesses: [weak("Fighting")], resistances: [], retreatCost: ["Colorless","Colorless","Colorless"],
  },
  "jtp-60": {
    abilities: [abl("Drizzle", "As long as this Pokémon is in play, none of either player's Pokémon in play have Abilities that Knock Out Pokémon.")],
    attacks: [
      atk("Headbutt", ["Colorless","Colorless"], 2, "20", null),
    ],
    weaknesses: [weak("Lightning")], resistances: [], retreatCost: ["Colorless"],
  },
  "jtp-61": {
    abilities: [abl("Drizzle", "As long as this Pokémon is in play, none of either player's Pokémon in play have Abilities that Knock Out Pokémon.")],
    attacks: [
      atk("Hydro Pump", ["Colorless","Colorless","Colorless"], 3, "60+", "This attack does 20 more damage for each [W] Energy attached to this Pokémon."),
    ],
    weaknesses: [weak("Lightning")], resistances: [], retreatCost: ["Colorless"],
  },
  "jtp-62": {
    abilities: [abl("Eerie Flutter", "As long as this Pokémon is in the Active Spot, your opponent's Active Pokémon has no Abilities.")],
    attacks: [
      atk("Poltergeist", ["Colorless","Colorless","Colorless"], 3, "90", "Place 2 damage counters on your opponent's Benched Pokémon in any way you like."),
    ],
    weaknesses: [weak("Darkness")], resistances: [], retreatCost: ["Colorless"],
  },
  "jtp-63": {
    attacks: [
      atk("Rapid Punch", ["Colorless","Colorless"], 2, "30×", "Flip 4 coins. This attack does 30 damage for each heads."),
      atk("Bad Impact", ["Colorless","Colorless","Colorless"], 3, "120+", "If you played a Supporter with \"Team Rocket\" in its name from your hand during this turn, this attack does 100 more damage."),
    ],
    weaknesses: [weak("Fighting")], resistances: [], retreatCost: ["Colorless","Colorless"],
  },
  "jtp-68": {
    attacks: [
      atk("V-Force", ["Fire","Fire"], 2, "120", "This attack can't be used if you have 4 or fewer Benched Pokémon."),
    ],
    weaknesses: [weak("Water")], resistances: [], retreatCost: ["Colorless"],
  },
  "jtp-69": {
    attacks: [
      atk("Scrappy Spark", ["Lightning","Lightning","Colorless"], 3, "30+", "Flip a coin until you get tails. This attack does 30 more damage for each heads."),
    ],
    weaknesses: [weak("Fighting")], resistances: [], retreatCost: ["Colorless"],
  },
};

// ── Trainer text patches ───────────────────────────────────────────────────

const trainerPatches = {
  "jtp-4":  "Search your deck for a Basic Pokémon, put it onto your Bench, and shuffle your deck.",
  "jtp-5":  "Switch your Active Pokémon with 1 of your Benched Pokémon.",
  "jtp-6":  "Choose a Pokémon from your hand and tell your opponent its name. Then, place it face-down. Your opponent guesses that Pokémon's HP. Turn the Pokémon face-up. If your opponent guessed correctly, they draw 4 cards. If they were wrong, you draw 4 cards. Then, return the card you placed to your hand.",
  "jtp-7":  "Look at the top 4 cards of your deck. Choose up to 2 of them and put them into your hand. Shuffle the other cards and put them on the bottom of your deck.",
  "jtp-8":  "You must discard 1 card from your hand in order to play this card.\n\nDraw a card for each of your opponent's Benched Pokémon.",
  "jtp-9":  "Search your deck for up to 2 Basic Pokémon with 70 HP or less and put them onto your Bench. Then, shuffle your deck.",
  "jtp-12": "Draw 3 cards.",
  "jtp-13": "Draw 3 cards.",
  "jtp-17": "Look at the top 4 cards of your deck. You may reveal any number of Supporter cards you find there and put them into your hand. Shuffle the other cards back into your deck.",
  "jtp-21": "Draw 2 cards. Then, if you have 10 or more cards in your hand, draw 2 more cards.",
  "jtp-22": "If you go first, you may use this card during your first turn.\n\nDiscard your hand and draw 5 cards.",
  "jtp-24": "Once during each player's turn, that player may heal 10 damage from each of their Pokémon. If they do, their turn ends.",
  "jtp-29": "Search your deck for up to 3 Pokémon Tool cards with \"TM\" in their name, reveal them, and put them into your hand. Then, shuffle your deck.",
  "jtp-30": "Search your deck for up to 2 Basic Energy cards of different types, reveal them, and put them into your hand. Attach 1 of them to 1 of your Pokémon. Then, shuffle your deck.",
  "jtp-36": "Discard a Special Energy from 1 of your opponent's Pokémon.",
  "jtp-37": "Search your deck for a [W] Pokémon and an Item card, reveal them, and put them into your hand. Then, shuffle your deck.",
  "jtp-42": "Search your deck for up to 2 Basic Pokémon with 70 HP or less and put them onto your Bench. Then, shuffle your deck.",
  "jtp-43": "Search your deck for an Item card and a Pokémon Tool card, reveal them, and put them into your hand. Then, shuffle your deck.",
  "jtp-44": "Heal 60 damage from 1 of your Pokémon. Remove all Special Conditions from that Pokémon.",
  "jtp-45": "Look at the top 7 cards of your deck. Choose 1 Pokémon and 1 Trainer card you find there and put them into your hand. Shuffle the other cards back into your deck.",
  "jtp-46": "Search your deck for up to 2 Basic Pokémon with 70 HP or less and put them onto your Bench. Then, shuffle your deck.",
  "jtp-47": "Discard 2 cards from your hand. Search your deck for a Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
  "jtp-48": "Choose 1 of your Basic Pokémon in play. If you have a Stage 2 card in your hand that evolves from that Pokémon, put that card onto that Pokémon to evolve it, skipping the Stage 1. You can't use this card during your first turn or on a Basic Pokémon that was put into play this turn.",
  "jtp-49": "Look at the top 7 cards of your deck. You may reveal a Supporter card you find there and put it into your hand. Shuffle the other cards back into your deck.",
  "jtp-50": "Switch your Active Pokémon with 1 of your Benched Pokémon.",
  "jtp-51": "During this turn, your Pokémon's attacks do 40 more damage to your opponent's Active Pokémon ex (before applying Weakness and Resistance).",
  "jtp-52": "Heal 60 damage from 1 of your Pokémon. Remove all Special Conditions from that Pokémon.",
  "jtp-53": "Each Basic Pokémon in play (both yours and your opponent's) gets +30 HP.",
  "jtp-54": "Draw 3 cards.",
  "jtp-55": "Draw 3 cards.",
  "jtp-64": "Put a Pokémon or a Basic Energy card from your discard pile into your hand.",
  "jtp-65": "When the Team Rocket's Pokémon this card is attached to in the Active Spot takes damage from an attack from your opponent's Pokémon, the Pokémon that used that attack is now Asleep.",
  "jtp-66": "Choose 1:\n• Switch your Active Pokémon with 1 of your Benched Pokémon.\n• During this turn, your Pokémon's attacks do 30 more damage to your opponent's Active Pokémon ex and V (before applying Weakness and Resistance).",
  "jtp-67": "You must discard 1 card from your hand in order to play this card.\n\nDraw cards until you have 6 cards in your hand.",
};

// ── Apply patches ──────────────────────────────────────────────────────────

let combatPatched = 0;
let textPatched = 0;

for (const card of cards) {
  const pp = pokemonPatches[card.id];
  if (pp) {
    if (pp.abilities   !== undefined) card.abilities   = pp.abilities;
    if (pp.attacks     !== undefined) card.attacks     = pp.attacks;
    if (pp.weaknesses  !== undefined) card.weaknesses  = pp.weaknesses;
    if (pp.resistances !== undefined) card.resistances = pp.resistances;
    if (pp.retreatCost !== undefined) card.retreatCost = pp.retreatCost;
    combatPatched++;
  }

  const tp = trainerPatches[card.id];
  if (tp !== undefined) {
    card.textEn = tp;
    textPatched++;
  }
}

const out = BOM + JSON.stringify(cards, null, 2);
fs.writeFileSync(FILE, out, 'utf8');
console.log(`Done: ${combatPatched} Pokémon combat-patched, ${textPatched} trainer cards text-patched.`);
