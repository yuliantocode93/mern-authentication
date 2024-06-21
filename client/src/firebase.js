// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-91201.firebaseapp.com",
  projectId: "mern-auth-91201",
  storageBucket: "mern-auth-91201.appspot.com",
  messagingSenderId: "514998883288",
  appId: "1:514998883288:web:9a061c7c7b994a79bf18ad",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
