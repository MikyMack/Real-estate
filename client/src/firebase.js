// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-e01a4.firebaseapp.com",
  projectId: "mern-estate-e01a4",
  storageBucket: "mern-estate-e01a4.appspot.com",
  messagingSenderId: "1004834840981",
  appId: "1:1004834840981:web:0cec241d58edc0d715569c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);