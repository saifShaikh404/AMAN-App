import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { universal } from '../styles/style'
import { ArrowLeftIcon } from 'react-native-heroicons/outline'
import { utils } from '../styles/utils';

const SimpleHeader = ({navigation, title }) => {
  return (
    <View style={universal.insideHeader}>
        <TouchableOpacity style={universal.flex1} onPress={() => navigation.goBack()}>
            <ArrowLeftIcon height={hp(4)} width={hp(4)} color={'black'} />
        </TouchableOpacity>

        <Text style={[utils.headingText, universal.flex3]}>{title}</Text>

        <View style={universal.flex1}>
        {/* Just For Nothing  */}
        </View>
    </View>
  )
}

export default SimpleHeader
