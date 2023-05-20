// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLbe00St8LCrOLDy0beWsDytNjC3IBDPs",
  authDomain: "kidoozie-car.firebaseapp.com",
  projectId: "kidoozie-car",
  storageBucket: "kidoozie-car.appspot.com",
  messagingSenderId: "61207989360",
  appId: "1:61207989360:web:5bcfb1fc9fb305cfd2f8b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;