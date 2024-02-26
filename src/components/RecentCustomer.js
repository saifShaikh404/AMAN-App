import React from 'react'
import { Text, View, Image} from 'react-native';
import { homepage, recentCustomer } from '../styles/style'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {ChevronRightIcon} from "react-native-heroicons/outline"
import { utils } from '../styles/utils';
import Ripple from 'react-native-material-ripple'

const RecentCustomer = ({ name, phoneNumber, avatar, navigation = '', uri = '', data = '' }) => {

  const pageNavigation = () => {
    if(navigation != '' && uri != '' && data != ''){
      navigation.navigate(uri)
    } else if(navigation != '' && uri != ''){
      navigation.navigate(uri)
    }
  }

  return (
    // <View style={recentCustomer.container} >
      <Ripple rippleContainerBorderRadius={10} rippleFades={true} style={recentCustomer.container} onPress={pageNavigation}>
        <View style={recentCustomer.userDetail}>
          <Image style={recentCustomer.userDetailImage} source={{uri: avatar}} />
          <View style={recentCustomer.userDetailContent}>
              <Text style={utils.mediumText}>{name}</Text>
              <Text style={utils.smallGrayText}>{phoneNumber}</Text>
          </View>
        </View>
        <View>
          <ChevronRightIcon height={hp(2)} width={hp(2)} color={'black'} />
        </View>
      </Ripple>
    // </View>
  )
}

export default RecentCustomer
