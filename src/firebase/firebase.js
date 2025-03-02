// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBt3bMRizWnmRyhY3JzT9IXdQKF9OZcsSI",
  authDomain: "login-f2c10.firebaseapp.com",
  projectId: "login-f2c10",
  storageBucket: "login-f2c10.firebasestorage.app",
  messagingSenderId: "412134853770",
  appId: "1:412134853770:web:7992b59705ae7930c0f173",
  measurementId: "G-0S6P3E7HMZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

// export {app, auth} ;