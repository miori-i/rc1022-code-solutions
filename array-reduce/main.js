const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

// sum - all numbers added together
const sum = numbers.reduce((x, y) => x + y);
console.log('sum:', sum);

// product - all numbers multiplied together
const multiplied = numbers.reduce((x, y) => x * y);
console.log('multiplied:', multiplied);

// balance - a number that is the result of combining all transactions in account. The correct answer is 180
const balance = account.reduce((balance, transaction) => {
  if (transaction.type === 'deposit') {
    return balance + transaction.amount;
  }
  return balance - transaction.amount;
}, 0);
console.log('balance:', balance);

// composite - an object that is the result of combining all properties of the objects within traits
const composite = traits.reduce((composite, traits) => {
  return Object.assign(composite, traits);
}, {});
console.log('composite:', composite);
