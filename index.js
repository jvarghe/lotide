// PROJECT FUNCTIONS EXPORT FILE
// 
// We can exports numbers, strings, functions, and objects using the exports 
// feature, but in the previous reading, we realized that an object should be 
// exported with all our Lotide utility functions. 
// 
// To do this, we should import all the utility functions into a single file, 
// namely this one, `index.js`. Then, we should export all these functions as an
// object. Consolidating all the utility function imports into a single file 
// allows us skip multi-line imports in each file. We can just import the 
// `index.js` file into every file that needs it with just a single line of 
// code: 
// `const index = require("./index.js")`. 
// 
// So long as we consolidate all the imports and exports into a single file, 
// this saves us from having to do manually do lengthy imports in every file 
// that needs these functions. 



// IMPORTS
// REQUIRED HELPER FUNCTIONS:
const assertArraysEqual = require("./assertArraysEqual.js");
const assertEqual = require("./assertEqual.js");
const assertObjectsEqual = require("./assertObjectsEqual.js");
const eqArrays = require("./eqArrays.js");
const eqObjects = require("./eqObjects.js");

// ARRAY ELEMENT FINDERS:
const head   = require("./head.js");
const tail   = require("./tail.js");
const middle = require("./middle.js");

// ARRAY ELEMENT FINDERS (BY KEY):
const findKey = require("./findKey.js");
const findKeyByValue = require("./findKeyByValue.js");

// ARRAY ELEMENT COUNTERS:
const countLetters = require("./countLetters.js");
const countOnly = require("./countOnly.js");
const letterPositions = require("./letterPositions.js");

// ASSORTED ARRAY-BASED OPERATIONS
const flatten = require("./flatten.js");
const map = require("./map.js");
const takeUntil = require("./takeUntil.js");
const without = require("./without.js");



// EXPORTS
// 
// Object exported in standard object format: 
// 
// module.exports = {
//   assertArraysEqual: assertArraysEqual,
//   assertEqual: assertEqual,
//   eqArrays: eqArrays,
//   head:   head,
//   tail:   tail,
//   middle: middle
// };



// EXPORTS
// 
// Object exported with ES6 Property Value Shorthand syntax:
module.exports = {
  assertArraysEqual,
  assertEqual,
  assertObjectsEqual,
  countLetters,
  countOnly,
  eqArrays,
  eqObjects,
  findKey,
  findKeyByValue,
  flatten,
  head,
  letterPositions,
  map,
  middle,
  tail,
  takeUntil,
  without
};