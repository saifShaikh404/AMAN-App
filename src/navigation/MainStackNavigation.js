import * as React from 'react';
import { View, Text,SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigation from './BottomTabNavigation';
import AddSoldBillScreen from '../screens/AddSoldBillScreen';
import MeasurementScreen from '../screens/MeasurementScreen';
import ClothingScreen from '../screens/ClothingScreen';
import MoreClothScreen from '../screens/MoreClothScreen';
import StitchBillScreen from '../screens/StitchBillScreen';

const Stack = createNativeStackNavigator();

function MainStackNavigation() {
  return (
    <SafeAreaView style={{backgroundColor: '#F2F2F2', flex: 1}}>
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Main' screenOptions={{headerShown: false}}>
                <Stack.Screen name="Main" component={BottomTabNavigation} />
                <Stack.Screen name="AddSoldBill" component={AddSoldBillScreen} />
                <Stack.Screen name="Measurements" component={MeasurementScreen} />
                <Stack.Screen name="Clothing" component={ClothingScreen} />
                <Stack.Screen name="MoreCloth" component={MoreClothScreen} />
                <Stack.Screen name="StitchBill" component={StitchBillScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    </SafeAreaView>
  );
}

export default MainStackNavigation;