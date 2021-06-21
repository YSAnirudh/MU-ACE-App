import React from 'react';

import {View, Image} from 'react-native';
import {Text, Avatar, Title, Caption} from 'react-native-paper';
import {margin20, margin5} from '../constants/Sizes';
import {
    styles,
    theme,
    drawerStyles,
    defaultProfilePicture,
} from '../constants/Styles';
const Comment = ({user, comment, userCommentId, email, profileImg}) => {
    const hasImage = true;
    return (
        <View style={styles().comm}>
            <View style={drawerStyles().postPic}>
                <View>
                    {typeof profileImg !== 'undefined' && profileImg !== '' ? (
                        <Avatar.Image
                            source={{uri: profileImg}}
                            size={margin5 * 9}
                        />
                    ) : (
                        <Avatar.Image
                            source={{uri: defaultProfilePicture}}
                            size={margin5 * 9}
                        />
                    )}
                </View>
                <View>
                    <Caption style={drawerStyles().postTitle}>{user}</Caption>
                    <Caption style={drawerStyles().postCaption}>
                        {email}
                    </Caption>
                    <View>
                        <Text style={drawerStyles().postedComment}>
                            {comment}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default Comment;
