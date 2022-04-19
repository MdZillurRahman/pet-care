// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4i2p_6yvlKBHqrLwECvCBPJRMREDlg5s",
  authDomain: "pet-care-a7a77.firebaseapp.com",
  projectId: "pet-care-a7a77",
  storageBucket: "pet-care-a7a77.appspot.com",
  messagingSenderId: "81029408690",
  appId: "1:81029408690:web:0da1d075686426e63026ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;