import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons'
import { 
    StyleSheet, 
    Text, 
    View,
    TextInput
} from 'react-native';
import Colors from '../constants/Colors'
import ViewPostScreen from "./DiscussionScreens/ViewPostScreen"
import CreatePostScreen from "./DiscussionScreens/CreatePostScreen"

ViewPostStack = createStackNavigator();
CreatePostStack = createStackNavigator();

const Drawer = createDrawerNavigator();

function ViewPostStackSc ({navigation}) {
    return (
        <ViewPostStack.Navigator
        screenOptions={
            {
                headerStyle: {
                    backgroundColor:Colors.primary_dark
                }
            }
        }>
            <ViewPostStack.Screen
                name = "View Posts"
                component = {ViewPostScreen}
                options={{
                    title:"Posts",
                    headerLeft: () => {
                        <Icon.Button 
                        name="android-menu"
                        size={25}
                        backgroundColor="#fff"
                        onClick={()=>navigation.openDrawer()}>
                            
                        </Icon.Button>
                    }
                }}>

            </ViewPostStack.Screen>
        </ViewPostStack.Navigator>
    );
}
function CreatePostStackSc ({navigation}) {
    return (
        <CreatePostStack.Navigator 
        screenOptions={
            {
                headerStyle: {
                    backgroundColor:Colors.primary_dark
                }
            }
        }>
            <CreatePostStack.Screen
                name = "Create Posts"
                component = {CreatePostScreen}
                options={{
                    title:"Create Posts",
                    headerLeft: () => {
                        <Icon.Button 
                        name="android-menu"
                        size={25}
                        backgroundColor="#fff"
                        onClick={()=>navigation.operDrawer()}>

                        </Icon.Button>
                    }
                }}>

            </CreatePostStack.Screen>
        </CreatePostStack.Navigator>
    );
}

export default function DiscussionForum () {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen 
                    name="Home" 
                    component={ViewPostStackSc} />
                <Drawer.Screen 
                    name="Create" 
                    component={CreatePostStackSc} />
            </Drawer.Navigator>
        </NavigationContainer>
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
