import React, {Component, useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Image,
    TouchableOpacity,
} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import Post from '../../components/Post';
import Comment from '../../components/Comment';
import TextFieldPs from '../../components/AddCommentField';
import {createPostStyles, styles, theme} from '../../constants/Styles';
import AddCommentField from '../../components/AddCommentField';
export default function ViewPost({route}) {
    const [posts, setPosts] = useState([]);
    const [comm, setComm] = useState('');
    const comments = [];
    const handleGetPosts = () => {
        console.log(route);
        return <Post userName="Hello" userEmail="Hello" description="Hello" />;
    };

    const handleGetComments = () => {
        // get comments
        for (var i = 0; i < 3; i++) {
            var user = 'Nob' + i;
            comments.push(
                <Comment
                    user="@noob1"
                    comment="You cannot declare a specific border directly on the TextInput unless multiline is enabled (For example borderLeftWidth will not work unless multiline={true} is enabled but borderWidth will work), but you can just wrap the TextInput in a View and give it a border."
                />
            );
        }
    };

    const viewPosts = () => {
        handleGetPosts();
        if (posts.length == 0) {
            return <Text style={styles().buttonText}>No Posts Found</Text>;
        } else {
            return posts.map((item) => item);
        }
    };

    const viewComments = () => {
        handleGetComments();
        if (comments.length == 0) {
            return <Text style={styles().buttonText}>No Comments Found</Text>;
        } else {
            return comments.map((item) => item);
        }
    };

    return (
        <View style={styles().container}>
            <Image source={theme().file} style={styles().backgroundImage} />

            <DrawerContentScrollView style={styles().postWrapper}>
                {viewPosts()}

                <AddCommentField
                    placeholder="Add a comment..."
                    autoCorrect={true}
                    onChangeText={(comm) => {
                        setComm(comm);
                    }}
                    multiline={true}
                    style={createPostStyles().textFieldComment}
                    numberOfLines={4}
                ></AddCommentField>
                {viewComments()}
            </DrawerContentScrollView>
        </View>
    );
}
