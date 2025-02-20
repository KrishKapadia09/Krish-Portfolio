// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7wXPVZ9_AQTz33_p8eSSHX6E5QN6jkn4",
  authDomain: "krish-portfolio-6104.firebaseapp.com",
  projectId: "krish-portfolio-6104",
  storageBucket: "krish-portfolio-6104.firebasestorage.app",
  messagingSenderId: "1098713823246",
  appId: "1:1098713823246:web:18b96ffbc38eb9900f245f",
  measurementId: "G-EPFWGV836T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);