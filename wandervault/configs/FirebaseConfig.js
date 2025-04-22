// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_KEY,
  authDomain: "wandervault-v1.firebaseapp.com",
  projectId: "wandervault-v1",
  storageBucket: "wandervault-v1.firebasestorage.app",
  messagingSenderId: "817968209030",
  appId: "1:817968209030:web:8e7108549d0e9d78ac8507",
  measurementId: "G-X7KLE3GLS5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
if (typeof window !== "undefined") {
    getAnalytics(app);
  }
  
export const auth = getAuth(app);
export const db = getFirestore(app);