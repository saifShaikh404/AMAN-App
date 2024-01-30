import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import CMClothingScreen from '../screens/CMClothingScreen';
import CMAddScreen from '../screens/CMAddScreen';
import SimpleHeader from '../components/SimpleHeader';
const Tab = createMaterialTopTabNavigator();

function CMTopTabNavigation({ navigation }) {
  return (
    <>
    <SimpleHeader title="Aman Tailors" navigation={navigation} ></SimpleHeader>
    <Tab.Navigator initialLayout="Clothing"   screenOptions={{
        tabBarLabelStyle: {
          textTransform: 'none',
          fontSize: hp(2.2),
          color: 'white'
        },
        tabBarStyle: {
            backgroundColor: 'black',
        },
        tabBarIndicatorStyle: {
            backgroundColor: 'white',
        },
        tabBarPressColor: 'rgba(255, 255, 255, 0.2)', // Your desired ripple color
      }}
      >
      <Tab.Screen name="Clothing" component={CMClothingScreen} />
      <Tab.Screen name="Add" component={CMAddScreen} />
    </Tab.Navigator>
  </>
  );
}

export default CMTopTabNavigation