// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBR9hnGfkMtXxN68Dk_r8-iIgIRNd5Gc-g",
  authDomain: "financetracker-d58c6.firebaseapp.com",
  projectId: "financetracker-d58c6",
  storageBucket: "financetracker-d58c6.appspot.com",
  messagingSenderId: "1038916914372",
  appId: "1:1038916914372:web:ba802370a35721c9ca8d91",
  measurementId: "G-DDVX1Y6SF9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db= getFirestore(app);
const auth= getAuth(app);
const provider= new GoogleAuthProvider();
export {db,auth,provider,doc,setDoc};