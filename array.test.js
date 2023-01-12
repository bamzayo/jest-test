const array = require("./array");

test("array test", () => {
  const arr = [1, 2, 3, 4];
  expect(array(arr)).toEqual(arr);
  expect(array(arr)).not.toBe(arr);
});
