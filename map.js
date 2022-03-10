const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  // temporary code:

  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, (word) => word[0]);

const results2 = map(words, (word) => {
  let object = {};
  object.lyric = word;
  return object;
});

const results3 = map(words, (word) => word + word);

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

assertArraysEqual(results1, [1, 2, 3]);
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
assertArraysEqual(results2, [
  { lyric: "ground" },
  { lyric: "control" },
  { lyric: "to" },
  { lyric: "major" },
  { lyric: "tom" },
]);
assertArraysEqual(results3, [
  "groundground",
  "controlcontrol",
  "toto",
  "majormajor",
  "tomtom",
]);

console.log(results2);
