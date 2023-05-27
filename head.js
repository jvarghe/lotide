/* CHALLENGE
 *
 * Let's add one of the simpler array-handling functions to our Lotide project.
 * In doing so we will get more comfortable with adding additional functions to
 * Lotide while also writing test cases for them.
 *
 * A commonly used function for arrays is to retrieve the first element from
 * the array. This is often referred to as the "head" of the array.
 *
 * Implement a function that returns the head from an array. The returned object
 * should NOT be an array.
 */


// HEAD IMPLEMENTATION
// This function just returns the first element of an array.
const head = function(array) {
  const headElement = array[0];
  return headElement;
};


// EXPORTS
module.exports = head;