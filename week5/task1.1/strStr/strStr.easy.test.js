const strStr = require("./strStr.easy");

test("test ofstrStr 1 ", () => {
  expect(strStr("hello", "ll")).toBe(2);
});

test("test ofstrStr 2", () => {
  expect(strStr("aaaaa", "bba")).toBe(-1);
});

test("test ofstrStr 2", () => {
  expect(strStr("aaaaa", "")).toBe(0);
});

test("test ofstrStr 2", () => {
  expect(strStr("Rock and ", "ck")).toBe(2);
});

// Example 1:

// Input : haystack = "hello", needle = "ll"
// Output : 2

// Example 2:
// Input: haystack = "aaaaa", needle = "bba"
// Output: -1
