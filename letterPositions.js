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

const letterPositions = function (sentence) {
  const results = {};

  let counter = 0;

  //for of loop to iterate over the string
  for (const letter of sentence) {
    if (letter !== " ") {
      if (!results[letter]) {
        results[letter] = [counter];
      } else {
        results[letter].push(counter);
      }
    }

    counter++;
  }

  console.log(results);
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);
