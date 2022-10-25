/* exported firstChars */

function firstChars(length, string) {
  var word = '';
  for (var i = 0; i < length; i++) {
    var char = string.charAt(i);
    word += char;
  }
  return word;
}
