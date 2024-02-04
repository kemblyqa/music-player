// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcbK95R8Epw0oD8i2DKEiSiHHr6mcJTd4",
  authDomain: "music-5539b.firebaseapp.com",
  projectId: "music-5539b",
  storageBucket: "music-5539b.appspot.com",
  messagingSenderId: "609526733366",
  appId: "1:609526733366:web:21e2abade2f1daf3c09697"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
