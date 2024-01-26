import React from 'react'
import { Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { homepage } from '../styles/style'
import { utils } from '../styles/utils'
import WelcomeSVG from "../assets/main.svg"
import {MagnifyingGlassIcon} from "react-native-heroicons/outline"
import Ripple from 'react-native-material-ripple'
import RecentCustomer from '../components/RecentCustomer';

const HomeScreen = () => {
  return (
    <View style={homepage.main}>

      {/* logo  */}
      <View style={homepage.imageContainer}>
        <WelcomeSVG width={hp(8)} height={hp(6)} />
      </View>

      {/* Search Bar  */}
      <View style={homepage.searchContainer}>
        <TextInput style={homepage.searchBar} placeholder='Enter mobile number' placeholderTextColor={'gray'}></TextInput>
        <TouchableOpacity style={homepage.searchBtn}>
            <MagnifyingGlassIcon color={'black'} height={hp(4)} width={hp(4)} />
        </TouchableOpacity>
      </View>

      <ScrollView>

      {/* Recent Customer  */}
        <View style={homepage.recentContainer}>
          <Text style={utils.smallText}>Recent Customers</Text>

          {/* Recent Customer Details  */}
          <RecentCustomer />
          {/* Recent Customer Details  */}
          <RecentCustomer />


        </View>

        {/* Links  */}
        <View>
          <Ripple style={homepage.imageLinkContainer}>
            <Image style={homepage.imageLinks} source={require('../assets/homepage/stitchBill.png')}></Image>
          </Ripple>
          <Ripple style={homepage.imageLinkContainer}>
            <Image style={homepage.imageLinks} source={require('../assets/homepage/soldBill.png')}></Image>
          </Ripple>
          <Ripple style={homepage.imageLinkContainer}>
            <Image style={homepage.imageLinks} source={require('../assets/homepage/gaajBtn.png')}></Image>
          </Ripple>
          <Ripple style={homepage.imageLinkContainer}>
            <Image style={homepage.imageLinks} source={require('../assets/homepage/ringBtn.png')}></Image>
          </Ripple>
        </View>

      </ScrollView>
    </View>
  )
}

export default HomeScreen
