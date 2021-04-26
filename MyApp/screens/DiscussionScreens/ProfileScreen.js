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
export default function ProfileScreen ({navigation}) {
    return (
        <View style={styles().container}>
            <Image source={theme().file} style={styles().backgroundImage}/>
            <Text>
                ProfileScreen
            </Text>
            <Button 
                title="Go to View Post"
                onPress= {() => navigation.navigate("Forum")}/>
            <Button 
                title="Go to Create"
                onPress= {() => navigation.navigate("Create Post")}/>
            <Button 
                title="Go to Availability"
                onPress= {() => navigation.navigate("Availability")}/>
        </View>
    );
}