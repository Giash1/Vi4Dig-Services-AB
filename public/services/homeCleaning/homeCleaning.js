function loadHTML(sectionId, filePath, cssPath, jsPath) {
    // Load the CSS file first, if provided
    if (cssPath) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = cssPath;
        document.head.appendChild(link);
    }

    // Load the HTML content
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Cannot load file: ${filePath}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(sectionId).innerHTML = data;

            // Load the associated JavaScript, if provided, after HTML is loaded
            if (jsPath) {
                const script = document.createElement('script');
                script.src = jsPath;
                document.body.appendChild(script);
            }
        })
        .catch(err => console.error(err));
}

// Load the header, navigation, and footer with correct paths, CSS, and JS files
loadHTML('heading', '../../heading/heading.html', '../../heading/heading.css', '../../heading/heading.js');
loadHTML('nav', '../../nav/nav.html', '../../nav/nav.css', '../../nav/nav.js');
loadHTML('footer', '../../footer/footer.html', '../../footer/footer.css', '../../footer/footer.js');
