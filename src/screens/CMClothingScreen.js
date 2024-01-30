import React, { useState } from 'react'
import { Text, TouchableOpacity, View, ScrollView } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { universal, customer } from '../styles/style'
import { utils } from '../styles/utils';
import Dots from "../assets/dots.svg"

const CMClothingScreen = ({ navigation }) => {


  return (
    <View style={universal.main}>
      {/* Items  */}
      <View style={{
        marginVertical: hp(5)
      }}>
        <ScrollView>

        <View style={customer.container}>
          <Text style={utils.labelText}>Shirt</Text>
          <TouchableOpacity onPress={() => {}}>
            <Dots height={hp(2)} width={hp(2)} />
          </TouchableOpacity>

          {/* <View style={{
            position: 'absolute',
            backgroundColor: 'white',
            right: wp(10),
            width: wp(25),
            height: hp(10),
            elevation: 2,
            borderRadius: 5,
            zIndex: 99999,
            top: hp(4)
          }}>
              <TouchableOpacity>
                <Text style={utils.smallText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{position: "relative", zIndex: 999}}>
                <Text style={utils.smallText}>Delete</Text>
              </TouchableOpacity>
          </View> */}

        </View>

        <View style={customer.container}>
          <Text style={utils.labelText}>Pant</Text>
          <TouchableOpacity onPress={() => {}}>
            <Dots height={hp(2)} width={hp(2)} />
          </TouchableOpacity>
        </View>



      </ScrollView>
      </View>
    </View>
  )
}

export default CMClothingScreen
