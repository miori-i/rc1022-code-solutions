/* exported compact */

// Define a function named compact with one parameter: array
// This function should do:
//   uses a for loop that
//   -- assigns 0 to a new variable named in its initialization expression
//   -- checks that i is less that the length of array in its condition expression
//   -- increments i in its final expression
//   -- uses if statement with the expression the value of array at index i is equal to false
//        returns 'omits false from arrays'
//   -- uses else if statement with the expression the value of array at index i is equal to null
//        returns 'omits null from arrays'
//   -- uses else if statement with the expression the value of array at index i is equal to NaN
//        returns 'omits NaN from arrays'
//   -- uses else if statement with the expression the value of array at index i is equal to 0 or -0
//        returns 'omits 0 and -0 from arrays'
//   -- uses else if statement with the expression the value of array at index i is equal to undefined
//        returns 'omits undefined from arrays'
//   -- uses else if statement with the expression the value of array at index i is equal to ''
//        returns 'omits "" (empty strings) from arrays'

function compact(array) {
  var listOfTruthyElements = [];
  for (var i = 0; i < array.length; i++) {
    var myVar = array[i];
    if (myVar) {
      listOfTruthyElements.push(myVar);
    }
  }
  return listOfTruthyElements;
}

// Define a function named compact with one parameter: array
// This function should do:
//   assigns an empty array to a new variable named listOfTruthyElements
//   uses a for loop that
//   -- assigns 0 to a new variable named in its initialization expression
//   -- checks that i is less that the length of array in its condition expression
//   -- increments i in its final expression
//   -- assigns the value of array at index i to a new variable named myVar
//   -- uses if statement with the expression myVar (To check if a value is truthy, pass the value to an if statement)
//         pushes the element into the listOfTruthyElements array
//   returns listOfTruthyElements array
