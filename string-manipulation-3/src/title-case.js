/* exported titleCase */

function titleCase(string) {

  var lowerString = string.toLowerCase();
  var newString = lowerString.replace(/\b[a-z]/g, char => char.toUpperCase());

  return newString;
}
