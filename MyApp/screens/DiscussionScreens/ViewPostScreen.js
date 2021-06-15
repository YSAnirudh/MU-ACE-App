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
import PostClickable from '../../components/PostClickable';

export default function ViewPostScreen({navigation, userId}) {
    const [posts, setPosts] = useState([]);
    const [postResponses, setPostResponses] = useState([]);

    const srp = (resp) => {
        setPostResponses(resp);
    };

    const postRespSet = () => {
        let p = [];
        for (let i = 0; i < postResponses.length; i++) {
            // console.log('1 : ', postResponses[i]);
            p.push(
                <PostClickable
                    key={Math.random().toString()}
                    navigation={navigation}
                    postRes={postResponses[i]}
                />
            );
        }
        // console.log(p.length);
        setPosts(
            p.map((item, key) => {
                return item;
            })
        );
    };

    const handleGetPosts = async () => {
        fetch(BackendURL + 'rest/post/get/all', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        })
            .then((res) => {
                if (res.status === 400) {
                    return 'Error';
                } else if (res.status === 304) {
                    return 'Done';
                } else if (res === null) {
                    console.log(res.status);
                    console.log('Big Halloo');
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
                } else if (res === 'Done') {
                    alert('Not Modified');
                } else {
                    var p = [];
                    // console.log('Halloo');
                    for (var i = 0; i < res.length; i++) {
                        // console.log(res[i]);
                        p.push(res[i]);
                    }
                    if (res.length !== 0) {
                        srp(p);
                    }
                    // postRespSet();

                    // setPostResp();
                    return p;
                }
            })
            .then((res) => {
                // console.log(postResponses);
                postRespSet();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const setPostResp = async () => {};

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            handleGetPosts();
        });

        return unsubscribe;
    }, [navigation]);

    // useEffect(() => {
    //     handleGetPosts();
    // }, []);

    const viewPosts = () => {
        if (posts.length == 0) {
            return <Text style={styles().buttonText}>No Posts Found</Text>;
        } else {
            return posts;
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
