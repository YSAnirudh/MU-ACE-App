import 'react-native-gesture-handler';
import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BeforeLogin from './screens/BeforeLogin';
import DiscussionForum from './screens/DiscussionForum';
import Registration from './screens/Registration';
import MainRender from './MainRender';

export default function App() {
    return <DiscussionForum />;
}
