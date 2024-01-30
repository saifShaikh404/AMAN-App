import React, {useState} from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { universal, dropdown, forms } from '../styles/style'
import { utils } from '../styles/utils';
import SimpleHeader from '../components/SimpleHeader';
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import {Calendar, LocaleConfig} from 'react-native-calendars';

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

const MeasurementScreen = ({navigation}) => {

    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [selected, setSelected] = useState('');

  // Get today's date
  const today = new Date();

  // Calculate the date one day ahead of today
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowString = tomorrow.toISOString().split('T')[0];

  return (
    <View style={universal.main}>
        {/* Back Button And header  */}
      <SimpleHeader navigation={navigation} title="Measurements" />

      {/* Form  */}
    <View style={[forms.container, {paddingVertical: hp(1.5)}]}>
        {/* Text Input  */}
        <View style={forms.inputContainer}>
        <Text style={utils.labelText}>Name</Text>
        <TextInput style={forms.textInput} placeholder='Enter Name' placeholderTextColor={'gray'}></TextInput>
        </View>

        {/* Text Input  */}
        <View style={forms.inputContainer}>
        <Text style={utils.labelText}>Mobile Number</Text>
        <TextInput style={forms.textInput} placeholder='Enter Mobile' placeholderTextColor={'gray'}></TextInput>
        </View>

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
                autoScroll={false}
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

        <View style={forms.inputContainer}>
        <Text style={utils.labelText}>Delivery Date</Text>
            <Calendar
              style={{elevation: 1,borderWidth: 1, borderColor: '#d2d2d2', marginVertical: hp(1),}}
              onDayPress={day => {
                  setSelected(day.dateString);
                  console.log(day.dateString)
              }}
              markedDates={{
                  [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
              }}
              minDate={tomorrowString}
            />
        </View>

    </View>

      <TouchableOpacity style={universal.innerPageBtn2} onPress={() => navigation.navigate('Clothing')}>
        <ArrowRightIcon height={hp(3)} width={hp(3)} strokeWidth={hp(0.2)} color={'white'} />
      </TouchableOpacity>

    </View>
  )
}

export default MeasurementScreen