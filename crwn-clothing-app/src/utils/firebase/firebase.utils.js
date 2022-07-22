// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbZqKuIemLpo0MdF80dvtI3LcNTkDClTU",
  authDomain: "crwn-clothing-db-46d81.firebaseapp.com",
  projectId: "crwn-clothing-db-46d81",
  storageBucket: "crwn-clothing-db-46d81.appspot.com",
  messagingSenderId: "45957186918",
  appId: "1:45957186918:web:74aa0da3adff3eb8e274a7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});


export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);