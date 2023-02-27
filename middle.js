// CHALLENGE: Implement middle() which will take in an array and return the
// middle-most element(s) of the given array.


// This function takes an array, calculates the middle element(s) and returns
// an array containing them.
let middle = function(array) {

  // An empty array to hold the middle elements.
  let middleArray = [];


  // If an array has 0, 1, or 2 elements, there is NO possible middle.
  // Return an empty array.
  if (array.length <= 2) {
    return middleArray;
  
  // If an array size is greater than 2 and has an odd number of elements, find
  // and return the middle element.
  } else if ((array.length > 2) && (array.length % 2 !== 0)) {

    // Calculate the middle element, round it down, and...
    let middleElement = Math.floor((array.length / 2));
    // push this element onto `middleArray`.
    middleArray.push(array[middleElement]);

  // If an array size is greater than 2 and has an even number of elements, find
  // and return the middle two elements.
  } else if ((array.length > 2) && (array.length % 2 === 0)) {

    // One middle element can be found by taking the average of the length of
    // the array...
    let middleElement2 = (array.length / 2);
    // ... the other can be found one index before it.
    let middleElement1 = (middleElement2 - 1);

    // Push these elements into `middleArray`.
    middleArray.push(array[middleElement1], array[middleElement2]);
  }

  // Print `middleArray` to console.
  console.log(middleArray);
  return middleArray;
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
let result1 = middle([]);                                       // => [];
assertArraysEqual(result1, []);

let result2 = middle(["Supercalifragilisticexpialidocious"]);   // => [];
assertArraysEqual(result2, []);

let result3 = middle(["Higgs", "Boson"]);                       // => [];
assertArraysEqual(result3, []);

let result4 = middle([1, 2, 3, 4]);                             // => [2, 3]
assertArraysEqual(result4, [2, 3]);

let result5 = middle(["Fire", "tang", 3, "zulu", 23.13]);       // => 3
assertArraysEqual(result5, [3]);