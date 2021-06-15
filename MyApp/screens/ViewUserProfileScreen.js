import React, {useState} from 'react';

import {View, Text} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import {Title, Button, Avatar} from 'react-native-paper';
import {theme} from '../constants/Styles';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import {userProfileStyles,noobProfile} from '../constants/Styles';
import Colors from '../constants/Colors';
import {margin10, profProfPic} from '../constants/Sizes';
import {screenHeight, screenWidth} from '../utils/ScreenParams';
import {
    profIconSize,
    titleFont,
    textFont,
} from '../constants/Sizes';
import ProgressCircle from 'react-native-progress-circle';
import {heightPercentageToDP, widthPercentageToDP} from 'react-native-responsive-screen';



export default function ViewUserProfileScreen({navigation, myRoute}) {
    // Should Get more details from here when we create database for user
    const params = myRoute.params;
    const [userId, setUserId] = useState(params.userId);
    const [karma, setKarma] = useState(0.0);
    const [posts, setPosts] = useState(0);
    const [answers, setAnswers] = useState(0);
    const handleGetStats = () => {};

    const handleGetUserData = () => {};

    // const department = route.params.department
    return (
        <View style={userProfileStyles().root}>
            <View style={userProfileStyles().userProfImg}>
                <Avatar.Image
                    source={require('../assets/logo2.png')}
                    size={profProfPic}
                />
                <View style={{marginTop: widthPercentageToDP('8%')}}>
                    <Text style={userProfileStyles().stats}>
                        FirstName
                    </Text>
                    <Text style={userProfileStyles().stats}>
                        User Type
                    </Text>
                    <Text style={userProfileStyles().stats}>
                        Deptarment
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
                    <Text style={userProfileStyles().myText}>Email</Text>
                </View>
                </View>
            </View>

            <View style={userProfileStyles().profileDetails}>
                <View
                    style={{
                        //borderBottomWidth: 1,
                        //borderBottomColor: theme().text,
                        paddingBottom: 5,
                    }}
                >
                    <Text style={userProfileStyles().userTitle}>
                        Status
                    </Text>
                </View>
                {/* <View style={{paddingBottom: 9}}></View>
                <Text style={userProfileStyles().userText}>Posts: Posts</Text>
                <Text style={userProfileStyles().userText}>Answers: Answers</Text>
                <Text style={userProfileStyles().userText}>Karma</Text>
                
                <View style={{paddingTop: 10}}>
                    <Text style={userProfileStyles().userText}>
                        About : Desc
                    </Text>
                </View> */}

                <View style={noobProfile().alignProf}>
                <View
                    style={{
                        alignItems: 'center',
                        margin: screenHeight / 80,
                        alignItems: 'flex-start',
                    }}
                >

                    <View style={noobProfile().progressView}>
                        <View style={{alignItems: 'flex-start'}}>
                            {/* <Text style={noobProfile().progText}>
                        
                        </Text> */}
                            <Text
                                style={{
                                    
                                    fontSize: textFont,
                                    color: theme().text,
                                }}
                            >
                                Posts:{posts}
                            </Text>
                            {/* <Text style={noobProfile().progText}>
                        Answers:{comments}
                        </Text> */}
                            <Text
                                style={{
                                    fontSize: textFont,
                                    color: theme().text,
                                }}
                            >
                                Answers:{answers}
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={noobProfile().progressViewBar}>
                    <ProgressCircle
                        percent={karma}
                        // containerStyle={{width}}
                        radius={screenHeight / 15}
                        borderWidth={textFont}
                        color={theme().createBorder}
                        shadowColor={theme().background}
                        bgColor={theme().background}
                    >
                        <Text style={noobProfile().progressBarText}>
                            {karma}
                        </Text>
                    </ProgressCircle>
                </View>
            </View>

            <View
                style={{
                    margin: screenHeight / 30,
                    display: 'flex',
                    marginTop:heightPercentageToDP('10%')
                    //alignSelf: 'center',
                    //justifyContent: 'center',
                    //alignContent: 'center',
                }}
            >
                <Title
                    style={{
                        fontSize: titleFont,
                        color: theme().text,
                        marginBottom: screenHeight / 70,
                    }}
                >
                    About:
                </Title>
                <Text
                    style={{
                        fontSize: textFont,
                        color: theme().text,
                    }}
                >
                    shut up you rascal
                </Text>
            </View>


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
    const name = route.params.userId + "'s Profile";
    return (
        <ViewUserProfileStack.Navigator
            headerMode="screen"
            screenOptions={{
                headerShown:true,
                headerStyle: {
                    
                    backgroundColor: theme().headerColor,
                },
                headerTitleAlign: 'center',
            }}
        >
            <ViewUserProfileStack.Screen
                name="User Profile"
                options={() => ({
                    headerTintColor: theme().header,
                    headerLeft: () =>
                        backButton(navigation, theme().headerColor),
                    headerRight: () =>
                        forumButton(navigation, theme().headerColor),
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
            color={theme().text}
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
            color={theme().text}
            onPress={() => navigation.navigate('Forum')}
        />
    );
}
