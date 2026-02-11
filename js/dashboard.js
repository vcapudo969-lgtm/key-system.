import { auth, db } from "./firebase.js";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  doc,
  updateDoc,
  getDoc,
  increment
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

window.generateKey = async function (days) {
  const user = auth.currentUser;
  const userRef = doc(db, "users", user.uid);
  const userSnap = await getDoc(userRef);
  const userData = userSnap.data();

  if (userData.credits <= 0) {
    alert("Sem créditos");
    return;
  }

  const now = new Date();
  const expire = new Date();
  expire.setDate(now.getDate() + days);

  const key = "KEY-" + Math.random().toString(36).substring(2,10).toUpperCase();

  await addDoc(collection(db, "keys"), {
    code: key,
    uid: user.uid,
    createdAt: now,
    expiresAt: expire,
    active: true
  });

  await updateDoc(userRef, {
    credits: increment(-1)
  });

  loadKeys();
};

async function loadKeys() {
  const user = auth.currentUser;
  const q = query(collection(db, "keys"), where("uid", "==", user.uid));
  const snap = await getDocs(q);

  keys.innerHTML = "";

  snap.forEach(doc => {
    const data = doc.data();
    keys.innerHTML += `
      <div class="key-card">
        <b>${data.code}</b><br>
        Expira: ${data.expiresAt.toDate().toLocaleString()}
      </div>
    `;
  });
}

auth.onAuthStateChanged(user => {
  if (user) loadKeys();
});
