import React, { Component } from 'react'
import ViewPostScreen from "./ViewPostScreen"
import CreatePostScreen from "./CreatePostScreen"
import AvailabilityScreen from "./AvailabilityScreen"
import ProfileScreen from "./ProfileScreen"
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Colors from '../../constants/Colors'

const CreatePostStack = createStackNavigator();
const ViewPostStack = createStackNavigator();
const AvailabilityStack = createStackNavigator();
const ProfileStack = createStackNavigator();

export function ViewPostStackSc ({navigation}) {
    return (
        <ViewPostStack.Navigator
            headerMode='screen'
            screenOptions={
                {
                    headerStyle: {
                        backgroundColor:Colors.DiscussionView
                    },
                    headerTitleAlign:'center',
                }
            }>
            <ViewPostStack.Screen 
                name="View Post" 
                component={ViewPostScreen}
                options={{
                    headerLeft:() => menuButton(navigation, Colors.DiscussionView)
                }}
            />
        </ViewPostStack.Navigator>
    );
}

export function CreatePostStackSc ({navigation}) {
    return (
        <CreatePostStack.Navigator
            headerMode='screen'
            screenOptions={
                {
                    headerStyle: {
                        backgroundColor:Colors.DiscussionCreate
                    },
                    headerTitleAlign:'center',
                }
            }>
            <CreatePostStack.Screen 
                name="Create" 
                component={CreatePostScreen}
                options={{
                    headerLeft:() => menuButton(navigation, Colors.DiscussionCreate)
                }}
            />
        </CreatePostStack.Navigator>
    );
}

export function AvailabilityStackSc ({navigation}) {
    return (
        <AvailabilityStack.Navigator
            headerMode='screen'
            screenOptions={
                {
                    headerStyle: {
                        backgroundColor:Colors.DiscussionAvailability
                    },
                    headerTitleAlign:'center',
                }
            }>
            <AvailabilityStack.Screen 
                name="Availability" 
                component={AvailabilityScreen}
                options={{
                    headerLeft:() => menuButton(navigation, Colors.DiscussionAvailability)
                }}
            />
        </AvailabilityStack.Navigator>
    );
}

export function ProfileStackSc ({navigation}) {
    return (
        <ProfileStack.Navigator
            headerMode='screen'
            screenOptions={
                {
                    headerStyle: {
                        backgroundColor:Colors.DiscussionProfile
                    },
                    headerTitleAlign:'center',
                }
            }>
            <ProfileStack.Screen 
                name="Profile" 
                component={ProfileScreen}
                options={{
                    headerLeft:() => menuButton(navigation, Colors.DiscussionProfile)
                }}
            />
        </ProfileStack.Navigator>
    );
}

function menuButton (navigation, color) {
    return (
    <Ionicons.Button 
        name="reorder-three-outline" 
        size={35}
        backgroundColor={color}
        color={Colors.DarkGrey}
        onPress={() => navigation.openDrawer()}/>
    );
}
