// MANUAL TESTS
//
// IMPORTS FOR TESTS
// const assertEqual = require("../assertEqual.js");
// const eqArrays = require("../eqArrays.js");


// ASSERTEQUAL TEST CODE FOR `eqArrays.js`
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);             // => Should PASS
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);            // => Should FAIL
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => Should PASS
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);  // => Should FAIL


// MOCHA & CHAI TESTS
const assert = require("chai").assert;
const eqArrays = require("../eqArrays.js");


// This file tests `eqArrays.js` to check for bugs.
describe("#eqArrays", () => {

  it("Equality check for array#1: [1, 2, 3] and array#2: [1, 2, 3], should return TRUE", () => {
    const array1 = [1, 2, 3];
    const array2 = [1, 2, 3];

    assert.strictEqual(eqArrays(array1, array2), true);
  });


  it("Equality check for array#1: [1, 2, 3] and array#2: [3, 2, 1], should return FALSE", () => {
    const array1 = [1, 2, 3];
    const array2 = [3, 2, 1];

    assert.strictEqual(eqArrays(array1, array2), false);
  });


  it("Equality check for two arrays of strings should return TRUE", () => {
    const array1 = ["1", "2", "3"];
    const array2 = ["1", "2", "3"];

    assert.strictEqual(eqArrays(array1, array2), true);
  });


  it("Equality check for an string array & and mixed string-number array should return FALSE", () => {
    const array1 = ["1", "2", "3"];
    const array2 = ["1", "2", 3];

    assert.strictEqual(eqArrays(array1, array2), false);
  });

});

