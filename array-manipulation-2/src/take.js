/* exported take */

// Define a function named take with two parameter: array, count
// This function should do:
//   assigns an empty array to a new variable named taken
//   uses a for loop that
//   -- assigns 0 to a new variable named i in its initialization expression
//   -- checks that i is less than count in its conditional expression
//   -- increments i in its final expression
//   -- assigns the value of array at index i to a new variable named element
//   -- pushes the element to the taken array
//   return the taken array

function take(array, count) {
  var taken = [];
  if (array.length === 0) {
    return taken;
  } else {
    for (var i = 0; i < count; i++) {
      var element = array[i];
      taken.push(element);
    }
    return taken;
  }
}

// Define a function named take with two parameter: array, count
// This function should do:
//   assigns an empty array to a new variable named taken
//   uses a if statement with the expression the length of array is strictly equal to 0
//   in the code block, returns the taken array
//   uses a else statement
//   in the code block, uses a for loop
//   assigns 0 to a new variable named i in its initialization expression
//   checks that the variable i is less than count in its condition expression
//   increments i in its final expression
//   assigns the value of array at index i to a new variable named element
//   pushes element to the taken array
//   return the taken array
