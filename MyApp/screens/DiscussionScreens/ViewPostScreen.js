import React, { Component } from 'react'
import { 
    StyleSheet, 
    Text, 
    View,
    TextInput,
    Button,
    Image
} from 'react-native';
import {
    DrawerContentScrollView
} from '@react-navigation/drawer'
import Post from '../../components/Post'
import { styles, theme } from "../../constants/Styles"
export default function ViewPostScreen ({navigation}) {
    return (
        <View style={styles().container}>
            <Image source={theme().file} style={styles().backgroundImage}/>
            
            <DrawerContentScrollView 
                style={styles().postWrapper}  
            >
                <Post 
                    userName="Noob1" 
                    userEmail="@noob1"
                    description="Hello"
                />
                <Post userName="Noob2" userEmail="@noob2"/>
                <Post userName="Noob3" userEmail="@noob3"/>
                <Post userName="Noob4" userEmail="@noob4"/>
                <Post userName="Noob5" userEmail="@noob5"/>
                <Post userName="Noob6" userEmail="@noob6"/>
            </DrawerContentScrollView>
            {/* <Text>
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
                onPress= {() => navigation.navigate("Profile")}/> */}
        </View>
    );
}
