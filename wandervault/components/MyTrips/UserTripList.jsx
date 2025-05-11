 import { View, Text, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import moment from 'moment'
import { useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors'
import UserTripCard from'./UserTripCard'
export default function UserTripList({userTrips}) {

  const router=useRouter();
  if (!userTrips || userTrips.length === 0) return null; 
    const LatestTrip = userTrips[0];
    const tripData = LatestTrip?.tripData || {};
  const travelPlan = LatestTrip?.travelPlan || {};
//   console.log('LatestTrip:', LatestTrip);
// console.log('\ntripData-location:', tripData.location);
  const imageUrl = travelPlan?.day1?.plan?.[0]?.placeImageUrl
    ? {uri: travelPlan.day1.plan[0].placeImageUrl}
    : require('./../../assets/images/logo1.jpeg');


  return (
    <View>
      <View style={{
        marginTop:20 
      }}>
        <Image
        source={imageUrl}
        style={{
          width: '100%',
          height: 240,
          borderRadius: 15,
        }}
        resizeMode="cover"
      />
            <View style={{marginTop:10}}>
                <Text style={{
                fontFamily:'outfit-medium',
                fontSize:20
              }}>{tripData?.location}</Text>
              <View style={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-between',marginTop:5
              }}>

              
           <Text style={{
            fontFamily:'outfit',
            fontSize:17,
            color:Colors.GRAY
           }}>{moment(LatestTrip.startDate).format('DD MMM yyyy')}</Text>
        <Text style={{
          fontFamily:'outfit',
          fontSize:17,
          color:Colors.GRAY
        }}>{tripData.traveler}</Text>
           
            </View>
            <TouchableOpacity 
            onPress={()=>router.push({pathname:'/trip-details',params:{
              trip:JSON.stringify(LatestTrip)

            }})}
             style={{
              backgroundColor:Colors.PRIMARY,
              padding:15,
              borderRadius:15,
              marginTop:10
            }}>
              <Text style={{
                color:Colors.WHITE,
                textAlign:'center',
                fontFamily:'outfit-medium',
                fontSize:15
              }}>See your Plan</Text>

            </TouchableOpacity>
        </View>
        {userTrips.slice(1).map((trip, index) => ( 
  <UserTripCard trip={trip} key={index + 1}/>))}
        </View>
    </View>
  )
}