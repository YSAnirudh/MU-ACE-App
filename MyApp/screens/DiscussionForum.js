import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { 
    StyleSheet, 
    Text, 
    View,
    TextInput
} from 'react-native';
import Colors from '../constants/Colors'
import {ViewPostStackSc} from './DiscussionScreens/Stacks'
import Tabs from "./DiscussionScreens/Tab"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
const Drawer = createDrawerNavigator();
const myTab = createMaterialBottomTabNavigator();
export default function DiscussionForum () {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen 
                    name="Home" 
                    component={Tabs} />
            {/* <Tabs/> */}
                {/* <Drawer.Screen 
                    name="Create" 
                    component={CreatePostStackSc} />
                <Drawer.Screen 
                    name="Availability" 
                    component={AvailabilityStackSc} />
                <Drawer.Screen 
                    name="Profile" 
                    component={ProfileStackSc} /> */}
            </Drawer.Navigator>

        </NavigationContainer>
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
