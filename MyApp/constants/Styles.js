import React from 'react';
import {StyleSheet} from 'react-native';
import {ThemeContext} from '../components/Theme';
import Colors from './Colors';
import {screenHeight, screenWidth} from '../utils/ScreenParams';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const theme = () => {
  const {darkMode} = React.useContext(ThemeContext);
  const dark = darkMode
    ? {
        background: '#121212',
        text: 'white',
        textBoxBack: Colors.DarkGrey,
        postColor: '#241b19',
        file: require('../assets/logo3_auto_x2.png'),
        searchBG: '#17161a',
        iconColor: 'white',
        header: '#fff',
        headerColor: '#121212',
        footerIcons: '#fff',
        // selectedFooterIcon: "#241b19",
        footerColor: '#121212',
        //editProfileBackground:"black"
        epBtn: '#363636',
        epTextField: '#241b19',
        epText: 'white',
        createBorder: 'white',
        createBackgroundText: '#241b19',
        createButton: 'white',
        createBackground: 'black',
        createTextFieldBorder: '#241b19',
        regBorder: 'white',
        regIcon: 'white',
      }
    : {
        background: Colors.White,
        text: 'black',
        textBoxBack: Colors.LightGrey,
        postColor: '#d4d4d4',
        file: require('../assets/logo3_auto_x2.png'),
        searchBG: '#d4d4d4',
        iconColor: 'black',
        header: 'black',
        headerColor: '#EEECEC',
        footerIcons: '#121212',
        footerColor: '#d4d4d4',
        // selectedFooterIcon: "#241b19",
        //editProfileBackground:"white"
        epBtn: 'black',
        epTextField: '#b0b0b0',
        epText: 'black',
        createBorder: 'black',
        createBackgroundText: '#d4d4d4',
        createButton: 'white',
        createBackground: 'black',
        regBorder: 'white',
        regIcon: 'white',
      };
  return dark;
};

export const koushikBigMistake = () => ({
  screen: {
    flex: 1,
  },
  label: {
    width: '100%',
    fontFamily: 'OpenSansBold',
    marginVertical: 8,
  },
  viewContainer: {
    flex: 1,
    backgroundColor: theme().createBackground,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 21,
    paddingTop: 0,
  },
  logo: {
    alignSelf: 'center',
    paddingBottom: 150,
    height: 120,
    width: 200,
    resizeMode: 'cover',
  },
  input: {
    width: '100%',
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  buttonContainer: {
    marginTop: 10,
    alignSelf: 'stretch',
  },
  ForgotTxt: {
    fontSize: 14,
    fontWeight: '500',
    color: theme().regIcon,
  },
  forgot: {
    marginVertical: 38,
    alignItems: 'center',
  },
});

export const koushikMistake = () => ({
  screen: {
    flex: 1,
  },
  label: {
    width: '100%',
    fontFamily: 'OpenSansBold',
    marginVertical: 8,
  },
  viewContainer: {
    flex: 1,
    backgroundColor: theme().createBackground,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  logo: {
    alignSelf: 'center',
    paddingBottom: 150,
    height: 120,
    width: 200,
    resizeMode: 'cover',
  },
  input: {
    width: '100%',
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },

  buttonContainer: {
    marginTop: 10,
    alignSelf: 'stretch',
  },
  ForgotTxt: {
    fontSize: 14,
    fontWeight: '500',
    color: theme().regIcon,
  },
  forgot: {
    marginVertical: 38,
    alignItems: 'center',
  },
  dept: {
    height: 50,
    width: 150,
    color: theme().regIcon,
  },
  Tf: {
    marginTop: 5,
    marginBottom: 10,
    marginRight: 15,
    marginLeft: 15,
    width: '45%',
    //height:screenHeight/15,
    borderColor: theme().regBorder,
    borderRadius: 20,
    borderWidth: 1,
    //float:Left,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme().createBackground,
  },
});

export const styles = () => ({
  buttonStyleLB: {
    borderWidth: 1,
    marginTop: 10,
    width: '100%',
    height: screenHeight / 15,
    backgroundColor: theme().createBackground,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: theme().regBorder,
    borderRadius: 20,
  },
  buttonTextLB: {
    fontSize: 18,
    color: theme().createButton,
  },
  icon:{
    fontWeight:'bold',
    color: theme().regIcon,

},
wrapIcon:{
    width:30,
    justifyContent:'center',
    alignItems:'center'
},
  TF: {
    marginTop: 5,
    marginBottom: 10,
    width: '100%',
    height: screenHeight / 15,
    borderColor: theme().regBorder,
    borderRadius: 20,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme().createBackground,
  },
  iconStyle: {
    padding: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: theme().regBorder,
    color: theme().regIcon,
    borderRightWidth: 1,
    width: 50,
  },
  inputField: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    width: screenWidth / 1.5,
    height: screenHeight / 15,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
  input: {
    padding: 10,
    flex: 1,
    fontSize: 16,
    color: theme().createButton,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    borderWidth: 1,
    marginTop: 10,
    width: '50%',
    margin: 3,
    height: screenHeight / 15,
    backgroundColor: theme().createBackground,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: theme().createBorder,
    borderRadius: 20,
    marginBottom: 25,
    marginTop: 22,
  },
  buttonText: {
    fontSize: 14,
    color: theme().createButton,
  },
  containerTextFieldPs: {
    marginTop: 5,
    marginBottom: 10,
    width: '100%',

    borderColor: theme().createTextFieldBorder,
    borderRadius: 8,
    borderWidth: 3,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme().createBackgroundText,
  },
  container: {
    flex: 1,
    backgroundColor: theme().background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: 600,
    height: 400,
    opacity: 0.5,
  },
  post: {
    flex: 2,
    backgroundColor: theme().postColor,
    color: theme().text,
    marginBottom: 25,
    padding: 10,
    borderRadius: 10,
  },
  comm: {
    flex: 2,
    backgroundColor: theme().postColor,
    color: theme().text,
    marginBottom: 25,
    padding: 10,
    paddingRight:70,
    borderRadius: 10,
  },
  postWrapper: {
    flex: 1,
    backgroundColor: theme().background,
    color: theme().text,
    width: '90%',
    marginBottom: 20,
  },
});

export const availabilityStyles = (status) => ({
  container: {
    flex: 1,
    //alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp('3%'),
  },
  personName: {
    padding: 7,
    width: wp('40%'),
    marginRight: wp('4%'),
    elevation: 10,
    backgroundColor: theme().postColor,
    borderRadius: 20,
  },
  personDepartment: {
    padding: 8,
    width: wp('15%'),
    marginRight: wp('2%'),
    elevation: 10,
    //justifyContent: 'center',
    backgroundColor: theme().postColor,
    //alignItems: 'center',
    borderRadius: 20,
    //height: 40,
  },
  searchBar: {
    borderRadius: 30,
    //borderWidth: 1,
    //borderColor: theme().text,
    backgroundColor: theme().searchBG,
  },
  statusIcon: {
    marginLeft: 8,
    borderWidth: 2,
    borderRadius: 30,
    justifyContent: 'center',
    borderColor: status ? 'green' : 'red',
  },
  statusEntry: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
});

export const drawerStyles = () => ({
  drawerContent: {
    flex: 1,
  },
  bottomDrawer: {
    borderTopColor: theme().text,
    borderTopWidth: 2,
  },
  profile: {
    borderBottomColor: theme().text,
    borderBottomWidth: 2,
  },
  profilePic: {
    marginLeft: 15,
    flexDirection: 'row',
  },
  profileTitle: {
    marginLeft: 10,
    color: theme().text,
  },
  profileCaption: {
    marginLeft: 10,
    color: theme().text,
  },
  profileInfo: {
    marginTop: 20,
    marginBottom: 20,
    paddingLeft: 20,
    color: theme().text,
  },
  preferences: {
    marginLeft: 20,
    color: theme().text,
  },
  darkText: {
    fontSize: 15,
    color: theme().text,
    alignSelf: 'flex-end',
    marginRight: 20,
  },
  descTitle: {
    color: theme().text,
    fontWeight: 'bold',
  },
  description: {
    color: theme().text,
    marginLeft: 10,
  },
  
  postTitle: {
    color: theme().text,
    marginLeft: 20,
  },

  postCaption: {
    color: theme().text,
    marginLeft: 20,
  },
  postedComment: {
    color: theme().text,
    marginLeft: 20,
    
  },
  postPic: {
    flexDirection: 'row',
  },
});

export const profileStyles = () => ({
  root: {
    flex: 1,
    backgroundColor: theme().background,
    justifyContent: 'center',
  },
  myCard: {
    marginTop: 3,
    padding: 8,
    borderColor: theme().text,
    borderWidth: 1,
    backgroundColor: theme().textBoxBack,
  },
  cardContent: {
    flexDirection: 'row',
  },
  emailBox: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  myText: {
    fontSize: 16,
    marginTop: 3,
    marginLeft: 3,
    color: theme().text,
    fontFamily: 'sans-serif',
  },
  buttonText: {
    fontSize: 12,
    color: theme().text,
  },
  smolbuttonStyle: {
    backgroundColor: theme().textBoxBack,
    borderWidth: 1,
    width: 150,
    borderColor: theme().text,
    borderRadius: 20,
  },
  buttonStyle: {
    margin: 15,
    marginTop: 20,
    backgroundColor: theme().textBoxBack,
    borderWidth: 1,
    borderColor: theme().text,
    borderRadius: 20,
  },
});

export const userProfileStyles = () => ({
  root: {
    flex: 1,
    backgroundColor: theme().background,
  },
  myCard: {
    marginTop: 3,
    padding: 8,
    borderColor: theme().text,
    borderWidth: 1,
    backgroundColor: theme().textBoxBack,
  },
  cardContent: {
    flexDirection: 'row',
  },
  userProfImg: {
    margin: 7,
    flexDirection: 'row',
    alignItems: 'center',
  },
  stats: {
    fontSize: 17,
    color: theme().text,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
  },
  profileDetails: {
    borderBottomWidth: 1,
    borderBottomColor: theme().text,
    paddingBottom: 10,
  },
  userTitle: {
    fontSize: 19,
    marginLeft: 10,
    color: theme().text,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
  },
  userText: {
    fontSize: 17,
    marginLeft: 10,
    color: theme().text,
    fontFamily: 'sans-serif',
  },
  emailBox: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: theme().text,
    paddingBottom: 10,
  },
  emailIcon: {
    size: 25,
    color: theme().iconColor,
  },
  myText: {
    fontSize: 17,
    marginLeft: 3,
    color: theme().text,
    fontFamily: 'sans-serif',
  },
});

export const editProfileStyles = () => ({
  container: {
    flex: 1,
    alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: theme().background,
    //paddingHorizontal: wp('5%'),
    paddingVertical: hp('10.9%'),
  },
  ti: {
    //borderWidth: 2,
    padding: hp('0.7%'),
    width: '80%',
    borderRadius: 11,
    //borderColor: '#241b19',
    //borderWidth:4,
    marginBottom: hp('1.7%'),
    color: theme().epText,
    backgroundColor: theme().epTextField,
  },
  savebtn: {
    padding: '3%',
    marginTop: 15,
    backgroundColor: theme().epBtn,
    borderRadius: 10,
  },
  img: {
    marginBottom: hp('1.5%'),
  },
  profilebtn: {
    marginBottom: 15,
    padding: '3%',
    borderRadius: 15,
    backgroundColor: theme().epBtn,
    marginBottom: hp('3.4%'),
  },
  te: {
    fontSize: 19,
    fontWeight: 'bold',
    color: theme().epText,
  },
  blocks: {
    textAlign: 'left',
    marginLeft: wp('11%'),
    alignSelf: 'stretch',
  },
});

export const createPostStyles = () => ({
  container: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 21,
    paddingTop: 0,
    marginTop: '20%',
  },
  container2: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 21,
    paddingTop: 0,
    marginTop: '10%',
  },
  textFieldDescription: {
    flex: 1,
    color: theme().text,
    backgroundColor: theme().createBackgroundText,
    height: screenHeight / 5,
    padding: 9,
    textAlignVertical: 'top',
  },
  textFieldComment: {
    flex: 1,
    color: theme().text,
    backgroundColor: theme().createBackgroundText,
    padding: 9,
    textAlignVertical: 'top',
  },
  textFieldTitle: {
    color: theme().text,
    maxHeight: 80,
    padding: 9,
    textAlignVertical: 'top',
  },
  container3: {
    flex: 1,
    backgroundColor: theme().background,
  },
  flairC: {
    width: '100%',
    height: '30%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleC: {
    marginTop: 20,
    height: 40,
    borderColor: theme().text,
    borderWidth: 3,
    justifyContent: 'center',
    textAlignVertical: 'top',
    padding: 9,
  },
  descC: {
    borderColor: theme().text,
    borderWidth: 3,
    padding: 9,
    justifyContent: 'center',
    textAlignVertical: 'top',
  },
  textArea: {
    height: 160,
    justifyContent: 'flex-start',
  },
});
