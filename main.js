'use strict'

const express = require('express');

const connectToDatabase = require('./configuration/connection.database');
const connectRoutes = require('./configuration/connection.routes');
const connectMiddaleware = require('./configuration/connection.middleware');
const connectSwagger = require('./configuration/connection.swagger');

const app = express();

(async function initializationAPI() {
  await connectToDatabase();
  await connectRoutes(app);
  await connectMiddaleware(app);
}());

connectSwagger(app);

module.exports = app;