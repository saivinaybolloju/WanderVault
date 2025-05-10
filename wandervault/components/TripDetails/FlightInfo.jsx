import { View, Text } from 'react-native'
import React from 'react'

export default function FlightInfo({FlightData}) {
  return (
    <View style={{
        marginTop:20,
        borderWidth:1,
        backgroundColor:Colors.LIGHT_GRAY,
        padding:10,
        borderRadius:15
    }}>
        <View style={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center'

        }}>
        <Text style={{
        fontFamily:'outfit-bold',
        fontsize:20

      }}>-Flights</Text>
        <TouchableOpacity style={{
        backgroundColor:Colors.PRIMARY,
        padding:5,
        width:100,
        borderRadius:7

      }}>
        <Text style={{
            textAlign:'center',
            color:Colors.WHITE,
            fontFamily:'outfit',
        }}>Book Here</Text>
      </TouchableOpacity>
        </View>
      
      <Text style={{
        fontFamily:'outfit',
        fontsize:17,
        marginTop:7


      }}
      >Airline:Delta</Text>
      <Text style={{
        fontFamily:'outfit',
        fontsize:17

      }}
      >Price: {flightData.price}</Text>
    
    </View>
  )
}