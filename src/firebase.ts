import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

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
export const db = getFirestore(app);
export const storage = getStorage(app);
