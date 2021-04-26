import React, { Component } from 'react'
import { 
    StyleSheet, 
    Text, 
    View,
    TextInput,
    Button,
    Image
} from 'react-native';
import Colors from '../../constants/Colors'
import { styles, theme } from "../../constants/Styles"

import { styles } from "../../constants/DiscussionStyles"
import Status from "../../components/Status"

export default function AvailabilityScreen ({navigation}) {
    return (
        <View style={styles.container}>
                <Image source={require('../../assets/logo3.png')} style={styles.backgroundImage}/>
                <Status/>
        </View>
    );
}