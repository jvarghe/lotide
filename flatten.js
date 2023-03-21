// CHALLENGE: Create a function flatten() which will take in an array containing
// elements including nested arrays of elements, and return a "flattened"
// version of the array.



// IMPORTS
const assertArraysEqual = require("./assertArraysEqual.js");



// FLATTEN IMPLEMENTATION
//
// This function takes an array that hold nested array up to one-level deep.
// It flattens nested arrays by moving elements up into the top array.
const flatten = function(unflatArray) {
  
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



// TEST CASES
const unflattenedArray1 = flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]
assertArraysEqual(unflattenedArray1, [1, 2, 3, 4, 5, 6]);

const unflattenedArray2 = flatten([["Jack", "and", "Jill"], "went", "up", ["the"], "hill"]);
assertArraysEqual(unflattenedArray2, ["Jack", "and", "Jill", "went", "up", "the", "hill"]);


// EXPORTS
module.exports = flatten;