/* exported isAnagram */

function isAnagram(firstString, secondString) {

  var firstStringWithoutScape = firstString.replace(/ /g, '');
  var secondStringWithoutScape = secondString.replace(/ /g, '');

  var array1 = Array.from(firstStringWithoutScape);
  var array2 = Array.from(secondStringWithoutScape);

  if (array1.length !== array2.length) {
    return false;
  }

  // Sort both strings
  array1.sort();
  array2.sort();

  for (var i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}
