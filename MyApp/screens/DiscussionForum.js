import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {StyleSheet} from 'react-native';
import Colors from '../constants/Colors';
import Tabs from './DiscussionScreens/Tab';
import SettingsScreen from './SettingsScreen';
import LoginScreen from '../screens/LoginScreen';
import Registration from '../screens/Registration';
import {ViewUserProfileStackSc} from './ViewUserProfileScreen';
import {DrawerMan} from './DiscussionScreens/DrawerMan';
import {ThemeProvider} from '../components/Theme';
import ViewUserProfileScreen from './ViewUserProfileScreen';
import EditProfile from './EditProfile';
import ViewPost from './DiscussionScreens/ViewPost';
import {EditProfileSc, ViewStackSc} from './DiscussionScreens/Stacks';

const MyDrawer = createDrawerNavigator();
function DiscussionForumNoob({isLogin, setIsLogin, userId, setUserId}) {
    return (
        <NavigationContainer>
            <MyDrawer.Navigator
                drawerContent={(props) => (
                    <DrawerMan
                        {...props}
                        userId={userId}
                        setIsLogin={setIsLogin}
                        setUserId={setUserId}
                    />
                )}
                initialRouteName="Home"
            >
                <MyDrawer.Screen name="Home">
                    {(props) => <Tabs {...props} userId={userId} />}
                </MyDrawer.Screen>
                <MyDrawer.Screen
                    name="ViewUserProfile"
                    options={{
                        gestureEnabled: false,
                    }}
                >
                    {(props) => (
                        <ViewUserProfileStackSc {...props} userId={userId} />
                    )}
                </MyDrawer.Screen>
                <MyDrawer.Screen name="EditProfile">
                    {(props) => (
                        <EditProfileSc
                            {...props}
                            userId={userId}
                            setIsLogin={setIsLogin}
                            setUserId={setUId}
                        />
                    )}
                </MyDrawer.Screen>
                <MyDrawer.Screen name="ViewPost" component={ViewStackSc} />
                {/* <MyDrawer.Screen name="ViewPost">
                    {(props) => <ViewStackSc {...props} userId={userId} />}
                </MyDrawer.Screen> */}
                {/* <MyDrawer.Screen name="Settings" component={SettingsScreen} /> */}
                <MyDrawer.Screen name="Login" component={LoginScreen} />
                <MyDrawer.Screen name="Register" component={Registration} />
            </MyDrawer.Navigator>
        </NavigationContainer>
    );
}

export default function DiscussionForum({
    isLogin,
    setIsLogin,
    userId,
    setUserId,
}) {
    return (
        <ThemeProvider>
            <DiscussionForumNoob
                isLogin={isLogin}
                setIsLogin={setIsLogin}
                userId={userId}
                setUserId={setUserId}
            />
        </ThemeProvider>
    );
}
