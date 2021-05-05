import React, { Component,useState } from 'react'
import TextFieldPs from '../../components/TextFieldPs'
import CreatePostButton from '../../components/CreatePostButton'
import LoginButton from '../../components/LoginButton'
import Flairs from '../../components/Flairs'
import { 
    StyleSheet, 
    Text, 
    View,
    Alert,
    TextInput,
    KeyboardAvoidingView,
    Button,
    Image
} from 'react-native';
import Colors from '../../constants/Colors'
import { screenHeight,screenWidth } from '../../utils/ScreenParams';

export default function CreatePostScreen ({navigation}) {
    const [title,setTitle] = useState('')
    const [desc,setDesc] = useState('')
    const [tagActive,setActive]=useState(false)
    if(tagActive==false)
        return (
       <KeyboardAvoidingView
            behavior="padding"
            keyboardVerticalOffset={50}
            style={styles.container3}
        >
       <View style={styles.container3}>
            
                <View style={styles.container}>
                    
                    <TextFieldPs placeholder="Title" autoCorrect={true} onChangeText = {(title) => {setTitle(title)}} style={{color:Colors.Gold,height:screenHeight/15,padding:9,textAlignVertical: 'top'}}></TextFieldPs>
                    
                    
                    
                    <TextFieldPs placeholder="Decription" autoCorrect={true} onChangeText = {(desc) => {setDesc(desc)}} multiline={true} style={{color:Colors.Gold,maxHeight:80,padding:9,textAlignVertical: 'top'}}  numberOfLines={10}></TextFieldPs>
                    
                    <View style={styles.buttonContainer}>    
                        <CreatePostButton bname="Upload Image" onPress={()=>{Alert.alert("Post Clicked")}} ></CreatePostButton>
                        <CreatePostButton bname="Add Tags" onPress={()=>{setActive(true)}} ></CreatePostButton>
                        
                    </View>
                
                    <LoginButton bname="Post" onPress={()=>{Alert.alert("Post Clicked")}} ></LoginButton>
                </View>
            </View> 
            </KeyboardAvoidingView>
        );
    else{
        return(
            <KeyboardAvoidingView
            behavior="padding"
            keyboardVerticalOffset={50}
            style={styles.container3}
        >
            <View style={styles.container3}>
                <View style={styles.container2}>
                    
                    <TextFieldPs placeholder="Title" autoCorrect={true} onChangeText = {(title) => {setTitle(title)}} style={{color:Colors.Gold,height:screenHeight/15,padding:9,textAlignVertical: 'top'}}></TextFieldPs>
                    
                    
                    
                    <TextFieldPs placeholder="Decription" autoCorrect={true} onChangeText = {(desc) => {setDesc(desc)}} multiline={true} style={{color:Colors.Gold,maxHeight:80,padding:9,textAlignVertical: 'top'}}  numberOfLines={10}></TextFieldPs>
                    <View style={styles.flairC}>
                    
                        <Flairs></Flairs>
                    
                    </View>
                    <View style={styles.buttonContainer}>    
                        <CreatePostButton bname="Upload Image" onPress={()=>{Alert.alert("Post Clicked")}} ></CreatePostButton>
                        <CreatePostButton bname="Remove Tags" onPress={()=>{setActive(false)}} ></CreatePostButton>
                        
                    </View>
                
                    <LoginButton bname="Post" onPress={()=>{Alert.alert("Post Clicked")}} ></LoginButton>
                </View>
            </View>
            </KeyboardAvoidingView>

        );
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        position:'absolute',
        alignItems:'center',
        justifyContent:'center',
        padding:21,
        paddingTop:0,
        marginTop:'20%',
        
    },
    container2:{
        flex:1,
        position:'absolute',
        alignItems:'center',
        justifyContent:'center',
        padding:21,
        paddingTop:0,
        marginTop:'10%'
        
    },
    container3:{
        flex:1,
        backgroundColor:Colors.Grey
        
    },
    flairC:{
        width:'100%',
        height:'30%'

    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
     
    },
    titleC:{
        marginTop:20, 
        height:40, 
        borderColor:'gray',
        borderWidth:3,
        justifyContent:'center',
        textAlignVertical: 'top',
        padding:9

    },
    descC:{
        
        borderColor: 'grey',
        borderWidth: 3,
        padding: 9,
        justifyContent:'center',
        textAlignVertical: 'top'

    },
    textArea:{
        height:160,
        justifyContent: "flex-start"
    }

})
