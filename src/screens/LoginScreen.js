import React, { useEffect } from 'react'
import { Text, View, Image, TextInput } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { login,universal } from '../styles/style'
import { utils } from '../styles/utils'
import WelcomeSVG from "../assets/main.svg"
import {PhoneIcon, LockClosedIcon, EyeIcon} from "react-native-heroicons/outline"
import Ripple from 'react-native-material-ripple'


const LoginScreen = ({ navigation }) => {

  return (
    <View style={[universal.main, {backgroundColor: '#1A120B'}]}>

        {/* spacer  */}
        <View style={{height: hp(30), width: wp(100)}}></View>

        <View style={login.container}>
            {/* logo  */}
            <View style={login.logoContainer}>
                <WelcomeSVG width={hp(8)} height={hp(6)} />
                <Text style={utils.mediumText}>Aman Tailors</Text>
            </View>

            {/* label  */}
            <View style={login.labelConatiner}>
                <Text style={utils.labelText}>Login with phone number</Text>
            </View>

            {/* login inputs  */}
            <View style={login.logoContainer}>
                <View style={login.loginInputsContainer}>
                    <PhoneIcon style={login.inputIcon} />
                    <TextInput style={login.loginInputs} placeholder='Enter Mobile Number' placeholderTextColor={'gray'} />
                </View>
                <View style={login.loginInputsContainer}>
                    <LockClosedIcon style={login.inputIcon} />
                    <TextInput style={login.loginInputs} placeholder='Enter Password' placeholderTextColor={'gray'} />
                    <EyeIcon style={login.inputIcon} />
                </View>

                {/* forgot password  */}
                <View style={{width: wp(75), alignItems: 'flex-end'}}>
                    <Text style={utils.smallText}>Forgot password?</Text>  
                </View>

            </View>

            {/* login button  */}
            <View style={login.btnConatiner}>
                <Ripple style={login.inputButton} onPress={() => navigation.navigate('Main')}>
                    <Text style={utils.labelWhiteText}>Login</Text>
                </Ripple>
            </View>

            {/* copyright  */}
            <View style={login.copyright}>
                <Text style={utils.smallText}> &copy; Aman Tailors & Cut-Pieces</Text>
            </View>

        </View>

    </View>
  )
}

export default LoginScreen
