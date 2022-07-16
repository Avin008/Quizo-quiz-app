// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAx5ljOSrBInqVOvdF1WjqLEpnx0AEq5s",
  authDomain: "fir-quiz-app-3b96c.firebaseapp.com",
  projectId: "fir-quiz-app-3b96c",
  storageBucket: "fir-quiz-app-3b96c.appspot.com",
  messagingSenderId: "260252252734",
  appId: "1:260252252734:web:41cd0f7d4aeb2c6879ef6f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
