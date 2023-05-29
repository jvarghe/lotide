/* CHALLENGE
 *
 * Implement `middle()` which will take in an array and return its middle
 * element(s).
 */


// MIDDLE IMPLEMENTATION
//
// This function takes an array, calculates the middle element(s) and returns
// an array containing them. In arrays with an odd number of elements, it will
// return one element; two for elements with an even number of elements.
const middle = function(array) {

  // An empty array to hold the middle elements.
  let middleArray = [];


  // If an array has 0, 1, or 2 elements, there is NO possible middle.
  // Return an empty array.
  if (array.length <= 2) {
    return middleArray;
  
  // If an array size is greater than 2 and has an odd number of elements, find
  // and return the middle element.
  } else if ((array.length > 2) && (array.length % 2 !== 0)) {

    // Calculate the middle element, round it down, and...
    const middleElement = Math.floor((array.length / 2));
    // ...push this element onto `middleArray`.
    middleArray.push(array[middleElement]);

  // If an array size is greater than 2 and has an even number of elements, find
  // and return the middle two elements.
  } else if ((array.length > 2) && (array.length % 2 === 0)) {

    // One middle element can be found by taking the average of the length of
    // the array...
    const middleElement2 = (array.length / 2);
    // ... and the other can be found one index before it.
    const middleElement1 = (middleElement2 - 1);

    // Push these elements into `middleArray`.
    middleArray.push(array[middleElement1], array[middleElement2]);
  }

  // Print `middleArray` to console.
  console.log(middleArray);
  return middleArray;
};


// EXPORTS
module.exports = middle;