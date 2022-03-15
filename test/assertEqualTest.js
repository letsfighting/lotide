// test/assertEqualTest.js

/*
const assertEqual = require("../assertEqual");

// TEST CODE

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 3);
assertEqual("Lighthouse Labs", "Lighthouse Labs");
*/


const assert = require("chai").assert;
const assertEqual = require("../assertEqual");

describe("#assertEqual", () => {
  it('returns false for "Lighthouse Labs" === "Bootcamp"', () => {
    assert.strictEqual(assertEqual("Lighthouse Labs", "Bootcamp"), false);
  });
  it('returns true for 1 === 1', () => {
    assert.strictEqual(assertEqual(1, 1), true);
  });
  it('returns false for 1 === 3', () => {
    assert.strictEqual(assertEqual(1, 3), false);
  });
  it('returns true for "Lighthouse Labs" === "Lighthouse Labs"', () => {
    assert.strictEqual(
      assertEqual("Lighthouse Labs", "Lighthouse Labs"),
      true
    );
  });
  
});