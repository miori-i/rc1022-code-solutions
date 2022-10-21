/* exported getKeys */

// Define a function named getKeys with one parameter: object
// This function should do:
//   gets the object's property keys and assigns pushes it to the empty array

function getKeys(object) {
  var listOfKeys = [];
  for (var i in object) {
    var key = i;
    listOfKeys.push(key);
  }
  return listOfKeys;
}

// Define a function named getKeys with one parameter: object
// This function should do:
//   assigns an empty array to a new variable named listOfKeys
//   uses a for...in loop and gets each key
//   -- assigns it to a new variable named key
//   -- pushes key to the listOfKeys array
//   return the listOfKeys array
