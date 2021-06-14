import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {Title, Card} from 'react-native-paper';
import {MaterialIcons} from '@expo/vector-icons';
import {Button, Avatar} from 'react-native-paper';
import {
    styles,
    theme,
    profileStyles,
    noobProfile,
} from '../../constants/Styles';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import ProgressCircle from 'react-native-progress-circle';
import {screenHeight, screenWidth} from '../../utils/ScreenParams';
import {
    profIconSize,
    profProfPic,
    titleFont,
    textFont,
} from '../../constants/Sizes';

export default function ProfileScreen({navigation}) {
    const data = {
        Firstname: 'Noob',
        Lastname: 'Noob',
        Description: 'Noob',
    };
    const posts = 2;
    const comments = 5;
    const karma = 45.5;
    return (
        <View style={profileStyles().root}>
            <View style={{alignItems: 'center'}}>
                <Avatar.Image
                    source={require('../../assets/logo2.png')}
                    size={profProfPic}
                />
                {/* <Image 
                     
                    source={require("../../assets/logo2.png")}
                /> */}
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
                        koushiky@gmail.com
                    </Text>
                </View>
            </View>
            <View style={noobProfile().alignProf}>
                <View
                    style={{
                        alignItems: 'center',
                        margin: screenHeight / 80,
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
                        Koushik Y
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
                            {/* <Text style={noobProfile().progText}>
                        Answers:{comments}
                        </Text> */}
                            <Text
                                style={{
                                    fontSize: textFont,
                                    color: theme().text,
                                }}
                            >
                                Answers:{comments}
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
                    Noobda, Rey, endi ra idi, urke undakunda type cheyamantav,
                    noobde chal, waste fellow, thu
                </Text>
            </View>

            <Button
                icon="account-edit"
                mode="outlined"
                //theme={pageTheme}
                color={theme().iconColor}
                onPress={() =>
                    navigation.navigate('EditProfile', {
                        Firstname: data.Firstname,
                        Lastname: data.Lastname,
                        Description: data.Description,
                    })
                }
                style={profileStyles().buttonStyle}
            >
                <Text style={profileStyles().buttonText}>Edit Profile</Text>
            </Button>
            <Button
                icon="logout"
                mode="outlined"
                //theme={pageTheme}
                color={theme().iconColor}
                onPress={() => {}}
                style={profileStyles().buttonStyle}
            >
                <Text style={profileStyles().buttonText}>Log out</Text>
            </Button>
        </View>
    );
}
