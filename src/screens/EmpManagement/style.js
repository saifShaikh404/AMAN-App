import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

let spacer = wp(7);
let respWidth = wp(86);
let styles = StyleSheet.create({
  filter: {
    backgroundColor: 'white',
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 8,
    padding: hp(0.5),
  },
  container: {
    backgroundColor: 'white',
    width: respWidth,
    flexDirection: 'row',
    paddingVertical: hp(5),
    paddingHorizontal: wp(5),
    borderRadius: 15,
    alignItems: 'center',
    gap: wp(5),
  },
  listItem: {
    backgroundColor: 'white',
    width: respWidth,
    paddingVertical: hp(2),
    paddingHorizontal: wp(5),
    borderRadius: 15,
    gap: wp(5),
    marginTop: hp(2),
    flexDirection: 'row',
    alignItems: 'center',
  },
  listText: {
    fontSize: 20,
    color: 'black',
  },
  listIcon: {
    borderRadius: 50,
    width: wp(10),
    height: wp(10),
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  role: {
    fontSize: 20,
    color: 'grey',
  },
  avatar: {
    width: wp(20),
    height: wp(20),
    backgroundColor: 'lightgrey',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  giveMoney: {
    backgroundColor: 'red',
    border: '1px solid #FF7683'
  },
  addWork: {
    backgroundColor: 'black',
    border : '1px solid #484848'
  },
  button: {
    paddingVertical: hp(1),
    paddingHorizontal: wp(5),
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(6),
    
  },
  dropZoneContainer: {
    marginTop: hp(2),
    backgroundColor: 'white',
    padding: hp(5),
    borderRadius: 15,
    borderStyle: 'dashed',
    borderWidth: 1,
    display: 'flex',
    alignItems: 'center',
  },
});

export default styles;
