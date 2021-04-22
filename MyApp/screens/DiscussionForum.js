import React, { Component } from 'react'
import { 
    StyleSheet, 
    Text, 
    View,
    TextInput
} from 'react-native';
import Colors from '../constants/Colors'
export default function DiscussionForum () {
    return (
        <View style={styles.container}>
            <Text>Hello</Text>
            <TextInput>
                Hello my bad
            </TextInput>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      borderWidth: 10,
      borderColor:Colors.secondary,
      backgroundColor: Colors.primary_dark,
      alignItems: 'center',
      justifyContent: 'center',
    },
});
