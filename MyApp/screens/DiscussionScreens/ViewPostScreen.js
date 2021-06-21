import React, { Component, useState, useEffect } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Image,
    TouchableOpacity,
} from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import Post from "../../components/Post";
import { styles, theme } from "../../constants/Styles";
import { BackendURL } from "../../constants/Backend";
import PostClickable from "../../components/PostClickable";
import LoadingScreen from "../LoadingScreen";

export default function ViewPostScreen({
    navigation,
    userId,
    setIsLoading,
    isLoading,
}) {
    const [posts, setPosts] = useState([]);
    const [postResponses, setPostResponses] = useState([]);

    const srp = (resp) => {
        setPostResponses(resp);
    };

    const handleGetPosts = async () => {
        setIsLoading(true);
        fetch(BackendURL + "rest/post/get/all", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        })
            .then((res) => {
                if (res.status === 400) {
                    return "Error";
                } else if (res === null) {
                    return "Error";
                } else {
                    return res.json();
                }
            })
            .then((res) => {
                if (res === "Error") {
                    alert("Cannot Get Posts");
                } else {
                    // console.log(res.length);
                    var p = [];
                    for (var i = 0; i < res.length; i++) {
                        // console.log(res[i]);
                        p.push(
                            <PostClickable
                                key={Math.random().toString()}
                                navigation={navigation}
                                postRes={res[i]}
                                postOpen={false}
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
        const unsubscribe = navigation.addListener("focus", () => {
            handleGetPosts();
            // viewPosts();
        });

        return unsubscribe;
    }, [navigation]);

    useEffect(() => {
        handleGetPosts();
    }, []);

    const viewPosts = () => {
        if (posts.length == 0) {
            return <Text style={styles().buttonText}>No Posts Found</Text>;
        } else {
            return posts.reverse();
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
