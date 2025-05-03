import { View, Text } from 'react-native'
import React from 'react'
import moment from 'moment'

export default function UserTripCard({trip}) {
  const formatData=(data)=>{
    return JSON.parse(data);
  }
  return (
    <View style={{
        margin:15,
        display:'flex',
        flexdirection:'row',
        gap:10,
        alignItems:'center'
    }}>
      {/*<Image source={required('./../../assests/images/placeholder.jpeg')}
      style={{
        width:100,
        height:100,
        borderRadius:15
      }}
        />*/}
        <Image source={{uri:'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='+formatData(trip.tripData).locationInfo?.photoRef+'&key='+process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}}
                  style={{
                    width:'100%',
                      height:240,
                      objectFit:'cover',
                      borderRadius:15
        
                  }}/>
        <Text style={{
          fontFamily:'outfit-medium',
          fontSize:18,
        }}>{trip.tripPlan?.travelPlan?.location}</Text>
       <Text style={{
        fontFamily:'outfit',
        fontSize:14,
        color:Colors.GRAY
       }}>{moment(formatData(trip.tripData).startDate).format('DD MM yyyy')}</Text>
       <Text style={{
        fontFamily:'outfit',
        fontSize:14,
        color:Colors.GRAY
       }}>Travelling:{formatData(trip.tripData).traveler.title}</Text>
    </View>
  )
}