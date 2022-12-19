// require() both express and Node's path module.
const express = require('express');
const path = require('path');

// Create a basic Express app object.
const app = express();

// Use path.join() to combine __dirname and your public directory's name ('public')
// into the absolute path to your public directory. Put the return value into a variable.
const filepath = path.join(__dirname, 'public');
console.log(filepath);

// Use express.static() to create a middleware function that will automatically serve
// any files located in your public directory. Put the return value into a variable.
const middleware = express.static('public');

// Mount the middleware you just created with the app.use().
app.use(middleware);

// Listen on port 3000.
app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});

// Start your server with node.
// --  node index.js

// Test your server by sending GET requests to localhost:3000 with HTTPie.
// -- http -v get localhost:3000/index.html
