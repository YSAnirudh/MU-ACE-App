import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

import {screenHeight, screenWidth} from '../utils/ScreenParams';
import {styles} from '../constants/Styles';
const LoginButton = ({bname, ...other}) => {
    return (
        <TouchableOpacity style={styles().buttonStyleLB} {...other}>
            <Text style={styles().buttonTextLB}>{bname}</Text>
        </TouchableOpacity>
    );
};

export default LoginButton;
