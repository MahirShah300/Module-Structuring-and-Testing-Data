import { formatAs12HourClock } from "./timeConverter.js";
import assert from "node:assert";
import test from "node:test";

test("correctly convert time after 12:00", function () {
  assert.equal(formatAs12HourClock("23:00"), "11:00 pm");
});

test("can correctly convert morning time", function () {
  assert.equal(formatAs12HourClock("08:00"), "08:00 am");
});

test("can correctly convert time after 12 with minutes that are not 00", function () {
  assert.equal(formatAs12HourClock("23:46"), "11:46 pm");
});

test("can correctly convert noon time as 12pm", function () {
  assert.equal(formatAs12HourClock("12:00"), "12:00 pm");
});

test("can correctly convert midnight time as 12am", function () {
  assert.equal(formatAs12HourClock("00:00"), "12:00 am");
});

test("can correctly reject 24:00 invalid", function () {
  assert.equal(formatAs12HourClock("24:00"), "Not a valid time");
});

test("can correctly reject times with hours above 23 as invalid", function () {
  assert.equal(formatAs12HourClock("47:00"), "Not a valid time");
});

test("can correctly reject times with minutes above 60 as invalid", function () {
  assert.equal(formatAs12HourClock("15:75"), "Not a valid time");
});

test("can correctly reject times with minutes equal to 60 as invalid", function () {
  assert.equal(formatAs12HourClock("15:60"), "Not a valid time");
});

test("can correctly convert last valid time 23:59", function () {
  assert.equal(formatAs12HourClock("23:59"), "11:59 pm");
});

test("can correctly convert first minute after midnight", function () {
  assert.equal(formatAs12HourClock("00:01"), "12:01 am");
});

test("can correctly convert first hour after noon", function () {
  assert.equal(formatAs12HourClock("13:00"), "01:00 pm");
});

test("can correctly reject non-time strings", function () {
  assert.equal(formatAs12HourClock("Hello"), "Not a valid time");
});

test("can correctly reject times with text in minute section", function () {
  assert.equal(formatAs12HourClock("15:ab"), "Not a valid time");
});

test("can correctly reject only 2 digit number", function () {
  assert.equal(formatAs12HourClock("12"), "Not a valid time");
});

test("can correctly reject time with text after", function () {
  assert.equal(formatAs12HourClock("12:30abc"), "Not a valid time");
});

test("can correctly convert time using . as time separator", function () {
  assert.equal(formatAs12HourClock("01.30"), "01:30 am");
});

test("can correctly convert time after 12 using . as time separator", function () {
  assert.equal(formatAs12HourClock("15.30"), "03:30 pm");
});

test("can correctly convert time after using one digit for hour", function () {
  assert.equal(formatAs12HourClock("3:30"), "03:30 am");
});

test("can correctly convert time after using one digit for hour and . for time separator", function () {
  assert.equal(formatAs12HourClock("3.30"), "03:30 am");
});

test("can correctly reject time using both . and :", function () {
  assert.equal(formatAs12HourClock("12.30:45"), "Not a valid time");
});

test("can correctly reject time using more than one :", function () {
  assert.equal(formatAs12HourClock("23::00"), "Not a valid time");
});

test("can correctly reject time using more than one .", function () {
  assert.equal(formatAs12HourClock("23..00"), "Not a valid time");
});

test("can correctly reject time with no minutes after : ", function () {
  assert.equal(formatAs12HourClock("23:"), "Not a valid time");
});

test("can correctly reject time with no minutes after . ", function () {
  assert.equal(formatAs12HourClock("23."), "Not a valid time");
});

test("can correctly reject time with no hour before : ", function () {
  assert.equal(formatAs12HourClock(":30"), "Not a valid time");
});

test("can correctly reject time with no hour before.  ", function () {
  assert.equal(formatAs12HourClock(".30"), "Not a valid time");
});

test("can correctly reject time with just . ", function () {
  assert.equal(formatAs12HourClock("."), "Not a valid time");
});

test("can correctly reject time with negative minutes", function () {
  assert.equal(formatAs12HourClock("15:-30"), "Not a valid time");
});

test("can correctly reject time with negative hours", function () {
  assert.equal(formatAs12HourClock("-15:30"), "Not a valid time");
});

test("can correctly reject time with space character for hours", function () {
  assert.equal(formatAs12HourClock(" :30"), "Not a valid time");
});

test("can correctly reject time with whitespace space characters after time", function () {
  assert.equal(formatAs12HourClock("12:30   "), "Not a valid time");
});

test("can correctly reject time with newline characters after time", function () {
  assert.equal(formatAs12HourClock("12:30\n"), "Not a valid time");
});
