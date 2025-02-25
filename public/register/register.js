// filepath: /c:/Users/giash/OneDrive/Documents/Vi4dig/Vi4Dig-Services-AB/public/register/register.js
document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.querySelector('#register-form');

    registerForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

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
                alert('Registration successful!');
                // Redirect to login page or perform other actions
                window.location.href = '../login/login.html';
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Registration failed: ' + error.message);
            });
    });
});

// Test each loadHTML call individually
loadHTML('heading', '../../heading/heading.html', '../../heading/heading.css', '../../heading/heading.js');
loadHTML('nav', '../../nav/nav.html', '../../nav/nav.css', '../../nav/nav.js');
loadHTML('footer', '../../footer/footer.html', '../../footer/footer.css', '../../footer/footer.js');