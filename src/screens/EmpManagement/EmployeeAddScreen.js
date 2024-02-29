import {View, Text, TextInput, ScrollView} from 'react-native';
import React, { useState } from 'react';
import {soldCustomer, universal, modal, forms} from '../../styles/style';
import styles from './style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {utils} from '../../styles/utils';
import {PlusIcon} from 'react-native-heroicons/outline';
import Ripple from 'react-native-material-ripple';
import {Path, Svg} from 'react-native-svg';

const EmployeeAddScreen = () => {
  const [role, setRole] = useState('');
  return (
    <View style={universal.main}>
      {/* Form  */}
      <ScrollView>
        <View
          style={[
            forms.container,
            {marginBottom: hp(15), paddingVertical: hp(2)},
          ]}>
          {/* Text Input  */}
          <View style={forms.inputContainer}>
            <Text style={utils.labelText}>Name</Text>
            <TextInput
              style={forms.textInput}
              placeholder="Enter Name"
              placeholderTextColor={'gray'}></TextInput>
          </View>

          {/* Text Input  */}
          <View style={forms.inputContainer}>
            <Text style={utils.labelText}>Phone number</Text>
            <TextInput
              style={forms.textInput}
              placeholder="Phone number"
              placeholderTextColor={'gray'}></TextInput>
          </View>

          {/* Text Input  */}
          <View style={forms.inputContainer}>
            <Text style={utils.labelText}>Aadhar Number</Text>
            <TextInput
              style={forms.textInput}
              placeholder="Aadhar Number"
              placeholderTextColor={'gray'}></TextInput>
          </View>

          {/* Text Input  */}
          <View style={forms.inputContainer}>
            <Text style={utils.labelText}>Role</Text>
            {/* checkBox */}
          </View>

          {/* Text Input  */}
          <View style={forms.inputContainer}>
            {role === 'HELPER' ? (
              <TextInput
                style={forms.textInput}
                placeholder="Aadhar Number"
                placeholderTextColor={'gray'}></TextInput>
            ) : null}
            {/* checkBox */}
          </View>

          {/* Files drop  */}
          <View style={styles.dropZoneContainer}>
            <Svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <Path
                d="M17.7822 9.00195C19.9572 9.01395 21.1352 9.11095 21.9032 9.87895C22.7822 10.758 22.7822 12.172 22.7822 15V16C22.7822 18.829 22.7822 20.243 21.9032 21.122C21.0252 22 19.6102 22 16.7822 22H8.78223C5.95423 22 4.53923 22 3.66123 21.122C2.78223 20.242 2.78223 18.829 2.78223 16V15C2.78223 12.172 2.78223 10.758 3.66123 9.87895C4.42923 9.11095 5.60723 9.01395 7.78223 9.00195"
                stroke="#000"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <Path
                d="M12.7822 15V2M12.7822 2L15.7822 5.5M12.7822 2L9.78223 5.5"
                stroke="#000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
            <Text style={[forms.dropZoneBtnText, {marginVertical: hp(2)}]}>
              Browse Files
            </Text>
            <Text style={forms.dropZoneBtnText}>
              upload the employee profile
            </Text>
          </View>
        </View>
      </ScrollView>

      <View style={universal.innerPageBtn}>
        <PlusIcon
          height={hp(4)}
          width={hp(4)}
          strokeWidth={hp(0.4)}
          color={'white'}
        />
      </View>
    </View>
  );
};

export default EmployeeAddScreen;
