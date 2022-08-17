import { initializeApp } from "firebase/app";
import { getStorage, uploadBytesResumable } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCITxRuZQAlsnFvKwbImYxKUcjUAChhPt8",
    authDomain: "tourist-guide-app-akila.firebaseapp.com",
    projectId: "tourist-guide-app-akila",
    databaseURL: "gs://tourist-guide-app-akila.appspot.com",
    storageBucket: "tourist-guide-app-akila.appspot.com",
    messagingSenderId: "935786156458",
    appId: "1:935786156458:web:1a03b804990505a3319bd3",
    measurementId: "G-RQSW4PX5PX",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
