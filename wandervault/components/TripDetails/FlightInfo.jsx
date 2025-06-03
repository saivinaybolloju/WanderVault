import { View, Text,TouchableOpacity,Linking } from 'react-native'
import {Colors} from "../../constants/Colors"
import { useEffect } from 'react';

export default function FlightInfo({flightData}) {
    useEffect(()=>{
      // console.log("New",flightData);
    });

  if(!flightData){
    return (
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontFamily: 'outfit', fontSize: 17, color: 'red' }}>
          No flight data available.
        </Text>
      </View>
    );
  }
  const handleBooking = async () => {
    if (flightData.bookingUrl) {
    const supported = await Linking.canOpenURL(flightData.bookingUrl);
    if (supported) {
      Linking.openURL(flightData.bookingUrl);
    } else {
      alert("Can't open this URL.");
    }
  }
  };
  return (
    <View style={{
        marginTop:20,
        backgroundColor:Colors.LIGHT_GRAY,
        padding:10,
        borderBottomWidth:1
    }}>
      
        <View style={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center'

        }}>
        <Text style={{
        fontFamily:'outfit-bold',
        fontSize:20

      }}>Flights</Text>
        <TouchableOpacity 
        onPress={handleBooking}
        style={{
        backgroundColor:Colors.PRIMARY,
        padding:5,
        width:100,
        borderRadius:7

      }}>
        <Text style={{
            textAlign:'center',
            color:Colors.WHITE,
            fontFamily:'outfit',
        }}>Book Here</Text>
      </TouchableOpacity>
        </View>
      
      <Text style={{
        fontFamily:'outfit',
        fontSize:17,
        marginTop:7


      }}
      >Airline:{flightData.airline}</Text>
      <Text style={{
        fontFamily:'outfit',
        fontSize:17

      }}
      >Price: {flightData.price}</Text>
    
    </View>
  )
}