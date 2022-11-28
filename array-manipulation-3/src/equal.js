/* exported equal */

function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  } else if (first.length === 0 && second.length === 0) {
    return true;
  } else {
    var result = false;

    // comparing each element of array
    for (var i = 0; i < first.length; i++) {
      if (first[i] !== second[i]) {
        return false;
      } else {
        result = true;
      }
    }
    return result;
  }
}

// Define a function named equal with two parameter: first, second
// This function should do:
//   uses if statement with the condition the length of first array and second is not equal to each other
//   returns false
//   uses else if statement with the condition the length of first array and second array is equal to 0
//   returns true
//   uses else statement
//   assigns false to a new variable named result
//   uses a for loop that
//   assigns 0 to a new variable named i in its initialization expression
//   checks that i is greater than or equal to the length of first array in its condition expression
//   decrements i in its final expression
//   in the code block
//   uses if statement with the condition first array at index i and second array at index i is not equal to each other
//   returns false
//   uses else statement
//   assigns true to a variable result
//   return result
