// Challenge: Implement a function `eqArrays` which takes in two arrays and 
// returns true or false, based on a perfect match.


// This function takes in two arrays and compares their elements. Based on 
// whether the contents are identical, the function returns either true or 
// false.
const eqArrays = function(array1, array2) {

  let areArraysEqual = null;
};



// ASSERTEQUAL() Function Implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};






// TEST CASES:
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);             // => Should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);            // => Should FAIL
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => Should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);           // => Should FAIL