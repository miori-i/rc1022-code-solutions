/* exported ransomCase */
// Define a function named ransomCase with one parameter: string
// This function should do:
// uses a for loop that
// assigns 0 to a new variable named i in its initialization expression
// checks that i is less than the length of string in its condition expression
// increments i in its final expression

function ransomCase(string) {
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      var evenCharacter = string.charAt(i).toLowerCase();
      newString += evenCharacter;
    } else {
      var oddCharacter = string.charAt(i).toUpperCase();
      newString += oddCharacter;
    }
  }
  return newString;
}

// Define a function named ransomCase with one parameter: string
// This function should do:
// assigns an empty string to a new variable named newString;
// uses a for loop that
// assigns 0 to a new variable named i in its initialization expression
// checks that i is less than the length of string in its condition expression
// increments i in its final expression
// uses an if statement that i modules 2 is strictly equal to 0
// gets the character at index i of the string and make it lower case and assigns it to a new variable named evenCharacter
// adds evenCharacter to newString and the result of this expression is being assigns to newString
// uses else statement
// gets the character at index i of the string and make it upper case and assigns it to a new variable named oddCharacter
// adds oddCharacter to newString and the result of this expression is being assigns to newString
// returns newString
