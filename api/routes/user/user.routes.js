'use strict'
const express = require('express');
const router = express.Router();

const Controllers = require('../../controller/index');
const userController = Controllers.UserController;



/**
 * Возвращает всех пользователей в системе
 * @route GET /users
 * @group users - Operations resource User
 * @return {object} 200 - Все пользователи в системе
 * @return {Error} 500 - Bad request
 */

router.get('/', userController.getAllUsers);

/**
 * Возвращает количество пользователей в системе
 * @route GET /users/count
 * @group users - Operations resource User
 * @returns {number} 200 - Количество пользователей в системе
 * @returns {Error}  500 - Bad request
 */

router.get('/count', userController.getUsersCount);

/**
 * Поиск пользователя по Id
 * @route GET /users/id/{id} 
 * @param {string} id.path.require - id
 * @group users - Operations resource User
 * @return {object} 200 - Пользователь найден
 * @return {Error} 404 - User don't found
 */

router.get('/id/:id', userController.getUserById);

/**
 * Поиск пользователя по Email
 * @route GET /users/email/{email} 
 * @param {string} email.path.require - Email
 * @group users - Operations resource User
 * @return {object} 200 - Пользователь найден
 * @return {Error} 404 - User don't found
 */

 router.get('/email/:email', userController.getUserByEmail);

module.exports = router;


// router.post('/auth/local/signup', () => {console.log('123');});
// router.post('/auth/local/signin', () => {console.log('123');});

// get users count 
// {email}
// {id}

// {id} profile 
// {id} passportdetails



// /**
//  * @route POST /auth/local/signin
//  * @group auth - Operations auth
//  * @param {string} email.query.required - email@domain
//  * @param {string} password.query.required - password
//  * @returns {object} 200 - An array of user info
//  * @returns {Error}  404 - User don't found
//  */

// /**
// * @route POST /users
// * @group users - Операции над User
// * @param {string} email.query.required - username or email - eg: user@domain
// * @param {string} password.query.required - user's password.
// * @returns {object} 200 - An array of user info
// * @returns {Error}  404 - Dont Found
// */