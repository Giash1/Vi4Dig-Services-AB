document.addEventListener('DOMContentLoaded', () => {
    fetch('nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('main-nav').innerHTML = data;
        });
});
