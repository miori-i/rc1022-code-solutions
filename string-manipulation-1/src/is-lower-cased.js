/* exported isLowerCased */

// Define a function with one parameter: word
// This function should do:
//   uses a if statement with the expression that toLowerCase method of word is strictly equal to word
//   -- returns true
//   uses else statement
//   -- returns false

function isLowerCased(word) {
  if (word.toLowerCase() === word) {
    return true;
  } else {
    return false;
  }
}
