import { auth, db } from "./firebase.js";
import { collection, getDocs, updateDoc, doc } from
"https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

auth.onAuthStateChanged(async user => {
  if (!user) location.href = "index.html";

  const usersSnap = await getDocs(collection(db, "users"));
  usersSnap.forEach(u => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${u.data().email}
      <button onclick="addCredit('${u.id}')">+10 créditos</button>
    `;
    users.appendChild(li);
  });
});

window.addCredit = async id => {
  const ref = doc(db, "users", id);
  await updateDoc(ref, { credits: 10 });
  alert("Créditos adicionados");
};

window.logout = () => {
  auth.signOut();
  location.href = "index.html";
};
