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
export default function ViewPostScreen ({navigation}) {
    return (
        <View style={styles().container}>
            <Image source={theme().file} style={styles().backgroundImage}/>
            <Text>
                PostScreen
            </Text>
            <Button 
                title="Go to Create"
                onPress= {() => navigation.navigate("Create Post")}/>
            <Button 
                title="Go to Availability"
                onPress= {() => navigation.navigate("Availability")}/>
            <Button 
                title="Go to Profile"
                onPress= {() => navigation.navigate("Profile")}/>
        </View>
    );
}
