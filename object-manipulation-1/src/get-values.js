/* exported getValues */
function getValues(object) {
  var listOfValues = [];
  for (var i in object) {
    var value = object[i];
    listOfValues.push(value);
  }
  return listOfValues;
}
