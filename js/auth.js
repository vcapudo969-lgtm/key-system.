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
  try {
    const email = registerEmail.value;
    const password = registerPassword.value;

    const cred = await createUserWithEmailAndPassword(auth, email, password);

    await setDoc(doc(db, "users", cred.user.uid), {
      email,
      role: email === ADMIN_EMAIL ? "admin" : "user",
      credits: 100,
      createdAt: new Date()
    });

    window.location.href = "dashboard.html";
  } catch (error) {
    msg.innerText = error.message;
  }
};

window.login = async function () {
  try {
    await signInWithEmailAndPassword(
      auth,
      loginEmail.value,
      loginPassword.value
    );

    window.location.href = "dashboard.html";
  } catch (error) {
    msg.innerText = error.message;
  }
};
