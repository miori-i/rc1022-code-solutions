const express = require('express');
const app = express();
const fs = require('fs');

const data = require('./data.json');

// Clients can GET a list of notes.
app.get('/api/notes', (req, res) => {
  const notesArray = [];
  for (const property in data.notes) {
    notesArray.push(data.notes[property]);
  }
  res.status(200).json(notesArray);
});

// Clients can GET a single note by id.
app.get('/api/notes/:id', (req, res) => {

  let id = Number(req.params.id);

  if (Number.isInteger(id) && id > 0) {
    id = String(id);
    if (id in data.notes) {
      res.status(200).json(data.notes[id]);

    } else {
      const cannotFind = {
        error: null
      };
      const cannotFindMessage = 'cannot find note with id ' + id;
      cannotFind.error = cannotFindMessage;
      res.status(404).json(cannotFind);
    }

  } else {
    const notPositiveInteger = {
      error: 'id must be a positive integer'
    };
    res.status(400).json(notPositiveInteger);
  }
});

// Clients can POST a new note.
const jsonMiddleWare = express.json();
app.use(jsonMiddleWare);

app.post('/api/notes', (req, res) => {
  const newContent = req.body;

  if ('content' in newContent) {
    // Add id property to newContent object
    newContent.id = data.nextId;

    // Update the object in data.json by adding the newContent object
    data.notes[data.nextId] = newContent;
    data.nextId++;

    fs.writeFile('data.json', JSON.stringify(data, null, 2), 'utf8', err => {
      if (err) {
        console.error(err);
        const unexpectedError = {
          error: 'An unexpected error occurred.'
        };
        res.status(500).json(unexpectedError);
        return;
      }
      res.status(201).json(newContent);
    });

  } else {
    const contentRequired = {
      error: 'content is a required field'
    };
    res.status(400).json(contentRequired);
  }
});

// // Clients can DELETE a note by id.
app.delete('/api/notes/:id', (req, res) => {

  let id = Number(req.params.id);

  if (Number.isInteger(id) && id > 0) {
    id = String(id);

    if (id in data.notes) {
      delete data.notes[id];

      fs.writeFile('data.json', JSON.stringify(data, null, 2), 'utf8', err => {
        if (err) {
          console.error(err);
          const unexpectedError = {
            error: 'An unexpected error occurred.'
          };
          res.status(500).json(unexpectedError);
          return;
        }
        res.sendStatus(204);
      });

    } else {
      const cannotFind = {
        error: null
      };
      const cannotFindMessage = 'cannot find note with id ' + id;
      cannotFind.error = cannotFindMessage;
      res.status(404).json(cannotFind);
    }

  } else {
    const notPositiveInteger = {
      error: 'id must be a positive integer'
    };
    res.status(400).json(notPositiveInteger);
  }
});

// Clients can replace a note (PUT) by id.
app.put('/api/notes/:id', (req, res) => {

  const newContent = req.body;

  let id = Number(req.params.id);

  if (Number.isInteger(id) && id > 0) { // positive integer
    id = String(id);
    if (id in data.notes) { // the id exists in data.notes
      if ('content' in newContent) { // content was filled in req.body

        data.notes[id] = newContent;
        id = Number(id);
        newContent.id = id;

        fs.writeFile('data.json', JSON.stringify(data, null, 2), 'utf8', err => {
          if (err) {
            console.error(err);
            const unexpectedError = {
              error: 'An unexpected error occurred.'
            };
            res.status(500).json(unexpectedError);
            return;
          }
          res.status(200).json(newContent);
        });

      } else {
        const contentRequired = {
          error: 'content is a required field'
        };
        res.status(400).json(contentRequired);
      }

    } else {
      const cannotFind = {
        error: null
      };
      const cannotFindMessage = 'cannot find note with id ' + id;
      cannotFind.error = cannotFindMessage;
      res.status(404).json(cannotFind);
    }

  } else {
    const notPositiveInteger = {
      error: 'id must be a positive integer'
    };
    res.status(400).json(notPositiveInteger);
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
