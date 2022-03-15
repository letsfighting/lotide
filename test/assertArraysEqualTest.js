
/*const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
*/


const assert = require("chai").assert;
const assertArraysEqual = require("../assertArraysEqual");

describe("#assertArraysEqual", () => {
  it("returns true for [1, 2, 3] === [1, 2, 3]", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]), true);
  });
  it("returns false for [1, 2, 3] === [3, 2, 1]", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [3, 2, 1]), false);
  });
  it('returns true for [["1", "2", "3"] === ["1", "2", "3"]', () => {
    assert.strictEqual(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]), true);
  });
  it('returns false for ["1", "2", "3"], ["1", "2", 3]', () => {
    assert.strictEqual(
      assertArraysEqual(["1", "2", "3"], ["1", "2", 3]),
      false
    );
  });

});