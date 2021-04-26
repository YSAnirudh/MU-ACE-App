import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen'
import DiscussionForum from './screens/DiscussionForum'


export default function App() {
  return (
    // <View style={styles.container}>
    //   {/* <DiscussionForum/> */}
      
    //   {/* <LoginScreen/> */}
    //   <StatusBar style="auto" />
    // </View>
     <DiscussionForum/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
