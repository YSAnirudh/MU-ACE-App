import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Post from './Post';

export default function PostClickable({
    navigation,
    postRes,
    postOpen,
    userIdLocal,
}) {
    return (
        <TouchableOpacity
            onPress={() => {
                let x = postRes;
                navigation.navigate('ViewPost', {
                    screen: 'ViewPost',
                    params: {
                        userId: x.userId,
                        postId: x.postId,
                        firstName: x.firstName,
                        email: x.email,
                        description: x.description,
                        tags: x.tags,
                        title: x.theTitle,
                        comments: x.comments,
                        currentUserId: userIdLocal,
                        postImg: x.postImg,
                        profileImg: x.profileImg,
                        localUserId: userIdLocal,
                    },
                });
            }}
        >
            <Post
                key={postRes.postId}
                userId={postRes.userId}
                postId={postRes.postId}
                userName={postRes.firstName}
                userEmail={postRes.email}
                description={postRes.description}
                tags={postRes.tags}
                title={postRes.theTitle}
                postOpen={postOpen}
                postImg={postRes.postImg}
                profileImg={postRes.profileImg}
                postImgDim={postRes.postImgDim}
                localUserId={userIdLocal}
            />
        </TouchableOpacity>
    );
}
