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
import {iconSize} from '../../constants/Sizes';

var MainTab = createMaterialBottomTabNavigator();

function Tabs({userId}) {
    return (
        <MainTab.Navigator initialRouteName="Forum" activeColor={Colors.Grey}>
            <MainTab.Screen
                name="Forum"
                options={{
                    tabBarLabel: '',
                    tabBarColor: theme().footerColor,
                    tabBarIcon: () => (
                        <Icons
                            name="chatbubble-ellipses"
                            color={theme().footerIcons}
                            size={iconSize + 2}
                            style={{alignSelf: 'center'}}
                        />
                    ),
                }}
            >
                {(props) => <ViewPostStackSc {...props} userId={userId} />}
            </MainTab.Screen>
            <MainTab.Screen
                name="Create Post"
                options={{
                    tabBarLabel: '',
                    tabBarColor: theme().footerColor,
                    tabBarIcon: () => (
                        <Icons
                            name="create"
                            color={theme().footerIcons}
                            size={iconSize + 2}
                            style={{alignSelf: 'center'}}
                        />
                    ),
                }}
            >
                {(props) => <CreatePostStackSc {...props} userId={userId} />}
            </MainTab.Screen>
            <MainTab.Screen
                name="Availability"
                options={{
                    tabBarLabel: '',
                    tabBarColor: theme().footerColor,
                    tabBarIcon: () => (
                        <Icons
                            name="checkmark-circle"
                            color={theme().footerIcons}
                            size={iconSize + 2}
                            style={{alignSelf: 'center'}}
                        />
                    ),
                }}
            >
                {(props) => <AvailabilityStackSc {...props} userId={userId} />}
            </MainTab.Screen>
            <MainTab.Screen
                name="Profile"
                options={{
                    tabBarLabel: '',
                    tabBarColor: theme().footerColor,
                    tabBarIcon: () => (
                        <Icons
                            name="person"
                            color={theme().footerIcons}
                            size={iconSize + 2}
                            style={{alignSelf: 'center'}}
                        />
                    ),
                }}
            >
                {(props) => <ProfileStackSc {...props} userId={userId} />}
            </MainTab.Screen>
        </MainTab.Navigator>
    );
}

export default Tabs;
