import React, {Component, useState} from 'react';
import TextFieldPs from '../../components/TextFieldPs';
import CreatePostButton from '../../components/CreatePostButton';
import LoginButton from '../../components/LoginButton';
import Flairs from '../../components/Flairs';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {validateCreatePostInput} from '../../validation/createPostValidation';
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
import {createPostStyles, styles} from '../../constants/Styles';
import {screenHeight} from '../../utils/ScreenParams';

export default function CreatePostScreen({navigation}) {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [tagActive, setActive] = useState(false);

    const [selectedItems, setSelectedItems] = useState([]);

    const onSelectedItemsChange = (selectedItems) => {
        // Set Selected Items
        setSelectedItems(selectedItems);
    };

    const handleCreatePost = () => {
        const userData = {
            title: title,
            description: desc,
            tags: selectedItems,
        };
        var validate = validateCreatePostInput(userData);
        if (validate.isValid) {
            console.log(userData);
        } else {
            alert(validate.message);
        }
    };

    if (tagActive == false)
        return (
            <KeyboardAvoidingView
                behavior="padding"
                keyboardVerticalOffset={50}
                style={createPostStyles().container3}
            >
                <View style={createPostStyles().container3}>
                    <View style={createPostStyles().container}>
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

                        <LoginButton
                            bname="Post"
                            onPress={() => {
                                handleCreatePost();
                            }}
                        ></LoginButton>
                    </View>
                </View>
            </KeyboardAvoidingView>
        );
    else {
        return (
            <KeyboardAvoidingView
                behavior="padding"
                keyboardVerticalOffset={50}
                style={createPostStyles().container3}
            >
                <View style={createPostStyles().container3}>
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

                        <LoginButton
                            bname="Post"
                            onPress={() => {
                                handleCreatePost();
                            }}
                        ></LoginButton>
                    </View>
                </View>
            </KeyboardAvoidingView>
        );
    }
}
