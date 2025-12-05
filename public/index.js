// Function to load HTML content into a specific element
function loadHTML(section, filePath, cssPath, jsPath) {
    // Load CSS if provided
    if (cssPath) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = cssPath;
        document.head.appendChild(link);
    }

    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(section).innerHTML = data;
            
            // Load JavaScript if provided, ensuring it runs AFTER HTML is inserted
            if (jsPath) {
                const script = document.createElement('script');
                script.src = jsPath;
                document.body.appendChild(script);
            }
        })
        .catch(err => console.error(`Error loading ${filePath}:`, err));
}

// Load the different sections with their respective CSS and JS
loadHTML('heading', './heading/heading.html', './heading/heading.css', './heading/heading.js');
loadHTML('nav', './nav/nav.html', './nav/nav.css', './nav/nav.js');
loadHTML('main', './main/main.html', './main/main.css', './main/main.js');
loadHTML('footer', './footer/footer.html', './footer/footer.css', './footer/footer.js');
