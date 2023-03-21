// IMPORTS FOR TESTS
const assertEqual = require("../assertEqual.js");
const eqObjects = require("../eqObjects.js");


// TEST CASES
// Compare two identical objects:
const shirtObject = { color: "red", size: "medium"};
const anotherShirtObject = { size: "medium", color: "red" };
// Returns `True`.
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

// Compare two objects with different lengths (Basically two different objects):
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
// Returns `False`.
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);


// Compare objects with array keys:
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
// Returns `True`.
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);

// Compare objects with array keys of different lengths (Basically two different objects):
const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
// Returns `False`.
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);