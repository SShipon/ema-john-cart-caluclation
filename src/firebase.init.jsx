// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYoSwbtLF9FS4JtpYX06d6mfzF564FquU",
  authDomain: "ema-john-updated-2022-final.firebaseapp.com",
  projectId: "ema-john-updated-2022-final",
  storageBucket: "ema-john-updated-2022-final.appspot.com",
  messagingSenderId: "464132100630",
  appId: "1:464132100630:web:0ad38d3dd4cfbf4c2cdb37",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;