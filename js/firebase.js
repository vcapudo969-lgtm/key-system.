import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB4uXZEikg_YVU85Oo89J0NQRpZkfjkdQI",
  authDomain: "key-system-39e11.firebaseapp.com",
  projectId: "key-system-39e11",
  storageBucket: "key-system-39e11.appspot.com",
  messagingSenderId: "1027153056618",
  appId: "1:1027153056618:web:0fb78d2e497a220328cb13",
  measurementId: "G-WJFSPYLFJ5"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
