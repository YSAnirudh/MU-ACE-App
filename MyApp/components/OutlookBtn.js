import React from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {screenHeight, screenWidth} from '../utils/ScreenParams';

const OutlookBtn = ({bname, type, color, backgroundColor, ...other}) => {
    var bgColor = backgroundColor;
    return (
        <TouchableOpacity
            style={[styles.buttonStyle, {backgroundColor: bgColor}]}
            {...other}
        >
            <View style={styles.wrapIcon}>
                <MaterialCommunityIcons
                    name={type}
                    style={styles.icon}
                    size={24}
                    color="black"
                />
            </View>
            <View style={styles.buttonTextWrapper}>
                <Text style={[styles.buttonText, {color: color}]}>{bname}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonStyle: {
        marginTop: 1,
        width: '100%',
        height: screenHeight / 15,
        padding: 10,
        flexDirection: 'row',
        borderRadius: 20,
    },
    buttonText: {
        fontSize: 18,
    },
    icon: {
        fontWeight: 'bold',
    },
    wrapIcon: {
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonTextWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default OutlookBtn;
