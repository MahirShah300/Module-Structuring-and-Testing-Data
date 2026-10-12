import { isProperFraction } from "../implement/2-is-proper-fraction.js";

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});

//Case 1: Basic proper fraction
test(`should return true for numerator < denominator`, () => {
  expect(isProperFraction(1, 2)).toEqual(true);
  expect(isProperFraction(3, 5)).toEqual(true);
  expect(isProperFraction(7, 9)).toEqual(true);
  expect(isProperFraction(12, 26)).toEqual(true);
});

//Case 2: Basic improper fraction
test(`should return false for numerator > denominator`, () => {
  expect(isProperFraction(3, 2)).toEqual(false);
  expect(isProperFraction(5, 3)).toEqual(false);
  expect(isProperFraction(10, 5)).toEqual(false);
  expect(isProperFraction(25, 6)).toEqual(false);
});

//Case 3: Equal numbers
test(`should return false for numerator = denominator`, () => {
  expect(isProperFraction(2, 2)).toEqual(false);
  expect(isProperFraction(5, 5)).toEqual(false);
  expect(isProperFraction(27, 27)).toEqual(false);
  expect(isProperFraction(36, 36)).toEqual(false);
});

//Case 4: proper fraction negative numerator
test(`should return true for abs(numerator) < denominator`, () => {
  expect(isProperFraction(-1, 2)).toEqual(true);
  expect(isProperFraction(-3, 5)).toEqual(true);
  expect(isProperFraction(-7, 9)).toEqual(true);
  expect(isProperFraction(-12, 26)).toEqual(true);
});

//Case 5: improper fraction negative numerator
test(`should return false for abs(numerator) > denominator`, () => {
  expect(isProperFraction(-3, 2)).toEqual(false);
  expect(isProperFraction(-5, 3)).toEqual(false);
  expect(isProperFraction(-10, 5)).toEqual(false);
  expect(isProperFraction(-25, 6)).toEqual(false);
});

//Case 6: proper fraction negative denominator
test(`should return true for numerator < abs(denominator)`, () => {
  expect(isProperFraction(1, -2)).toEqual(true);
  expect(isProperFraction(3, -5)).toEqual(true);
  expect(isProperFraction(7, -9)).toEqual(true);
  expect(isProperFraction(12, -26)).toEqual(true);
});

//Case 7: improper fraction negative denominator
test(`should return false for numerator > abs(denominator)`, () => {
  expect(isProperFraction(3, -2)).toEqual(false);
  expect(isProperFraction(5, -3)).toEqual(false);
  expect(isProperFraction(10, -5)).toEqual(false);
  expect(isProperFraction(25, -6)).toEqual(false);
});

//Case 8: proper fraction negative numerator and denominator
test(`should return true for abs(numerator) < abs(denominator)`, () => {
  expect(isProperFraction(-1, -2)).toEqual(true);
  expect(isProperFraction(-3, -5)).toEqual(true);
  expect(isProperFraction(-7, -9)).toEqual(true);
  expect(isProperFraction(-12, -26)).toEqual(true);
});

//Case 9: improper fraction negative numerator and denominator
test(`should return false for abs(numerator) > abs(denominator)`, () => {
  expect(isProperFraction(-3, -2)).toEqual(false);
  expect(isProperFraction(-5, -3)).toEqual(false);
  expect(isProperFraction(-10, -5)).toEqual(false);
  expect(isProperFraction(-25, -6)).toEqual(false);
});

//Case 10: zero numerator
test(`should return true for numerator = 0`, () => {
  expect(isProperFraction(0, 2)).toEqual(true);
});
