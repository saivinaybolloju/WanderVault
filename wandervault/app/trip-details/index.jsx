import { View, Text, Image} from 'react-native'
import React, { useState, useEffect } from 'react';  
import { useNavigation } from '@react-navigation/native';
import { useLocalSearchParams } from 'expo-router';
import { Colors } from '../../constants/Colors';
import moment from 'moment'

export default function TripDetails() {

  const navigation=useNavigation();
  const {trip}=useLocalSearchParams();
  const [tripDetails,setTripDetails]=useState([]);
  // const formatData=(data)=>{
  //   return JSON.parse(data);
  // }

  useEffect(()=>{
    navigation.setOptions({
        headerShown:true,
        headerTransparent:true,
        headerTitle:''
    });
      setTripDetails(JSON.parse(trip))
  },[])

  const formattedTripData = trip?.tripData; 

  return (
    <View>
      {tripDetails&&(
        <>

        <Image source={{uri:'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='+ formattedTripData?.locationInfo?.photoRef+'&key='+process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}}
                  style={{
                    width:'100%',
                      height:300,
                      
        
                  }}
                  resizeMode='cover'/>
        <View style={{
                    padding:15,
                    backgroundColor:Colors.WHITE,
                    height:'100%',
                    marginTop:-30,
                    borderTopLeftRadius:30,
                    borderTopRightRadius:30

                  }}>
                    <Text style={{
                      fontSize:25,
                      fontFamily:'outfit-bold'
                    }}>
                      {tripDetails?.tripPlan?.travelPlan?.location||"Location not available"}
                    </Text>
                    <View style={{
                      display:'flex',
                      flexDirection:'row',
                      gap:5,
                      marginTop:5
                    }}>
                    <Text style={{
                            fontFamily:'outfit',
                            fontSize:18,
                            color:Colors.GRAY
                           }}>{moment(formattedTripData?.startDate).format('DD MMM yyyy')}</Text>
                           <Text style={{
                            fontFamily:'outfit',
                            fontSize:17,
                            color:Colors.GRAY
                           }}>- {moment(formattedTripData?.endDate).format('DD MMM yyyy')}</Text>
                  </View>
                  <Text style={{
                            fontFamily:'outfit',
                            fontsize:17,
                            color:Colors.GRAY
                          }}>buspic{formattedTripData?.traveler?.title||"Unknown"}
                          </Text>
        </View>
                  {/*flight info */}

                  {/* hotels list*/}  
        </>)}</View>
  )
}