import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { 
    StyleSheet,
} from 'react-native';
import Colors from '../constants/Colors'
import Tabs from "./DiscussionScreens/Tab"
import SettingsScreen from './SettingsScreen'
import LoginScreen from '../screens/LoginScreen'
import Registration from '../screens/Registration'
import { ViewUserProfileStackSc } from './ViewUserProfileScreen'
import { DrawerMan } from './DiscussionScreens/DrawerMan'
import { ThemeProvider } from '../components/Theme'
import ViewUserProfileScreen from './ViewUserProfileScreen';
const MyDrawer = createDrawerNavigator();
function DiscussionForum () {
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
                <MyDrawer.Screen 
                    name="Login" 
                    component={LoginScreen} />
                <MyDrawer.Screen 
                    name="Register" 
                    component={Registration} />
                <MyDrawer.Screen 
                    name="ViewUserProfile" 
                    component={ViewUserProfileStackSc}
                    options={
                        {
                            gestureEnabled:false
                        }
                    }/>
            </MyDrawer.Navigator>
        </NavigationContainer>
    );
}

export default () => (
    <ThemeProvider>
        <DiscussionForum/>
    </ThemeProvider>
);
