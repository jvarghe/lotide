// Challenge: Implement `assertArraysEqual()` which will take in two arrays and
// `console.log` an appropriate message to the console.


// IMPORTS
const eqArrays = require("./eqArrays.js");


// ASSERTARRAYSEQUAL IMPLEMENTATION
//
// This function calls eqArrays() to determine if two arrays are equal and
// prints a message to screen.
const assertArraysEqual = function(array1, array2) {

  // Call eqArrays() to determine if the arrays are equal.
  let arraysEqualOrNot = eqArrays(array1, array2);

  if (arraysEqualOrNot === true) {
    console.log("✅✅✅ Assertion Passed: The two arrays are equal!");
  } else {
    console.log("🛑🛑🛑 Assertion Failed: The two arrays are NOT equal!");
  }

};


// EXPORTS
module.exports = assertArraysEqual;