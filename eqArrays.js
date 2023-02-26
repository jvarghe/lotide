// Challenge: Implement a function `eqArrays` which takes in two arrays and
// returns true or false, based on a perfect match.


// This function takes in two arrays and compares their elements. Based on
// whether the contents are identical, the function returns either true or
// false.
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



// ASSERTEQUAL() Function Implementation
// Function Implementation
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
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);  // => Should FAIL