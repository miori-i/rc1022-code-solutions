/* exported lastChars */

// Define a function named lastChars with two parameters: length, string
// This function should do:
// assigns an empty string to a new variable named word
// uses a for loop that
// assigns the result of expression that the length of string subtracted length to a new variable named i in its initialization expression
// check that i is less than the length of string in its condition expression
// increments i in its final expression
// assigns a character of string at index i to a new variable char
// adds char to word and assigns it to word
// return word

function lastChars(length, string) {
  var word = '';
  for (var i = string.length - length; i < string.length; i++) {
    var char = string.charAt(i);
    word += char;
  }
  return word;
}
