/* exported pick */

function pick(source, keys) {
  var newObject = {};

  for (var key in source) {
    if (keys.includes(key)) {
      newObject[key] = source[key];
    }
  }
  return newObject;
}

// AssertionError: expected { foo: null, bar: 0, baz: undefined }
// to deeply equal { foo: null, bar: 0 }
