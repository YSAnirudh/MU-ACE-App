const Validator = require('validator');
const isEmpty = require('is-empty');

export const validateCreatePostInput = (userData) => {
    let errors = {};

    // Convert empty fields to an empty string so we can use validator functions
    userData.title = !isEmpty(userData.title) ? userData.title : '';
    userData.description = !isEmpty(userData.description)
        ? userData.description
        : '';

    if (Validator.isEmpty(userData.title)) {
        errors.title = 'Title is required\n';
    } else if (!Validator.isLength(userData.title, {min: 1, max: 40})) {
        errors.title = 'Title should be 1-40 characters long.\n';
    }
    if (Validator.isEmpty(userData.description)) {
        errors.description = 'Description is required\n';
    } else if (!Validator.isLength(userData.description, {min: 6, max: 120})) {
        errors.description = 'Description should be 6-120 characters long.\n';
    }
    var msg2 = !isEmpty(errors.title) ? errors.title : '';
    var msg1 = !isEmpty(errors.description) ? errors.description : '';
    var message = msg1 + msg2;

    return {
        message,
        isValid: isEmpty(errors),
    };
};
