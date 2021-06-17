import React from 'react';

import {View, Image} from 'react-native';
import {Text, Avatar, Title, Caption} from 'react-native-paper';
import {styles, theme, drawerStyles} from '../constants/Styles';
import {postImageHeight} from '../constants/Sizes';

const Post = ({userName, userEmail, description, title, postOpen}) => {
    const hasImage = true;
    return (
        <View style={styles().post}>
            <View style={drawerStyles().postPic}>
                <Avatar.Image source={require('../assets/logo2.png')} />
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
                {/* <Caption style={drawerStyles().descTitle}>
                    BRIEF DESCRIPTION -{' '}
                </Caption> */}
                <Text style={drawerStyles().description}>
                    {postOpen
                        ? description
                        : description.length >= 30
                        ? description.substring(0, 30) + '...'
                        : description}
                </Text>
            </View>
            <View>
                {hasImage && (
                    <Image
                        source={require('../assets/logo3.png')}
                        style={{
                            height: postImageHeight,
                            width: '100%',
                            margin: 5,
                        }}
                    />
                )}
            </View>
        </View>
    );
};

export default Post;
