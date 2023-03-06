/* CHALLENGE: 
 * 
 * Implement the function `findKeyByValue()` which takes in an object and a 
 * value. It should scan the object and return the first key which contains 
 * the given value. If no key with that given value is found, then it should 
 * return `undefined`.
 */



// ASSERTEQUAL() Function Implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


// This function takes in an object and a value. It will search the object's
// keys's values for this value. If finds a value, it simply returns the name
// of the first key where it finds this value. If it does not, it returns 
// undefined.
const findKeyByValue = function(objectToScan, valueToScanFor) {

};



// TEST CASES: 
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);