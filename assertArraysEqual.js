/* CHALLENGE
 *
 * While the `assertEqual()` is great at comparing primitive types (like numbers
 * and strings), we could use another function for asserting that two arrays
 * are equal.
 *
 * Assuming that you've already completed the previous challenge of implementing
 * `eqArrays()`, most of the leg work required to implement this is already
 * done. This is because `assertArraysEqual()` calls `eqArrays()`, takes the
 * input and presents it in a visually clear manner to the terminal. Therefore,
 * `assertArraysEqual()` is the array version of `assertEqual()`.
 *
 * Implement `assertArraysEqual()` which will take in two arrays and
 * `console.log()` an appropriate message to the console.
 */


// IMPORTS
const eqArrays = require("./eqArrays.js");


// ASSERTARRAYSEQUAL() IMPLEMENTATION
//
// This function calls eqArrays() to determine if two arrays are equal and
// prints a message to screen.
const assertArraysEqual = function(array1, array2) {

  // Call eqArrays() to determine if the arrays are equal.
  const arraysEqualOrNot = eqArrays(array1, array2);

  // Print results to console.
  if (arraysEqualOrNot === true) {
    console.log("✅✅✅ Assertion Passed: The two arrays are equal!");
  } else {
    console.log("🛑🛑🛑 Assertion Failed: The two arrays are NOT equal!");
  }

};


// EXPORTS
module.exports = assertArraysEqual;