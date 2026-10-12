import assert from "node:assert";
import test from "node:test";

import { getCardValue } from "../implement/3-get-card-value.js";

// TODO: Write tests to cover all outcomes, including throwing errors for invalid cards.

test("Valid single-digit card", () => {
  assert.equal(getCardValue("9♠"), 9);
});

test("Valid double-digit card", () => {
  assert.equal(getCardValue("10♠"), 10);
});

test("Valid face card", () => {
  assert.equal(getCardValue("J♣"), 10);
});

test("Valid ace card", () => {
  assert.equal(getCardValue("A♦"), 11);
});

test("Arbitrary non-card string", () => {
  const card = "invalid";
  assert.throws(
    () => getCardValue("invalid"),
    new RegExp(
      `Invalid input. Expected a number followed by a suit, but got "${card}"`
    ),
    "Expected clear error"
  );
});

test("Three digit card string", () => {
  const card = "125♦";
  assert.throws(
    () => getCardValue(card),
    new RegExp(
      `Invalid input. Expected a number followed by a suit, but got "${card}"`
    ),
    "Expected clear error"
  );
});

test("Card with leading 0", () => {
  const card = "02♦";
  assert.throws(
    () => getCardValue(card),
    new RegExp(
      `Invalid input. Expected a number followed by a suit, but got "${card}"`
    ),
    "Expected clear error"
  );
});

test("Card with face followed by number", () => {
  const card = "J2♦";
  assert.throws(
    () => getCardValue(card),
    new RegExp(
      `Invalid input. Expected a number followed by a suit, but got "${card}"`
    ),
    "Expected clear error"
  );
});

test("Card with number followed by face", () => {
  const card = "2J♦";
  assert.throws(
    () => getCardValue(card),
    new RegExp(
      `Invalid input. Expected a number followed by a suit, but got "${card}"`
    ),
    "Expected clear error"
  );
});

test("Card with multiple same suit", () => {
  const card = "2♦♦";
  assert.throws(
    () => getCardValue(card),
    new RegExp(
      `Invalid input. Expected a number followed by a suit, but got "${card}"`
    ),
    "Expected clear error"
  );
});

test("Card with multiple different suit", () => {
  const card = "2♣♦";
  assert.throws(
    () => getCardValue(card),
    new RegExp(
      `Invalid input. Expected a number followed by a suit, but got "${card}"`
    ),
    "Expected clear error"
  );
});

test("Card with decimal number", () => {
  const card = "2.5♦";
  assert.throws(
    () => getCardValue(card),
    new RegExp(
      `Invalid input. Expected a number followed by a suit, but got "${card}"`
    ),
    "Expected clear error"
  );
});

test("Card with negative number", () => {
  const card = "-2♦";
  assert.throws(
    () => getCardValue(card),
    new RegExp(
      `Invalid input. Expected a number followed by a suit, but got "${card}"`
    ),
    "Expected clear error"
  );
});

test("Card with leading whitespace", () => {
  const card = " 2♦";
  assert.throws(
    () => getCardValue(card),
    new RegExp(
      `Invalid input. Expected a number followed by a suit, but got "${card}"`
    ),
    "Expected clear error"
  );
});

test("Card with trailing whitespace", () => {
  const card = "2♦ ";
  assert.throws(
    () => getCardValue(card),
    new RegExp(
      `Invalid input. Expected a number followed by a suit, but got "${card}"`
    ),
    "Expected clear error"
  );
});

test("Card with middle whitespace", () => {
  const card = "2 ♦";
  assert.throws(
    () => getCardValue(card),
    new RegExp(
      `Invalid input. Expected a number followed by a suit, but got "${card}"`
    ),
    "Expected clear error"
  );
});

test("Card with invalid face", () => {
  const card = "M♦";
  assert.throws(
    () => getCardValue(card),
    new RegExp(
      `Invalid input. Expected a number followed by a suit, but got "${card}"`
    ),
    "Expected clear error"
  );
});

test("Card with invalid Ace", () => {
  const card = "A10♦";
  assert.throws(
    () => getCardValue(card),
    new RegExp(
      `Invalid input. Expected a number followed by a suit, but got "${card}"`
    ),
    "Expected clear error"
  );
});

test("Card with no suit", () => {
  const card = "10";
  assert.throws(
    () => getCardValue(card),
    new RegExp(
      `Invalid input. Expected a number followed by a suit, but got "${card}"`
    ),
    "Expected clear error"
  );
});

test("Card with no rank", () => {
  const card = "♦";
  assert.throws(
    () => getCardValue(card),
    new RegExp(
      `Invalid input. Expected a number followed by a suit, but got "${card}"`
    ),
    "Expected clear error"
  );
});

test("Empty String", () => {
  const card = "";
  assert.throws(
    () => getCardValue(card),
    new RegExp(
      `Invalid input. Expected a number followed by a suit, but got "${card}"`
    ),
    "Expected clear error"
  );
});

test("Card with invalid number one above max", () => {
  const card = "12♦";
  assert.throws(
    () => getCardValue(card),
    new RegExp(
      `Invalid input. Expected a number followed by a suit, but got "${card}"`
    ),
    "Expected clear error"
  );
});

test("Card with invalid number one below min", () => {
  const card = "1♦";
  assert.throws(
    () => getCardValue(card),
    new RegExp(
      `Invalid input. Expected a number followed by a suit, but got "${card}"`
    ),
    "Expected clear error"
  );
});
