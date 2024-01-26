import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

let homepage = StyleSheet.create({
    main: {
        flex: 1,

    },
    imageContainer: {
        alignItems: 'center',
        width: wp(100),
        paddingTop: hp(1),
        paddingBottom: hp(1),
    },
    searchContainer: {
        position: 'relative',
    },
    searchBar: {
        backgroundColor: 'white',
        marginHorizontal: wp(7),
        borderRadius: 50,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.25,
        shadowRadius: 1.84,
        elevation: 2,
        paddingHorizontal: wp(3),
        color: 'black',
        fontSize: hp(2)
    },
    searchBtn: {
        position: 'absolute',
        right: wp(9),
        top: hp(1),
        backgroundColor: '#F2F2F2',
        padding: hp(0.7),
        borderRadius: 50 
    },
    recentContainer: {
        width: wp(100),
        marginHorizontal: wp(7),
        paddingVertical: hp(2)
    },
    imageLinkContainer: {
        width: wp(86),
        height: hp(13),
        marginHorizontal: wp(7),
        marginBottom: hp(2)
    },
    imageLinks: {
        width: "100%",
        height: hp(13),
    }
})

let recentCustomer = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        justifyContent: 'space-between',
        paddingHorizontal: hp(2),
        flexDirection: 'row',
        paddingVertical: hp(1.5),
        width: wp(86),
        borderRadius: 12,
        alignItems: 'center',
        marginVertical: hp(1)
    },
    userDetail: {
        flexDirection: 'row',
    },
    userDetailImage: {
        height: hp(6),
        width: hp(6)
    },
    userDetailContent: {
        marginHorizontal: hp(1.5)
    }
})

export {homepage, recentCustomer}