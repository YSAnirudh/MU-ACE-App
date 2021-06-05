import React from 'react'
import {TextInput,View,StyleSheet} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import {styles, theme} from '../constants/Styles'
import { screenHeight,screenWidth } from '../utils/ScreenParams';

const LoginTxtF=({label,placeholder,icon,...other})=>{
    return(    
        <View style={styles().TF}>
            <View style={styles().iconStyle}>
                <AntDesign name={icon} size={25} color={theme().regBorder}/>
            </View>    
            <TextInput label={label} numberOfLines={1} placeholder={placeholder} placeholderTextColor='#666' style={styles().input} required {...other}>
            </TextInput>      
        </View>
    );
}

export default LoginTxtF

