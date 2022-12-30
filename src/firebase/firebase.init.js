// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBFWV9AGqbuG8MOUMmp7Vrcjp1oqO0aIzw",
    authDomain: "idealblogs-3cdf8.firebaseapp.com",
    projectId: "idealblogs-3cdf8",
    storageBucket: "idealblogs-3cdf8.appspot.com",
    messagingSenderId: "196817848110",
    appId: "1:196817848110:web:4bb82ae8ebfb7c48d11cbf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;