import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Button, Image} from 'react-native';
import Colors from '../constants/Colors';
import {styles, theme} from '../constants/Styles';

export default function SettingsScreen({navigation}) {
    return (
        <View style={styles().container}>
            <Image source={theme().file} style={styles().backgroundImage} />
            <Text>SettingsScreen</Text>
            <Button
                title="BACK"
                style={styles().settingBackButton}
                onPress={() => navigation.goBack()}
            />
        </View>
    );
}
