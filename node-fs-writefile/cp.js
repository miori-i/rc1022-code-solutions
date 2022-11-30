const fs = require('fs');

fs.readFile(process.argv[2], 'utf8', (err, data) => {
  if (err) throw err;

  fs.writeFile('copy-of-note.txt', data, 'utf8', err => {
    if (err) throw err;
  });
});
