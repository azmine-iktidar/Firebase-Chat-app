import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGwCSqWjRtuQG5oYdo4coNU8mUhtw6aRE",
  authDomain: "fir-starter-74487.firebaseapp.com",
  projectId: "fir-starter-74487",
  storageBucket: "fir-starter-74487.appspot.com",
  messagingSenderId: "51386827171",
  appId: "1:51386827171:web:a4c94b687dbf3d57291a16",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
