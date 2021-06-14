import React, {Component, useState} from 'react';
import {View, SafeAreaView, StyleSheet, Text} from 'react-native';
import MultiSelect from 'react-native-multiple-select';
import Colors from '../constants/Colors';
import {flairStyles} from '../constants/Styles';
import {screenHeight} from '../utils/ScreenParams';

const items = [
    {
        id: '1',
        name: 'CS',
    },
    {
        id: '2',
        name: 'M E',
    },
    {
        id: '3',
        name: 'EE',
    },
    {
        id: '4',
        name: 'CE',
    },
    {
        id: '5',
        name: 'H S',
    },
    {
        id: '6',
        name: 'Math',
    },
    {
        id: '7',
        name: 'Phy',
    },
    {
        id: '8',
        name: 'Chem',
    },
    {
        id: '9',
        name: 'Arts',
    },
];

//// SHOULD UPDATE CSS

const Flairs = ({selectedItems, onSelectedItemsChange}) => {
    // Data Source for the SearchableDropdown
    return (
        <SafeAreaView style={flairStyles().container}>
            <View style={flairStyles().container}>
                {/* <Text style={flairStyles().titleText}>Flairs</Text> */}
                <MultiSelect
                    hideTags
                    items={items}
                    uniqueKey="id"
                    onSelectedItemsChange={onSelectedItemsChange}
                    selectedItems={selectedItems}
                    selectText="Choose..."
                    searchInputPlaceholderText="Search..."
                    onChangeInput={(text) => console.log(text)}
                    tagRemoveIconColor={Colors.Gold}
                    tagBorderColor={Colors.Gold}
                    tagTextColor="blue"
                    selectedItemTextColor={Colors.Gold}
                    selectedItemIconColor={Colors.Gold}
                    itemTextColor={Colors.Red}
                    displayKey="name"
                    searchInputStyle={{color: Colors.DarkGrey}}
                    hideSubmitButton
                    searchInputStyle={{color: Colors.DarkGrey}}
                    styleDropdownMenuSubsection={flairStyles().dropMenu}
                    styleItemsContainer={flairStyles().dropMenu}
                    styleRowList={flairStyles().dropMenu}
                />
            </View>
        </SafeAreaView>
    );
};

export default Flairs;
