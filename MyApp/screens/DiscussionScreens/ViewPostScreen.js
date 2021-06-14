import React, {Component, useState, useEffect} from 'react';
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
import {styles, theme} from '../../constants/Styles';
import {BackendURL} from '../../constants/Backend';

export default function ViewPostScreen({navigation}) {
    const [posts, setPosts] = useState([]);

    const handleGetPosts = () => {
        fetch(BackendURL + 'rest/post/get/all', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        })
            .then((res) => {
                if (res.status === 400) {
                    return 'Error';
                } else {
                    return res.json();
                }
            })
            .then((res) => {
                // console.log(res);
                // console.log(res[0].userId);
                if (res === 'Error') {
                    alert('Cannot Get Posts');
                } else {
                    var p = [];
                    for (var i = 0; i < res.length; i++) {
                        p.push(
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate('ViewPost', {
                                        // userId: res[i].userId,
                                        // postId: res[i].postId,
                                        firstName: 'Hello',
                                        email: 'Hello',
                                        // description: res[i].description,
                                        // tags: res[i].tags,
                                        // title: res[i].theTitle,
                                        // comments: res[i].comments,
                                    });
                                }}
                            >
                                <Post
                                    userId={res[i].userId}
                                    postId={res[i].postId}
                                    userName={res[i].firstName}
                                    userEmail={res[i].email}
                                    description={res[i].description}
                                    tags={res[i].tags}
                                    title={res[i].theTitle}
                                    key={Math.random().toString()}
                                />
                            </TouchableOpacity>
                        );
                    }
                    setPosts(p);
                }
            })
            .catch((err) => {
                console.log('errr');
                console.log(err);
            });
    };

    useEffect(() => {
        handleGetPosts();
    }, []);

    const viewPosts = () => {
        if (posts.length == 0) {
            return <Text style={styles().buttonText}>No Posts Found</Text>;
        } else {
            return posts.map((item) => item);
        }
    };

    return (
        <View style={styles().container}>
            <Image source={theme().file} style={styles().backgroundImage} />

            <DrawerContentScrollView style={styles().postWrapper}>
                {viewPosts()}
            </DrawerContentScrollView>
        </View>
    );
}
