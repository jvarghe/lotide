// IMPORTS FOR TESTS
const assertEqual = require("../assertEqual.js");
const eqArrays = require("../eqArrays.js");


// ASSERTEQUAL TEST CODE FOR `eqArrays.js`
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);             // => Should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);            // => Should FAIL
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => Should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);  // => Should FAIL