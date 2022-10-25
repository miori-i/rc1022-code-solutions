/* exported capitalizeWords */

function capitalizeWords(string) {
  var words = string.split(' '); // Splits the sentence into an array of words
  var newWords = [];
  for (var i = 0; i < words.length; i++) {
    var firstChar = words[i].charAt(0).toUpperCase();
    var leftOver = words[i].slice(1).toLowerCase();
    var capitalizedWord = firstChar + leftOver;
    newWords.push(capitalizedWord);
  }
  return newWords.join(' ');
}
