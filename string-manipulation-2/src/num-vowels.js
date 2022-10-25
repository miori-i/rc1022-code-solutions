/* exported numVowels */

// Define a function named numVowels with one parameter: string
// This function should do:
// assigns 0 to a new variable named counter
// uses a for loop that
// assigns 0 to a new variable named i in its initialization expression
// checks that i is less than the length of string in its condition expression
// increments i in its final expression
// uses an if statement with the expression that c character of string at index i is equal to a,i,u,e,o,A,I,U,E,O
// increments counter
// return counter

function numVowels(string) {
  var counter = 0;
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) === 'a' || string.charAt(i) === 'i' || string.charAt(i) === 'u' || string.charAt(i) === 'e' || string.charAt(i) === 'o' || string.charAt(i) === 'A' || string.charAt(i) === 'I' || string.charAt(i) === 'U' || string.charAt(i) === 'E' || string.charAt(i) === 'O') {
      counter++;
    }
  }
  return counter;
}
