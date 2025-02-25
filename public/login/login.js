document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('#login-form');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // User logged in successfully
                const user = userCredential.user;
                alert('Login successful!');
                // Redirect to another page or perform other actions
                window.location.href = '../dashboard/dashboard.html'; // Change this to your desired page
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Login failed: ' + error.message);
            });
    });
});

// Test each loadHTML call individually
loadHTML('heading', '../../heading/heading.html', '../../heading/heading.css', '../../heading/heading.js');
loadHTML('nav', '../../nav/nav.html', '../../nav/nav.css', '../../nav/nav.js');
loadHTML('footer', '../../footer/footer.html', '../../footer/footer.css', '../../footer/footer.js');