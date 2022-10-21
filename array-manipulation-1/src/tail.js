/* exported tail */

// Define a function named tail with one parameter: array.
// This function should:
//   assigns an empty array to a new variable named newArray
//   uses a for that
//   - assign 1 to a new variable named i in its initialization expression
//   - checks that i is less than the length of array in its condition expression
//   - increments i in its final expression
//   - assigns the value of array at index i to a new variable named element
//   - pushes element into the newArray array

function tail(array) {
  var newArray = [];
  for (var i = 1; i < array.length; i++) {
    var element = array[i];
    newArray.push(element);
  }
  return newArray;
}

// Define a function named tail with one parameter: array.
// This function should do:
//   assigns an empty array to a new variable named newArray.
//   uses a for loop that
//   -assigns 1 to a new variable named i in its initialization expression.
//   -checks that i is less than the length of array in its condition expression
//   -increments 1 in its final expression
//   -assigns the value of array at index i to a new variable named element
//   -pushes element into the newArray array
