/* CHALLENGE
 *
 * Implement a function called `letterPositions()`. This challenge is similar
 * to the `countLetters.js` activity and allows us to spend some more time 
 * solving problems with objects.
 *
 * We'll implement a new function `letterPositions()` which will return all the
 * indices (zero-based positions) in the string where each character is found.
 *
 * For each letter, instead of returning just one number to represent its number
 * of occurrences, multiple numbers may be needed to represent all the places
 * in the string that it shows up.
 * 
 * PSEUDOCODE
 * 
 *  * Create an object to track the indices of each letter. Since we need to
 *    track the positions of all the characters in the string, the object will
 *    have keys for each character (`a`, `b` and so on), and each key will 
 *    contain an array listing the indices of the all the places it occurs.
 * 
 *  * Convert sentence to lowercase to avoid case issues.
 * 
 *  * Iterate over the string:
 *      * Remove or ignore unwanted characters (spaces only).
 *      * Check if existing character has already been added to object.
 *        * If so, increment it's value by 1.
 *        * If not, add character and give it a value of 1. 
 * 
 *  * Sort the final object's keys, so that the properties appear in
 *    alphabetical order.
 */



// IMPORTS
const assertArraysEqual = require("./assertArraysEqual.js");
const objectKeySorter = require("./countLetters.js");


// LETTERPOSITIONS() IMPLEMENTATION
//
// This function takes a `sentence` string. It reads this string and it will
// make a list of all the indices in the string where each character is found.
// As each letter may appear more than once, you will need to return multiple
// numbers per character. This function will return object with arrays for
// keys.
const letterPositions = function(sentence) {
  
  // Create an object to hold the final results.
  const resultObject = {};

  // Convert the string to lower case to avoid dealing with upper and lower
  // cases.
  const LCSentence = sentence.toLowerCase();

  
  // Iterate over the `LCSentence` string (Use `for` loop to track indices).
  for (let char = 0; char < LCSentence.length; char++) {
  
    // If the current character is a space skip over it and move on to the next
    // element.
    if ((LCSentence[char] === " ")) {
      continue;

    // If it is an alphanumerical character, prepare to add it to
    // `resultObject`.
    } else {

      // Check if the character has already been added to `resultObject`.
      if (Object.prototype.hasOwnProperty.call(resultObject, LCSentence[char]) === true) {

        // If so, append the position of the current element to the correct
        // key array.
        resultObject[LCSentence[char]].push(char);

      // If the character does not exist in the `resultObject` object, create
      // the key and add the current index to it.
      } else {
        resultObject[LCSentence[char]] = [];
        resultObject[LCSentence[char]].push(char);
      }

    }

  }

  const finalObject = objectKeySorter(resultObject);

  console.log(finalObject);
  return finalObject;
};



// TEST CASES
// Test cases for the word "hello":
assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").o, [4]);


// EXPORTS
module.exports = letterPositions;