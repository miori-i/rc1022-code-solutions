/* exported capitalize */

// Define a function named capitalize with one parameter: word
// This function should do:
//   gets a character of string at index 0 and assigns it to a new variable named firstChar
//   capitalizes the variable firstChar
//   concatenates the variable firstChar and the character of string starting at index 1 and ending at index (string.length - 1) and assigns it to a new variable named capitalized
//   returns the variable capitalized

function capitalize(word) {
  var firstChar = word.charAt(0);
  firstChar = firstChar.toUpperCase();
  var leftOver = word.slice(1);
  leftOver = leftOver.toLowerCase();
  var capitalized = firstChar + leftOver;
  return capitalized;

}

// Define a function named capitalize with one parameter: word
// This function should do:
//   gets a first character of word and assigns it to a new variable named firstChar
//   makes the firstChar uppercase and assigns back it to the firstChar
//   gets the whole word except the first character of word and assigns it to a variable named leftOver
//   makes the leftOver lowercase and assigns it to leftOver
//   concatenates the firstChar and the leftOver and assigns it to a new variable named capitalized
//   returns the capitalized variable
