/* CHALLENGE: 
 *
 * Now let's create our own version of `Array.prototype.map()` in order to get
 * some practice building our own higher-order functions.
 * 
 * Our map function will take in two arguments:
 * 
 *   - An array to map
 *   - A callback function
 * 
 * The `map()` function will return a new array based on the results of the 
 * callback function.
 */


// An array of strings: 
const words = ["ground", "control", "to", "major", "tom"];

// Our implementation of `map`. 
const map = function() {

  // An array to hold the results.
  const results = [];

  
  return results;
}

// Call `map` and store the results in `results`. 
const results = map(words, word => word[0]);
console.log(results);

