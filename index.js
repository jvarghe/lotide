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
// `const _ = require("./index.js")`. 
// 
// So long as we consolidate all the imports and exports into a single file, 
// this saves us from having to do manually do lengthy imports in every file 
// that needs these utility functions. 


// IMPORTS
const assertArraysEqual = require("./assertArraysEqual.js");
const assertEqual = require("./assertEqual.js");
const eqArrays = require("./eqArrays.js");
const eqObjects = require("./eqObjects.js");

const head   = require("./head.js");
const tail   = require("./tail.js");
const middle = require("./middle.js");



// EXPORTS
// 
// Object exported in standard export format: 
// 
// module.exports = {
//   assertArraysEqual: assertArraysEqual,
//   assertEqual: assertEqual,
//   eqArrays: eqArrays,
//   head:   head,
//   tail:   tail,
//   middle: middle
// };


// Object exported with ES6 Property Value Shorthand syntax:
module.exports = {
  assertArraysEqual,
  assertEqual,
  eqArrays,
  eqObjects,
  head,
  tail,
  middle,
};