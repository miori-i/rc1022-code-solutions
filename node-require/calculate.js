// importing a module in Node.js
const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

// converting numeric strings to the actual Number type
const input1 = Number(process.argv[2]);
const input2 = Number(process.argv[4]);

if (process.argv[3] === 'plus') {
  // adding
  const result = add.add(input1, input2);
  console.log('result:', result);

} else if (process.argv[3] === 'minus') {
  // subtracting
  const result = subtract.subtract(input1, input2);
  console.log('result:', result);

} else if (process.argv[3] === 'times') {
  // multiply
  const result = multiply.product(input1, input2);
  console.log('result:', result);

} else if (process.argv[3] === 'over') {
  // dividing
  const result = divide.quotient(input1, input2);
  console.log('result:', result);

} else {
  console.log('invalid operation');
}
