// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIMDATa2JbFY7NsNgAmVNDSOa4XBnJ0XA",
  authDomain: "chat-app-ebf6f.firebaseapp.com",
  projectId: "chat-app-ebf6f",
  storageBucket: "chat-app-ebf6f.appspot.com",
  messagingSenderId: "508519593439",
  appId: "1:508519593439:web:fc285e28b507737c6c806a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

export {auth, db};