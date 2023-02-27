// Challenge: Implement `assertArraysEqual()` which will take in two arrays and 
// `console.log` an appropriate message to the console.



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


// EQARRAYS FUNCTION
//
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


// TEST CASES:
assertArraysEqual([1, 2, 3], [1, 2, 3]);                // => EQUAL ARRAYS
assertArraysEqual([1, 2, 3], [3, 2, 1]);                // => NOT EQUAL! 
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);    // => EQUAL ARRAYS
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);      // => NOT EQUAL! 