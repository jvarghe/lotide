/* CHALLENGE
 *
 * Lodash has a `takeWhile()` function, the documentation for which can be found
 * here: https://lodash.com/docs/4.17.11#takeWhile
 *
 * Lodash's example code for `takeWhile()` shows us that instead of just
 * supporting callback functions, it can support "iteratee shorthand" using
 * objects and arrays. We can safely ignore these examples since our function
 * will be simpler and not need to support this.
 *
 * The challenge is to implement a function quite similar to this one, but isn't
 * present in their library: `takeUntil()`. It will take in two parameters as
 * well:
 *
 *   1. The array to work with
 *   2. The callback (which Lodash calls "predicate")
 *
 * `takeUntil()` will keep collecting items from a provided array until the
 * callback provided returns a truthy value. In short, the function is to return
 * a slice of the array until the callback stops the process.
 *
 * To keep things simple, the callback should only be provided one value: The
 * item in the array.
 */



// IMPORTS
const assertArraysEqual = require("./assertArraysEqual.js");
const eqArrays = require("./eqArrays.js");



// TAKEUNTIL IMPLEMENTATION
// 
// This function takes an array and a callback function. It will iterate over
// the array, applying the callback until the predicate (aka callback function)
// returns a truthy value. Then it will return an array containing all the 
// (falsy) values retrieved until the predicate terminated the process.
const takeUntil = function(array, callback) {
  
  // Create an array to hold results.
  let resultArray = [];

  // Iterate over the array...
  for (const element of array) {

    // ... call the callback function and pass in elements of the array. Keep
    // doing that until the predicate returns a truthy value.
    if (callback(element) !== true) {

      // If the predicate function returns a falsy value, push the element
      // on to the resultArray.
      resultArray.push(element);

    // When the callback function returns a truthy value, stop iterating over
    // the array and break out the for-loop.
    } else {
      break;
    }

  }


  return resultArray;
};



// TEST CASES:

// Test 1:
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);


console.log('----------------------------------------------------');

// Test 2:
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);



// EXPORTS
module.exports = takeUntil;