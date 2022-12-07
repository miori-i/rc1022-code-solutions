/* exported reverseWords */

function reverseWords(string) {
  var reversed = string.split('').reverse().join('').split(' ').reverse().join(' ');
  return reversed;

}
