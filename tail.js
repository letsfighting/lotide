// FUNCTION IMPLEMENTATION
const assertEqual = require("./assertEqual");

const tail = function (anArray) {
  let newArray = [];
  if (anArray.length > 1) {
    newArray = anArray.slice(1);
    return newArray;
  } else {
    return newArray;
  }
};

module.exports = tail;