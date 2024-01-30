import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCkEZcHWjTDaHmOSc2M6hPlwLrf9SRUXC8",
  authDomain: "eshop-f8224.firebaseapp.com",
  projectId: "eshop-f8224",
  storageBucket: "eshop-f8224.appspot.com",
  messagingSenderId: "706588946410",
  appId: "1:706588946410:web:e64f861f17fe52e9888c93",
  measurementId: "G-BXV96C3YWQ",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// const db = app.firestore();
const auth = getAuth(app);

export { auth };
