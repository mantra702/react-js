import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBMx_ai4b0qmqF8sqBv1O-NmavQMhGk25g",
  authDomain: "my-react-app-7213a.firebaseapp.com",
  projectId: "my-react-app-7213a",
  storageBucket: "my-react-app-7213a.firebasestorage.app",
  messagingSenderId: "601954761862",
  appId: "1:601954761862:web:b569af44404b9f2fdea507"
};


export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();
