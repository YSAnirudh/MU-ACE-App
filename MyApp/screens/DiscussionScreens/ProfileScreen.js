import React, {useState, useEffect} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    RefreshControl,
} from 'react-native';
import {Title, Card} from 'react-native-paper';
import {MaterialIcons} from '@expo/vector-icons';
import {Button, Avatar} from 'react-native-paper';
import {
    styles,
    theme,
    profileStyles,
    noobProfile,
    defaultProfilePicture,
} from '../../constants/Styles';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import * as ImagePicker from 'expo-image-picker';
import ProgressCircle from 'react-native-progress-circle';
import {screenHeight, screenWidth} from '../../utils/ScreenParams';
import {
    profIconSize,
    profProfPic,
    titleFont,
    textFont,
} from '../../constants/Sizes';
import {BackendURL} from '../../constants/Backend';
import LoadingScreen from '../LoadingScreen';
import AlertStyled from '../../components/Alert';

export default function ProfileScreen({
    navigation,
    userId,
    setUserId,
    isLoading,
    setIsLoading,
    setIsLogin,
}) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [karma, setKarma] = useState(0.0);
    const [description, setDescription] = useState('');
    const [posts, setPosts] = useState(0);
    const [answers, setAnswers] = useState(0);
    const [image, setImage] = useState('');
    const [URL, setURL] = useState('');
    const [dept, setDept] = useState('');
    const [userType, setUserType] = useState('');

    const handleGetData = () => {
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
                    setFirstName(res.firstName);
                    setLastName(res.lastName);
                    setEmail(res.email);
                    setAnswers(parseInt(res.noOfAnswers));
                    setPosts(parseInt(res.noOfPosts));
                    setKarma(parseFloat(res.karma));
                    setDescription(res.description);
                    setURL(res.profileImgURI);
                    setUserType(res.userType);
                    setDept(res.department);
                    setIsLoading(false);
                }
            })
            .catch((err) => {
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
            handleGetData();
        });

        return unsubscribe;
    }, [navigation]);

    const onRefresh = React.useCallback(() => {
        handleGetData();
    }, []);

    return (
        <View style={profileStyles().root}>
            {!isLoading ? (
                <>
                    <ScrollView
                        style={{paddingBottom: 0}}
                        refreshControl={
                            <RefreshControl
                                refreshing={isLoading}
                                onRefresh={onRefresh}
                            />
                        }
                    >
                        <View style={{alignItems: 'center'}}>
                            {URL !== '' && typeof URL !== 'undefined' ? (
                                <Avatar.Image
                                    source={{uri: URL}}
                                    size={profProfPic}
                                />
                            ) : (
                                <Avatar.Image
                                    source={{uri: defaultProfilePicture}}
                                    size={profProfPic}
                                />
                            )}
                        </View>
                        <View
                            style={{
                                alignItems: 'center',
                                margin: screenHeight / 80,
                                alignItems: 'center',
                            }}
                        >
                            <View style={profileStyles().emailBox}>
                                <MaterialIcons
                                    name="email"
                                    size={profIconSize}
                                    color={theme().iconColor}
                                />
                                <Text style={profileStyles().myText}>
                                    {email}
                                </Text>
                            </View>
                        </View>
                        <View style={noobProfile().alignProf}>
                            <View
                                style={{
                                    alignItems: 'center',
                                    // margin: screenHeight / 80,
                                    alignItems: 'flex-start',
                                }}
                            >
                                <Title
                                    style={{
                                        fontSize: titleFont,
                                        color: theme().text,
                                        marginBottom: titleFont,
                                    }}
                                >
                                    {firstName +
                                        '\n(' +
                                        dept +
                                        ' - ' +
                                        userType +
                                        ')'}
                                </Title>

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
                                alignSelf: 'center',
                                justifyContent: 'center',
                                alignContent: 'center',
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

                        <Button
                            icon="account-edit"
                            mode="outlined"
                            //theme={pageTheme}
                            color={theme().iconColor}
                            onPress={() =>
                                navigation.navigate('EditProfile', {
                                    screen: 'Edit Profile',
                                    params: {
                                        Firstname: firstName,
                                        Lastname: lastName,
                                        Description: description,
                                        imageURL: URL,
                                    },
                                })
                            }
                            style={profileStyles().buttonStyle}
                        >
                            <Text style={profileStyles().buttonText}>
                                Edit Profile
                            </Text>
                        </Button>
                        <Button
                            icon="account-details"
                            mode="outlined"
                            //theme={pageTheme}
                            color={theme().iconColor}
                            onPress={() => navigation.navigate('UserPost')}
                            style={profileStyles().buttonStyle}
                        >
                            <Text style={profileStyles().buttonText}>
                                Your Posts
                            </Text>
                        </Button>
                        <Button
                            icon="logout"
                            mode="outlined"
                            //theme={pageTheme}
                            color={theme().iconColor}
                            onPress={() => {
                                setUserId('');
                                setIsLogin(true);
                            }}
                            style={profileStyles().buttonStyle}
                        >
                            <Text style={profileStyles().buttonText}>
                                Log out
                            </Text>
                        </Button>
                        {alertVisible ? (
                            <AlertStyled
                                alertVisible={true}
                                alertMessage={alertMessage}
                                setAlertVisible={setAlertVisible}
                            />
                        ) : (
                            <></>
                        )}
                    </ScrollView>
                </>
            ) : (
                <LoadingScreen />
            )}
        </View>
    );
}
