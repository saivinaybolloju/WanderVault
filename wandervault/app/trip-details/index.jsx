import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';
import { Colors } from '../../constants/Colors';
import moment from 'moment'

export default function TripDetails() {

  const navigation=useNAvigation();
  const {trip}=useLocalSearchParams();
  const [tripDetails,setTripDetails]=useState([]);
  const formatData=(data)=>{
    return JSON.parse(data);
  }

  useEffect(()=>{
    navigation.setOptions({
        headerShown:true,
        headerTranparent:true,
        headerTitle:''
    });
      setTripDetails(JSON.parse(trip))
  },[])

  return tripDetails&&(
    <View>
     <Image source={{uri:'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='+formatData(tripDetails?.tripData).locationInfo?.photoRef+'&key='+process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}}
                  style={{
                    width:'100%',
                      height:300,
                      
        
                  }}/>
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
                      {tripDetails?.tripPlan.travelPlan.location}
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
                           }}>{moment(formatData(tripDetails.tripData).startDate).format('DD MM yyyy')}</Text>
                           <Text style={{
                            fontFamily:'outfit',
                            fontSize:17,
                            color:Colors.GRAY
                           }}>- {moment(formatData(tripDetails.tripData).endDate).format('DD MM yyyy')}</Text>
                  </View>
                  <Text style={{
                            fontFamily:'outfit',
                            fontsize:17,
                            color:Colors.GRAY
                          }}>buspic{formatData(tripDetails.tripData)?.traveler?.title}</Text>
                  </View>s

                  {/*flight info */}

                  {/* hotels list*/}



                  Trip
    </View>
  )
}