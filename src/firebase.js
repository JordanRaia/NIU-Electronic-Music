import { getDatabase } from "firebase/database";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCL2WcnAjmVhpeOOkFSmPFdtlIuVMd4OAw",
    authDomain: "niu-electronic-music-f62f1.firebaseapp.com",
    projectId: "niu-electronic-music-f62f1",
    storageBucket: "niu-electronic-music-f62f1.appspot.com",
    messagingSenderId: "169580558943",
    appId: "1:169580558943:web:ba9f6a6142e825aee8b9ea",
    measurementId: "G-YTZMVHQYH8",
};

//initialize firebase app
const app = initializeApp(firebaseConfig);

//firebase realtime database
const db = getDatabase(app);

export { db };
