import React from 'react'
import { Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { universal, forms } from '../styles/style'
import { utils } from '../styles/utils';
import SimpleHeader from '../components/SimpleHeader';
import { PlusIcon } from 'react-native-heroicons/outline'
import Ripple from 'react-native-material-ripple'


const CMAddScreen = () => {
  return (
    <View style={universal.main}>

      {/* Form  */}
      <ScrollView>
        <View style={[forms.container, {marginBottom: hp(15),paddingVertical: hp(2),}]}>
            {/* Text Input  */}
            <View style={forms.inputContainer}>
                <Text style={utils.labelText}>Name</Text>
                <TextInput style={forms.textInput} placeholder='Enter Name' placeholderTextColor={'gray'}></TextInput>
            </View>

            {/* Text Input  */}
            <View style={forms.inputContainer}>
                <Text style={utils.labelText}>Stitching Amount <Text style={[utils.labelText, {color: 'gray'}]}>(Customers)</Text></Text>
                <TextInput style={forms.textInput} placeholder='Stitching Amount' placeholderTextColor={'gray'}></TextInput>
            </View>

            {/* Text Input  */}
            <View style={forms.inputContainer}>
                <Text style={utils.labelText}>Stitching Amount <Text style={[utils.labelText, {color: 'gray'}]}>(Tailors)</Text></Text>
                <TextInput style={forms.textInput} placeholder='Stitching Amount' placeholderTextColor={'gray'}></TextInput>
            </View>

            {/* Text Input  */}
            <View style={forms.inputContainer}>
                <Text style={utils.labelText}>Cutting Amount</Text>
                <TextInput style={forms.textInput} placeholder='Enter Cutting Amount' placeholderTextColor={'gray'}></TextInput>
            </View>

            {/* Text Input  */}
            <View style={forms.inputContainer}>
                <Text style={utils.labelText}>Measurement</Text>
                <View style={forms.inputWithBtn}>
                    <TextInput style={forms.textInput2} placeholder='Enter Measurement' placeholderTextColor={'gray'}></TextInput>
                    <Ripple style={forms.inputButton}>
                        <Text style={utils.labelWhiteText}>Add</Text>
                    </Ripple>
                </View>
            </View>

            

        </View>
      </ScrollView>

      <View style={universal.innerPageBtn}>
        <PlusIcon height={hp(4)} width={hp(4)} strokeWidth={hp(0.4)} color={'white'} />
      </View>

    </View>
  )
}

export default CMAddScreen
