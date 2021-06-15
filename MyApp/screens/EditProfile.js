import React, {useState, useEffect} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    TouchableOpacity,
    Image,
    ScrollView,
} from 'react-native';
import {Avatar} from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import {editProfileStyles, theme} from '../constants/Styles';
import {font12, profProfPic, textFont} from '../constants/Sizes';
import {validateEditProfileInput} from '../validation/editProfileValidation';
import {BackendURL} from '../constants/Backend';

export default function EditProfile({navigation, route, userId}) {
    const [firstname, setfirstname] = useState(route.params.Firstname);
    const [lastname, setlastname] = useState(route.params.Lastname);
    const [description, setdescription] = useState(route.params.Description);
    const [password, setpassword] = useState('');
    const [Cpassword, setCpassword] = useState('');

    const [imageURI, setImageURI] = useState(null);

    const handleEditProfile = () => {
        const userData = {
            userId: userId,
            firstName: firstname,
            lastName: lastname,
            description: description,
            password: password,
            confirmPassword: Cpassword,
        };
        let validate = validateEditProfileInput(userData);

        if (validate.isValid) {
            console.log(userData);
            fetch(BackendURL + 'rest/profile/update', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(userData),
            })
                .then((res) => {
                    if (res.status === 400) {
                        return 'Error';
                    } else {
                        return res.json();
                    }
                })
                .then((res) => {
                    if (res === 'Error') {
                        alert('Cannot Update Profile');
                    } else {
                        // console.log(res);
                        alert('Saved Changes Successfully!');
                        navigation.navigate('Profile');
                    }
                })
                .catch((err) => {
                    console.log('errr');
                    console.log(err);
                });
        } else {
            alert(validate.message);
        }
    };

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        //console.log(result);

        if (!result.cancelled) {
            setImageURI(result.uri);
        }
        // fetch POST => body uri,
    };

    useEffect(() => {}, []);

    return (
        <ScrollView>
            <View style={editProfileStyles().container}>
                <View style={editProfileStyles().img}>
                    {imageURI && (
                        <Avatar.Image
                            source={{uri: imageURI}}
                            size={profProfPic}
                        />
                    )}
                    {/* {console.log({ uri: image })} */}
                    {!imageURI && (
                        <Avatar.Image
                            source={require('../assets/bulusu.jpeg')}
                            size={profProfPic}
                        />
                    )}
                </View>

                <View>
                    {/* <Button title="Change Profile pic" onPress={pickImage} /> */}
                    <TouchableOpacity
                        style={editProfileStyles().profilebtn}
                        onPress={pickImage}
                    >
                        <Text style={{color: 'white', fontSize: font12}}>
                            Change Profile Photo
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={editProfileStyles().blocks}>
                    <Text style={editProfileStyles().te}>First Name</Text>
                </View>
                <TextInput
                    style={editProfileStyles().ti}
                    defaultValue={firstname}
                    onChangeText={(text) => setfirstname(text)}
                />

                <View style={editProfileStyles().blocks}>
                    <Text style={editProfileStyles().te}>Last Name</Text>
                </View>
                <TextInput
                    style={editProfileStyles().ti}
                    defaultValue={lastname}
                    onChangeText={(text) => setlastname(text)}
                />
                <View style={editProfileStyles().blocks}>
                    <Text style={editProfileStyles().te}>Description</Text>
                </View>
                <TextInput
                    style={editProfileStyles().ti}
                    multiline={true}
                    numberOfLines={4}
                    defaultValue={description}
                    onChangeText={(text) => setdescription(text)}
                />
                <View style={editProfileStyles().blocks}>
                    <Text style={editProfileStyles().te}>Change Password</Text>
                </View>
                <TextInput
                    style={editProfileStyles().ti}
                    secureTextEntry={true}
                    onChangeText={(text) => setpassword(text)}
                />
                <View style={editProfileStyles().blocks}>
                    <Text style={editProfileStyles().te}>
                        Confirm Change Password
                    </Text>
                </View>
                <TextInput
                    style={editProfileStyles().ti}
                    secureTextEntry={true}
                    onChangeText={(text) => setCpassword(text)}
                />
                {/* <View style={editProfileStyles().btn}>
            <Button title = 'Save Changes'/>    
            </View> */}
                <TouchableOpacity
                    onPress={() => {
                        handleEditProfile();
                    }}
                    style={editProfileStyles().savebtn}
                >
                    <Text style={{color: 'white', fontSize: textFont}}>
                        Save Changes
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
