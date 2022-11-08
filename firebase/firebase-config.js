// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCsEmd1bV60d95EEtQglejozL5ei7gOQg",
  authDomain: "fitness-60dc7.firebaseapp.com",
  projectId: "fitness-60dc7",
  storageBucket: "fitness-60dc7.appspot.com",
  messagingSenderId: "837296464380",
  appId: "1:837296464380:web:1c3ad0041665bc58585279"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

export {
  auth,
  db
}