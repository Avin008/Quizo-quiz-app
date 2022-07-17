// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

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

// services

const createUser = async ({ email, password }) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
};

const loginUser = async ({ email, password }) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

const checkLoginStatus = async () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      return;
    } else {
      return;
    }
  });
};

const signoutUser = async () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
};

export { db, auth };
export { loginUser, createUser, checkLoginStatus, signoutUser };
