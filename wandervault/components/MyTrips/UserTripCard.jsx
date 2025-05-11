import { View, Text,Image,TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import moment from 'moment'
import { useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors'

export default function UserTripCard({trip}) {
  const router=useRouter();
  const data =trip.tripData;
  if (!data) return null;
  const imageUrl = data?.photoRef
  ? { uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${data.photoRef}&key=${process.env.EXPO_PUBLIC_GEMINI_AI_KEY}` }
  : require('./../../assets/images/logo1.jpeg');

  return (
    <>
   
        <View style={{
        margin:15,
        display:'flex',
        flexDirection:'column',
        gap:2,
        alignItems:'center'
    }}>
      <Image source={require('./../../assets/images/logo1.jpeg')}
      style={{
        width:100,
        height:100,
        borderRadius:15
      }}
        />
        
        <Text style={{
          fontFamily:'outfit-medium',
          fontSize:18,
        }}>{data?.location ||"Use Maps API-UserTripCard"}</Text>
       <Text style={{
        fontFamily:'outfit',
        fontSize:14,
        color:Colors.GRAY
       }}>{moment(data?.startDate).format('DD MMM yyyy')}</Text>
       <Text style={{
        fontFamily:'outfit',
        fontSize:14,
        color:Colors.GRAY
       }}>Travelling: {data?.traveler || 'Use Maps API-UserTripCard'}</Text>
       <TouchableOpacity 
                   onPress={()=>router.push({pathname:'/trip-details',params:{
                     trip:JSON.stringify(trip)
       
                   }})}
                    style={{
                     backgroundColor:Colors.PRIMARY,
                     padding:10,
                     borderRadius:10,
                     
                   }}>
                     <Text style={{
                       color:Colors.WHITE,
                       textAlign:'center',
                       fontFamily:'outfit-medium',
                       fontSize:15
                     }}>Know More</Text>
       
                   </TouchableOpacity>
    </View>
   
    </>
    
    
  )
}