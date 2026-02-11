import { auth, db } from "./firebase.js";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import {
  doc,
  setDoc,
  getDoc
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

window.login = async () => {
  try {
    const emailInput = document.getElementById("email").value;
    const passwordInput = document.getElementById("password").value;

    const res = await signInWithEmailAndPassword(
      auth,
      emailInput,
      passwordInput
    );

    const snap = await getDoc(doc(db, "users", res.user.uid));

    if (!snap.exists()) {
      alert("Usuário não encontrado no banco");
      return;
    }

    if (snap.data().role === "admin") {
      window.location.href = "admin.html";
    } else {
      window.location.href = "dashboard.html";
    }

  } catch (err) {
    alert("Erro no login: " + err.message);
  }
};

window.register = async () => {
  try {
    const emailInput = document.getElementById("email").value;
    const passwordInput = document.getElementById("password").value;

    const res = await createUserWithEmailAndPassword(
      auth,
      emailInput,
      passwordInput
    );

    await setDoc(doc(db, "users", res.user.uid), {
      email: emailInput,
      credits: 0,
      role: "user"
    });

    window.location.href = "dashboard.html";

  } catch (err) {
    alert("Erro no registro: " + err.message);
  }
};
