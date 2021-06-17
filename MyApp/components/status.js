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
import DisplayStatus from './DisplayStatus';

const Status = ({isLoading, setIsLoading, userId, ...navigation}) => {
    const [dataHook,setDataHook] = useState([]);
    const [data, setstatusData] = useState([{
        department: "CSE",
        firstName: "Anirudh",
        lastName: "YS",
        message: "Add Filters to Status search",
        status: false,
        userId: userId,
      }]);
    const setStatusDataHook = (res) => {
        let array = []
        for(let i = 0;i<res.length;i++){
            //console.log(res[i]);
            array.push(<DisplayStatus val= {res[i]} key ={i}/> )
        }
        setDataHook(array);
        //console.log(dataHook);
    };

    const setStatusData = (arr)=>{
        setstatusData(arr)
    }

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
                    //console.log(res);
                    setStatusData(res);
                    setStatusDataHook(res);
                    setIsLoading(false);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = (query) => setSearchQuery(query);

    const viewStatus = (val,key)=>{
        
    }

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
                     dataHook
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
