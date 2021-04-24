import React from 'react'
import {
    View,
    StyleSheet,
    Alert
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
    return (
        <View style={{flex:1, backgroundColor:Colors.Grey}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.profilePic}>
                        <Avatar.Image
                            source={require('../../assets/logo2.png')}
                            />
                        <View style={styles.profileText}>
                            <Title style={{color:Colors.Gold}}>Koushik Noobde</Title>
                            <Caption style={{color:Colors.Gold}}>@bignoobyellisetty</Caption>
                        </View>
                    </View>
                    <View>
                        <Text>
                            Element
                        </Text>
                    </View>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawer}>
                <DrawerItem
                    icon={({size, color}) => {
                    <Icon
                        name='exit-to-app' 
                        size={size}
                        color={color}
                    />}}
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
    profilePic:{
        marginLeft:15,
        flexDirection:'row'
    },
    profileText:{
        marginLeft:10,
        color:Colors.Gold
    }
});