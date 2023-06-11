// MANUAL TESTS

// IMPORTS FOR MANUAL TESTS
// const assertEqual = require("./assertEqual.js");

// An array containing first names.
// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];


// // A the result of a call to countOnly(), passing in an object.
// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });


// // TEST CASES:
// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);



// MOCHA & CHAI TESTS
const assert = require("chai").assert;
const countOnly = require("../countOnly.js");


// This file tests `countOnly.js` to check for bugs.
describe("#countOnly", () => {

  // This array will be used by all the tests. [Duplicate key `Salima` is used for testing.]
  const namesArray = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];


  it("Equality check should return an object: { Fang: 2, Jason: 1 }.", () => {
    const truthyNamesObject = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false };
    const expectedOutput = { Fang: 2, Jason: 1 };
    assert.deepEqual(countOnly(namesArray, truthyNamesObject), expectedOutput);
  });


  it("Equality check should return an object: { Kavith: 1, Jason: 1 }.", () => {
    const truthyNamesObject = { "Jason": true, "Karima": true, "Fang": false, "Kavith": true };
    const expectedOutput = { Kavith: 1, Jason: 1 };
    assert.deepEqual(countOnly(namesArray, truthyNamesObject), expectedOutput);
  });


  it("Equality check should return an object: { Karl: 1, Salima: 2, Joe: 1 }.", () => {
    const truthyNamesObject = { "Salima": true, "Karl": true, "Salima": true, "Joe": true };
    const expectedOutput = { Karl: 1, Salima: 2, Joe: 1 };
    assert.deepEqual(countOnly(namesArray, truthyNamesObject), expectedOutput);
  });


  it("Equality check should return an object: { Karl: 1, Agouhanna: 1, Joe: 1 }.", () => {
    const truthyNamesObject = { "Agouhanna": true, "Karl": true, "Salima": false, "Joe": true };
    const expectedOutput = { Karl: 1, Agouhanna: 1, Joe: 1 };
    assert.deepEqual(countOnly(namesArray, truthyNamesObject), expectedOutput);
  });

});

