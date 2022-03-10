// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✔✔✔ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (sentence) {
  //define the return object
  let returnObject = {};
  //for of loop to iterate over the string
  for (const letter of sentence) {
    if (letter !== " ") {
      if (!returnObject[letter]) {
        returnObject[letter] = 1;
      } else {
        returnObject[letter]++;
      }
    }
  }

  console.log(returnObject);
  return returnObject;
};

let results = countLetters("lighthouse in the house");

assertEqual(results["e"], 3);
