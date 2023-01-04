const { check, validationResult } = require('express-validator');
const { User } = require('../models/index');

exports.runValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      status: 'failed',
      errors: errors.array(),
    });
  }
  next();
};

exports.validationRegister = [
  check('name', 'Name cannot empty').notEmpty(),
  check('phone').notEmpty().withMessage('Phone cannot empty')
    .matches(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)
    .withMessage('Your number is not valid'),
  check('email').notEmpty().withMessage('Email cannot empty')
    .isEmail()
    .withMessage('Your email is not valid')
    .custom(async (value) => {
      try {
        const username = await User.findOne({ where: { email: value } });
        if (username) {
          return Promise.reject('username is also exist');
        }
      } catch (e) {
        console.log(e);
      }
    }),
  check('password').notEmpty().withMessage('Password cannot empty')
    .isLength({ min: 8 })
    .withMessage('password must be at last 8 characters')
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/)
    .withMessage('Password must be contain at least one uppercase, at least one lower case and  at least one special character'),
  check('address', 'Address cannot empty').notEmpty(),
];
