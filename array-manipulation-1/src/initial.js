/* exported initial */

// Define a function named initial with one parameter: array.
// This function should do:
// assigns an empty array to a new variable listOfInitialElement
// uses a for loop that
// -assigns 0 to a new variable named i in its initialization expression
// -checks that i is less that the length of array - 1 in its condition expression
// -increments i in its final expression
// -assigns the value of array at index i to a new variable named element
// -pushes the element to the listOfInitialElement array
// return the listOfInitialElement array

function initial(array) {
  var listOfInitialElement = [];
  for (var i = 0; i < (array.length - 1); i++) {
    var element = array[i];
    listOfInitialElement.push(element);
  }
  return listOfInitialElement;
}

// Define a function named initial with one parameter: array
// This function should do:
//   assigns an empty array to a new variable named listOfInitialElement
//   uses a for loop that
//   -- assigns 0 to a new variable named i in its initialization expression
//   -- assigns the value of array at index i to a new variable named element
//   -- pushes the element to the listOfInitialElement array
//   returns the listOfInitialElement array
