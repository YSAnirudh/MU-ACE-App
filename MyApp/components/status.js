import {StatusBar} from 'expo-status-bar';
import React, {useEffect} from 'react';
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
import {useState} from 'react';
import {BackendURL} from '../constants/Backend';

const Status = ({...navigation}) => {
    const sData = [
        {
            userId: '1',
            firstName: 'Raghuveer',
            lastName: 'DS',
            department: 'C.S.E',
            usertype: 'Student',
            email: 'raghbeer@gmail.com',
            description: 'I drink Beer',
            noOfPosts: 10,
            noOfAnswers: 10,
            karma: 10000,
            status: true,
        },
        {
            userId: '2',
            firstName: 'Raghuveer',
            lastName: 'DS',
            department: 'C.S.E',
            usertype: 'Student',
            email: 'raghbeer@gmail.com',
            description: 'I drink Beer',
            noOfPosts: 10,
            noOfAnswers: 10,
            karma: 10000,
            status: true,
        },
        {
            userId: '3',
            firstName: 'Raghuveer',
            lastName: 'DS',
            department: 'C.S.E',
            usertype: 'Student',
            email: 'raghbeer@gmail.com',
            description: 'I drink Beer',
            noOfPosts: 10,
            noOfAnswers: 10,
            karma: 10000,
            status: true,
        },
    ];

    const [data, setstatusData] = useState([]);
    const setStatusData = (arr) => {
        setstatusData(arr);
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            handleGetStatus();
        });

        return unsubscribe;
    }, [navigation]);

    const handleGetStatus = () => {
        fetch(BackendURL + 'rest/status/get', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        })
            .then((res) => {
                if (res.status === 400) {
                    return 'Error';
                } else {
                    return res.json();
                }
            })
            .then((res) => {
                // console.log(res);
                // console.log(res[0].userId);
                if (res === 'Error') {
                    alert('Cannot Get Posts');
                } else {
                    setStatusData(res);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

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
                            val.firstName
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
                                                userId: val.userId,
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
                                                {val.firstName}
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
