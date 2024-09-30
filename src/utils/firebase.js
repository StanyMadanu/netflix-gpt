// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPPtS5YKxc-smTmNC3zad_5__DodoFrc4",
  authDomain: "netflixgpt-ca0e8.firebaseapp.com",
  projectId: "netflixgpt-ca0e8",
  storageBucket: "netflixgpt-ca0e8.appspot.com",
  messagingSenderId: "330434963841",
  appId: "1:330434963841:web:4e221dbc560258d034a080",
  measurementId: "G-2XY7TK9P3K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
