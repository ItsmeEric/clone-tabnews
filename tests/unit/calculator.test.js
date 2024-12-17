const calculator = require("../../models/calculator");

test("Expect the sum of 2 + 2 to be 4", () => {
  const result = calculator.sum(2, 2);
  expect(result).toBe(4);
});
