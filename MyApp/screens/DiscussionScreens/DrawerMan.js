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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Colors from '../../constants/Colors'
export function DrawerMan({...props}) {

    const [darkMode, setDarkMode] = React.useState(true);

    function toggleMode() {
        setDarkMode(!darkMode)
    }

    return (
        <View style={{flex:1, backgroundColor:Colors.Grey}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.profile}>
                        <View style={styles.profilePic}>
                            <Avatar.Image
                                source={require('../../assets/logo2.png')}
                                />
                            <View >
                                <Title style={styles.profileTitle}>Koushik Noobde</Title>
                                <Caption style={styles.profileCaption}>@bignoobyellisetty</Caption>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.profileInfo}>
                                Maybe we could add something here
                            </Text>
                        </View>
                    </View>
                    <Drawer.Section>
                        <DrawerItem 
                            icon={({size, color}) => {
                                <Icon
                                    name='exit-to-app' 
                                    size={size}
                                    color={color}
                                />
                            }}
                            label="Forum"
                            labelStyle={{
                                color:Colors.Gold
                            }}
                            onPress={()=>{props.navigation.navigate('Forum')}}
                        />
                        <DrawerItem 
                            icon={({size, color}) => {
                                <Icon
                                    name='exit-to-app' 
                                    size={size}
                                    color={color}
                                />
                            }}
                            label="Create Post"
                            labelStyle={{
                                color:Colors.Gold
                            }}
                            onPress={()=>{props.navigation.navigate('Create Post')}}
                        />
                        <DrawerItem 
                            icon={({size, color}) => {
                                <Icon
                                    name='exit-to-app' 
                                    size={size}
                                    color={color}
                                />
                            }}
                            label="Profile"
                            labelStyle={{
                                color:Colors.Gold
                            }}
                            onPress={()=>{props.navigation.navigate('Profile')}}
                        />
                        <DrawerItem 
                            icon={({size, color}) => {
                                <Icon
                                    name='exit-to-app' 
                                    size={size}
                                    color={color}
                                />
                            }}
                            label="Settings"
                            labelStyle={{
                                color:Colors.Gold
                            }}
                            onPress={()=>{props.navigation.navigate('Settings')}}
                        />
                    </Drawer.Section>
                    <Drawer.Section>
                        <TouchableRipple onPress={() => {toggleMode()}}>
                            <View style={styles.preferences}>
                                <Text style={styles.darkText}>
                                    Dark Mode
                                </Text>
                                <View pointerEvents='none'>
                                <Switch value={darkMode} style={styles.darkText, {marginRight:35}} />
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawer}>
                <DrawerItem
                    icon={({size, color}) => {
                        <Icon
                            name='exit-to-app' 
                            size={size}
                            color={color}
                        />
                    }}
                    label='Log Out'
                    labelStyle={{
                        color:Colors.Gold
                    }}
                    onPress={()=>{}} 
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex : 1
    },
    bottomDrawer : {
        borderTopColor:Colors.Gold,
        borderTopWidth : 2,
    },
    profile:{

    },
    profilePic:{
        marginLeft:15,
        flexDirection:'row'
    },
    profileTitle:{
        marginLeft:10,
        color:Colors.Gold
    },
    profileCaption:{
        marginLeft:10,
        color:Colors.Gold
    },
    profileInfo:{
        marginTop:20,
        marginBottom:20,
        paddingLeft:20,
        color:Colors.Gold
    },
    preferences:{
        marginLeft:20,
        color:Colors.Gold,
    },
    darkText:{
        fontSize:15, 
        color:Colors.Gold, 
        alignSelf:'flex-end',
        marginRight:20
    }
});