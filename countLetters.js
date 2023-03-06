/* CHALLENGE: In this activity, we will create another Lotide function. This 
 * one will be like the `countOnly()` function from the previous activity. The 
 * function should take in a sentence (as a string) and then return a count of 
 * each of the letters in that sentence. For example, countLetters('LHL') 
 * should return results indicating that L appears twice, and H once. 
 * 
 * Do NOT provide a count of letters that did not show up in the string. Skip
 * and do NOT count spaces.
 */


// `countLetters()` takes a string (intended to be a sentence), and returns a 
// count of all the letters, and only the letters, in that string. 
const countLetters = function(sentenceString) {

  let sentenceCountObject = {};

  // Iterate over the `sentenceString` string...
  for (const char of sentenceString) {
    
    // If the current character is a space, comma or fullstop, skip over it and
    // move on to the next element.
    if ((char === " " ) || (char === ",") || (char === ",")) {
      continue;

    // If it is an alphanumerical character, prepare to add it to 
    // `sentenceCountObject`. 
    } else {

      // If 
      // if (sentenceCountObject.hasOwnProperty(char) === true) {

      //   sentenceCountObject[char]++;
      // }

    }
  }

  
  return sentenceCountObject;
}



// ASSERTEQUAL() Function Implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};



// TEST CASES: 
let resultObject1 = countLetters(" ,.");
console.log(resultObject1);