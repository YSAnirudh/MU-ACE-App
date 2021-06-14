import React from 'react'
import {TextInput,View,StyleSheet,Text,KeyboardAvoidingView,TouchableOpacity,Alert} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../constants/Colors'
import { screenHeight,screenWidth } from '../utils/ScreenParams';
import { styles } from "../constants/Styles";


const AddCommentField=({placeholder,astyle,...other})=>{
    return(
        
        <View style={styles().containerTextFieldPs}>
            <TextInput placeholder={placeholder} placeholderTextColor='#666'  required {...other}  ></TextInput>
            <View>
            <TouchableOpacity onPress={()=>Alert.alert("button clicked")} >
            <View style={styles().wrapIcon}>
                <MaterialCommunityIcons name="send" style={styles().icon} size={24} />
                
            </View>
        
            </TouchableOpacity>
        </View>
        </View>
       
    );
}

const styles2=StyleSheet.create({
    buttonStyle:{
        marginTop:1,
        width:'100%',
        height:screenHeight/15,
        padding:10,
        flexDirection:'row',
        borderRadius:20
    },
    buttonText:{
        fontSize:18,
        
        

    },
   
    buttonTextWrapper:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }

});


// const styles = StyleSheet.create({
    
//     container: {
//         marginTop:5,
//         marginBottom:10,
//         width:'100%',
        
//         borderColor:theme().createBorder,
//         borderRadius:8,
//         borderWidth:3,
//         flexDirection:'row',
//         alignItems:'center',
//         backgroundColor:Colors.DarkGrey
//     },
// });
export default AddCommentField