// assertEqual Implementation

// Function Implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


// Test Code
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("lighthouselabs", "lighthouselabs");
assertEqual("lighthouse labs", "lighthouselabs");
assertEqual(1234, 1234);
assertEqual(1243, 1234);