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
import { styles } from "../../constants/DiscussionStyles"

export default function AvailabilityScreen ({navigation}) {
    return (
        <View style={styles.container}>
                <Image source={require('../../assets/logo3.png')} style={styles.backgroundImage}/>
                <Text>
                    AvailabilityScreen
                </Text>
                <Button 
                    title="Go to View Post"
                    onPress= {() => navigation.navigate("View Post")}/>
                <Button 
                    title="Go to Create"
                    onPress= {() => navigation.navigate("Create")}/>
                <Button 
                    title="Go to Profile"
                    onPress= {() => navigation.navigate("Profile")}/>
        </View>
    );
}