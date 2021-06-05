import React from 'react';

import {View, Image} from 'react-native';
import {Text, Avatar, Title, Caption} from 'react-native-paper';
import {styles, theme, drawerStyles} from '../constants/Styles';
const Post = ({userName, userEmail, description}) => {
  const hasImage = true;
  return (
    <View style={styles().post}>
      <View style={drawerStyles().postPic}>
        <Avatar.Image source={require('../assets/logo2.png')} />
        <View>
          <Title style={drawerStyles().postTitle}>{userName}</Title>
          <Caption style={drawerStyles().postCaption}>{userEmail}</Caption>
        </View>
      </View>
      <View>
        <Caption style={drawerStyles().descTitle}>BRIEF DESCRIPTION - </Caption>
        <Text style={drawerStyles().description}>{description}</Text>
      </View>
      <View>
        {hasImage && (
          <Image
            source={require('../assets/logo3.png')}
            style={{height: 100, width: 100}}
          />
        )}
      </View>
    </View>
  );
};

export default Post;
