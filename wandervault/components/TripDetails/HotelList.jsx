import { View, Text, FlatList,Image } from 'react-native'
import React, { useEffect } from 'react'
import { GetPhotoRef } from '../../services/GooglePlaceApi'
import { useState } from 'react'

export default function HotelList({hotelList}) {
  const [photoRef,setPhotoRef]=useState();
  useEffect(()=>{
    GetGooglePhotoRef();
    console.log(JSON.stringify(hotelList,null,2));
  },[])
  const GetGooglePhotoRef=async()=>{
      const result = await GetPhotoRef("Tirupathi");
      // console.log("BIG ANSWER : "+JSON.stringify(result.places[0].photos[0]));
      const photoReference = result.places[0].photos[0].name.split('/photos/')[1];
      setPhotoRef(photoReference);
      }
  
const imageUrl = {uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photoRef}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`};

  return (
    <View style={{
        marginTop:20
    }}>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:20
      }}>Hotel Recommendation</Text>

      <FlatList
      data={hotelList}
      keyExtractor={(item, index) => index.toString()}
      style={{
        marginTop:8
      }}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      renderItem={({item})=>(
        <View style={{
            marginRight:20,
            width:180,
           

        }}>


          
            <Image source={imageUrl}
            style={{
                width:180,
                height:120,
                borderRadius:15,
            }}
                />
                
            <View style={{
                padding:5
            }} >
               <Text style={{
                fontFamily:'outfit-medium',
                fontSize:17,
                flex:1
               }}>{item.hotelName}</Text> 

               <View style={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-between'
               }}>
                <Text style={{
                    fontFamily:'outfit'
                }}>⭐{item.rating}</Text>
                <Text style={{
                    fontFamily:'outfit'
                }}>💰{item.price}</Text>

        </View>
        </View>
        </View>
      )}
      />
    </View>
  )
}