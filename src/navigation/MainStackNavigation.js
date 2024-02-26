import * as React from 'react';
import { View, Text,SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, TransitionPresets } from '@react-navigation/native-stack';
import BottomTabNavigation from './BottomTabNavigation';
import AddSoldBillScreen from '../screens/AddSoldBillScreen';
import MeasurementScreen from '../screens/MeasurementScreen';
import ClothingScreen from '../screens/ClothingScreen';
import MoreClothScreen from '../screens/MoreClothScreen';
import StitchBillScreen from '../screens/StitchBillScreen';
import LoginScreen from '../screens/LoginScreen';
import EmpTopTabNavigation from './EmpTopTabNavigation';

const Stack = createNativeStackNavigator();

function MainStackNavigation() {
  return (
    <SafeAreaView style={{backgroundColor: '#DEDEDE', flex: 1}}>
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login' screenOptions={{
              headerShown: false,
              }}>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Main" component={BottomTabNavigation} />
                <Stack.Screen name="AddSoldBill" component={AddSoldBillScreen} />
                <Stack.Screen name="Measurements" component={MeasurementScreen} />
                <Stack.Screen name="Clothing" component={ClothingScreen} />
                <Stack.Screen name="MoreCloth" component={MoreClothScreen} />
                <Stack.Screen name="StitchBill" component={StitchBillScreen} />
                <Stack.Screen name="EmpManagement" component={EmpTopTabNavigation} />
            </Stack.Navigator>
        </NavigationContainer>
    </SafeAreaView>
  );
}

export default MainStackNavigation;