import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBp4SqO5baXsZowPFBl-ddcr6BGIuo2gV0",
  authDomain: "nexusfandom.firebaseapp.com",
  databaseURL: "https://nexusfandom-default-rtdb.firebaseio.com",
  projectId: "nexusfandom",
  storageBucket: "nexusfandom.appspot.com",
  messagingSenderId: "770553332905",
  appId: "1:770553332905:web:07542ebfe52a9f4c3855b8",
  measurementId: "G-CFSF4K4T00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export auth and firestore db services
export const auth = getAuth(app);
export const db = getFirestore(app);

