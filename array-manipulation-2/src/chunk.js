/* exported chunk */

function chunk(array, size) {
  var arrayOfChunk = [];
  for (var i = 0; i < array.length; i += size) {
    var elements = array.slice(i, i + size);
    arrayOfChunk.push(elements);
  }
  return arrayOfChunk;
}
