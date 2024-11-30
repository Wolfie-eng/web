// Import des fonctions Firebase nécessaires
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

// Configuration de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAOIWA0qT6hTYmcKwKibmQgLt-7YxP9O8k",
    authDomain: "quotes-d9dd3.firebaseapp.com",
    projectId: "quotes-d9dd3",
    storageBucket: "quotes-d9dd3.appspot.com",
    messagingSenderId: "375897577894",
    appId: "1:375897577894:web:b077ee121003d197cc9767",
    measurementId: "G-43P1W9K77K"
};

// Initialisation Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Gestion de la connexion
const loginForm = document.getElementById('loginForm');
const adminSection = document.getElementById('adminSection');
const loginSection = document.getElementById('loginSection');

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("Utilisateur connecté :", userCredential.user);

        // Affiche la section admin et masque la section connexion
        adminSection.style.display = 'block';
        loginSection.style.display = 'none';
    } catch (error) {
        console.error("Erreur de connexion :", error.message);
        alert("Identifiants incorrects !");
    }
});

// Déconnexion
function logout() {
    signOut(auth).then(() => {
        console.log("Utilisateur déconnecté");
        adminSection.style.display = 'none';
        loginSection.style.display = 'block';
    }).catch((error) => {
        console.error("Erreur lors de la déconnexion :", error.message);
    });
}

// Suivi de l'état de connexion
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("Utilisateur connecté :", user);
        adminSection.style.display = 'block';
        loginSection.style.display = 'none';
    } else {
        console.log("Aucun utilisateur connecté");
        adminSection.style.display = 'none';
        loginSection.style.display = 'block';
    }
});
