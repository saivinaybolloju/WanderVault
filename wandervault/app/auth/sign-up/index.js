import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { ToastAndroid } from 'react-native';
import React, { useEffect } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "./../../../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function SignUp() {
  const navigation = useNavigation();
  const router = useRouter();
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View
      style={{
        padding: 25,
        paddingTop: 50,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 30,
          marginLeft: 15,
          marginTop: 30,
        }}
      >
        Create New Account
      </Text>
      <Text
              style={{
                fontFamily: "outfit",
                marginLeft: 15,
                fontSize: 15,
                color: Colors.GRAY,
                marginTop: 10,
              }}
            >
              Kickstart your journey,
            </Text>
            <Text
              style={{
                fontFamily: "outfit",
                marginLeft: 15,
                fontSize: 15,
                color: Colors.GRAY,
                marginTop: 0,
              }}
            >
              Welcome User.
            </Text>

      <View
        style={{
          margin: 20,
        }}
      >
        {/* User Full Name*/}
        <View
          style={{
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontFamily: "outfit",
            }}
          >
            Full Name
          </Text>
          <TextInput style={styles.input} placeholder="Enter full Name" />
        </View>

        {/* EMAIL */}
        <View
          style={{
            marginTop: 20,
          }}
        >
          <Text
            style={{
              fontFamily: "outfit",
            }}
          >
            Email
          </Text>
          <TextInput placeholder="Enter Email" style={styles.input}></TextInput>
        </View>

        {/* PASSWORD */}
        <View
          style={{
            marginTop: 30,
          }}
        >
          <Text
            style={{
              fontFamily: "outfit",
            }}
          >
            Password{" "}
          </Text>
          <TextInput
            secureTextEntry={true}
            placeholder="Enter Password"
            style={styles.input}
          ></TextInput>
        </View>

        {/* Create Account Button */}
        <View
          style={{
            marginTop: 50,
            padding: 20,
            backgroundColor: Colors.PRIMARY,
            borderRadius: 15,
          }}
        >
          <Text onPress={()=>{ToastAndroid.show('Created Account', ToastAndroid.SHORT);}}
            style={{
              color: Colors.WHITE,
              textAlign: "center",
            }}
          >
            Create Account
          </Text>
        </View>

        {/* Sign In Button */}
        <View 
          style={{
            padding: 20,
            borderRadius: 15,
          }}
        >
          <Text onPress={()=>router.push('auth/sign-in')}
            style={{
              textAlign: "center",
            }}
          >
            SignIn
          </Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.GRAY,
    marginTop: 15,
    fontFamily: "outfit",
  },
});
