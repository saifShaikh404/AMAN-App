import React, {useEffect, useState} from 'react';
import {Text, View, TouchableOpacity, Button, ScrollView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {soldCustomer, universal, modal} from '../../styles/style';
import RecentCustomer from '../../components/RecentCustomer';
import {utils} from '../../styles/utils';
import {PlayIcon, XMarkIcon} from 'react-native-heroicons/solid';
import Modal from 'react-native-modal';
import styles from './style';
import EmployeeProfileScreen from './EmployeeProfileScreen';
import EmployeeWorkDisplayScreen from './EmployeeWorkDisplayScreen';
import EmployeeWorkAddScreen from './EmployeeWorkAddScreen';

const EmployeeScreen = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={universal.main}>
      {/* Recent Customer  */}
      <View style={soldCustomer.recentContainer}>
        {/* Filter  */}
        {/* <View style={{width: wp(84), marginVertical:hp(1) , alignItems: 'flex-end'}}>
            <TouchableOpacity style={styles.filter} onPress={toggleModal}>
                <PlayIcon color={'black'} height={hp(1.8)} style={{transform: [{ rotate: '90deg' }]}}></PlayIcon>
                <Text style={[utils.smallText, {paddingRight: hp(0.8)}]}>All</Text>
            </TouchableOpacity>
        </View> */}

        {/* Cards  */}
        {/* <ScrollView style={{width: wp(86), height: hp(69), marginTop: hp(1)}}> */}
        <ScrollView style={{width: wp(86), marginTop: hp(1)}}>
          {/* <EmployeeProfileScreen /> */}
          {/* <EmployeeWorkDisplayScreen /> */}
          <EmployeeWorkAddScreen />
          {/* <RecentCustomer
                key={1}
                navigation = {navigation}
                name={'Saif'}
                phoneNumber={'Helper'}
                avatar={''}
            />
            <RecentCustomer
                key={1}
                navigation = {navigation}
                name={'Altamas'}
                phoneNumber={'Nalla'}
                avatar={''}
            /> */}
          {/* </ScrollView> */}
        </ScrollView>
      </View>

      <Modal
        isVisible={isModalVisible}
        onBackdropPress={toggleModal} // Close the modal when the backdrop is pressed
        style={{justifyContent: 'flex-end', margin: 0}} // Positions the modal at the bottom
        animationIn="slideInUp" // Animates the modal in from the bottom
        animationOut="slideOutDown" // Animates the modal out towards the bottom
      >
        <View style={modal.bottomMidModal}>
          {/* Heading  */}
          <View style={modal.modalHeading}>
            <Text style={utils.mediumText}>Select Type</Text>
            <TouchableOpacity onPress={toggleModal}>
              <XMarkIcon color={'black'} height={hp(3)} />
            </TouchableOpacity>
          </View>

          {/* Labels  */}
          <View style={{marginVertical: hp(1)}}>
            <View>
              <Text>All</Text>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default EmployeeScreen;
