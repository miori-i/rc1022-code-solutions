const fs = require('fs');

const text = Math.random().toString();
fs.writeFile('random.txt', text + '\n', 'utf8', err => {
  if (err) throw err;
});
