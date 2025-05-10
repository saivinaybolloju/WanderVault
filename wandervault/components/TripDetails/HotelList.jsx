import { View, Text, FlatList } from 'react-native'
import React from 'react'

export default function HotelList({hotelList}) {
  return (
    <View style={{
        marginTop:20
    }}>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:20
      }}> emoji Hotel Recommendation</Text>

      <FlatList
      data={hotelList}
      style={{
        marginTop:8
      }}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      renderItem={({item,index})=>(
        <View style={{
            marginRight:20,
            width:180,
           

        }}>
            <Image source={required('./../../assests/images/placeHolder.jpeg')}
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