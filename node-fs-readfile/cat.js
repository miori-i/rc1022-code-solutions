const fs = require('fs');

// fs.readFile(process.argv[2], 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);

//   fs.readFile(process.argv[3], 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);

//     fs.readFile(process.argv[4], 'utf8', (err, data) => {
//       if (err) throw err;
//       console.log(data);
//     });
//   });
// });

// let count = 2;
// fs.readFile(process.argv[count], 'utf8', (err, data) => {
//   if (err) {
//     throw err;
//   } else if (process.argv.length === 1) {
//     console.log(data);
//   } else if (count <= process.argv.length) {
//     fs.readFile(process.argv[count], 'utf8', (err, data) => {
//       if (err) throw err;
//       console.log(data);

//     });
//     count++;
//   }

// });
var array = [];

for (var i = 2; i < process.argv.length; i++) {
  read(i);
  console.log(array.length);
}

function read(index) {

  array.push(
    fs.readFile(process.argv[index], 'utf8', (err, data) => {
      if (err) throw err;
      console.log(data);
    })
  );
  return array;
}

// for (var i = 2; i < process.argv.length; i++) {
//   var array = [];
//   fs.readFile(process.argv[i], 'utf8', (err, data) => {
//     if (err) throw err;
//     // console.log(data);
//     array.push(data);
//   });
//   console.log('array:', array);
// }
