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
 * objects and returns `true` or `false`, based on a perfect match.
 */





// This function takes two objects and compares all their keys to see if they
// are equal. Based on the result, it returns a boolean value.
const eqObjects = function(object1, object2) {
  let areObjectsEqual;

  if () {
    
  }

  return areObjectsEqual;
};


// ASSERTEQUAL() Function Implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


// TEST CASES
const shirtObject = { color: "red", size: "medium"};
const anotherShirtObject = { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);        // => Returns `True`.


const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);    // => Returns `False`.