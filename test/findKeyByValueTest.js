// MANUAL TESTS

// IMPORTS
// const assertEqual = require("./assertEqual.js");


// TEST CASES
// const bestTVShowsByGenre = {
//   sciFi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama: "The Wire"
// };


// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
// assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sciFi");



// MOCHA & CHAI TESTS
const assert = require("chai").assert;
const findKeyByValue = require("../findKeyByValue.js");


// This file tests `findKeyByValue.js` to check for bugs.
describe("#findKeyByValue", () => {

  // This object will be used by all the tests.
  const bestTVShowsByGenre = {
    sciFi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama: "The Wire"
  };


  it("The Wire belongs to this genre: drama", () => {
    const expectedOutput = "drama";
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), expectedOutput);
  });


  it("That '70s Show belongs to this genre: undefined (N/A in object)", () => {
    const expectedOutput = undefined;
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), expectedOutput);
  });


  it("Brooklyn Nine-Nine belongs to this genre: comedy", () => {
    const expectedOutput = "comedy";
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), expectedOutput);
  });


  it("The Expanse belongs to this genre: sciFi", () => {
    const expectedOutput = "sciFi";
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), expectedOutput);
  });

});