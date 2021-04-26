import React,{useState} from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'
import {Title,Card} from 'react-native-paper'
import {MaterialIcons} from '@expo/vector-icons'
import {Button} from 'react-native-paper'
import Colors from '../../constants/Colors'
export default function ProfileScreen ({navigation}) {
    return (
        <View style={styles.root}>
        <LinearGradient colors={[Colors.DiscussionProfile,Colors.DiscussionProfile]} style={{height:"20%"}}></LinearGradient>
        <View style={{alignItems:"center",marginTop:-50}}>
        <Image style={{height:140,width:140,borderRadius:70,borderWidth:1,borderColor:Colors.Red}} source={require("../../assets/logo2.png")}/>
        </View>
        <View style={{alignItems:"center",margin:7}}>
            <Title style={{color:Colors.Gold,fontSize:17}}>Koushik Y</Title>
            <Text style={{fontSize:15,color:Colors.Gold}}>Noobda</Text>
        </View>
        
            <View style={styles.emailBox}>
                <MaterialIcons name="email" size={32} color={Colors.Red}/>
                <Text style={styles.myText}>koushiky@gmail.com</Text>
               
            </View>
    
       
        
       
        <Button icon="account-edit" mode="outlined" theme={theme} color={Colors.Red} onPress={() => console.log('Pressed')} style={styles.buttonStyle} >
            <Text style={styles.buttonText} >Edit Profile</Text>
        </Button>
        <Button icon="logout" mode="outlined" theme={theme} color={Colors.Red} onPress={() => console.log('Pressed')} style={styles.buttonStyle}>
           <Text style={styles.buttonText}>Logout</Text>
        </Button>
    
        
        
        
        
        
        </View>
    );
}
const theme={
    colors:{
        primary:Colors.Grey,
        onSurface:Colors.Gold
        
    }
}
const styles=StyleSheet.create({
    root:{
        flex:1,
        backgroundColor:Colors.DiscussionProfile
    },
    myCard:{
        
        marginTop:3,
        padding:8,
        borderColor:Colors.Gold,
        borderWidth:1,
        backgroundColor:Colors.black
    },
    cardContent:{
        flexDirection:'row',
        

    },
    emailBox:{
        flexDirection:'row',
        justifyContent:"center",
        
    },
    myText:{
        fontSize:16,
        marginTop:3,
        marginLeft:3,
        color:Colors.Gold,
        fontFamily:"sans-serif"
    },
    buttonText:{
        fontSize:12,
        color:Colors.Gold
    },
    smolbuttonStyle:{
        backgroundColor:Colors.black,
        borderWidth:1,
        width:150,
        borderColor:Colors.Gold,
        borderRadius:20
        
    },
    buttonStyle:{
        margin:15,
        marginTop:20,
        backgroundColor:Colors.black,
        borderWidth:1,
        borderColor:Colors.Gold,
        borderRadius:20
    }
})