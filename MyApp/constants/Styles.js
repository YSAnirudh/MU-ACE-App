import React from 'react';
import {StyleSheet} from 'react-native';
import {ThemeContext} from '../components/Theme';
import Colors from './Colors';

import {screenHeight, screenWidth} from '../utils/ScreenParams';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
    height120,
    margin10,
    pad150,
    width200,
    font12,
    margin35,
    margin20,
    statusProfPic,
    margin5,
    margin15,
    textFont,
    width50,
    iconSize,
    height100,
    margin25,
    margin30,
    profProfPic,
    width15,
    width10,
    titleFont,
    width5,
} from './Sizes';

export const theme = () => {
    const {darkMode} = React.useContext(ThemeContext);
    const dark = darkMode
        ? {
              background: '#121212',
              text: 'white',
              textBoxBack: Colors.DarkGrey,
              postColor: '#241b19',
              file: require('../assets/logo3_auto_x2.png'),
              mecFile: require('../assets/m.png'),
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
              modalBox: '#121212',
              modalButton: 'white',
              modalText: 'white',
              modalbutonBack: 'black',
              modalButtonText: 'white',
              modalBackground: '241b19',
          }
        : {
              background: Colors.White,
              text: 'black',
              textBoxBack: Colors.LightGrey,
              postColor: '#d4d4d4',
              file: require('../assets/logo3_auto_x2.png'),
              mecFile: require('../assets/m.png'),
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
              createTextFieldBorder: '#d4d4d4',
              regBorder: 'white',
              regIcon: 'white',
              modalBox: 'white',
              modalButton: 'white',
              modalText: 'black',
              modalButtonText: 'white',
              modalbutonBack: 'black',
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
        marginVertical: margin10,
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
        paddingBottom: pad150,
        height: height120,
        width: width200,
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
        marginTop: margin10,
        alignSelf: 'stretch',
    },
    ForgotTxt: {
        fontSize: font12 + 2,
        fontWeight: '500',
        color: theme().regIcon,
    },
    forgot: {
        marginVertical: margin35,
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
        marginVertical: margin10,
    },
    viewContainer: {
        flex: 1,
        backgroundColor: theme().createBackground,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: margin20,
        paddingLeft: margin20,
        paddingRight: margin20,
    },
    logo: {
        alignSelf: 'center',
        paddingBottom: pad150,
        height: height120,
        width: width200,
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
        marginTop: margin10,
        alignSelf: 'stretch',
    },
    ForgotTxt: {
        fontSize: font12 + 2,
        fontWeight: '500',
        color: theme().regIcon,
    },
    forgot: {
        marginVertical: margin35,
        alignItems: 'center',
    },
    dept: {
        height: statusProfPic,
        width: pad150 * 1.2,
        color: theme().regIcon,
        // fontSize: 100,
    },
    Tf: {
        marginTop: margin5,
        marginBottom: margin10,
        marginRight: margin15,
        marginLeft: margin15,
        width: '45%',
        //height:screenHeight/15,
        borderColor: theme().regBorder,
        borderRadius: margin20,
        borderWidth: 1,
        //float:Left,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme().createBackground,
    },
});

export const styles = () => ({
    container_1: {
        flex:1,
        backgroundColor: theme().background,
        paddingHorizontal: 24,
        paddingVertical: 30,
        height: '100%',
        width:'100%'
    },
    buttonStyleLB: {
        borderWidth: 1,
        marginTop: margin10,
        width: '100%',
        height: screenHeight / 15,
        backgroundColor: theme().createBackground,
        padding: margin10,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: theme().regBorder,
        borderRadius: margin20,
    },
    buttonTextLB: {
        fontSize: textFont,
        color: theme().createButton,
    },
    TF: {
        marginTop: margin5,
        marginBottom: margin10,
        width: '100%',
        height: screenHeight / 15,
        borderColor: theme().regBorder,
        borderRadius: margin20,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme().createBackground,
    },
    iconStyle: {
        padding: margin10,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightColor: theme().regBorder,
        color: theme().regIcon,
        borderRightWidth: 1,
        width: width50,
    },
    inputField: {
        padding: margin10,
        marginTop: margin5,
        marginBottom: margin10,
        width: screenWidth / 1.5,
        height: screenHeight / 15,
        fontSize: textFont,
        borderRadius: margin10,
        borderWidth: 1,
    },
    input: {
        padding: margin10,
        flex: 1,
        fontSize: textFont,
        color: theme().createButton,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonStyle: {
        borderWidth: 1,
        marginTop: margin10,
        width: '50%',
        margin: 3,
        height: screenHeight / 15,
        backgroundColor: theme().createBackground,
        padding: margin10,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: theme().createBorder,
        borderRadius: margin10 * 2,
        marginBottom: iconSize,
        marginTop: margin20,
    },
    buttonText: {
        fontSize: textFont,
        color: theme().createButton,
    },
    containerTextFieldPs: {
        marginTop: margin5,
        marginBottom: margin10,
        width: '100%',

        borderColor: theme().createTextFieldBorder,
        borderRadius: margin10,
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
        width: width200 * 3,
        height: height100 * 4,
        opacity: 0.5,
    },
    post: {
        flex: 2,
        backgroundColor: theme().postColor,
        color: theme().text,
        marginBottom: margin25,
        padding: margin10,
        borderRadius: margin10,
    },
    postWrapper: {
        flex: 1,
        backgroundColor: theme().background,
        color: theme().text,
        width: '90%',
    },
    icon: {
        fontWeight: 'bold',
        color: theme().regIcon,
    },
    wrapIcon: {
        width: width10 * 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    comm: {
        flex: 2,
        backgroundColor: theme().postColor,
        color: theme().text,
        marginBottom: margin25,
        padding: margin10,
        paddingRight: width10 * 4,
        borderRadius: margin10,
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
        padding: margin10 - 3,
        width: wp('40%'),
        marginRight: wp('4%'),
        elevation: margin10,
        backgroundColor: theme().postColor,
        borderRadius: margin20,
    },
    personDepartment: {
        padding: margin10 - 2,
        width: wp('15%'),
        marginRight: wp('2%'),
        elevation: margin10,
        //justifyContent: 'center',
        backgroundColor: theme().postColor,
        //alignItems: 'center',
        borderRadius: margin20,
        //height: 40,
    },
    searchBar: {
        borderRadius: margin30,
        //borderWidth: 1,
        //borderColor: theme().text,
        backgroundColor: theme().searchBG,
    },
    statusIcon: {
        marginLeft: margin10 - 2,
        borderWidth: 2,
        borderRadius: margin30,
        justifyContent: 'center',
        borderColor: status ? 'green' : 'red',
    },
    statusEntry: {
        flexDirection: 'row',
        marginBottom: margin10,
        alignItems: 'center',
    },
});

export const drawerStyles = () => ({
    MECLogo: {
        width: screenWidth / 6,
        height: screenWidth / 6,
        marginLeft: screenWidth / 17.5,
        marginTop: -margin15,
    },
    progressBarText: {
        fontSize: margin10,
        color: theme().createBorder,
    },
    progressView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingTop: margin10,
        marginLeft: -margin10,
    },
    progressViewBar: {
        marginLeft: font12,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    progText: {
        fontSize: font12 + screenHeight / 400,
        color: theme().text,
        paddingBottom: margin5,
        fontWeight: 'bold',
    },
    drawerContent: {
        flex: 1,
        marginTop: margin10,
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
        marginLeft: margin15,
        flexDirection: 'row',
    },
    profileTitle: {
        marginLeft: margin10,
        color: theme().text,
        width: '100%',
    },
    profileCaption: {
        marginLeft: margin10,
        color: theme().text,
        width: '100%',
    },
    profileInfo: {
        //marginTop: 20,
        // marginBottom: 20,
        paddingLeft: margin20,
        color: theme().text,
    },
    preferences: {
        marginLeft: margin20,
        color: theme().text,
    },
    darkText: {
        fontSize: margin15,
        color: theme().text,
    },
    descTitle: {
        color: theme().text,
        fontWeight: 'bold',
    },
    description: {
        color: theme().text,
        marginLeft: width10,
    },
    postTitle: {
        color: theme().text,
        marginLeft: width10,
        width: '100%',
    },
    postCaption: {
        color: theme().text,
        marginLeft: width10,
        width: '100%',
    },
    postPic: {
        flexDirection: 'row',
    },
    postedComment: {
        color: theme().text,
        marginLeft: margin20,
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
        padding: screenHeight / 80,
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
        fontSize: screenHeight / 45,
        marginTop: 3,
        marginLeft: 3,
        color: theme().text,
        fontFamily: 'sans-serif',
    },
    buttonText: {
        fontSize: screenHeight / 60,
        color: theme().text,
    },
    smolbuttonStyle: {
        backgroundColor: theme().textBoxBack,
        borderWidth: 1,
        width: width50 * 3,
        borderColor: theme().text,
        borderRadius: margin20,
    },
    buttonStyle: {
        margin: screenHeight / 50,
        marginTop: screenHeight / 500,
        backgroundColor: theme().textBoxBack,
        borderWidth: 1,
        borderColor: theme().text,
        borderRadius: margin20,
    },
});

export const userProfileStyles = () => ({
    root: {
        flex: 1,
        backgroundColor: theme().background,
    },
    myCard: {
        marginTop: 3,
        padding: margin10,
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
        fontSize: textFont,
        color: theme().text,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
    },
    profileDetails: {
        borderBottomWidth: 1,
        borderBottomColor: theme().text,
        paddingBottom: margin10,
    },
    userTitle: {
        fontSize: titleFont,
        marginLeft: margin10,
        color: theme().text,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
    },
    userText: {
        fontSize: textFont,
        marginLeft: margin10,
        color: theme().text,
        fontFamily: 'sans-serif',
    },
    emailBox: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: theme().text,
        paddingBottom: margin10,
    },
    emailIcon: {
        size: iconSize,
        color: theme().iconColor,
    },
    myText: {
        fontSize: textFont,
        marginLeft: 3,
        color: theme().text,
        fontFamily: 'sans-serif',
    },
});

export const userProfileStyles2 = () => ({
    root: {
        flex: 1,
        backgroundColor: theme().background,
    },
    myCard: {
        marginTop: 3,
        padding: margin10,
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
        marginTop: hp('2%'),
        marginLeft: wp('3%'),
    },
    stats: {
        fontSize: textFont,
        color: theme().text,
        fontFamily: 'sans-serif',
        //fontWeight: 'bold',
        marginLeft: wp('12%'),
    },
    profileDetails: {
        // borderBottomWidth: 1,
        // borderBottomColor: theme().text,
        paddingBottom: margin10,
    },
    userTitle: {
        fontSize: textFont,
        marginLeft: wp('10%'),
        color: theme().text,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
    },
    userText: {
        fontSize: textFont,
        marginLeft: margin10,
        color: theme().text,
        fontFamily: 'sans-serif',
    },
    emailBox: {
        flexDirection: 'row',
        //borderBottomWidth: 1,
        // borderBottomColor: theme().text,
        fontFamily: 'sans-serif',
        marginLeft: wp('9%'),
        paddingBottom: margin10,
    },
    emailIcon: {
        size: iconSize,
        color: theme().iconColor,
    },
    myText: {
        fontSize: textFont,
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
        paddingVertical: hp('5%'),
    },
    ti: {
        //borderWidth: 2,
        padding: hp('0.7%'),
        width: '80%',
        borderRadius: margin10,
        //borderColor: '#241b19',
        //borderWidth:4,
        marginBottom: hp('1.7%'),
        color: theme().epText,
        backgroundColor: theme().epTextField,
    },
    savebtn: {
        padding: '3%',
        marginTop: margin15,
        backgroundColor: theme().epBtn,
        borderRadius: margin10,
    },
    img: {
        marginBottom: hp('1.5%'),
    },
    profilebtn: {
        marginBottom: margin15,
        padding: '3%',
        borderRadius: margin15,
        backgroundColor: theme().epBtn,
        marginBottom: hp('3.4%'),
    },
    te: {
        fontSize: textFont,
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
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 22
    },
    flairAlertBox: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    flairView: {
        //margin: 20,
        flex: 1,
        backgroundColor: theme().postColor,
        borderRadius: 20,
        width: '100%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    modalView: {
        margin: 20,
        backgroundColor: theme().modalBox,
        borderRadius: 20,
        borderWidth: 0,
        borderColor: theme().postColor,
        padding: 35,
        alignItems: 'center',
        shadowColor: theme().createBorder,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1,
        elevation: 5,
    },
    button: {
        borderRadius: 50,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#ffffff',
    },
    buttonClose: {
        backgroundColor: '#000000',
    },
    textStyle: {
        color: theme().modalButtonText,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        color: theme().modalText,
    },

    container: {
        flex: 1,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        padding: margin20,
        paddingTop: 0,
        marginTop: '20%',
    },
    container2: {
        flex: 1,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        padding: margin20,
        paddingTop: 0,
        marginTop: '10%',
    },
    textFieldDescription: {
        flex: 1,
        color: theme().text,
        backgroundColor: theme().createBackgroundText,
        height: screenHeight / 5,
        padding: margin10,
        textAlignVertical: 'top',
        fontSize: textFont,
    },
    textFieldTitle: {
        color: theme().text,
        maxHeight: margin20 * 4,
        padding: margin10,
        textAlignVertical: 'top',
        fontSize: textFont,
    },
    container3: {
        flex: 1,
        backgroundColor: theme().background,
        padding: 5,
    },
    flairC: {
        width: '100%',
        height: '30%',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // margin: 1000,
    },
    modalButtonn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 100,
        backgroundColor: theme().modalbutonBack,
    },
    titleC: {
        marginTop: margin20,
        height: margin20 * 2,
        borderColor: theme().text,
        borderWidth: 3,
        justifyContent: 'center',
        textAlignVertical: 'top',
        padding: margin10,
    },
    descC: {
        borderColor: theme().text,
        borderWidth: 3,
        padding: margin10,
        justifyContent: 'center',
        textAlignVertical: 'top',
    },
    modelBorder: {
        borderColor: theme().text,
        borderWidth: 1,
        padding: margin10,
        justifyContent: 'center',
        textAlignVertical: 'top',
        borderRadius: 20,
    },
    textArea: {
        height: height120,
        justifyContent: 'flex-start',
    },
    textFieldComment: {
        flex: 1,
        color: theme().text,
        backgroundColor: theme().createBackgroundText,
        padding: margin10,
        textAlignVertical: 'top',
    },
});

export const noobProfile = () => ({
    progressBarText: {
        fontSize: screenHeight / 40,
        color: theme().createBorder,
    },
    progressView: {
        display: 'flex',
        justifyContent: 'center',
    },
    progressViewBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: screenHeight / 80,
        marginLeft: screenHeight / 18,
    },
    progText: {
        display: 'flex',
        justifyContent: 'center',
        fontSize: screenHeight / 40,
        color: theme().text,
        fontWeight: 'bold',
    },
    alignProf: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: -screenHeight / 30,
    },
});

export const noobProfile2 = () => ({
    progressBarText: {
        fontSize: screenHeight / 40,
        color: theme().createBorder,
    },
    progressView: {
        display: 'flex',
        marginTop: hp('8%'),
        justifyContent: 'center',
    },
    progressViewBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: hp('5%'),
        paddingTop: screenHeight / 80,
        marginLeft: screenHeight / 18,
    },
    progText: {
        display: 'flex',
        justifyContent: 'center',
        fontSize: screenHeight / 40,
        color: theme().text,
        fontWeight: 'bold',
    },
    alignProf: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: -screenHeight / 30,
    },
});

export const flairStyles = () => ({
    container: {
        flex: 1,
        backgroundColor: theme().background,
        color: theme().text,
        padding: margin5,
        width: '100%',
        // zIndex: margin10,
    },
});
