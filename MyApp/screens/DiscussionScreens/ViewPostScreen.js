import React, { Component } from 'react'
import { 
    StyleSheet, 
    Text, 
    View,
    TextInput,
    Button
} from 'react-native';
import Colors from '../../constants/Colors'

export default function ViewPostScreen ({navigation}) {
    return (
        <View style={styles.container}>
            <Text>
                PostScreen
            </Text>
            <Button 
                title="Go to Create"
                onPress= {() => navigation.navigate("Create")}/>
            <Button 
                title="Go to Availability"
                onPress= {() => navigation.navigate("Availability")}/>
            <Button 
                title="Go to Profile"
                onPress= {() => navigation.navigate("Profile")}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      borderWidth: 10,
      borderColor:Colors.Gold,
      backgroundColor: Colors.Grey,
      alignItems: 'center',
      justifyContent: 'center',
    },
});

