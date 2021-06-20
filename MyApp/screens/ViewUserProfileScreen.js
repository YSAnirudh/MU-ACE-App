import React, {useState, useEffect} from 'react';

import {View, Text} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import {Title, Button, Avatar} from 'react-native-paper';
import {theme} from '../constants/Styles';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import {
    userProfileStyles2 as userProfileStyles,
    noobProfile2 as noobProfile,
} from '../constants/Styles';
import Colors from '../constants/Colors';
import {font12, margin10, margin20, profProfPic} from '../constants/Sizes';
import {screenHeight, screenWidth} from '../utils/ScreenParams';
import {profIconSize, titleFont, textFont} from '../constants/Sizes';
import ProgressCircle from 'react-native-progress-circle';
import {
    heightPercentageToDP,
    widthPercentageToDP,
} from 'react-native-responsive-screen';
import {BackendURL} from '../constants/Backend';
import LoadingScreen from './LoadingScreen';
import AlertStyled from '../components/Alert';

export default function ViewUserProfileScreen({
    navigation,
    route,
    setIsLoading,
    isLoading,
    setName,
    userId,
}) {
    // Should Get more details from here when we create database for user

    // const [userId, setUserId] = useState(params.userId);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userType, setUserType] = useState('');
    const [department, setDepartment] = useState('');
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState(false);
    const [description, setDescription] = useState('');
    const [karma, setKarma] = useState(0.0);
    const [posts, setPosts] = useState(0);
    const [answers, setAnswers] = useState(0);

    const handleGetUserData = () => {
        setIsLoading(true);
        fetch(BackendURL + 'rest/user/get', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                userId: route.params.userId,
            }),
        })
            .then((res) => {
                if (res.status === 400) {
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
                    setUserType(res.userType);
                    setDepartment(res.department);
                    setStatus(res.status);
                    setFirstName(res.firstName);
                    setLastName(res.lastName);
                    setEmail(res.email);
                    setAnswers(parseInt(res.noOfAnswers));
                    setPosts(parseInt(res.noOfPosts));
                    setKarma(parseFloat(res.karma));
                    setDescription(res.description);
                    setName(res.firstName);
                    setIsLoading(false);
                }
            })
            .catch((err) => {
                console.log('errr');
                console.log(err);
            });
    };

    const setAlert = (bool, message) => {
        setAlertVisible(bool);
        setAlertMessage(message);
    };

    const [alertVisible, setAlertVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            handleGetUserData();
        });
        return unsubscribe;
        // handleGetUserData();
    }, [navigation, route]);

    // const department = route.params.department
    return !isLoading ? (
        <View style={userProfileStyles().root}>
            <View style={userProfileStyles().userProfImg}>
                <Avatar.Image
                    source={require('../assets/logo2.png')}
                    size={profProfPic}
                />
                <View style={{marginTop: widthPercentageToDP('8%')}}>
                    <Text style={userProfileStyles().stats}>
                        <Text style={{fontWeight: 'bold', fontSize: margin20}}>
                            {userType}
                        </Text>
                    </Text>
                    <Text style={userProfileStyles().stats}>
                        <Text style={{fontWeight: 'bold'}}>Name:</Text>{' '}
                        {firstName + ' ' + lastName}
                    </Text>
                    <Text style={userProfileStyles().stats}>
                        <Text style={{fontWeight: 'bold'}}>Department:</Text>{' '}
                        {department}
                    </Text>
                    <View style={userProfileStyles().emailBox}>
                        <MaterialIcons
                            name="email"
                            style={{
                                marginLeft:
                                    userProfileStyles().userText.marginLeft,
                            }}
                            size={userProfileStyles().emailIcon.size}
                            color={userProfileStyles().emailIcon.color}
                        />
                        <Text style={userProfileStyles().myText}>{email}</Text>
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
                        {userType == 'Professor'
                            ? status
                                ? 'Insert Icon for status True'
                                : 'Insert Icon for status false'
                            : ''}
                    </Text>
                </View>

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
                            percent={karma.toString()}
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
                        marginTop: heightPercentageToDP('10%'),
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
                        {description}
                    </Text>
                </View>
            </View>
            {alertVisible ? (
                <AlertStyled
                    alertVisible={true}
                    alertMessage={alertMessage}
                    setAlertVisible={setAlertVisible}
                />
            ) : (
                <></>
            )}
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
    ) : (
        <LoadingScreen />
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
