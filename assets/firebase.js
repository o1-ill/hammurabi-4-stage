// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-database.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDZZqUzXRAwh3RKaGp1unluBWYMWF2Q7s",
  authDomain: "hammurabi-ccf6d.firebaseapp.com",
  databaseURL: "https://hammurabi-ccf6d-default-rtdb.firebaseio.com",
  projectId: "hammurabi-ccf6d",
  storageBucket: "hammurabi-ccf6d.firebasestorage.app",
  messagingSenderId: "257971367886",
  appId: "1:257971367886:web:761013b57defa59a3b459f",
  measurementId: "G-KS3SWR8LYC"
};
// تهيئة Firebase
const app = initializeApp(firebaseConfig);

// قاعدة البيانات
const db = getDatabase(app);

// نصدرها حتى نستخدمها بالملفات الأخرى
export { db };
