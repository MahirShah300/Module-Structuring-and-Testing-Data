// Implement a function repeatStr
import { repeatStr } from "./repeat-str.js";
// Given a target string `str` and a positive integer `count`,
// When the repeatStr function is called with these inputs,
// Then it should:

// Case: handle multiple repetitions:
// Given a target string `str` and a positive integer `count` greater than 1,
// When the repeatStr function is called with these inputs,
// Then it should return a string that contains the original `str` repeated `count` times.

test("should repeat the string count times", () => {
  const str = "hello";
  const count = 3;
  const repeatedStr = repeatStr(str, count);
  expect(repeatedStr).toEqual("hellohellohello");
});

test("should return empty string when str is empty and count = 3", () => {
  const str = "";
  const count = 3;
  const repeatedStr = repeatStr(str, count);
  expect(repeatedStr).toEqual("");
});

// Case: handle count of 1:
// Given a target string `str` and a `count` equal to 1,
// When the repeatStr function is called with these inputs,
// Then it should return the original `str` without repetition.

test("should repeat the string count times, count = 1", () => {
  const str = "hello";
  const count = 1;
  const repeatedStr = repeatStr(str, count);
  expect(repeatedStr).toEqual("hello");
});

test("should return empty string when str is empty and count = 1", () => {
  const str = "";
  const count = 1;
  const repeatedStr = repeatStr(str, count);
  expect(repeatedStr).toEqual("");
});

// Case: Handle count of 0:
// Given a target string `str` and a `count` equal to 0,
// When the repeatStr function is called with these inputs,
// Then it should return an empty string.
test("should return empty string when count = 0", () => {
  const str = "hello";
  const count = 0;
  const repeatedStr = repeatStr(str, count);
  expect(repeatedStr).toEqual("");
});

test("should return empty string when string is empty and count = 0", () => {
  const str = "";
  const count = 0;
  const repeatedStr = repeatStr(str, count);
  expect(repeatedStr).toEqual("");
});

// Case: Handle negative count:
// Given a target string `str` and a negative integer `count`,
// When the repeatStr function is called with these inputs,
// Then it should throw an error, as negative counts are not valid.
test("should return error when count < 0", () => {
  const str = "hello";
  const count = -5;
  expect(() => repeatStr(str, count)).toThrow(/Error/);
});

test("should return error when count < 0 and  string is empty", () => {
  const str = "";
  const count = -5;
  expect(() => repeatStr(str, count)).toThrow(/Error/);
});
