// MANUAL TESTS

// IMPORTS FOR TESTS
// const assertEqual = require("./assertEqual.js");


// ASSERTEQUAL TEST CODE FOR `eqObjects`

// Tests for primitives and arrays:
// Test 1: Compare two identical objects:
// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject = { size: "medium", color: "red" };
// // Returns `True`.
// assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

// // Test 2: Compare two objects with different lengths
// // (Basically two different objects):
// const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
// // Returns `False`.
// assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);


// // Test 3: Compare objects with array keys:
// const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
// const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
// // Returns `True`.
// assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);

// // Test 4: Compare objects with array keys of different lengths
// // (Basically two different objects):
// const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
// // Returns `False`.
// assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);


// // Recursive Test Cases
// // Test 5: Compare two identical, nested objects:
// assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
// // Returns `True`.

// // Test 6: Compare two dissimilar objects:
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
// // Returns `False`.

// // Test 7: Compare two dissimilar objects:
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
// // Returns `False`.



// MOCHA & CHAI TESTS
const assert = require("chai").assert;
const eqObjects = require("../eqObjects.js");


// This file tests `eqArrays.js` to check for bugs.
// Primitive Type Tests
describe("#eqArrays", () => {

  it("Equality check for two identical objects should return TRUE.", () => {
    const shirtObject1 = { color: "red", size: "medium" };
    const shirtObject2 = { size: "medium", color: "red" };

    assert.deepEqual(eqObjects(shirtObject1, shirtObject2), true);
  });


  it("Equality check for two different objects should return FALSE.", () => {
    const shirtObject1 = { color: "red", size: "medium" };
    const shirtObject2 = { size: "medium", color: "red", sleeveLength: "long" };

    assert.deepEqual(eqObjects(shirtObject1, shirtObject2), false);
  });


  // Array Type Tests
  it("Equality check for two identical objects containing arrays should return TRUE.", () => {
    const shirtObject1 = { colors: ["red", "blue"], size: "medium" };
    const shirtObject2 = { size: "medium", colors: ["red", "blue"] };

    assert.deepEqual(eqObjects(shirtObject1, shirtObject2), true);
  });


  it("Equality check for two dissimilar objects containing arrays should return FALSE.", () => {
    const shirtObject1 = { colors: ["red", "blue"], size: "medium" };
    const shirtObject2 = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };

    assert.deepEqual(eqObjects(shirtObject1, shirtObject2), false);
  });


  // (Recursive) Object Tests
  it("Equality check for two identical objects containing nested objects should return TRUE.", () => {
    const shirtObject1 = { a: { z: 1 }, b: 2 };
    const shirtObject2 = { a: { z: 1 }, b: 2 };

    assert.deepEqual(eqObjects(shirtObject1, shirtObject2), true);
  });


  it("Equality check for two different objects containing nested objects should return FALSE.", () => {
    const shirtObject1 = { a: { y: 0, z: 1 }, b: 2 };
    const shirtObject2 = { a: { z: 1 }, b: 2 };

    assert.deepEqual(eqObjects(shirtObject1, shirtObject2), false);
  });


  it("Equality check for two different objects containing nested objects should return FALSE.", () => {
    const shirtObject1 = { a: { y: 0, z: 1 }, b: 2 };
    const shirtObject2 = { a: 1, b: 2 };

    assert.deepEqual(eqObjects(shirtObject1, shirtObject2), false);
  });

});