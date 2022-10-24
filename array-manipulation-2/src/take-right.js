/* exported takeRight */

function takeRight(array, count) {
  var takenRight = [];
  if (array.length <= count) {
    return array;
  } else if (array.length > count) {
    for (var i = array.length - count; i < array.length; i++) {
      var element = array[i];
      takenRight.push(element);
    }
    return takenRight;
  }
}
