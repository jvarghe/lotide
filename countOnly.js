/* CHALLENGE: IMPLEMENT countOnly()
 *
 * The goal of this practice exercise is to work together on solving a problem
 * using objects and in doing that show you how objects can be used in
 * interesting ways.
 *
 * Imagine that you're a kid again and playing with Lego - or an adult who
 * still has the time to play with Lego. A big pile of lego blocks is dumped
 * on the ground. Today you want to build a specific race car with it. The
 * instructions for building it call for specific pieces. Before you can get
 * started, you first need to sift through and make sure that all the pieces
 * that you need to build your car are in the pile.
 *
 * This is the type of problem the Lotide `countOnly()` function will allow
 * us to solve!
 *
 * The `countOnly()` function should take in a collection of items and return
 * counts for a specific subset of those items. It won't count everything.
 * In order to decide what to count, it will also be given an idea of which
 * items we care about and it will only count those, ignoring the others.
 *
 * Items in our case will be limited to Strings.
 *
 * `countOnly()` will be given an array and an object. It will return an object
 * containing counts of everything that the input object listed.
 *
 * As shown in the example image above, only keys which have a truthy value
 * should be counted in the resulting object. All other strings (either set to
 * false or not included at all in the object) should not be counted. That said,
 * if a particular string is meant to be counted but does not exist in the
 * input array (like "f" in the example above), it also does not have to be
 * included in the final count.
 */


// IMPORTS
const assertEqual = require("./assertEqual.js");



// COUNTONLY() FUNCTION
// `countOnly()` will take an array and an object. `allItems` will contain a
// list of items to search through. itemsToCount is an object specifying which
// items we need to count. `countOnly()` will search for all the strings found
// in the array and return an object containing counts of all the strings with
// a truthy value.
const countOnly = function(allItems, itemsToCount) {
  
  // Create an object to hold the final results.
  const resultObject = {};

  // Iterate over the `allItems` array...
  for (let i = 0; i < allItems.length; i++) {

    // ...for each element in `allItems` array, check if:
    //     1. It is a key in the `itemsToCount` object.
    //     2. key's value in the `itemsToCount` object is `true`.
    // If both these things are true, that means the element should be counted.
    if ((Object.prototype.hasOwnProperty.call(itemsToCount, allItems[i]) === true) &&
        (itemsToCount[allItems[i]] === true)) {

      // Check if the `resultObject` object already has a key of the same name.
      // If so, increment the key value by 1.
      if (Object.prototype.hasOwnProperty.call(resultObject, allItems[i]) === true) {
        resultObject[allItems[i]] += 1;
      
      // If it doesn't exist, add the key and set its value equal to 1.
      } else {
        resultObject[allItems[i]] = 1;
      }

    }

  }


  return resultObject;
};



// DRIVER CODE

// An array containing first names.
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];


// A the result of a call to countOnly(), passing in an object.
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });


// TEST CASES:
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);


// EXPORTS
module.exports = countOnly;

