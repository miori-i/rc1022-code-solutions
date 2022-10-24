/* exported truncate */

function truncate(length, string) {
  var shortened = string.slice(0, length) + '...';
  return shortened;
}

// Define a function named truncate with two parameter: length, string
// This function should do:
//   concatenates slice of string from index 0 to length and string '...' and assigns it to a new variable named shortened
//   returns shorthand;
