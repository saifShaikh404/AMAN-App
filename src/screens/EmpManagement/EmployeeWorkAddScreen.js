import {View, Text, TextInput, ScrollView} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {utils} from '../../styles/utils';
import {forms, universal} from '../../styles/style';
import { PlusIcon } from 'react-native-heroicons/outline';

const EmployeeWorkAddScreen = () => {
  return (
    <View style={universal.main}>
      <ScrollView style={{width: wp(86), marginTop: hp(1)}}>
        {/* Avatar, Name, Role */}
        <View style={[styles.container]}>
          <View style={styles.avatar}>
            <Text>image</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'column'}}>
            <Text style={styles.name}>Altamas</Text>
            <Text style={styles.role}>Tailor</Text>
          </View>
        </View>
      </ScrollView>
      {/* Form  */}
      <ScrollView>
        <View style={[{marginBottom: hp(15), paddingVertical: hp(2)}]}>
          {/* Text Input  */}
          <View style={forms.inputContainer}>
            <Text style={utils.labelText}>Clothing Item n</Text>
            <Text style={utils.labelText}>Clothing Item Drop down</Text>
          </View>
          {/* Text Input */}
          <View style={forms.inputContainer}>
            <Text style={utils.labelText}>Shirt</Text>
            <TextInput
              style={forms.textInput}
              placeholder="Enter shirt qty."
              placeholderTextColor={'gray'}></TextInput>
          </View>
          {/* Text Input */}
          {/* Editable false */}
          <View style={forms.inputContainer}>
            <Text style={utils.labelText}>Earned</Text>
            <TextInput
              style={forms.textInput}
              placeholder="Enter Name"
              editable={false}
              placeholderTextColor={'gray'}></TextInput>
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

export default EmployeeWorkAddScreen;
