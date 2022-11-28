/* exported isPalindromic */

function isPalindromic(string) {
  var stringWithoutScape = string.replace(/ /g, '');

  for (let i = 0; i < stringWithoutScape.length / 2; i++) {
    // check if first and last string are same
    if (stringWithoutScape[i] !== stringWithoutScape[stringWithoutScape.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
