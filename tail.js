// TAIL IMPLEMENTATION
// This function takes an array, extracts from it the "tail", i.e. all elements
// except the head or first one. It returns this shrunken array.
const tail = function(array) {
  const arrayTail = array.slice(1);
  return arrayTail;
};


// EXPORTS
module.exports = tail;


