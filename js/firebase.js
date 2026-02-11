import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "SUA_API_AQUI",
  authDomain: "key-system-39e11",
  projectId: "key-system-39e11",
  storageBucket: "https://key-system-39e11.firebasestorage.app",
  messagingSenderId: "1027153056618",
  appId: "1:1027153056618:web:0fb78d2e497a220328cb13",
measurementld: "G-WJFSPYLFJ5"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
