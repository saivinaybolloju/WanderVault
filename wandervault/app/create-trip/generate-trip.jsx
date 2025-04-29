import { View, Text, Image } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { Colors } from '../../constants/Colors';
import { CreateTripContext } from '../../context/CreateTripContext';
import { AI_Prompt } from '../../constants/Options';
import { auth, db } from './../../configs/FirebaseConfig';
import { doc, setDoc } from 'firebase/firestore';
import { useRouter } from 'expo-router';
import { GoogleGenerativeAI } from '@google/generative-ai'; // 

const API_KEY = process.env.EXPO_PUBLIC_GEMINI_AI_KEY; //
const genAI = new GoogleGenerativeAI(API_KEY)//

export default function GenerateTrip() {
  const { tripData, setTripData } = useContext(CreateTripContext);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const user = auth.currentUser;

  useEffect(() => {
    tripData && GenerateAITrip();
  }, [tripData]);

  const GenerateAITrip = async () => {
    if (!tripData) return;

    setLoading(true);
    try {
      const FINAL_PROMPT = AI_Prompt
        // .replace(/{location}/g, tripData?.locationInfo?.name)
        .replace(/{totalDays}/g, tripData.totalNoOfDays)
        .replace(/{totalNight}/g, tripData.totalNoOfDays - 1)
        .replace(/{traveler}/g, tripData.traveler)
        .replace(/{budget}/g, tripData.budget);

      console.log("FINAL_PROMPT: ", FINAL_PROMPT);

      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-lite" });
      const result = await model.generateContent(FINAL_PROMPT);
      const response = await result.response;
      const text = await response.text();
      console.log("Raw Gemini Response Text:", text);
      
      try {
        /*parsing generated text*/
          const jsonStr = text.match(/```json([\s\S]*?)```/)?.[1]?.trim();
          if (!jsonStr) throw new Error("No JSON block found.");
          const tripResp = JSON.parse(jsonStr);
        /* */
        
        /* uploading into firestore database */
          const docId = Date.now().toString();
          await setDoc(doc(db, "UserTrips", docId), {
            userEmail: user?.email,
            tripData: tripResp,
          });
          console.log("Trip saved to Firestore successfully");
          setLoading(false);
          router.push("(tabs)/mytrip");
        /* */

      } catch (err) {
        console.error(" Error extracting or saving trip to FireStore :", err);
        setLoading(false);
      }
    } catch (error) {
      console.log("Error generating trip :", error);
      setLoading(false);
    }
  };

  return (
    <View style={{
      padding: 25,
      paddingTop: 200,
      backgroundColor: Colors.WHITE,
      height: "100%"
    }}>
      <Text style={{
        fontFamily: "outfit-bold", fontSize: 35,
        marginTop: 20,
        textAlign: 'center'
      }}>Please Wait....</Text>
      <Text style={{
        fontFamily: "outfit",
        color: Colors.GRAY,
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 20,
      }}>
        We are working to generate{'\n'} your dream trip
      </Text>

      <Image
        source={require('./../../assets/images/airport.gif')}
        style={{
          width: "100%",
          height: 200
        }}
        resizeMode='contain'
      />

      <Text style={{
        fontFamily: 'outfit',
        color: Colors.GRAY,
        fontSize: 15,
        textAlign: 'center'
      }}>
        Do not go back!!!
      </Text>
    </View>
  );
}
