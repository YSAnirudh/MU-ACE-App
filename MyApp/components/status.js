import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {Text, View, ScrollView, FlatList, Button} from 'react-native';
import ProfilePicture from 'react-native-profile-picture';
import {Searchbar, IconButton, TouchableRipple} from 'react-native-paper';
import {availabilityStyles, theme} from '../constants/Styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
    margin10,
    textFont,
    font12,
    margin20,
    statusProfPic,
    iconSize,
} from '../constants/Sizes';

const Status = ({...navigation}) => {
    const data = [
        {
            name: 'Raghuveer',
            department: 'C.S.E',
            usertype: 'Student',
            email: 'raghbeer@gmail.com',
            description: 'I drink Beer',
            posts: 10,
            answers: 10,
            karma: 10000,
            status: true,
            key: Math.random().toString(),
        },
        {
            name: 'rohon jioji',
            department: 'M.E.C.H',
            usertype: 'Professor',
            email: 'jiojio@gmail.com',
            description: 'I is Jio',
            posts: 5,
            answers: 5,
            karma: 500,
            status: false,
            key: Math.random().toString(),
        },
        {
            name: 'Koushik noobde',
            department: 'M.E.C',
            usertype: 'Student',
            email: 'noobde@gmail.com',
            description: 'I am Noob!',
            posts: 2,
            answers: 1,
            karma: -100,
            status: false,
            key: Math.random().toString(),
        },
        {
            name: 'Raghuveer',
            department: 'C.S.E',
            usertype: 'Student',
            email: 'raghbeer@gmail.com',
            description: 'I drink Beer',
            posts: 10,
            answers: 10,
            karma: 10000,
            status: true,
            key: Math.random().toString(),
        },
        {
            name: 'Raghuveer',
            department: 'C.S.E',
            usertype: 'Student',
            email: 'raghbeer@gmail.com',
            description: 'I drink Beer',
            posts: 10,
            answers: 10,
            karma: 10000,
            status: true,
            key: Math.random().toString(),
        },
        {
            name: 'Raghuveer',
            department: 'C.S.E',
            usertype: 'Student',
            email: 'raghbeer@gmail.com',
            description: 'I drink Beer',
            posts: 10,
            answers: 10,
            karma: 10000,
            status: true,
            key: Math.random().toString(),
        },
        {
            name: 'Raghuveer',
            department: 'C.S.E',
            usertype: 'Student',
            email: 'raghbeer@gmail.com',
            description: 'I drink Beer',
            posts: 10,
            answers: 10,
            karma: 10000,
            status: true,
            key: Math.random().toString(),
        },
        {
            name: 'Raghuveer',
            department: 'C.S.E',
            usertype: 'Student',
            email: 'raghbeer@gmail.com',
            description: 'I drink Beer',
            posts: 10,
            answers: 10,
            karma: 10000,
            status: true,
            key: Math.random().toString(),
        },
        {
            name: 'Raghuveer',
            department: 'C.S.E',
            usertype: 'Student',
            email: 'raghbeer@gmail.com',
            description: 'I drink Beer',
            posts: 10,
            answers: 10,
            karma: 10000,
            status: true,
            key: Math.random().toString(),
        },
        {
            name: 'Raghuveer',
            department: 'C.S.E',
            usertype: 'Student',
            email: 'raghbeer@gmail.com',
            description: 'I drink Beer',
            posts: 10,
            answers: 10,
            karma: 10000,
            status: true,
            key: Math.random().toString(),
        },
    ];
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = (query) => setSearchQuery(query);

    return (
        <View style={availabilityStyles().container}>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: margin10,
                }}
            >
                <View style={{width: wp('80%')}}>
                    <Searchbar
                        placeholder="Search"
                        iconColor={theme().text}
                        onChangeText={onChangeSearch}
                        placeholderTextColor={theme().text}
                        value={searchQuery}
                        style={availabilityStyles().searchBar}
                    />
                </View>
                <View>
                    <TouchableRipple>
                        <IconButton
                            icon="filter"
                            size={iconSize + 4}
                            borderless={true}
                            color={theme().text}
                            onPress={() => {}}
                        />
                    </TouchableRipple>
                </View>
            </View>
            <ScrollView style={{paddingBottom: 0}}>
                {data
                    .filter((val) => {
                        if (searchQuery == '') {
                            return val;
                        } else if (
                            val.name
                                .toLowerCase()
                                .includes(searchQuery.toLowerCase())
                        ) {
                            return val;
                        }
                    })
                    .map((val, key) => {
                        return (
                            <View
                                style={availabilityStyles().statusEntry}
                                key={key}
                            >
                                <TouchableRipple
                                    onPress={() => {
                                        navigation.navigate(
                                            // Need more details from here when we create database for user
                                            'ViewUserProfile',
                                            {
                                                username: val.name,
                                                department: val.department,
                                                usertype: val.usertype,
                                                email: val.email,
                                                description: val.description,
                                                posts: val.posts,
                                                answers: val.answers,
                                                karma: val.karma,
                                            }
                                        );
                                    }}
                                >
                                    <View
                                        style={availabilityStyles().statusEntry}
                                    >
                                        <View
                                            style={{
                                                marginHorizontal: wp('3%'),
                                                marginRight: wp('4%'),
                                            }}
                                        >
                                            <ProfilePicture
                                                isPicture={true}
                                                requirePicture={require('../assets/bulusu.jpeg')}
                                                shape="circle"
                                                width={statusProfPic}
                                                height={statusProfPic}
                                            />
                                        </View>
                                        <View
                                            style={
                                                availabilityStyles().personName
                                            }
                                        >
                                            <Text
                                                style={{
                                                    fontSize: textFont,
                                                    fontWeight: '400',
                                                    fontFamily: 'Roboto',
                                                    marginRight: margin20,
                                                    paddingLeft: wp('2%'),
                                                    color: theme().text,
                                                }}
                                                textBreakStrategy={'simple'}
                                            >
                                                {val.name}
                                            </Text>
                                        </View>
                                        <View
                                            style={
                                                availabilityStyles()
                                                    .personDepartment
                                            }
                                        >
                                            <Text
                                                style={{
                                                    fontSize: font12,
                                                    fontWeight: '400',
                                                    fontFamily: 'Roboto',
                                                    color: theme().text,
                                                    textAlign: 'center',
                                                }}
                                                textBreakStrategy={'simple'}
                                            >
                                                {val.department}
                                            </Text>
                                        </View>
                                        <View>
                                            {val.status && (
                                                <View
                                                    style={
                                                        availabilityStyles(
                                                            val.status
                                                        ).statusIcon
                                                    }
                                                >
                                                    <Icon
                                                        name="checkmark-circle"
                                                        size={iconSize}
                                                        color="green"
                                                        style={{
                                                            marginLeft: 1.5,
                                                        }}
                                                    />
                                                </View>
                                            )}
                                            {!val.status && (
                                                <View
                                                    style={
                                                        availabilityStyles(
                                                            val.status
                                                        ).statusIcon
                                                    }
                                                >
                                                    <Icon
                                                        name="checkmark-circle"
                                                        size={iconSize}
                                                        color="red"
                                                        style={{
                                                            marginLeft: 1.5,
                                                        }}
                                                    />
                                                </View>
                                            )}
                                        </View>
                                    </View>
                                    {/* <Svg height="50" width="35">
                        {val.status &&  
                        <Circle cx="25" cy="25" r="10" fill="green" />
                        }
                        {!val.status &&
                        <Circle cx="25" cy="25" r="10" fill="red" />
                        }
                      </Svg> */}
                                </TouchableRipple>
                            </View>
                        );
                    })}
            </ScrollView>
        </View>
    );
};

export default Status;
