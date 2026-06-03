'use strict';
const fs = require('fs');
const path = require('path');

const FILE = path.join(__dirname, '../data/cards/entp.json');
const raw = fs.readFileSync(FILE, 'utf8');
const BOM = raw.startsWith('﻿') ? '﻿' : '';
const cards = JSON.parse(raw.replace(/^﻿/, ''));

const patches = {
  // --- Paradise Resort (2024 & 2025 World Championships stamped) ---
  "entp-1":  "The Retreat Cost of each Psyduck in play (both yours and your opponent's) is [C] less.",
  "entp-3":  "The Retreat Cost of each Psyduck in play (both yours and your opponent's) is [C] less.",

  // --- se8 trainers ---
  "entp-11": "The Retreat Cost of the Pokémon this card is attached to is [C][C] less.",
  "entp-13": "Shuffle your hand into your deck. Then, draw 6 cards. If you have exactly 6 Prize cards remaining, draw 8 cards instead.",
  "entp-58": "Switch in 1 of your opponent's Benched Pokémon to the Active Spot.",
  "entp-59": "Search your deck for up to 5 cards and discard them. Then, shuffle your deck.",
  "entp-60": "The Cynthia's Pokémon this card is attached to gets +70 HP.",
  "entp-61": "Search your deck for any number of Basic Energy cards of different types, reveal them, and put them into your hand. Then, shuffle your deck.",
  "entp-62": "Search your deck for up to 3 in any combination of Ethan's Pokémon and Basic [R] Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
  "entp-63": "Search your deck for a Basic [F] Energy card or a Basic [F] Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
  "entp-64": "Each player's [G] Pokémon can evolve into [G] Pokémon during the turn they play those Pokémon, except during their first turn.",
  "entp-65": "Attacks used by the Hop's Pokémon this card is attached to cost [C] less and do 30 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
  "entp-66": "During your opponent's next turn, all of your [M] Pokémon take 30 less damage from attacks from your opponent's Pokémon (after applying Weakness and Resistance). (This includes new Pokémon that come into play.)",
  "entp-67": "Once during each player's turn, that player may put up to 2 Basic [L] Energy cards from their discard pile into their hand.",
  "entp-68": "If the Lillie's Pokémon this card is attached to is Knocked Out by damage from an attack from your opponent's Pokémon, that player takes 1 fewer Prize card.",
  "entp-69": "Put up to 5 in any combination of Pokémon and Basic Energy cards from your discard pile into your hand.",
  "entp-70": "Search your deck for a Mega Evolution Pokémon ex, reveal it, and put it into your hand. Then, shuffle your deck.",
  "entp-71": "Once during each player's turn, that player may discard an Energy card from their hand in order to draw cards until they have as many cards in their hand as they have [P] Pokémon in play.",
  "entp-72": "Attach a Basic Energy card from your discard pile to 1 of your Benched N's Pokémon.",
  "entp-73": "Attacks used by Hop's Pokémon (both yours and your opponent's) do 30 more damage to the opponent's Active Pokémon (before applying Weakness and Resistance).",
  "entp-74": "Search your deck for any number of Basic Pokémon and put them onto your Bench. Then, shuffle your deck.",
  "entp-75": "During this turn, attacks used by your [F] Pokémon do 30 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
  "entp-76": "Whenever any player puts a Basic non-[M] Pokémon onto their Bench during their turn, place 2 damage counters on that Pokémon.",
  "entp-77": "When the Tera Pokémon this card is attached to uses an attack, that attack costs 1 Energy less. (The Energy can be of any type.)",
  "entp-78": "Devolve 1 of your evolved [P] Pokémon by putting any number of Evolution cards on it into your hand. (That Pokémon can't evolve this turn.)",
  "entp-79": "Once during each player's turn, that player may switch their Active [W] Pokémon with 1 of their Benched [W] Pokémon.",
  "entp-80": "You can use this card only if any of your Team Rocket's Pokémon were Knocked Out during your opponent's last turn.\n\nEach player shuffles their hand into their deck. Then, you draw 5 cards, and your opponent draws 3 cards.",
  "entp-81": "Draw cards until you have 5 cards in your hand. If all of your Pokémon in play are Team Rocket's Pokémon, draw cards until you have 8 cards in your hand instead.",
  "entp-82": "This card can only be attached to a Team Rocket's Pokémon. If this card is attached to anything other than a Team Rocket's Pokémon, discard this card.\n\nAs long as this card is attached to a Pokémon, it provides 2 in any combination of [D] Energy and [P] Energy.",
  "entp-83": "Once during each player's turn, if they played a Supporter card that has \"Team Rocket\" in its name from their hand this turn, they may draw 2 cards.",
  "entp-84": "Switch your Active Team Rocket's Pokémon with 1 of your Benched Team Rocket's Pokémon. If you do, switch in 1 of your opponent's Benched Pokémon to the Active Spot.",
  "entp-85": "Search your deck for a Trainer card, reveal it, and put it into your hand. Then, shuffle your deck.",
  "entp-86": "If you go first, you may use this card during your first turn.\n\nSearch your deck for up to 3 Basic Team Rocket's Pokémon, reveal them, and put them into your hand. Then, shuffle your deck.",
  "entp-87": "Search your deck for a Supporter card that has \"Team Rocket\" in its name, reveal it, and put it into your hand. Then, shuffle your deck.",
  "entp-88": "Heal all damage from 1 of your Mega Evolution Pokémon ex. If you healed any damage in this way, put all Energy attached to that Pokémon into your hand.",

  // --- se7 trainers ---
  "entp-153": "Each player who has any Tera Pokémon in play can have up to 8 Pokémon on their Bench.\n\nIf a player no longer has any Tera Pokémon in play, that player discards Pokémon from their Bench until they have 5. When this card leaves play, both players discard Pokémon from their Bench until they have 5.",
  "entp-154": "Heal all damage from 1 of your Pokémon that has 30 HP or less remaining.",
  "entp-155": "You can use this card only if your opponent has exactly 2 Prize cards remaining.\n\nDuring your opponent's next turn, if their Active Pokémon is Knocked Out by damage from an attack used by your Tera Pokémon, take 1 more Prize card.",
  "entp-156": "Search your deck for up to 5 cards and discard them. Then, shuffle your deck.",
  "entp-157": "Search your deck for up to 2 Basic Pokémon or 1 Evolution Pokémon, reveal them, and put them into your hand. Then, shuffle your deck.",
  "entp-158": "Search your deck for up to 2 Basic Pokémon with 70 HP or less and put them onto your Bench. Then, shuffle your deck.",
  "entp-159": "Look at the top 7 cards of your deck. You may reveal up to 2 in any combination of [G] Pokémon and Basic [G] Energy cards you find there and put them into your hand. Shuffle the other cards back into your deck.",
  "entp-160": "If you go first, you may use this card during your first turn.\n\nDiscard your hand and draw 5 cards.",
  "entp-161": "Search your deck for a Stadium card and an Energy card, reveal them, and put them into your hand. Then, shuffle your deck.",
  "entp-162": "If you have more Prize cards remaining than your opponent, attacks used by the Pokémon this card is attached to cost [C] less.",
  "entp-163": "Search your deck for up to 2 Basic Energy cards of different types, reveal them, and put them into your hand. Attach 1 of them to 1 of your Pokémon. Then, shuffle your deck.",
  "entp-164": "Discard a Special Energy from 1 of your opponent's Pokémon.",
  "entp-165": "You can use this card only if you have any Tera Pokémon in play.\n\nChoose up to 2 of your Benched [W] Pokémon and attach a Basic Energy card from your discard pile to each of them.",
  "entp-166": "Each Stage 2 Pokémon in play (both yours and your opponent's) gets −30 HP.",
  "entp-167": "Search your deck for up to 2 Basic Hop's Pokémon and put them onto your Bench. Then, shuffle your deck.",
  "entp-168": "Attacks used by the Hop's Pokémon this card is attached to cost [C] less and do 30 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
  "entp-169": "You can use this card only if you discard another card from your hand.\n\nDraw cards until you have 6 cards in your hand.",
  "entp-170": "Pokémon Tools attached to each Pokémon (both yours and your opponent's) have no effects.",
  "entp-171": "Once during each player's turn, that player may put up to 2 Basic [L] Energy cards from their discard pile into their hand.",
  "entp-172": "If the Lillie's Pokémon this card is attached to is Knocked Out by damage from an attack from your opponent's Pokémon, that player takes 1 fewer Prize card.",
  "entp-173": "Put up to 5 in any combination of Pokémon and Basic Energy cards from your discard pile into your hand.",
  "entp-174": "Put a Pokémon or a Basic Energy card from your discard pile into your hand.",
  "entp-175": "N's Pokémon in play (both yours and your opponent's) have no Retreat Cost.",
  "entp-176": "Attach a Basic Energy card from your discard pile to 1 of your Benched N's Pokémon.",
  "entp-177": "Attacks used by Hop's Pokémon (both yours and your opponent's) do 30 more damage to the opponent's Active Pokémon (before applying Weakness and Resistance).",
  "entp-178": "At the end of your turn (after your attack), if the Pokémon this card is attached to is in the Active Spot, you may attach a Basic Energy card from your discard pile to it.",
  "entp-179": "Switch in 1 of your opponent's Benched Pokémon to the Active Spot. If you do, switch your Active Pokémon with 1 of your Benched Pokémon.",
  "entp-180": "Switch your Active Pokémon with 1 of your Benched Pokémon. If you do, you may move any amount of Energy from the Pokémon you moved to your Bench to the new Active Pokémon.",
  "entp-181": "When the Tera Pokémon this card is attached to uses an attack, that attack costs 1 Energy less. (The Energy can be of any type.)",
  "entp-182": "Search your deck for a Tera Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
};

let textPatched = 0;
for (const card of cards) {
  const text = patches[card.id];
  if (text !== undefined) {
    card.textEn = text;
    textPatched++;
  }
}

const out = BOM + JSON.stringify(cards, null, 2);
fs.writeFileSync(FILE, out, 'utf8');
console.log(`Done: ${textPatched} trainer cards text-patched.`);
