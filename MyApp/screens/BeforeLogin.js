import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import Registration from './Registration';
import {theme} from '../constants/Styles';
import {ThemeProvider} from '../components/Theme';
import {NavigationContainer} from '@react-navigation/native';
const LoginRegStack = createStackNavigator();

function LoginRegStackSc() {
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
          component={LoginScreen}
          options={{
            headerTintColor: theme().header,
          }}
        />
        <LoginRegStack.Screen
          name="Register"
          component={Registration}
          options={{
            headerTintColor: theme().header,
          }}
        />
      </LoginRegStack.Navigator>
    </NavigationContainer>
  );
}

export default () => (
  <ThemeProvider>
    <LoginRegStackSc />
  </ThemeProvider>
);
