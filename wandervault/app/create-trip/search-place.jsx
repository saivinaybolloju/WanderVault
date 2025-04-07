import { View, Text,TouchableOpacity } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { useRouter, useNavigation } from 'expo-router'
import { Colors } from '../../constants/Colors';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import 'react-native-get-random-values';
import {CreateTripContext} from '../../context/CreateTripContext';

export default function SearchPlace() {
    const navigation=useNavigation();
    const {tripData,setTripData}=useContext(CreateTripContext)
    const router=useRouter();
    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTransparent:true,
            headerTitle:'Search',

        })
    },[])

    useEffect(()=>{
      console.log(tripData);
    },[tripData])
  return (
    <View style={{
        padding:25,
        paddingTop:75,
        backgroundColor:Colors.WHITE,
        height:'100%'
    }}>


      <View>
        
      </View>
      <GooglePlacesAutocomplete
      placeholder='Search Place'
      fetchDetails={true}
      
      styles={{
        textInputContainer:{
          borderWidth:1,
          borderRadius:5,
          marginTop:25,
        }
      }}
    />

      <TouchableOpacity 
              onPress={()=>{}}
              style={{
                  padding:15,
                  backgroundColor:Colors.PRIMARY,
                  borderRadius:15,
                  marginTop:20
              }}>
                  <Text onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
            setTripData({
              locationInfo:{
                name:data.description,
                coordinates:details?.geometry.location,
                photoRed:details?.photos[0]?.photoreference,
                url:details?.url
              }
            })
    
            router.push('/create-trip/select-traveler')
    
          }}
          query={{
            key:'',
            language: 'en',
          }}
                  style={{
                      textAlign:'center',
                      color:Colors.WHITE,
                      fontFamily:'outfit',
                      fontSize:20,
      
                      
                  }}>
                      Continue
                  </Text>
              </TouchableOpacity>
    {/* <View style={{
      padding:15,
      display:'flex',
      flexDirection:'row',
      justifyContent:'center',
      borderWidth:1,
      backgroundColor:Colors.PRIMARY,
      marginTop:0,
      fontFamily:'opacity',
      borderRadius:25,
    }}>
      <Text style={{
        color:Colors.WHITE,
        alignItems:'center',
        fontFamily:'opacity-bold'
      }}
      
      >
        Continue
      </Text>
    </View> */}
    </View>
  )
}