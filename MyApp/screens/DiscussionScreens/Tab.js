import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {
  ViewPostStackSc,
  CreatePostStackSc,
  AvailabilityStackSc,
  ProfileStackSc,
} from './Stacks';
import Icons from 'react-native-vector-icons/Ionicons';
import Colors from '../../constants/Colors';
import {theme} from '../../constants/Styles';

var MainTab = createMaterialBottomTabNavigator();

function Tabs() {
  return (
    <MainTab.Navigator initialRouteName="Forum" activeColor={Colors.Grey}>
      <MainTab.Screen
        name="Forum"
        component={ViewPostStackSc}
        options={{
          tabBarLabel: '',
          tabBarColor: theme().footerColor,
          tabBarIcon: () => (
            <Icons
              name="chatbubble-ellipses"
              color={theme().footerIcons}
              size={26}
            />
          ),
        }}
      />
      <MainTab.Screen
        name="Create Post"
        component={CreatePostStackSc}
        options={{
          tabBarLabel: '',
          tabBarColor: theme().footerColor,
          tabBarIcon: () => (
            <Icons name="create" color={theme().footerIcons} size={26} />
          ),
        }}
      />
      <MainTab.Screen
        name="Availability"
        component={AvailabilityStackSc}
        options={{
          tabBarLabel: '',
          tabBarColor: theme().footerColor,
          tabBarIcon: () => (
            <Icons
              name="checkmark-circle"
              color={theme().footerIcons}
              size={26}
            />
          ),
        }}
      />
      <MainTab.Screen
        name="Profile"
        component={ProfileStackSc}
        options={{
          tabBarLabel: '',
          tabBarColor: theme().footerColor,
          tabBarIcon: () => (
            <Icons name="person" color={theme().footerIcons} size={26} />
          ),
        }}
      />
    </MainTab.Navigator>
  );
}

export default Tabs;
