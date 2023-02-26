// This function takes an array argument, extracts the head element and returns
// it. 
const head = function(array) {
  let headElement = array[0];
  return headElement;
}


// Checks if the function does its job correctly.
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


// assertEqual() Test Cases
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

assertEqual(head(["tom", "dick", "harry"]), "tom");
assertEqual(head([28349, 183, 9834.86, 1]), 28349);
assertEqual(head(["2.34", 284, "cats"]), "2.34");

assertEqual(head(["Supercalifragilisticexpialidocious"]),"Supercalifragilisticexpialidocious"); 
assertEqual(head([]), undefined);

