import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-analytics.js";
import { GoogleAuthProvider } from "firebase/auth";
import firebase from "firebase/compat/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const provider = new GoogleAuthProvider();



const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

  document.addEventListener("DOMContentLoaded", event => {
    const app = firebase();

});

function loginGoogle(){
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
}

window.onload = function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        loginPassword(event);
    });
}

function loginPassword(){
    //const auth = getAuth();

    const login_email = document.getElementById('login-email').value;
    const password = document.getElementById('user_password').value;

    signInWithEmailAndPassword(login_email, password)
    
    window.location.href = 'main_webpage.html'; 
}
/*
window.onload = function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        login(event);
    });
}

function login(event) {
    event.preventDefault(); 

    const username = document.getElementById('name').value;
    const password = document.getElementById('user_password').value;
    
    if (username === 'admin' && password === '12345') {
        window.location.href = 'main_webpage.html'; 
    } else {
        alert('Invalid credentials. Please try again.');
    }
}
*/
window.onload = function() {
    const registrationForm = document.getElementById('registrationForm');

    registrationForm.addEventListener('submit', function(event) {
        registration(event);
    });
}

async function registration(event) {
    event.preventDefault();

    const username = document.getElementById('name').value;
    const gmail = document.getElementById('user_email').value;
    const password = document.getElementById('user_password').value;

    try {
        const docRef = await addDoc(collection(db, "users"), {
            name: username,
            gmail: gmail,
            password: password
        });

        console.log("Document written with ID: ", docRef.id);

        window.location.href = 'main_webpage.html';
    } catch (error) {
        console.error("Error adding document: ", error);
    }
}




