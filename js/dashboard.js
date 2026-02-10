import { auth, db } from "./firebase.js";
import { collection, addDoc, getDocs, doc, getDoc, updateDoc } from
"https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
import { createKey } from "./keys.js";

auth.onAuthStateChanged(async user => {
  if (!user) location.href = "index.html";

  const ref = doc(db, "users", user.uid);
  const snap = await getDoc(ref);
  credits.innerText = "Créditos: " + snap.data().credits;
});

window.generateKey = async () => {
  const user = auth.currentUser;
  const userRef = doc(db, "users", user.uid);
  const snap = await getDoc(userRef);

  if (snap.data().credits <= 0) {
    alert("Sem créditos");
    return;
  }

  await updateDoc(userRef, {
    credits: snap.data().credits - 1
  });

  await addDoc(collection(db, "keys"), {
    key: createKey(),
    userId: user.uid,
    createdAt: Date.now(),
    paused: false
  });

  alert("Key gerada");
};

window.logout = () => {
  auth.signOut();
  location.href = "index.html";
};
