// implement a function countChar that counts the number of times a character occurs in a string
import { countChar } from "./count.js";
// Given a string `str` and a single character `char` to search for,
// When the countChar function is called with these inputs,
// Then it should:

// Scenario: Multiple Occurrences
// Given the input string `str`,
// And a character `char` that occurs one or more times in `str` (e.g., 'a' in 'aaaaa'),
// When the function is called with these inputs,
// Then it should correctly count occurrences of `char`.

test("should count multiple occurrences of a character", () => {
  const str = "aaaaa";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(5);
});

test("should count multiple occurrences of a character when mixed with other characters", () => {
  const str = "ababa";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(3);
});

test("should count multiple occurrences of a character at the beginning and end of a string", () => {
  const str = "abbba";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(2);
});

// Scenario: No Occurrences
// Given the input string `str`,
// And a character `char` that does not exist within `str`.
// When the function is called with these inputs,
// Then it should return 0, indicating that no occurrences of `char` were found.
test("Should count 0 occurrences of a character", () => {
  const str = "aaaaa";
  const char = "b";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});
