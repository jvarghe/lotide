/* CHALLENGE
 *
 * Now let's create our own version of `Array.prototype.map()` in order to get
 * some practice building our own higher-order functions.
 *
 * Our map function will take in two arguments:
 *
 *   - An array to map
 *   - A callback function
 *
 * The `map()` function will return a new array based on the results of the
 * callback function.
 */


// IMPORTS
const assertArraysEqual = require("./assertArraysEqual.js");



// MAP IMPLEMENTATION
//
// This function will take an array and a callback function. It will execute the
// callback on every element of the array and return the result in a new array.
const map = function(array, callback) {

  // An array to hold the results.
  const results = [];

  // Iterate over the input array...
  for (const item of array) {

    // ... Call the callback function, perform this operation on each element,
    // and push each result on the `results` array.
    results.push(callback(item));
  }


  return results;
};



// TEST CASES

// An array of strings that will be fed into `map`:
const words = ["ground", "control", "to", "major", "tom"];


// Write test cases using at least three different ways of using `map`. There
// are at least 4 ways of invoking `map`:
//
//   1. Standalone Callback Passed Into HOF Via Function Name
//   2. Inline Anonymous Function Defined Within HOF Function Call
//      (Function Declaration Syntax)
//   3. Inline Anonymous Function Defined Within HOF Function Call
//      (Arrow Function, Block Body Syntax)
//   4. Inline Anonymous Function Defined Within HOF Function Call
//      (Arrow Function, Concise Body Syntax)


// METHOD 1 : Define a standalone anonymous function and...
// This callback function returns the first character in each string.
const filterCB = function(word) {
  return word[0];
};

// ...pass it into `map()` with its function name.
const results1 = map(words, filterCB);
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);


// METHOD 2: Define an Inline Anonymous Function Within the `map()` Function
// Call (Function Declaration Syntax):
const results2 = map(words, function(word) {
  return word[0];
});
assertArraysEqual(results2, ["g", "c", "t", "m", "t"]);


// METHOD 3: Call `map()` and Pass in an Inline Anonymous Function
// (Arrow Function, Block Body Syntax)
const results3 = map(words, (word) => {
  return word[0];
});
assertArraysEqual(results3, ["g", "c", "t", "m", "t"]);


// METHOD 4: Call `map()` and Pass in an Inline Anonymous Function
// (Arrow Function, Concise Body Syntax)
const results4 = map(words, (word) => word[0]);
assertArraysEqual(results4, ["g", "c", "t", "m", "t"]);


// EXPORTS
module.exports = map;