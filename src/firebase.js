import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAnK77USgJJDK25tRWCT-XmQJR3G_YbfZc",
  authDomain: "test-4a086.firebaseapp.com",
  projectId: "test-4a086",
  storageBucket: "test-4a086.appspot.com",
  messagingSenderId: "624139890038",
  appId: "1:624139890038:web:d7a424731d9b9727a25e57",
  measurementId: "G-0G77HHK9XQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
