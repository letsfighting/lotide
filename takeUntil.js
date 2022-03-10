const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✔✔✔ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (firstVal, secondVal) {
  if (firstVal.length !== secondVal.length) {
    return false;
  }

  for (let i = 0; i < firstVal.length; i++) {
    if (firstVal[i] !== secondVal[i]) {
      return false;
    }
  }
  return true;
};

const takeUntil = function (array, callback) {
  let newArray = [];
  for (const element of array) {
    if (!callback(element)) {
      newArray.push(element);
    } else {
      return newArray;
    }
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);
//expects [1, 2, 5, 7, 2];

console.log("---");

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);

//expects [ 'I\'ve', 'been', 'to', 'Hollywood' ]
