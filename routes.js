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

function foo() { console.log('foo'); }
module.exports = foo;