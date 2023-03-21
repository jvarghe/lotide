// MANUAL TESTS
//
// // IMPORTS FOR TESTS
// const tail = require("../tail.js");
// const assertEqual = require("../assertEqual.js");


// // TEST CODE FOR `tail.js`
// // Test if the original array is being modified:
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // No need to capture the return value since we're not checking it.
// assertEqual(words.length, 3); // The original array should still have 3 elements.

// // Test an empty array:
// let empty = [];
// tail(empty);
// assertEqual(empty.length, 0);

// // Test an array with only one element:
// let oneElement = ["giant"];
// tail(oneElement);
// // array.length - 1 = 0; Therefore, we expect the return value to be 0.
// assertEqual(oneElement.length - 1, 0);


// MOCHA & CHAI TESTS
const tail = require("../tail.js");
const assert = require("chai").assert;

describe("#tail", () => {

  // Tests the return of an empty array.
  it("This test should return `[]`", () => {
    assert.deepEqual(tail([]), []);
  });

  // Tests the return of an array with only one element.
  it("This test should return `[]`.", () => {
    assert.deepEqual(tail(["giant"]), []);
  });

});