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


// ASSERTEQUAL() Function Implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


// COUNTONLY() FUNCTION:
// `countOnly()` will take an array and an object. It will search for all the
// strings found in the array and return an object containing counts of all the 
// strings with a truthy value. 
const countOnly = function(allItems, itemsToCount) {

}