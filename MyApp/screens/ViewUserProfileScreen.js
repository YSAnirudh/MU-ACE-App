import React from 'react'

import {
    View,
    Text
} from 'react-native'

import { createStackNavigator } from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/Ionicons'
import { userProfileStyles } from '../constants/Styles'
import Colors from '../constants/Colors'

export default function ViewUserProfileScreen({route}) {
    // Should Get more details from here when we create database for user
    // const username = route.params.username
    // const department = route.params.department
    return (
        <View style={userProfileStyles().mainView}>
            <Text>
                {/* {username}
                {department} */}
            </Text>
        </View>
    );
}

ViewUserProfileStack = createStackNavigator();

export function ViewUserProfileStackSc ({navigation, route}) {
    const name = route.params.username;
    return (
        <ViewUserProfileStack.Navigator
            headerMode='screen'
            screenOptions={
                {
                    headerStyle: {
                        backgroundColor:Colors.DiscussionView
                    },
                    headerTitleAlign:'center',
                }
            }>
            <ViewUserProfileStack.Screen
                name="View User Profile" 
                component={ViewUserProfileScreen}
                options={() => ({
                    headerLeft:() => backButton(navigation, Colors.DiscussionView)
                })}
            />
        </ViewUserProfileStack.Navigator>
    );
}

function backButton(navigation, color) {
    return(
        <Icon.Button
            name="arrow-back" 
            size={35}
            backgroundColor={color}
            color={Colors.DarkGrey}
            onPress={() => navigation.goBack()}
        />
    );
}