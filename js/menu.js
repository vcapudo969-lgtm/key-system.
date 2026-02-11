import { auth, db } from "./firebase.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
import { signOut } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

auth.onAuthStateChanged(async (user) => {
  if (!user) {
    window.location.href = "index.html";
    return;
  }

  const snap = await getDoc(doc(db, "users", user.uid));
  const data = snap.data();

  menuUser.innerText = user.email;
  menuCredits.innerText = data.credits;
});

window.logout = async function () {
  await signOut(auth);
  window.location.href = "index.html";
};
