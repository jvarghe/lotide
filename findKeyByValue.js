/* CHALLENGE
 *
 * Implement the function `findKeyByValue()` which takes in an object and a
 * value. It should scan the object and return the first key which contains
 * the given value. If no key with that given value is found, then it should
 * return `undefined`.
 *
 * Tips: Consider using the `Object.keys()` function to help you easily search
 * through all the object keys. Consider using `for...of` to loop over the keys
 * returned by `Object.keys()`.
 */



// FINDKEYBYVALUE IMPLEMENTATION
//
// This function takes in an object and a value. It will search the object's
// keys' values for this value. If finds a value, it simply returns the name
// of the first key where it finds this value. If it does not, it returns
// undefined.
const findKeyByValue = function(objectToScan, valueToScanFor) {

  // Create an variable to hold the first found key value:
  let keyName = undefined;

  // Iterate over the object...
  for (const key in objectToScan) {

    // ...Check whether any of `objectToScan`'s key matches the string in
    // `valueToScanFor`.
    if (objectToScan[key] === valueToScanFor) {
      // If so, store the value in `keyName` and break out the loop.
      keyName = key;
      break;
    }
  }

  return keyName;
};



// EXPORTS
module.exports = findKeyByValue;