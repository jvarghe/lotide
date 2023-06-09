/* CHALLENGE
 *
 * While working more with objects recently, we've created functions that
 * return objects. When writing out assertions to test the return value of
 * these functions, we quickly realized that our assertEqual can't be used
 * directly. assertEqual can really only be used for checking primitive return
 * types.
 *
 * You may also recall that we had run into a similar problem with comparing
 * array data. To solve this we implemented `eqArrays()` and then subsequently
 * implemented `assertArraysEqual()` into our Lotide project. It's time to do
 * the same for objects now, starting with `eqObjects()`. This function
 * implementation will require us to further practice problem solving through
 * object key iteration again. Fun times!
 *
 * Implement the definition for function `eqObjects()` which will take in two
 * objects and returns `true` or `false`, based on a perfect match. Ensure that
 * eqObjects() can check for keys which are arrays. However, if keys are
 * objects, leave that for a future exercise.
 */


// IMPORTS
const assertEqual = require("./assertEqual.js");
const eqArrays = require("./eqArrays.js");


// EQOBJECTS() FUNCTION [DAVID HALPIN'S SOLUTION]
// This function takes two objects and compares all their keys to see if they
// are equal. Based on the result, it returns a boolean value.
const eqObj1 = function(object1, object2) {

  // GUARD CLAUSE
  // Transform object keys into arrays, so you can count the number of keys.
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);

  // If the arrays have differing lengths, the objects are not the same.
  if (object1Keys.length !== object2Keys.length) {
    return false;
  }

  // Iterate over the keys in object1 and check if they're objects, arrays or
  // primitives.
  for (const key of object1Keys) {


    // ARRAY: Test if both keys are arrays....
    if ((object1[key] instanceof Array) && (object2[key] instanceof Array)) {

      // If so, compare all the elements in the key to see if they're the same.
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    }

    // OBJECTS
    // Test if both keys are objects:
    if ((typeof object1[key] === "object") && (typeof object2[key] === "object")) {

      // If so, recursively call `eqObj1` and compare all the sub-elements in
      // the key to see if they're the same.
      return eqObj1(object1[key], object2[key]);
    }

    // PRIMITIVES
    // Test if both keys are the same primitive value
    if (object1[key] !== object2[key]) {
      return false;
    }

  }

  // If all the checks and comparisons were false, then the two elements must
  // be equal, so return `true`.
  return true;

};



// TEST CASES
// Test 1: Compare two identical objects:
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
// Returns `True`.
assertEqual(eqObj1(shirtObject, anotherShirtObject), true);

// Test 2: Compare two objects with different lengths (Basically two different objects):
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
// Returns `False`.
assertEqual(eqObj1(shirtObject, longSleeveShirtObject), false);


// Test 3: Compare objects with array keys:
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
// Returns `True`.
assertEqual(eqObj1(multiColorShirtObject, anotherMultiColorShirtObject), true);

// Test 4: Compare objects with array keys of different lengths (Basically two different objects):
const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
// Returns `False`.
assertEqual(eqObj1(multiColorShirtObject, longSleeveMultiColorShirtObject), false);



// Recursive Test Cases

// Test 5:
assertEqual(eqObj1({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
// Returns `True`.

// Test 6:
assertEqual(eqObj1({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
// Returns `False`.

// Test 7:
assertEqual(eqObj1({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
// Returns `False`.


// EXPORTS
// module.exports = eqObjects;