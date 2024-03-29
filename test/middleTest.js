// MANUAL TESTS
//
// // IMPORTS FOR TESTS
// const middle = require("../middle.js");
// const assertArraysEqual = require("../assertArraysEqual.js");


// // TEST CASES

// // Testing an empty array:
// let result1 = middle([]);                                       // => [];
// assertArraysEqual(result1, []);

// // Testing an array with a single element:
// let result2 = middle(["Supercalifragilisticexpialidocious"]);   // => [];
// assertArraysEqual(result2, []);

// // Testing an array with two elements:
// let result3 = middle(["Higgs", "Boson"]);                       // => [];
// assertArraysEqual(result3, []);

// // Testing an array with four elements:
// let result4 = middle([1, 2, 3, 4]);                             // => [2, 3]
// assertArraysEqual(result4, [2, 3]);

// // Testing an array with mixed elements:
// let result5 = middle(["Fire", "tang", 3, "zulu", 23.13]);       // => 3
// assertArraysEqual(result5, [3]);


// MOCHA & CHAI TESTS
const middle = require("../middle.js");
const assert = require("chai").assert;


describe("#middle", () => {

  // Tests an an empty array:
  it("This test should return `[]`", () => {
    assert.deepEqual(middle([]), []);
  });

  // Tests an array with a single element:
  it("This test should return `[]`", () => {
    assert.deepEqual(middle([]), []);
  });
  
  // Tests an array with four elements:
  it("This test should return [2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  // Tests an array with mixed elements:
  it("This test should return `[3]`", () => {
    assert.deepEqual(middle(["Fire", "tang", 3, "zulu", 23.13]), [3]);
  });
  
});