import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { ToastAndroid } from 'react-native';
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "./../../../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function SignIn() {
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
        paddingTop: 40,
        padding: 25,
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
        Let's Sign You In
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
        Welcome Back,
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
        You've been missed!
      </Text>

      <View
        style={{
          margin: 10,
        }}
      >
        {/* EMAIL */}

        <View
          style={{
            marginTop: 50,
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

        {/* Sign In Button */}
        <View
          style={{
            marginTop: 50,
            padding: 20,
            backgroundColor: Colors.PRIMARY,
            borderRadius: 15,
          }}
        >
          <Text onPress={()=>{ToastAndroid.show('You are Signed In', ToastAndroid.SHORT);}}
            style={{
              color: Colors.WHITE,
              textAlign: "center",
            }}
          >
            Sign In
          </Text>
        </View>

        {/* Create  Account Button */}
        <View
          style={{
            padding: 20,
            borderRadius: 15,
          }}
        >
          <TouchableOpacity onPress={() => router.push("auth/sign-up")}>
            <Text
              style={{
                textAlign: "center",
              }}
            >
              Create Account
            </Text>
          </TouchableOpacity>
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
