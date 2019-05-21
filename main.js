'use strict'

const express = require('express');

const connectToDatabase = require('./connection.database');
const connectMiddaleware = require('./connection.middleware');
const connectSwagger = require('./connection.swagger');

const app = express();

connectToDatabase();
connectMiddaleware(app);

const foo = require('./routes.js');
foo();

connectSwagger(app);
module.exports = app;