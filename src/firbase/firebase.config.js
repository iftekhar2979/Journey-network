// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUrZsfCv_ZYn7eEFihph5cTumaDZ5cjOc",
  authDomain: "travel-website-a194f.firebaseapp.com",
  projectId: "travel-website-a194f",
  storageBucket: "travel-website-a194f.appspot.com",
  messagingSenderId: "307332177116",
  appId: "1:307332177116:web:9b1536994a37c86e422819"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app