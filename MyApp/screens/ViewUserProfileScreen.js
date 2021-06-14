import React from 'react';

import {View, Text} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import {Title, Button, Avatar} from 'react-native-paper';
import {theme} from '../constants/Styles';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import {userProfileStyles} from '../constants/Styles';
import Colors from '../constants/Colors';
import {margin10, profProfPic} from '../constants/Sizes';

export default function ViewUserProfileScreen({navigation, myRoute}) {
    // Should Get more details from here when we create database for user
    const params = myRoute.params;
    // const department = route.params.department
    return (
        <View style={userProfileStyles().root}>
            <View style={userProfileStyles().userProfImg}>
                <Avatar.Image
                    source={require('../assets/logo2.png')}
                    size={profProfPic}
                />
                <View style={{marginLeft: margin10}}>
                    <Text style={userProfileStyles().stats}>
                        Posts Made &#187; {params.posts}
                    </Text>
                    <Text style={userProfileStyles().stats}>
                        Answers Given &#187; {params.answers}
                    </Text>
                    <Text style={userProfileStyles().stats}>
                        Karma &#187; {params.karma}
                    </Text>
                </View>
            </View>

            <View style={userProfileStyles().profileDetails}>
                <View
                    style={{
                        borderBottomWidth: 1,
                        borderBottomColor: theme().text,
                        paddingBottom: 5,
                    }}
                >
                    <Title style={userProfileStyles().userTitle}>
                        {params.username}
                    </Title>
                </View>
                <View style={{paddingBottom: 9}}></View>
                <Text style={userProfileStyles().userText}>
                    {params.usertype}
                </Text>
                <Text style={userProfileStyles().userText}>
                    {params.department}
                </Text>

                <View style={userProfileStyles().emailBox}>
                    <MaterialIcons
                        name="email"
                        style={{
                            marginLeft: userProfileStyles().userText.marginLeft,
                        }}
                        size={userProfileStyles().emailIcon.size}
                        color={userProfileStyles().emailIcon.color}
                    />
                    <Text style={userProfileStyles().myText}>
                        {params.email}
                    </Text>
                </View>
                <View style={{paddingTop: 10}}>
                    <Text style={userProfileStyles().userText}>
                        About : {params.description}
                    </Text>
                </View>
            </View>
            <View>
                <Text>Hello</Text>
            </View>
            {/* <Button 
                icon="account-edit" 
                mode="outlined" 
                //theme={pageTheme} 
                color={theme().iconColor} 
                onPress={() => {}} style={userProfileStyles().buttonStyle} 
            >
                <Text style={userProfileStyles().buttonText} >Edit Profile</Text>
            </Button>
            <Button 
                icon="logout" 
                mode="outlined" 
                //theme={pageTheme} 
                color={theme().iconColor} 
                onPress={() => {}} style={userProfileStyles().buttonStyle}
            >
            <Text style={userProfileStyles().buttonText}>Log out</Text>
            </Button> */}
        </View>
    );
}

ViewUserProfileStack = createStackNavigator();

export function ViewUserProfileStackSc({navigation, route}) {
    const name = route.params.username + "'s Profile";
    return (
        <ViewUserProfileStack.Navigator
            headerMode="screen"
            screenOptions={{
                headerStyle: {
                    backgroundColor: Colors.DiscussionView,
                },
                headerTitleAlign: 'center',
            }}
        >
            <ViewUserProfileStack.Screen
                name={name}
                options={() => ({
                    headerLeft: () =>
                        backButton(navigation, Colors.DiscussionView),
                    headerRight: () =>
                        forumButton(navigation, Colors.DiscussionView),
                })}
            >
                {(props) => (
                    <ViewUserProfileScreen {...props} myRoute={route} />
                )}
            </ViewUserProfileStack.Screen>
        </ViewUserProfileStack.Navigator>
    );
}

function backButton(navigation, color) {
    return (
        <Icon.Button
            name="arrow-back"
            size={35}
            backgroundColor={color}
            color={Colors.DarkGrey}
            onPress={() => navigation.goBack()}
        />
    );
}

function forumButton(navigation, color) {
    return (
        <Icon.Button
            name="chatbubble-ellipses"
            size={30}
            backgroundColor={color}
            color={Colors.DarkGrey}
            onPress={() => navigation.navigate('Forum')}
        />
    );
}
