const express = require('express');
const app = express();

let nextId = 1;
const grades = {};

/* Add a route to the app that responds to GET requests at '/api/grades'
  by sending back an array of all grades in JSON format with res.json().  */
app.get('/api/grades', (req, res) => {
  const gradesArray = [];
  for (const property in grades) {
    gradesArray.push(grades[property]);
  }

  res.status(200).json(gradesArray);

});

/* Create an instance of the JSON parsing middleware by calling the json() method of the express object. */
const jsonMiddleWare = express.json();

/* Enhance your app by passing the JSON middleware to app.use().Now your app knows how to parse JSON request bodies.
  express.json() returns a “middleware” and app.use() is how you “mount” a middleware.
  Every middleware (or route) mounted after the JSON middleware will have an object on req.body */
app.use(jsonMiddleWare);

/* Add a route to your app that responds to POST requests at '/api/grades' that includes a JSON body containing a new grade object.
   The server should respond with the same grade object it received, plus its id using the status code 201.
   Each new object should receive a larger "id". */
app.post('/api/grades', (req, res) => {
  // Make an object by the input values and add id property to it
  const grade = req.body;
  grade.id = nextId;

  // Update the grades object by adding the grade object
  grades[nextId] = grade;
  nextId++;

  // The server should respond with the same grade object it received, plus its id using the status code 201
  res.status(201).send(grade);

});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
