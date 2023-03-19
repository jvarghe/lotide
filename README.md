# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jvarghe/lotide`

**Require it:**

`const _ = require('@jvarghe/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* assertArraysEqual(): will take in two arrays to determine if two arrays are equal and print a message to the console.

* assertEqual(): will take in two arguments and determine if they are equal. 

* assertObjectsEqual(): will take in two objects and compare their members to determine if they are identical. It will return a boolean value. 

* countLetters(): takes a string (intended to be a sentence), and returns a count of all the letters, and only the letters, in that string.

* countOnly(): will take an array and an object. The array will contain a list of items to search through. The object contains keys whose values this function will search for in the array. It will return an object containing counts of all the strings with a truthy value.

* eqArray(): takes in two arrays and compares their elements. Based on  whether the contents are identical, the function returns either true or false.

* eqObjects(): takes two objects and compares all their keys to see if they are equal. Based on the result, it returns a boolean value.

* findKey(): takes an object and a callback function. It will scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return `undefined`.

* findKeyByValue(): takes in an object and a value. It will search the object's keys' for this value. If finds a value, it simply returns the name of the first key where it finds this value. If it does not, it returns `undefined`.

* flatten(): takes an array that hold nested array up to one-level deep. It flattens nested arrays by moving elements up into the top array. This function will return the flattened array.

* head(): takes an array and returns its first element.

* index.js: This file is not intended for direct use. It merely imports all the utility functions and exports them as keys in a single object. This makes it easy to import the entire set of utility functions into other files in the project.

* letterPositions(): takes a sentence string. It will return an object with keys that appear in the sentence. The values will be the indices in the string where the character was found. As each letter may appear more than once, the values will be arrays of indices.

* map(): takes an array (of strings) and a callback function. The callback function is executed on the array. The results are pushed on to an array which map() then returns.

* middle(): takes an array, calculates the middle element(s) and returns an array containing them.

* tail(): takes an array and returns the "tail" (all elements except the head or first one). It then returns this shrunken array.

* takeUntil(): takes an array and a callback function. It will iterate over the array, applying the callback until the predicate (aka callback function) returns a "truthy" value. As it iterates over the array, it will push all "falsy" values onto an array, which it will return. This array contains all the values the predate the first "truthy" value.

* without(): takes two array arguments, `source` and `itemsToRemove`. It iterates over the `source` array, stripping out all the unwanted items listed in `itemsToRemove`. It then returns the new, shrunken array.