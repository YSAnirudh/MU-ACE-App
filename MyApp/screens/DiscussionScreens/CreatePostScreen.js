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
export default function CreatePostScreen ({navigation}) {
    return (
        <View>
            <Image source={require('../../assets/logo3.png')} style={styles.backgroundImage}/>
            <Text>
                CreateScreen
            </Text>
            <Button 
                title="Go to View Post"
                onPress= {() => navigation.navigate("View Post")}/>
            <Button 
                title="Go to Availability"
                onPress= {() => navigation.navigate("Availability")}/>
            <Button 
                title="Go to Profile"
                onPress= {() => navigation.navigate("Profile")}/>
        </View>
    );
}
