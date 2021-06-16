import React, {Component} from 'react';
import ViewPostScreen from './ViewPostScreen';
import CreatePostScreen from './CreatePostScreen';
import AvailabilityScreen from './AvailabilityScreen';
import ProfileScreen from './ProfileScreen';
import {createStackNavigator} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../constants/Colors';
import {color} from 'react-native-reanimated';
import {theme} from '../../constants/Styles';
import {ThemeProvider} from '@react-navigation/native';
import {iconSize} from '../../constants/Sizes';
// import ViewPost from './ViewPost';
import EditProfile from '../EditProfile';
import ViewPost from './ViewPost';
import ViewUserPostScreen from './ViewUserPosts';
import {useState, useEffect} from 'react';
import {BackendURL} from '../../constants/Backend';

const CreatePostStack = createStackNavigator();
const ViewPostStack = createStackNavigator();
const ViewPostUserStack = createStackNavigator();
const AvailabilityStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const ViewStack = createStackNavigator();
const EditProfileStack = createStackNavigator();

export function ViewStackSc({navigation, userId, isLoading, setIsLoading}) {
    return (
        <ViewStack.Navigator
            headerMode="screen"
            screenOptions={{
                headerStyle: {
                    backgroundColor: theme().headerColor,
                },
                headerTitleAlign: 'center',
            }}
        >
            <ViewStack.Screen
                name="ViewPost"
                component={ViewPost}
                options={{
                    headerTintColor: theme().header,
                    headerLeft: () =>
                        backButton(navigation, theme().headerColor),
                }}
            />
        </ViewStack.Navigator>
    );
}

export function EditProfileSc({navigation, userId, isLoading, setIsLoading}) {
    return (
        <EditProfileStack.Navigator
            headerMode="screen"
            screenOptions={{
                headerStyle: {
                    backgroundColor: theme().headerColor,
                },
                headerTitleAlign: 'center',
            }}
        >
            <EditProfileStack.Screen
                name="Edit Profile"
                options={{
                    headerTintColor: theme().header,
                    headerLeft: () =>
                        backButton(navigation, theme().headerColor),
                }}
            >
                {(props) => (
                    <EditProfile
                        {...props}
                        userId={userId}
                        isLoading={isLoading}
                        setIsLoading={setIsLoading}
                    />
                )}
            </EditProfileStack.Screen>
        </EditProfileStack.Navigator>
    );
}

export function ViewUserPostsSc({navigation, userId, isLoading, setIsLoading}) {
    return (
        <ViewPostUserStack.Navigator
            headerMode="screen"
            screenOptions={{
                headerStyle: {
                    backgroundColor: theme().headerColor,
                },
                headerTitleAlign: 'center',
            }}
        >
            <ViewPostUserStack.Screen
                name={'Your Posts'}
                options={{
                    headerTintColor: theme().header,
                    headerLeft: () =>
                        backButton(navigation, theme().headerColor),
                }}
            >
                {(props) => (
                    <ViewUserPostScreen
                        {...props}
                        userId={userId}
                        isLoading={isLoading}
                        setIsLoading={setIsLoading}
                    />
                )}
            </ViewPostUserStack.Screen>
        </ViewPostUserStack.Navigator>
    );
}

export function ViewPostStackSc({navigation, userId, isLoading, setIsLoading}) {
    return (
        <ViewPostStack.Navigator
            headerMode="screen"
            screenOptions={{
                headerStyle: {
                    backgroundColor: theme().headerColor,
                },
                headerTitleAlign: 'center',
            }}
        >
            <ViewPostStack.Screen
                name="Forum"
                options={{
                    headerTintColor: theme().header,
                    // headerTitleStyle: {
                    //     fontWeight: 'bold',
                    // },
                    headerLeft: () =>
                        menuButton(navigation, theme().headerColor),
                }}
            >
                {(props) => (
                    <ViewPostScreen
                        {...props}
                        userId={userId}
                        isLoading={isLoading}
                        setIsLoading={setIsLoading}
                    />
                )}
            </ViewPostStack.Screen>
        </ViewPostStack.Navigator>
    );
}

export function CreatePostStackSc({
    navigation,
    userId,
    isLoading,
    setIsLoading,
}) {
    return (
        <CreatePostStack.Navigator
            headerMode="screen"
            screenOptions={{
                headerStyle: {
                    backgroundColor: theme().headerColor,
                },
                headerTitleAlign: 'center',
            }}
        >
            <CreatePostStack.Screen
                name="Create"
                options={{
                    headerTintColor: theme().header,
                    headerLeft: () =>
                        menuButton(navigation, theme().headerColor),
                }}
            >
                {(props) => (
                    <CreatePostScreen
                        {...props}
                        userId={userId}
                        isLoading={isLoading}
                        setIsLoading={setIsLoading}
                    />
                )}
            </CreatePostStack.Screen>
        </CreatePostStack.Navigator>
    );
}

export function AvailabilityStackSc({
    navigation,
    userId,
    isLoading,
    setIsLoading,
}) {
    return (
        <AvailabilityStack.Navigator
            headerMode="screen"
            screenOptions={{
                headerStyle: {
                    backgroundColor: theme().headerColor,
                },
                headerTitleAlign: 'center',
            }}
        >
            <AvailabilityStack.Screen
                name="Availability"
                options={{
                    headerTintColor: theme().header,
                    headerLeft: () =>
                        menuButton(navigation, theme().headerColor),
                }}
            >
                {(props) => (
                    <AvailabilityScreen
                        {...props}
                        userId={userId}
                        isLoading={isLoading}
                        setIsLoading={setIsLoading}
                    />
                )}
            </AvailabilityStack.Screen>
        </AvailabilityStack.Navigator>
    );
}

export function ProfileStackSc({
    navigation,
    userId,
    isLoading,
    setIsLoading,
    setUserId,
    setIsLogin,
}) {
    return (
        <ProfileStack.Navigator
            headerMode="screen"
            screenOptions={{
                headerStyle: {
                    backgroundColor: theme().headerColor,
                },
                headerTitleAlign: 'center',
            }}
        >
            <ProfileStack.Screen
                name="Profile"
                options={{
                    headerTintColor: theme().header,
                    headerLeft: () =>
                        menuButton(navigation, theme().headerColor),
                }}
            >
                {(props) => (
                    <ProfileScreen
                        {...props}
                        userId={userId}
                        isLoading={isLoading}
                        setIsLoading={setIsLoading}
                        setUserId={setUserId}
                        setIsLogin={setIsLogin}
                    />
                )}
            </ProfileStack.Screen>
        </ProfileStack.Navigator>
    );
}

function menuButton(navigation, color) {
    return (
        <Ionicons.Button
            name="reorder-three-outline"
            size={iconSize + 10}
            backgroundColor={color}
            color={theme().header}
            onPress={() => navigation.openDrawer()}
        />
    );
}

function backButton(navigation, color) {
    return (
        <Ionicons.Button
            name="arrow-back"
            size={iconSize + 10}
            backgroundColor={color}
            color={theme().header}
            onPress={() => navigation.goBack()}
        />
    );
}
