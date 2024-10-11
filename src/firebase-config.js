import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Import Firestore

const firebaseConfig = {
    apiKey: "AIzaSyCOQePL4qsTnqktYbIlEaBbWzkZc1BFVJY",
    authDomain: "bluemetasite.firebaseapp.com",
    projectId: "bluemetasite",
    storageBucket: "bluemetasite.appspot.com",
    messagingSenderId: "951868857653",
    appId: "1:951868857653:web:0f50439a56d67a08fa007c",
    measurementId: "G-1EJJQT4CJY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Firebase Analytics
let analytics;
if (typeof window !== 'undefined') { // Ensure this runs in a browser environment
    analytics = getAnalytics(app);
}

export { app, analytics, db };
