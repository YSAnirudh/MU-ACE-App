import React from 'react';
import {View} from 'react-native';
import {Text, TouchableRipple} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import {drawerStyles as styles} from '../constants/Styles';
import {iconSize} from '../constants/Sizes';

const DrawerStatus = ({status, handleUpdateStatus}) => {
    return (
        <TouchableRipple
            onPress={() => {
                handleUpdateStatus();
            }}
        >
            <View style={styles().preferences}>
                <Text
                    style={
                        (styles().darkText,
                        {
                            color: status ? 'green' : 'red',
                        })
                    }
                >
                    {'Your Status\n(Click to toggle)'}
                </Text>
                <Icon
                    name={!status ? 'close-circle-outline' : 'checkmark-circle'}
                    size={iconSize + 5}
                    color={status ? 'green' : 'red'}
                    style={{
                        marginLeft: 1.5,
                    }}
                />
            </View>
        </TouchableRipple>
    );
};

export default DrawerStatus;
