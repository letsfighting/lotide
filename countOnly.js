const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✔✔✔ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

const countOnly = function (allItems, itemsToCount) {
  //creates an array containing the given object's list of property names
  let returnObject = {};

  for (const key in itemsToCount) {
    if (itemsToCount[key]) {
      //run a function to search the array for this string and tally it
      returnObject[key] = searchArray(key, allItems);
      //delete the property if there are no matches
      if (returnObject[key] === 0) {
        delete returnObject[key];
      }
    }
  }

  return returnObject;
};

//function to return the count of matches
const searchArray = function (key, allItems) {
  let counter = 0;

  for (let i = 0; i < allItems.length; i++) {
    if (key === allItems[i]) {
      counter++;
      console.log(counter);
    }
  }
  return counter;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
