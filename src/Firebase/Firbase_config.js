// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAgGT2KTKu2cYpqjX0sbNrLuJdUCmPkHaA",
    authDomain: "residential-auth-81b7f.firebaseapp.com",
    projectId: "residential-auth-81b7f",
    storageBucket: "residential-auth-81b7f.firebasestorage.app",
    messagingSenderId: "993085143111",
    appId: "1:993085143111:web:4fe142e03e67098f851962",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
