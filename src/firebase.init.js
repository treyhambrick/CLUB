// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjjVNLhNpWNAZ6A4QbmjDQWuno1NHrza4",
  authDomain: "clubdel.firebaseapp.com",
  projectId: "clubdel",
  storageBucket: "clubdel.appspot.com",
  messagingSenderId: "522519047128",
  appId: "1:522519047128:web:e649addb9416a613cb20ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
export default db