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
const map = function(array, callback) {

  // An array to hold the results.
  const results = [];

  // Iterate over the input array...
  for (let item of array) {

    // ... Call the callback function, perform this operation on each element,
    // and push each result on the `results` array.
    results.push(callback(item));
  }
  

  return results;
}


// Call `map` and store the results in `results`. 
const results = map(words, word => word[0]);
console.log(results);

