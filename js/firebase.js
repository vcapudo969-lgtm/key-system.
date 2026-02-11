// js/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAAOIbO-iUWQgjtIDtuwjUS2ViMoVo4Csc",
  authDomain: "key-system-54e4f.firebaseapp.com",
  databaseURL: "https://key-system-54e4f-default-rtdb.firebaseio.com",
  projectId: "key-system-54e4f",
  storageBucket: "key-system-54e4f.firebasestorage.app",
  messagingSenderId: "59328259414",
  appId: "1:59328259414:web:aaa3188415ebceb12022f7",
  measurementId: "G-SD71Z2KVPC"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
