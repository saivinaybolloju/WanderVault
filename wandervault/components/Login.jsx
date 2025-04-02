import { View, Text,Image,StyleSheet } from 'react-native'
import React from 'react'
import {Colors} from './../constants/Colors'
export default function Login() {
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
        <Text style={styles.button}>
            SignIn with Google
        </Text>
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