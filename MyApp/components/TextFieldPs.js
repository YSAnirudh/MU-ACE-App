import React from 'react'
import {TextInput,View,StyleSheet,Text,KeyboardAvoidingView} from 'react-native'

import Colors from '../constants/Colors'
import { screenHeight,screenWidth } from '../utils/ScreenParams';


const TextFieldPs=({placeholder,astyle,...other})=>{
    return(
        
        <View style={styles.container}>
            <TextInput placeholder={placeholder} placeholderTextColor='#666'  required {...other}  ></TextInput>
        </View>

    );
}

const styles = StyleSheet.create({
    
    container: {
        marginTop:5,
        marginBottom:10,
        width:'100%',
        
        borderColor:Colors.Gold,
        borderRadius:8,
        borderWidth:3,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:Colors.DarkGrey
    },
});
export default TextFieldPs