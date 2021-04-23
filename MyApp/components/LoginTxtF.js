import React from 'react'
import {TextInput,View,StyleSheet} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Colors from '../constants/Colors'
import { screenHeight,screenWidth } from '../utils/ScreenParams';

const LoginTxtF=({label,placeholder,icon,...other})=>{
    return(    
        <View style={styles.TF}>
            <View style={styles.iconStyle}>
                <AntDesign name={icon} size={25} color={Colors.Red}/>
            </View>    
            <TextInput label={label} numberOfLines={1} placeholder={placeholder} placeholderTextColor='#666' style={styles.input} required {...other}>
            </TextInput>      
        </View>
    );
}

const styles =StyleSheet.create({
    TF:{
        marginTop:5,
        marginBottom:10,
        width:'100%',
        height:screenHeight/15,
        borderColor:Colors.Gold,
        borderRadius:20,
        borderWidth:1,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:Colors.DarkGrey
    },
    iconStyle:{
        padding:10,
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
        borderRightColor:Colors.Gold,
        color:Colors.Gold,
        borderRightWidth:1,
        width:50
    },
    inputField:{
        padding:10,
        marginTop:5,
        marginBottom:10,
        width:screenWidth/1.5,
        height:screenHeight/15,
        fontSize:16,
        borderRadius:8,
        borderWidth:1



    },
    input:{
        padding:10,
        flex:1,
        fontSize:16,
        color:Colors.Gold,
        justifyContent:'center',
        alignItems:'center'
    }

});
export default LoginTxtF

