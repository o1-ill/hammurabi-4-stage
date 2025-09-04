// firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Config مالك من Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyDaeDcaVeX9IywIrptTHLsr4FWzaLpI0-s",
  authDomain: "students-db-c8a71.firebaseapp.com",
  projectId: "students-db-c8a71",
  storageBucket: "students-db-c8a71.firebasestorage.app",
  messagingSenderId: "729379523586",
  appId: "1:729379523586:web:fe0312849d9cc6a7f0ab1b",
  measurementId: "G-JCR5FCVCRT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log("🔥 Firebase جاهز و متصل");
