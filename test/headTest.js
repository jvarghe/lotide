// MANUAL TESTS
//
// // IMPORTS FOR TESTS
// const assertEqual = require("../assertEqual.js");
// const head = require("../head.js");


// // ASSERTEQUAL TEST CODE FOR `head.js`
// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

// assertEqual(head(["tom", "dick", "harry"]), "tom");
// assertEqual(head([28349, 183, 9834.86, 1]), 28349);
// assertEqual(head(["2.34", 284, "cats"]), "2.34");

// assertEqual(head(["Supercalifragilisticexpialidocious"]),"Supercalifragilisticexpialidocious");
// assertEqual(head([]), undefined);


// MOCHA & CHAI TESTS
const assert = require("chai").assert;
const head = require("../head.js");


// Uses Mocha to define test frameworks using `describe` and `it` functions.
// Uses `Chai's` assertion functions to describe the exact test we want to run.
describe("#head", () => {

  // This test checks to see if the first element `1` is returned:
  it("This test should return `1` for input `[1, 2, 3]`", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  // This test should return `5` to check whether head correctly returns the
  // only element in a single-element array.
  it("This test should return `5` for [\"5\"]", () => {
    assert.strictEqual(head(["5"]), "5");
  });
  
});