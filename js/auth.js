import { auth, db } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

import {
  doc,
  setDoc
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const ADMIN_EMAIL = "seuemail@gmail.com";

window.register = async function () {
  const email = email.value;
  const password = password.value;

  const cred = await createUserWithEmailAndPassword(auth, email, password);

  await setDoc(doc(db, "users", cred.user.uid), {
    email,
    role: email === ADMIN_EMAIL ? "admin" : "user",
    credits: 100,
    refCode: Math.random().toString(36).substring(2,8),
    createdAt: new Date()
  });

  window.location.href = "dashboard.html";
};

window.login = async function () {
  await signInWithEmailAndPassword(auth, email.value, password.value);
  window.location.href = "dashboard.html";
};
