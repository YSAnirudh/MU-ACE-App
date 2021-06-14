import React from 'react';
import {BackendURL} from '../constants/Backend';

export const loginUser = (userData, setIsLogin, setUserId) => {
    const options = {
        headers: {'Access-Control-Allow-Origin': '*'},
    };
    // console.log(userData);

    fetch(BackendURL + 'api/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(userData),
    })
        .then((res) => {
            if (res.status === 400) {
                return 'Error';
            } else {
                return res.json();
            }
        })
        .then((res) => {
            if (res === 'Error') {
                alert('Email or Password is Invalid');
            } else {
                setIsLogin(false);
                setUserId(res.userId);
            }
        })
        .catch((err) => {
            console.log(err);
        });

    // localStorage.setItem('userId', userId);
    //     setIsLogin(false);
    //     history.push('/home');
};
