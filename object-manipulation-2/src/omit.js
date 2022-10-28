/* exported omit */

function omit(source, keys) {
  var newObject = {};

  for (var key in source) {
    if (!keys.includes(key)) {
      newObject[key] = source[key];
    }
  }
  return newObject;
}

// Define a function named omit with two parameters: source, keys
// This function should do:
// assigns an empty object to a new variable named newObject
// uses a for loop that
// assigns a new variable named key in source
// uses a if statement with the expression that the keys array doesn't include key variable
// assigns the value of property key of source object to the value of property key of newObject object
// returns newObject object
