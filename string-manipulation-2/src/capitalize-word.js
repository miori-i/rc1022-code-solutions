/* exported capitalizeWord */

function capitalizeWord(word) {
  if (word.charAt(0) === 'j' || word.charAt(0) === 'J') {
    var j = word.charAt(0).toUpperCase();
    var leftOver1 = word.slice(1, 4).toLowerCase();
    var s = word.charAt(4).toUpperCase();
    var leftOver2 = word.slice(5).toLowerCase();
    var capitalized = j + leftOver1 + s + leftOver2;
    return capitalized;

  } else {
    var firstCharacter = word.charAt(0).toUpperCase();
    var leftOver = word.slice(1).toLowerCase();
    capitalized = firstCharacter + leftOver;
    return capitalized;
  }
}
