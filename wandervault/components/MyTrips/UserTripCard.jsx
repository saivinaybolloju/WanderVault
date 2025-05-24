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
  ? { uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${data?.photoRef}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}` }
  : require('./../../assets/images/logo1.jpeg');
  // console.log("THIs is Mine"+data?.photoRef);

  return (
    <>
    <ScrollView>
        <TouchableOpacity 
        onPress={()=>router.push({pathname:'/trip-details',params:{
                     trip:JSON.stringify(trip)}})}>
                    <View style={{
        margin:10,
        display:'flex',
        flexDirection:'row',
        gap:10,
        alignItems:'center'
    }}>
      <Image
              source={imageUrl}
              style={{
                width: 100,
                height: 100,
                borderRadius: 15,
              }}
              resizeMode="cover"
            />
        
        <View style={{display:'flex',flexDirection:'column',gap:4}}>
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
<View style={{
          display:'flex',
          flexDirection:'row',
          justifyContent:'flex-end'
}}>

</View>
            <TouchableOpacity 
                   onPress={()=>router.push({pathname:'/trip-details',params:{
                     trip:JSON.stringify(trip)
                   }})}
                    style={{
                     width:60,
                     height:17,
                     padding:3,
                     backgroundColor:Colors.PRIMARY,
                     color:Colors.WHITE,
                     borderRadius:10,
                     
                   }}>
                     <Text style={{
                       color:Colors.WHITE,
                       textAlign:'center',
                       fontFamily:'outfit-medium',
                       fontSize:9
                     }}>Know More</Text>
       
       </TouchableOpacity>


        </View>
        
       
        </View>
        </TouchableOpacity>
        
    </ScrollView>
   
   
    </>
    
    
  )
}