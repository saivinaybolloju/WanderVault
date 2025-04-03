import { View, Text,TextInput,StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router'
import {Colors} from './../../../constants/Colors'
export default function SignIn() {
    const navigation=useNavigation();

    useEffect(()=>{
        navigation.setOptions({
            headerShown:false
        })
        },[])
  return (
    <View style={{
        paddingTop:100,
        padding:25,
        backgroundColor:Colors.WHITE,
        height:'100%',
    }}>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:30,
        marginLeft:25,
        marginTop:30
      }}>
        Let's Sign You In
      </Text>
      <Text style={{
        fontFamily:'outfit',
        marginLeft:25,
        fontSize:15,
        color:Colors.GRAY,
        marginTop:10
       
      }}>
        Welcome Back,
      </Text>
      <Text style={{
        fontFamily:'outfit',
        marginLeft:25,
        fontSize:15,
        color:Colors.GRAY,
        marginTop:0
      }}>
        You've been missed!
      </Text>


      <View style={{
        margin:10
      }}>
            {/* EMAIL */}

            <View style={{
                marginTop:50
            }}>
                <Text style={{
                    fontFamily:'outfit',
                }}>Email</Text>
                <TextInput placeholder='Enter Email' style={styles.input}></TextInput>
            </View>

                {/* PASSWORD */}

                <View style={{
                marginTop:30
            }}>
                <Text style={{
                    fontFamily:'outfit'
                }}>Password </Text>
                <TextInput secureTextEntry={true} placeholder='Enter Password' style={styles.input}></TextInput>
            </View>

                {/* Sign In Button */}
                <View style={{
                    marginTop:50,
                    padding:20,
                    backgroundColor:Colors.PRIMARY,
                    borderRadius:15,
                }}>
                    <Text style={{
                        color:Colors.WHITE,
                        textAlign:'center'
                    }}>
                        Sign In
                    </Text>
                </View>

                    {/* Create Button */}
                <View style={{
                    padding:20,
                    borderRadius:15,
                }}>
                    <Text style={{
                        textAlign:'center'
                    }}>
                        Create Account
                    </Text>
                </View>





      </View>
        



    </View>
  )
}
const styles=StyleSheet.create({
    input:{
        padding:15,
        borderWidth:1,
        borderRadius:15,
        borderColor:Colors.GRAY,
        marginTop:15,
        fontFamily:'outfit',
    }
})