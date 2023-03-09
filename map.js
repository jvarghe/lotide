/* CHALLENGE:
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



// ASSERTARRAYSEQUAL()
const assertArraysEqual = function(array1, array2) {

  // Call eqArrays() to determine if the arrays are equal.
  let arraysEqualOrNot = eqArrays(array1, array2);

  if (arraysEqualOrNot === true) {
    console.log("✅✅✅ Assertion Passed: The two arrays are equal!");
  } else {
    console.log("🛑🛑🛑 Assertion Failed: The two arrays are NOT equal!");
  }

};



// EQARRAYS()
const eqArrays = function(array1, array2) {

  let elementEquality = true;

  // Check if the two arrays are of equal size, else return false.
  if (array1.length !== array2.length) {
    return false;
  } else {
    // If they are of the same size, compare elements to see if they're the
    // same. Return false if this is not true.
    for (let i = 0; i < array1.length; i++) {

      // If element i of array1 is equal to element i of array2, return true.
      // Otherwise, mark elementEquality as false.
      if (array1[i] === array2[i]) {
        elementEquality = true;
      } else {
        elementEquality = false;
        break;
      }
    }


    return elementEquality;
  }

};



// MAP IMPLEMENTATION
// An array of strings:
const words = ["ground", "control", "to", "major", "tom"];

// Our implementation of `map`.
const map = function(array, callback) {

  // An array to hold the results.
  const results = [];

  // Iterate over the input array...
  for (let item of array) {

    // ... Call the callback function, perform this operation on each element,
    // and push each result on the `results` array.
    results.push(callback(item));
  }
  

  return results;
};



// TEST CASES
// Write test cases using at least three different ways of using `map`. There
// are at least 4 ways of invoking `map`:
//
//   1. Non-Anonymous + Regular Function
//   2. Non-Anonymous + Arrow Function
//   3. Anonymous + Regular Function
//   4. Anonymous + Arrow Function


// Test 1: Call `map` with a Non-Anonymous + Regular Function and store the results in `results1`.
const results1 = map(words, function nonAnonymousRegularFunction(word) {
  return word[0];
});
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);


// Test 2: Call `map` with a Non-Anonymous + Arrow Function and store the results in `results2`.
const results2 = map(words, function nonAnonymousArrowFunction(word) {
  return word[0];
});
assertArraysEqual(results2, ["g", "c", "t", "m", "t"]);


// Test 3: Call `map` with an Anonymous + Regular Function and store the results in `results3`.
const results3 = map(words, function(word) {
  return word[0];
});
assertArraysEqual(results3, ["g", "c", "t", "m", "t"]);


// Test 4: Call `map` with an Anonymous + Arrow Function and store the results in `results4`.
const results4 = map(words, word => word[0]);
assertArraysEqual(results4, ["g", "c", "t", "m", "t"]);