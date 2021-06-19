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

    const handleCreatePost = () => {
        const userData = {
            userId: userId,
            title: title,
            description: desc,
            tags: selectedItems + typeChange,
        };
        var validate = validateCreatePostInput(userData);
        if (validate.isValid) {
            setIsLoading(true);
            fetch(BackendURL + 'rest/post/create', {
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
                        setAlert(true, 'Cannot Get Posts');
                    } else {
                        setIsLoading(false);
                        setAlert(true, 'Post Created');
                        setTitle('');
                        setDesc('');
                        setSelectedItems([]);
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            setAlert(!alertVisible, validate.message);
        }
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
                            bname="Upload Image"
                            onPress={() => {
                                Alert.alert('Post Clicked');
                            }}
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
