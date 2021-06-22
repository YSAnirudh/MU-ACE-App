import {StatusBar} from 'expo-status-bar';
import React, {useEffect} from 'react';
import {Text, View, ScrollView, FlatList, Button} from 'react-native';
import ProfilePicture from 'react-native-profile-picture';
import {Searchbar, IconButton, TouchableRipple} from 'react-native-paper';
import {availabilityStyles, styles, theme} from '../constants/Styles';
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
import DisplayStatus from './DisplayStatus';
import AlertFlair from './AlertFlair';
import AlertFilters from './AlertFilters';
import AlertStyled from './Alert';
import {RefreshControl} from 'react-native';

const Status = ({isLoading, setIsLoading, userId, ...navigation}) => {
    const [dataHook, setDataHook] = useState([]);
    const [filters, setFilters] = useState([]);
    const [flairAlertVis, setFlairVis] = useState(false);
    const onFiltersChange = (res) => {
        setFilters(res);
    };

    const setStatusDataHook = (res) => {
        setDataHook(res);
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
                    setAlert(!alertVisible, 'Cannot Get Posts');
                } else {
                    //console.log(res);
                    setStatusDataHook(res);
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

    const viewStatus = () => {
        let array = [];
        let filter = dataHook.filter((val) => {
            if (searchQuery === '') {
                return val;
            } else if (
                val.firstName.toLowerCase().substr(0, searchQuery.length) ===
                    searchQuery.toLowerCase() ||
                val.department.toLowerCase().substr(0, searchQuery.length) ===
                    searchQuery.toLowerCase()
            ) {
                return val;
            }
        });
        let filtery = filter.filter((val) => {
            if (filters.length === 0) {
                return val;
            } else {
                for (let i = 0; i < filters.length; i++) {
                    if (filters[i] === val.department) {
                        return val;
                    }
                }
            }
        });
        let filtered = filtery.filter((val) => {
            // console.log(val);
            if (val.userType === 'Professor') {
                return val;
            }
        });
        for (let i = 0; i < filtered.length; i++) {
            // console.log(filtered[i].userId);
            if (filtered[i].userId === userId) {
                continue;
            }
            array.push(
                <DisplayStatus
                    val={filtered[i]}
                    key={i}
                    navigation={navigation}
                    setIsLoading={setIsLoading}
                    isLoading={isLoading}
                    userId={filtered[i].userId}
                />
            );
        }
        return array;
    };

    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = (query) => setSearchQuery(query);

    const onRefresh = React.useCallback(() => {
        handleGetStatus();
    }, []);

    return (
        <View style={availabilityStyles().container}>
            {!isLoading ? (
                <ScrollView
                    style={{paddingBottom: 0}}
                    refreshControl={
                        <RefreshControl
                            refreshing={isLoading}
                            onRefresh={onRefresh}
                        />
                    }
                >
                    <View
                        style={{
                            flexDirection: 'row',
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
                                    onPress={() => {
                                        setFlairVis(!flairAlertVis);
                                    }}
                                />
                            </TouchableRipple>
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
                    {flairAlertVis ? (
                        //<View style={createPostStyles().flairC}>
                        <AlertFilters
                            alertVisible={true}
                            setAlertVisible={setFlairVis}
                            onSelectedItemsChange={onFiltersChange}
                            selectedItems={filters}
                        ></AlertFilters>
                    ) : (
                        //</View>
                        <></>
                    )}
                    {viewStatus()}
                </ScrollView>
            ) : (
                <LoadingScreen />
            )}
        </View>
    );
};

export default Status;
