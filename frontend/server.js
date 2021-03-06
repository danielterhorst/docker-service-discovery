'use strict';

const express = require('express');

// Constants
const PORT = 8000;

// App
const app = express();
app.use(require('morgan')('dev'));
app.get('/', function (req, res) {
  res.send('Hello world\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
