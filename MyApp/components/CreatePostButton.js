import React from 'react';
import {Text,StyleSheet,TouchableOpacity} from 'react-native'

import { screenHeight,screenWidth } from '../utils/ScreenParams';
import Colors from '../constants/Colors'

const CreatePostButton=({bname,...other})=>{
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
        width:'50%',
        margin:3,
        height:screenHeight/15,
        backgroundColor:Colors.DarkGrey,
        padding:10,
        alignItems:'center',
        justifyContent:'center',
        borderColor:Colors.Gold,
        borderRadius:20,
        marginBottom:25,
        marginTop:22
    },
    buttonText:{
        fontSize:14,
        color:Colors.Gold
       

    }

});

export default CreatePostButton