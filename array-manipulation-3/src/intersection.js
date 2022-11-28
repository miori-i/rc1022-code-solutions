/* exported intersection */
function intersection(first, second) {
  var common = first.filter(x => second.indexOf(x) !== -1);
  return common;
}
