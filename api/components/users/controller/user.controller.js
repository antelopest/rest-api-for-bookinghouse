'use strict'
const userService = require('../service/user.service');

exports.getUsersCount = async function(req, res) {
  const count = await userService.readUsersCount();
  (count) ? (res.status(200).json({
    count: count,
  })) : (res.status(500).json({
    message: 'Bad request'
  }));
};

exports.getAllUsers = async function(req, res) {
  const users = await userService.readAllUsers();
  (users) ? (res.status(200).json({
    users: users,
  })) : (res.status(500).json({
    message: 'Bad request',
  }));
}

exports.getUserByEmail = async function(req, res) {
  const foundUser = await userService.findUserByEmail('webantelopestudio@gmail.com');
  (foundUser) ? (res.status(200).json({
    user: foundUser,
  })) : (res.status(404).json({
    message: 'User dont found',
  }));
}

exports.getUserById = async function(req, res) {
  const foundUser = await userService.findUserById('5ce1bc2c57e0aa034f72f654'); 
  (foundUser) ? (res.status(200).json({
    user: foundUser,
  })) : (res.status(404).json({
    message: 'User dont found'
  }));
}