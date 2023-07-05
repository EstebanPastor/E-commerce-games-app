import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_KEY}`,
  authDomain: "steamcito-app.firebaseapp.com",
  projectId: "steamcito-app",
  storageBucket: "steamcito-app.appspot.com",
  messagingSenderId: "630326872537",
  appId: "1:630326872537:web:30811d7edf1c39b85931c8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
