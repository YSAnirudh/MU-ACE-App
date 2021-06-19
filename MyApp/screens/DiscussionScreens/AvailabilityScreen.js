import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Button, Image} from 'react-native';
import Colors from '../../constants/Colors';
import {styles, theme} from '../../constants/Styles';

//import { styles } from "../../constants/DiscussionStyles"
import Status from '../../components/status';

export default function AvailabilityScreen({
    navigation,
    userId,
    isLoading,
    setIsLoading,
}) {
    // setIsLoading(false);
    return (
        <View style={styles().container}>
            <Image
                source={require('../../assets/rohai.png')}
                style={[styles().backgroundImage, {height: 500}]}
            />

            <Status
                {...navigation}
                userId={userId}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
            />
        </View>
    );
}
