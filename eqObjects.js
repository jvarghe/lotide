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

      // ... check if `object2` has a key listed in `object1`. 
      if (Object.hasOwnProperty.call(object2, key)) {
        
        // If so, check if the two values match. If they do, set 
        // `areObjectsEqual` to `true`, and move on to the next key.
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