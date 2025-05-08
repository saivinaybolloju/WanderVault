 import { View, Text, Image } from 'react-native'
import React from 'react'
import moment from 'moment'
import { TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors'
import UserTripCard from'./UserTripCard'
export default function UserTripList({userTrips}) {
  const LatestTrip=userTrips[0].tripData;
  const router=useRouter();
  if (!userTrips || userTrips.length === 0) return null; 
  return (
    <View>
      <View style={{
        marginTop:20 
      }}></View>
        <View>
           {LatestTrip?.locationInfo?.photoRef?
          <Image source={{uri:'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='+LatestTrip.locationInfo?.photoRef+'&key='+process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}}
          style={{
            width:'100%',
              height:240,
              
              borderRadius:15

          }}
          resizeMode="cover"/>
        
          :
            <Image
             source={require('./../../assets/images/logo1.jpeg')}
            style={{
              width:'100%',
              height:240,
              borderRadius:15
            }}
            resizeMode="cover"
            />}
            <View style={{marginTop:10}}>
                <Text style={{
                fontFamily:'outfit-medium',
                fontSize:20
              }}>{userTrips[0].tripPlan?.travelPlan?.location}</Text>
              <View style={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-between',marginTop:5
              }}>

              
           <Text style={{
            fontFamily:'outfit',
            fontSize:17,
            color:Colors.GRAY
           }}>{moment(LatestTrip.startDate).format('DD MM yyyy')}</Text>
        <Text style={{
          fontFamily:'outfit',
          fontSize:17,
          color:Colors.GRAY
        }}>{LatestTrip.traveler?.title || "Unknown"}</Text>
           
            </View>
            <TouchableOpacity 
            onPress={()=>router.push({pathname:'/trip-details',params:{
              trip:JSON.stringify(userTrips[0])

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