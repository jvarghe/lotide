/* CHALLENGES
 *
 * As a continuation of the previous exercise, it's time to create our
 * `assertObjectsEqual()` function which will help us easily test functions
 * that return objects. Assuming that you've already completed the previous
 * exercise of implementing `eqObjects`, most of the leg work required to
 * implement the assertion function is already done.
 */


// IMPORTS
const eqObjects = require("./eqObjects.js");


// ASSERTOBJECTSEQUAL() FUNCTION
// This function takes in two objects and compares their members to determine
// if they are identical. It will return a boolean explaining the result.
const assertObjectsEqual = function(object1, object2) {

  // Add the `Util` library to the function, so we can use one of its functions.
  const inspect = require('util').inspect;

  // Call eqObjects() to determine if the objects are equal.
  const objectsEqualOrNot = eqObjects(object1, object2);
  
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


// EXPORTS
module.exports = assertObjectsEqual;