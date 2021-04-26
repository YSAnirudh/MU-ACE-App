import React from 'react'
import { StyleSheet } from 'react-native'
import { ThemeContext } from '../components/Theme';
import Colors from './Colors'
export const theme = () => {
  const { darkMode } = React.useContext(ThemeContext)
  const dark = darkMode ? 
    { background:Colors.Grey, text:Colors.Gold, textBoxBack:Colors.DarkGrey, file:require('../assets/logo3_auto_x2.png') } : 
    { background:Colors.White, text:Colors.Black, textBoxBack:Colors.LightGrey, file:require('../assets/logo3_auto_x2.png') }
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
  settingsBackButton:{
  },
  screen: {
    flex: 1
  },
  label: {
    width: '100%',
    fontFamily: 'OpenSansBold',
    marginVertical: 8
  },
  viewContainer:{
    flex:1,
    backgroundColor:Colors.Grey,
    alignItems:'center',
    justifyContent:'center',
    padding:21,
    paddingTop:0
},
  logo:{
    alignSelf:'center',
    paddingBottom:150,
    height:120,
    width:200,
    resizeMode:'cover'
  },
  input: {
    width: '100%',
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1
  },
  
  buttonContainer: {
    marginTop: 10,
    alignSelf:'stretch'
  },
  ForgotTxt: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.Gold
  },
  forgot: {
    marginVertical: 38,
    alignItems:'center'
  },
});
