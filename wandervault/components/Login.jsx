import { View, Text,Image,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import {Colors} from './../constants/Colors'
import { useRoute } from '@react-navigation/native'
import {useRouter} from 'expo-router'
export default function Login() {


const router=useRouter();


  return (
    <View>
      <Image source={require('./../assets/images/logo1.jpeg')}
        style={{
            width:400,
            height:300,
            resizeMode: 'contain',
        }}
      />
      <View style={styles.container}>
        <Text style={{
            fontSize:28,
            fontFamily:'outfit-bold',
            textAlign:'center',
        }}>
            Smart Trip Planner
        </Text>
        <Text
        style={{
            fontFamily:'outfit',
            textAlign:'center',
            fontSize:17,
            color:Colors.PRIMARY,
        }}>
            Powered by Generative AI 
        </Text>
        <Text style={{
            marginTop:425,
            fontFamily:'outfit-medium',
            textAlign:'center',
            fontSize:17,
            color:Colors.dark,
        }}>
        Discover  your next adventure effortlessly.
        </Text>
        <TouchableOpacity onPress={()=>router.push('auth/sign-in')}>
          
        <Text style={styles.button}>
            Get Started
        </Text>
        </TouchableOpacity>
        
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:Colors.WHITE,
        marginTop:-20,
        height:'100%',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
    },
    button:{
        margin:5,
        marginTop:20,
        padding:10,
        backgroundColor:Colors.PRIMARY,
        borderRadius:99,
        color:Colors.WHITE,
        textAlign:'center',
        fontFamily:'outfit',
        fontSize:20
    }
})