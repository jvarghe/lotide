// CHALLENGE: Create a function flatten() which will take in an array containing
// elements including nested arrays of elements, and return a "flattened"
// version of the array.


// This function takes an array that hold nested array up to one-level deep.
// It flattens nested arrays by moving elements up into the top array.
let flatten = function(unflatArray) {
  
  // Create an empty array to hold the final product.
  let finalArray = [];


  // Iterate over `unflatArray`...
  for (const element of unflatArray) {
    
    // ...If an element is NOT an array object, push it on to `finalArray`.
    if (Array.isArray(element) === false) {
      finalArray.push(element);
    } else {

      // If you find an element that IS an array-within-an-array, iterate over
      // it and push its elements on `finalArray`.
      for (const item of element) {
        finalArray.push(item);
      }
    }
  }


  // Print `finalArray` to console.
  console.log(finalArray);
  return finalArray;
};



// ASSERTARRAYSEQUAL() FUNCTION
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

// TEST CASES
const unflattenedArray1 = flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]
assertArraysEqual(unflattenedArray1, [1, 2, 3, 4, 5, 6]);

const unflattenedArray2 = flatten([["Jack", "and", "Jill"], "went", "up", ["the"], "hill"]);
assertArraysEqual(unflattenedArray2, ["Jack", "and", "Jill", "went", "up", "the", "hill"]);