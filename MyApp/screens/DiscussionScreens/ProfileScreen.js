import React, { Component } from 'react'
import { 
    StyleSheet, 
    Text, 
    View,
    TextInput,
    Button
} from 'react-native';
import Colors from '../../constants/Colors'

export default function ProfileScreen ({navigation}) {
    return (
        <View style={styles.container}>
            <Text>
                ProfileScreen
            </Text>
            <Button 
                title="Go to View Post"
                onPress= {() => navigation.navigate("View Post")}/>
            <Button 
                title="Go to Create"
                onPress= {() => navigation.navigate("Create")}/>
            <Button 
                title="Go to Availability"
                onPress= {() => navigation.navigate("Availability")}/>
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