import React from 'react';
import { SafeAreaView, Text, View, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SoldCustomerScreen from '../screens/SoldCustomerScreen';
import StitchCustomerScreen from '../screens/StitchCustomerScreen';
import GaajButtonScreen from '../screens/GaajButtonScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
      <Tab.Navigator screenOptions={{
              headerShown: false, 
              tabBarStyle: { backgroundColor: 'black', paddingTop: hp(1.5) }
          }}>
          <Tab.Screen name="Home" component={HomeScreen} options={{ 
                  tabBarLabel: "",
                  tabBarIcon: ({ focused }) => {
                    const iconSource = focused
                      ? require('../assets/logos/fill-homeIcon.png') 
                      : require('../assets/logos/hollow-homeIcon.png'); 
      
                    return (
                      <View style={focused ? styles.navigationStyle : null}>
                        <Image source={iconSource} />
                      </View>
                    );
                  },
              }}/>
          <Tab.Screen name="SoldCustomer" component={SoldCustomerScreen} options={{ 
                  tabBarLabel: "",
                  tabBarIcon: ({ focused }) => {
                    const iconSource = focused
                      ? require('../assets/logos/fill-peopleIcon.png') 
                      : require('../assets/logos/hollow-peopleIcon.png'); 
      
                      return (
                        <View style={focused ? styles.navigationStyle : null}>
                          <Image source={iconSource} />
                        </View>
                      );
                  },
              }}/>
          <Tab.Screen name="StitchCustomer" component={StitchCustomerScreen} options={{ 
                  tabBarLabel: "",
                  tabBarIcon: ({ focused }) => {
                    const iconSource = focused
                      ? require('../assets/logos/fill-sewingMachineIcon.png') 
                      : require('../assets/logos/hollow-sewingMachineIcon.png'); 
      
                      return (
                        <View style={focused ? styles.navigationStyle : null}>
                          <Image source={iconSource} />
                        </View>
                      );
                  },
              }}/>
          <Tab.Screen name="GaajButton" component={GaajButtonScreen} options={{ 
                  tabBarLabel: "",
                  tabBarIcon: ({ focused }) => {
                    const iconSource = focused
                      ? require('../assets/logos/fill-button.png') 
                      : require('../assets/logos/button.png'); 
      
                      return (
                        <View style={focused ? styles.navigationStyle : null}>
                          <Image source={iconSource} />
                        </View>
                      );
                  },
              }}/>
          <Tab.Screen name="Profile" component={ProfileScreen} options={{ 
                  tabBarLabel: "",
                  tabBarIcon: ({ focused }) => {
                    const iconSource = focused
                      ? require('../assets/logos/fill-userIcon.png') 
                      : require('../assets/logos/hollow-userIcon.png'); 
      
                      return (
                        <View style={focused ? styles.navigationStyle : null}>
                          <Image source={iconSource} />
                        </View>
                      );
                  },
              }}/>
      </Tab.Navigator>
  )
}

export default BottomTabNavigation


 let styles = StyleSheet.create({
  navigationStyle : {
      borderBottomColor: 'white',
      paddingBottom: hp(0.8),
      borderBottomWidth: 2
  },
  logoWidth: {
    height: hp(3),
    width: hp(3)
  }
 })