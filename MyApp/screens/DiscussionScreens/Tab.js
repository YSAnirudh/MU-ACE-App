import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { ViewPostStackSc, CreatePostStackSc, AvailabilityStackSc, ProfileStackSc } from './Stacks'
import Icons from 'react-native-vector-icons/Ionicons';
import Colors from '../../constants/Colors';

var MainTab = createMaterialBottomTabNavigator();

function Tabs (){
  return (
    <MainTab.Navigator
        initialRouteName="View Post"
        activeColor={Colors.Grey}
    >
      <MainTab.Screen
        name="View Post"
        component={ViewPostStackSc}
        options={{
          tabBarLabel: 'Home',
          tabBarColor:Colors.DiscussionView,
          tabBarIcon: () => (
            <Icons name="chatbubble-ellipses" color={Colors.Grey} size={26} />
          ),
        }}
      />
      <MainTab.Screen
        name="Create"
        component={CreatePostStackSc}
        options={{
          tabBarLabel: 'Create',
          tabBarColor:Colors.DiscussionCreate,
          tabBarIcon: () => (
            <Icons name="create" color={Colors.Grey} size={26} />
          ),
        }}
      />
      <MainTab.Screen
        name="Availability"
        component={AvailabilityStackSc}
        options={{
          tabBarLabel: 'Availability',
          tabBarColor:Colors.DiscussionAvailability,
          tabBarIcon: () => (
            <Icons name="checkmark-circle" color={Colors.Grey} size={26} />
          ),
        }}
      />
      <MainTab.Screen
        name="Profile"
        component={ProfileStackSc}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor:Colors.DiscussionProfile,
          tabBarIcon: () => (
            <Icons name="person" color={Colors.Grey} size={26} />
          ),
        }}
      />
    </MainTab.Navigator>
  );
}

export default Tabs;