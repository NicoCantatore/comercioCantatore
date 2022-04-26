import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCQg73lthJ0A5mJDmxjnVBzVNduBdzFClE",
  authDomain: "ecommercech-6a81b.firebaseapp.com",
  projectId: "ecommercech-6a81b",
  storageBucket: "ecommercech-6a81b.appspot.com",
  messagingSenderId: "78158693627",
  appId: "1:78158693627:web:b2de0be70ff32efd5c9c5e"
};


const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app) 