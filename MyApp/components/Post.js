import React from 'react';

import {View, Image} from 'react-native';
import {Text, Avatar, Title, Caption} from 'react-native-paper';
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
}) => {
    return (
        <View style={styles().post}>
            <View style={drawerStyles().postPic}>
                {typeof profileImg !== 'undefined' && profileImg !== '' ? (
                    <Avatar.Image source={{uri: profileImg}} />
                ) : (
                    <Avatar.Image source={{uri: defaultProfilePicture}} />
                )}

                <View>
                    <Title style={drawerStyles().postTitle}>{title}</Title>
                    <Caption style={drawerStyles().postCaption}>
                        {'By ' + userName}
                    </Caption>
                    <Caption style={drawerStyles().postCaption}>
                        {userEmail}
                    </Caption>
                </View>
                <View>
                    {localUserId === userId ? (
                        <Icons
                            name="person"
                            color={theme().footerIcons}
                            size={iconSize + 7}
                            style={{
                                alignSelf: 'flex-end',
                                marginLeft: margin10 * 5,
                                marginTop: margin10,
                            }}
                        />
                    ) : (
                        <></>
                    )}
                </View>
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
    );
};

export default Post;
