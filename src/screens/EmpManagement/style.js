import { StyleSheet } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

  
let styles = StyleSheet.create({
    filter: {
        backgroundColor: 'white',
        elevation: 2,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 8,
        padding: hp(0.5),
      }
})

export default styles;