const Validator = require('validator');
const isEmpty = require('is-empty');

export const validateRegisterInput = (userData) => {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  userData.firstName = !isEmpty(userData.firstName) ? userData.firstName : '';
  userData.lastName = !isEmpty(userData.lastName) ? userData.lastName : '';
  userData.email = !isEmpty(userData.email) ? userData.email : '';
  userData.password = !isEmpty(userData.password) ? userData.password : '';
  userData.department = !isEmpty(userData.department)
    ? userData.department
    : '';
  userData.userType = !isEmpty(userData.userType) ? userData.userType : '';
  // username checks
  if (Validator.isEmpty(userData.firstName)) {
    errors.firstName = 'First Name field is required\n';
  }
  if (Validator.isEmpty(userData.lastName)) {
    errors.lastName = 'Last Name field is required\n';
  }
  // Email checks
  if (Validator.isEmpty(userData.email)) {
    errors.email = 'Email field is required\n';
  } else if (!Validator.isEmail(userData.email)) {
    errors.email = 'Email is invalid\n';
  }

  // Password checks
  if (Validator.isEmpty(userData.password)) {
    errors.password = 'Password field is required\n';
  } else if (!Validator.isLength(userData.password, {min: 8, max: 100})) {
    errors.password = 'Password must be at least 8 characters\n';
  }
  if (Validator.isEmpty(userData.department)) {
    errors.department = 'Department is required\n';
  }
  if (Validator.isEmpty(userData.userType)) {
    errors.userType = 'UserType is required\n';
  }

  var msg1 = !isEmpty(errors.firstName) ? errors.firstName : '';
  var msg2 = !isEmpty(errors.lastName) ? errors.lastName : '';
  var msg3 = !isEmpty(errors.password) ? errors.password : '';
  var msg4 = !isEmpty(errors.email) ? errors.email : '';
  var msg5 = !isEmpty(errors.department) ? errors.department : '';
  var msg6 = !isEmpty(errors.userType) ? errors.userType : '';
  var message = msg1 + msg2 + msg3 + msg4 + msg5 + msg6;
  return {
    message,
    isValid: isEmpty(errors),
  };
};
