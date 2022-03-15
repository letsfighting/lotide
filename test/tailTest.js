// Test Case: Check the original array
/*
const tail = require("../tail.js");
const assertEqual = require("../assertEqual.js")

const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words)); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

*/

const tail = require('../tail');
const assert = require('chai').assert;
const words = ["Yo Yo", "Lighthouse", "Labs"];


describe('#tail', () => {
  it('returns ["Lighthouse", "Labs"] when ["Yo Yo", "Lighthouse", "Labs"] is passed', () => {
    assert.deepEqual(tail(words), [
      "Lighthouse",
      "Labs",
    ]);
  })
  it('the original array remains unchanged', () => {
    assert.strictEqual(words.length, 3);
  })

})

