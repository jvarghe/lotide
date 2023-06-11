// MANUAL TESTS

// IMPORTS
// const assertArraysEqual = require("./assertArraysEqual.js");


// TEST CASES
// const unflattenedArray1 = flatten([1, 2, [3, 4], 5, [6]]);
// assertArraysEqual(unflattenedArray1, [1, 2, 3, 4, 5, 6]);
// // Expected Return: [1, 2, 3, 4, 5, 6]

// const unflattenedArray2 = flatten([["Jack", "and", "Jill"], "went", "up", ["the"], "hill"]);
// assertArraysEqual(unflattenedArray2, ["Jack", "and", "Jill", "went", "up", "the", "hill"]);
// // Expected Return: ["Jack", "and", "Jill", "went", "up", "the", "hill"]



// MOCHA & CHAI TESTS
const assert = require("chai").assert;
const flatten = require("../flatten.js");


// This file tests `flatten.js` to check for bugs.
describe("#flatten", () => {

  it("The Flattened Array Should be: [1, 2, 3, 4, 5, 6]", () => {
    const unflattenedArray = [1, 2, [3, 4], 5, [6]];
    const flattenedArray = [1, 2, 3, 4, 5, 6];
    assert.deepEqual(flatten(unflattenedArray), flattenedArray);
  });


  it("The Flattened Array Should be: [\"Jack\", \"and\", \"Jill\", \"went\", \"up\", \"the\", \"hill\"]", () => {
    const unflattenedArray = [[ "Jack", "and", "Jill"], "went", "up", ["the"], "hill"];
    const flattenedArray = ["Jack", "and", "Jill", "went", "up", "the", "hill"];
    assert.deepEqual(flatten(unflattenedArray), flattenedArray);
  });

});
