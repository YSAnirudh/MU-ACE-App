import React, {Component, useState} from 'react';
import TextFieldPs from '../../components/TextFieldPs';
import CreatePostButton from '../../components/CreatePostButton';
import LoginButton from '../../components/LoginButton';
import AlertFlair from '../../components/AlertFlair';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {validateCreatePostInput} from '../../validation/createPostValidation';
import {SafeAreaView} from 'react-native';
import {
    Modal,
    StyleSheet,
    Text,
    View,
    Alert,
    TextInput,
    KeyboardAvoidingView,
    Button,
    Image,
    Pressable,
} from 'react-native';
import {ScrollView} from 'react-native';
import {createPostStyles, styles} from '../../constants/Styles';
import {screenHeight} from '../../utils/ScreenParams';
import {BackendURL} from '../../constants/Backend';
import LoadingScreen from '../LoadingScreen';
import AlertStyled from '../../components/Alert';
import {set} from 'react-native-reanimated';
import * as ImagePicker from 'expo-image-picker';
import * as Firebase from 'firebase';
import {FBStorage} from '../../firebase';
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
const ObjectId = require('bson-objectid');

export default function CreatePostScreen({
    navigation,
    userId,
    setIsLoading,
    isLoading,
}) {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [tagActive, setActive] = useState(false);

    const [selectedItems, setSelectedItems] = useState([]);
    const [typeChange, setTypeChange] = useState([]);

    const [imageURI, setImageURI] = useState();

    const onSelectedItemsChange = (selectedItems) => {
        // Set Selected Items
        setSelectedItems(selectedItems);
    };
    const onTypeChange = (selectedItems) => {
        // Set Selected Items
        setTypeChange(selectedItems);
    };

    const setAlert = (bool, message) => {
        setAlertVisible(bool);
        setAlertMessage(message);
    };

    const setFlair = (bool, message) => {
        setFlairVis(bool);
        setFlairMessage(message);
    };

    const handleCreatePost = async () => {
        const userData = {
            userId: userId,
            title: title,
            description: desc,
            tags: selectedItems + typeChange,
        };
        const postId = ObjectId();
        var validate = validateCreatePostInput(userData);
        if (validate.isValid) {
            // if (image !== '') {
            //     await uploadImage(postId);
            // }
            uploadImage(postId);
        } else {
            setAlert(!alertVisible, validate.message);
        }
    };

    const [image, setImage] = useState('');
    const [URL, setURL] = useState('');
    const setMyURL = (url) => {
        setURL(url);
    };

    const pickImage = async () => {
        let granted = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (granted) {
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
        } else {
            setAlert(true, 'Need Gallery Permission to Upload Image');
        }
        // fetch POST => body uri,
    };

    const uploadImage = async (postId) => {
        if (image === '') {
            fetch(BackendURL + 'rest/post/create', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    postId: postId,
                    userId: userId,
                    title: title,
                    description: desc,
                    tags: selectedItems,
                    typeTags: typeChange,
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
                        setAlert(true, 'Cannot Get Posts');
                    } else {
                        setIsLoading(false);
                        setAlert(true, 'Post Created');
                        setTitle('');
                        setDesc('');
                        setSelectedItems([]);
                        setTypeChange([]);
                        setImage('');
                        setURL('');
                    }
                })
                .then((res) => {
                    navigation.navigate('Forum');
                })
                .catch((err) => {
                    console.log(err);
                });
            return postId;
        }
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

        const ref = FBStorage.ref().child('post/' + postId);
        const snapshot = ref.put(blob);

        return await snapshot.on(
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
                    // console.log('Hello');
                    fetch(BackendURL + 'rest/post/create', {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'},
                        body:
                            url !== ''
                                ? JSON.stringify({
                                      postId: postId,
                                      userId: userId,
                                      title: title,
                                      description: desc,
                                      tags: selectedItems,
                                      typeTags: typeChange,
                                      postImg: url,
                                  })
                                : JSON.stringify({
                                      postId: postId,
                                      userId: userId,
                                      title: title,
                                      description: desc,
                                      tags: selectedItems,
                                      typeTags: typeChange,
                                  }),
                    })
                        .then((res) => {
                            console.log(URL);
                            if (res.status === 400) {
                                return 'Error';
                            } else {
                                return res.json();
                            }
                        })
                        .then((res) => {
                            if (res === 'Error') {
                                setAlert(true, 'Cannot Get Posts');
                            } else {
                                setIsLoading(false);
                                setAlert(true, 'Post Created');
                                setTitle('');
                                setDesc('');
                                setSelectedItems([]);
                                setTypeChange([]);
                                setImage('');
                                setURL('');
                            }
                        })
                        .then((res) => {
                            navigation.navigate('Forum');
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                    blob.close();
                    return url;
                });
            }
        );
    };

    const [alertVisible, setAlertVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [flairAlertVis, setFlairVis] = useState(false);
    return (
        <SafeAreaView
            style={createPostStyles().container3}
            // showsVerticalScrollIndicator={true}
        >
            {!isLoading ? (
                <View style={createPostStyles().container2}>
                    <TextFieldPs
                        placeholder="Title"
                        autoCorrect={true}
                        onChangeText={(title) => {
                            setTitle(title);
                        }}
                        style={createPostStyles().textFieldTitle}
                    ></TextFieldPs>

                    <TextFieldPs
                        placeholder="Decription"
                        autoCorrect={true}
                        onChangeText={(desc) => {
                            setDesc(desc);
                        }}
                        multiline={true}
                        style={createPostStyles().textFieldDescription}
                        numberOfLines={10}
                    ></TextFieldPs>
                    {flairAlertVis ? (
                        //<View style={createPostStyles().flairC}>
                        <AlertFlair
                            alertVisible={true}
                            setAlertVisible={setFlairVis}
                            alertMessage={alertMessage}
                            onSelectedItemsChange={onSelectedItemsChange}
                            selectedItems={selectedItems}
                            onTypeChange={onTypeChange}
                            typeChange={typeChange}
                        ></AlertFlair>
                    ) : (
                        //</View>
                        <></>
                    )}
                    <View style={createPostStyles().buttonContainer}>
                        <CreatePostButton
                            bname={
                                image !== '' ? 'Image Selected' : 'Upload Image'
                            }
                            onPress={pickImage}
                        ></CreatePostButton>
                        <CreatePostButton
                            bname={
                                selectedItems.length + typeChange.length === 0
                                    ? 'Add Tags - 0 Picked'
                                    : 'Modify Tags - ' +
                                      (selectedItems.length +
                                          typeChange.length) +
                                      ' Picked'
                            }
                            onPress={() => {
                                setFlairVis(true);
                            }}
                        ></CreatePostButton>
                    </View>

                    {alertVisible ? (
                        <AlertStyled
                            alertVisible={true}
                            alertMessage={alertMessage}
                            setAlertVisible={setAlertVisible}
                        />
                    ) : (
                        <></>
                    )}

                    <LoginButton
                        bname="Post"
                        onPress={() => {
                            handleCreatePost();
                        }}
                    ></LoginButton>
                </View>
            ) : (
                <LoadingScreen />
            )}
        </SafeAreaView>
        // </KeyboardAvoidingView>
    );
}
