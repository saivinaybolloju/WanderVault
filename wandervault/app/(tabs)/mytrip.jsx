import { View, Text } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Colors } from '../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import StartNewTripCard from '../../components/MyTrips/StartNewTripCard';
import{ collection, query } from 'firebase/firestore';
import {db} from './../../configs/FirebaseConfig'
export default function MyTrip() {
  const router=useRouter();
  const[userTrips,setuserTrips]=useState([]);
  const user=auth.currentUser;
  const [loading,setLoading]=useState(false);

  userEffect(()=>{
    setLoading(true)
    user&&GetMyTrips();
  },[user])
    const GetMyTrips=async()=>{
      setuserTrips([]);
      const q=query(collection(db,'UserTrips'), where('userEmail','==',user?.email));
      const querySnapshot=await getDocs(q);

      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        setuserTrips(prev=>[...prev,doc.data()])
      });
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
      {loading&&<ActivityIndicator size={'large'} color={Colors.PRIMARY}/>}
      {userTrips?.length==0?
        <StartNewTripCard/>
        :
        <UserTripList userTrips={usertrips}  />
      }
    </ScrollView>
  )
}