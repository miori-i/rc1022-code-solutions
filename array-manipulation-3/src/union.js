/* exported union */

function union(first, second) {
  var union = [...new Set([...first, ...second])];
  return union;
}
