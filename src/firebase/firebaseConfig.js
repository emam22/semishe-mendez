import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey:"AIzaSyBYfrkEVuXvdpsaZRxScHleZL8lCqCAHag",
  authDomain:"semishe-coder.firebaseapp.com",
  projectId:"semishe-coder",
  storageBucket:"semishe-coder.appspot.com",
  messagingSenderId:"601248200684",
  appId:"601248200684:web:e6bba403974e0eb1aff2c9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);




