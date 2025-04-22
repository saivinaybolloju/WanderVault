import { View, Text,Image} from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Colors } from '../../constants/Colors'
import {CreateTripContext} from '../../context/CreateTripContext'
import { AI_Prompt } from '../../constants/Options';
import {auth, db,doc,setDoc} from './../../configs/FirebaseConfig';
import { generateTrip, chatSession } from '../../configs/AiModel';
import { useRouter } from 'expo-router';
export default function GenerateTrip() {
  const {tripData,setTripData}=useContext(CreateTripContext);
  const [loading,setLoading]=useState(false);
  const router=useRouter();
  const user=auth.currentUser;
  useEffect(()=>{
      tripData&&GenerateAITrip();
  },[tripData])
  const GenerateAITrip=async()=>{
      setLoading(true);
      const FINAL_PROMPT=AI_Prompt
      .replace('{location}',tripData?.locationInfo?.name)
      .replace('{totalDays}',tripData.totalNoOfDays)
      .replace('{totalNight}',tripData.totalNoOfDays-1)
      .replace('{traveler}',tripData.traveler)
      .replace('{budget}',tripData.budget)
      .replace('{totalDays}',tripData.totalNoOfDays)
      .replace('{totalNight}',tripData.totalNoOfDays-1)
        console.log(FINAL_PROMPT);
          const result=await chatSession.sendMessage(FINAL_PROMPT);
          const text= await result.response.text();
          console.log(text);
          const tripResp=JSON.parse(text);
          setLoading(false);
          const docId=(Date.now()).toString();
          const result_new=await setDoc(doc(db,"UserTrips",docId),{
            userEmail:user.email,
            tripData:tripResp
          });
          
            router.push('(tabs)/mytrip');
          

  }
  return (
    <View style={{
        padding:25,
        paddingTop:200,
        backgroundColor:Colors.WHITE,
        height:"100%"
    }}>
      <Text style={{
        fontFamily:"outfit-bold",
        fontSize:35,
        marginTop:20,
        textAlign:'center'
      }}>Please Wait....</Text>
      <Text style={{
        fontFamily:"outfit",
        color:Colors.GRAY,
        fontSize:20,
        textAlign:'center',
        marginTop:10,
        marginBottom:20,
      }}>We are working to generate{'\n'} your dream trip</Text>

      <Image source={require('./../../assets/images/airport.gif')}
      style={{
        // display:'flex',
        // flexDirection:'row',
        // justifyContent:'space-evenly',
        width:"100%",
        height:200
      }}
      resizeMode='contain'/>
      <Text style={{
        fontFamily:'outfit',
        color:Colors.GRAY,
        fontSize:15,
        textAlign:'center'
      }}>
        Do not go back!!!
      </Text>
    </View>
  )
}