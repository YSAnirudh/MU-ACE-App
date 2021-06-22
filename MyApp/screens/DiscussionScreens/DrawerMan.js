import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Alert, Image} from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Text,
    Drawer,
    TouchableRipple,
    Switch,
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem,
    useIsDrawerOpen,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../../constants/Colors';
import {ThemeContext, ThemeProvider} from '../../components/Theme';
import {
    theme,
    drawerStyles as styles,
    styles as myStyles,
    defaultProfilePicture,
} from '../../constants/Styles';
import ProgressCircle from 'react-native-progress-circle';
import {
    margin10,
    margin20,
    border6,
    margin35,
    iconSize,
} from '../../constants/Sizes';
import {BackendURL} from '../../constants/Backend';
import {screenHeight} from '../../utils/ScreenParams';
import AlertStyled from '../../components/Alert';
import DrawerStatus from '../../components/DrawerStatus';

export function DrawerMan({
    setIsLogin,
    userId,
    setUserId,
    navigation,
    isLoading,
    setIsLoading,
    ...props
}) {
    const {darkMode, toggleTheme} = React.useContext(ThemeContext);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [karma, setKarma] = useState(0.0);
    const [posts, setPosts] = useState(0);
    const [answers, setAnswers] = useState(0);
    const [uid, setUID] = useState(userId);
    const [status, setStatus] = useState(false);
    const [userType, setUserType] = useState('');
    const [image, setImage] = useState('');
    const isDrawerOpen = useIsDrawerOpen();

    const handleUID = (u) => {
        setStatus(u);
    };

    const handleUpdateTheme = () => {
        const userData = {
            userId: userId,
            theme: !darkMode,
        };
        setIsLoading(true);
        fetch(BackendURL + 'rest/theme/update', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(userData),
        })
            .then((res) => {
                if (res.status === 400) {
                    console.log(res);
                    return 'Error';
                } else {
                    return res.json();
                }
            })
            .then((res) => {
                if (res === 'Error') {
                    setAlert(true, 'Cannot Update Theme');
                } else {
                    // console.log(res);
                    setIsLoading(false);
                    toggleTheme();
                    setAlert(true, 'Updated Your Theme');
                    navigation.closeDrawer();
                }
            })
            .catch((err) => {
                console.log('errr');
                console.log(err);
            });
    };

    const handleUpdateStatus = () => {
        const userData = {
            userId: userId,
            status: !status,
        };
        setIsLoading(true);
        fetch(BackendURL + 'rest/status/update', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(userData),
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
                    setAlert(true, 'Cannot Update Theme');
                } else {
                    // console.log(res);
                    setIsLoading(false);
                    setStatus(!status);
                    setAlert(true, 'Updated Your Status');
                    navigation.closeDrawer();
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

    const handleGetData = () => {
        // handleUID(userId);
        setIsLoading(true);
        fetch(BackendURL + 'rest/user/get', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                userId: uid,
            }),
        })
            .then((res) => {
                if (res.status === 400) {
                    console.log(res.json());
                    return 'Error';
                } else {
                    return res.json();
                }
            })
            .then((res) => {
                if (res === 'Error') {
                    console.log(uid, userId);

                    setAlert(true, 'Cannot Get Data');
                } else {
                    // console.log(res);
                    setFirstName(res.firstName);
                    setLastName(res.lastName);
                    setEmail(res.email);
                    setAnswers(parseInt(res.noOfAnswers));
                    setPosts(parseInt(res.noOfPosts));
                    setKarma(res.karma);
                    handleUID(res.status);
                    setUserType(res.userType);
                    setImage(res.profileImgURI);
                    setIsLoading(false);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleKoushikGetData = () => {
        // handleUID(userId);
        fetch(BackendURL + 'rest/user/get', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                userId: uid,
            }),
        })
            .then((res) => {
                if (res.status === 400) {
                    console.log(res.json());
                    return 'Error';
                } else {
                    return res.json();
                }
            })
            .then((res) => {
                if (res === 'Error') {
                    console.log(uid, userId);

                    setAlert(true, 'Cannot Get Data');
                } else {
                    // console.log(res);
                    setFirstName(res.firstName);
                    setLastName(res.lastName);
                    setEmail(res.email);
                    setAnswers(parseInt(res.noOfAnswers));
                    setPosts(parseInt(res.noOfPosts));
                    setKarma(res.karma);
                    handleUID(res.status);
                    setUserType(res.userType);
                    setImage(res.profileImgURI);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        handleGetData();
    }, [posts, answers, karma]);

    useEffect(() => {
        if (isDrawerOpen) {
            handleKoushikGetData();
        }
    }, [isDrawerOpen]);

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: theme().background,
            }}
        >
            <DrawerContentScrollView {...props}>
                <View style={styles().drawerContent}>
                    <View style={styles().profile}>
                        {!isLoading ? (
                            <TouchableRipple
                                onPress={() => navigation.navigate('Profile')}
                            >
                                <View>
                                    <View style={styles().profilePic}>
                                        {image !== '' ? (
                                            <Avatar.Image
                                                source={{uri: image}}
                                            />
                                        ) : (
                                            <Avatar.Image
                                                source={{
                                                    uri: defaultProfilePicture,
                                                }}
                                            />
                                        )}
                                        <View>
                                            <Title
                                                style={styles().profileTitle}
                                            >
                                                {firstName}
                                            </Title>
                                            <Caption
                                                style={styles().profileCaption}
                                            >
                                                {email}
                                            </Caption>
                                        </View>
                                    </View>

                                    <View style={styles().progressView}>
                                        <Image
                                            source={theme().mecFile}
                                            style={styles().MECLogo}
                                        />
                                        <View style={{marginLeft: margin10}}>
                                            <Text style={styles().progText}>
                                                Posts:{posts}
                                            </Text>
                                            <Text style={styles().progText}>
                                                Answers:{answers}
                                            </Text>
                                        </View>
                                        <View style={styles().progressViewBar}>
                                            <ProgressCircle
                                                percent={Number(
                                                    Number(karma).toFixed(1)
                                                )}
                                                // containerStyle={{width}}
                                                radius={margin20}
                                                borderWidth={border6}
                                                color={theme().createBorder}
                                                shadowColor={theme().background}
                                                bgColor={theme().background}
                                            >
                                                <Text
                                                    style={
                                                        styles().progressBarText
                                                    }
                                                >
                                                    {karma}
                                                </Text>
                                            </ProgressCircle>
                                        </View>
                                    </View>
                                </View>
                            </TouchableRipple>
                        ) : (
                            <Text
                                style={[
                                    styles().profileTitle,
                                    {margin: screenHeight / 12.4},
                                ]}
                            >
                                {'Checking\nfor updates....'}
                            </Text>
                        )}
                    </View>

                    <Drawer.Section>
                        <DrawerItem
                            icon={({size, color}) =>
                                gimmeIcon(
                                    'chatbubble-ellipses',
                                    size,
                                    theme().iconColor
                                )
                            }
                            label="Forum"
                            labelStyle={{
                                color: theme().text,
                            }}
                            onPress={() => {
                                navigation.navigate('Forum');
                            }}
                        />
                        <DrawerItem
                            icon={({size, color}) =>
                                gimmeIcon('create', size, theme().iconColor)
                            }
                            label="Create Post"
                            labelStyle={{
                                color: theme().text,
                            }}
                            onPress={() => {
                                navigation.navigate('Create Post');
                            }}
                        />
                        <DrawerItem
                            icon={({size, color}) =>
                                gimmeIcon(
                                    'checkmark-circle',
                                    size,
                                    theme().iconColor
                                )
                            }
                            label="Check Availability"
                            labelStyle={{
                                color: theme().text,
                            }}
                            onPress={() => {
                                navigation.navigate('Availability');
                            }}
                        />
                    </Drawer.Section>
                    <Drawer.Section>
                        <View
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginRight: 10,
                            }}
                        >
                            {userType === 'Professor' ? (
                                !isLoading ? (
                                    <DrawerStatus
                                        status={status}
                                        handleUpdateStatus={handleUpdateStatus}
                                    />
                                ) : (
                                    <Text
                                        style={[
                                            styles().profileTitle,
                                            {color: 'gold'},
                                        ]}
                                    >
                                        {'Updating Status....'}
                                    </Text>

                                    // ) : (
                                    //     <></>
                                )
                            ) : (
                                <></>
                            )}

                            <TouchableRipple
                                onPress={() => handleUpdateTheme()}
                            >
                                <View
                                    style={[
                                        styles().preferences,
                                        {
                                            // position: 'absolute',
                                            flexGrow: 2,
                                            display: 'flex',
                                            alignSelf: 'center',
                                        },
                                    ]}
                                >
                                    <Text style={styles().darkText}>
                                        Dark Mode
                                    </Text>
                                    <View
                                        pointerEvents="none"
                                        style={{alignItems: 'flex-start'}}
                                    >
                                        <Switch value={darkMode} />
                                    </View>
                                </View>
                            </TouchableRipple>
                        </View>
                    </Drawer.Section>
                    {alertVisible ? (
                        <AlertStyled
                            alertVisible={true}
                            alertMessage={alertMessage}
                            setAlertVisible={setAlertVisible}
                        />
                    ) : (
                        <></>
                    )}
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles().bottomDrawer}>
                <DrawerItem
                    icon={({size, color}) =>
                        gimmeIcon('exit', size, theme().iconColor)
                    }
                    label="Log Out"
                    labelStyle={{
                        color: theme().text,
                    }}
                    onPress={() => {
                        setUserId('');
                        setIsLogin(true);
                    }}
                />
            </Drawer.Section>
        </View>
    );
}

const gimmeIcon = (text, size, color) => {
    return <Icon name={text} size={size} color={color} />;
};
