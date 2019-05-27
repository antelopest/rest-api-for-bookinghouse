'use strict'
const userModel = require('../model/user.model');

exports.readUsersCount = async function () {
  const count = await userModel.count({});
  if (count) return count
  else return;
}

exports.readAllUsers = async function () {
  const users = await userModel.find({});
  if (users) return users
  else return;
}

exports.findUserByEmail = async function (email) {
  const foundUser = await userModel.findOne({ 'account.local.email': email });
  if (foundUser) return foundUser
  else return;
}

exports.findUserById = async function (id) {
  const foundUser = await userModel.findById(id);
  if (foundUser) return foundUser
  else return;
}