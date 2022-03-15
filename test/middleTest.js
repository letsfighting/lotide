// TEST/ASSERTION FUNCTIONS
/*

const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");

assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
assertArraysEqual(middle([1, 2]), []); // => []
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]

*/

const assert = require("chai").assert;
const middle = require("../middle");

describe('#middle', () => {
  it('returns [] when [1] is passed', () => {
    assert(middle([1]), []);
  }) 
  it('returns [2] when [1, 2, 3] is passed', () => {
    assert(middle([1, 2, 3]), [2]);
  }) 
  it('returns [3] when [1, 2, 3, 4, 5] is passed', () => {
    assert(middle([1, 2, 3, 4, 5]), [3]);
  }) 
  it('returns [] when [1] is passed', () => {
    assert(middle([1, 2]), []);
  }) 
  it('returns [] when [1] is passed', () => {
    assert(middle([1, 2, 3, 4]), [2, 3]);
  }) 
  it('returns [] when [1] is passed', () => {
    assert(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  }) 
})