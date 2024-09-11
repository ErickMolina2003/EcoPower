import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAOBWSYtAda56-JRfLU_G8iNkYbBuGk148",
    authDomain: "inside-class-bf070.firebaseapp.com",
    databaseURL: "https://inside-class-bf070-default-rtdb.firebaseio.com",
    projectId: "inside-class-bf070",
    storageBucket: "inside-class-bf070.appspot.com",
    messagingSenderId: "295116619283",
    appId: "1:295116619283:web:0ecf4c518f46f190a249e6"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);