import {ThemeProvider} from '@react-navigation/native';
import React, {Component, useState} from 'react';
import {View, SafeAreaView, StyleSheet, Text, ScrollView} from 'react-native';
import CustomMultiPicker from './MultiPicker';
import {color} from 'react-native-reanimated';
import Colors from '../constants/Colors';
import {flairStyles, theme, styles} from '../constants/Styles';
import {screenHeight} from '../utils/ScreenParams';
import {margin20} from '../constants/Sizes';

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

const deptItems = ['Professor', 'Student'];

const Flairs = ({
    selectedItems,
    onSelectedItemsChange,
    typeChange,
    onTypeChange,
}) => {
    // Data Source for the SearchableDropdown
    return (
        <ScrollView style={flairStyles().container}>
            <View style={flairStyles().container}>
                <Text style={[styles().buttonText, {fontSize: margin20}]}>
                    User Type:
                </Text>
                <CustomMultiPicker
                    options={deptItems}
                    search={false} // should show search bar?
                    multiple={true} //
                    placeholder={'Search'}
                    placeholderTextColor={theme().text}
                    returnValue={'label'} // label or value
                    callback={(res) => {
                        onTypeChange(res);
                    }} // callback, array of selected items
                    rowBackgroundColor={theme().postColor}
                    labelStyle={{color: theme().text}}
                    rowRadius={5}
                    iconColor={theme().iconColor}
                    iconSize={30}
                    selectedIconName={'ios-checkmark-circle-outline'}
                    unselectedIconName={'ios-radio-button-off-outline'}
                    selected={typeChange} // list of options which are selected by default
                />
                <Text style={[styles().buttonText, {fontSize: margin20}]}>
                    Department:
                </Text>
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
                    selected={selectedItems} // list of options which are selected by default
                />
            </View>
        </ScrollView>
    );
};

export default Flairs;
