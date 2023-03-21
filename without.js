// CHALLENGE: Implement without() which will return a subset of a given array,
// removing unwanted elements.



// IMPORTS
const assertArraysEqual = require("./assertArraysEqual.js");
const eqArrays = require("./eqArrays.js");


// WITHOUT() FUNCTION
//
// This function takes two array arguments for parameters `source` and
// `itemsToRemove`. It returns a new array, having stripped all unwanted items
// from the source array.
const without = function(source, itemsToRemove) {

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



// TEST CASES
const result1 = without([1, 2, 3], [1]);                 // => [2, 3]
assertArraysEqual(result1, [2, 3]);

const result2 = without(["1", "2", "3"], [1, 2, "3"]);   // => ["1", "2"]
assertArraysEqual(result2, ["1", "2"]);

// Test if the without() can handle `source` and `itemsToRemove` being identical.
const result3 = without([15, 15, 15], [15, 15, 15]);     // => []
assertArraysEqual(result3, []);

// Test strings with similar, but not identical casing.
const result4 = without(["lighthouselabs", "rocks!"],
  ["Lighthouselabs", "rocks!"]);   // => lighthouselabs
assertArraysEqual(result4, ["lighthouselabs"]);



// EXPORTS
module.exports = without;