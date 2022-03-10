const assertEqual = function (actual, expected) {
  if (actual === expected) {
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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  //a function to confirm that the properties between the objects match

  let firstKeys = Object.keys(object1);
  let secondKeys = Object.keys(object2);

  if (firstKeys.length !== secondKeys.length) {
    return false;
  }

  for (const key1 in object1) {
    let matched = 0;

    for (const key2 in object2) {
      if (key1 === key2) {
        if (Array.isArray(object1[key1])) {
          if (eqArrays(object1[key1], object2[key2])) {
            matched++;
          }
        } else if (object1[key1] === object2[key2]) {
          matched++;
        }
      }
    }

    if (!matched) {
      return false;
    }
  }

  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false
assertEqual(eqObjects(cd, cd2), false);
