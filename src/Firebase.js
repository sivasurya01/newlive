import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBGd6NCZ3hMEaKF03kOjOOIVNXQd4dYkwo",
    authDomain: "loginsystem-d0f0c.firebaseapp.com",
    databaseURL: "https://loginsystem-d0f0c-default-rtdb.firebaseio.com",
    projectId: "loginsystem-d0f0c",
    storageBucket: "loginsystem-d0f0c.appspot.com",
    messagingSenderId: "579881131847",
    appId: "1:579881131847:web:c3f4a0de0fc3afdfbf3662",
    measurementId: "G-3MWJ4QJDZN"
  };
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const firestore = getFirestore(app)
const db = getFirestore(app)
export { auth, firestore, db };
