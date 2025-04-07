import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

export default function OptionCard({option,selectedTraveler}) {
  return (
    <View style={[{
        padding:15,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        borderWidth:1,
        borderColor:Colors.GRAY,
        borderRadius:15

    },selectedTraveler===option.title&&{borderWidth:2,color:Colors.PRIMARY}]} >
        <View>
        <Text style={{
            fontSize:20,
            fontFamily:'outfit-medium',
            color:Colors.PRIMARY,
        }}>{option?.title}</Text>
        <Text style={{
            fontSize:15,
            color:Colors.GRAY,
            fontFamily:'outfit',
        }}>{option?.desc}</Text>
        </View>
        <Text style={{
            fontSize:25,
            
        }}>{option.icon}</Text>
    </View>
  )
}