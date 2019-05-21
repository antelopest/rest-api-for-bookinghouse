'use strict'

const logger = require('morgan');
const bodyParser = require('body-parser');

function connectMiddaleware(app) {
  app.use(logger('dev'));
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(bodyParser.json());
  app.use('/api/docs', (req, res) => {
    res.redirect('/api-docs');
  });
};

module.exports = connectMiddaleware;