/* exported flatten */

function flatten(array) {

  var flattened = [].concat.apply([], array);
  return flattened;
}

// Define a function named flatten with one parameter: array
// This function should do:
//   apply method of concat method of empty array is being called with two parameters: an empty array, array
//   and assigns it to a new variable named flattened
//   returns the variable flattened
