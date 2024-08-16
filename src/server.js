const app = require('./app'); // Import the Express app

const PORT = process.env.PORT || 3000; // Use environment port or default to 3000

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
