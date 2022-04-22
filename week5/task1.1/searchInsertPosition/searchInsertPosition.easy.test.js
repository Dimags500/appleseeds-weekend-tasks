const searchInsert = require("./searchInsertPosition.easy");
const { test, expect } = require("@jest/globals");

test("test [1,3,5,6] find missing number 1 ", () => {
  expect(searchInsert([1, 3, 5, 6], 5)).toBe(2);
});

test("test [1,3,5,6] find missing number 2 ", () => {
  expect(searchInsert([1, 3, 5, 6], 2)).toBe(1);
});

test("test [1,3,5,6] find missing number 3 ", () => {
  expect(searchInsert([1, 3, 5, 6], 7)).toBe(4);
});
