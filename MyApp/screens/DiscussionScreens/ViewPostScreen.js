import React, {Component, useState, useEffect} from 'react';
import {IconButton, Searchbar, TouchableRipple} from 'react-native-paper';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Image,
    TouchableOpacity,
} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import Post from '../../components/Post';
import {styles, theme, availabilityStyles} from '../../constants/Styles';
import {BackendURL} from '../../constants/Backend';
import PostClickable from '../../components/PostClickable';
import LoadingScreen from '../LoadingScreen';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {iconSize, margin10} from '../../constants/Sizes';
import AlertFilters from '../../components/AlertFilters';
import AlertStyled from '../../components/Alert';

export default function ViewPostScreen({
    navigation,
    userId,
    setIsLoading,
    isLoading,
}) {
    const [posts, setPosts] = useState([]);
    const [postResponses, setPostResponses] = useState([]);

    const srp = (resp) => {
        setPostResponses(resp);
    };

    const handleGetPosts = async () => {
        setIsLoading(true);
        fetch(BackendURL + 'rest/post/get/all', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                getUserId: userId,
            }),
        })
            .then((res) => {
                if (res.status === 400) {
                    return 'Error';
                } else if (res === null) {
                    return 'Error';
                } else {
                    return res.json();
                }
            })
            .then((res) => {
                if (res === 'Error') {
                    setAlert(true, 'Cannot Get Posts');
                } else {
                    // console.log(res.length);
                    var p = [];

                    setPostResponses(res);
                    setIsLoading(false);
                    return p;
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
            handleGetPosts();
            // viewPosts();
        });

        return unsubscribe;
    }, [navigation]);

    useEffect(() => {
        handleGetPosts();
    }, []);

    const [filters, setFilters] = useState([]);
    const [flairAlertVis, setFlairVis] = useState(false);
    const onFiltersChange = (res) => {
        setFilters(res);
    };

    const viewPosts = () => {
        let filter = postResponses.filter((val) => {
            if (searchQuery === '') {
                return val;
            } else if (
                val.theTitle.toLowerCase().substr(0, searchQuery.length) ===
                searchQuery.toLowerCase()
            ) {
                return val;
            }
        });
        let p = [];
        let filtered = filter.filter((val) => {
            if (filters.length === 0) {
                return val;
            } else {
                if (val.tags.length !== 0) {
                    for (let i = 0; i < filters.length; i++) {
                        for (let j = 0; j < val.tags.length; j++) {
                            if (filters[i] === val.tags[j]) {
                                return val;
                            }
                        }
                    }
                }
            }
        });
        for (var i = 0; i < filtered.length; i++) {
            // console.log(res[i]);
            p.push(
                <PostClickable
                    key={Math.random().toString()}
                    navigation={navigation}
                    postRes={filtered[i]}
                    postOpen={false}
                />
            );
        }
        if (p.length == 0) {
            return <Text style={styles().buttonText}>No Posts Found</Text>;
        } else {
            return p.reverse();
        }
    };

    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = (query) => setSearchQuery(query);

    return (
        <View style={styles().container}>
            <Image source={theme().file} style={styles().backgroundImage} />
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
                            onPress={() => {
                                setFlairVis(!flairAlertVis);
                            }}
                        />
                    </TouchableRipple>
                </View>
            </View>
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
            {alertVisible ? (
                <AlertStyled
                    alertVisible={true}
                    alertMessage={alertMessage}
                    setAlertVisible={setAlertVisible}
                />
            ) : (
                <></>
            )}
            <DrawerContentScrollView style={styles().postWrapper}>
                {!isLoading ? viewPosts() : <LoadingScreen />}
            </DrawerContentScrollView>
        </View>
    );
}
