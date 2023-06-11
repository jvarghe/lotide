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



// Gary Jipp's Recommended Solution
// GARY'S SOLUTION IS SO ELEGANT! WHY DOES MY SOLUTION LOOK LIKE CTHULU CAME UP
// WITH IT?!?

// This function takes a string, reads and the logs the indices of all the
// characters.
// const letterPositions = function(str) {
//   const result = {};

//   // Iterate over the string.
//   for (const i in str) {

//   // Select a letter from the string.
//     const letter = str[i];

//     // If the `letter` key does NOT exist in the `result` object...
//     if (!result[letter]) {
//
//       // ...add the key as an empty property.
//       result[letter] = [];
//     }

//     // Otherwise, push the index of the current letter into `result`.
//     result[letter].push(Number(i));
//   }

//   return result;
// };



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
  // console.log(LCSentence);


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


// NOTE: Cannot find way to import `objectKeySorter()` from `countLetters.js`.
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



// EXPORTS
module.exports = letterPositions;