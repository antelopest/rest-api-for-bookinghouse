'use strict'
const mongoose = require('mongoose');

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

module.exports = mongoose.model('User', UserSchema);

/**
* @typedef User
* @property {string} id - Первичный ключ документа User
* @property {string} role - Роль пользователя в системе
* @property {date} dateCreated - Дата создания учетной записи
* @property {date} dateUpdated - Дата обновления учетной записи
* @property {boolean} verified - Пользователь прошел верификацию
* @property {Account} Account - Учетная запись
* @property {Profile} Profile - Профиль
*/

/**
* @typedef Account
* @property {Local} Local - Локальная учетная запись
* @property {Google} Google - Учетная запись Google
* @property {Facebook} Facebook - Учетная запись Facebook
*/

/**
* @typedef Local
* @property {string} email.required - Электронная почта
* @property {string} password.required - Пароль
*/

/**
* @typedef Profile
* @property {string} surname - Фамилия
* @property {string} name - Имя
* @property {string} patronymic - Отчество
* @property {date} dateOfBirth - Дата рождения
* @property {PassportDetails} PassportDetails - Паспортные данные
*/