import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";

// web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCNFlfzO1EPzfrB2UNXydMq0Jo28yFeyis",
    authDomain: "vi4digserviceab-50311.firebaseapp.com",
    projectId: "vi4digserviceab-50311",
    storageBucket: "vi4digserviceab-50311.firebasestorage.app",
    messagingSenderId: "511149050934",
    appId: "1:511149050934:web:9d95a75003aa9cd22a5c97",
    measurementId: "G-JV1ESF2NP5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.querySelector('#register-form');

    registerForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // User registered successfully
                const user = userCredential.user;
                // Set the display name
                updateProfile(user, {
                    displayName: username
                }).then(() => {
                    console.log('Display name set to:', username);
                    alert('Registration successful!');
                    // Redirect to login page or perform other actions
                    window.location.href = '../login/login.html';
                }).catch((error) => {
                    console.error('Error updating profile:', error);
                    alert('Registration failed: ' + error.message);
                });
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Registration failed: ' + error.message);
            });
    });
});