import React from 'react';
import {Text, View} from 'react-native';
import ProfilePicture from 'react-native-profile-picture';
import {TouchableRipple} from 'react-native-paper';
import {
    availabilityStyles,
    defaultProfilePicture,
    theme,
} from '../constants/Styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Avatar} from 'react-native-paper';
import {
    textFont,
    font12,
    margin20,
    statusProfPic,
    iconSize,
} from '../constants/Sizes';

const DisplayStatus = ({val, navigation, setIsLoading, isLoading, userId}) => {
    // console.log(val.userId);
    return (
        <View
            style={availabilityStyles().statusEntry}
            //key={keyVal}
        >
            <TouchableRipple
                onPress={() => {
                    let x = val;
                    navigation.navigate('ViewUserProfile', {
                        screen: 'User Profile',
                        params: {
                            userId: userId,
                            profileImgURI: val.profileImgURI,
                        },
                    });
                }}
            >
                <View style={availabilityStyles().statusEntry}>
                    <View
                        style={{
                            marginHorizontal: wp('3%'),
                            marginRight: wp('4%'),
                        }}
                    >
                        {typeof val.profileImgURI !== 'undefined' &&
                        val.profileImgURI !== '' ? (
                            <Avatar.Image
                                source={{uri: val.profileImgURI}}
                                size={statusProfPic}
                            />
                        ) : (
                            <Avatar.Image
                                source={{uri: defaultProfilePicture}}
                                size={statusProfPic}
                            />
                        )}
                    </View>
                    <View style={availabilityStyles().personName}>
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
                    <View style={availabilityStyles().personDepartment}>
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
                        <Icon
                            name="checkmark-circle"
                            size={iconSize + 5}
                            color={val.status ? 'green' : 'red'}
                            style={{
                                marginLeft: 1.5,
                            }}
                        />
                        {/* </View> */}
                    </View>
                </View>
            </TouchableRipple>
        </View>
    );
};

export default DisplayStatus;
