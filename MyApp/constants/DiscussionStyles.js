import React from 'react'
import { StyleSheet } from 'react-native'
import Colors from './Colors'
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.Grey,
      alignItems: 'center',
      justifyContent: 'center',
    },
    backgroundImage:{
        position:'absolute',
        flex : 1,
        resizeMode : "cover",
        justifyContent : "center",
        width:600,
        height:400,
        opacity:0.5
    }
});