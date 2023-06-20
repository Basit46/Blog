// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVZv8TRH-FEtSLM-CEBRXOaRBBLMTGQWU",
  authDomain: "blog-26042.firebaseapp.com",
  projectId: "blog-26042",
  storageBucket: "blog-26042.appspot.com",
  messagingSenderId: "778710795325",
  appId: "1:778710795325:web:a79767bdbe89f55c24d654",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
