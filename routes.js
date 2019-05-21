/**
 * This function comment is parsed by doctrine
 * @security JWT
 * @route GET /api
 * @group foo - Operations about user
 * @param {string} email.query.required - username or email - eg: user@domain
 * @param {string} password.query.required - user's password.
 * @returns {object} 200 - An array of user info
 * @returns {Error}  404 - Dont Found
 */



function foo() { console.log('foo'); }
module.exports = foo;