'use strict';

const express = require('express');
const { insert } = require('./db');

// Constants
const PORT = 8080;

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World\n');
});

app.post('/', async (req, res) => {
  const date = Date.now();
  try {
    await insert(date);
    res.send(`${date} successfully inserted\n`).status(201);
  } catch(err) {
    console.error(err);
    res.send('Failed to insert\n').status(500);
  }
})

app.listen(PORT);
console.log(`Running on http://localhost:${PORT}`);