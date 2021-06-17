import { ThemeProvider } from '@react-navigation/native';
import React, {Component, useState} from 'react';
import {View, SafeAreaView, StyleSheet, Text} from 'react-native';
import CustomMultiPicker from "./MultiPicker";
import { color } from 'react-native-reanimated';
import Colors from '../constants/Colors';
import {flairStyles,theme,styles} from '../constants/Styles';
import {screenHeight} from '../utils/ScreenParams';

const items = 
    {
       
        1: 'CS',
    
    
    
        2: 'ME',
    
    
    
        3: 'EE',
    
    
    
        4: 'CE',
    
    
    
        5: 'HS',
    
    
    
        6: 'Math',
    
    
    
        7: 'Phy',
    
    
        
        8: 'Chem',
    
    
    
        9: 'Arts',
    }

//// SHOULD UPDATE CSS

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
                placeholder={"Search"}
                placeholderTextColor={theme().text}
                returnValue={"label"} // label or value
                callback={(res)=>{ console.log(res) }} // callback, array of selected items
                rowBackgroundColor={theme().postColor}
                labelStyle={{color:"#eee"}}    
                rowRadius={5}
                iconColor={theme().iconColor}
                iconSize={30}
                selectedIconName={"ios-checkmark-circle-outline"}
                unselectedIconName={"ios-radio-button-off-outline"}
                
                selected={[1,2]} // list of options which are selected by default
                />
            </View>
        </SafeAreaView>
    );
};

export default Flairs;
