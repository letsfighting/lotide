// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual.length > 1) {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
        return;
      }
    }
  }

  if (actual.length !== expected.length) {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
    return;
  }

  if (actual === expected) {
    console.log(`✔✔✔ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function (anArray) {
  let newArray = [];
  if (anArray.length > 1) {
    newArray = anArray.slice(1);
    return newArray;
  } else {
    return newArray;
  }
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words)); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

console.log(tail([]));

console.log(tail(["hello"]));
