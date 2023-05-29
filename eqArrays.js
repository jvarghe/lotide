/* CHALLENGE
 *
 * While implementing `tail.js` previously we came across another problem:
 * JS doesn't allow us to easily compare arrays. This made the test code for
 * our function more cumbersome.
 *
 * Let's fix that by first implementing a function that can compare two arrays
 * for a perfect match. Implement a function `eqArrays()` which takes in two
 * arrays and returns `true` or `false`, based on a perfect match.
 */


// EQARRAYS IMPLEMENTATION
// This function takes in two arrays and compares their elements. Based on
// whether the contents are identical, the function returns either true or
// false.
const eqArrays = function(array1, array2) {

  let elementEquality = true;

  // A Quick Test: Check if the two arrays are of equal size, else return false.
  if (array1.length !== array2.length) {
    return false;

  // The Full Test: If the arrays are the same size, iterate over elements in
  // both of them and compare them to see if they're the same. If this is not
  // the case for even a single element, return `false`.
  } else {

    for (let i = 0; i < array1.length; i++) {

      // If element i of array1 is equal to element i of array2, return true.
      // Otherwise, mark `elementEquality` as false.
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


// EXPORTS
module.exports = eqArrays;