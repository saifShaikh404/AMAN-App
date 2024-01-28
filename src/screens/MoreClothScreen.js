import React, {useState} from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { universal, dropdown, forms, seperator } from '../styles/style'
import { utils } from '../styles/utils';
import SimpleHeader from '../components/SimpleHeader';
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import Ripple from 'react-native-material-ripple'


const data = [
    { label: 'Shirt', value: '1' },
    { label: 'Pant', value: '2' },
    { label: 'Kurta', value: '3' },
    { label: 'Kurti', value: '4' },
    { label: 'Belt-Lengha', value: '5' },
    { label: 'Nada-Lengha', value: '6' },
    { label: 'Elastic-Lengha', value: '7' },
    { label: 'Pathani', value: '8' },
    { label: 'Belt-Salvar', value: '8' },
    { label: 'Nada-Salvar', value: '8' },
    { label: 'Elastic-Salvar', value: '8' },
  ];

const MoreClothScreen = ({navigation}) => {

    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={universal.main}>
        {/* Back Button And header  */}
      <SimpleHeader navigation={navigation} title="More Clothes" />

      {/* Form  */}
      <View style={[forms.container, {paddingVertical: hp(1.5)}]}>
        <View style={forms.inputContainer}>
            <Text style={utils.labelText}>Measurements</Text>
            <Dropdown
                style={[dropdown.dropdown, isFocus && { borderColor: 'black' }]}
                placeholderStyle={dropdown.placeholderStyle}
                selectedTextStyle={dropdown.selectedTextStyle}
                data={data}
                itemTextStyle={{color: 'black'}}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={'Select item'}
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    setValue(item.value);
                    setIsFocus(false);
                }}
            />
        </View>

        {/* Next Page Button  */}
        <View style={[forms.inputContainer, {alignItems: 'flex-end'}]}>
            <TouchableOpacity style={universal.innerPageBtn3} onPress={() => navigation.navigate('Clothing')}>
                <ArrowRightIcon height={hp(3)} width={hp(3)} strokeWidth={hp(0.2)} color={'white'} />
            </TouchableOpacity>
        </View>

        {/* Seperator */}
        <View style={seperator.seperatorContainer}>
            <View style={seperator.seperator}></View>
            <Text style={[utils.labelText, {marginHorizontal: hp(2)}]}>or</Text>
            <View style={seperator.seperator}></View>
        </View>

        {/* Create Bill Button  */}
        <View style={universal.buttonConatiner}>
            <Ripple rippleColor={'white'} rippleDuration={1000} style={universal.themeButton} onPress={() => navigation.navigate('StitchBill')}>
                <Text style={utils.buttonText}>Create Bill?</Text>
                <ArrowRightIcon height={hp(2.5)} width={hp(2.5)} strokeWidth={hp(0.2)} style={{marginLeft: hp(0.8)}} color={'white'} />
            </Ripple>
        </View>

      </View>

    </View>
  )
}

export default MoreClothScreen
