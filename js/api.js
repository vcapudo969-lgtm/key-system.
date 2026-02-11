import { db } from "./firebase.js";
import {
  collection,
  query,
  where,
  getDocs
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

window.validateKey = async function () {
  const q = query(
    collection(db, "keys"),
    where("code", "==", keyInput.value),
    where("active", "==", true)
  );

  const snap = await getDocs(q);

  if (snap.empty) {
    result.innerText = "Key inválida";
  } else {
    result.innerText = "Key válida ✅";
  }
};
