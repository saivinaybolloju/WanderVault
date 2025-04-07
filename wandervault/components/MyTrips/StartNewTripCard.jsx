import { View, Text } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '../../constants/Colors';
import { TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
export default function StartNewTripCard() {
  
    const router=useRouter();

    return (
    <View style={{
        padding:20,
        marginTop:50,
        display:'flex',
        alignItems:'center',
    }}>
      <Ionicons name="location-sharp" size={30} color="black" />
      <Text style={{
        fontSize:25,
        marginTop:10,
        gap:20,
        fontFamily:'outfit-medium'
      }}>No Trips Planned Yet !!</Text>

<Text style={{
        color:Colors.GRAY,
        fontSize:20,
        marginTop:10,
        gap:25,
        textAlign:'center',
        fontFamily:'outfit-medium'
      }}>Looks like its time to plan a new travel experience! Get Started below...</Text>
        <TouchableOpacity 
        onPress={()=>{router.push('/create-trip/search-place')}}
        style={{
            padding:10,
            backgroundColor:Colors.PRIMARY,
            borderRadius:15,
            paddingHorizontal:30,
            marginTop:50
        }}>
        <Text style={{
            color:Colors.WHITE,
            fontFamily:'outfit-medium',
            fontSize:17,
            
        }}>Start a new Trip</Text>
        </TouchableOpacity>

    </View>
  )
}