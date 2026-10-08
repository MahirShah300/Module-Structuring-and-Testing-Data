// This problem involves playing cards: https://en.wikipedia.org/wiki/Standard_52-card_deck

// Don't forget to write tests in implement-tests-with-node-test.

// Implement a function getCardValue, when given a string representing a playing card,
// should return the numerical value of the card.

// A valid card string will contain a rank followed by the suit.
// The rank can be one of the following strings:
//   "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"
// The suit can be one of the following emojis:
//   "♠", "♥", "♦", "♣"
// For example: "A♠", "2♥", "10♥", "J♣", "Q♦", "K♦".

// When the card is an ace ("A"), the function should return 11.
// When the card is a face card ("J", "Q", "K"), the function should return 10.
// When the card is a number card ("2" to "10"), the function should return its numeric value.

// When the card string is invalid (not following the above format), the function should
// throw an error.

// Acceptance criteria:
// After you have implemented the function, write tests to cover all the cases, and
// execute the code to ensure all tests pass.

export function getCardValue(card) {
  if (
    card.at(-1) !== "♠" &&
    card.at(-1) !== "♥" &&
    card.at(-1) !== "♦" &&
    card.at(-1) !== "♣"
  ) {
    throw new Error(`Expected a number followed by a suit, but got ${card}`);
  }

  if (!isNaN(card.slice(0, -1))) {
    if (card.slice(0, -1) >= 2 && card.slice(0, -1) <= 10) {
      return Number(card.slice(0, -1));
    }
  }

  if (
    card.slice(0, 1) === "J" ||
    card.slice(0, 1) === "Q" ||
    card.slice(0, 1) === "K"
  ) {
    return 10;
  }

  if (card.slice(0, 1) === "A") {
    return 11;
  }

  throw new Error(`Expected a number followed by a suit, but got ${card}`);
}
