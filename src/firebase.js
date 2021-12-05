// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBdRxp8TbsnZFEc9AArTI3zMG9jlIR8qZk",
    authDomain: "facebook-clone-79a01.firebaseapp.com",
    projectId: "facebook-clone-79a01",
    storageBucket: "facebook-clone-79a01.appspot.com",
    messagingSenderId: "536148626486",
    appId: "1:536148626486:web:5efbd6892d8c68ba5e1c97",
    measurementId: "G-K5919TF19B"
  };

 // eslint-disable-next-line
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth()
const provider = new GoogleAuthProvider()

export { auth ,provider };
export default db;
