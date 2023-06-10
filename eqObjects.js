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
const eqArrays = require("./eqArrays.js");


// EQOBJECTS() FUNCTION [INSTRUCTOR DAVID HALPIN'S SOLUTION]
// This function takes two objects and compares all their keys to see if they
// are equal. Based on the result, it returns a boolean value.
// const eqObj1 = function(object1, object2) {

//   // GUARD CLAUSE
//   // Transform object keys into arrays, so you can count the number of keys.
//   const object1Keys = Object.keys(object1);
//   const object2Keys = Object.keys(object2);

//   // If the arrays have differing lengths, the objects are not the same.
//   if (object1Keys.length !== object2Keys.length) {
//     return false;
//   }

//   // Iterate over the keys in object1 and check if they're objects, arrays or
//   // primitives.
//   for (const key of object1Keys) {


//     // ARRAY: Test if both keys are arrays....
//     if ((object1[key] instanceof Array) && (object2[key] instanceof Array)) {

//       // If so, compare all the elements in the key to see if they're the same.
//       if (!eqArrays(object1[key], object2[key])) {
//         return false;
//       }
//     }

//     // OBJECTS
//     // Test if both keys are objects:
//     if ((typeof object1[key] === "object") && (typeof object2[key] === "object")) {

//       // If so, recursively call `eqObj1` and compare all the sub-elements in
//       // the key to see if they're the same.
//       return eqObj1(object1[key], object2[key]);
//     }

//     // PRIMITIVES
//     // Test if both keys are the same primitive value
//     if (object1[key] !== object2[key]) {
//       return false;
//     }

//   }

//   // If all the checks and comparisons were false, then the two elements must
//   // be equal, so return `true`.
//   return true;

// };




/* PSEUDOCODE
 *
 * Test objects:
 *
 *   const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
 *   const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
 *   // Returns `True`.
 *
 *   { a: { z: 1 }, b: 2 },
 *   { a: { z: 1 }, b: 2 }
 *
 *  * Declare an element to track the equality of two objects.
 *  *
 *  * Shallow Equality Test: Check if the two objects have the same number
 *    of elements so you can quickly eliminate them.
 *
 *  NEEDS MORE WORK; IT'S CLEAR YOU SUCK AT DEVELOPING PSEUDOCODE.
 */


// MY SOLUTION: RECURSIVE IMPLEMENTATION
// This function takes two objects and compares all their keys to see if they
// are equal. Based on the result, it returns a boolean value.
const eqObjects = function(object1, object2) {

  // Create `areObjectsEqual`. Don't set a value; the value will must be
  // determined by the results of comparison.
  let areObjectsEqual;

  // GUARD CLAUSES
  // 1. ARE BOTH ELEMENTS OBJECTS?
  // Checks if both elements are objects. [Why does this work? During recursive
  // calls, when primitive values show up, shouldn't primitives fail this
  // check?]
  if ((typeof object1 === "object") && (typeof object2 === "object") !== true) {
    return areObjectsEqual = false;
  }

  // 2. QUICK EQUALITY CHECK
  // Compare the length of the objects, which will quickly tell us if the two
  // objects have the same number of keys. As objects don't have a .`length`
  // property, convert them into arrays. This will result in an array of their
  // keys being created. Compare the lengths of the two arrays:
  areObjectsEqual = shallowEqualityTest(object1, object2);

  if (areObjectsEqual !== true) {
    return areObjectsEqual;


    // ELEMENT COMPARISON
    // If the objects have the same number of keys, move to the next step:
    // compare the values of the keys to see if they are the same.
  } else {

    // Iterate over the keys in `object1`...
    for (const key in object1) {


      // CASE 1: IF THE ELEMENT IS A PRIMITIVE TYPE
      // Checks if the current value is NOT an object (thus making it a
      // primitive). This is done by passing it into the `Object` type and
      // creating an object with it and comparing it to the original element
      // to check if they're of the same type.
      if (object1[key] !== Object(object1[key])) {
        areObjectsEqual = primitiveComparer(object1[key], object2[key]);

        if (areObjectsEqual !== true) {
          return areObjectsEqual;
        }

        // COMPARING OBJECTS
      } else {

        // CASE 2: IF THE ELEMENT IS AN ARRAY (WHICH IS AN OBJECT)
        // Alternative check: `if (Array.isArray(object1[key]) === true)`. Don't
        // use `typeof` which can't differentiate between objects; It will tell
        // you that every object is an object.
        if ((object1[key] instanceof Array) === true) {
          areObjectsEqual = arrayComparer(object1[key], object2[key]);

          if (areObjectsEqual !== true) {
            return areObjectsEqual;
          }


          // CASE 3: IF THE ELEMENT IS AN OBJECT OTHER THAN AN ARRAY
        } else {

          // DEEP EQUALITY CHECK FOR OBJECTS
          // If the element is neither a primitive, nor an array, it must be an
          // object with properties and methods. The next step is to compare
          // all the elements for equality.
          //
          // Iterate over the keys in the first object, and check each element.
          for (const key in object1) {

            // Check for two things:

            // GUARD CLAUSE
            // If object2 does NOT include the key, the objects are NOT equal.
            if (Object.prototype.hasOwnProperty.call(object1, key) !== true) {
              return areObjectsEqual = false;
            }

            // RECURSIVE CASE
            // If the base case check passes, i.e., the objects have the same
            // keys, the next step is to compare their values. Recursively call
            // `eqObjects` to test if the objects are equal.
            areObjectsEqual = eqObjects(object1[key], object2[key]);
            return areObjectsEqual;

          }


          // If all the comparisons have been completed, but none of the
          // checks have triggered the `false` value, then the two objects
          // must be equal.
          return areObjectsEqual = true;
        }

      }

    }
  }

  return areObjectsEqual;
};


// This function simply does a quick check to see if two objects have the same
// number of keys.
const shallowEqualityTest = function(object1, object2) {

  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);

  if (object1Keys.length !== object2Keys.length) {
    return false;
  } else {
    return true;
  }

};


// This functions tests two primitives to see if they're equal.
const primitiveComparer = function(element1, element2) {

  let arePrimitivesEqual = null;

  // Check if the `key` property in `object1` has the same value as the
  // the `key` property in `object2`. If they do, set `arePrimitivesEqual`
  // to `true`, and return this value.
  if (element1 === element2) {
    return arePrimitivesEqual = true;

    // If the key values don't match, this means the two objects are
    // NOT equal. Set `arePrimitivesEqual` to `false`, return this value and
    // exit the function.
  } else {
    arePrimitivesEqual = false;
  }

  return arePrimitivesEqual;
};


// This function compares two arrays (by calling `eqObjects()`) to see if all
// their elements are the same.
const arrayComparer = function(array1, array2) {

  let areArraysEqual = null;

  // ...Call `eqArrays()` to check if the two arrays are equal.
  if (eqArrays(array1, array2) === true) {

    // If they are equal, set `areArraysEqual` to `true`, and return.
    return areArraysEqual = true;

    // If the two arrays aren't equal, this means the two objects are
    // NOT equal. Set `areArraysEqual` to `false`, return this value and
    // exit the function.
  } else {
    areArraysEqual = false;
  }

  return areArraysEqual;
};



// EXPORTS
module.exports = eqObjects;