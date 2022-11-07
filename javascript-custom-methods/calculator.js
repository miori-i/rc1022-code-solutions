/* exported calculator */

var calculator = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
  multiply: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    return x / y;
  },
  square: function (x) {
    return x * x;
  },
  sumAll: function (numbers) {
    var counter = 0;
    for (var i = 0; i < numbers.length; i++) {
      counter += numbers[i];
    }
    return counter;
  },
  getAverage: function (numbers) {
    var counter = 0;
    for (var i = 0; i < numbers.length; i++) {
      counter += numbers[i];
    }
    var average = counter / numbers.length;
    return average;
  }
};
