import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // ✅ Import authentication
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6kaXegfHsgioOGuAgB0L691O54ljF6ZY",
  authDomain: "reactintellibot-ff441.firebaseapp.com",
  projectId: "reactintellibot-ff441",
  storageBucket: "reactintellibot-ff441.appspot.com", // ✅ Fixed storage bucket format
  messagingSenderId: "362262700141",
  appId: "1:362262700141:web:408a0becf210329207df64",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // ✅ Export authentication instance
export const db = getFirestore(app);
