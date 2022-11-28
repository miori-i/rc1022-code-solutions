/* exported unique */
function unique(array) {
  var newArray = [];

  for (var i = 0; i < array.length; i++) {
    if (newArray.indexOf(array[i]) === -1) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

// Define a function named unique with one parameter: array
// this function should do:
//  assigns an empty array to a new variable named newArray
//  uses a for loop that
//  assigns 0 to a new variable named i in its initialization expression
//  checks that i is greater than or equal to the length of array in its condition expression
//  increments i in its final expression
//  uses if statement that the condition is indexOf method of newArray object is being called with one argument array ar index i is equal to -1
//  pushes array at index i to newArray
// returns newArray
