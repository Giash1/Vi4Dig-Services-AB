function loadHTML(section, filePath, cssPath, jsPath) {
    console.log(`Attempting to load ${filePath} into section #${section}`);

    // Load CSS if provided
    if (cssPath) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = cssPath;
        document.head.appendChild(link);
    }

    // Fetch the HTML content and insert it into the specified section
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${filePath}, status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(section).innerHTML = data;
            console.log(`Loaded ${filePath} successfully`);

            // Load JavaScript if provided
            if (jsPath) {
                const script = document.createElement('script');
                script.src = jsPath;
                document.body.appendChild(script);
                console.log(`Loaded script ${jsPath}`);
            }
        })
        .catch(err => {
            console.error(`Error loading ${filePath}:`, err);
            alert(`Error loading ${filePath}: ${err.message}`);
        });
}

// Test each loadHTML call individually
loadHTML('heading', '../heading/heading.html', '../heading/heading.css', '../heading/heading.js');
loadHTML('nav', '../nav/nav.html', '../nav/nav.css', '../nav/nav.js');
loadHTML('footer', '../footer/footer.html', '../footer/footer.css', '../footer/footer.js');
