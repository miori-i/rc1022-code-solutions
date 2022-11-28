/* exported difference */

function difference(first, second) {
  var x = first.filter(x => !second.includes(x));
  var y = second.filter(x => !first.includes(x));

  var difference = x.concat(y);
  return difference;
}
