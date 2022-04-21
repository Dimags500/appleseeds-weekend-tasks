const { test, expect } = require("@jest/globals");
const romanToInt = require("./romanToInteger.easy");

test("test of iii to 3 ", () => {
  expect(romanToInt("III")).toBe(3);
});

test("test LVIII to 58 ", () => {
  expect(romanToInt("LVIII")).toBe(58);
});

test("test to MCMXCIV to 1994 ", () => {
  expect(romanToInt("MCMXCIV")).toBe(1994);
});
