// This function takes an array, extracts from it the "tail", i.e. all elements
// except the head or first one. It returns this shrunken array.
const tail = function(array) {
  let arrayTail = array.slice(1);
  return arrayTail;
};


// Checks if the function does its job correctly.
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


// TEST CASES
// Test if the original array is being modified:
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // No need to capture the return value since we're not checking it.
assertEqual(words.length, 3); // The original array should still have 3 elements.

// Test an empty array:
let empty = [];
tail(empty);
assertEqual(empty.length, 0);

// Test an array with only one element:
let oneElement = ["giant"];
tail(oneElement);
// array.length - 1 = 0; Therefore, we expect the return value to be 0.
assertEqual(oneElement.length - 1, 0);