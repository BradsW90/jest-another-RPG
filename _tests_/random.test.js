const checkIfEqual = require("../lib/random.js");

describe("checkIfEqual", () => {
  it("Should return true if values equal", () => {
    expect(checkIfEqual(10, 10)).toEqual(true);
  });
});
