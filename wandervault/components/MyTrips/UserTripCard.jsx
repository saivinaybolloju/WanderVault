import { View, Text,Image } from 'react-native'
import React from 'react'
import moment from 'moment'
import { Colors } from '../../constants/Colors'

export default function UserTripCard({trip}) {
  
  const data =trip.tripData;
  if (!data) return null;
  return (
    <View style={{
        margin:15,
        display:'flex',
        flexDirection:'column',
        gap:10,
        alignItems:'center'
    }}>
      <Image source={require('./../../assets/images/logo1.jpeg')}
      style={{
        width:100,
        height:100,
        borderRadius:15
      }}
        />
        {data?.locationInfo?.photoRef && (
          <Image source={{uri:'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='+data?.locationInfo?.photoRef+'&key='+process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}}
                  style={{
                    width:'100%',
                      height:240,
                      
                      borderRadius:15
                  }}
                  resizeMode='cover'
          />
        )}
        <Text style={{
          fontFamily:'outfit-medium',
          fontSize:18,
        }}>{data?.travelPlan?.location || "Unknown"}</Text>
       <Text style={{
        fontFamily:'outfit',
        fontSize:14,
        color:Colors.GRAY
       }}>{moment(data?.startDate).format('DD MMM yyyy')}</Text>
       <Text style={{
        fontFamily:'outfit',
        fontSize:14,
        color:Colors.GRAY
       }}>Travelling: {data?.traveler?.title || 'Unknown'}</Text>
    </View>
  )
}