import React, {useState} from 'react';
import LoginTxtF from '../components/LoginTxtF';
import LoginButton from '../components/LoginButton';
import OutlookBtn from '../components/OutlookBtn';
import {Picker} from '@react-native-picker/picker';
const {registerUser} = require('../actions/register');
const {validateRegisterInput} = require('../validation/registerValidation');
import {
    View,
    StyleSheet,
    Alert,
    Image,
    Text,
    TouchableOpacity,
} from 'react-native';

import {koushikMistake, theme} from '../constants/Styles';
import AlertStyled from '../components/Alert';

const Registration = ({navigation, isLoading, setIsLoading}) => {
    const [Firstname, setFirstname] = useState('');
    const [Lastname, setLastname] = useState('');

    const [Email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [dept, setDept] = useState('CSE');
    const [userType, setUserType] = useState('Student');

    const handleRegistration = () => {
        const userData = {
            firstName: Firstname,
            lastName: Lastname,
            email: Email,
            password: pass,
            department: dept,
            userType: userType,
        };
        var validate = validateRegisterInput(userData);
        if (validate.isValid) {
            registerUser(userData, navigation, isLoading, setIsLoading);
        } else {
            setAlert(true, validate.message);
        }
    };

    const setAlert = (bool, message) => {
        setAlertVisible(bool);
        setAlertMessage(message);
    };

    const [alertVisible, setAlertVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    return (
        <View style={koushikMistake().viewContainer}>
            <Image
                source={require('../assets/logo3.png')}
                style={koushikMistake().logo}
            />

            <Text style={koushikMistake().ForgotTxt}>Welcome To MU</Text>
            <LoginTxtF
                label="Firstname"
                placeholder="Firstname"
                icon="user"
                secureTextEntry={false}
                onChangeText={(text) => {
                    setFirstname(text);
                }}
            ></LoginTxtF>
            <LoginTxtF
                label="Lastname"
                placeholder="Lastname"
                icon="user"
                secureTextEntry={false}
                onChangeText={(text) => {
                    setLastname(text);
                }}
            ></LoginTxtF>

            <LoginTxtF
                label="Email"
                placeholder="Email"
                icon="mail"
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
            <View style={{display: 'flex', flexDirection: 'row'}}>
                <View style={koushikMistake().Tf}>
                    <Picker
                        selectedValue={dept}
                        style={koushikMistake().dept}
                        dropdownIconColor={theme().regIcon}
                        onValueChange={(itemValue, itemIndex) =>
                            setDept(itemValue)
                        }
                    >
                        <Picker.Item label="CSE" value="CSE" />
                        <Picker.Item label="MECH" value="MECH" />
                        <Picker.Item label="EEE" value="EEE" />
                        <Picker.Item label="CE" value="CE" />
                        <Picker.Item label="HS" value="HS" />
                        <Picker.Item label="MATH" value="MATH" />
                        <Picker.Item label="PHY" value="PHY" />
                        <Picker.Item label="CHEM" value="CHEM" />
                    </Picker>
                </View>
                <View style={koushikMistake().Tf}>
                    <Picker
                        selectedValue1={userType}
                        style={koushikMistake().dept}
                        dropdownIconColor={theme().regIcon}
                        onValueChange={(itemValue, itemIndex) =>
                            setUserType(itemValue)
                        }
                    >
                        <Picker.Item label="Student" value="Student" />
                        <Picker.Item label="Professor" value="Professor" />
                    </Picker>
                </View>
            </View>

            <View style={koushikMistake().buttonContainer}>
                <LoginButton
                    bname="SignUp"
                    onPress={() => {
                        handleRegistration();
                    }}
                ></LoginButton>

                <TouchableOpacity
                    style={koushikMistake().forgot}
                    onPress={() => {
                        navigation.navigate('Login');
                    }}
                >
                    <Text style={koushikMistake().ForgotTxt}>
                        Already a User? Login!
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
            </View>
        </View>
    );
};
export default Registration;
