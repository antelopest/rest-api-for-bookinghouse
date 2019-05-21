const Models = require('../../models/index');
const userModel = Models.UserModel;

const bctypt = require('bcrypt');
const { check, validationResult } = require('express-validator/check');

exports.createLocalUser = async function (newLocalUser) {
  
}