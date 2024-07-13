// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCr0Ul9x6XAo0F442jcpjW3U4wdzBcB-Cw",
  authDomain: "fir-71a4c.firebaseapp.com",
  projectId: "fir-71a4c",
  storageBucket: "fir-71a4c.appspot.com",
  messagingSenderId: "715447785639",
  appId: "1:715447785639:web:6f3281487769edd3492382",
  measurementId: "G-XKJ25XEBHY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
