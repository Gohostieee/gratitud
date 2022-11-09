// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: process.env["APIKEY"],
	authDomain: "gratitud-a80e6.firebaseapp.com",
	projectId: "gratitud-a80e6",
	storageBucket: "gratitud-a80e6.appspot.com",
	messagingSenderId: "540256339364",
	appId: "1:540256339364:web:f2cb81292cd7447e826d31",
	measurementId: "G-E8ZXK89YQG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {app,firestore}