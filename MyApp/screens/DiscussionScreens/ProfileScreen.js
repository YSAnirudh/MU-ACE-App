import React,{useState} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import {Title,Card} from 'react-native-paper'
import {MaterialIcons} from '@expo/vector-icons'
import {Button, Avatar} from 'react-native-paper'
import { styles, theme, profileStyles } from "../../constants/Styles"

export default function ProfileScreen ({navigation}) {
    return (
        <View style={profileStyles().root}>
            <View 
                style={{alignItems:"center"}}
            >
                <Avatar.Image
                    source={require('../../assets/logo2.png')}
                    size={140}
                />
                {/* <Image 
                     
                    source={require("../../assets/logo2.png")}
                /> */}
            </View>
            <View style={{alignItems:"center",margin:7}}>
                <Title style={{fontSize:17, color:theme().text}}>Koushik Y</Title>
                <Text style={{fontSize:15, color:theme().text}}>Noobda</Text>
            </View>
            
                <View style={profileStyles().emailBox}>
                    <MaterialIcons name="email" size={27} color={theme().iconColor}/>
                    <Text style={profileStyles().myText}>koushiky@gmail.com</Text>
                
                </View>
            <Button 
                icon="account-edit" 
                mode="outlined" 
                //theme={pageTheme} 
                color={theme().iconColor} 
                onPress={() => {}} style={profileStyles().buttonStyle} 
            >
                <Text style={profileStyles().buttonText} >Edit Profile</Text>
            </Button>
            <Button 
                icon="logout" 
                mode="outlined" 
                //theme={pageTheme} 
                color={theme().iconColor} 
                onPress={() => {}} style={profileStyles().buttonStyle}
            >
            <Text style={profileStyles().buttonText}>Log out</Text>
            </Button>
        </View>
    );
}