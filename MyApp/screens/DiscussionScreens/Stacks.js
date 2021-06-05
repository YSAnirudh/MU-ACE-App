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

const CreatePostStack = createStackNavigator();
const ViewPostStack = createStackNavigator();
const AvailabilityStack = createStackNavigator();
const ProfileStack = createStackNavigator();

export function ViewPostStackSc({navigation}) {
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
        name="View Post"
        component={ViewPostScreen}
        options={{
          headerTintColor: theme().header,
          // headerTitleStyle: {
          //     fontWeight: 'bold',
          // },
          headerLeft: () => menuButton(navigation, theme().headerColor),
        }}
      />
    </ViewPostStack.Navigator>
  );
}

export function CreatePostStackSc({navigation}) {
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
        component={CreatePostScreen}
        options={{
          headerTintColor: theme().header,
          headerLeft: () => menuButton(navigation, theme().headerColor),
        }}
      />
    </CreatePostStack.Navigator>
  );
}

export function AvailabilityStackSc({navigation}) {
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
        component={AvailabilityScreen}
        options={{
          headerTintColor: theme().header,
          headerLeft: () => menuButton(navigation, theme().headerColor),
        }}
      />
    </AvailabilityStack.Navigator>
  );
}

export function ProfileStackSc({navigation}) {
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
        component={ProfileScreen}
        options={{
          headerTintColor: theme().header,
          headerLeft: () => menuButton(navigation, theme().headerColor),
        }}
      />
    </ProfileStack.Navigator>
  );
}

function menuButton(navigation, color) {
  return (
    <Ionicons.Button
      name="reorder-three-outline"
      size={35}
      backgroundColor={color}
      color={theme().header}
      onPress={() => navigation.openDrawer()}
    />
  );
}
