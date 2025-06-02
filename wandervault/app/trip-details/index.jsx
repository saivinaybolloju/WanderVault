import { View, Text, Image, ScrollView, Linking} from 'react-native'
import React, { useState, useEffect } from 'react';  
import { useNavigation } from '@react-navigation/native';
import { useLocalSearchParams } from 'expo-router';
import FlightInfo from './../../components/TripDetails/FlightInfo';
import HotelList from '../../components/TripDetails/HotelList';
import PlannedTrip from '../../components/TripDetails/PlannedTrip';
import { Colors } from '../../constants/Colors';
import moment from 'moment'
import { GetPhotoRef } from '../../services/GooglePlaceApi';
import { setImageUrl } from '../../services/imageUrl';

export default function TripDetails() {
  const [photoRef,setPhotoRef]=useState();

  const navigation=useNavigation();
  const {trip}=useLocalSearchParams();
  const [tripDetails,setTripDetails]=useState(null);
  const [loading, setLoading] = useState(true);
  
  // const formatData=(data)=>{
  //   return JSON.parse(data);
  // }
  
  useEffect(()=>{
    navigation.setOptions({
        headerShown:true,
        headerTransparent:true,
        headerTitle:''
    });
    if(trip){
       try {
        const parsedTrip=JSON.parse(trip);
        // console.log("Received trip data: ", parsedTrip); 
        // console.log("THIS IS ANS1 " + parsedTrip);
      // console.log("THIS IS ANS2 " + parsedTrip.tripData.location);
      setTripDetails(parsedTrip);
      setLoading(false);
    } catch (error) {
      console.error('Error parsing trip data:', error);
    }
    }
      
  },[])

    useEffect(() => {
  if (tripDetails?.tripData?.location) {
    GetGooglePhotoRef(tripDetails.tripData.location);
  }
}, [tripDetails]);

    const GetGooglePhotoRef=async(location)=>{
      const result = await GetPhotoRef(location);
      // console.log("BIG BIG ANSWER : "+JSON.stringify(result.places[0].photos[0]));
      const photoReference = result.places[0].photos[0].name.split('/photos/')[1];
      setPhotoRef(photoReference);
      // setImageUrl(photoReference);
    }
const imageUrl = {uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photoRef}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`};
  
if (loading || !tripDetails) {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontFamily: 'outfit', fontSize: 18 }}>Loading trip...</Text>
    </View>
  );
}
  const data=tripDetails.tripData||{};
  // const photoRef = data.photoRef;
  // const imageUrl = photoRef
  //   ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photoRef}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`
  //   : require('./../../assets/images/logo1.jpeg');
    // console.log("Hello Worldd",data);
    // console.log("photoRef",photoRef);
    // console.log("Hello2 ",tripDetails);
    // console.log("Hello 3",tripDetails.tripData);

  return (
    <View style={{ flex: 1 }}>
      
        <ScrollView>

        <Image source={imageUrl}
                  style={{
                    width:'100%',
                      height:300,
                  }}
                  resizeMode='cover'
        />
        <View style={{
                    padding:20,
                    backgroundColor:Colors.WHITE,
                    marginTop:-30,
                    borderTopLeftRadius:30,
                    borderTopRightRadius:30

                  }}>
                    <Text style={{
                      fontSize:22,
                      fontFamily:'outfit-bold'
                    }}>
                      {data?.location}
                    </Text>
                    <View style={{
                      display:'flex',
                      flexDirection:'row',
                      gap:5,
                      
                    }}>
                    <Text style={{
                            fontFamily:'outfit',
                            fontSize:16,
                            color:Colors.GRAY
                           }}>{moment(tripDetails.startDate).format('DD MMM yyyy')}</Text>

                           <Text style={{
                            fontFamily:'outfit',
                            fontSize:16,
                            color:Colors.GRAY
                           }}>- {moment(tripDetails.endDate).format('DD MMM yyyy')}</Text>

                  </View>
                  <Text style={{
                            fontFamily:'outfit',
                            fontsize:15,
                            color:Colors.GRAY
                          }}>{data?.traveler}
                  </Text>
        </View>
        <View style={{margin:10, borderRadius:10, padding:20, paddingTop:0,backgroundColor:Colors.WHITE}}>
                   {/*flight info */}
                  {data?.flightData && <FlightInfo flightData={data.flightData} />}

                  {/* hotels list*/}  
                  {data?.hotelList && <HotelList hotelList={data.hotelList} />}

                   {/* Trip Day Planner Info */}
                  {data?.travelPlan && <PlannedTrip details={data.travelPlan} />}
        </View>
                 

                          

        </ScrollView>
        </View>
  )
}