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

import Colors from '../constants/Colors'

const Registration = () => {
    const [Firstname,setFirstname] = useState('')
    const [Lastname,setLastname] = useState('')
  
  const [Email,setEmail] = useState('')
  const [pass,setPass] = useState('')
  const [selectedValue, setSelectedValue] = useState('');
  const [selectedValue1, setSelectedValue1] = useState('');


  return(
    <View style={styles.viewContainer}>
        
    <Image source={require('../assets/logo3.png')} style={styles.logo}/>

     <Text style={styles.ForgotTxt}>Welcome To MU</Text>
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
<View style={styles.Tf}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="CSE" value="cse" />
        <Picker.Item label="EEE" value="eee" />
        <Picker.Item label="MECH" value="mech" />
        <Picker.Item label="CIVIL" value="civil" />
      </Picker>
    </View>
    <View style={styles.Tf}>
      <Picker
        
        selectedValue1={selectedValue1}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue1(itemValue)}
      >
        <Picker.Item label="Student" value="stu" />
        <Picker.Item label="Professori" value="prof" />
      
      </Picker>
    </View>


    <View style={styles.buttonContainer}>

    <LoginButton bname="SignUp" onPress={()=>{Alert.alert("SignUp")}} ></LoginButton>

    <TouchableOpacity style={styles.forgot} onPress={()=>Alert.alert("Forgot?")}>
   
    </TouchableOpacity>

   
      

    </View>
    </View>
  );
}

const styles=StyleSheet.create({
    
  
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
    Tf:{
        
        marginTop:5,
        marginBottom:10,
        width:'50%',
        //height:screenHeight/15,
        borderColor:Colors.Gold,
        borderRadius:20,
        borderWidth:1,
        //float:Left,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:Colors.DarkGrey
    },
});

export default Registration