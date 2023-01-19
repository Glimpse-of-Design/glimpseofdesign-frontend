import {getFirestore} from '@firebase/firestore';
import {getAnalytics} from 'firebase/analytics';
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyDjPNj3UUd87nOJViI6cop1SjZ5o8hQRCE',
    authDomain: 'glimpseofdesign-backend.firebaseapp.com',
    projectId: 'glimpseofdesign-backend',
    storageBucket: 'glimpseofdesign-backend.appspot.com',
    messagingSenderId: '259832056346',
    appId: '1:259832056346:web:084370a87c57f5f266dfa3',
    measurementId: 'G-B5WGR8G115'
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const storage = getStorage(app);
export const auth = getAuth(app);

getAnalytics(app);
