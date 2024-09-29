import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDJe7q2LSI7mAY1WA8OFcRFNfxvIl76wUI",
    authDomain: "movie-ticket-booking-admin-pge.firebaseapp.com",
    projectId: "movie-ticket-booking-admin-pge",
    storageBucket: "movie-ticket-booking-admin-pge.appspot.com",
    messagingSenderId: "360188865641",
    appId: "1:360188865641:web:2a8e8679441fe6612fc6f8",
    measurementId: "G-CLL7JYJZ49"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth }