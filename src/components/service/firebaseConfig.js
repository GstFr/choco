import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCyh25qSIazk3tSIdl0TpeSjo_g5VLBhFo",
    authDomain: "ecommerce-a03bd.firebaseapp.com",
    projectId: "ecommerce-a03bd",
    storageBucket: "ecommerce-a03bd.appspot.com",
    messagingSenderId: "343608141153",
    appId: "1:343608141153:web:8327d8c22544ee82b19120"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)