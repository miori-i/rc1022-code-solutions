/* exported getFirstChar */

// Define a function named getFirstChar with one parameter: string
// This function should do:
//   uses a for loop that
//   -- assigns 0 to a new variable named i in its initialization expression
//   -- checks that i is less than the length of string in its condition expression
//   -- increments i in its final expression
//   -- in its code block, accesses the first character of string
//   -- returns the first character of string

function getFirstChar(string) {
  var firstChar = string.charAt(0);
  return firstChar;
}

// Define a function named getFirstChar with one parameter: string.
// This function should do:
//   get a character of string at index 0 and assigns it to a new variable named firstChar
//   returns the firstChar variable
