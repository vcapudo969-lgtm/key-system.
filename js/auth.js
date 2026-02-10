import { auth, db } from "./firebase.js";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from
"https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { doc, setDoc, getDoc } from
"https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

window.login = async () => {
  const email = email.value;
  const password = password.value;

  const res = await signInWithEmailAndPassword(auth, email, password);
  const snap = await getDoc(doc(db, "users", res.user.uid));

  if (snap.data().role === "admin") {
    location.href = "admin.html";
  } else {
    location.href = "dashboard.html";
  }
};

window.register = async () => {
  const res = await createUserWithEmailAndPassword(auth, email.value, password.value);
  await setDoc(doc(db, "users", res.user.uid), {
    email: email.value,
    credits: 0,
    role: "user"
  });
  location.href = "dashboard.html";
};
