
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, setPersistence, browserSessionPersistence } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyABRiqMLNysC-HEAtBIFJaER6ccynwPPD0",
  authDomain: "events-studio-design.firebaseapp.com",
  projectId: "events-studio-design",
  storageBucket: "events-studio-design.appspot.com",
  messagingSenderId: "653824379822",
  appId: "1:653824379822:web:ec62284dc3d5f7a739d63f",
  measurementId: "G-Y8H6S44T11"
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

