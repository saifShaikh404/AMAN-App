import {View, Text, Pressable, ScrollView} from 'react-native';
import React from 'react';
import styles from './style';
import AadharCard from '../../assets/profile/aadharCardIcon.svg';
import Phone from '../../assets/profile/phoneIcon.svg';
import Rupee from '../../assets/profile/rupeeIcon.svg';
import Cheveron from '../../assets/profile/chevronICon.svg';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Svg, {Path, Rect, G, Defs, ClipPath} from 'react-native-svg';

const EmployeeProfileScreen = () => {
  return (
    <View>
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
        {/* List */}
        <View style={[styles.listItem]}>
          <Phone
            style={{
              color: 'black',
              borderRadius: 50,
              width: 40,
              height: 40,
            }}
          />
          <Text style={styles.listText}>+91 1234567890</Text>
        </View>
        <View style={[styles.listItem]}>
          <AadharCard
            style={{
              color: 'black',
              borderRadius: 50,
              width: 40,
              height: 40,
            }}
          />
          <Text style={styles.listText}>XXXX XXXX XXXX</Text>
        </View>
        <View style={[styles.listItem]}>
          <Rupee
            style={{
              color: 'black',
              borderRadius: 50,
              width: 40,
              height: 40,
            }}
          />
          <Text style={styles.listText}>3900</Text>
          <Text style={{marginStart: 'auto'}}>Earned</Text>
        </View>
        <View style={[styles.listItem]}>
          <Rupee
            style={{
              color: 'black',
              borderRadius: 50,
              width: 40,
              height: 40,
            }}
          />
          <Text style={styles.listText}>3900</Text>
          <Text style={{marginStart: 'auto', color: 'red'}}>Advance</Text>
        </View>
        {/* List End*/}
        {/* CTA buttons */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: hp(2),
          }}>
          <Pressable style={[styles.button, styles.giveMoney]}>
            <Text style={{color: 'white'}}>Give Money</Text>
          </Pressable>
          <Pressable style={[styles.button, styles.addWork]}>
            <Text style={{color: 'white'}}>Add work</Text>
          </Pressable>
        </View>
        {/* CTA buttons end */}
        {/* Recent works */}
        <View>
          <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: hp(2)}}>
            Recent Works
          </Text>
          <View style={[styles.listItem]}>
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.listText}>490 ₹</Text>
              <Text>12/12/2021</Text>
            </View>
            <View style={{marginStart: 'auto'}}>
            <Text style={{height: 'full'}}>
                <Svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <G clip-path="url(#clip0_476_1148)">
                    <Path
                      d="M7.8728 2L17.8728 12L7.8728 22"
                      stroke="#000"
                      stroke-width="3"
                    />
                  </G>
                </Svg>
              </Text>
            </View>
          </View>
          <View style={[styles.listItem]}>
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.listText}>490 ₹</Text>
              <Text>12/12/2021</Text>
            </View>
            <View style={{marginStart: 'auto'}}>
            <Text style={{height: 'full'}}>
                <Svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <G clip-path="url(#clip0_476_1148)">
                    <Path
                      d="M7.8728 2L17.8728 12L7.8728 22"
                      stroke="#000"
                      stroke-width="3"
                    />
                  </G>
                </Svg>
              </Text>
            </View>
          </View>
        </View>
        {/* Recent works end */}
        {/* View All Btn */}
        <View style={{marginStart: 'auto', marginTop: hp(2)}}>
          <Pressable style={[styles.button, styles.addWork,]}>
            <Text style={{color: 'white'}}>
              View All
              <View style={{width:wp(5)}}></View>
              <Text style={{height: hp(1)}}>
                <Svg
                  width="12"
                  height="12"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <G clip-path="url(#clip0_476_1148)">
                    <Path
                      d="M7.8728 2L17.8728 12L7.8728 22"
                      stroke="#fff"
                      stroke-width="3"
                    />
                  </G>
                </Svg>
              </Text>
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default EmployeeProfileScreen;
