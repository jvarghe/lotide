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


// EQOBJECTS() FUNCTION
// This function takes two objects and compares all their keys to see if they
// are equal. Based on the result, it returns a boolean value.
const eqObjects = function(object1, object2) {

  // Create `areObjectsEqual`. Don't set a value; the value will must be
  // determined by the results of comparison.
  let areObjectsEqual;


  // Compare the length of the objects, which will quickly tell us if the two
  // objects have the same number of keys. As objects don't have a .`length`
  // property, convert them into arrays. This will result in an array of their
  // keys being created. Compare the lengths of the two arrays:
  const object1Array = Object.keys(object1);
  const object2Array = Object.keys(object2);

  if (object1Array.length !== object2Array.length) {
    return areObjectsEqual = false;

  // If the objects have the same number of keys, move to the next step: compare
  // the values of the keys to see if they are the same
  } else {

    // Iterate over the keys in `object1`...
    for (const key in object1) {

      // ... check if `object2` has a key listed in `object1`. If so, the two
      // keys must be compared. But a key could be a primitive, an array or 
      // an object (including functions). We will ignore most objects in this 
      // project, but we must compare keys if they are primitives or arrays.
      if (Object.hasOwnProperty.call(object2, key)) {
        
        // CHECK 1: IF A KEY IS AN ARRAY
        // Check if `key` in `object1` is an array. If so...
        if (Array.isArray(object1[key]) === true) {

          // ...Call `eqArrays()` to check if the two arrays are equal.
          if (eqArrays(object1[key], object2[key]) === true) {

            // If they are equal, set `areObjectsEqual` to `true`, and move on
            // to the next key.
            areObjectsEqual = true;
            continue;

          // If the two arrays aren't equal, this means the two objects are
          // NOT equal. Set `areObjectsEqual` to `false`, return this value and
          // exit the function.
          } else {
            return areObjectsEqual = false;
          }
        }


        // CHECK 2: IF A KEY IS A PRIMITIVE
        // Check if the `key` property in `object1` has the same value as the
        // the `key` property in `object2`. If they do, set `areObjectsEqual`
        // to `true`, and move on to the next key.
        if (object1[key] === object2[key]) {
          areObjectsEqual = true;
          continue;

        // If the key values don't match, this means the two objects are
        // NOT equal. Set `areObjectsEqual` to `false`, return this value and
        // exit the function.
        } else {
          return areObjectsEqual = false;
        }
      }
    }
  }

  console.log(areObjectsEqual);
  return areObjectsEqual;
};


// EXPORTS
module.exports = eqObjects;


// TEST CASES
// Compare two identical objects:
const shirtObject = { color: "red", size: "medium"};
const anotherShirtObject = { size: "medium", color: "red" };
// Returns `True`.
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

// Compare two objects with different lengths (Basically two different objects):
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
// Returns `False`.
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);


// Compare objects with array keys:
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
// Returns `True`.
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);

// Compare objects with array keys of different lengths (Basically two different objects):
const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
// Returns `False`.
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);