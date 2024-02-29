import {View, Text} from 'react-native';
import React from 'react';
import styles from './style';
import {G, Path, Svg} from 'react-native-svg';
import {heightPercentageToDP} from 'react-native-responsive-screen';

const EmployeeWorkDisplayScreen = () => {
  return (
    <View>
      {/* Date */}
      <Text
        style={{
          color: 'black',
          fontSize: 30,
          fontWeight: 'bold',
          backgroundColor: 'white',
          padding: 10,
          marginStart: 'auto',
        }}>
        24/09/2002
      </Text>
      {/* List */}
      <View>
        <View style={[styles.listItem]}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
            }}>
            <Text style={styles.listText}>Shirt</Text>
            <Text style={styles.listText}>20</Text>
            <Text style={styles.listText}>123 ₹</Text>
          </View>
        </View>
        <View style={[styles.listItem]}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
            }}>
            <Text style={styles.listText}>Shirt</Text>
            <Text style={styles.listText}>20</Text>
            <Text style={styles.listText}>123 ₹</Text>
          </View>
        </View>
        <View style={[styles.listItem]}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
            }}>
            <Text style={styles.listText}>Shirt</Text>
            <Text style={styles.listText}>20</Text>
            <Text style={styles.listText}>123 ₹</Text>
          </View>
        </View>
      </View>
      {/* Total */}
      <Text
        style={{
          textAlign: 'center',
          fontSize: heightPercentageToDP(3),
          marginTop: heightPercentageToDP(2),
          color: 'black',
        }}>
        {' '}
        Total : 123₹
      </Text>
    </View>
  );
};

export default EmployeeWorkDisplayScreen;
