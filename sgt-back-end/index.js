/* =============================================================================
  Commands to set up before start coding

   // Create a new database named studentGradeTable
   createdb studentGradeTable

   // Import the provided schema.sql
   psql -d studentGradeTable -f schema.sql

   // Import the sample data.sql
   psql -d studentGradeTable -f data.sql

   // Create a new package.json
   pm init -y

   // Install the express package
   npm install express

   // Install the pg package
   npm i pg

   // Confirm that the PostgreSQL database server is running
   sudo service postgresql status

   // Start the pgweb GUI tool for PostgreSQL
   pgweb --db=studentGradeTable
   then visit http://localhost:8081 in your browser

   // Install the nodemon package
   npm i nodemon
   -- then update the scripts in the package.json file like:
   “scripts”: {
    “start”: “node index.js”,
    “dev”: “nodemon index.js”
   }

   // Launch the server in watch mode so that it starts your server
   // and automatically restart it if any of your JavaScript files are changed.
   npm run dev

   // To test
   Terminal 1: node index.js
   Terminal2: http -v get localhost:3000/api/grades/1  ←this is just example

============================================================================= */

const express = require('express');
const app = express();

/* ----------------------------------------------------------
   Create a database connection object to use the pg package.
------------------------------------------------------------- */
const pg = require('pg');

// only create ONE pool for your whole server
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

/* --------------------------------------------------------
   Clients can GET a grade by its gradeId. (Given example)
----------------------------------------------------------- */
app.get('/api/grades/:gradeId', (req, res, next) => {
  // validate the "inputs" FIRST
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    // there is no way that a matching grade could be found
    // so we immediately respond to the client and STOP the code
    // with a return statement
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  }
  // Ok, the input is reasonable, time to query the database.
  const sql = `
    select "gradeId",
           "name",
           "course",
           "score",
           "createdAt"
      from "grades"
     where "gradeId" = $1
  `;
  // 👆 We are NOT putting the user input directly into our query
  const params = [gradeId];
  // 👆 instead, we are sending the user input in a separate array
  /**
   * review the documentation on parameterized queries here:
   * https://node-postgres.com/features/queries#parameterized-query
   * you'll be using this information to prevent SQL injection attacks
   *
   * https://www.youtube.com/watch?v=_jKylhJtPmI
   */
  db.query(sql, params)
    .then(result => {
      // the query succeeded, even if nothing was found
      // the Result object will include an array of rows
      // see the docs on results
      // https://node-postgres.com/api/result
      const grade = result.rows[0];
      if (!grade) {
        // we could not have known ahead of time without actually querying the db
        // but the specific grade being requested was not found in the database
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        // the specific grade was found in the database, yay!
        res.json(grade);
      }
    })
    .catch(err => {
      // the query failed for some reason
      // possibly due to a syntax error in the SQL statement
      // print the error to STDERR (the terminal) for debugging purposes
      console.error(err);
      // respond to the client with a generic 500 error message
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

/* --------------------------------------------------
   Clients can GET all rows from the "grades" table.
   The client should receive an array of objects.
----------------------------------------------------- */
app.get('/api/grades/', (req, res, next) => {
  // Query the database
  const sql = `
    select "gradeId",
           "name",
           "course",
           "score",
           "createdAt"
      from "grades"
  `;
  db.query(sql)
    .then(result => {
      // the query succeeded
      // respond to the client with the status code 200 and all rows from the "grades" table
      res.status(200).json(result.rows);
    })
    .catch(err => {
      // the query failed for some reason
      // possibly due to a syntax error in the SQL statement
      // print the error to STDERR (the terminal) for debugging purposes
      console.error(err);
      // respond to the client with a generic 500 error message
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

/* --------------------------------------------------------------
   Clients can insert(POST) a new grade into the "grades" table
   and returns the created grade.
   The client should receive an object, not an array.
----------------------------------------------------------------- */
// parse JSON request bodies
const jsonMiddleWare = express.json();
app.use(jsonMiddleWare);

app.post('/api/grades/', (req, res, next) => {
  // validate the "inputs" FIRST
  const newGrade = req.body;
  if ('course' in newGrade === false || 'name' in newGrade === false || 'score' in newGrade === false || !Number.isInteger(newGrade.score) || newGrade.score < 0 || newGrade.score > 100) {
    // there is no way that the "inputs" could be inserted
    // so we immediately respond to the client and STOP the code
    // with a return statement
    res.status(400).json({
      error: 'An invalid/missing name, course, or score.'
    });
    return;
  }
  // query the database
  const sql = `
    insert into "grades" ("course", "name", "score")
    values ($1, $2, $3)
    returning *
  `;
  // send the user input in a separate array instead of putting the user input directory into our query
  const params = [newGrade.course, newGrade.name, newGrade.score];

  db.query(sql, params)
    .then(result => {
      // the query succeeded
      // respond to the client with the status code 200 and created grade object
      res.status(201).json(result.rows[0]);
    })
    .catch(err => {
    // the query failed for some reason
    // possibly due to a syntax error in the SQL statement
    // print the error to STDERR (the terminal) for debugging purposes
      console.error(err);
      // respond to the client with a generic 500 error message
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

/* ---------------------------------------------------------
   Clients can update(PUT) a grade in the "grades" table
   and returns the updated grade.
   The client should receive an object.
------------------------------------------------------------ */
app.put('/api/grades/:gradeId', (req, res, next) => {
  // validate the "inputs" FIRST
  const updateGrade = req.body;
  const gradeId = Number(req.params.gradeId);
  if ('course' in updateGrade === false || 'name' in updateGrade === false || 'score' in updateGrade === false || !Number.isInteger(updateGrade.score) || updateGrade.score < 0 || updateGrade.score > 100 || !Number.isInteger(gradeId) || gradeId <= 0) {
    // there is no way that the "inputs" could be inserted
    // so we immediately respond to the client and STOP the code
    // with a return statement
    res.status(400).json({
      error: 'An invalid gradeId or invalid/missing name, course, or score.'
    });
    return;
  }
  const sql = `
    update "grades"
       set "course" = $1,
           "name" = $2,
           "score" = $3
     where "gradeId" = $4
     returning *
  `;
  // send the user input in a separate array instead of putting the user input directory into our query
  const params = [updateGrade.course, updateGrade.name, updateGrade.score, gradeId];

  db.query(sql, params)
    .then(result => {
      // the query succeeded, even if nothing was found
      // the Result object will include an array of rows
      const grade = result.rows[0];
      if (!grade) {
        // we could not have known ahead of time without actually querying the db
        // but the specific grade being requested was not found in the database
        res.status(404).json({
          error: `Cannot find grade with gradeId ${gradeId}`
        });
      } else {
        // the specific grade was found in the database, yay!
        // respond to the client with a status code 200 and a new grade
        res.status(200).json(grade);
      }
    })
    .catch(err => {
      // the query failed for some reason
      // possibly due to a syntax error in the SQL statement
      // print the error to STDERR (the terminal) for debugging purposes
      console.error(err);
      // respond to the client with a generic 500 error message
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

/* ----------------------------------------------------
   Clients can DELETE a grade from the "grades" table.
------------------------------------------------------- */
app.delete('/api/grades/:gradeId', (req, res, next) => {
  // validate the "inputs" FIRST
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    // there is no way that a matching grade could be found
    // so we immediately respond to the client and STOP the code
    // with a return statement
    res.status(400).json({
      error: 'gradeId must be a positive integer'
    });
    return;
  }
  // time to query the database.
  const sql = `
    delete
      from "grades"
     where "gradeId" = $1
     returning *
  `;
  // send the user input in a separate array instead of putting the user input directory into our query
  const params = [gradeId];

  db.query(sql, params)
    .then(result => {
      // the query succeeded, even if nothing was found
      // the Result object will include an array of rows
      const grade = result.rows[0];
      if (!grade) {
        // we could not have known ahead of time without actually querying the db
        // but the specific grade being requested was not found in the database
        res.status(404).json({
          error: `Cannot find grade with gradeId ${gradeId}`
        });
      } else {
        // the specific grade was found in the database, yay!
        // respond to the client with a status code 204
        res.status(204).json(grade);
      }
    })
    .catch(err => {
      // the query failed for some reason
      // possibly due to a syntax error in the SQL statement
      // print the error to STDERR (the terminal) for debugging purposes
      console.error(err);
      // respond to the client with a generic 500 error message
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

/* --- Listen method --- */
app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
