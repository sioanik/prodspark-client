// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    //   apiKey: "AIzaSyDLWxLbMZUbmmNsGYjcDp9hNzoj85W7Vco",
    //   authDomain: "project-prodspark.firebaseapp.com",
    //   projectId: "project-prodspark",
    //   storageBucket: "project-prodspark.appspot.com",
    //   messagingSenderId: "853155824792",
    //   appId: "1:853155824792:web:78b6f93b6e13a4a9db3ced"
    apiKey: import.meta.env.VITE_APIKEY,
    authDomain: import.meta.env.VITE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_PROJECTID,
    storageBucket: import.meta.env.VITE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);