import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const firebase = {
  apiKey: "AIzaSyD8iRpDi5FbVRegZTYfy4f9IwaxXz9p8M8",
  authDomain: "movique-c0d4a.firebaseapp.com",
  projectId: "movique-c0d4a",
  storageBucket: "movique-c0d4a.appspot.com",
  messagingSenderId: "853778389747",
  appId: "1:853778389747:web:0b43f2e9bb5dea1b8d7586",
  measurementId: "G-WGLMHP0HW6",
};

const app = initializeApp(firebase);
export const auth = getAuth(app);

export const db = getFirestore(app);
const collectionRef = collection(db, "userList");
const q = query(collectionRef, where("owner", "==", "jane"));
getDocs(q).then((data) => console.log(data.docs));
