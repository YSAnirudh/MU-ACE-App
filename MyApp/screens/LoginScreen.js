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
const LoginScreen = ({navigation, setIsLogin}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleLogin = () => {
        const userData = {
            email: email,
            password: pass,
        };
        var validate = validateLoginInput(userData);
        if (validate.isValid) {
            loginUser(userData, setIsLogin);
        } else {
            alert(validate.message);
        }
    };

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
