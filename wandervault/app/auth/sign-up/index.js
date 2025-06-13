import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { ToastAndroid,Platform } from 'react-native';
import React, { useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "./../../../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from './../../../configs/FirebaseConfig';

export default function SignUp() {
  const navigation = useNavigation();
  const router = useRouter();


  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [fullName,setFullName]=useState('');
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



  const OnCreateAccount=()=>{

    if(!email||!password||!fullName){
      showToast("Please enter all details..");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log(user);
      router.replace('/mytrip')
      setEmail('');
      setPassword('');
      setFullName('');
      showToast("Succesfully Created Account !");
      router.replace('auth/sign-in');
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode,errorMessage);
      if (errorCode === 'auth/weak-password') {
    showToast("Password must be at least 6 characters.");
  } else if (errorCode === 'auth/email-already-in-use') {
    showToast("Email already in use.");
  } else if (errorCode === 'auth/invalid-email') {
    showToast("Invalid email format.");
  } else {
    showToast("Something went wrong. Try again.");
  }
      // ..
    });
  }

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
          <TextInput style={styles.input} placeholder="Enter full Name"
          onChangeText={(value)=>setFullName(value)}
          value={fullName}
          autoCapitalize="words"
          />
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
          <TextInput placeholder="Enter Email" style={styles.input}
          value={email}
          onChangeText={(value)=>setEmail(value)}
          autoCapitalize="none"
          keyboardType="email-address"
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
            value={password}
              secureTextEntry={!showPassword}
              placeholder="Enter Password"
              style={styles.inputInner}
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

        {/* Create Account Button */}
        <TouchableOpacity
        onPress={OnCreateAccount}
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
            Create Account
          </Text>
        </TouchableOpacity>

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
  inputInner: {
    flex: 1,
    fontFamily: "outfit",
    padding: 0,
    borderWidth: 0,
    ...(Platform.OS === 'web' && { outlineStyle: 'none' }),
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
