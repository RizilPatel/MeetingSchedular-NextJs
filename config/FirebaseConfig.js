// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "resumeprojects-28780.firebaseapp.com",
  projectId: "resumeprojects-28780",
  storageBucket: "resumeprojects-28780.appspot.com",
  messagingSenderId: "290342973142",
  appId: "1:290342973142:web:b106a4ae200c8062ebe377",
  measurementId: "G-SHKGKNLVHW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);