const Validator = require('validator');
const isEmpty = require('is-empty');

export const validateLoginInput = (userData) => {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  userData.email = !isEmpty(userData.email) ? userData.email : '';
  userData.password = !isEmpty(userData.password) ? userData.password : '';

  // Email checks
  if (Validator.isEmpty(userData.email)) {
    errors.email = 'Email field is required\n';
  } else if (!Validator.isEmail(userData.email)) {
    errors.email = 'Email is Invalid\n';
  }
  // Password checks
  if (Validator.isEmpty(userData.password)) {
    errors.password = 'Password field is required\n';
  }
  var msg2 = !isEmpty(errors.email) ? errors.email : '';
  var msg1 = !isEmpty(errors.password) ? errors.password : '';
  var message = msg1 + msg2;

  return {
    message,
    isValid: isEmpty(errors),
  };
};
