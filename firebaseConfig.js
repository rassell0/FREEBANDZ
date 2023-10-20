import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuZPJzKFY2qd2eHW6iGyFrh0ATNeP3x6c",
  authDomain: "freebandz-74b40.firebaseapp.com",
  projectId: "freebandz-74b40",
  storageBucket: "freebandz-74b40.appspot.com",
  messagingSenderId: "92865803941",
  appId: "1:92865803941:web:ec437212e5fe7687613f4c",
  measurementId: "G-VZBECFEWTE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app)