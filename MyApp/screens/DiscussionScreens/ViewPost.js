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
import AlertStyled from '../../components/Alert';

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
        setIsLoading(true);
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
                    setAlert(true, 'Error Getting Post');
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
                            postImg={res.postImg}
                            profileImg={res.profileImg}
                            postOpen={true}
                        />
                    );
                    setIsLoading(false);
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
                    profileImg={answers[i].profileImg}
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
                    setAlert(true, 'Error Getting Post');
                    setComm(comm);
                } else {
                    handleGetPost();
                    setAlert(true, 'Commented');
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const setAlert = (bool, message) => {
        setAlertVisible(bool);
        setAlertMessage(message);
    };

    const [alertVisible, setAlertVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    return !isLoading ? (
        <View style={styles().container}>
            {/* <Image source={theme().file} style={styles().backgroundImage} /> */}
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
        <View style={styles().container}>
            <LoadingScreen />
        </View>
        // <></>
    );
}
