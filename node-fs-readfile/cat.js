const fs = require('fs');

fs.readFile(process.argv[2], 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);

  fs.readFile(process.argv[3], 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);

    fs.readFile(process.argv[4], 'utf8', (err, data) => {
      if (err) throw err;
      console.log(data);
    });
  });
});
