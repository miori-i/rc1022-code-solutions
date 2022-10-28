/* exported defaults */

function defaults(target, source) {
  for (var key in source) {
    if (Object.keys(target).indexOf(key) === -1) {
      target[key] = source[key];
    }
  }
}

// Define a function named defaults with two parameters: target, source
// This function should do:
// uses a for loop that
// assigns a new variable named key in source
// uses an if statement with the expression index method of object.keys method is -1
// assigns the value of property key of source object to the value of property key of target object
