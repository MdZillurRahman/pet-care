// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8SMQ5DuyZMZKfQEASqKwINhfyxA5erCI",
  authDomain: "career-hero-fc8d2.firebaseapp.com",
  projectId: "career-hero-fc8d2",
  storageBucket: "career-hero-fc8d2.appspot.com",
  messagingSenderId: "651839634366",
  appId: "1:651839634366:web:ac012d6233b851cf3a57ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;