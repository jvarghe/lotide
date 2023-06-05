/* CHALLENGE
 *
 * In this activity, we will create another Lotide function. This one will be
 * like the `countOnly()` function from the previous activity. The function
 * should take in a sentence (as a string) and then return a count of
 * each of the letters in that sentence. For example, countLetters('LHL')
 * should return results indicating that L appears twice, and H once.
 *
 * Do NOT provide a count of letters that did not show up in the string. Skip
 * and do NOT count spaces.
 *
 *
 * PSEUDOCODE
 *
 *  * Create a sentence count object to track characters.
 *  * Convert sentence to lowercase to avoid case issues.
 *
 *  * Iterate over the string:
 *      * Remove or ignore unwanted characters.
 *      * Check if existing character has already been added to object.
 *        * If so, increment it's value by 1.
 *        * If not, add character and give it a value of 1.
 *
 *  * Sort the final object's keys, so that the properties appear in
 *    alphabetical order.
 */

// IMPORTS
// const assertEqual = require("./assertEqual.js");



// `countLetters()` takes a string (intended to be a sentence), and returns a
// count of all the letters, and only the letters, in that string.
const countLetters = function(sentenceString) {

  let sentenceCountObject = {};

  // Convert the string to lower case to avoid dealing with upper and lower
  // cases.
  const lowercasedString = sentenceString.toLowerCase();


  // Iterate over the `lowercasedString` string. (Note the `for-of` loop on a
  // string.)
  for (const char of lowercasedString) {
    
    // If the current character is a space, comma or fullstop, skip over it and
    // move on to the next element.
    if ((char === " ") || (char === ",") || (char === ".")) {
      continue;

    // If it is an alphanumerical character, prepare to add it to
    // `sentenceCountObject`.
    } else {

      // Check if the character has already been added to `sentenceCountObject`.
      // If so, increment the the value of the property by 1.
      if (Object.prototype.hasOwnProperty.call(sentenceCountObject, char) === true) {

        sentenceCountObject[char]++;

      // If the character does not exist as a property of `sentenceCountObject`,
      // add it and set its value to 1.
      } else {
        sentenceCountObject[char] = 1;
      }

    }

  }


  // The keys in `sentenceCountObject` will appear in the order they appeared
  // in the string, which makes it difficult to read. `objectKeySorter()` sorts
  // the object's properties into alphabetical order.
  return objectKeySorter(sentenceCountObject);
};


// This function sorts all properties in an object into alphabetical order.
const objectKeySorter = function(sentenceCountObject) {

  // `Object.keys` accesses all the keys and `sort()` sorts them in alphabetical
  // order and returns an array. The array now contains a list of the object's
  // keys in alphabetical order.
  const sortedKeysArray = Object.keys(sentenceCountObject).sort();


  // The `reduce()` method creates a temporary object to store its results.
  // Note that the array is in alphabetical order; `reduce()` iterates over it
  // in this order, extracts the value of each key, and stores them both in the
  // temporary object. At the end, it returns an object with its keys in
  // alphabetically sorted order.
  const sortedKeysObject = sortedKeysArray.reduce((tempObject, key) => {
    tempObject[key] = sentenceCountObject[key];
    return tempObject;
  }, {});

  return sortedKeysObject;
};


// TEST CASES
const resultObject1 = countLetters("The greatest glory in living lies not in never falling, but in rising every time we fall.");
console.log(resultObject1);

// Expected Result:
// { a: 3, b: 1, e: 10, f: 2, g: 5, h: 1, i: 10, l: 7, m: 1,
//   n: 8, o: 2, r: 5,  s: 3, t: 6, u: 1, v: 3,  w: 1, y: 2 }


// EXPORTS
module.exports = countLetters;


