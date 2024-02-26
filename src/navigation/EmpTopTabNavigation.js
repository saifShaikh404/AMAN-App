import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import CMAddScreen from '../screens/ClothingManagement/CMAddScreen';
import SimpleHeader from '../components/SimpleHeader';
import EmployeeScreen from '../screens/EmpManagement/EmployeeScreen';
const Tab = createMaterialTopTabNavigator();

function EmpTopTabNavigation({ navigation }) {
  return (
    <>
    <SimpleHeader title="Aman Tailors" navigation={navigation} ></SimpleHeader>
    <Tab.Navigator initialLayout="Employees" screenOptions={{
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
      <Tab.Screen name="Employees" component={EmployeeScreen} />
      <Tab.Screen name="Add" component={CMAddScreen} />
    </Tab.Navigator>
  </>
  );
}

export default EmpTopTabNavigation