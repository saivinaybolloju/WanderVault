import { View, Text,Image} from 'react-native'
import React, { useContext } from 'react'
import { Colors } from '../../constants/Colors'
import {CreateTripContext} from '../../context/CreateTripContext'
export default function GenerateTrip() {
  const {tripData,setTripData}=useContext(CreateTripContext);
  return (
    <View style={{
        padding:25,
        marginTop:75,
        backgroundColor:Colors.WHITE,
        height:"100%"
    }}>
      <Text style={{
        fontFamily:"outfit-bold",
        fontSize:35,
        textAlign:'center'
      }}>Please wait....</Text>
      <Text style={{
        fontFamily:"outfit",
        color:Colors.GRAY,
        fontSize:20,
        textAlign:'center',
        marginTop:20
      }}>We are working to generate your dream trip</Text>

      <Image source={require('./../../assets/images/airport.gif')}
      style={{
        // display:'flex',
        // flexDirection:'row',
        // justifyContent:'space-evenly',
        width:"100%",
        height:200,
        objectFit:'contain'

      }}>

      </Image>


    </View>
  )
}