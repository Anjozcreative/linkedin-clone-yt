import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBDFtttfx7cv8wE5lUThL04-UFbhzXkU4I",
    authDomain: "linkedin-clone-yt-7a609.firebaseapp.com",
    projectId: "linkedin-clone-yt-7a609",
    storageBucket: "linkedin-clone-yt-7a609.appspot.com",
    messagingSenderId: "959253887422",
    appId: "1:959253887422:web:67b90df7c78e5f023de1ef"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);