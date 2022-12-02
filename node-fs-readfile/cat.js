const fs = require('fs');

var index = 2;

function read(index) {
  if (index < process.argv.length) {
    fs.readFile(process.argv[index], 'utf8', (err, data) => {
      if (err) throw err;
      console.log(data);
      index++;
      read(index);
    });
  }

}

read(index);

/*

// recursive ベースケースを持つ、他の方法

function read(index) {
  if (index === process.argv.length) { //base case
    return;
  }

  fs.readFile(process.argv[index], 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
    index++;
    read(index);
  });
}

*/
