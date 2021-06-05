import React, { useState,useEffect } from 'react'
import { View, Text,StyleSheet, TextInput, Button, TouchableOpacity,Image, ScrollView } from 'react-native'
import {Avatar} from 'react-native-paper'
import * as ImagePicker from 'expo-image-picker';
import {editProfileStyles, theme} from '../constants/Styles'


export default function EditProfile({route}) {
    const [firstname,setfirstname] = useState(route.params.Firstname)
    const [lastname,setlastname] = useState(route.params.Lastname)
    const [description,setdescription] = useState(route.params.Description)
    const [password,setpassword] = useState("")
    
    const [image, setImage] = useState(null);


    const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    //console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
     };

    return (
        <ScrollView>
        <View style={editProfileStyles().container}>
            <View style={editProfileStyles().img}>
            {image&&<Avatar.Image
                    source={{ uri: image }}
                    size={140}
                />}
                {/* {console.log({ uri: image })} */}
             {!image&&<Avatar.Image
                    source={require("../assets/bulusu.jpeg")}
                    size={140}
                />}
                
            </View>

             <View>
                {/* <Button title="Change Profile pic" onPress={pickImage} /> */}
                <TouchableOpacity style={editProfileStyles().profilebtn} onPress={pickImage}>
                <Text style={{color:'white',fontSize:13}}>Change Profile Photo</Text>
            </TouchableOpacity>
             </View>    

            <View style={editProfileStyles().blocks}>
            <Text style={editProfileStyles().te}>First Name</Text>  
            </View>
            <TextInput style={editProfileStyles().ti} defaultValue={firstname} onChangeText={(text)=>setfirstname(text)} />
            
            <View style={editProfileStyles().blocks}>
            <Text style={editProfileStyles().te}>Last Name</Text>  
            </View>
            <TextInput style={editProfileStyles().ti} defaultValue={lastname} onChangeText={(text)=>setlastname(text)} />
            <View style={editProfileStyles().blocks}>
            <Text style={editProfileStyles().te}>Description</Text>  
            </View>
            <TextInput style={editProfileStyles().ti}  multiline={true} numberOfLines={4} defaultValue={description} onChangeText={(text)=>setdescription(text)}/>
            <View style={editProfileStyles().blocks}>
            <Text style={editProfileStyles().te}>Change Password</Text>  
            </View>
            <TextInput style={editProfileStyles().ti}  secureTextEntry={true}/>
            {/* <View style={editProfileStyles().btn}>
            <Button title = 'Save Changes'/>    
            </View> */}
            <TouchableOpacity style={editProfileStyles().savebtn}>
                <Text style={{color:"white",fontSize:16}}>Save Changes</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
        
    )
}










  

