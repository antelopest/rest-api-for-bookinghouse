'use strict'
const express = require('express');
const router = express.Router();

const Services = require('../../service/index');
const userService = Services.UserService;

/**
 * @route POST /auth/local/signin
 * @group auth - Operations auth
 * @param {string} email.query.required - email@domain
 * @param {string} password.query.required - password
 * @returns {object} 200 - An array of user info
 * @returns {Error}  404 - User don't found
 */

/**
* @route POST /users
* @group users - Операции над User
* @param {string} email.query.required - username or email - eg: user@domain
* @param {string} password.query.required - user's password.
* @returns {object} 200 - An array of user info
* @returns {Error}  404 - Dont Found
*/



/**
 * Возвращает количество пользователей в системе
 * @route GET /users/count
 * @group users - Operations resource User
 * @returns {number} 200 - Количество пользователей в системе
 * @returns {Error}  500 - Bad request
 */

router.get('/count', () => { console.log('123'); })

module.exports = router;


// router.post('/auth/local/signup', () => {console.log('123');});
// router.post('/auth/local/signin', () => {console.log('123');});

// get users count 
// {email}
// {id}

// {id} profile 
// {id} passportdetails
