/* CHALLENGE
 *
 * Not too long ago, we implemented a `findKeyByValue()` function in Lotide. It
 * was similar to, but more limited than, `findKey()` from Lodash. Now that we
 * know about callbacks, let's make a more complex version of this in a similar
 * way to what Lodash has.
 *
 * Here is Lodash's documentation for its `findKey()` function:
 * https://lodash.com/docs/4.17.11#findKey
 *
 * NOTE: Lodash's example code for `findKey()` shows us that instead of just
 * supporting callback functions, it can support "iteratee shorthand" using
 * objects and arrays. We can safely ignore these examples since our function
 * will be simpler and not need to support this.
 *
 * Implement the function `findKey()` which takes in an object and a callback.
 * It should scan the object and return the first key for which the callback
 * returns a truthy value. If no key is found, then it should return
 * `undefined`.
 *
 * Tip: Consult `findKeyByValue.js`.
 */


// IMPORTS 
const assertEqual = require("./assertEqual.js");


// FINDKEY()
// This function takes an object and a callback function. It should scan the
// object and return the first key for which the callback returns a truthy
// value. If no key is found, then it should return `undefined`.
const findKey = function(objectToScan, callBack) {
  
  // Create an variable to hold the first found key value:
  let keyName = undefined;

  // Iterate over the object...
  for (const key in objectToScan) {
    
    // ... and call the predicate function and pass in the element value. If
    // the callback returns a truthy value...
    if (callBack(objectToScan[key]) === true) {

      // ...record the key and stop iteration by breaking out of the loop.
      keyName = key;
      break;
    }

  }

  return keyName;
};



// TEST CASES
// Test Case 1:
const object1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};
const predicate1 = x => x.stars === 2;

assertEqual(findKey(object1, predicate1), "noma");


// EXPORTS
module.exports = findKey;