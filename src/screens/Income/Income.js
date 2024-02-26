import React, { useEffect } from 'react'
import { Text, View, TouchableOpacity  } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { universal, income } from '../../styles/style'
import { utils } from '../../styles/utils'
import Ripple from 'react-native-material-ripple'
import { ArrowLeftIcon } from 'react-native-heroicons/outline'

const Income = ({ navigation }) => {
  
  return (
    <View style={[universal.main, {backgroundColor: 'black'}]}>
        {/* previous screen button  */}
        <View style={[universal.insideHeader, {borderBottomColor: 'black'}]}>
            <TouchableOpacity style={universal.flex1} onPress={() => navigation.goBack()}>
                <ArrowLeftIcon height={hp(4)} width={hp(4)} color={'white'} />
            </TouchableOpacity>
            <View style={universal.flex1}>
            {/* Just For Nothing  */}
            </View>
        </View>

        {/* Monthly Income  */}
        <View style={income.monthly}>
            <Text style={utils.xslabelText}>Monthly income</Text>
            <Text style={utils.lgLabelText}>10k <Text style={utils.smLabeltext}>&#8377;</Text></Text>
        </View>

        <View style={income.container}>
          {/* Chart Section  */}
          <View style={income.chartSection}>

            <View style={universal.between}>
              <Text style={utils.mediumText}>Income</Text>
              <TouchableOpacity>
                <Text style={utils.labelText}> 
                   Jan
                </Text>
              </TouchableOpacity>
            </View>

            {/* Chart  */}
            <View style={income.chartContainer}>
              {/* pie chart  */}
              <View style={income.pieChartContainer}>

              </View>
            </View>

          </View>

          {/* Bills  */}
          {/* <View></View> */}
        </View>

    </View>
  )
}

export default Income
