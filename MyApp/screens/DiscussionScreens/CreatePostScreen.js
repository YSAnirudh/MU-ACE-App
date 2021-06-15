import React, {Component, useState} from 'react';
import TextFieldPs from '../../components/TextFieldPs';
import CreatePostButton from '../../components/CreatePostButton';
import LoginButton from '../../components/LoginButton';
import Flairs from '../../components/Flairs';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {validateCreatePostInput} from '../../validation/createPostValidation';
import {SafeAreaView} from 'react-native';
import {
    StyleSheet,
    Text,
    View,
    Alert,
    TextInput,
    KeyboardAvoidingView,
    Button,
    Image,
} from 'react-native';
import {ScrollView} from 'react-native';
import {createPostStyles, styles} from '../../constants/Styles';
import {screenHeight} from '../../utils/ScreenParams';
import {BackendURL} from '../../constants/Backend';

export default function CreatePostScreen({navigation, userId}) {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [tagActive, setActive] = useState(false);

    const [selectedItems, setSelectedItems] = useState([]);

    const [imageURI, setImageURI] = useState();

    const onSelectedItemsChange = (selectedItems) => {
        // Set Selected Items
        setSelectedItems(selectedItems);
    };

    const handleCreatePost = () => {
        const userData = {
            userId: userId,
            title: title,
            description: desc,
            tags: selectedItems,
        };
        var validate = validateCreatePostInput(userData);
        if (validate.isValid) {
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
                        alert('Cannot Get Posts');
                    } else {
                        alert('Post Created');
                        setTitle('');
                        setDesc('');
                        setSelectedItems([]);
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            alert(validate.message);
        }
    };

    return (
        // <ScrollView>
        // <KeyboardAvoidingView
        //     behavior="padding"
        //     keyboardVerticalOffset={0}
        //     style={createPostStyles().container3}
        // >
        <SafeAreaView
            style={createPostStyles().container3}
            // showsVerticalScrollIndicator={true}
        >
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
                {tagActive ? (
                    <>
                        <View style={createPostStyles().flairC}>
                            <Flairs
                                selectedItems={selectedItems}
                                onSelectedItemsChange={onSelectedItemsChange}
                            />
                        </View>
                        <View style={createPostStyles().buttonContainer}>
                            <CreatePostButton
                                bname="Upload Image"
                                onPress={() => {
                                    Alert.alert('Post Clicked');
                                }}
                            ></CreatePostButton>
                            <CreatePostButton
                                bname="Remove Tags"
                                onPress={() => {
                                    setActive(false);
                                }}
                            ></CreatePostButton>
                        </View>
                    </>
                ) : (
                    <View style={createPostStyles().buttonContainer}>
                        <CreatePostButton
                            bname="Upload Image"
                            onPress={() => {
                                Alert.alert('Post Clicked');
                            }}
                        ></CreatePostButton>
                        <CreatePostButton
                            bname="Add Tags"
                            onPress={() => {
                                setActive(true);
                            }}
                        ></CreatePostButton>
                    </View>
                )}
                {/* <View style={createPostStyles().buttonContainer}>
                        <CreatePostButton
                            bname="Upload Image"
                            onPress={() => {
                                Alert.alert('Post Clicked');
                            }}
                        ></CreatePostButton>
                        <CreatePostButton
                            bname="Add Tags"
                            onPress={() => {
                                setActive(true);
                            }}
                        ></CreatePostButton>
                    </View> */}

                <LoginButton
                    bname="Post"
                    onPress={() => {
                        handleCreatePost();
                    }}
                ></LoginButton>
            </View>
        </SafeAreaView>
        // </KeyboardAvoidingView>
    );
}
