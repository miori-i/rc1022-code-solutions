/* exported addSuffixToAll */

function addSuffixToAll(words, suffix) {
  var newArray = [];
  for (var i = 0; i < words.length; i++) {
    var stringWithSuffix = words[i] + suffix;
    newArray.push(stringWithSuffix);
  }
  return newArray;
}
