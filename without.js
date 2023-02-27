// CHALLENGE: Implement without() which will return a subset of a given array,
// removing unwanted elements.


// WITHOUT() FUNCTION
//
// This function takes two array arguments for parameters `source` and
// `itemsToRemove`. It returns a new array, having stripped all unwanted items
// from the source array.
let without = function(source, itemsToRemove) {

  // Create new array to store only those elements from source that are not
  // present in the itemsToRemove array.
  let finalArray = [];

  // A variable to track whether an item to remove has been found.
  let undesiredItemFound = null;


  // If the two arrays are equal, then none of the items from the `source` array
  // will make it into the `finalArray`. If the arrays are not equal...
  if (eqArrays(source, itemsToRemove) === true) {
    return finalArray;
  } else {

    // Iterate over the `source` array, one element at a time...
    for (let i = 0; (i < source.length); i++) {

      // Re/set the `undesiredItemFound` value to `false` every time the outer
      // loop starts.
      undesiredItemFound = false;

      // ...and compare each element to all the elements in `itemsToRemove`.
      for (let j = 0; (j < itemsToRemove.length); j++) {


        // If the selected `source` element is the same as the selected
        // `itemsToRemove` element, then you've found an undesirable element.
        // It cannot be added to the finalArray. Set `undesiredItemFound` to
        // `true` and break out of the inner loop.
        if (source[i] === itemsToRemove[j]) {
          undesiredItemFound = true;
          break;
        }

      }


      // After comparing a `source` element to all `itemsToRemove` elements,
      // if none of the elements were banned elements, add the `source` element
      // to the `finalArray`.
      if (undesiredItemFound === false) {
        finalArray.push(source[i]);
      }
    }
  }
  

  // After iterating over both arrays, the `finalArray` should be complete.
  return finalArray;
};



// ASSERTARRAYSEQUAL() FUNCTION
//
// This function calls eqArrays() to determine if two arrays are equal and
// prints a message to screen.
const assertArraysEqual = function(array1, array2) {

  // Call eqArrays() to determine if the arrays are equal.
  let arraysEqualOrNot = eqArrays(array1, array2);

  if (arraysEqualOrNot === true) {
    console.log("✅✅✅ Assertion Passed: The two arrays are equal!");
  } else {
    console.log("🛑🛑🛑 Assertion Failed: The two arrays are NOT equal!");
  }

};



// EQARRAYS FUNCTION
//
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



// TEST CASES
let result1 = without([1, 2, 3], [1]);                 // => [2, 3]
assertArraysEqual(result1, [2, 3]);

let result2 = without(["1", "2", "3"], [1, 2, "3"]);   // => ["1", "2"]
assertArraysEqual(result2, ["1", "2"]);

// Test if the without() can handle `source` and `itemsToRemove` being identical.
let result3 = without([15, 15, 15], [15, 15, 15]);     // => []
assertArraysEqual(result3, []);

// Test strings with similar, but not identical casing.
let result4 = without(["lighthouselabs", "rocks!"],
  ["Lighthouselabs", "rocks!"]);   // => lighthouselabs
assertArraysEqual(result4, ["lighthouselabs"]);