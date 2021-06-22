import React, {useState} from 'react';
import LoginTxtF from '../components/LoginTxtF';
import LoginButton from '../components/LoginButton';
import OutlookBtn from '../components/OutlookBtn';
import {
    View,
    StyleSheet,
    Alert,
    Image,
    Text,
    TouchableOpacity,
} from 'react-native';
import {ThemeProvider} from '../components/Theme';
import {styles as noobStyles} from '../constants/Styles';
import Colors from '../constants/Colors';
const {loginUser} = require('../actions/loginuser');
const {validateLoginInput} = require('../validation/loginValidation');
import {koushikBigMistake} from '../constants/Styles';
import AlertStyled from '../components/Alert';

const LoginScreen = ({
    navigation,
    setIsLogin,
    setUserId,
    isLoading,
    setIsLoading,
}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const handleLogin = () => {
        const userData = {
            email: email,
            password: pass,
        };
        var validate = validateLoginInput(userData);
        if (validate.isValid) {
            loginUser(userData, setIsLogin, setUserId, isLoading, setIsLoading);
        } else {
            setAlert(!alertVisible, validate.message);
        }
    };

    const alerti = () => {
        setAlert(true, 'Email or Password is Invalid');
    };

    const setAlert = (bool, message) => {
        setAlertVisible(bool);
        setAlertMessage(message);
    };

    const [alertVisible, setAlertVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    return (
        <View style={koushikBigMistake().viewContainer}>
            <Image
                source={require('../assets/logo3.png')}
                style={koushikBigMistake().logo}
            />
            <LoginTxtF
                label="Email"
                placeholder="Email"
                icon="user"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={(text) => {
                    setEmail(text);
                }}
            ></LoginTxtF>
            <LoginTxtF
                label="Password"
                placeholder="Password"
                icon="lock"
                secureTextEntry={true}
                onChangeText={(text) => {
                    setPass(text);
                }}
            ></LoginTxtF>

            <View style={koushikBigMistake().buttonContainer}>
                <LoginButton
                    bname="Login"
                    onPress={() => {
                        handleLogin();
                    }}
                ></LoginButton>

                <TouchableOpacity
                    style={koushikBigMistake().forgot}
                    onPress={() => {
                        navigation.navigate('Register');
                    }}
                >
                    <Text style={koushikBigMistake().ForgotTxt}>
                        Not a User? Signup!
                    </Text>
                </TouchableOpacity>
                {alertVisible ? (
                    <AlertStyled
                        alertVisible={true}
                        alertMessage={alertMessage}
                        setAlertVisible={setAlertVisible}
                    />
                ) : (
                    <></>
                )}
                {/* <OutlookBtn 
      bname="Sign in with Outlook" 
      type="microsoft-outlook" 
      backgroundColor="#0072c6" 
      onPress={()=>{Alert.alert("Outlook")}}
      ></OutlookBtn> */}
            </View>
        </View>
    );
};

export default LoginScreen;
