/* exported titleCase */

function titleCase(string) {
  var newStr = string.charAt(0).toUpperCase() + string.slice(1);
  return newStr;
}
