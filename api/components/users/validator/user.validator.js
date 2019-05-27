'use strict'
const { buildCheckFunction, validationResult, check } = require('express-validator/check');
const checkBodyAndQuery = buildCheckFunction(['body', 'query']);

// exports.validatorEmail = function(req, res, next) {
//   req.checkBodyAndQuery('email').isEmail();
//   const req.getValidationResult().then((validationResult) => {
//       re
//     } 
//   // [
//   //   checkBodyAndQuery('email').isEmail(),
//   // ]
//   // const errors = validationResult(req);
//   // if (!errors.isEmpty()) {
//   //   return res.status(422).json({
//   //     errors: errors.array()
//   //   })
//   // }
//   // next();

// }

// module.exports = {
//   validatorEmail: [
//     check('email')
//       .not().isEmpty().withMessage('Поле Email не заполнено.')
//       .isEmail(),
//   ],    
//  function (req, res) {
//    const errors = validationResult(req);
//    console.log('123');
//    if (!errors.isEmpty()) {
//      res.status(400).json(errors.array()); 
//    } 
//  }
  
// }