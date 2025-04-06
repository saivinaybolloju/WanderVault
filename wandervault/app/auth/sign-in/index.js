import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { ToastAndroid,Platform } from 'react-native';
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "./../../../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from './../../../configs/FirebaseConfig';

export default function SignIn() {
  const navigation = useNavigation();
  const router = useRouter();

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [showPassword, setShowPassword] = useState(false);


  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);


  const showToast = (message) => {
      if (Platform.OS === 'android') {
        ToastAndroid.show(message, ToastAndroid.SHORT);
      } else {
        alert(message); // Web or iOS
      }
    };

const onSignIn=()=>{

  if(!email||!password){
    showToast("Please enter email and password!");
    return;
  }
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    setEmail(''); 
    setPassword('');
    showToast("Successfully Signed In!");
    router.push("/");

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage);
    if(errorCode=='auth/invalid-email'){
      showToast("Invalid Email");
    }
    if(errorCode=='auth/invalid-credential'){
      showToast("Invalid Credentials"
      );
    }
  });
}





  
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
          <TextInput placeholder="Enter Email" style={styles.input}
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
         onChangeText={(value)=>setEmail(value)} 
          ></TextInput>
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
            Password
          </Text>
          <View style={styles.passwordInputContainer}>
          <TextInput
            secureTextEntry={!showPassword}
            placeholder="Enter Password"
            style={styles.inputInner}
            value={password}
            onChangeText={(value)=>setPassword(value)}
            autoCapitalize="none" 
          ></TextInput>
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? "eye-off" : "eye"}
              size={22}
              color={Colors.GRAY}
            />
          </TouchableOpacity>
          </View>
          
        </View>

        {/* Sign In Button */}
        <TouchableOpacity
          onPress={onSignIn}
          style={{
            marginTop: 50,
            padding: 20,
            backgroundColor: Colors.PRIMARY,
            borderRadius: 15,
          }}
        >
          <Text 
            style={{
              color: Colors.WHITE,
              textAlign: "center",
            }}
          >
            Sign In
          </Text>
        </TouchableOpacity>

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
  inputInner: {
    flex: 1,
    fontFamily: "outfit",
    padding:0,
    borderWidth:0,
    ...(Platform.OS === 'web' && { outlineStyle: 'none' })
  },
  passwordInputContainer: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.GRAY,
    marginTop: 15,
    fontFamily: "outfit",
    position:'relative',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  
});
