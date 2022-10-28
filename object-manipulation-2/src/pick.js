/* exported pick */

function pick(source, keys) {
  var newObject = {};

  for (var key in source) {
    if (keys.includes(key)) {
      newObject[key] = source[key];
    }
    if (source[key] === undefined) {
      delete newObject[key];
    }
  }
  return newObject;
}
