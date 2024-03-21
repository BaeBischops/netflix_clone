import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyD1GjZlL6S1-fgvI4ekwX05HH2TGWIR-vA",
  authDomain: "react-netflix-clone-84d16.firebaseapp.com",
  projectId: "react-netflix-clone-84d16",
  storageBucket: "react-netflix-clone-84d16.appspot.com",
  messagingSenderId: "360038357795",
  appId: "1:360038357795:web:4194c409f76401e30bca96",
  measurementId: "G-0GZH2SFG81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);