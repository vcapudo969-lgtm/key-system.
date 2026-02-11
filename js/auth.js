// js/auth.js
import { auth, db } from "./firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { doc, setDoc, Timestamp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

// Registrar usuário
export async function register(email, password) {
    try {
        // Criar usuário no Auth
        await createUserWithEmailAndPassword(auth, email, password);

        // Criar documento no Firestore
        await setDoc(doc(db, "users", email), {
            email: email,
            credits: 0,
            role: "user",
            createdAt: Timestamp.now()
        });

        alert("Registrado com sucesso!");
        window.location.reload();
    } catch (e) {
        alert("Erro ao registrar: " + e.message);
    }
}

// Login
export async function login(email, password) {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        window.location.href = "dashboard.html";
    } catch (e) {
        alert("Erro ao logar: " + e.message);
    }
}
