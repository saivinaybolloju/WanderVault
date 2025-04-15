import { View, Text } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Colors } from '../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import StartNewTripCard from '../../components/MyTrips/StartNewTripCard';
export default function MyTrip() {
  const router=useRouter();
  const[userTrips,setuserTrips]=useState([]);

  return (
    <View style={{
      padding:25,
      paddingTop:55,
      backgroundColor:Colors.WHITE,
      height:'100%'
    }}>
      <View style={{
        display:'flex',
        flexDirection:'row',
        alignContent:'center',
        fontFamily:"output",
        justifyContent:'space-between'
      }}>
        <Text style={{
          fontFamily:'outfit-bold',
          fontSize:35
        }}>MyTrips</Text>
        <Ionicons onPress={()=>{router.push('/create-trip/search-place')}} name="add-circle-outline" size={40} color="black" />
      </View>
      {userTrips?.length==0?
        <StartNewTripCard/>:null
      }
    </View>
  )
}