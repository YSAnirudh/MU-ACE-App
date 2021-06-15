import React from 'react';

import {View, Image} from 'react-native';
import {Text, Avatar, Title, Caption} from 'react-native-paper';
import {styles, theme, drawerStyles} from '../constants/Styles';
const Comment = ({user, comment, userCommentId, email}) => {
    const hasImage = true;
    return (
        <View style={styles().comm}>
            <View style={drawerStyles().postPic}>
                <View>
                    <Avatar.Image
                        source={require('../assets/logo2.png')}
                        size={45}
                    />
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
