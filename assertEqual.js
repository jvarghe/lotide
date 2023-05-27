/* CHALLENGE
 *
 * As mentioned in the previous (Prime number) challenge, it would be nice to
 * be able to see a series of success/failure messages printed to the console,
 * letting us know if our functions are behaving as expected. In this
 * walkthrough we'll explore a built-in way and implement our own custom
 * `assertEqual()` function to help us test our code.
 *
 *
 * TEST CASES:
 *
 * Test at least the following scenarios:
 *
 *    * Comparing identical strings
 *    * Comparing non-identical strings
 *    * Comparing identical numbers
 *    * Comparing non-identical numbers
 *
 */


// ASSERTEQUAL IMPLEMENTATION
// This function will take in two inputs and compare them and return a boolean
// value. It is designed only for primitive objects, and thus, will return
// return unreliable results for objects or arrays. To compare objects, use
// `assertObjectsEqual()`. To compare arrays, use `assertArraysEqual()`.
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};


// EXPORTS
module.exports = assertEqual;