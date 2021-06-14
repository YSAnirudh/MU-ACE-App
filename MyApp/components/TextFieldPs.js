import React from 'react';
import {
    TextInput,
    View,
    StyleSheet,
    Text,
    KeyboardAvoidingView,
} from 'react-native';

import Colors from '../constants/Colors';
import {screenHeight, screenWidth} from '../utils/ScreenParams';
import {styles} from '../constants/Styles';

const TextFieldPs = ({placeholder, astyle, ...other}) => {
    return (
        <View style={styles().containerTextFieldPs}>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor="#666"
                required
                {...other}
            ></TextInput>
        </View>
    );
};

// const styles = StyleSheet.create({

//     container: {
//         marginTop:5,
//         marginBottom:10,
//         width:'100%',

//         borderColor:theme().createBorder,
//         borderRadius:8,
//         borderWidth:3,
//         flexDirection:'row',
//         alignItems:'center',
//         backgroundColor:Colors.DarkGrey
//     },
// });
export default TextFieldPs;
