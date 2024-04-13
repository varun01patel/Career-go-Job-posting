// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHcWH5ngnKvG1fMzKoyG4o0ST6s2FAsXI",
  authDomain: "career-go-46f18.firebaseapp.com",
  projectId: "career-go-46f18",
  storageBucket: "career-go-46f18.appspot.com",
  messagingSenderId: "141088403590",
  appId: "1:141088403590:web:93f2e49b5a9763a119e107"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export{db};