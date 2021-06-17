import {ThemeProvider} from '@react-navigation/native';
import React, {Component, useState} from 'react';
import {View, SafeAreaView, StyleSheet, Text} from 'react-native';
import CustomMultiPicker from './MultiPicker';
import {color} from 'react-native-reanimated';
import Colors from '../constants/Colors';
import {flairStyles, theme, styles} from '../constants/Styles';
import {screenHeight} from '../utils/ScreenParams';

const items = {
    CSE: 'CSE',

    MECH: 'MECH',

    EEE: 'EEE',

    CE: 'CE',

    HS: 'HS',

    MATH: 'MATH',

    PHY: 'PHY',

    CHEM: 'CHEM',
};

const Flairs = ({selectedItems, onSelectedItemsChange}) => {
    // Data Source for the SearchableDropdown
    return (
        <SafeAreaView style={flairStyles().container}>
            <View style={flairStyles().container}>
                {/* <Text style={flairStyles().titleText}>Flairs</Text> */}
                <CustomMultiPicker
                    options={items}
                    search={false} // should show search bar?
                    multiple={true} //
                    placeholder={'Search'}
                    placeholderTextColor={theme().text}
                    returnValue={'label'} // label or value
                    callback={(res) => {
                        onSelectedItemsChange(res);
                    }} // callback, array of selected items
                    rowBackgroundColor={theme().postColor}
                    labelStyle={{color: theme().text}}
                    rowRadius={5}
                    iconColor={theme().iconColor}
                    iconSize={30}
                    selectedIconName={'ios-checkmark-circle-outline'}
                    unselectedIconName={'ios-radio-button-off-outline'}
                    selected={[1, 2]} // list of options which are selected by default
                />
            </View>
        </SafeAreaView>
    );
};

export default Flairs;
