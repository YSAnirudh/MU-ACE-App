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
import LoadingScreen from '../LoadingScreen';

export default function ViewUserPostScreen({
    navigation,
    userId,
    isLoading,
    setIsLoading,
}) {
    const [posts, setPosts] = useState([]);
    const [postResponses, setPostResponses] = useState([]);

    const srp = (resp) => {
        setPostResponses(resp);
    };

    const postRespSet = () => {
        let p = [];
        console.log('Kaa');
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
        setIsLoading(true);
        fetch(BackendURL + 'rest/post/get/user', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                userId: userId,
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
                // console.log(res);
                // console.log(res[0].userId);
                if (res === 'Error') {
                    alert('Cannot Get Posts');
                } else {
                    // console.log('Hallo');
                    var p = [];
                    for (var i = 0; i < res.length; i++) {
                        // console.log(res[i]);
                        p.push(
                            <PostClickable
                                key={Math.random().toString()}
                                navigation={navigation}
                                postRes={res[i]}
                            />
                        );
                    }
                    setPosts(p);
                    setIsLoading(false);
                    return p;
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            handleGetPosts();
        });

        return unsubscribe;
    }, [navigation]);

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
                {!isLoading ? viewPosts() : <LoadingScreen />}
            </DrawerContentScrollView>
        </View>
    );
}
