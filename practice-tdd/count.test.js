// implement a function countChar that counts the number of times a character occurs in a string
import { countChar } from "./count.js";
// Given a string `str` and a single character `char` to search for,
// When the countChar function is called with these inputs,
// Then it should:

// Scenario: One Occurrence
// Given the input string `str`,
// And a character `char` that occurs one times in `str` (e.g., 'a' in 'abbbb'),
// When the function is called with these inputs,
// Then it should correctly count occurrences of `char`.
test("should count one occurrence of a character at the beginning of a string", () => {
  const str = "abbbb";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(1);
});

test("should count one occurrence of a character at the end of a string", () => {
  const str = "bbbba";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(1);
});

test("should count one occurrence of a character in the middle of a string", () => {
  const str = "bbabb";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(1);
});

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

test("should count multiple occurrences of a character in the middle of a string", () => {
  const str = "baaabaaabbb";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(7);
});

// Scenario: No Occurrences
// Given the input string `str`,
// And a character `char` that does not exist within `str`.
// When the function is called with these inputs,
// Then it should return 0, indicating that no occurrences of `char` were found.
test("should count 0 occurrences of a character", () => {
  const str = "aaaaa";
  const char = "b";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});

test("should count 0 occurrences of a character for an empty string", () => {
  const str = "";
  const char = "b";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});
