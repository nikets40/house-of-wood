import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAgz2mnnR4tLNVqayIrZIzvZIhrjI2lgmM",
  authDomain: "house-of-wood.firebaseapp.com",
  projectId: "house-of-wood",
  storageBucket: "house-of-wood.appspot.com",
  messagingSenderId: "937063286276",
  appId: "1:937063286276:web:1c7f995b46c5a1cec19751",
  measurementId: "G-VN737D5LLB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);