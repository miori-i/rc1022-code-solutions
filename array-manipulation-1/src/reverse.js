/* exported reverse */

// Define a function named reverse with one parameter: array
// This function should do:
//   assigns an empty array to a new variable named reversed
//   uses a for loop that
//   -- assigns the length of array -1 to a new variable named i in its initialization expression
//   -- checks that i is greater than or equal to 0 in its condition expression
//   -- decrements i in its final expression
//   -- assigns a value of array at index i to a new variable named element
//   -- pushes the element into the reversed array
//   return the reversed array

function reverse(array) {
  var reversed = [];
  for (var i = (array.length - 1); i >= 0; i--) {
    var element = array[i];
    reversed.push(element);
  }
  return reversed;
}
