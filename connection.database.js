'use strict'
const mongoose = require('mongoose');
const config = require('config');

const settingsConnect = {
  useNewUrlParser: true,
  useCreateIndex: true
} 

async function connectToDatabase() {
  await mongoose.connect(config.get('database.dbURI'), settingsConnect)
    .then(() => console.log('Connection to database Mongodb'))
    .catch(() => console.log('Not connection to database Mongodb'));
} 

module.exports = connectToDatabase;