// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUCEM996HBtVouPoPv6tUOFxDcwqHbWlQ",
  authDomain: "product-plus-d5644.firebaseapp.com",
  projectId: "product-plus-d5644",
  storageBucket: "product-plus-d5644.appspot.com",
  messagingSenderId: "444973108201",
  appId: "1:444973108201:web:432cd38eb240d937ebd978"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);