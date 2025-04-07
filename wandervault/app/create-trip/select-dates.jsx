import { View, Text } from 'react-native'
import { useNavigation,router } from 'expo-router';
import React,{useContext,useEffect,useState} from 'react'
import { TouchableOpacity,ToastAndroid } from 'react-native';
import { Colors } from '../../constants/Colors';
import { CreateTripContext } from '../../context/CreateTripContext';
import CalendarPicker from "react-native-calendar-picker";
import moment from 'moment';

export default function SelectDates() {

    const navigation=useNavigation();
    const[startDate,setStartDate]=useState();
    const[endDate,setEndDate]=useState();
    const {tripData,setTripData}=useContext(CreateTripContext);

     useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTransparent:true,
            headerTitle:''
        })

     },[])
     const onDateChange=(date,type)=>{
        console.log(date,type)
        if(type==='START_DATE'){

            setStartDate(moment(date))

        }
        else{
            setEndDate(moment(date))
        }

     }
     const OnDateSelectionContinue=()=>{
        if(startDate&&!endDate){
            ToastAndroid.show('Please select Start and end Date',ToastAndroid.LONG)
            return ;
        }
        const totalNoOfDays=endDate.diff(startDate,'days');
        console.log(totalNoOfDays+1);
        router.push('./select-budget');
        setTripData({
            ...tripData,
            startDate:startDate,
            endDate:endDate,
            totalNoOfDays:totalNoOfDays+1
        });


     }
  return (
    <View
        style={{
            padding:25,
            paddingTop:75,
            backgroundColor:Colors.WHITE,
            height:'100%'


        }}>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:35,
        marginTop:20
      }}>Travel Dates</Text>
      <View style={{
        marginTop:30

      }}>
      <CalendarPicker 
      onDateChange={onDateChange}
      allowRangeSelection={true} 
      minDate={new Date()}
      maxRangeDuration={5}
      
      selectedRangeStyle={{
        backgroundColor: Colors.PRIMARY,
      }}
      selectedRangeStartTextStyle={{
        color: Colors.WHITE
      }}
      selectedRangeEndTextStyle={{
        color: Colors.WHITE
      }}
      selectedDayTextStyle={{
        color: Colors.WHITE
      }}
      todayBackgroundColor={'#eee'}
      todayTextStyle={{
        color: Colors.BLACK
      }}
      />
    </View>
    <TouchableOpacity 
    onPress={OnDateSelectionContinue}
            // onPress={()=>router.push('/')}
            style={{
                padding:15,
                backgroundColor:Colors.PRIMARY,
                borderRadius:15,
                marginTop:35
            }}>
             
                <Text style={{
                    textAlign:'center',
                    color:Colors.WHITE,
                    fontFamily:'outfit-medium',
                    fontSize:20,
    
                    
                }}>
                    Continue
                </Text>
               
            </TouchableOpacity>
    </View>
  )
}