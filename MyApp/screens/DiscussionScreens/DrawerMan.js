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
import { theme } from "../../constants/Styles"

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
                            icon={({size, color}) => gimmeIcon('chatbubble-ellipses', size, theme().text)}
                            label="Forum"
                            labelStyle={{
                                color:theme().text
                            }}
                            onPress={()=>{props.navigation.navigate('Forum')}}
                        />
                        <DrawerItem 
                            icon={({size, color}) => gimmeIcon('create', size, theme().text)}
                            label="Create Post"
                            labelStyle={{
                                color:theme().text
                            }}
                            onPress={()=>{props.navigation.navigate('Create Post')}}
                        />
                        <DrawerItem 
                            icon={({size, color}) => gimmeIcon('checkmark-circle', size, theme().text)}
                            label="Check Availability"
                            labelStyle={{
                                color:theme().text
                            }}
                            onPress={()=>{props.navigation.navigate('Availability')}}
                        />
                        <DrawerItem 
                            icon={({size, color}) => gimmeIcon('settings', size, theme().text)}
                            label="Settings"
                            labelStyle={{
                                color:theme().text
                            }}
                            onPress={()=>{props.navigation.navigate('Settings')}}
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
                    icon={({size, color}) => gimmeIcon('exit', size, theme().text)}
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

const styles = () => {
    return ({
        drawerContent: {
            flex : 1,
            
        },
        bottomDrawer : {
            borderTopColor:theme().text,
            borderTopWidth : 2,
        },
        profile:{
            borderBottomColor:theme().text,
            borderBottomWidth:2
        },
        profilePic:{
            marginLeft:15,
            flexDirection:'row'
        },
        profileTitle:{
            marginLeft:10,
            color:theme().text
        },
        profileCaption:{
            marginLeft:10,
            color:theme().text
        },
        profileInfo:{
            marginTop:20,
            marginBottom:20,
            paddingLeft:20,
            color:theme().text,
            
        },
        preferences:{
            marginLeft:20,
            color:theme().text,
        },
        darkText:{
            fontSize:15, 
            color:theme().text, 
            alignSelf:'flex-end',
            marginRight:20
        }
    });
};