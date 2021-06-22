import React from 'react';
import {BackendURL} from '../constants/Backend';

export const loginUser = (
    userData,
    setIsLogin,
    setUserId,
    isLoading,
    setIsLoading
) => {
    const options = {
        headers: {'Access-Control-Allow-Origin': '*'},
    };
    // console.log(userData);
    setIsLoading(true);
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
                setIsLoading(false);
            } else {
                setUserId(res.userId);
                setTimeout(() => {}, 2000);
                setIsLoading(false);
                setIsLogin(false);
            }
        })
        .catch((err) => {
            console.log(err);
        });

    // localStorage.setItem('userId', userId);
    //     setIsLogin(false);
    //     history.push('/home');
};
