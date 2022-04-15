// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD27bZorFSveHawaiSVplQ4a5ox1cILKnI",
    authDomain: "green-chilly-food.firebaseapp.com",
    projectId: "green-chilly-food",
    storageBucket: "green-chilly-food.appspot.com",
    messagingSenderId: "940475731212",
    appId: "1:940475731212:web:cd31521502e878aeb3cd29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;