// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2SL4AXP-oWn8rNQhX_QNE-CMhbEVSPuw",
  authDomain: "chef-recipe-client-63c1f.firebaseapp.com",
  projectId: "chef-recipe-client-63c1f",
  storageBucket: "chef-recipe-client-63c1f.appspot.com",
  messagingSenderId: "918050654115",
  appId: "1:918050654115:web:3afbd588cfc8e9a4313c16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;