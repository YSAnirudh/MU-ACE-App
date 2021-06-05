import React from 'react';
import {Text,StyleSheet,TouchableOpacity} from 'react-native'

import { screenHeight,screenWidth } from '../utils/ScreenParams';
import {styles} from '../constants/Styles'

const CreatePostButton=({bname,...other})=>{
    return(    
        <TouchableOpacity style={styles().buttonStyle} {...other}>
            <Text style={styles().buttonText}>{bname}</Text>
        </TouchableOpacity>
    );
}

export default CreatePostButton