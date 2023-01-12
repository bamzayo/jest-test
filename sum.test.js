const sum = require("./sum");

test("sum of two numbers", () => {
  expect(sum(2, 4)).toBe(6);
});
