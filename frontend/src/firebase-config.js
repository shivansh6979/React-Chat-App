import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqB5GEosniT5PLTuPLDKt-PbIu9XUyCN4",
  authDomain: "react-chat-app-591f8.firebaseapp.com",
  projectId: "react-chat-app-591f8",
  storageBucket: "react-chat-app-591f8.appspot.com",
  messagingSenderId: "542638107604",
  appId: "1:542638107604:web:035d5ab610f2b923f60441",
  measurementId: "G-9WHTE3SJP4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
