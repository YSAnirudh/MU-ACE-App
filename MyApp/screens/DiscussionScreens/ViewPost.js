import React, {Component, useState, useEffect} from 'react';
import {
    ActivityIndicator,
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';

import Svg, {Rect, Circle} from 'react-native-svg';
import ContentLoader from 'react-native-masked-loader';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import Post from '../../components/Post';
import Comment from '../../components/Comment';
import TextFieldPs from '../../components/AddCommentField';
import {createPostStyles, styles, theme} from '../../constants/Styles';
import AddCommentField from '../../components/AddCommentField';
import {BackendURL} from '../../constants/Backend';
import LoadingScreen from '../LoadingScreen';

export default function ViewPost({navigation, route}) {
    const [posts, setPosts] = useState(null);
    const [comm, setComm] = useState('');
    const [answers, setAnswers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const comments = [];
    const setC = () => {
        setComm('');
    };

    const handleGetPost = () => {
        let myParams = route.params;
        fetch(BackendURL + 'rest/post/get', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                postId: myParams.postId,
            }),
        })
            .then((res) => {
                if (res.status === 400) {
                    return 'Error';
                } else {
                    // console.log(res);
                    // console.log(res.status);
                    return res.json();
                }
            })
            .then((res) => {
                if (res === 'Error') {
                    alert('Error Getting Post');
                } else {
                    setAnswers(res.comments);
                    setPosts(
                        <Post
                            // key={res[i].postId}
                            userId={res.userId}
                            postId={res.postId}
                            userName={res.firstName}
                            userEmail={res.email}
                            description={res.description}
                            tags={res.tags}
                            title={res.theTitle}
                        />
                    );
                }
            })
            .then((res) => {
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleGetComments = () => {
        for (var i = 0; i < answers.length; i++) {
            comments.push(
                <Comment
                    key={Math.random().toString()}
                    user={answers[i].firstName}
                    comment={answers[i].comment}
                    userCommentId={answers[i].userCommentId}
                    email={answers[i].email}
                />
            );
        }
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            handleGetPost();
            setComm(comm);
        });

        return unsubscribe;
    }, [route]);

    const viewComments = () => {
        handleGetComments();
        if (comments.length == 0) {
            return <Text style={styles().buttonText}>No Comments Found</Text>;
        } else {
            return comments.map((item) => item);
        }
    };

    const handlePostComment = () => {
        setIsLoading(true);
        fetch(BackendURL + 'rest/post/comment', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                postId: route.params.postId,
                userId: route.params.currentUserId,
                comment: comm,
            }),
        })
            .then((res) => {
                if (res.status === 400) {
                    // console.log(res);
                    return 'Error';
                } else {
                    // console.log(res);
                    // console.log(res.status);
                    return res.json();
                }
            })
            .then((res) => {
                if (res === 'Error') {
                    alert('Error Getting Post');
                    setComm(comm);
                } else {
                    handleGetPost();
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <View style={styles().container}>
            {/* <Image source={theme().file} style={styles().backgroundImage} /> */}
            {!isLoading ? (
                <DrawerContentScrollView style={styles().postWrapper}>
                    {posts}

                    <AddCommentField
                        placeholder="Add a comment..."
                        autoCorrect={true}
                        onChangeText={(comm) => {
                            setComm(comm);
                        }}
                        onClick={() => {
                            handlePostComment();
                            setC();
                        }}
                        multiline={true}
                        style={createPostStyles().textFieldComment}
                        numberOfLines={4}
                    ></AddCommentField>
                    {viewComments()}
                </DrawerContentScrollView>
            ) : (
                <LoadingScreen />
                // <></>
            )}
        </View>
    );
}
