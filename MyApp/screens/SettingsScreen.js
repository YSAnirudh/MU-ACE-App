import React, { Component } from 'react'
import { 
    StyleSheet, 
    Text, 
    View,
    TextInput,
    Button,
    Image
} from 'react-native';
import Colors from '../constants/Colors'
import { styles } from "../constants/DiscussionStyles"

export default function SettingsScreen ({navigation}) {
    return (
        <View style={styles.container}>
                <Image source={require('../assets/logo3.png')} style={styles.backgroundImage}/>
                <Text>
                    SettingsScreen
                </Text>
        </View>
    );
}