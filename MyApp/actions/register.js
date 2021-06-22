import React from 'react';
import {BackendURL} from '../constants/Backend';

export const registerUser = (userData, navigation, isLoading, setIsLoading) => {
    setIsLoading(true);
    fetch(BackendURL + 'api/signup', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(userData),
    })
        .then((res) => {
            if (res.status === 422 || res.status === 500) {
                return 'Error';
            } else {
                return res.json();
            }
        })
        .then((res) => {
            if (res === 'Error') {
                alert('User Already Present');
                setIsLoading(false);
            } else {
                setIsLoading(false);
                navigation.navigate('Login');
                alert('Registered Successfully!');
            }
        })
        .catch((err) => {
            console.log(err);
        });
};
