import {initializeApp} from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyACBhp-EyKBoyauxHa0r50-MJADTaQ9zP4",
    authDomain: "ntflx-9e5b4.firebaseapp.com",
    projectId: "ntflx-9e5b4",
    storageBucket: "ntflx-9e5b4.appspot.com",
    messagingSenderId: "133635649766",
    appId: "1:133635649766:web:c4bf1a6b2e6ecdca708b27"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
export default db;