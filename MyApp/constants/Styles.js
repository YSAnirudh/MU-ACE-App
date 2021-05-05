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
      file:require('../assets/logo3_auto_x2.png'),
      searchBG:Colors.Grey,
      iconColor:Colors.Red
    } : 
    { background:Colors.White, 
      text:Colors.Grey, 
      textBoxBack:Colors.LightGrey,
      postColor:Colors.LightGrey,
      file:require('../assets/logo3_auto_x2.png'),
      searchBG:Colors.White,
      iconColor:Colors.Red
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

export const availabilityStyles = (status) => ({
    container: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
     marginTop:20
   },
   personName:{
     padding:10,
     width:'40%',
     marginRight:10,
     elevation:10,
     backgroundColor:theme().postColor,
     borderRadius:15
   },
   personDepartment:{
     padding:10,
     width:'20%',
     marginRight:0,
     elevation:10,
     justifyContent:'center',
     backgroundColor:theme().postColor,
     alignItems:'center',
     borderRadius:10,
     height:40
   },
   searchBar:{
    borderRadius:30,
    borderWidth:2,
    borderColor:theme().text,
    backgroundColor:theme().searchBG
   },
   statusIcon:{
     marginLeft:8,
     borderWidth:2,
     borderRadius:30,
     justifyContent:'center',
     borderColor:status ? 'green' : 'red'
   },
   statusEntry:{
     flexDirection:'row', 
     marginBottom:10, 
     alignItems:'center'
  }
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

export const profileStyles=() => ({
  root:{
      flex:1,
      backgroundColor:theme().background,
      justifyContent:'center',
  },
  myCard:{
      marginTop:3,
      padding:8,
      borderColor:theme().text,
      borderWidth:1,
      backgroundColor:theme().textBoxBack
  },
  cardContent:{
      flexDirection:'row',
  },
  emailBox:{
      flexDirection:'row',
      justifyContent:"center",
      
  },
  myText:{
      fontSize:16,
      marginTop:3,
      marginLeft:3,
      color:theme().text,
      fontFamily:"sans-serif"
  },
  buttonText:{
      fontSize:12,
      color:theme().text
  },
  smolbuttonStyle:{
      backgroundColor:theme().textBoxBack,
      borderWidth:1,
      width:150,
      borderColor:theme().text,
      borderRadius:20
      
  },
  buttonStyle:{
      margin:15,
      marginTop:20,
      backgroundColor:theme().textBoxBack,
      borderWidth:1,
      borderColor:theme().text,
      borderRadius:20
  }
})


export const editProfileStyles = ()=>({
  container:{
        flex : 1,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor:'violet'
    },
    ti:{
        
        borderWidth:2,
        padding:10,
        width:'80%',
        borderRadius:20,
        borderColor:'lightblue',
        marginBottom:13
    },
    savebtn:{
        padding:10,
        marginTop:15,
        backgroundColor:'yellow',
        borderRadius:20
    },
    img:{
        marginBottom:20
    },
    profilebtn:{
        marginBottom:15,
        padding:5,
        backgroundColor:'red'

    },
    te:{
        fontSize: 19,
        fontWeight: "bold",
        
    },
    blocks:{
        textAlign: 'left',
        marginLeft:50, 
        alignSelf: 'stretch'
    }
})