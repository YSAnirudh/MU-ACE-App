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
import LoadingScreen from '../screens/LoadingScreen';

const Status = ({isLoading, setIsLoading, userId, ...navigation}) => {
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
        setIsLoading(true);
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
                    setIsLoading(false);
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
                        col
                        value={searchQuery}
                        style={availabilityStyles().searchBar}
                        theme={{colors: {text: theme().text}}}
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
                {!isLoading ? (
                    data
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
                            let key1 = Math.random().toString();
                            return userId != val.userId ? (
                                <View
                                    style={availabilityStyles().statusEntry}
                                    key={key1}
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
                                            style={
                                                availabilityStyles().statusEntry
                                            }
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
                                                    availabilityStyles()
                                                        .personName
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
                                                {/* <View
                                                    style={
                                                        availabilityStyles(
                                                            val.status
                                                        ).statusIcon
                                                    }
                                                > */}
                                                <Icon
                                                    name="checkmark-circle"
                                                    size={iconSize + 5}
                                                    color={
                                                        val.status
                                                            ? 'green'
                                                            : 'red'
                                                    }
                                                    style={{
                                                        marginLeft: 1.5,
                                                    }}
                                                />
                                                {/* </View> */}
                                            </View>
                                        </View>
                                    </TouchableRipple>
                                </View>
                            ) : (
                                <></>
                            );
                        })
                ) : (
                    <>
                        <LoadingScreen />
                    </>
                )}
            </ScrollView>
        </View>
    );
};

export default Status;
