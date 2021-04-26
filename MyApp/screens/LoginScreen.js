import React,{useState} from 'react';
import LoginTxtF from '../components/LoginTxtF'
import LoginButton from '../components/LoginButton'
import OutlookBtn from '../components/OutlookBtn'
import {
    View,
    StyleSheet,
    Alert,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';

import { styles } from '../constants/Styles'

const LoginScreen = () => {
  const [username,setUsername] = useState('')
  const [pass,setPass] = useState('')

  return(
    <View style={styles().viewContainer}>

    <Image source={require('../assets/logo3.png')} style={styles.logo}/>
    <LoginTxtF 
      label="Username" 
      placeholder="Username" 
      icon="user" 
      keyboardType="email-address" 
      autoCapitalize="none" 
      autoCorrect={false}  
      onChangeText = {(text) => {setUsername(text)}}
      ></LoginTxtF>
    <LoginTxtF 
      label="Password" 
      placeholder="Password" 
      icon="lock" 
      secureTextEntry={true} 
      onChangeText = {(text) => {setPass(text)}}
      ></LoginTxtF>

    <View style={styles().buttonContainer}>

    <LoginButton bname="Login" onPress={()=>{Alert.alert("Login")}} ></LoginButton>

    <TouchableOpacity style={styles().forgot} onPress={()=>Alert.alert("Forgot?")}>
    <Text style={styles().ForgotTxt}>Forgot Password?</Text>
    </TouchableOpacity>

    <OutlookBtn 
      bname="Sign in with Outlook" 
      type="microsoft-outlook" 
      backgroundColor="#0072c6" 
      onPress={()=>{Alert.alert("Outlook")}}
      ></OutlookBtn>

    </View>
    </View>
  );
}

export default LoginScreen