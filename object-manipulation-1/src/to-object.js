/* exported toObject */

function toObject(keyValuePair) {
  var object = {};
  for (var i = 0; i < keyValuePair.length; i++) {
    var string = keyValuePair[0];
    var value = keyValuePair[1];
    object[string] = value;

  }
  return object;
}
