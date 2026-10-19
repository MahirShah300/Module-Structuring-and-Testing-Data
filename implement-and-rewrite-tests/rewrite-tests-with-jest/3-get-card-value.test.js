import { getCardValue } from "../implement/3-get-card-value.js";

// TODO: Write tests in Jest syntax to cover all possible outcomes.

// Case 1: Ace (A)
test(`Should return 11 when given an ace card`, () => {
  expect(getCardValue("A♠")).toEqual(11);
});

// Suggestion: Group the remaining test data into these categories:
//   Number Cards (2-10)
test(`Should return 2 when given 2♠`, () => {
  expect(getCardValue("2♠")).toEqual(2);
});
test(`Should return 3 when given 3♠`, () => {
  expect(getCardValue("3♠")).toEqual(3);
});
test(`Should return 4 when given 4♠`, () => {
  expect(getCardValue("4♠")).toEqual(4);
});
test(`Should return 5 when given 5♠`, () => {
  expect(getCardValue("5♠")).toEqual(5);
});
test(`Should return 6 when given 6♠`, () => {
  expect(getCardValue("6♠")).toEqual(6);
});
test(`Should return 7 when given 7♠`, () => {
  expect(getCardValue("7♠")).toEqual(7);
});
test(`Should return 8 when given 8♠`, () => {
  expect(getCardValue("8♠")).toEqual(8);
});
test(`Should return 9 when given 9♠`, () => {
  expect(getCardValue("9♠")).toEqual(9);
});
test(`Should return 10 when given 10♠`, () => {
  expect(getCardValue("10♠")).toEqual(10);
});

//   Face Cards (J, Q, K)
test(`Should return 10 when given J♣`, () => {
  expect(getCardValue("J♣")).toEqual(10);
});
test(`Should return 10 when given Q♣`, () => {
  expect(getCardValue("Q♣")).toEqual(10);
});
test(`Should return 10 when given K♣`, () => {
  expect(getCardValue("K♣")).toEqual(10);
});

//   Invalid Cards
test(`Should get Invalid when given "Arbitrary non-card string"`, () => {
  expect(() => getCardValue("Arbitrary non-card string")).toThrow(/Invalid/);
});
test(`Should get Invalid when given "125♦" three digit card`, () => {
  expect(() => getCardValue("125♦")).toThrow(/Invalid/);
});
test(`Should get Invalid when given "02♦" card with leading 0`, () => {
  expect(() => getCardValue("02♦")).toThrow(/Invalid/);
});
test(`Should get Invalid when given "J2♦" card with face followed by number`, () => {
  expect(() => getCardValue("J2♦")).toThrow(/Invalid/);
});
test(`Should get Invalid when given "2J♦" card with number followed by a face`, () => {
  expect(() => getCardValue("2J♦")).toThrow(/Invalid/);
});
test(`Should get Invalid when given "2♦♦" card with two of same suits`, () => {
  expect(() => getCardValue("2♦♦")).toThrow(/Invalid/);
});
test(`Should get Invalid when given "2♣♦" card with two different suits`, () => {
  expect(() => getCardValue("2♣♦")).toThrow(/Invalid/);
});
test(`Should get Invalid when given "2.5♦" card with decimal number`, () => {
  expect(() => getCardValue("2.5♦")).toThrow(/Invalid/);
});
test(`Should get Invalid when given "-2♦" card with negative number`, () => {
  expect(() => getCardValue("-2♦")).toThrow(/Invalid/);
});
test(`Should get Invalid when given " 2♦" card with leading whitespace`, () => {
  expect(() => getCardValue(" 2♦")).toThrow(/Invalid/);
});
test(`Should get Invalid when given "2♦ " card with trailing whitespace`, () => {
  expect(() => getCardValue("2♦ ")).toThrow(/Invalid/);
});
test(`Should get Invalid when given "2 ♦" card with trailing whitespace`, () => {
  expect(() => getCardValue("2 ♦")).toThrow(/Invalid/);
});
test(`Should get Invalid when given "M♦" card with invalid face`, () => {
  expect(() => getCardValue("M♦")).toThrow(/Invalid/);
});
test(`Should get Invalid when given "A10♦" card with invalid Ace`, () => {
  expect(() => getCardValue("A10♦")).toThrow(/Invalid/);
});
test(`Should get Invalid when given "10" card with no suit`, () => {
  expect(() => getCardValue("10")).toThrow(/Invalid/);
});
test(`Should get Invalid when given "♦" card with no rank`, () => {
  expect(() => getCardValue("♦")).toThrow(/Invalid/);
});
test(`Should get Invalid when given "" empty string`, () => {
  expect(() => getCardValue("")).toThrow(/Invalid/);
});
test(`Should get Invalid when given "12♦" one above max number`, () => {
  expect(() => getCardValue("12♦")).toThrow(/Invalid/);
});
test(`Should get Invalid when given "1♦" one below min number`, () => {
  expect(() => getCardValue("1♦")).toThrow(/Invalid/);
});

// To learn how to test whether a function throws an error as expected in Jest,
// please refer to the Jest documentation:
// https://jestjs.io/docs/expect#tothrowerror
