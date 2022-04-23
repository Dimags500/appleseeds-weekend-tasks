const isValid = require("./validParentheses.easy");

test("test isValid 1", () => {
  expect(isValid("[]")).toBe(true);
});
test("test isValid 1", () => {
  expect(isValid("{}")).toBe(true);
});

test("test isValid 1", () => {
  expect(isValid("{")).toBe(false);
});

test("test isValid 1", () => {
  expect(isValid("]")).toBe(false);
});

test("test isValid 1", () => {
  expect(isValid("[{]")).toBe(false);
});
