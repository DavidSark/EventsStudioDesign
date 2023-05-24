
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey:  import.meta.env.VITE_ACCESS_FIREBASE ,
  authDomain: "events-studio-designn.firebaseapp.com",
  projectId: "events-studio-designn",
  storageBucket: "events-studio-designn.appspot.com",
  messagingSenderId: "2843140297",
  appId: "1:2843140297:web:9ce4770988e786750c2d18",
  measurementId: "G-KLRRE4XYFN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app)