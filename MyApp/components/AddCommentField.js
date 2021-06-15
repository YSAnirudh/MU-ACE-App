import React from 'react';
import {
    TextInput,
    View,
    StyleSheet,
    Text,
    KeyboardAvoidingView,
    TouchableOpacity,
    Alert,
} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import Colors from '../constants/Colors';
import {screenHeight, screenWidth} from '../utils/ScreenParams';
import {styles} from '../constants/Styles';

const AddCommentField = ({placeholder, astyle, onClick, ...other}) => {
    return (
        <View style={styles().containerTextFieldPs}>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor="#666"
                required
                {...other}
            ></TextInput>
            <View>
                <TouchableOpacity
                    onPress={() => {
                        onClick();
                    }}
                >
                    <View style={styles().wrapIcon}>
                        <MaterialCommunityIcons
                            name="send"
                            style={styles().icon}
                            size={24}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default AddCommentField;
