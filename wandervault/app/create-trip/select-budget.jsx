import { View, Text, FlatList } from 'react-native'
import React from 'react'
import OptionCard from './../../components/CreateTrip/OptionCard'
import {useNavigation} from 'expo-router';
import { SelectBudgetOptions } from '../../constants/Options';
export default function SelectBudget() {
  const navigation=useNavigation();

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
            fontSize:20
          }}>Choose spending habits for your


       <FlatList
         data={SelectBudgetOptions}
         renderItem={({item,index})=>(
          <View>
            <Option Card option={item} selectedOption={selectedOption}/>
          </View>
         )}
         />
          // </Text>
        </View>
    </View>
  )
}