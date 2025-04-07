import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React,{useEffect,useState} from 'react'
import OptionCard from './../../components/CreateTrip/OptionCard'
import {useNavigation} from 'expo-router';
import { SelectBudgetOptions } from '../../constants/Options';
export default function SelectBudget() {
  const navigation=useNavigation();
  const [selectedOption, setSelectedOption] = useState('');


  useEffect(()=>{
    navigation.setOptions({
      headerShown:true,
      headerTransparent:true,
      headerTitle:''
    })

  },[])
  return (
    <View  style={{
      paddingTop:75,
      padding:25
    }}>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:35,
        marginTop:20

      }}>
        Budget</Text>
        <View style={{
          marginTop:20
        }}>
          <Text style={{
            fontFamily:'outfit-bold',
            fontSize:20,
            marginBottom:50,
          }}>Choose spending habits for your trip 
          </Text>

       <FlatList
         data={SelectBudgetOptions}
         keyExtractor={(item,index)=> index.toString()}
         renderItem={({item})=>(
          <TouchableOpacity onPress={()=>setSelectedOption(item.title)}
          style={{
            marginBottom:40,
          }}>

          
            <OptionCard option={item} selectedOption={selectedOption}/>
          </TouchableOpacity>
         )}
         />
        </View>
    </View>
  )
}