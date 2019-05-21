'use strict'
const Models = require('../../models/index');
const userModel = Models.UserModel;

const bctypt = require('bcrypt');

exports.readUsersCount = async function () {
  const count = await userModel.count({});
  if (count) return count
  else return;
}

exports.readAllUsers = async function () {
  const users = await userModel.find();
  if (users) return users
  else return;
}

exports.findUserByEmail = async function () {
  const foundUser = await userModel.findOne({ 'account.local.email': 'webantelopestudio@gmail.com'});
  if (foundUser) return foundUser
  else return;
}

exports.findUserById = async function (id) {
  const foundUser = await userModel.findById(id);
  if (foundUser) return foundUser
  else return;
}