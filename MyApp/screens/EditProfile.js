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
    Platform,
} from 'react-native';
import {Avatar} from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import {
    editProfileStyles,
    theme,
    createPostStyles,
    profileStyles,
    defaultProfilePicture,
} from '../constants/Styles';
import {font12, profProfPic, textFont} from '../constants/Sizes';
import {validateEditProfileInput} from '../validation/editProfileValidation';
import {BackendURL} from '../constants/Backend';
import LoadingScreen from './LoadingScreen';
import AlertStyled from '../components/Alert';
import * as Firebase from 'firebase';
import {FBStorage} from '../firebase';
import firebase from 'firebase';
import 'firebase/storage';
import {LogBox} from 'react-native';
import _ from 'lodash';
LogBox.ignoreLogs(['Setting a timer']);
const _console = _.clone(console);
console.warn = (message) => {
    if (message.indexOf('Setting a timer') <= -1) {
        _console.warn(message);
    }
};

export default function EditProfile({
    navigation,
    route,
    userId,
    setIsLoading,
    isLoading,
}) {
    const [firstname, setfirstname] = useState(route.params.Firstname);
    const [lastname, setlastname] = useState(route.params.Lastname);
    const [description, setdescription] = useState(route.params.Description);
    const [password, setpassword] = useState('');
    const [Cpassword, setCpassword] = useState('');
    const [image, setImage] = useState('');
    const [URL, setURL] = useState('');

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.25,
        });

        // console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
        // fetch POST => body uri,
    };

    const uploadImage = async () => {
        const blob = await new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = function () {
                resolve(xhr.response);
            };
            xhr.onerror = function () {
                reject(new TypeError('Network request failed'));
            };
            xhr.responseType = 'blob';
            xhr.open('GET', image, true);
            xhr.send(null);
        });

        const ref = FBStorage.ref().child(userId);
        const snapshot = ref.put(blob);

        snapshot.on(
            firebase.storage.TaskEvent.STATE_CHANGED,
            () => {
                setIsLoading(true);
            },
            (error) => {
                setIsLoading(false);
                console.log(error);
                blob.close();
                return;
            },
            () => {
                snapshot.snapshot.ref.getDownloadURL().then((url) => {
                    setURL(url);
                    blob.close();
                    return url;
                });
            }
        );
    };

    const handleImage = async () => {
        if (image !== '') {
            await FBStorage.ref()
                .child(userId)
                .delete()
                .then(() => {
                    console.log('Existing Profile Image deleted');
                })
                .catch((err) => {
                    console.log('Error deleting Existing Profile Image');
                });
        }
        if (image !== '') {
            await uploadImage();
        }
    };

    const handleEditProfile = async () => {
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
            handleImage().then((res) => {
                fetch(BackendURL + 'rest/profile/update', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body:
                        image !== ''
                            ? JSON.stringify({
                                  userId: userId,
                                  firstName: firstname,
                                  lastName: lastname,
                                  description: description,
                                  password: password,
                                  confirmPassword: Cpassword,
                                  profileImgURI: URL,
                              })
                            : JSON.stringify({
                                  userId: userId,
                                  firstName: firstname,
                                  lastName: lastname,
                                  description: description,
                                  password: password,
                                  confirmPassword: Cpassword,
                              }),
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
                            setAlert(true, 'Cannot Update Profile');
                        } else {
                            setIsLoading(false);
                            setAlert(
                                true,
                                'Saved Changes Successfully!\nCheck After edit profile turning white'
                            );
                        }
                    })
                    .then((res) => {
                        navigation.navigate('Profile');
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            });
        } else {
            setAlert(true, validate.message);
        }
    };

    const setAlert = (bool, message) => {
        setAlertVisible(bool);
        setAlertMessage(message);
    };

    const [alertVisible, setAlertVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const {status} =
                    await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    setAlert(true, 'Need Gallery access permissions');
                }
            }
        })();
    }, []);

    return (
        <ScrollView>
            {!isLoading ? (
                <View style={editProfileStyles().container}>
                    <>
                        <View style={editProfileStyles().img}>
                            {image !== '' ? (
                                <Avatar.Image
                                    source={{uri: image}}
                                    size={profProfPic}
                                />
                            ) : route.params.imageURL !== '' ? (
                                <Avatar.Image
                                    source={{uri: route.params.imageURL}}
                                    size={profProfPic}
                                />
                            ) : (
                                <Avatar.Image
                                    source={{uri: defaultProfilePicture}}
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
                                <Text
                                    style={{color: 'white', fontSize: font12}}
                                >
                                    Change Profile Photo
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={editProfileStyles().blocks}>
                            <Text style={editProfileStyles().te}>
                                First Name
                            </Text>
                        </View>
                        <TextInput
                            style={editProfileStyles().ti}
                            defaultValue={firstname}
                            onChangeText={(text) => setfirstname(text)}
                        />

                        <View style={editProfileStyles().blocks}>
                            <Text style={editProfileStyles().te}>
                                Last Name
                            </Text>
                        </View>
                        <TextInput
                            style={editProfileStyles().ti}
                            defaultValue={lastname}
                            onChangeText={(text) => setlastname(text)}
                        />
                        <View style={editProfileStyles().blocks}>
                            <Text style={editProfileStyles().te}>
                                Description
                            </Text>
                        </View>
                        <TextInput
                            style={editProfileStyles().ti}
                            multiline={true}
                            numberOfLines={4}
                            defaultValue={description}
                            onChangeText={(text) => setdescription(text)}
                        />
                        <View style={editProfileStyles().blocks}>
                            <Text style={editProfileStyles().te}>
                                Change Password
                            </Text>
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
                    </>
                    {alertVisible ? (
                        <AlertStyled
                            alertVisible={true}
                            alertMessage={alertMessage}
                            setAlertVisible={setAlertVisible}
                        />
                    ) : (
                        <></>
                    )}
                </View>
            ) : (
                <View style={profileStyles().root}>
                    <LoadingScreen />
                </View>
            )}
        </ScrollView>
    );
}
