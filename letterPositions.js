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



// ASSERTARRAYSEQUAL() Function Implementation
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



// This function takes a `sentence` string. It reads this string and it will
// make a list of all the indices in the string where each character is found.
// As each letter may appear more than once, you will need to return multiple
// numbers per character. This function will return object with arrays for
// keys.
const letterPositions = function(sentence) {
  
  // Create an object to hold the final results.
  const resultObject = {};

  
  // Iterate over the `sentence` string...
  for (let char = 0; char < sentence.length; char++) {
  
    // If the current character is a space, comma or fullstop, skip over it
    // and move on to the next element.
    if ((sentence[char] === " ") || (sentence[char] === ",") ||
        (sentence[char] === ".")) {
      continue;

    // If it is an alphanumerical character, prepare to add it to
    // `sentenceCountObject`.
    } else {

      // Check if the character has already been added to `resultObject`.
      if (Object.prototype.hasOwnProperty.call(resultObject, sentence[char]) === true) {

        // If so, append the position of the current element to the correct
        // key array.
        resultObject[sentence[char]].push(char);

      // If the character does not exist in the `resultObject` object, create
      // the key and add the current index to it.
      } else {
        resultObject[sentence[char]] = [];
        resultObject[sentence[char]].push(char);
      }

    }

  }

  console.log(resultObject);
  return resultObject;
};



// TEST CASES:
// Test cases for the word "hello":
assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").o, [4]);