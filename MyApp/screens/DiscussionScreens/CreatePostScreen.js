import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { 
    StyleSheet, 
    Text, 
    View,
    TextInput
} from 'react-native';
import Colors from '../../constants/Colors'

export default function CreatePostScreen () {
    return (
        <View style={styles.container}>
            <Text>
                CreateScreen
            </Text>
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
