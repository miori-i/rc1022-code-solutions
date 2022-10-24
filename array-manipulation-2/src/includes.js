/* exported includes */

// Define a function named includes with two parameters: array, value
// This function should do:
//   uses a for loop that:
//   assigns 0 to a new variable named i in its initialization expression
//   checks that i is less than the length of array in its condition expression
//   increments i in its final expression
//   in the code block,
//   uses an if statement with the expression that the value of array at the index i is equal to value
//   return true
//   uses an else statement
//   retune false

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array.indexOf(value) !== -1) {
      return true;
    }
  }
  return false;
}

// Define a function named includes with two parameters: array, value
// This function should do:
//   uses a for loop that:
//   assigns 0 to a new variable named i in its initialization expression
//   checks that i is less than the length of array in its condition expression
//   increments i in its final expression
//   in the code block,
//   uses an if statement with the expression that the index of array that is equal to value is not equal to -1
//   return true;
//   return false;
