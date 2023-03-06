/* CHALLENGE: Implement a function called `letterPositions()`. This challenge 
 * is similar to the `countLetters.js` activity and allows us to spend some 
 * more time solving problems with objects. 
 * 
 * We'll implement a new function `letterPositions()` which will return all the
 * indices (zero-based positions) in the string where each character is found.
 * 
 * For each letter, instead of returning just one number to represent its number
 * of occurrences, multiple numbers may be needed to represent all the places
 * in the string that it shows up.
 */



// ASSERTEQUAL() Function Implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
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



// This function takes a `sentence` string. It reads this string and it will
// make a list of all the indices in the string where each character is found.
// As each letter may appear more than once, you will need to return multiple
// numbers per character. This function will return object with arrays for 
// keys.
const letterPositions = function(sentence) {
  
  // Create an object to hold the final results.
  const resultObject = {};

  
  return resultsObject;
};



// TEST CASES: 
// Test cases for the word "hello":
assertArraysEqual(letterPositions("hello").h, [1]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2]);
assertArraysEqual(letterPositions("hello").o, [1]);