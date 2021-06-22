import React, {Component} from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {StyleSheet} from 'react-native';
import Colors from '../constants/Colors';
import Tabs from './DiscussionScreens/Tab';
import LoginScreen from '../screens/LoginScreen';
import Registration from '../screens/Registration';
import {DrawerMan} from './DiscussionScreens/DrawerMan';
import {ThemeContext, ThemeProvider} from '../components/Theme';
import ViewUserProfileScreen from './ViewUserProfileScreen';
import EditProfile from './EditProfile';
import ViewPost from './DiscussionScreens/ViewPost';
import {
    EditProfileSc,
    ViewStackSc,
    ViewUserPostsSc,
    ViewUserProfileStackSc,
} from './DiscussionScreens/Stacks';
import {useEffect} from 'react';
import {BackendURL} from '../constants/Backend';

const MyDrawer = createDrawerNavigator();
function DiscussionForumNoob({
    isLogin,
    setIsLogin,
    userId,
    setUserId,
    isLoading,
    setIsLoading,
    ...props
}) {
    const {darkMode, toggleTheme, setDarkMode} = React.useContext(ThemeContext);
    const handleGetData = () => {
        // handleUID(userId);
        setIsLoading(true);
        fetch(BackendURL + 'rest/user/get', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                userId: userId,
            }),
        })
            .then((res) => {
                if (res.status === 400) {
                    console.log(res.json());
                    return 'Error';
                } else {
                    return res.json();
                }
            })
            .then((res) => {
                if (res === 'Error') {
                    setAlert(true, 'Cannot Get Data');
                } else {
                    // console.log(res);
                    setDarkMode(res.theme);
                    setIsLoading(false);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        handleGetData();
    }, []);

    return (
        <NavigationContainer>
            <MyDrawer.Navigator
                drawerContent={(props) => (
                    <DrawerMan
                        {...props}
                        userId={userId}
                        setIsLogin={setIsLogin}
                        setUserId={setUserId}
                        isLoading={isLoading}
                        setIsLoading={setIsLoading}
                    />
                )}
                initialRouteName="Home"
            >
                <MyDrawer.Screen name="Home">
                    {(props) => (
                        <Tabs
                            {...props}
                            userId={userId}
                            isLoading={isLoading}
                            setIsLoading={setIsLoading}
                            setIsLogin={setIsLogin}
                            setUserId={setUserId}
                        />
                    )}
                </MyDrawer.Screen>
                <MyDrawer.Screen
                    name="ViewUserProfile"
                    options={{
                        gestureEnabled: false,
                    }}
                >
                    {(props) => (
                        <ViewUserProfileStackSc
                            {...props}
                            userId={userId}
                            isLoading={isLoading}
                            setIsLoading={setIsLoading}
                        />
                    )}
                </MyDrawer.Screen>
                <MyDrawer.Screen name="EditProfile">
                    {(props) => (
                        <EditProfileSc
                            {...props}
                            userId={userId}
                            setIsLogin={setIsLogin}
                            setUserId={setUserId}
                            isLoading={isLoading}
                            setIsLoading={setIsLoading}
                        />
                    )}
                </MyDrawer.Screen>
                <MyDrawer.Screen name="UserPost">
                    {(props) => (
                        <ViewUserPostsSc
                            {...props}
                            userId={userId}
                            setUserId={setUserId}
                            isLoading={isLoading}
                            setIsLoading={setIsLoading}
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
    setIsLoading,
    isLoading,
}) {
    return (
        <ThemeProvider>
            <DiscussionForumNoob
                isLogin={isLogin}
                setIsLogin={setIsLogin}
                userId={userId}
                setUserId={setUserId}
                setIsLoading={setIsLoading}
                isLoading={isLoading}
            />
        </ThemeProvider>
    );
}
