// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPEbZGmaHuRIN5iZWtgFvhr9Tfs5BB1Tc",
  authDomain: "m-52-react-dragon-news-auth.firebaseapp.com",
  projectId: "m-52-react-dragon-news-auth",
  storageBucket: "m-52-react-dragon-news-auth.appspot.com",
  messagingSenderId: "516980809371",
  appId: "1:516980809371:web:9e7ce5bafa3214afa8b03e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;