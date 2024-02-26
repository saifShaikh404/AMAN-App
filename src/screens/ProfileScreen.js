import React, { useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { homepage,universal, profile } from '../styles/style'
import { utils } from '../styles/utils';
import Ripple from 'react-native-material-ripple';
import {ChevronRightIcon} from 'react-native-heroicons/outline'
import Ruppee from '../assets/profile/rupeeIcon.svg';
import Receipt from '../assets/profile/receiptIcon.svg';
import Report from '../assets/profile/reportIcon.svg';
import Employee from '../assets/profile/employeIcon.svg';


const ProfileScreen = ({ navigation }) => {
  return (
    <View style={universal.main}>

      {/* Header  */}
      <View style={profile.titleContainer}>
        <Text style={profile.titleText}>Aman Tailors</Text>
      </View>

      {/* Links  */}
      <View style={[universal.flex1, {marginTop: hp(3)}]}>

        <Ripple style={profile.linkContainer} onPress={() => navigation.navigate('Income')}>
          <View style={profile.linkText}>
            <Ruppee style={profile.svgStyle} width={hp(6)} height={hp(6)} />
            <Text style={utils.mediumText}>Income</Text>
          </View>
          <ChevronRightIcon style={profile.iconStyle} width={hp(2.5)} height={hp(2.5)} color={'black'} />
        </Ripple>

        <Ripple style={profile.linkContainer}>
          <View style={profile.linkText}>
            <Receipt style={profile.svgStyle} width={hp(6)} height={hp(6)} />
            <Text style={utils.mediumText}>Salary</Text>
          </View>
          <ChevronRightIcon style={profile.iconStyle} width={hp(2.5)} height={hp(2.5)} color={'black'} />
        </Ripple>

        <Ripple style={profile.linkContainer}>
          <View style={profile.linkText}>
            <Report style={profile.svgStyle} width={hp(6)} height={hp(6)} />
            <Text style={utils.mediumText}>Customer Mgmt.</Text>
          </View>
          <ChevronRightIcon style={profile.iconStyle} width={hp(2.5)} height={hp(2.5)} color={'black'} />
        </Ripple>

        <Ripple style={profile.linkContainer} onPress={() => navigation.navigate('EmpManagement')}>
          <View style={profile.linkText}>
            <Employee style={profile.svgStyle} width={hp(6)} height={hp(6)} />
            <Text style={utils.mediumText}>Employees Mgmt.</Text>
          </View>
          <ChevronRightIcon style={profile.iconStyle} width={hp(2.5)} height={hp(2.5)} color={'black'} />
        </Ripple>

        <Ripple style={profile.linkContainer} onPress={() => navigation.navigate('ClothingMgmt')}>
          <View style={profile.linkText}>
            <Employee style={profile.svgStyle} width={hp(6)} height={hp(6)} />
            <Text style={utils.mediumText}>Clothing Mgmt.</Text>
          </View>
          <ChevronRightIcon style={profile.iconStyle} width={hp(2.5)} height={hp(2.5)} color={'black'} />
        </Ripple>

      </View>


    </View>
  )
}

export default ProfileScreen
