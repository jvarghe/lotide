/* CHALLENGE
 *
 * Create a function `flatten()` which will take in an array containing elements
 * including nested arrays of elements, and return a "flattened" version of the
 * array.
 *
 * This means that `flatten()` will search an array for sub-arrays, up to one
 * level deep. If it finds any, it will move the contents of the sub-arrays into
 * the main array. It will return a flattened array, without any sub-arrays.
 * All the sub-array elements will have been elevated to the main array, in the
 * sequence they were found.
 */


// FLATTEN IMPLEMENTATION
//
// This function takes an array that holds nested array up to one-level deep.
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



// EXPORTS
module.exports = flatten;
