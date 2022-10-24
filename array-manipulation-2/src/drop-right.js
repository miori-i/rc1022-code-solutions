/* exported dropRight */

// Define a function named dropRight with two parameter: array, count
// This function should do:
//   assigns an empty array to a new variable named dropped
//   uses a for loop that
//   assigns 0 to a new variable named i in its initialization expression
//   checks that i is greater than or equal to 0 in its condition expression
//   decrements i in its final expression
//   in the code block
//   assigns the value of array at index i to a new variable named element
//   pushes element to the dropped array
//   return the dropped array

function dropRight(array, count) {
  var dropped = [];
  if (array.length === 0) {
    return dropped;
  } else {
    for (var i = 0; i < (array.length - count); i++) {
      var element = array[i];
      dropped.push(element);
    }

  }
  return dropped;
}
