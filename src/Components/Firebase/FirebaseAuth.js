import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDWp6_i7xQSg1jMAxMW9GbdRJp9AukgccI",
  authDomain: "bookshelf-f6f07.firebaseapp.com",
  projectId: "bookshelf-f6f07",
  storageBucket: "bookshelf-f6f07.firebasestorage.app",
  messagingSenderId: "874665121225",
  appId: "1:874665121225:web:ec7e3ca8e58eeee3634418",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const Auth = getAuth(app);
