import { View, Text,Image} from 'react-native'
import React, { useContext } from 'react'
import { Colors } from '../../constants/Colors'
import {CreateTripContext} from '../../context/CreateTripContext'
export default function GenerateTrip() {
  const {tripData,setTripData}=useContext(CreateTripContext);
  return (
    <View style={{
        padding:25,
        paddingTop:200,
        backgroundColor:Colors.WHITE,
        height:"100%"
    }}>
      <Text style={{
        fontFamily:"outfit-bold",
        fontSize:35,
        marginTop:20,
        textAlign:'center'
      }}>Please Wait....</Text>
      <Text style={{
        fontFamily:"outfit",
        color:Colors.GRAY,
        fontSize:20,
        textAlign:'center',
        marginTop:10,
        marginBottom:20,
      }}>We are working to generate{'\n'} your dream trip</Text>

      <Image source={require('./../../assets/images/airport.gif')}
      style={{
        // display:'flex',
        // flexDirection:'row',
        // justifyContent:'space-evenly',
        width:"100%",
        height:200
      }}
      resizeMode='contain'/>
    </View>
  )
}