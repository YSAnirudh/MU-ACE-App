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
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../../constants/Colors';
import {ThemeContext, ThemeProvider} from '../../components/Theme';
import {theme, drawerStyles as styles} from '../../constants/Styles';
import ProgressCircle from 'react-native-progress-circle';
import {margin10, margin20, border6, margin35} from '../../constants/Sizes';
import {BackendURL} from '../../constants/Backend';

export function DrawerMan({setIsLogin, userId, setUserId, ...props}) {
    const {darkMode, toggleTheme} = React.useContext(ThemeContext);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [karma, setKarma] = useState(0.0);
    const [posts, setPosts] = useState(0);
    const [answers, setAnswers] = useState(0);

    const handleGetData = () => {
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
                    alert('Cannot Get Data');
                } else {
                    // console.log(res);
                    setFirstName(res.firstName);
                    setLastName(res.lastName);
                    setEmail(res.email);
                    setAnswers(parseInt(res.noOfAnswers));
                    setPosts(parseInt(res.noOfPosts));
                    setKarma(parseFloat(res.karma));
                }
            })
            .catch((err) => {
                console.log('errr');
                console.log(err);
            });
    };

    useEffect(() => {
        handleGetData();
    }, [firstName, email, karma, answers, posts]);

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
                        <TouchableRipple
                            onPress={() => props.navigation.navigate('Profile')}
                        >
                            <View>
                                <View style={styles().profilePic}>
                                    <Avatar.Image
                                        source={require('../../assets/logo2.png')}
                                    />
                                    <View>
                                        <Title style={styles().profileTitle}>
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
                                            percent={karma}
                                            // containerStyle={{width}}
                                            radius={margin20}
                                            borderWidth={border6}
                                            color={theme().createBorder}
                                            shadowColor={theme().background}
                                            bgColor={theme().background}
                                        >
                                            <Text
                                                style={styles().progressBarText}
                                            >
                                                {karma}
                                            </Text>
                                        </ProgressCircle>
                                    </View>
                                </View>
                            </View>
                        </TouchableRipple>
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
                                props.navigation.navigate('Forum');
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
                                props.navigation.navigate('Create Post');
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
                                props.navigation.navigate('Availability');
                            }}
                        />
                        <DrawerItem
                            icon={({size, color}) =>
                                gimmeIcon('log-in', size, theme().iconColor)
                            }
                            label="Login"
                            labelStyle={{
                                color: theme().text,
                            }}
                            onPress={() => {
                                props.navigation.navigate('Login');
                            }}
                        />
                        <DrawerItem
                            icon={({size, color}) =>
                                gimmeIcon('alert', size, theme().iconColor)
                            }
                            label="Register"
                            labelStyle={{
                                color: theme().text,
                            }}
                            onPress={() => {
                                props.navigation.navigate('Register');
                            }}
                        />
                    </Drawer.Section>
                    <Drawer.Section>
                        <TouchableRipple onPress={() => toggleTheme()}>
                            <View style={styles().preferences}>
                                <Text style={styles().darkText}>
                                    Dark Mode
                                    {}
                                </Text>
                                <View pointerEvents="none">
                                    <Switch
                                        value={darkMode}
                                        style={
                                            (styles().darkText,
                                            {marginRight: margin35})
                                        }
                                    />
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
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
                        setIsLogin(true);
                        setUserId('');
                    }}
                />
            </Drawer.Section>
        </View>
    );
}

const gimmeIcon = (text, size, color) => {
    return <Icon name={text} size={size} color={color} />;
};
