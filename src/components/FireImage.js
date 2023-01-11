
import { initializeApp} from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDT9f99LaT0glCeAO1uQWdQ2KjsspjgtnY",
  authDomain: "react-reelest.firebaseapp.com",
  databaseURL: "https://react-reelest-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-reelest",
  storageBucket: "react-reelest.appspot.com",
  messagingSenderId: "20717166810",
  appId: "1:20717166810:web:33210c21114d82e2d345e3",
  measurementId: "G-8DQX9BPKQ2"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
export const auth = getAuth(app);