const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

// inicio de express app
const app = express();

// log de requests al servicdor
app.use(logger('dev'));

// parseo del cuerpo de los datos (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// inicio de mesnaje
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));

module.exports = app;
