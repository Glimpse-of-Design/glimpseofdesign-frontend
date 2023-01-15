// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDjPNj3UUd87nOJViI6cop1SjZ5o8hQRCE",
    authDomain: "glimpseofdesign-backend.firebaseapp.com",
    projectId: "glimpseofdesign-backend",
    storageBucket: "glimpseofdesign-backend.appspot.com",
    messagingSenderId: "259832056346",
    appId: "1:259832056346:web:084370a87c57f5f266dfa3",
    measurementId: "G-B5WGR8G115"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore();
export const storage = getStorage(app);
export const auth = getAuth(app);
