'use strict';
const fs = require('fs');
const path = require('path');

const FILE = path.join(__dirname, '../data/cards/entp.json');
const raw = fs.readFileSync(FILE, 'utf8');
const BOM = raw.startsWith('﻿') ? '﻿' : '';
const cards = JSON.parse(raw.replace(/^﻿/, ''));

function atk(nameEn, cost, cEC, damage, textEn) {
  return { nameJa: null, nameEn, cost, convertedEnergyCost: cEC, damage, textJa: null, textEn };
}
function abl(nameEn, textEn) {
  return { nameJa: null, nameEn, textJa: null, textEn };
}
function weak(type) { return { type, value: "×2" }; }
function res(type)  { return { type, value: "-30" }; }

// Pokémon combat data for:
//  – entp-5/6: early special promos (se7_18, se7_36)
//  – entp-8 to entp-57: se8-image Pokémon (skipping already-patched 7/47/48)
//  – entp-37/38 duplicated from se7 (same card, different printing)
//  – entp-97 to entp-110: se7-image early Pokémon
const patches = {

  // ── entp-5: Fezandipiti ex (SFA 038, se7_18) ──
  "entp-5": {
    abilities: [abl("Flip the Script", "Once during your turn, if any of your Pokémon were Knocked Out during your opponent's last turn, you may use this Ability. Each player shuffles their hand into their deck and draws 6 cards. You can't use more than 1 Flip the Script Ability per turn.")],
    attacks: [atk("Cruel Arrow", ["Darkness","Darkness","Colorless"], 3, "100", "This attack also does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)")],
    weaknesses: [weak("Fighting")], resistances: [], retreatCost: ["Colorless","Colorless"],
  },

  // ── entp-6 & entp-37: Lillie's Clefairy ex (JTG 056, se7_36 = se8_25) ──
  "entp-6": {
    abilities: [abl("Fairy Zone", "The Weakness of each of your opponent's Pokémon in play is now [P]. (Apply Weakness as ×2.)")],
    attacks: [atk("Full Moon Rondo", ["Psychic","Colorless"], 2, "20+", "This attack does 20 more damage for each Benched Pokémon (both yours and your opponent's).")],
    weaknesses: [weak("Metal")], resistances: [], retreatCost: ["Colorless"],
  },

  // ── entp-8: Ethan's Typhlosion (DRI 034, se8_14) ──
  "entp-8": {
    abilities: [],
    attacks: [
      atk("Buddy Blast", ["Fire","Colorless"], 2, "40+", "This attack does 60 more damage for each Ethan's Adventure card in your discard pile."),
      atk("Steam Artillery", ["Fire","Fire","Colorless"], 3, "160", ""),
    ],
    weaknesses: [weak("Water")], resistances: [], retreatCost: ["Colorless","Colorless"],
  },

  // ── entp-9: Mega Kangaskhan ex (MEG 104, se8_32) ──
  "entp-9": {
    abilities: [abl("Run Errand", "Once during your turn, when this Pokémon is in the Active Spot, you may use this Ability. Draw 2 cards. You can have more than 1 Run Errand Ability each turn.")],
    attacks: [atk("Rapid-Fire Combo", ["Colorless","Colorless"], 2, "200+", "Flip a coin until you get tails. This attack does 50 more damage for each heads.")],
    weaknesses: [weak("Fighting")], resistances: [], retreatCost: ["Colorless","Colorless","Colorless"],
  },

  // ── entp-10: Mega Absol ex (MEG 086, se8_29) ──
  "entp-10": {
    abilities: [],
    attacks: [
      atk("Terminal Period", ["Darkness","Colorless"], 2, "", "If your opponent's Active Pokémon has exactly 6 damage counters on it, that Pokémon is Knocked Out."),
      atk("Claw of Darkness", ["Darkness","Darkness","Colorless"], 3, "200", "Your opponent reveals their hand, and you discard a card you find there."),
    ],
    weaknesses: [weak("Fighting")], resistances: [], retreatCost: ["Colorless","Colorless"],
  },

  // ── entp-12: Lunatone (MEG 074, se8_27) ──
  "entp-12": {
    abilities: [abl("Lunar Cycle", "Once during your turn, if you have Solrock in play, you may discard a Basic [F] Energy card from your hand in order to use this Ability. Draw 3 cards. You can't use more than 1 Lunar Cycle Ability each turn.")],
    attacks: [atk("Power Gem", ["Fighting","Colorless"], 2, "50", "")],
    weaknesses: [weak("Psychic")], resistances: [], retreatCost: ["Colorless"],
  },

  // ── entp-14: Genesect ex (BLK 067, se8_15) ──
  "entp-14": {
    abilities: [abl("Metallic Signal", "Once during your turn, you may search your deck for up to 2 Evolution [M] Pokémon, reveal them, and put them into your hand. Then, shuffle your deck.")],
    attacks: [atk("Protect Charge", ["Metal","Metal","Colorless"], 3, "150", "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).")],
    weaknesses: [weak("Fire")], resistances: [res("Grass")], retreatCost: ["Colorless"],
  },

  // ── entp-15 (also entp-97): Archaludon (SCR 107, se8_1 = se7_1) ──
  "entp-15": {
    abilities: [abl("Metal Bridge", "All of your Pokémon that have [M] Energy attached have no Retreat Cost.")],
    attacks: [atk("Iron Blaster", ["Metal","Colorless","Colorless"], 3, "160", "During your next turn, this Pokémon can't attack.")],
    weaknesses: [weak("Fire")], resistances: [res("Grass")], retreatCost: ["Colorless"],
  },

  // ── entp-16: Arven's Mabosstiff ex (DRI 139, se8_2) ──
  "entp-16": {
    abilities: [],
    attacks: [
      atk("Vigorous Tackle", ["Darkness","Colorless"], 2, "30+", "If this Pokémon has no damage counters on it, this attack does 120 more damage."),
      atk("Boss Headbutt", ["Darkness","Darkness","Colorless"], 3, "210", "During your next turn, this Pokémon can't use Boss Headbutt."),
    ],
    weaknesses: [weak("Fighting")], resistances: [], retreatCost: ["Colorless","Colorless"],
  },

  // ── entp-17 (also entp-103): Budew (PRE 004, se8_3 = se7_7) ──
  "entp-17": {
    abilities: [],
    attacks: [atk("Itchy Pollen", ["Grass"], 1, "10", "During your opponent's next turn, they can't play any Item cards from their hand.")],
    weaknesses: [weak("Fire")], resistances: [], retreatCost: ["Colorless"],
  },

  // ── entp-18: Cinderace (MEG 028, se8_4) ──
  "entp-18": {
    abilities: [abl("Explosiveness", "If this Pokémon is in your hand when you are setting up to play, you may place it face down in the Active Spot.")],
    attacks: [atk("Turbo Flare", ["Fire","Colorless"], 2, "50", "Search your deck for up to 2 Basic [R] Energy cards and attach them to your Benched Pokémon in any way you like. Then, shuffle your deck.")],
    weaknesses: [weak("Water")], resistances: [], retreatCost: ["Colorless"],
  },

  // ── entp-19: Conkeldurr (BLK 049, se8_5) ──
  "entp-19": {
    abilities: [abl("Craftsmanship", "This Pokémon gets +40 HP for each [F] Energy attached to it.")],
    attacks: [atk("Swing Around", ["Fighting","Fighting","Colorless"], 3, "100+", "Flip 2 coins. This attack does 50 more damage for each heads.")],
    weaknesses: [weak("Psychic")], resistances: [], retreatCost: ["Colorless","Colorless"],
  },

  // ── entp-20: Cynthia's Gabite (DRI 103, se8_6) ──
  "entp-20": {
    abilities: [abl("Champion's Call", "Once during your turn, you may search your deck for a Cynthia's Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.")],
    attacks: [atk("Dragonslice", ["Fighting","Colorless"], 2, "40", "")],
    weaknesses: [weak("Psychic")], resistances: [], retreatCost: ["Colorless"],
  },

  // ── entp-21: Cynthia's Garchomp ex (DRI 104, se8_7) ──
  "entp-21": {
    abilities: [],
    attacks: [
      atk("Corkscrew Dive", ["Fighting","Colorless"], 2, "100", "You may draw cards until you have 6 cards in your hand."),
      atk("Draconic Buster", ["Fighting","Fighting","Colorless"], 3, "260", "Discard all Energy from this Pokémon."),
    ],
    weaknesses: [weak("Psychic")], resistances: [], retreatCost: ["Colorless","Colorless"],
  },

  // ── entp-22: Cynthia's Roserade (DRI 008, se8_8) ──
  "entp-22": {
    abilities: [abl("Cheer On to Glory", "Attacks used by your Cynthia's Pokémon do 30 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).")],
    attacks: [atk("Leaf Step", ["Grass","Grass","Colorless"], 3, "80", "")],
    weaknesses: [weak("Fire")], resistances: [], retreatCost: ["Colorless"],
  },

  // ── entp-23: Eelektrik (BLK 031, se8_9) ──
  "entp-23": {
    abilities: [abl("Dynamotor", "Once during your turn, you may attach a Basic [L] Energy card from your discard pile to 1 of your Benched Pokémon.")],
    attacks: [atk("Electric Ball", ["Lightning","Colorless"], 2, "50", "")],
    weaknesses: [weak("Fighting")], resistances: [res("Metal")], retreatCost: ["Colorless"],
  },

  // ── entp-24: Emboar (WHT 013, se8_10) ──
  "entp-24": {
    abilities: [abl("Inferno Fandango", "As often as you like during your turn, you may attach a Basic [R] Energy card from your hand to 1 of your Pokémon.")],
    attacks: [atk("Heat Crash", ["Fire","Fire","Colorless"], 3, "120", "")],
    weaknesses: [weak("Water")], resistances: [], retreatCost: ["Colorless","Colorless","Colorless"],
  },

  // ── entp-25: Ethan's Ho-Oh ex (DRI 039, se8_11) ──
  "entp-25": {
    abilities: [abl("Golden Flame", "Once during your turn, you may attach up to 2 Basic [R] Energy cards from your hand to 1 of your Benched Ethan's Pokémon.")],
    attacks: [atk("Shining Feathers", ["Fire","Fire","Fire"], 3, "160", "Heal 50 damage from each of your Benched Pokémon.")],
    weaknesses: [weak("Water")], resistances: [], retreatCost: ["Colorless"],
  },

  // ── entp-26: Ethan's Magcargo (DRI 036, se8_12) ──
  "entp-26": {
    abilities: [abl("Melt Away", "If this Pokémon has no Energy attached, it has no Retreat Cost.")],
    attacks: [atk("Lava Burst", ["Fire","Colorless","Colorless"], 3, "70×", "Discard up to 5 [R] Energy from this Pokémon. This attack does 70 damage for each card you discard in this way.")],
    weaknesses: [weak("Water")], resistances: [], retreatCost: ["Colorless","Colorless"],
  },

  // ── entp-27: Ethan's Quilava (DRI 033, se8_13) ──
  "entp-27": {
    abilities: [abl("Bonded by the Journey", "Once during your turn, you may search your deck for an Ethan's Adventure card, reveal it, and put it into your hand. Then, shuffle your deck.")],
    attacks: [atk("Combustion", ["Fire","Colorless"], 2, "40", "")],
    weaknesses: [weak("Water")], resistances: [], retreatCost: ["Colorless"],
  },

  // ── entp-28: Hariyama (MEG 073, se8_16) ──
  "entp-28": {
    abilities: [abl("Heave-Ho Catcher", "Once during your turn, when you play this Pokémon from your hand to evolve 1 of your Pokémon, you may use this Ability. Switch in 1 of your opponent's Benched Pokémon to the Active Spot.")],
    attacks: [atk("Wild Press", ["Fighting","Fighting","Colorless"], 3, "210", "This Pokémon also does 70 damage to itself.")],
    weaknesses: [weak("Psychic")], resistances: [], retreatCost: ["Colorless","Colorless"],
  },

  // ── entp-29: Hop's Dubwool (JTG 136, se8_17) — same card as entp-121 ──
  "entp-29": {
    abilities: [abl("Defiant Horn", "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may switch in 1 of your opponent's Benched Pokémon to the Active Spot.")],
    attacks: [atk("Headbutt", ["Colorless","Colorless","Colorless"], 3, "80", "")],
    weaknesses: [weak("Fighting")], resistances: [], retreatCost: ["Colorless","Colorless"],
  },

  // ── entp-30: Hop's Snorlax (JTG 117, se8_18) — same card as entp-122 ──
  "entp-30": {
    abilities: [abl("Extra Helpings", "Attacks used by your Hop's Pokémon do 30 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance). The effect of Extra Helpings doesn't stack.")],
    attacks: [atk("Dynamic Press", ["Colorless","Colorless","Colorless"], 3, "140", "This Pokémon also does 80 damage to itself.")],
    weaknesses: [weak("Fighting")], resistances: [], retreatCost: ["Colorless","Colorless","Colorless","Colorless"],
  },

  // ── entp-31: Hop's Zacian ex (JTG 111, se8_19) — same card as entp-123 ──
  "entp-31": {
    abilities: [],
    attacks: [
      atk("Insta-Strike", ["Metal"], 1, "30", "This attack also does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"),
      atk("Brave Slash", ["Metal","Metal","Colorless"], 3, "240", "During your next turn, this Pokémon can't attack."),
    ],
    weaknesses: [weak("Fire")], resistances: [res("Grass")], retreatCost: ["Colorless"],
  },

  // ── entp-32: Iono's Bellibolt ex (JTG 053, se8_20) — same card as entp-124 ──
  "entp-32": {
    abilities: [abl("Electric Streamer", "As often as you like during your turn, you may attach a Basic Lightning Energy card from your hand to 1 of your Iono's Pokémon.")],
    attacks: [atk("Thunderous Bolt", ["Lightning","Lightning","Colorless"], 3, "230", "During your next turn, this Pokémon can't attack.")],
    weaknesses: [weak("Fighting")], resistances: [], retreatCost: ["Colorless","Colorless"],
  },

  // ── entp-33: Iono's Kilowattrel (JTG 055, se8_21) — same card as entp-125 ──
  "entp-33": {
    abilities: [abl("Flashing Draw", "You must discard a Basic Lightning Energy from this Pokémon in order to use this Ability. Once during your turn, you may draw cards until you have 6 cards in your hand.")],
    attacks: [atk("Mach Bolt", ["Lightning","Colorless"], 2, "70", "")],
    weaknesses: [weak("Fighting")], resistances: [res("Metal")], retreatCost: ["Colorless"],
  },

  // ── entp-34: Iono's Voltorb (JTG 047, se8_22) — same card as entp-126 ──
  "entp-34": {
    abilities: [],
    attacks: [atk("Voltaic Chain", ["Lightning","Colorless"], 2, "20+", "This attack does 20 more damage for each Lightning Energy attached to all of your Iono's Pokémon.")],
    weaknesses: [weak("Fighting")], resistances: [], retreatCost: ["Colorless"],
  },

  // ── entp-35: Kyurem ex (BLK 028, se8_23) ──
  "entp-35": {
    abilities: [],
    attacks: [
      atk("Slash", ["Water","Colorless"], 2, "50", ""),
      atk("Blizzard Burst", ["Water","Water","Colorless","Colorless"], 4, "130+", "This attack also does 10 damage to each of your opponent's Benched Pokémon for each Prize card your opponent has taken. (Don't apply Weakness and Resistance for Benched Pokémon.)"),
    ],
    weaknesses: [weak("Lightning")], resistances: [], retreatCost: ["Colorless","Colorless"],
  },

  // ── entp-36: Latios (MEG 101, se8_24) ──
  "entp-36": {
    abilities: [abl("Lustrous Assist", "Once during your turn, when your Mega Latias ex moves from your Bench to the Active Spot, you may use this Ability. Move any amount of Energy from your Benched Pokémon to your Active Pokémon.")],
    attacks: [atk("Dragon Claw", ["Colorless","Colorless"], 2, "130", "")],
    weaknesses: [weak("Metal")], resistances: [res("Fighting")], retreatCost: ["Colorless"],
  },

  // ── entp-37: Lillie's Clefairy ex (JTG 056, se8_25) — same card as entp-6 ──
  "entp-37": {
    abilities: [abl("Fairy Zone", "The Weakness of each of your opponent's Pokémon in play is now [P]. (Apply Weakness as ×2.)")],
    attacks: [atk("Full Moon Rondo", ["Psychic","Colorless"], 2, "20+", "This attack does 20 more damage for each Benched Pokémon (both yours and your opponent's).")],
    weaknesses: [weak("Metal")], resistances: [], retreatCost: ["Colorless"],
  },

  // ── entp-38: Lillie's Ribombee (JTG 067, se8_26) — same card as entp-131 ──
  "entp-38": {
    abilities: [abl("Inviting Wink", "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may have your opponent reveal their hand and you put any number of Basic Pokémon you find there onto their Bench.")],
    attacks: [atk("Magical Shot", ["Psychic"], 1, "50", "")],
    weaknesses: [weak("Metal")], resistances: [], retreatCost: [],
  },

  // ── entp-39: Mega Abomasnow ex (MEG 036, se8_28) — Water type ──
  "entp-39": {
    abilities: [],
    attacks: [
      atk("Hammer-lanche", ["Water","Colorless"], 2, "100+", "Discard the top 6 cards of your deck, and this attack does 100 damage for each Basic [W] Energy card that you discarded in this way."),
      atk("Frost Barrier", ["Water","Water","Water","Colorless"], 4, "200", "During your opponent's next turn, this Pokémon takes 200 less damage from attacks (after applying Weakness and Resistance)."),
    ],
    weaknesses: [weak("Lightning")], resistances: [], retreatCost: ["Colorless","Colorless","Colorless"],
  },

  // ── entp-40: Mega Camerupt ex (MEG 022, se8_30) ──
  "entp-40": {
    abilities: [],
    attacks: [
      atk("Roasting Heat", ["Fire","Colorless"], 2, "80+", "If your opponent's Active Pokémon is Burned, this attack does 160 more damage."),
      atk("Volcanic Meteor", ["Fire","Fire","Fire"], 3, "280", "Discard 2 Energy from this Pokémon."),
    ],
    weaknesses: [weak("Water")], resistances: [], retreatCost: ["Colorless","Colorless","Colorless","Colorless"],
  },

  // ── entp-41: Mega Gardevoir ex (MEG 060, se8_31) ──
  "entp-41": {
    abilities: [],
    attacks: [
      atk("Overflowing Wishes", ["Psychic","Colorless"], 2, "", "For each of your Benched Pokémon, search your deck for a Basic [P] Energy card and attach it to that Pokémon. Then, shuffle your deck."),
      atk("Mega Symphonia", ["Psychic","Psychic","Colorless"], 3, "50×", "This attack does 50 damage for each [P] Energy attached to all of your Pokémon."),
    ],
    weaknesses: [weak("Metal")], resistances: [res("Fighting")], retreatCost: ["Colorless","Colorless"],
  },

  // ── entp-42: Mega Latias ex (MEG 100, se8_33) — Dragon type ──
  "entp-42": {
    abilities: [],
    attacks: [
      atk("Strafe", ["Colorless","Colorless"], 2, "40", "You may switch this Pokémon with 1 of your Benched Pokémon."),
      atk("Illusory Impulse", ["Colorless","Colorless","Colorless"], 3, "300", "Discard all Energy from this Pokémon."),
    ],
    weaknesses: [weak("Metal")], resistances: [], retreatCost: ["Colorless"],
  },

  // ── entp-43: Mega Lucario ex (MEG 077, se8_34) ──
  "entp-43": {
    abilities: [],
    attacks: [
      atk("Aura Jab", ["Fighting","Colorless"], 2, "130", "Attach up to 3 Basic [F] Energy cards from your discard pile to your Benched Pokémon in any way you like."),
      atk("Mega Brave", ["Fighting","Fighting","Colorless"], 3, "270", "During your next turn, this Pokémon can't use Mega Brave."),
    ],
    weaknesses: [weak("Psychic")], resistances: [], retreatCost: ["Colorless","Colorless"],
  },

  // ── entp-44: Mega Manectric ex (MEG 050, se8_35) ──
  "entp-44": {
    abilities: [],
    attacks: [
      atk("Flash Ray", ["Lightning","Colorless"], 2, "120", "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Basic Pokémon."),
      atk("Riotous Blasting", ["Lightning","Lightning","Lightning","Colorless"], 4, "200+", "You may discard all Energy from this Pokémon and have this attack do 130 more damage."),
    ],
    weaknesses: [weak("Fighting")], resistances: [res("Metal")], retreatCost: ["Colorless"],
  },

  // ── entp-45: Mega Mawile ex (MEG 094, se8_36) ──
  "entp-45": {
    abilities: [],
    attacks: [
      atk("Gobble Down", ["Metal","Metal","Colorless"], 3, "80+", "This attack does 80 more damage for each Prize card you have taken."),
      atk("Huge Bite", ["Metal","Metal","Metal","Colorless"], 4, "260", "If your opponent's Active Pokémon has no damage counters on it, this attack does 30 damage instead."),
    ],
    weaknesses: [weak("Fire")], resistances: [res("Grass")], retreatCost: ["Colorless","Colorless"],
  },

  // ── entp-46: Mega Venusaur ex (MEG 003, se8_37) ──
  "entp-46": {
    abilities: [abl("Solar Transfer", "As often as you like during your turn, you may use this Ability. Move a Basic [G] Energy from 1 of your Pokémon to another of your Pokémon.")],
    attacks: [atk("Jungle Dump", ["Grass","Grass","Grass","Grass"], 4, "240", "Heal 10 damage from this Pokémon.")],
    weaknesses: [weak("Fire")], resistances: [], retreatCost: ["Colorless","Colorless","Colorless","Colorless"],
  },

  // ── entp-49: Reshiram ex (WHT 020, se8_41) ──
  "entp-49": {
    abilities: [],
    attacks: [
      atk("Slash", ["Fire","Colorless"], 2, "50", ""),
      atk("Blazing Burst", ["Fire","Fire","Colorless"], 3, "130+", "This attack does 10 more damage for each Prize card your opponent has taken. Discard an Energy from this Pokémon."),
    ],
    weaknesses: [weak("Water")], resistances: [], retreatCost: ["Colorless","Colorless"],
  },

  // ── entp-50: Shaymin (DRI 010, se8_42) ──
  "entp-50": {
    abilities: [abl("Flower Curtain", "Prevent all damage done to your Benched Pokémon that don't have a Rule Box by attacks from your opponent's Pokémon. (Pokémon ex, Pokémon V, etc. have Rule Boxes.)")],
    attacks: [atk("Smash Kick", ["Grass","Colorless"], 2, "30", "")],
    weaknesses: [weak("Fire")], resistances: [], retreatCost: ["Colorless"],
  },

  // ── entp-51: Solrock (MEG 075, se8_43) ──
  "entp-51": {
    abilities: [],
    attacks: [atk("Cosmic Beam", ["Fighting","Colorless"], 2, "70", "If you don't have Lunatone on your Bench, this attack does nothing. This attack's damage isn't affected by Weakness or Resistance.")],
    weaknesses: [weak("Psychic")], resistances: [], retreatCost: ["Colorless"],
  },

  // ── entp-52: Team Rocket's Crobat ex (DRI 122, se8_44) ──
  "entp-52": {
    abilities: [abl("Poison Cloud", "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may choose 2 of your opponent's Pokémon and put 2 damage counters on each of them.")],
    attacks: [atk("Assassin's Return", ["Darkness","Colorless","Colorless"], 3, "120", "You may move all Energy from this Pokémon to 1 of your Benched Pokémon.")],
    weaknesses: [weak("Fighting")], resistances: [], retreatCost: ["Colorless","Colorless"],
  },

  // ── entp-53: Team Rocket's Mewtwo ex (DRI 081, se8_45) ──
  "entp-53": {
    abilities: [abl("Power Saver", "This Pokémon can't attack unless you have 4 or more Team Rocket's Pokémon in play.")],
    attacks: [atk("Erase Ball", ["Psychic","Colorless"], 2, "160+", "You may discard up to 2 [P] Energy from your Benched Pokémon. This attack does 60 more damage for each card you discarded in this way.")],
    weaknesses: [weak("Darkness")], resistances: [res("Fighting")], retreatCost: ["Colorless","Colorless"],
  },

  // ── entp-54: Team Rocket's Nidoking ex (DRI 119, se8_46) ──
  "entp-54": {
    abilities: [],
    attacks: [
      atk("Tainted Horn", ["Darkness","Darkness","Colorless"], 3, "100", "Your opponent's Active Pokémon is now Poisoned. During Pokémon Checkup, put 8 damage counters on that Pokémon instead of 1."),
      atk("Kingly Impact", ["Darkness","Darkness","Darkness","Colorless"], 4, "240", ""),
    ],
    weaknesses: [weak("Fighting")], resistances: [], retreatCost: ["Colorless","Colorless","Colorless"],
  },

  // ── entp-55: Team Rocket's Spidops (DRI 020, se8_47) ──
  "entp-55": {
    abilities: [abl("Charging Up", "Once during your turn, you may attach a Basic Energy card from your discard pile to this Pokémon.")],
    attacks: [atk("Rocket Rush", ["Grass","Colorless"], 2, "30×", "This attack does 30 damage for each of your Team Rocket's Pokémon in play.")],
    weaknesses: [weak("Fire")], resistances: [], retreatCost: ["Colorless"],
  },

  // ── entp-56: Yanmega ex (DRI 003, se8_48) ──
  "entp-56": {
    abilities: [abl("Buzzing Boost", "Once during your turn, when this Pokémon moves from your Bench to the Active Spot, you may search your deck for up to 3 Basic [G] Energy cards and attach them to this Pokémon. Then, shuffle your deck.")],
    attacks: [atk("Jet Cyclone", ["Grass","Grass","Grass","Colorless"], 4, "210", "Move 1 Energy from this Pokémon to 1 of your Benched Pokémon.")],
    weaknesses: [weak("Fire")], resistances: [], retreatCost: ["Colorless"],
  },

  // ── entp-57: Zekrom ex (BLK 034, se8_49) ──
  "entp-57": {
    abilities: [],
    attacks: [
      atk("Slash", ["Lightning","Colorless"], 2, "50", ""),
      atk("Voltage Burst", ["Lightning","Lightning","Colorless"], 3, "130+", "This attack does 10 more damage for each Prize card your opponent has taken. Discard an Energy from this Pokémon."),
    ],
    weaknesses: [weak("Fighting")], resistances: [res("Metal")], retreatCost: ["Colorless","Colorless"],
  },

  // ════════════════════════════════════════════
  //  se7 early Pokémon — entp-97 to entp-110
  // ════════════════════════════════════════════

  // ── entp-97: Archaludon (SCR 107, se7_1) — same card as entp-15 ──
  "entp-97": {
    abilities: [abl("Metal Bridge", "All of your Pokémon that have [M] Energy attached have no Retreat Cost.")],
    attacks: [atk("Iron Blaster", ["Metal","Colorless","Colorless"], 3, "160", "During your next turn, this Pokémon can't attack.")],
    weaknesses: [weak("Fire")], resistances: [res("Grass")], retreatCost: ["Colorless"],
  },

  // ── entp-98: Archaludon ex (se7_2) ──
  "entp-98": {
    abilities: [abl("Assemble Alloy", "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may attach up to 2 Basic Metal Energy cards from your discard pile to your Pokémon in any way you like.")],
    attacks: [atk("Metal Defender", ["Metal","Colorless","Colorless"], 3, "220", "During your opponent's next turn, this Pokémon has no Weakness.")],
    weaknesses: [weak("Fire")], resistances: [res("Grass")], retreatCost: ["Colorless"],
  },

  // ── entp-99: Azumarill (se7_3) ──
  "entp-99": {
    abilities: [abl("Glistening Bubbles", "If you have any Tera Pokémon in play, this Pokémon can use the Double-Edge attack for [C].")],
    attacks: [atk("Double-Edge", ["Water","Water","Colorless","Colorless"], 4, "230", "This Pokémon also does 50 damage to itself.")],
    weaknesses: [weak("Metal")], resistances: [], retreatCost: ["Colorless"],
  },

  // ── entp-100: Blissey ex (se7_4) ──
  "entp-100": {
    abilities: [abl("Happy Switch", "Once during your turn, you may move a Basic Energy from 1 of your Pokémon to another of your Pokémon.")],
    attacks: [atk("Return", ["Colorless","Colorless","Colorless","Colorless"], 4, "180", "You may draw cards until you have 6 cards in your hand.")],
    weaknesses: [weak("Fighting")], resistances: [], retreatCost: ["Colorless","Colorless","Colorless"],
  },

  // ── entp-101: Bloodmoon Ursaluna ex (se7_5) ──
  "entp-101": {
    abilities: [abl("Seasoned Skill", "Blood Moon used by this Pokémon costs [C] less for each Prize card your opponent has taken.")],
    attacks: [atk("Blood Moon", ["Colorless","Colorless","Colorless","Colorless","Colorless"], 5, "240", "During your next turn, this Pokémon can't attack.")],
    weaknesses: [weak("Fighting")], resistances: [], retreatCost: ["Colorless","Colorless","Colorless"],
  },

  // ── entp-102: Bouffalant (se7_6) ──
  "entp-102": {
    abilities: [abl("Curly Wall", "As long as you have at least 1 other Bouffalant in play, all of your Basic [C] Pokémon take 60 less damage from attacks from your opponent's Pokémon (after applying Weakness and Resistance). The effect of Curly Wall doesn't stack.")],
    attacks: [atk("Boundless Power", ["Colorless","Colorless","Colorless"], 3, "130", "During your next turn, this Pokémon can't attack.")],
    weaknesses: [weak("Fighting")], resistances: [], retreatCost: ["Colorless","Colorless"],
  },

  // ── entp-103: Budew (PRE 004, se7_7) — same card as entp-17 ──
  "entp-103": {
    abilities: [],
    attacks: [atk("Itchy Pollen", ["Grass"], 1, "10", "During your opponent's next turn, they can't play any Item cards from their hand.")],
    weaknesses: [weak("Fire")], resistances: [], retreatCost: ["Colorless"],
  },

  // ── entp-104: Ceruledge ex (se7_8) ──
  "entp-104": {
    abilities: [abl("Spectral Blaze", "As long as this Pokémon is on your Bench, prevent all damage done to it by attacks.")],
    attacks: [
      atk("Abyssal Flames", ["Fire","Colorless"], 2, "30+", "This attack does 20 more damage for each Energy card in your discard pile."),
      atk("Raging Amethyst", ["Fire","Fire","Colorless"], 3, "280", "Discard all Energy from this Pokémon."),
    ],
    weaknesses: [weak("Water")], resistances: [], retreatCost: ["Colorless"],
  },

  // ── entp-105: Conkeldurr (se7_9) — SSP version, different from BLK entp-19 ──
  "entp-105": {
    abilities: [],
    attacks: [
      atk("Tantrum", ["Fighting"], 1, "80", "This Pokémon is now Confused."),
      atk("Gutsy Swing", ["Fighting","Fighting","Colorless"], 3, "250", "If this Pokémon is affected by a Special Condition, ignore all Energy in this attack's cost."),
    ],
    weaknesses: [weak("Psychic")], resistances: [], retreatCost: ["Colorless","Colorless","Colorless"],
  },

  // ── entp-106: Drilbur (se7_10) ──
  "entp-106": {
    abilities: [abl("Dig Dig Dig", "When you play this Pokémon from your hand onto your Bench during your turn, you may search your deck for up to 3 Basic [F] Energy cards and discard them. Then, shuffle your deck.")],
    attacks: [atk("Sand Spray", ["Fighting","Colorless"], 2, "20", "")],
    weaknesses: [weak("Psychic")], resistances: [], retreatCost: ["Colorless"],
  },

  // ── entp-107: Dudunsparce (se7_11) ──
  "entp-107": {
    abilities: [abl("Run Away Draw", "Once during your turn, you may draw 3 cards. If you drew any cards in this way, shuffle this Pokémon and all attached cards into your deck.")],
    attacks: [atk("Land Crush", ["Colorless","Colorless","Colorless"], 3, "90", "")],
    weaknesses: [weak("Fighting")], resistances: [], retreatCost: ["Colorless","Colorless"],
  },

  // ── entp-108: Dusclops (se7_12) ──
  "entp-108": {
    abilities: [abl("Cursed Blade", "Once during your turn, you may put 5 damage counters on 1 of your opponent's Pokémon. If you use this Ability, this Pokémon is Knocked Out.")],
    attacks: [atk("Will-O-Wisp", ["Psychic","Psychic"], 2, "50", "")],
    weaknesses: [weak("Darkness")], resistances: [res("Fighting")], retreatCost: ["Colorless","Colorless"],
  },

  // ── entp-109: Dusknoir (se7_13) ──
  "entp-109": {
    abilities: [abl("Cursed Blast", "Once during your turn, you may put 13 damage counters on 1 of your opponent's Pokémon. If you use this Ability, this Pokémon is Knocked Out.")],
    attacks: [atk("Shadow Bind", ["Psychic","Psychic","Colorless"], 3, "100", "During your opponent's next turn, the Defending Pokémon can't retreat.")],
    weaknesses: [weak("Darkness")], resistances: [res("Fighting")], retreatCost: ["Colorless","Colorless","Colorless"],
  },

  // ── entp-110: Eevee (se7_14) ──
  "entp-110": {
    abilities: [abl("Boosted Evolution", "As long as this Pokémon is in the Active Spot, it can evolve on the first turn or the turn you play it.")],
    attacks: [atk("Reckless Charge", ["Colorless","Colorless"], 2, "30", "This Pokémon also does 10 damage to itself.")],
    weaknesses: [weak("Fighting")], resistances: [], retreatCost: ["Colorless"],
  },
};

let combatPatched = 0;
for (const card of cards) {
  const patch = patches[card.id];
  if (patch) {
    if (patch.abilities   !== undefined) card.abilities   = patch.abilities;
    if (patch.attacks     !== undefined) card.attacks     = patch.attacks;
    if (patch.weaknesses  !== undefined) card.weaknesses  = patch.weaknesses;
    if (patch.resistances !== undefined) card.resistances = patch.resistances;
    if (patch.retreatCost !== undefined) card.retreatCost = patch.retreatCost;
    combatPatched++;
  }
}

const out = BOM + JSON.stringify(cards, null, 2);
fs.writeFileSync(FILE, out, 'utf8');
console.log(`Done: ${combatPatched} cards combat-patched.`);
