// Test Case: Check the original array

const tail = require("../tail.js");
const assertEqual = require("../assertEqual.js")

const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words)); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!


