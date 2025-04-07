import { View, Text,FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { router, useNavigation } from 'expo-router'
import { Colors } from '../../constants/Colors';
import { SelectTravelesList } from '../../constants/Options';
import OptionCard from '../../components/CreateTrip/OptionCard';
import { useState } from 'react';
import { useContext } from 'react';
import { CreateTripContext } from '../../context/CreateTripContext';
export default function selectTraveler() {
    const navigation=useNavigation();
    const [selectedTraveler,setSelectedTraveler]=useState('');
    const {tripData,setTripData}=useContext(CreateTripContext);
    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTransparent:true,
            headerTitle:''
        })
    },[navigation])

    useEffect(()=>{
        setTripData({...tripData,
            traveler:selectedTraveler
        })
    },[selectedTraveler])

    // useEffect(()=>{
    //     console.log(tripData);
    // },[tripData])

  return (
    <View style={{
        padding:25,
        paddingTop:75,
        backgroundColor:Colors.WHITE,
        height:'100%'
    }}>
      <Text style={{
        fontSize:35,
        fontFamily:'outfit-bold',
        marginTop:20,
      }} >Who is Traveling?</Text>
    
    <View style={{
        marginTop:10,
        marginBottom:10
    }}>
        <Text style={{
            fontFamily:'outfit',
            fontSize:20,
            marginBottom:20
        }}>
            Choose your accompanies...!
        </Text>

        <FlatList data={SelectTravelesList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item,index})=>(
            <TouchableOpacity 
            onPress={()=>{setSelectedTraveler(item.title)}}
            style={{
                marginVertical:10
            }}>
                <OptionCard option={item} selectedTraveler={selectedTraveler} />
            </TouchableOpacity>
        )

        }
        />
        



    </View>
        
        <TouchableOpacity 
        onPress={()=>router.push('/')}
        style={{
            padding:15,
            backgroundColor:Colors.PRIMARY,
            borderRadius:15,
            marginTop:20
        }}>
            <Text style={{
                textAlign:'center',
                color:Colors.WHITE,
                fontFamily:'outfit',
                fontSize:20,

                
            }}>
                Continue
            </Text>
        </TouchableOpacity>
    </View>
  )
}