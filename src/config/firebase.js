
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, setPersistence, browserSessionPersistence } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_ACCESS_FIREBASE,
  authDomain: import.meta.env.VITE_ACCESS_FIREBASE_DOMAIN,
  projectId: import.meta.env.VITE_ACCESS_FIREBASE_ID,
  storageBucket: import.meta.env.VITE_ACCESS_FIREBASE_STORAGE,
  messagingSenderId: import.meta.env.VITE_ACCESS_FIREBASE_SENDER,
  appId: import.meta.env.VITE_ACCESS_FIREBASE_APPID,
  measurementId: import.meta.env.VITE_ACCESS_FIREBASE_MEASUREMENTID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app)
export const storage = getStorage(app);

setPersistence(auth, browserSessionPersistence)
  .catch((error) => {
    console.log(error);
  });

