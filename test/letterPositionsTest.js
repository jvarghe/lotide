// MANUAL TESTS

// IMPORTS FOR MANUAL TESTS
// const assertArraysEqual = require("./assertArraysEqual.js");

// TEST CASES
// Test cases for the word "hello":
// assertArraysEqual(letterPositions("hello").h, [0]);
// assertArraysEqual(letterPositions("hello").e, [1]);
// assertArraysEqual(letterPositions("hello").l, [2, 3]);
// assertArraysEqual(letterPositions("hello").o, [4]);

// // Testing a full phrase.
// const phrase1 = "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.";
// assertArraysEqual(letterPositions(phrase1).w, [7, 18, 20, 61]);



// MOCHA & CHAI TESTS
const assert = require("chai").assert;
const letterPositions = require("../letterPositions.js");


// This file tests `letterPositions.js` to check for bugs.
describe("#letterPositions", () => {

  const phrase1 = "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.";


  it("The letter \`w\` occurs at these indices: [7, 18, 20, 61].", () => {
    // Letter indices
    const expectedOutput = [7, 18, 20, 61];
    assert.deepEqual(letterPositions(phrase1).w, expectedOutput);
  });


  it("The letter \`i\` occurs at these indices: [ 0, 34, 74, 77, 82, 93 ].", () => {
    // Letter indices
    const expectedOutput = [ 0, 34, 74, 77, 82, 93 ];
    assert.deepEqual(letterPositions(phrase1).i, expectedOutput);
  });


  it("The letter \`k\` occurs at these indices: [ 15, 35, 41, 54 ].", () => {
    // Letter indices
    const expectedOutput = [ 15, 35, 41, 54 ];
    assert.deepEqual(letterPositions(phrase1).k, expectedOutput);
  });


  // This test uses a different phrase:
  it("The letter \`a\` occurs at these indices: [ 6, 11, 24 ].", () => {
    // Letter indices
    const expectedOutput = [ 6, 11, 24 ];
    assert.deepEqual(letterPositions("Supercalifragilisticexpialidocious").a, expectedOutput);
  });

});