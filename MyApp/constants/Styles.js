import React from 'react'
import { StyleSheet } from 'react-native'
import { ThemeContext } from '../components/Theme';
import Colors from './Colors'
export const theme = () => {
  const { darkMode } = React.useContext(ThemeContext)
  const dark = darkMode ? 
    { background:Colors.Grey, 
      text:Colors.Gold, 
      textBoxBack:Colors.DarkGrey,
      postColor:Colors.DarkerLightGrey,
      file:require('../assets/logo3_auto_x2.png') 
    } : 
    { background:Colors.White, 
      text:Colors.Black, 
      textBoxBack:Colors.LightGrey,
      postColor:Colors.LightGrey,
      file:require('../assets/logo3_auto_x2.png') 
    }
  return dark;
}
export const styles = () => ({
  container: {
    flex: 1,
    backgroundColor: theme().background,
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
  },
  post:{
    flex:2,
    backgroundColor:theme().postColor,
    color:theme().text,
    marginBottom:25,
    padding:10,
    borderRadius:10
  },
  postWrapper:{
    flex:1,
    backgroundColor:theme().background,
    color:theme().text,
    width:'90%',
    marginBottom:20
  },
});

export const drawerStyles = () => ({
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
    },
    descTitle:{
      color:theme().text,
      fontWeight:'bold'
    },
    description:{
      color:theme().text,
      marginLeft:10
    },
    postTitle:{
      color:theme().text,
      marginLeft:20
    },
    postCaption:{
      color:theme().text,
      marginLeft:20
    },
    postPic:{
      flexDirection:'row'
    }
});