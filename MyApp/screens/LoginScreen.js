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
import { ThemeProvider } from '../components/Theme'
import { styles as noobStyles } from '../constants/Styles'
import Colors from '../constants/Colors'
const LoginScreen = () => {
  const [username,setUsername] = useState('')
  const [pass,setPass] = useState('')

  return(
    <View style={styles.viewContainer}>

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

    <View style={styles.buttonContainer}>

    <LoginButton bname="Login" onPress={()=>{Alert.alert("Login")}} ></LoginButton>

    <TouchableOpacity style={styles.forgot} onPress={()=>Alert.alert("Forgot?")}>
    <Text style={styles.ForgotTxt}>Forgot Password?</Text>
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

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  label: {
    width: '100%',
    fontFamily: 'OpenSansBold',
    marginVertical: 8
  },
  viewContainer:{
    flex:1,
    backgroundColor:Colors.Grey,
    alignItems:'center',
    justifyContent:'center',
    padding:21,
    paddingTop:0
  },
  logo:{
    alignSelf:'center',
    paddingBottom:150,
    height:120,
    width:200,
    resizeMode:'cover'
  },
  input: {
    width: '100%',
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1
  },
  buttonContainer: {
    marginTop: 10,
    alignSelf:'stretch'
  },
  ForgotTxt: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.Gold
  },
  forgot: {
    marginVertical: 38,
    alignItems:'center'
  },
})

export default () => (
  <ThemeProvider>
      <LoginScreen/>
  </ThemeProvider>
);