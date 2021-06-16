import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import Registration from './Registration';
import {theme} from '../constants/Styles';
import {ThemeProvider} from '../components/Theme';
import {NavigationContainer} from '@react-navigation/native';
const LoginRegStack = createStackNavigator();

function LoginRegStackSc({
    isLogin,
    setIsLogin,
    setUserId,
    isLoading,
    setIsLoading,
}) {
    return (
        <NavigationContainer>
            <LoginRegStack.Navigator
                headerMode="none"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: theme().headerColor,
                    },
                    headerTitleAlign: 'center',
                }}
            >
                <LoginRegStack.Screen
                    name="Login"
                    options={{
                        headerTintColor: theme().header,
                    }}
                >
                    {(props) => (
                        <LoginScreen
                            {...props}
                            setIsLogin={setIsLogin}
                            setUserId={setUserId}
                            isLoading={isLoading}
                            setIsLoading={setIsLoading}
                        />
                    )}
                </LoginRegStack.Screen>

                <LoginRegStack.Screen
                    name="Register"
                    options={{
                        headerTintColor: theme().header,
                    }}
                >
                    {(props) => (
                        <Registration
                            {...props}
                            isLoading={isLoading}
                            setIsLoading={setIsLoading}
                        />
                    )}
                </LoginRegStack.Screen>
            </LoginRegStack.Navigator>
        </NavigationContainer>
    );
}

export default function BeforeLogin({
    isLogin,
    setIsLogin,
    setUserId,
    isLoading,
    setIsLoading,
}) {
    return (
        <ThemeProvider>
            <LoginRegStackSc
                isLogin={isLogin}
                setIsLogin={setIsLogin}
                setUserId={setUserId}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
            />
        </ThemeProvider>
    );
}
