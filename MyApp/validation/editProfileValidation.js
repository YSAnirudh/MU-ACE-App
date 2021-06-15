const Validator = require('validator');
const isEmpty = require('is-empty');

export const validateEditProfileInput = (userData) => {
    let errors = {};

    // Convert empty fields to an empty string so we can use validator functions
    userData.firstName = !isEmpty(userData.firstName) ? userData.firstName : '';
    userData.lastName = !isEmpty(userData.lastName) ? userData.lastName : '';
    userData.password = !isEmpty(userData.password) ? userData.password : '';
    userData.confirmPassword = !isEmpty(userData.confirmPassword)
        ? userData.confirmPassword
        : '';
    userData.description = !isEmpty(userData.description)
        ? userData.description
        : '';
    // username checks
    if (Validator.isEmpty(userData.firstName)) {
        errors.firstName = 'First Name field is required\n';
    }
    if (Validator.isEmpty(userData.lastName)) {
        errors.lastName = 'Last Name field is required\n';
    }
    // Email checks
    if (Validator.isEmpty(userData.description)) {
        errors.description = 'Description field is required\n';
    }

    // Password checks
    if (Validator.isEmpty(userData.password)) {
        errors.password = 'Password field is required\n';
    } else if (!Validator.isLength(userData.password, {min: 8, max: 100})) {
        errors.password = 'Password must be at least 8 characters\n';
    }

    // Password checks
    if (Validator.isEmpty(userData.confirmPassword)) {
        errors.confirmPassword = 'Confirm Password field is required\n';
    }

    if (!Validator.equals(userData.password, userData.confirmPassword)) {
        errors.confirmPassword = 'Passwords Should Match\n';
    }
    var msg1 = !isEmpty(errors.firstName) ? errors.firstName : '';
    var msg2 = !isEmpty(errors.lastName) ? errors.lastName : '';
    var msg3 = !isEmpty(errors.password) ? errors.password : '';
    var msg4 = !isEmpty(errors.confirmPassword) ? errors.confirmPassword : '';
    var msg5 = !isEmpty(errors.description) ? errors.description : '';
    var message = msg1 + msg2 + msg3 + msg4 + msg5;
    return {
        message,
        isValid: isEmpty(errors),
    };
};
