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


// ASSERTEQUAL() Function Implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


// FINDKEY()
// This function takes an object and a callback function. It should scan the 
// object and return the first key for which the callback returns a truthy 
// value. If no key is found, then it should return `undefined`.
const findKey = function(objectToScan, callBack) {

};


// TEST CASES