import React,{useState} from 'react';
import LoginTxtF from '../components/LoginTxtF'
import LoginButton from '../components/LoginButton'
import OutlookBtn from '../components/OutlookBtn'
import {Picker} from '@react-native-picker/picker';
import {
    View,
    StyleSheet,
    Alert,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';

import {koushikMistake} from '../constants/Styles'

const Registration = () => {
    const [Firstname,setFirstname] = useState('')
    const [Lastname,setLastname] = useState('')
  
  const [Email,setEmail] = useState('')
  const [pass,setPass] = useState('')
  const [selectedValue, setSelectedValue] = useState('');
  const [selectedValue1, setSelectedValue1] = useState('');


  return(
    <View style={koushikMistake().viewContainer}>
        
    <Image source={require('../assets/logo3.png')} style={koushikMistake().logo}/>

     <Text style={koushikMistake().ForgotTxt}>Welcome To MU</Text>
    <LoginTxtF 
      label="Firstname" 
      placeholder="Firstname" 
      icon="user" 
      secureTextEntry={true} 
      onChangeText = {(text) => {setFirstname(text)}}
      ></LoginTxtF>
      <LoginTxtF 
      label="Lastname" 
      placeholder="Lastname" 
      icon="user" 
      secureTextEntry={true} 
      onChangeText = {(text) => {setLastname(text)}}
      ></LoginTxtF>
  
  <LoginTxtF 
      label="Email" 
      placeholder="Email" 
      icon="mail" 
      keyboardType="email-address" 
      autoCapitalize="none" 
      autoCorrect={false}  
      onChangeText = {(text) => {setEmail(text)}}
      ></LoginTxtF>
   
   <LoginTxtF 
      label="Password" 
      placeholder="Password" 
      icon="lock" 
      secureTextEntry={true} 
      onChangeText = {(text) => {setPass(text)}}
      ></LoginTxtF>
<View style={koushikMistake().Tf}>
      <Picker
        selectedValue={selectedValue}
        style={koushikMistake().dept}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="CSE" value="cse" />
        <Picker.Item label="EEE" value="eee" />
        <Picker.Item label="MECH" value="mech" />
        <Picker.Item label="CIVIL" value="civil" />
      </Picker>
    </View>
    <View style={koushikMistake().Tf}>
      <Picker
        
        selectedValue1={selectedValue1}
        style={koushikMistake().dept}
        onValueChange={(itemValue, itemIndex) => setSelectedValue1(itemValue)}
      >
        <Picker.Item label="Student" value="stu" />
        <Picker.Item label="Professori" value="prof" />
      
      </Picker>
    </View>


    <View style={koushikMistake().buttonContainer}>

    <LoginButton bname="SignUp" onPress={()=>{Alert.alert("SignUp")}} ></LoginButton>

    <TouchableOpacity style={koushikMistake().forgot} onPress={()=>Alert.alert("Forgot?")}>
   
    </TouchableOpacity>

   
      

    </View>
    </View>
  );
}
export default Registration