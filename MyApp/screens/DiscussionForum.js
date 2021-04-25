import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { 
    StyleSheet,
} from 'react-native';
import Colors from '../constants/Colors'
import Tabs from "./DiscussionScreens/Tab"
import SettingsScreen from './SettingsScreen'
import { DrawerMan } from './DiscussionScreens/DrawerMan'
const MyDrawer = createDrawerNavigator();
export default function DiscussionForum () {
    return (
        <NavigationContainer>
            <MyDrawer.Navigator 
                drawerContent = {props => <DrawerMan {...props} />}
                initialRouteName="Home">
                <MyDrawer.Screen 
                    name="Home" 
                    component={Tabs} />
                <MyDrawer.Screen 
                    name="Settings" 
                    component={SettingsScreen} />
            </MyDrawer.Navigator>

        </NavigationContainer>
    );
}

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      borderWidth: 10,
      borderColor:Colors.Gold,
      backgroundColor: Colors.Grey,
      alignItems: 'center',
      justifyContent: 'center',
    },
});
