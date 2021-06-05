import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Button, Image} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import Post from '../../components/Post';
import {styles, theme} from '../../constants/Styles';
export default function ViewPostScreen({navigation}) {
  const Posts = [];

  const handleGetPosts = () => {
    for (var i = 0; i < 5; i++) {
      var user = 'Nob' + i;
      Posts.push(
        <Post userName={user} userEmail="@noob1" description="Hello" />
      );
    }
  };

  const viewPosts = () => {
    handleGetPosts();
    if (Posts.length == 0) {
      return <Text style={styles().buttonText}>No Posts Found</Text>;
    } else {
      return Posts.map((item) => item);
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
