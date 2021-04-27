import React from 'react'
import {
    View,
    StyleSheet,
    Alert,
    Image
} from 'react-native'
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Text,
    Drawer,
    TouchableRipple,
    Switch
} from 'react-native-paper'
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/Ionicons'
import Colors from '../../constants/Colors'
import { ThemeContext, ThemeProvider } from '../../components/Theme'
import { theme, drawerStyles as styles } from "../../constants/Styles"


export function DrawerMan({...props}) {
    const { darkMode, toggleTheme } = React.useContext(ThemeContext)
    // theme.background
    // theme.text
    return (
        <View style={{flex:1, backgroundColor:theme().background}}>
            <DrawerContentScrollView {...props}>
                <View style={styles().drawerContent}>
                        <View style={styles().profile}>
                    <TouchableRipple onPress={()=>props.navigation.navigate('Profile')}>
                            <View style={styles().profilePic}>
                                <Avatar.Image
                                    source={require('../../assets/logo2.png')}
                                    />
                                <View >
                                    <Title style={styles().profileTitle}>Koushik Noobde</Title>
                                    <Caption style={styles().profileCaption}>@bignoobyellisetty</Caption>
                                </View>
                            </View>
                    </TouchableRipple>
                            <View>
                                <Text style={styles().profileInfo}>
                                    Maybe we could add something here
                                </Text>
                            </View>
                        </View>
                    <Drawer.Section>
                        <DrawerItem 
                            icon={({size, color}) => gimmeIcon('chatbubble-ellipses', size, theme().iconColor)}
                            label="Forum"
                            labelStyle={{
                                color:theme().text
                            }}
                            onPress={()=>{props.navigation.navigate('Forum')}}
                        />
                        <DrawerItem 
                            icon={({size, color}) => gimmeIcon('create', size, theme().iconColor)}
                            label="Create Post"
                            labelStyle={{
                                color:theme().text
                            }}
                            onPress={()=>{props.navigation.navigate('Create Post')}}
                        />
                        <DrawerItem 
                            icon={({size, color}) => gimmeIcon('checkmark-circle', size, theme().iconColor)}
                            label="Check Availability"
                            labelStyle={{
                                color:theme().text
                            }}
                            onPress={()=>{props.navigation.navigate('Availability')}}
                        />
                        <DrawerItem 
                            icon={({size, color}) => gimmeIcon('settings', size, theme().iconColor)}
                            label="Settings"
                            labelStyle={{
                                color:theme().text
                            }}
                            onPress={()=>{props.navigation.navigate('Settings')}}
                        />
                        <DrawerItem 
                            icon={({size, color}) => gimmeIcon('log-in', size, theme().iconColor)}
                            label="Login"
                            labelStyle={{
                                color:theme().text
                            }}
                            onPress={()=>{props.navigation.navigate('Login')}}
                        />
                        <DrawerItem 
                            icon={({size, color}) => gimmeIcon('alert', size, theme().iconColor)}
                            label="Register"
                            labelStyle={{
                                color:theme().text
                            }}
                            onPress={()=>{props.navigation.navigate('Register')}}
                        />
                    </Drawer.Section>
                    <Drawer.Section>
                        <TouchableRipple onPress={() => toggleTheme()}>
                            <View style={styles().preferences}>
                                <Text style={styles().darkText}>
                                    Dark Mode
                                    {}
                                </Text>
                                <View pointerEvents='none'>
                                <Switch value={darkMode} style={styles().darkText, {marginRight:35}} />
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles().bottomDrawer}>
                <DrawerItem
                    icon={({size, color}) => gimmeIcon('exit', size, theme().iconColor)}
                    label='Log Out'
                    labelStyle={{
                        color:theme().text
                    }}
                    onPress={()=>{}} 
                />
            </Drawer.Section>
        </View>
    );
}

const gimmeIcon = (text, size, color) => {
    return(
        <Icon 
            name={text}
            size={size}
            color={color}
        />
    );
}