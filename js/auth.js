import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut }
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc }
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB4uXZEikg_YVU85Oo89J0NQRpZkfjkdQI",
  authDomain: "key-system-39e11.firebaseapp.com",
  projectId: "key-system-39e11",
  storageBucket: "key-system-39e11.appspot.com",
  messagingSenderId: "1027153056618",
  appId: "1:1027153056618:web:0fb78d2e497a220328cb13",
  measurementId: "G-WJFSPYLFJ5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// LOGIN
window.login = async function() {
  const email = loginEmail.value;
  const password = loginPassword.value;
  const msg = document.getElementById("msg");

  try {
    await signInWithEmailAndPassword(auth, email, password);
    msg.style.color = "#00ff88";
    msg.innerText = "Login realizado!";
    setTimeout(()=> window.location.href="dashboard.html", 800);
  } catch (error) {
    msg.style.color = "#f87171";
    msg.innerText = error.message;
  }
};

// REGISTRO
window.register = async function() {
  const email = registerEmail.value;
  const password = registerPassword.value;
  const msg = document.getElementById("msg");

  try {
    const cred = await createUserWithEmailAndPassword(auth, email, password);

    await setDoc(doc(db, "users", cred.user.uid), {
      email: email,
      role: "user",
      credits: 50,
      createdAt: new Date()
    });

    msg.style.color = "#00ff88";
    msg.innerText = "Conta criada!";
    setTimeout(()=> window.location.href="dashboard.html", 800);

  } catch (error) {
    msg.style.color = "#f87171";
    msg.innerText = error.message;
  }
};

// BLOQUEIO AUTOMÁTICO SE JÁ LOGADO
onAuthStateChanged(auth, (user) => {
  if(user && window.location.pathname.includes("index")){
    window.location.href="dashboard.html";
  }
});

// LOGOUT
window.logout = async function(){
  await signOut(auth);
  window.location.href="index.html";
};
