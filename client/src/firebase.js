// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: "mern-blog-961f1.firebaseapp.com",
	projectId: "mern-blog-961f1",
	storageBucket: "mern-blog-961f1.appspot.com",
	messagingSenderId: "839753264754",
	appId: "1:839753264754:web:f4df0e2c47ec1c7a6bdceb",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
