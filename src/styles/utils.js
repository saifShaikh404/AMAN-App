import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

let utils = StyleSheet.create({
    smallText: {
        color: 'black',
        fontWeight: '500',
        fontSize: hp(1.8)
    },
    smallGrayText: {
        color: 'gray',
        fontWeight: '500',
        fontSize: hp(1.8)
    },
    mediumText: {
        color: 'black',
        fontWeight: '700',
        fontSize: hp(2.5)
    },
    headingText: {
        color: 'black',
        fontWeight: '500',
        fontSize: hp(3),
        textAlign: 'center',
    },
    labelText: {
        color: 'black',
        fontSize: hp(2.2),
        fontWeight: '400',
    },
    labelWhiteText: {
        color: 'white',
        fontSize: hp(2.2),
        fontWeight: '400',
    },
    buttonText: {
        color: 'white',
        fontSize: hp(2.2),
        fontWeight: '400',
    }
})

export {utils}