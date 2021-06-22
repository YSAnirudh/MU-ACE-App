import React from 'react';

import {View, Image} from 'react-native';
import {
    Text,
    Avatar,
    Title,
    Caption,
    TouchableRipple,
} from 'react-native-paper';
import {
    styles,
    theme,
    drawerStyles,
    defaultProfilePicture,
} from '../constants/Styles';
import {iconSize, margin10, postImageHeight} from '../constants/Sizes';
import Icons from 'react-native-vector-icons/Ionicons';

const Post = ({
    userName,
    userEmail,
    description,
    title,
    postOpen,
    postImg,
    profileImg,
    postImgDim,
    userType,
    localUserId,
    userId,
    navigation,
}) => {
    return (
        <>
            <View style={styles().post}>
                <View style={drawerStyles().postPic}>
                    {postOpen ? (
                        <>
                            <TouchableRipple
                                onPress={() => {
                                    navigation.navigate('ViewUserProfile', {
                                        screen: 'User Profile',
                                        params: {
                                            userId: userId,
                                            profileImgURI: profileImg,
                                        },
                                    });
                                }}
                            >
                                <View
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                    }}
                                >
                                    {typeof profileImg !== 'undefined' &&
                                    profileImg !== '' ? (
                                        <Avatar.Image
                                            source={{uri: profileImg}}
                                        />
                                    ) : (
                                        <Avatar.Image
                                            source={{
                                                uri: defaultProfilePicture,
                                            }}
                                        />
                                    )}

                                    <View>
                                        <Title style={drawerStyles().postTitle}>
                                            {title}
                                        </Title>
                                        <Caption
                                            style={drawerStyles().postCaption}
                                        >
                                            {'By ' + userName}
                                            {localUserId === userId ? (
                                                <Icons
                                                    name="person"
                                                    color={theme().footerIcons}
                                                    size={iconSize - 4}
                                                    style={{
                                                        alignSelf: 'flex-start',
                                                        marginLeft: margin10,
                                                        marginTop: margin10,
                                                    }}
                                                />
                                            ) : (
                                                <></>
                                            )}
                                        </Caption>
                                        <Caption
                                            style={[
                                                drawerStyles().postCaption,
                                                {flex: 1, flexWrap: 'wrap'},
                                            ]}
                                        >
                                            {userEmail}
                                        </Caption>
                                    </View>
                                </View>
                            </TouchableRipple>
                        </>
                    ) : (
                        <>
                            {typeof profileImg !== 'undefined' &&
                            profileImg !== '' ? (
                                <Avatar.Image source={{uri: profileImg}} />
                            ) : (
                                <Avatar.Image
                                    source={{uri: defaultProfilePicture}}
                                />
                            )}

                            <View>
                                <Title style={drawerStyles().postTitle}>
                                    {title}
                                </Title>
                                <Caption style={drawerStyles().postCaption}>
                                    {'By ' + userName + '  '}
                                    {localUserId === userId ? (
                                        <Icons
                                            name="person"
                                            color={theme().footerIcons}
                                            size={iconSize - 4}
                                            style={{
                                                alignSelf: 'flex-start',
                                                marginLeft: margin10,
                                                marginTop: margin10,
                                            }}
                                        />
                                    ) : (
                                        <></>
                                    )}
                                </Caption>
                                <Caption style={drawerStyles().postCaption}>
                                    {userEmail}
                                </Caption>
                            </View>
                        </>
                    )}
                </View>
                <View>
                    <Caption style={drawerStyles().descTitle}>Brief - </Caption>
                    <Text style={drawerStyles().description}>
                        {postOpen
                            ? description
                            : description.length >= 20
                            ? description.substring(0, 20) + '...'
                            : description}
                    </Text>
                </View>
                <View style={{marginRight: margin10}}>
                    {typeof postImg !== 'undefined' && postImg !== '' ? (
                        <Image
                            source={{uri: postImg}}
                            style={{
                                height: postImageHeight * 2,
                                width: '100%',
                                margin: 5,
                            }}
                        />
                    ) : (
                        <></>
                    )}
                </View>
            </View>
        </>
    );
};

export default Post;
