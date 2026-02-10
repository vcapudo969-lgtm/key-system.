import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAAOIbO-iUWQgjtIDtuwjUS2ViMoVo4Csc",
  authDomain: "key-system-54e4f.firebaseapp.com",
  projectId: "key-system-54e4f",
  storageBucket: "key-system-54e4f.appspot.com",
  messagingSenderId: "59328259414",
  appId: "1:59328259414:web:aaa3188415ebceb12022f7"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
