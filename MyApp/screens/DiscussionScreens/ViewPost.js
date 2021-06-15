import React, {Component, useState, useEffect} from 'react';
import {ActivityIndicator,
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';

import Svg, { Rect, Circle } from 'react-native-svg';
import ContentLoader from 'react-native-masked-loader';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import Post from '../../components/Post';
import Comment from '../../components/Comment';
import TextFieldPs from '../../components/AddCommentField';
import {createPostStyles, styles, theme} from '../../constants/Styles';
import AddCommentField from '../../components/AddCommentField';
import {BackendURL} from '../../constants/Backend';

 
function getMaskedElement_1() {
    return (
      <Svg height="100%" width="100%" fill={'black'}>
        <Rect x="0" y="0" rx="8" ry="8" width="50%" height="16" />
        <Rect x="0" y="30" rx="9" ry="9" width="100%" height="128" />
        <Rect x="0" y="172" rx="4" ry="4" width="100%" height="8" />
        <Rect x="0" y="188" rx="4" ry="4" width="100%" height="8" />
        <Rect x="0" y="204" rx="4" ry="4" width="100%" height="8" />
      </Svg>
    );
  }


export default function ViewPost({navigation, route}) {
    const MaskedElement_1 = getMaskedElement_1();
    const [posts, setPosts] = useState(null);
    const [comm, setComm] = useState('');
    const [answers, setAnswers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const comments = [];
    const setC = () => {
        setComm('');
    };

    const handleGetPost = () => {
        setIsLoading(true);
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
                //<></>
                <View style={styles.container_1}>
                <ContentLoader 
                  MaskedElement={MaskedElement_1} 
                  forColorOpacity={0.8} 
                  //'https://images.unsplash.com/photo-1623732293823-2ffceeebc978?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
                  backgroundImage={{uri:'https://cdn.wallpapersafari.com/12/62/BQJnG6.jpg'}}
                />
              </View>
            )}
        </View>
    );
}

const styles2 = StyleSheet.create({
    container_1: {
      backgroundColor: '#fff',
      paddingHorizontal: 24,
      paddingVertical: 30,
      height: 285
    },
    container_2: {
      backgroundColor: '#fff',
      height: 145,
    },
    cardLoaderContainer: {
      width: '100%',
      flexDirection: 'row',
      paddingBottom: 20
    },
    cardCircleWrapper:{
      paddingTop: 20,
      paddingLeft: 33,
      width: 147
    },
    cardContextWrapper:{
      flex: 1,
      padding: 20,
      paddingLeft: 22,
      paddingBottom: 0
    },
    loadingBackgroundStyle: {
        backgroundColor: 'rgba(125, 125, 255, 1)',
      },
  });