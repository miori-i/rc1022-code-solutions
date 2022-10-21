/* exported getWords */

// Define a function named getWords with one parameter: string
// This function should do:
//   uses a for loop that
//   -- assigns 0 to a new variable named i in its initialization expression
//   -- checks that i is less than the length of string in its condition expression
//   -- increments i in its final expression
//   -- in the code block

function getWords(string) {
  var listOfWords = [];
  if (string !== '') {
    for (var i = 0; i < string.split(' ').length; i++) { // string.split(' ').length = a number of the words that are separated by a space
      var words = string.split(' ');
      var word = words[i];
      listOfWords.push(word);
    }
  } else {
    return listOfWords;
  }
  return listOfWords;
}

// Define a function named getWords with one parameter: string
// This function should do:
//   assigns an empty string to a new variable named listOfWords;
//   uses a if  statement with the expression string is not equal to ''
//   in the code block
//   -- uses a for loot that
//   -- assigns 0 to a new variable named i in its initialization expression
//   -- checks i is less than the length of string that are separated by a space
//   -- increments i in its final expression
//   -- assigns the split method with separator ' ' of string to a new variable named words
//   -- gets a word of words at index i and assigns it to a new variable named word
//   -- pushes word to the listOfWord array
//   -- uses else statement
//   -- return listOfWords
