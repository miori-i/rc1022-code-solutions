/* exported toObject */

function toObject(keyValuePair) {
  var Object = {};
  for (var i = 0; i < keyValuePair.length; i++) {
    var string = keyValuePair[0];
    var value = keyValuePair[1];
    Object[string] = value;

  }
  return Object;
}
