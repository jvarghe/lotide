/* CHALLENGES
 *
 * As a continuation of the previous exercise, it's time to create our
 * `assertObjectsEqual()` function which will help us easily test functions
 * that return objects. Assuming that you've already completed the previous
 * exercise of implementing `eqObjects`, most of the leg work required to
 * implement the assertion function is already done.
 */


// EQARRAYS() FUNCTION
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



// ASSERTOBJECTSEQUAL() FUNCTION
// This function takes in two objects and compares their members to determine
// if they are identical. It will return a boolean explaining the result.
const assertObjectsEqual = function(object1, object2) {

  // Add the `Util` library to the function, so we can use one of its functions.
  const inspect = require('util').inspect;

  // Call eqObjects() to determine if the objects are equal.
  let objectsEqualOrNot = eqObjects(object1, object2);
  
  // Check the status of `eqObjects`:
  if (objectsEqualOrNot === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(object1)} ===  ${inspect(object2)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(object1)} !==  ${inspect(object2)}`);
  }
};



// TEST CASES
// Compare two identical objects:
const shirtObject = { color: "red", size: "medium"};
const anotherShirtObject = { size: "medium", color: "red" };
// Should return `true`.
assertObjectsEqual(shirtObject, anotherShirtObject);

// Compare two different objects:
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
// Should return `false`.
assertObjectsEqual(multiColorShirtObject, longSleeveMultiColorShirtObject);