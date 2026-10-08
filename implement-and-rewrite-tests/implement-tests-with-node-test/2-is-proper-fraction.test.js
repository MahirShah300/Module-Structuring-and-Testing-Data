import assert from "node:assert";
import test from "node:test";

import { isProperFraction } from "../implement/2-is-proper-fraction.js";

// TODO: Write tests to cover all cases.
// What combinations of numerators and denominators should you test?

test("Basic proper fraction", () => {
  // Example: 1/2 is a proper fraction
  assert.equal(isProperFraction(1, 2), true);
});

test("Basic improper fraction", () => {
  assert.equal(isProperFraction(3, 2), false);
});

test("equal numerator and denominator", () => {
  assert.equal(isProperFraction(5, 5), false);
});

test("negative numerator proper fraction", () => {
  assert.equal(isProperFraction(-1, 2), true);
});

test("negative denominator proper fraction", () => {
  assert.equal(isProperFraction(1, -2), true);
});

test("negative denominator and negative numerator proper fraction", () => {
  assert.equal(isProperFraction(-1, -2), true);
});

test("negative numerator improper fraction", () => {
  assert.equal(isProperFraction(-3, 2), false);
});

test("negative denominator improper fraction", () => {
  assert.equal(isProperFraction(3, -2), false);
});

test("negative denominator and negative numerator improper fraction", () => {
  assert.equal(isProperFraction(-3, -2), false);
});
