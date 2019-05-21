'use strict'
const mongoose = require('mongoose');

/**
 * @typedef User
 * @property {string} id - Первичный ключ документа User
 * @property {<Account>} 
 * @property {string} name.required - Some description for product
 * 
 */

const UserSchema = new mongoose.Schema({
  dateCreated: {
    type: Date,
    default: new Date(),
  },
  dateUpdated: {
    type: Date,
    default: new Date(),
  },
  verified: {
    type: Boolean,
    default: false,
  },
  role: {
    type: String,
    default: 'user',
  },
  account: {
    local: {
      email: {
        type: String,
        lowercase: true,
        unique: true,
      },
      password: {
        type: String,
      },
    },
    facebook: {
      id: {
        type: String,
      },
      token: {
        type: String,
      },
      name: {
        type: String,
      },
      email: {
        type: String,
      },
    },
    google: {
      id: {
        type: String,
      },
      token: {
        type: String,
      },
      name: {
        type: String,
      },
      email: {
        type: String,
      },
    },
  },
  profile: {
    surname: {
      type: String,
    },
    name: {
      type: String,
    },
    patronymic: {
      type: String,
    },
    dateofbirth: {
      type: String,
    },
    passportdetails: {
      nationality: {
        type: String,
      },
      series: {
        type: String,
      },
      number: {
        type: String,
      },
      whoissued: {
        type: String,
      },
      whenissued: {
        type: String,
      },
      codesubdivision: {
        type: String,
      },
    },
  },
});
