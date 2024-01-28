import React from 'react'
import { Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { universal, forms } from '../styles/style'
import { utils } from '../styles/utils';
import SimpleHeader from '../components/SimpleHeader';
import { ArrowRightIcon } from 'react-native-heroicons/outline'

const ClothingScreen = ({navigation}) => {
  return (
    <View style={universal.main}>
        {/* Back Button And header  */}
      <SimpleHeader navigation={navigation} title="Shirt" />

      {/* Form  */}
      <View style={[forms.container, {paddingVertical: hp(1.5)}]}>
        <ScrollView>
        {/* Text Input  */}
        <View style={forms.inputContainer}>
          <Text style={utils.labelText}>Length</Text>
          <TextInput style={forms.textInput} placeholder='Enter Length' placeholderTextColor={'gray'}></TextInput>
        </View>

        {/* Text Input  */}
        <View style={forms.inputContainer}>
          <Text style={utils.labelText}>Chest</Text>
          <TextInput style={forms.textInput} placeholder='Enter Chest' placeholderTextColor={'gray'}></TextInput>
        </View>

        {/* Text Input  */}
        <View style={forms.inputContainer}>
          <Text style={utils.labelText}>Waist</Text>
          <TextInput style={forms.textInput} placeholder='Enter Waist' placeholderTextColor={'gray'}></TextInput>
        </View>

        {/* Text Input  */}
        <View style={forms.inputContainer}>
          <Text style={utils.labelText}>Hip</Text>
          <TextInput style={forms.textInput} placeholder='Enter Hip' placeholderTextColor={'gray'}></TextInput>
        </View>

        {/* Text Input  */}
        <View style={forms.inputContainer}>
          <Text style={utils.labelText}>Shoulder</Text>
          <TextInput style={forms.textInput} placeholder='Enter Shoulder' placeholderTextColor={'gray'}></TextInput>
        </View>

        {/* Text Input  */}
        <View style={forms.inputContainer}>
          <Text style={utils.labelText}>Sleeves</Text>
          <TextInput style={forms.textInput} placeholder='Enter Sleeves' placeholderTextColor={'gray'}></TextInput>
        </View>

        {/* Text Input  */}
        <View style={forms.inputContainer}>
          <Text style={utils.labelText}>Collar</Text>
          <TextInput style={forms.textInput} placeholder='Enter Collar' placeholderTextColor={'gray'}></TextInput>
        </View>

        </ScrollView>

      </View>

      <TouchableOpacity style={universal.innerPageBtn2} onPress={() => navigation.navigate('MoreCloth')}>
        <ArrowRightIcon height={hp(3)} width={hp(3)} strokeWidth={hp(0.2)} color={'white'} />
      </TouchableOpacity>

    </View>
  )
}

export default ClothingScreen
