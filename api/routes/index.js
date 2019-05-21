module.exports = {
  UserRoutes : require('./user/user.routes'),
}

/**
 * This function comment is parsed by doctrine
 * 
 * @route POST /users
 * @group users - Операции над User
 * @param {string} email.query.required - username or email - eg: user@domain
 * @param {string} password.query.required - user's password.
 * @returns {object} 200 - An array of user info
 * @returns {Error}  404 - Dont Found
 */