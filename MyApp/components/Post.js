import React from 'react';

import {View, Image} from 'react-native';
import {Text, Avatar, Title, Caption} from 'react-native-paper';
import {styles, theme, drawerStyles} from '../constants/Styles';
import {margin10, postImageHeight} from '../constants/Sizes';

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
}) => {
    return (
        <View style={styles().post}>
            <View style={drawerStyles().postPic}>
                {typeof profileImg !== 'undefined' && profileImg !== '' ? (
                    <Avatar.Image source={{uri: profileImg}} />
                ) : (
                    <Avatar.Image source={require('../assets/bulusu.jpeg')} />
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
                            height: 'auto',
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
