
function getRangeReport(start, end) {

  var info = {};

  // total - the sum of all integers from start to end.
  var total = 0;
  for (var i = start; i <= end; i++) {
    total += i;
  }
  info.total = total;

  // odds - an array containing all of the odd integers from start to end.
  var odds = [];
  for (var n = start; n <= end; n++) {
    if (n % 2 !== 0) {
      odds.push(n);
    }
  }
  info.odds = odds;

  // evens - an array containing all of the even integers from start to end.
  var evens = [];
  for (var k = start; k <= end; k++) {
    if (k % 2 === 0) {
      evens.push(k);
    }
  }
  info.evens = evens;

  // range - an array containing all integers from start to end.
  var range = [];
  for (var v = start; v <= end; v++) {
    range.push(v);
  }
  info.range = range;

  // average - the average of all integers from start to end.
  var average = 0;
  average = total / range.length;
  info.average = average;

  return info;
}

getRangeReport(1, 5);
