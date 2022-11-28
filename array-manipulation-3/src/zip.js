/* exported zip */

function zip(first, second) {
  var zippedArray = [];

  if (first.length === second.length || first.length < second.length) {
    for (var i = 0; i < first.length; i++) {
      var subArray = [];
      subArray.push(first[i]);
      subArray.push(second[i]);
      zippedArray.push(subArray);
      subArray = [];

    }
  } else if (first.length > second.length) {
    for (var n = 0; n < second.length; n++) {
      var subArray2 = [];
      subArray2.push(first[n]);
      subArray2.push(second[n]);
      zippedArray.push(subArray2);
      subArray2 = [];
    }
  }
  return zippedArray;

}
