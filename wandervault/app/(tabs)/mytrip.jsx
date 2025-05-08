import React, { useState,useEffect } from 'react';
import { View, Text,ActivityIndicator,ScrollView } from 'react-native'
import { auth } from './../../configs/FirebaseConfig';
import { useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import UserTripList from '../../components/MyTrips/UserTripList';
import StartNewTripCard from '../../components/MyTrips/StartNewTripCard';
import{ collection, query,getDocs,where } from 'firebase/firestore';
import {db} from './../../configs/FirebaseConfig'
export default function MyTrip() {
  const router=useRouter();
  const[userTrips,setuserTrips]=useState([]);
  const user=auth.currentUser;
  const [loading,setLoading]=useState(false);

  useEffect(()=>{
    if(user){
      setLoading(true)
      user&&GetMyTrips(user);
    }
  },[user])
    const GetMyTrips=async(user)=>{
      setLoading(true);
      const q=query(collection(db,'UserTrips'), where('userEmail','==',user.email));
      const querySnapshot=await getDocs(q);

      const trips = querySnapshot.docs
      .map((doc) => doc.data())
      .sort((a, b) => b.createdAt - a.createdAt);
      setuserTrips(trips);
      setLoading(false);
  
    }
  return (
    <ScrollView style={{
      padding:25,
      paddingTop:55,
      backgroundColor:Colors.WHITE,
      height:'100%'
    }}>
      {loading&&<ActivityIndicator size={'large'} color={Colors.PRIMARY}/>}
      <View style={{
        display:'flex',
        flexDirection:'row',
        alignContent:'center',
        fontFamily:"output",
        justifyContent:'space-between'
      }}>
        <Text style={{
          fontFamily:'outfit-bold',
          fontSize:35
        }}>MyTrips</Text>
        <Ionicons onPress={()=>{router.push('/create-trip/search-place')}} name="add-circle-outline" size={40} color="black" />
      </View>
      {userTrips?.length===0?
        <StartNewTripCard/>
        :
        <UserTripList userTrips={userTrips}  />
      }
    </ScrollView>
  )
}