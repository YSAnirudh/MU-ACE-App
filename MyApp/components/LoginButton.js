import React from 'react';
import {Text,StyleSheet,TouchableOpacity} from 'react-native'

import { screenHeight,screenWidth } from '../utils/ScreenParams';
import Colors from '../constants/Colors'
const LoginButton=({bname,...other})=>{
    return(    
        <TouchableOpacity style={styles.buttonStyle} {...other}>
            <Text style={styles.buttonText}>{bname}</Text>
        </TouchableOpacity>
    );

}

const styles=StyleSheet.create({
    buttonStyle:{
        borderWidth:1,
        marginTop:10,
        width:'100%',
        height:screenHeight/15,
        backgroundColor:Colors.DarkGrey,
        padding:10,
        alignItems:'center',
        justifyContent:'center',
        borderColor:Colors.Gold,
        borderRadius:20
    },
    buttonText:{
        fontSize:18,
        color:Colors.Gold
       

    }

});

export default LoginButton