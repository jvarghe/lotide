// IMPORTS FOR TESTS
const assertArraysEqual = require("../assertArraysEqual.js");


// ASSERTEQUAL TEST CODE FOR `assertArraysEqual.js`
assertArraysEqual([1, 2, 3], [1, 2, 3]);                // => EQUAL ARRAYS
assertArraysEqual([1, 2, 3], [3, 2, 1]);                // => NOT EQUAL!
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);    // => EQUAL ARRAYS
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);      // => NOT EQUAL!