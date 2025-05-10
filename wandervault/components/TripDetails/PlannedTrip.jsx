
import { View, Text, Image } from 'react-native';
import React from 'react';
import Colors from '../constants/Colors'; // Adjust if you use a color file
import Ionicons from '@expo/vector-icons/Ionicons';

export default function PlannedTrip({ details }) {
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontSize: 20, fontFamily: 'outfit-bold' }}>
        🏕️Plan Details
      </Text>

      {Object.entries(details).reverse().map(([day, dayDetails], dayIndex) => (
        <View s
        >
          <Text
            style={{
              fontFamily: 'outfit-medium',
              fontSize: 20,
              marginTop: 20,
            }}
          >
            {day.charAt(0).toUpperCase() + day.slice(1)}
          </Text>

          {dayDetails.plan.map((place, index) => (
            <View style={{
              backgroundColor:Colors.LIGHT_BLUE,
                padding:10,
                borderRadius:15,
                borderColor:Colors.GRAY,
                marginTop
            }}>
              <Image
                source={require('./../../assets/images/placeholder.jpeg')}
                style={{
                  width: '100%',
                  height: 120,
                  borderRadius: 15,
                }}
              />
              <View style={{ marginTop: 5 }}>
                <Text
                  style={{
                    fontFamily: 'outfit-bold',
                    fontSize: 20,
                  }}
                >
                  {place?.placeName}
                </Text>
                <Text
                  style={{
                    fontFamily: 'outfit',
                    fontSize: 17,
                    color: Colors.GRAY,
                    marginTop:5
                  }}
                >
                  {place.placeDetails}
                </Text>
                <View style={{
                    display:'flex',
                    flexDirection:'row',
                    alignItems:'center',
                    justifyContent:'space-between'
                }}>
                    <View>
                <Text style={{
                    fontFamily:'outfit',
                    fontSize:17,
                    marginTop:5
                }}> 🎫Ticket Price:
                <Text style={{
                    fontFamily:'outfit-bold'
                }}> {place?.ticketPricing}</Text></Text>
                <Text style={{
                    fontFamily:'outfit',
                    fontSize:17,
                    marginTop:5
                }}>⏱️Time to Travel:<Text style={{
                    fontFamily:'outfit-bold'
                }}>{place?.timeToTravel}</Text></Text>
                </View>
                <TouchableOpacity style={{
                    backgroundColor:Colors.PRIMARY,
                    padding:8,
                    borderRadius:7

                }}>
                <Ionicons name="navigate" size={20} color="white" />
                </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}
